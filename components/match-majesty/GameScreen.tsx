"use client";
import { GemVisual } from "./GemVisual";
import { HudCard, ObjectiveCard, RegalButton, ResourcePill } from "./UI";
import { MatchBoard } from "./MatchBoard";
import { GameState, objectiveProgress } from "@/lib/match-majesty/useGame";
import { GEM_TYPES, Resources, RESOURCE_KEYS } from "@/lib/match-majesty/types";

interface GameScreenProps {
  state: GameState;
  resources: Resources;
  onCellSelect: (r: number, c: number) => void;
  onNav: (screen: "map" | "town") => void;
  onRetry: () => void;
  onSettings: () => void;
}

const LABELS: Record<string, string> = {
  ruby: "Ruby",
  sapphire: "Sapphire",
  emerald: "Emerald",
  topaz: "Topaz",
  amethyst: "Amethyst",
  pearl: "Pearl",
};

export function GameScreen({
  state,
  resources,
  onCellSelect,
  onNav,
  onRetry,
  onSettings,
}: GameScreenProps) {
  const progress = objectiveProgress(state.level, state.collected);

  return (
    <div className="relative w-full h-full overflow-hidden mm-game-bg">
      {/* Top resource bar */}
      <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap" data-testid="resource-bar">
          {RESOURCE_KEYS.map((k) => (
            <ResourcePill key={k} resourceKey={k} amount={resources[k]} />
          ))}
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-[0.32em] text-amber-200/70">
            {state.level.name}
          </div>
        </div>
      </div>

      {/* Main game body */}
      <div className="absolute inset-0 pt-20 pb-24 px-6 grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
        {/* LEFT HUD */}
        <div className="flex flex-col gap-3 max-w-[260px] justify-self-end">
          <HudCard label="Level" value={`${state.level.id}`} testid="hud-level" />
          <HudCard
            label="Score"
            value={state.score.toLocaleString()}
            testid="hud-score"
            accent="#F2D57E"
          />
          <HudCard
            label="Moves"
            value={state.movesLeft}
            testid="hud-moves"
            accent={state.movesLeft <= 5 ? "#F87171" : "#F2D57E"}
          />
          <div className="rounded-2xl border border-amber-300/20 bg-[rgba(20,15,30,0.6)] backdrop-blur-md px-4 py-3 shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
            <div className="text-[10px] uppercase tracking-[0.22em] text-amber-300/70">
              Progress
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                data-testid="progress-bar"
                className="h-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 transition-[width] duration-500"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <div className="mt-1.5 text-[10px] text-white/55 uppercase tracking-[0.18em] flex justify-between">
              <span>Quest</span>
              <span>{Math.round(progress * 100)}%</span>
            </div>
          </div>
        </div>

        {/* BOARD */}
        <div className="flex items-center justify-center">
          <BoardWithSize
            board={state.board}
            selected={state.selected}
            isLocked={state.isLocked}
            invalidSwap={state.invalidSwap}
            onCellSelect={onCellSelect}
          />
        </div>

        {/* RIGHT OBJECTIVES */}
        <div className="flex flex-col gap-3 max-w-[280px]" data-testid="objective-panel">
          <div className="text-[11px] uppercase tracking-[0.32em] text-amber-200/80 font-semibold">
            Royal Decree
          </div>
          <div className="flex flex-col gap-2">
            {state.level.objectives.map((o) => (
              <ObjectiveCard
                key={o.type}
                gemVisual={<GemVisual type={o.type} size={36} />}
                label={LABELS[o.type]}
                current={state.collected[o.type]}
                required={o.required}
              />
            ))}
          </div>

          {/* Collected scoreboard for all 6 (mini) */}
          <div className="mt-2 grid grid-cols-6 gap-1.5 rounded-xl bg-[rgba(20,15,30,0.55)] border border-white/10 backdrop-blur-md p-2">
            {GEM_TYPES.map((t) => (
              <div key={t} className="flex flex-col items-center gap-0.5">
                <GemVisual type={t} size={22} />
                <span className="text-[9px] tabular-nums text-white/70">{state.collected[t]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-6 pb-4 pt-3 flex items-center justify-center gap-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
        <RegalButton variant="ghost" size="sm" data-testid="nav-board" disabled>
          ◆ Board
        </RegalButton>
        <RegalButton
          variant="ghost"
          size="sm"
          onClick={() => onNav("map")}
          data-testid="nav-map"
        >
          ⌖ Map
        </RegalButton>
        <RegalButton
          variant="ghost"
          size="sm"
          onClick={() => onNav("town")}
          data-testid="nav-town"
        >
          ⌂ Town
        </RegalButton>
        <RegalButton variant="secondary" size="sm" onClick={onRetry} data-testid="retry-button">
          ↻ Retry
        </RegalButton>
        <RegalButton
          variant="ghost"
          size="sm"
          onClick={onSettings}
          data-testid="settings-button-game"
        >
          ⚙ Settings
        </RegalButton>
      </div>
    </div>
  );
}

/** Responsive cell sizing wrapper */
function BoardWithSize(props: Omit<React.ComponentProps<typeof MatchBoard>, "cellSize">) {
  return (
    <div className="mm-board-wrap">
      <MatchBoard {...props} cellSize={62} />
    </div>
  );
}
