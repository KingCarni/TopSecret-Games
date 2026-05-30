"use client";
import { RegalButton } from "./UI";
import { LEVELS, LOCKED_LEVELS_PREVIEW } from "@/lib/match-majesty/levels";
import { Level } from "@/lib/match-majesty/types";

interface MapScreenProps {
  unlockedLevelIds: number[];
  completedLevelIds: number[];
  currentLevelId: number;
  onSelectLevel: (level: Level) => void;
  onBack: () => void;
}

/** Path positions across a 1280x720 area for nodes */
const PATH_POINTS: { x: number; y: number }[] = [
  { x: 120, y: 540 },
  { x: 260, y: 460 },
  { x: 380, y: 540 },
  { x: 520, y: 420 },
  { x: 660, y: 480 },
  { x: 790, y: 380 },
  { x: 920, y: 440 },
  { x: 1050, y: 340 },
  { x: 1160, y: 240 },
  { x: 1080, y: 140 },
];

export function MapScreen({
  unlockedLevelIds,
  completedLevelIds,
  currentLevelId,
  onSelectLevel,
  onBack,
}: MapScreenProps) {
  const totalNodes = LEVELS.length + LOCKED_LEVELS_PREVIEW;
  const points = PATH_POINTS.slice(0, totalNodes);

  return (
    <div className="relative w-full h-full overflow-hidden mm-map-bg">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-4 flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.4em] text-amber-200/80 font-semibold">
            Kingdom Atlas
          </div>
          <h2 className="font-[Cormorant_Garamond] text-3xl font-bold text-white mt-1">
            Choose Your Quest
          </h2>
        </div>
        <RegalButton variant="ghost" onClick={onBack} data-testid="map-back-button">
          ← Back
        </RegalButton>
      </div>

      {/* Map canvas */}
      <svg
        viewBox="0 0 1280 720"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="path-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F2D57E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8C5E35" stopOpacity="0.5" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Decorative trees / hills */}
        <path
          d="M0 720 L0 600 Q120 540, 240 600 T480 580 T720 600 T960 560 T1280 600 L1280 720 Z"
          fill="rgba(8,31,20,0.6)"
        />
        <path
          d="M0 720 L0 660 Q160 620, 320 660 T640 640 T960 660 T1280 640 L1280 720 Z"
          fill="rgba(8,31,20,0.85)"
        />

        {/* Path between nodes */}
        {points.map((p, i) => {
          if (i === points.length - 1) return null;
          const n = points[i + 1];
          const mx = (p.x + n.x) / 2;
          const my = (p.y + n.y) / 2 - 30;
          const isUnlocked = i < unlockedLevelIds.length;
          return (
            <path
              key={`path-${i}`}
              d={`M ${p.x} ${p.y} Q ${mx} ${my}, ${n.x} ${n.y}`}
              fill="none"
              stroke={isUnlocked ? "url(#path-grad)" : "rgba(255,255,255,0.12)"}
              strokeWidth={3}
              strokeDasharray={isUnlocked ? "0" : "6 6"}
            />
          );
        })}

        {/* Nodes */}
        {points.map((p, i) => {
          const levelId = i + 1;
          const isReal = i < LEVELS.length;
          const isUnlocked = unlockedLevelIds.includes(levelId);
          const isCompleted = completedLevelIds.includes(levelId);
          const isCurrent = currentLevelId === levelId;
          const fill = isCompleted
            ? "#10B981"
            : isUnlocked
            ? "#F2D57E"
            : "rgba(255,255,255,0.18)";
          const stroke = isUnlocked ? "#8C5E35" : "rgba(255,255,255,0.25)";
          return (
            <g
              key={`node-${i}`}
              style={{ cursor: isUnlocked ? "pointer" : "not-allowed" }}
              onClick={() => {
                if (!isReal) return;
                if (!isUnlocked) return;
                const level = LEVELS[levelId - 1];
                onSelectLevel(level);
              }}
              data-testid={`map-node-${levelId}`}
            >
              {isUnlocked && (
                <circle cx={p.x} cy={p.y} r={28} fill={fill} opacity={0.18} filter="url(#glow)" />
              )}
              <circle
                cx={p.x}
                cy={p.y}
                r={20}
                fill={fill}
                stroke={stroke}
                strokeWidth={3}
              />
              <text
                x={p.x}
                y={p.y + 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill={isUnlocked ? "#2c1e16" : "rgba(255,255,255,0.4)"}
                fontFamily="Alegreya Sans, sans-serif"
              >
                {isReal ? levelId : "?"}
              </text>
              {isCurrent && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={28}
                  fill="none"
                  stroke="#F2D57E"
                  strokeWidth={2}
                  className="mm-pulse"
                />
              )}
              {isReal && (
                <text
                  x={p.x}
                  y={p.y + 45}
                  textAnchor="middle"
                  fontSize="11"
                  fill={isUnlocked ? "#FCF8F2" : "rgba(255,255,255,0.35)"}
                  fontFamily="Cormorant Garamond, serif"
                  fontWeight="600"
                  letterSpacing="0.05em"
                >
                  {LEVELS[levelId - 1].name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Info panel — bottom card showing the next unlocked level */}
      <NextLevelInfo
        unlockedLevelIds={unlockedLevelIds}
        completedLevelIds={completedLevelIds}
        onSelectLevel={onSelectLevel}
      />
    </div>
  );
}

function NextLevelInfo({
  unlockedLevelIds,
  completedLevelIds,
  onSelectLevel,
}: {
  unlockedLevelIds: number[];
  completedLevelIds: number[];
  onSelectLevel: (l: Level) => void;
}) {
  // The next playable level = highest unlocked that's not yet completed; fallback to last unlocked
  const next =
    unlockedLevelIds
      .map((id) => LEVELS[id - 1])
      .find((l) => l && !completedLevelIds.includes(l.id)) ||
    LEVELS[unlockedLevelIds[unlockedLevelIds.length - 1] - 1];

  if (!next) return null;
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[640px] max-w-[92vw]">
      <div
        className="relative rounded-xl px-6 py-4 flex items-center gap-5 text-[#2c1e16]"
        style={{
          background:
            "linear-gradient(180deg, #F4E7CE 0%, #E8D4AC 100%)",
          border: "5px solid #8C5E35",
          boxShadow:
            "inset 0 0 30px rgba(140,94,53,0.3), 0 12px 30px rgba(0,0,0,0.55)",
        }}
      >
        <div className="flex-1">
          <div className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#5A4433]">
            Level {next.id}
          </div>
          <h3 className="font-[Cormorant_Garamond] text-2xl font-bold leading-tight">
            {next.name}
          </h3>
          <div className="mt-1.5 text-sm text-[#5A4433]">
            {next.objectives
              .map((o) => `${o.required} ${cap(o.type)}`)
              .join(" · ")}{" "}
            in {next.moves} moves
          </div>
        </div>
        <RegalButton
          data-testid="start-level-button"
          variant="primary"
          size="md"
          onClick={() => onSelectLevel(next)}
        >
          Start
        </RegalButton>
      </div>
    </div>
  );
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
