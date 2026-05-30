"use client";
import { RegalButton } from "./UI";
import { GemVisual } from "./GemVisual";

interface TitleScreenProps {
  onPlay: () => void;
  onContinue: () => void;
  onSettings: () => void;
  hasProgress: boolean;
}

export function TitleScreen({ onPlay, onContinue, onSettings, hasProgress }: TitleScreenProps) {
  return (
    <div className="relative w-full h-full flex items-center mm-title-bg overflow-hidden">
      {/* Decorative gems floating */}
      <FloatingGem className="left-[6%] top-[12%]" type="ruby" size={48} delay={0} />
      <FloatingGem className="left-[10%] bottom-[18%]" type="sapphire" size={62} delay={1.4} />
      <FloatingGem className="right-[8%] top-[18%]" type="emerald" size={54} delay={0.7} />
      <FloatingGem className="right-[14%] bottom-[14%]" type="amethyst" size={40} delay={2.0} />
      <FloatingGem className="right-[28%] top-[30%]" type="topaz" size={36} delay={1.1} />
      <FloatingGem className="left-[28%] top-[30%]" type="pearl" size={34} delay={1.7} />

      {/* Castle silhouette */}
      <svg
        viewBox="0 0 1280 400"
        className="absolute bottom-0 left-0 w-full opacity-50 pointer-events-none"
        aria-hidden
      >
        <defs>
          <linearGradient id="castle-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B1233" />
            <stop offset="100%" stopColor="#06080F" />
          </linearGradient>
        </defs>
        <path
          d="M0 400 V260 L80 260 L80 230 L110 200 L140 230 L140 260 L180 260 V210 L220 180 L260 210 V260 L320 260 V200 L340 180 L340 140 L380 140 L380 180 L420 200 V260 L520 260 V230 L560 200 L600 230 V260 L700 260 V190 L730 160 L730 100 L770 100 L770 160 L810 190 V260 L900 260 V230 L940 200 L980 230 V260 L1060 260 V200 L1100 180 L1140 200 V260 L1200 260 L1200 220 L1230 200 L1260 220 V260 L1280 260 V400 Z"
          fill="url(#castle-grad)"
        />
        {/* flag dots */}
        <circle cx="340" cy="130" r="3" fill="#F2D57E" />
        <circle cx="730" cy="90" r="3" fill="#F2D57E" />
        <circle cx="1100" cy="170" r="2.5" fill="#F2D57E" />
      </svg>

      {/* Mascot silhouette */}
      <div className="absolute right-[10%] bottom-[22%] pointer-events-none mm-mascot-float" aria-hidden>
        <Mascot />
      </div>

      <div className="relative z-10 pl-[7%] max-w-[640px]">
        <div className="text-[11px] uppercase tracking-[0.4em] text-amber-300/80 font-semibold mb-3">
          Top Secret Games presents
        </div>
        <h1 className="mm-title font-[Cormorant_Garamond] font-bold leading-[0.9] text-[80px]">
          Match
          <br />
          <span className="mm-title-accent">Majesty</span>
        </h1>
        <p className="mt-5 max-w-[460px] text-base leading-7 text-white/75 font-[Alegreya_Sans]">
          Cascade jewels, claim the cascade, and grow your twilight kingdom — a regal
          match-3 prototype for the throne.
        </p>

        <div className="mt-9 flex flex-col gap-3 max-w-[280px]">
          <RegalButton data-testid="play-button" size="lg" onClick={onPlay}>
            Play
          </RegalButton>
          <RegalButton
            data-testid="continue-button"
            variant="secondary"
            size="md"
            onClick={onContinue}
            disabled={!hasProgress}
          >
            Continue
          </RegalButton>
          <RegalButton
            data-testid="settings-button-title"
            variant="ghost"
            size="md"
            onClick={onSettings}
          >
            Settings
          </RegalButton>
        </div>

        <div className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/40">
          v0.1 • Prototype • Crown the Cascade
        </div>
      </div>
    </div>
  );
}

function FloatingGem({
  className,
  type,
  size,
  delay,
}: {
  className: string;
  type: "ruby" | "sapphire" | "emerald" | "topaz" | "amethyst" | "pearl";
  size: number;
  delay: number;
}) {
  return (
    <div
      className={`absolute pointer-events-none mm-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden
    >
      <GemVisual type={type} size={size} />
    </div>
  );
}

function Mascot() {
  return (
    <svg width="220" height="240" viewBox="0 0 220 240" className="drop-shadow-[0_18px_30px_rgba(0,0,0,0.6)]">
      <defs>
        <radialGradient id="m-body" cx=".4" cy=".3" r=".9">
          <stop offset="0%" stopColor="#3B2A57" />
          <stop offset="55%" stopColor="#1F1235" />
          <stop offset="100%" stopColor="#06030F" />
        </radialGradient>
      </defs>
      {/* Crown */}
      <path
        d="M60 50 L80 20 L100 45 L120 15 L140 45 L160 20 L180 50 L180 70 L60 70 Z"
        fill="#F2D57E"
        stroke="#8C5E35"
        strokeWidth="2"
      />
      <circle cx="80" cy="35" r="3" fill="#F43F5E" />
      <circle cx="120" cy="30" r="3" fill="#10B981" />
      <circle cx="160" cy="35" r="3" fill="#3B82F6" />
      {/* Owl body */}
      <ellipse cx="120" cy="150" rx="70" ry="80" fill="url(#m-body)" stroke="#8C5E35" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="95" cy="130" r="22" fill="#F4E7CE" />
      <circle cx="145" cy="130" r="22" fill="#F4E7CE" />
      <circle cx="95" cy="132" r="10" fill="#F2D57E" />
      <circle cx="145" cy="132" r="10" fill="#F2D57E" />
      <circle cx="95" cy="132" r="5" fill="#1F1235" />
      <circle cx="145" cy="132" r="5" fill="#1F1235" />
      {/* Beak */}
      <path d="M118 152 L130 152 L124 168 Z" fill="#F2D57E" stroke="#8C5E35" strokeWidth="1" />
      {/* Chest gem */}
      <circle cx="120" cy="195" r="10" fill="#7B42F6" stroke="#F2D57E" strokeWidth="1.5" />
    </svg>
  );
}
