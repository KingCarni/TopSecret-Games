"use client";

import CursorGlow from "@/components/topsecret/shared/CursorGlow";

const ACCENTS = [
  { stroke: "#66f0d0", glow: "rgba(102,240,208,0.18)" }, // emerald
  { stroke: "#7fb4ff", glow: "rgba(127,180,255,0.16)" }, // cyan
  { stroke: "#ffd65a", glow: "rgba(255,214,90,0.16)" },  // yellow
  { stroke: "#b58bff", glow: "rgba(181,139,255,0.18)" }, // purple
];

type DetailSection = {
  title: string;
  body?: string;
  bullets?: string[];
};

type Props = {
  index: number;
  section: DetailSection;
};

/**
 * Numbered narrative panel for project.detailSections.
 * Alternates accent color per index. Uses CursorGlow for hover sheen.
 */
export default function ProjectDetailSection({ index, section }: Props) {
  const accent = ACCENTS[index % ACCENTS.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <CursorGlow
      as="article"
      className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,15,23,0.95)_0%,rgba(7,11,18,0.92)_100%)] p-8 md:p-12 transition-colors hover:border-white/20"
      color={accent.glow}
      accent="rgba(255,255,255,0.04)"
      size={520}
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 30px 80px -50px ${accent.stroke}`,
      }}
    >
      <div
        aria-hidden
        className="absolute left-8 top-8 h-1 w-20 rounded-full md:left-12"
        style={{ background: `linear-gradient(90deg, ${accent.stroke}, transparent)` }}
      />

      <div className="grid gap-8 pt-6 md:grid-cols-[120px_1fr]">
        <div>
          <span
            className="font-mono text-[11px] tracking-[0.3em]"
            style={{ color: accent.stroke }}
          >
            CS / {num}
          </span>
          <div className="mt-3 font-mono text-5xl font-semibold text-white/15 md:text-6xl">
            {num}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
            {section.title}
          </h3>
          {section.body && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              {section.body}
            </p>
          )}
          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-6 space-y-3">
              {section.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-base text-white/80">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: accent.stroke }}
                  />
                  <span className="leading-7">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </CursorGlow>
  );
}
