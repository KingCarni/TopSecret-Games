"use client";
import { GemPower, GemType } from "@/lib/match-majesty/types";

/**
 * Pure CSS+SVG gems. Each gem is visually distinct by both color AND shape
 * for color-blind readability. No external images.
 */

interface GemVisualProps {
  type: GemType;
  /** Size in px for the gem visual itself (the inner shape) */
  size?: number;
  /** When true: extra outer glow (used on hover/selected) */
  highlighted?: boolean;
  /** Power-up overlay indicator (line/bomb/color) */
  power?: GemPower;
}

const GEM_GLOW: Record<GemType, string> = {
  ruby: "0 0 18px rgba(244,63,94,0.55), 0 0 4px rgba(255,255,255,0.4) inset",
  sapphire: "0 0 18px rgba(59,130,246,0.55), 0 0 4px rgba(255,255,255,0.45) inset",
  emerald: "0 0 18px rgba(16,185,129,0.55), 0 0 4px rgba(255,255,255,0.4) inset",
  topaz: "0 0 18px rgba(245,158,11,0.6), 0 0 4px rgba(255,255,255,0.5) inset",
  amethyst: "0 0 18px rgba(168,85,247,0.55), 0 0 4px rgba(255,255,255,0.45) inset",
  pearl: "0 0 18px rgba(255,255,255,0.55), 0 0 4px rgba(255,255,255,0.7) inset",
};

export function GemVisual({ type, size = 56, highlighted = false, power }: GemVisualProps) {
  const glow = GEM_GLOW[type];
  const filter = highlighted ? "brightness(1.18) saturate(1.15)" : undefined;
  const wrap: React.CSSProperties = {
    width: size,
    height: size,
    position: "relative",
    filter,
  };

  // Render the base gem first, then optionally overlay the power-up badge
  const gemBody = renderGemBody(type, wrap, glow, size);
  if (!power) return gemBody;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <div className="mm-power-aura" style={{ position: "absolute", inset: -2 }} />
      {gemBody}
      <PowerBadge power={power} size={size} />
    </div>
  );
}

function renderGemBody(type: GemType, wrap: React.CSSProperties, glow: string, size: number) {
  if (type === "ruby") {
    // Octagon: chamfered square via clip-path
    return (
      <div style={wrap} data-gem={type}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at 32% 28%, #fecaca 0%, #f43f5e 36%, #9f1239 78%, #4c0519 100%)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            boxShadow: glow,
          }}
        />
        {/* highlight */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 22%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            pointerEvents: "none",
          }}
        />
      </div>
    );
  }
  if (type === "sapphire") {
    return (
      <div style={wrap} data-gem={type}>
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 32% 28%, #bfdbfe 0%, #60a5fa 28%, #1d4ed8 70%, #0c1f4a 100%)",
            boxShadow: glow,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at 30% 22%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 35%)",
            pointerEvents: "none",
          }}
        />
      </div>
    );
  }
  if (type === "emerald") {
    return (
      <div style={wrap} data-gem={type}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(160deg, #6ee7b7 0%, #10b981 40%, #047857 75%, #022c1d 100%)",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            boxShadow: glow,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%)",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            pointerEvents: "none",
          }}
        />
      </div>
    );
  }
  if (type === "topaz") {
    // Diamond: rotated square inside a non-rotated wrapper
    const inner = Math.round(size * 0.72);
    return (
      <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "center" }} data-gem={type}>
        <div
          style={{
            width: inner,
            height: inner,
            transform: "rotate(45deg)",
            background:
              "linear-gradient(135deg, #fef3c7 0%, #fbbf24 35%, #b45309 80%, #4a2606 100%)",
            borderRadius: 6,
            boxShadow: glow,
            position: "relative",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 6,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    );
  }
  if (type === "amethyst") {
    return (
      <div style={wrap} data-gem={type}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, #e9d5ff 0%, #a855f7 35%, #6b21a8 75%, #2c0848 100%)",
            clipPath: "polygon(50% 4%, 96% 96%, 4% 96%)",
            boxShadow: glow,
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 45%)",
            clipPath: "polygon(50% 4%, 96% 96%, 4% 96%)",
            pointerEvents: "none",
          }}
        />
      </div>
    );
  }
  // pearl - teardrop
  return (
    <div style={wrap} data-gem={type}>
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50% 50% 50% 8%",
          transform: "rotate(45deg)",
          background:
            "radial-gradient(circle at 40% 35%, #ffffff 0%, #fef9c3 30%, #fde68a 60%, #a8a29e 100%)",
          boxShadow: glow,
          position: "relative",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50% 50% 50% 8%",
            background:
              "radial-gradient(ellipse at 35% 30%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 40%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

/** Tiny pip used in the objective panel to label gems by color/shape */
export function GemPip({ type, size = 28 }: { type: GemType; size?: number }) {
  return <GemVisual type={type} size={size} />;
}

/** Visual overlay shown on power-up gems (line/bomb/color) */
function PowerBadge({ power, size }: { power: GemPower; size: number }) {
  const ringStyle: React.CSSProperties = {
    position: "absolute",
    inset: -3,
    borderRadius: "50%",
    border: "2px solid #F2D57E",
    boxShadow:
      "0 0 16px rgba(242,213,126,0.9), inset 0 0 8px rgba(255,255,255,0.4)",
    pointerEvents: "none",
    animation: "mm-power-spin 3.6s linear infinite",
  };
  const iconSize = Math.round(size * 0.28);
  const iconStyle: React.CSSProperties = {
    position: "absolute",
    right: -2,
    top: -2,
    width: iconSize + 8,
    height: iconSize + 8,
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 35% 30%, #fff7d6, #f2d57e 55%, #8c5e35 100%)",
    border: "1.5px solid #4A3219",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    boxShadow: "0 2px 6px rgba(0,0,0,0.6)",
    fontSize: iconSize,
    color: "#2c1e16",
    fontWeight: 900,
    fontFamily: "Alegreya Sans, sans-serif",
    lineHeight: 1,
  };
  const label =
    power === "line-h" ? "↔" : power === "line-v" ? "↕" : power === "bomb" ? "✸" : "★";
  return (
    <>
      <div style={ringStyle} aria-hidden />
      <div style={iconStyle} aria-hidden data-power={power}>
        {label}
      </div>
    </>
  );
}
