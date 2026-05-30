"use client";
import { RegalButton } from "./UI";
import { GemVisual } from "./GemVisual";

interface TownScreenProps {
  onBack: () => void;
}

const HUB_CARDS = [
  {
    key: "rune-words",
    title: "Rune Words",
    tag: "Mini-Game",
    body:
      "Spell radiant words from drifting runestones. Coming with the next moon — bring your finest stardust.",
    gem: "amethyst" as const,
    accent: "#A78BFA",
  },
  {
    key: "capsule-clash",
    title: "Capsule Clash",
    tag: "Mini-Game",
    body:
      "Trade swift puzzles with the kingdom's traveling alchemists. Quick rounds, tactile rewards.",
    gem: "topaz" as const,
    accent: "#F2D57E",
  },
  {
    key: "shop",
    title: "The Royal Shop",
    tag: "Market",
    body:
      "Convert hard-won resources into boosters, decor, and rare cosmetics for the throne.",
    gem: "ruby" as const,
    accent: "#F87171",
  },
  {
    key: "upgrades",
    title: "Kingdom Upgrades",
    tag: "Progression",
    body:
      "Reinforce the walls, plant the forest groves, and gild the rooftops. Permanent perks await.",
    gem: "emerald" as const,
    accent: "#34D399",
  },
];

export function TownScreen({ onBack }: TownScreenProps) {
  return (
    <div className="relative w-full h-full overflow-hidden mm-town-bg">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-4 flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.4em] text-amber-200/80 font-semibold">
            The Twilight Town
          </div>
          <h2 className="font-[Cormorant_Garamond] text-3xl font-bold text-white mt-1">
            Kingdom Hub
          </h2>
        </div>
        <RegalButton variant="ghost" onClick={onBack} data-testid="town-back-button">
          ← Back
        </RegalButton>
      </div>

      {/* Town silhouette */}
      <svg
        viewBox="0 0 1280 300"
        className="absolute bottom-0 left-0 w-full opacity-40 pointer-events-none"
        aria-hidden
      >
        <path
          d="M0 300 V200 L60 200 L60 150 L100 110 L140 150 L140 200 L220 200 V120 L260 80 L300 120 V200 L400 200 V160 L450 140 L500 160 V200 L600 200 V100 L640 60 L680 100 V200 L780 200 V160 L830 130 L880 160 V200 L1000 200 V140 L1040 110 L1080 140 V200 L1280 200 V300 Z"
          fill="#081F14"
        />
      </svg>

      {/* Bento grid */}
      <div className="absolute inset-0 px-10 pt-24 pb-10 grid grid-cols-12 grid-rows-6 gap-4">
        {/* Featured: Rune Words takes 2x */}
        <HubCard
          card={HUB_CARDS[0]}
          className="col-span-5 row-span-3"
          featured
        />
        <HubCard card={HUB_CARDS[1]} className="col-span-4 row-span-3" />
        <HubCard card={HUB_CARDS[2]} className="col-span-3 row-span-3" />
        <HubCard card={HUB_CARDS[3]} className="col-span-5 row-span-3" />
        {/* Mascot panel */}
        <div
          className="col-span-7 row-span-3 relative rounded-2xl overflow-hidden flex items-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,15,30,0.85), rgba(8,31,20,0.85))",
            border: "1px solid rgba(242,213,126,0.25)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
          }}
        >
          <div className="px-8">
            <div className="text-[10px] uppercase tracking-[0.32em] text-amber-200/70">
              Royal Counsel
            </div>
            <h3 className="font-[Cormorant_Garamond] text-3xl font-bold text-white mt-1">
              Aurelius, the Owl Scribe
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/70 max-w-md">
              &quot;Your cascade was felt across the realm. Return to the map when ready,
              dear monarch — new pages of the ledger glimmer in expectation.&quot;
            </p>
          </div>
          <div className="absolute right-6 bottom-0 opacity-95">
            <MiniMascot />
          </div>
        </div>
      </div>
    </div>
  );
}

function HubCard({
  card,
  className = "",
  featured = false,
}: {
  card: (typeof HUB_CARDS)[number];
  className?: string;
  featured?: boolean;
}) {
  return (
    <button
      data-testid={`town-card-${card.key}`}
      className={`group relative rounded-2xl overflow-hidden text-left transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(244,231,206,0.96) 0%, rgba(216,191,154,0.96) 100%)",
        border: "5px solid #8C5E35",
        boxShadow:
          "inset 0 0 30px rgba(140,94,53,0.3), 0 10px 28px rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-25 blur-2xl"
        style={{ background: card.accent }}
      />
      <div className="relative p-5 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.3em] font-bold"
              style={{ color: "#5A4433" }}
            >
              {card.tag}
            </div>
            <h3
              className={`font-[Cormorant_Garamond] font-bold leading-tight text-[#2c1e16] ${
                featured ? "text-3xl mt-1" : "text-2xl mt-1"
              }`}
            >
              {card.title}
            </h3>
          </div>
          <div className="shrink-0">
            <GemVisual type={card.gem} size={featured ? 48 : 38} />
          </div>
        </div>
        <p
          className={`mt-3 text-[#5A4433] leading-6 ${
            featured ? "text-sm" : "text-[13px]"
          }`}
        >
          {card.body}
        </p>
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-bold text-[#5A4433] group-hover:text-[#2c1e16]">
            Coming Soon →
          </span>
        </div>
      </div>
    </button>
  );
}

function MiniMascot() {
  return (
    <svg width="160" height="180" viewBox="0 0 220 240">
      <defs>
        <radialGradient id="mm-body" cx=".4" cy=".3" r=".9">
          <stop offset="0%" stopColor="#3B2A57" />
          <stop offset="55%" stopColor="#1F1235" />
          <stop offset="100%" stopColor="#06030F" />
        </radialGradient>
      </defs>
      <path
        d="M60 50 L80 20 L100 45 L120 15 L140 45 L160 20 L180 50 L180 70 L60 70 Z"
        fill="#F2D57E"
        stroke="#8C5E35"
        strokeWidth="2"
      />
      <ellipse cx="120" cy="150" rx="70" ry="80" fill="url(#mm-body)" stroke="#8C5E35" strokeWidth="2" />
      <circle cx="95" cy="130" r="22" fill="#F4E7CE" />
      <circle cx="145" cy="130" r="22" fill="#F4E7CE" />
      <circle cx="95" cy="132" r="10" fill="#F2D57E" />
      <circle cx="145" cy="132" r="10" fill="#F2D57E" />
      <circle cx="95" cy="132" r="5" fill="#1F1235" />
      <circle cx="145" cy="132" r="5" fill="#1F1235" />
      <path d="M118 152 L130 152 L124 168 Z" fill="#F2D57E" stroke="#8C5E35" strokeWidth="1" />
    </svg>
  );
}
