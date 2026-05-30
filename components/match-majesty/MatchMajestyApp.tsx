"use client";
import { useEffect, useState } from "react";
import { TitleScreen } from "./TitleScreen";
import { GameScreen } from "./GameScreen";
import { MapScreen } from "./MapScreen";
import { TownScreen, TownView } from "./TownScreen";
import { RuneWordsGame } from "./RuneWordsGame";
import { CapsuleClashGame } from "./CapsuleClashGame";
import { SettingsModal } from "./SettingsModal";
import { WinLoseModal } from "./WinLoseModal";
import { LEVELS } from "@/lib/match-majesty/levels";
import { GameSettings, Level, Resources } from "@/lib/match-majesty/types";
import { ALL_LEVELS, addResources, useGame } from "@/lib/match-majesty/useGame";

type Screen = "title" | "game" | "map" | "town";

const STORAGE_KEY = "match-majesty-progress-v1";

interface Progress {
  unlockedLevelIds: number[];
  completedLevelIds: number[];
  currentLevelId: number;
  resources: Resources;
  settings: GameSettings;
}

function defaultProgress(): Progress {
  return {
    unlockedLevelIds: [1],
    completedLevelIds: [],
    currentLevelId: 1,
    resources: { stardust: 0, stone: 0, wood: 0, cloth: 0, gold: 0 },
    settings: { sound: true, music: true },
  };
}

function loadProgress(): Progress {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as Progress;
    return { ...defaultProgress(), ...parsed };
  } catch {
    return defaultProgress();
  }
}

function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* ignore quota errors */
  }
}

export function MatchMajestyApp() {
  const [screen, setScreen] = useState<Screen>("title");
  const [townView, setTownView] = useState<TownView>("hub");
  const [showSettings, setShowSettings] = useState(false);
  const [progress, setProgress] = useState<Progress>(() => defaultProgress());
  const [activeLevel, setActiveLevel] = useState<Level>(LEVELS[0]);
  const [hydrated, setHydrated] = useState(false);

  // hydrate from localStorage after mount (avoid SSR/CSR mismatch)
  useEffect(() => {
    const p = loadProgress();
    setProgress(p);
    setActiveLevel(LEVELS[(p.currentLevelId || 1) - 1] || LEVELS[0]);
    setHydrated(true);
  }, []);

  // persist progress on every change after hydration
  useEffect(() => {
    if (hydrated) saveProgress(progress);
  }, [progress, hydrated]);

  const { state, selectCell, reset } = useGame(activeLevel);

  // When level changes (or active level swapped), reset the game with that level
  useEffect(() => {
    reset(activeLevel);
  }, [activeLevel, reset]);

  // On WIN: grant rewards, unlock next, mark completed (once)
  useEffect(() => {
    if (state.status !== "won") return;
    setProgress((p) => {
      if (p.completedLevelIds.includes(state.level.id)) return p;
      const nextId = state.level.id + 1;
      const unlocked = p.unlockedLevelIds.includes(nextId) || nextId > ALL_LEVELS.length
        ? p.unlockedLevelIds
        : [...p.unlockedLevelIds, nextId];
      return {
        ...p,
        unlockedLevelIds: unlocked,
        completedLevelIds: [...p.completedLevelIds, state.level.id],
        currentLevelId: Math.min(nextId, ALL_LEVELS.length),
        resources: addResources(p.resources, state.level.reward),
      };
    });
  }, [state.status, state.level]);

  const goTo = (s: Screen) => {
    setScreen(s);
    if (s !== "town") setTownView("hub");
  };
  const handlePlay = () => {
    // Start at the next unfinished unlocked level
    const next =
      progress.unlockedLevelIds
        .map((id) => LEVELS[id - 1])
        .find((l) => l && !progress.completedLevelIds.includes(l.id)) ||
      LEVELS[(progress.unlockedLevelIds[progress.unlockedLevelIds.length - 1] || 1) - 1];
    setActiveLevel(next);
    setScreen("game");
  };
  const handleContinue = () => handlePlay();

  const handleSelectLevel = (level: Level) => {
    setActiveLevel(level);
    setProgress((p) => ({ ...p, currentLevelId: level.id }));
    setScreen("game");
  };

  const handleRetry = () => {
    reset(activeLevel);
  };

  const handleNextLevel = () => {
    const nextId = state.level.id + 1;
    const next = LEVELS[nextId - 1];
    if (next) {
      setActiveLevel(next);
      setProgress((p) => ({ ...p, currentLevelId: next.id }));
    } else {
      setScreen("map");
    }
  };

  const handleToggleSetting = (key: keyof GameSettings) => {
    setProgress((p) => ({ ...p, settings: { ...p.settings, [key]: !p.settings[key] } }));
  };

  const handleResetProgress = () => {
    const fresh = defaultProgress();
    setProgress(fresh);
    setActiveLevel(LEVELS[0]);
    reset(LEVELS[0]);
    setShowSettings(false);
    setScreen("title");
  };

  return (
    <div className="mm-root">
      {/* Inner game window — 1280x800 ratio with letterbox */}
      <div className="mm-window">
        {screen === "title" && (
          <TitleScreen
            onPlay={handlePlay}
            onContinue={handleContinue}
            onSettings={() => setShowSettings(true)}
            hasProgress={progress.completedLevelIds.length > 0 || progress.unlockedLevelIds.length > 1}
          />
        )}
        {screen === "game" && (
          <GameScreen
            state={state}
            resources={progress.resources}
            onCellSelect={selectCell}
            onNav={(s) => goTo(s)}
            onRetry={handleRetry}
            onSettings={() => setShowSettings(true)}
          />
        )}
        {screen === "map" && (
          <MapScreen
            unlockedLevelIds={progress.unlockedLevelIds}
            completedLevelIds={progress.completedLevelIds}
            currentLevelId={progress.currentLevelId}
            onSelectLevel={handleSelectLevel}
            onBack={() => setScreen("game")}
          />
        )}
        {screen === "town" && townView === "hub" && (
          <TownScreen
            onBack={() => goTo("game")}
            onEnterMini={(v) => setTownView(v)}
          />
        )}
        {screen === "town" && townView === "rune-words" && (
          <RuneWordsGame onBack={() => setTownView("hub")} />
        )}
        {screen === "town" && townView === "capsule-clash" && (
          <CapsuleClashGame onBack={() => setTownView("hub")} />
        )}

        <SettingsModal
          open={showSettings}
          settings={progress.settings}
          onToggle={handleToggleSetting}
          onClose={() => setShowSettings(false)}
          onReset={handleResetProgress}
        />

        {screen === "game" && (
          <WinLoseModal
            outcome={state.status === "playing" ? null : state.status}
            score={state.score}
            rewards={state.status === "won" ? state.level.reward : undefined}
            onNextLevel={
              state.status === "won" && LEVELS[state.level.id]
                ? handleNextLevel
                : undefined
            }
            onRetry={handleRetry}
            onMap={() => setScreen("map")}
          />
        )}
      </div>
    </div>
  );
}
