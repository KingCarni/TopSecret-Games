"use client";
import { RegalButton } from "./UI";
import { Resources, RESOURCE_KEYS } from "@/lib/match-majesty/types";

interface WinLoseModalProps {
  outcome: "won" | "lost" | null;
  score: number;
  rewards?: Partial<Resources>;
  onNextLevel?: () => void;
  onRetry: () => void;
  onMap: () => void;
}

const RES_LABEL: Record<string, string> = {
  stardust: "Stardust",
  stone: "Stone",
  wood: "Wood",
  cloth: "Cloth",
  gold: "Gold",
};
const RES_COLOR: Record<string, string> = {
  stardust: "#A78BFA",
  stone: "#CBD5E1",
  wood: "#D97706",
  cloth: "#38BDF8",
  gold: "#FBBF24",
};

export function WinLoseModal({
  outcome,
  score,
  rewards,
  onNextLevel,
  onRetry,
  onMap,
}: WinLoseModalProps) {
  if (!outcome) return null;
  const won = outcome === "won";
  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm mm-fade-in"
      data-testid={won ? "win-modal" : "lose-modal"}
    >
      <div
        className="relative w-[520px] max-w-[92vw] rounded-xl text-[#2c1e16] p-8 mm-pop-in text-center"
        style={{
          background:
            "linear-gradient(180deg, #F4E7CE 0%, #E8D4AC 100%)",
          border: "6px solid #8C5E35",
          boxShadow: won
            ? "inset 0 0 40px rgba(140,94,53,0.3), 0 0 80px rgba(242,213,126,0.4), 0 14px 40px rgba(0,0,0,0.6)"
            : "inset 0 0 40px rgba(140,94,53,0.3), 0 14px 40px rgba(0,0,0,0.6)",
        }}
      >
        <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#5A4433]">
          {won ? "Victory" : "The Realm Sighs"}
        </div>
        <h2 className="mt-2 font-[Cormorant_Garamond] text-5xl font-bold leading-none">
          {won ? "Crown Earned" : "Try Again"}
        </h2>
        <p className="mt-3 text-sm text-[#5A4433] max-w-md mx-auto">
          {won
            ? "The cascade has bowed to your hand. The kingdom prospers and grants you tribute."
            : "Your moves have ebbed. Rally your wits and let the gems sing again."}
        </p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-[#E8D4AC]/70 border-2 border-[#8C5E35]/40 px-5 py-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#5A4433]">
            Final Score
          </span>
          <span className="text-3xl font-bold tabular-nums" data-testid="final-score">
            {score.toLocaleString()}
          </span>
        </div>

        {won && rewards && (
          <div className="mt-5">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#5A4433]">
              Tribute Granted
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {RESOURCE_KEYS.map((k) => {
                const amt = rewards[k] ?? 0;
                if (!amt) return null;
                return (
                  <div
                    key={k}
                    className="rounded-full border-2 px-3 py-1 flex items-center gap-2"
                    style={{
                      borderColor: RES_COLOR[k],
                      background: "#F4E7CE",
                    }}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: RES_COLOR[k] }}
                    />
                    <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[#2c1e16]">
                      {RES_LABEL[k]}
                    </span>
                    <span
                      className="font-bold text-sm tabular-nums"
                      style={{ color: RES_COLOR[k].replace(/.{2}$/, "") + "FF" }}
                    >
                      +{amt}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          {won && onNextLevel ? (
            <RegalButton onClick={onNextLevel} data-testid="next-level-button">
              Next Level
            </RegalButton>
          ) : (
            <RegalButton onClick={onRetry} data-testid="retry-modal-button">
              Try Again
            </RegalButton>
          )}
          <RegalButton variant="ghost" onClick={onMap} data-testid="back-to-map-button">
            Kingdom Map
          </RegalButton>
        </div>
      </div>
    </div>
  );
}
