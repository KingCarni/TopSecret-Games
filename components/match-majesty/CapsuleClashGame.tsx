"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { RegalButton } from "./UI";
import { GemVisual } from "./GemVisual";
import { GEM_TYPES, GemType } from "@/lib/match-majesty/types";

interface CapsuleClashProps {
  onBack: () => void;
}

const ROUND_SECONDS = 30;
const PADS = 6; // number of capsules in the row to choose from

/** Pick a random gem type */
function randomType(): GemType {
  return GEM_TYPES[Math.floor(Math.random() * GEM_TYPES.length)];
}

interface RoundState {
  target: GemType;
  pads: GemType[];
}

function newRound(): RoundState {
  const target = randomType();
  // Shuffle a pads array that contains target + 5 others (with some repeats allowed)
  const pads: GemType[] = [target];
  while (pads.length < PADS) pads.push(randomType());
  for (let i = pads.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pads[i], pads[j]] = [pads[j], pads[i]];
  }
  return { target, pads };
}

export function CapsuleClashGame({ onBack }: CapsuleClashProps) {
  const [round, setRound] = useState<RoundState>(() => newRound());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [running, setRunning] = useState(true);
  const [flash, setFlash] = useState<{ kind: "hit" | "miss"; idx: number } | null>(null);
  const flashTimer = useRef<number | null>(null);

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

  const showFlash = useCallback((kind: "hit" | "miss", idx: number) => {
    if (flashTimer.current) window.clearTimeout(flashTimer.current);
    setFlash({ kind, idx });
    flashTimer.current = window.setTimeout(() => setFlash(null), 280);
  }, []);

  const tap = (idx: number) => {
    if (!running) return;
    const correct = round.pads[idx] === round.target;
    if (correct) {
      const bonus = Math.min(50, streak * 5);
      const earned = 20 + bonus;
      setScore((s) => s + earned);
      setStreak((k) => k + 1);
      setHits((h) => h + 1);
      showFlash("hit", idx);
      setRound(newRound());
    } else {
      setStreak(0);
      setMisses((m) => m + 1);
      setScore((s) => Math.max(0, s - 5));
      showFlash("miss", idx);
    }
  };

  const restart = () => {
    setRound(newRound());
    setScore(0);
    setStreak(0);
    setHits(0);
    setMisses(0);
    setTimeLeft(ROUND_SECONDS);
    setRunning(true);
    setFlash(null);
  };

  return (
    <div className="relative w-full h-full overflow-hidden mm-capsule-bg">
      <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-4 flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.4em] text-amber-200/80 font-semibold">
            Mini-Game
          </div>
          <h2 className="font-[Cormorant_Garamond] text-3xl font-bold text-white mt-1">
            Capsule Clash
          </h2>
        </div>
        <RegalButton variant="ghost" onClick={onBack} data-testid="capsule-back-button">
          ← Back to Town
        </RegalButton>
      </div>

      <div className="absolute inset-0 pt-24 pb-10 px-10 flex flex-col items-center gap-6">
        {/* HUD */}
        <div className="flex gap-3" data-testid="capsule-hud">
          <Stat label="Time" value={`${timeLeft}s`} accent={timeLeft <= 6 ? "#F87171" : "#F2D57E"} testid="capsule-time" />
          <Stat label="Score" value={score} accent="#F2D57E" testid="capsule-score" />
          <Stat label="Streak" value={`x${streak}`} accent="#34D399" testid="capsule-streak" />
          <Stat label="Hits" value={hits} accent="#A78BFA" testid="capsule-hits" />
        </div>

        {/* Prompt */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <div className="text-[11px] uppercase tracking-[0.32em] text-amber-200/80 font-semibold">
            Tap the matching capsule
          </div>
          <div
            className="flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,15,30,0.7) 0%, rgba(8,6,20,0.7) 100%)",
              border: "2px solid rgba(242,213,126,0.35)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
            data-testid="capsule-target"
            data-target-gem={round.target}
          >
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-white/70">
              Target
            </span>
            <GemVisual type={round.target} size={56} />
          </div>
        </div>

        {/* Pads */}
        <div className="grid grid-cols-6 gap-4 mt-2" data-testid="capsule-pads">
          {round.pads.map((g, i) => {
            const isFlashed = flash?.idx === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => tap(i)}
                disabled={!running}
                data-testid={`capsule-pad-${i}`}
                data-pad-gem={g}
                className={`relative w-24 h-24 rounded-2xl transition-all duration-150 ${
                  isFlashed
                    ? flash?.kind === "hit"
                      ? "ring-4 ring-emerald-400/80 scale-110"
                      : "ring-4 ring-rose-500/80 mm-shake-x"
                    : "hover:-translate-y-1 hover:scale-105"
                }`}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(244,231,206,0.95) 0%, rgba(216,184,121,0.95) 100%)",
                  border: "3px solid #8C5E35",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.6), 0 6px 18px rgba(0,0,0,0.5)",
                  cursor: running ? "pointer" : "not-allowed",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <GemVisual type={g} size={60} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Game over */}
        {!running && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm" data-testid="capsule-gameover">
            <div
              className="text-center px-8 py-8 rounded-xl text-[#2c1e16]"
              style={{
                background: "linear-gradient(180deg, #F4E7CE 0%, #E8D4AC 100%)",
                border: "6px solid #8C5E35",
                boxShadow: "0 14px 40px rgba(0,0,0,0.6)",
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#5A4433]">Round Over</div>
              <h3 className="mt-1 font-[Cormorant_Garamond] text-4xl font-bold">
                {score} pts
              </h3>
              <div className="mt-2 text-sm text-[#5A4433]">
                {hits} hits · {misses} misses
              </div>
              <div className="mt-5 flex gap-3 justify-center">
                <RegalButton onClick={restart} data-testid="capsule-restart-button">Play Again</RegalButton>
                <RegalButton variant="ghost" onClick={onBack} data-testid="capsule-quit-button">Quit</RegalButton>
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
