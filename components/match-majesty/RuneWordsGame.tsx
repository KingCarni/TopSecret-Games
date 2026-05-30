"use client";
import { useEffect, useMemo, useState } from "react";
import { RegalButton } from "./UI";

interface RuneWordsProps {
  onBack: () => void;
}

/** A small curated dictionary themed to the game. Lowercase. */
const WORD_LIST = new Set([
  "crown", "regal", "throne", "knight", "shield", "sword", "magic", "spell",
  "rune", "runes", "moon", "star", "stars", "gem", "gems", "ruby", "pearl",
  "amber", "sapphire", "emerald", "topaz", "kingdom", "tower", "castle",
  "owl", "dragon", "forest", "river", "stone", "wood", "cloth", "gold",
  "wind", "fire", "ice", "tide", "song", "myth", "fae", "elf", "elves",
  "dark", "light", "dawn", "dusk", "twilight", "majesty", "match", "cascade",
  "spark", "flame", "frost", "rose", "thorn", "vine", "leaf", "oak", "ash",
  "wand", "robe", "armor", "blade", "arrow", "bow", "harp", "lyre",
  "quest", "vow", "oath", "rite", "tomb", "vault", "key", "lock",
  "ember", "amethyst",
]);

const LETTER_POOL_SIZE = 9;
const ROUND_SECONDS = 60;

interface Letter {
  id: number;
  ch: string;
  used: boolean;
}

function randomLetters(): Letter[] {
  // Weighted to vowels for playability
  const vowels = "AEIOU";
  const cons = "BCDFGHKLMNPRSTW";
  const letters: Letter[] = [];
  for (let i = 0; i < LETTER_POOL_SIZE; i++) {
    const useVowel = i < 4 ? Math.random() < 0.75 : Math.random() < 0.35;
    const ch = useVowel
      ? vowels[Math.floor(Math.random() * vowels.length)]
      : cons[Math.floor(Math.random() * cons.length)];
    letters.push({ id: i, ch, used: false });
  }
  return letters;
}

export function RuneWordsGame({ onBack }: RuneWordsProps) {
  const [letters, setLetters] = useState<Letter[]>(() => randomLetters());
  const [picked, setPicked] = useState<number[]>([]); // letter ids in order
  const [score, setScore] = useState(0);
  const [solved, setSolved] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [feedback, setFeedback] = useState<{ kind: "good" | "bad"; text: string } | null>(null);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [running]);

  const currentWord = useMemo(
    () =>
      picked
        .map((id) => letters.find((l) => l.id === id)?.ch ?? "")
        .join(""),
    [picked, letters]
  );

  const pickLetter = (id: number) => {
    if (!running) return;
    const l = letters.find((x) => x.id === id);
    if (!l || l.used) return;
    if (picked.includes(id)) return;
    setPicked((p) => [...p, id]);
  };

  const clearPicks = () => {
    setPicked([]);
  };

  const submit = () => {
    if (!running) return;
    if (currentWord.length < 3) {
      setFeedback({ kind: "bad", text: "Need 3+ runes" });
      window.setTimeout(() => setFeedback(null), 1200);
      return;
    }
    const lower = currentWord.toLowerCase();
    if (solved.includes(lower)) {
      setFeedback({ kind: "bad", text: "Already spelled" });
      window.setTimeout(() => setFeedback(null), 1200);
      return;
    }
    if (WORD_LIST.has(lower)) {
      const points = currentWord.length * 10 + (currentWord.length >= 5 ? 30 : 0);
      setScore((s) => s + points);
      setSolved((arr) => [lower, ...arr].slice(0, 12));
      setFeedback({ kind: "good", text: `+${points} • ${lower}` });
      // Consume the used letters
      const ids = new Set(picked);
      setLetters((prev) =>
        prev.map((l) => (ids.has(l.id) ? { ...l, used: true } : l))
      );
      setPicked([]);
      // Refill consumed letters with new random ones (keep pool size)
      window.setTimeout(() => {
        setLetters((prev) =>
          prev.map((l) =>
            l.used
              ? {
                  id: l.id,
                  ch: Math.random() < 0.45
                    ? "AEIOU"[Math.floor(Math.random() * 5)]
                    : "BCDFGHKLMNPRSTW"[Math.floor(Math.random() * 15)],
                  used: false,
                }
              : l
          )
        );
      }, 400);
      window.setTimeout(() => setFeedback(null), 1500);
    } else {
      setFeedback({ kind: "bad", text: "Not in scroll" });
      window.setTimeout(() => setFeedback(null), 1200);
    }
  };

  const restart = () => {
    setLetters(randomLetters());
    setPicked([]);
    setScore(0);
    setSolved([]);
    setTimeLeft(ROUND_SECONDS);
    setFeedback(null);
    setRunning(true);
  };

  return (
    <div className="relative w-full h-full overflow-hidden mm-rune-bg">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-4 flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.4em] text-amber-200/80 font-semibold">
            Mini-Game
          </div>
          <h2 className="font-[Cormorant_Garamond] text-3xl font-bold text-white mt-1">
            Rune Words
          </h2>
        </div>
        <RegalButton variant="ghost" onClick={onBack} data-testid="rune-words-back-button">
          ← Back to Town
        </RegalButton>
      </div>

      <div className="absolute inset-0 pt-24 pb-10 px-10 flex flex-col items-center gap-4">
        {/* HUD */}
        <div className="flex gap-3">
          <Stat label="Time" value={`${timeLeft}s`} accent={timeLeft <= 10 ? "#F87171" : "#F2D57E"} testid="rune-time" />
          <Stat label="Score" value={score} accent="#F2D57E" testid="rune-score" />
          <Stat label="Words" value={solved.length} accent="#34D399" testid="rune-words-count" />
        </div>

        {/* Current word + feedback */}
        <div
          className="mt-2 min-h-[70px] flex items-center justify-center"
          aria-live="polite"
        >
          {feedback ? (
            <div
              className={`px-5 py-2 rounded-full font-[Cormorant_Garamond] text-2xl font-bold tracking-wide ${
                feedback.kind === "good"
                  ? "bg-emerald-500/20 border border-emerald-400/60 text-emerald-200"
                  : "bg-rose-500/20 border border-rose-400/60 text-rose-200"
              }`}
              data-testid="rune-feedback"
            >
              {feedback.text}
            </div>
          ) : (
            <div className="px-5 py-2 rounded-full bg-[rgba(20,15,30,0.6)] border border-amber-300/30 min-w-[160px] text-center" data-testid="rune-current-word">
              <span className="font-[Cormorant_Garamond] text-3xl font-bold tracking-[0.18em] text-amber-200">
                {currentWord || "—"}
              </span>
            </div>
          )}
        </div>

        {/* Letter pool */}
        <div className="flex flex-wrap gap-3 justify-center max-w-[640px]">
          {letters.map((l) => {
            const isPicked = picked.includes(l.id);
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => pickLetter(l.id)}
                disabled={l.used || !running}
                data-testid={`rune-letter-${l.id}`}
                className={`w-16 h-16 rounded-xl font-[Cormorant_Garamond] text-3xl font-bold transition-all duration-150 ${
                  isPicked
                    ? "scale-90 opacity-50"
                    : "hover:-translate-y-1 hover:scale-105"
                }`}
                style={{
                  background: l.used
                    ? "rgba(30,20,40,0.4)"
                    : "linear-gradient(180deg, #F4E7CE 0%, #D8B879 100%)",
                  border: "2px solid #8C5E35",
                  color: l.used ? "rgba(255,255,255,0.2)" : "#2c1e16",
                  boxShadow: l.used
                    ? "inset 0 0 8px rgba(0,0,0,0.4)"
                    : "inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 14px rgba(0,0,0,0.5)",
                  cursor: l.used || !running ? "not-allowed" : "pointer",
                }}
              >
                {l.ch}
              </button>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-2">
          <RegalButton
            variant="ghost"
            size="sm"
            onClick={clearPicks}
            disabled={!picked.length || !running}
            data-testid="rune-clear-button"
          >
            Clear
          </RegalButton>
          <RegalButton
            variant="primary"
            size="md"
            onClick={submit}
            disabled={!picked.length || !running}
            data-testid="rune-submit-button"
          >
            Cast Spell
          </RegalButton>
        </div>

        {/* Solved list */}
        {solved.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 justify-center max-w-[640px]">
            {solved.map((w) => (
              <span
                key={w}
                className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-300/30 text-emerald-200 text-xs font-bold uppercase tracking-[0.18em]"
              >
                {w}
              </span>
            ))}
          </div>
        )}

        {/* Game over overlay */}
        {!running && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm" data-testid="rune-gameover">
            <div className="text-center px-8 py-8 rounded-xl text-[#2c1e16]"
              style={{
                background: "linear-gradient(180deg, #F4E7CE 0%, #E8D4AC 100%)",
                border: "6px solid #8C5E35",
                boxShadow: "0 14px 40px rgba(0,0,0,0.6)",
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#5A4433]">Round Over</div>
              <h3 className="mt-1 font-[Cormorant_Garamond] text-4xl font-bold">
                {solved.length} Words · {score} Score
              </h3>
              <div className="mt-5 flex gap-3 justify-center">
                <RegalButton onClick={restart} data-testid="rune-restart-button">Play Again</RegalButton>
                <RegalButton variant="ghost" onClick={onBack} data-testid="rune-quit-button">Quit</RegalButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  accent = "#F2D57E",
  testid,
}: {
  label: string;
  value: React.ReactNode;
  accent?: string;
  testid?: string;
}) {
  return (
    <div
      className="rounded-2xl border border-amber-300/20 bg-[rgba(20,15,30,0.6)] backdrop-blur-md px-4 py-2.5"
      style={{ boxShadow: "0 4px 18px rgba(0,0,0,0.55)" }}
      data-testid={testid}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: accent + "C0" }}>
        {label}
      </div>
      <div className="text-xl font-bold tabular-nums text-white">{value}</div>
    </div>
  );
}
