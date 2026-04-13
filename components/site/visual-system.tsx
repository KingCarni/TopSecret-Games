// CREATE: components/site/visual-system.tsx
import type { ReactNode } from "react";
import { SITE_TOKENS } from "./visual-tokens";

type Accent = {
  border: string;
  gradient: string;
  glow: string;
  sigil?: string;
};

export function PageBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(250,204,21,0.08),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(239,68,68,0.08),transparent_28%),linear-gradient(to_bottom,rgba(0,0,0,1),rgba(4,4,6,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.06]" />
    </div>
  );
}

export function SectionWrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto ${SITE_TOKENS.sectionMax} px-6 md:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  className = "",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className={SITE_TOKENS.eyebrow}>{eyebrow}</div>
      <h2 className={`mt-4 ${SITE_TOKENS.title}`}>{title}</h2>
      {body ? <p className={`mt-4 max-w-2xl ${SITE_TOKENS.body}`}>{body}</p> : null}
    </div>
  );
}

export function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border ${SITE_TOKENS.shellBorder} ${SITE_TOKENS.shellBg} p-6 ${SITE_TOKENS.shellBlur} ${className}`}
    >
      {children}
    </div>
  );
}

export function HeroStat({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 backdrop-blur ${
        highlight
          ? "border-yellow-400/20 bg-yellow-400/[0.05]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">{label}</div>
      <div className={`mt-2 text-sm font-semibold ${highlight ? "text-yellow-300" : "text-white"}`}>
        {value}
      </div>
    </div>
  );
}

export function AccentCard({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: Accent;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border ${accent.border} bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient}`} />
      <div className="relative">
        <div className="mb-4 flex items-center gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 ${accent.glow}`}>
            <div className={`h-6 w-6 rounded-xl ${accent.sigil ?? accent.glow} shadow-lg shadow-black/30`} />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm leading-7 text-white/68">{body}</p>
      </div>
    </div>
  );
}

export function NumberedRoute({
  index,
  text,
}: {
  index: number;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-4">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 text-[11px] font-bold text-yellow-300">
        {index}
      </div>
      <p className="text-sm leading-7 text-white/70">{text}</p>
    </div>
  );
}

export function PreviewModule({
  title,
  label,
  border,
  glow,
  orb,
}: {
  title: string;
  label: string;
  border: string;
  glow: string;
  orb: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border ${border} bg-[linear-gradient(180deg,rgba(12,12,18,1),rgba(5,5,8,1))] p-4`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${glow}`} />
      <div className="relative rounded-2xl border border-white/10 bg-black/25 p-3">
        <div className="h-36 rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] p-3">
          <div className="relative flex h-full items-center justify-center rounded-xl border border-white/6 bg-black/20">
            <div className="absolute inset-3 rounded-xl border border-white/6" />
            <div className="absolute inset-6 rounded-lg border border-white/[0.05]" />
            <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${orb} blur-[0.2px] shadow-[0_0_30px_rgba(255,255,255,0.06)]`} />
          </div>
        </div>
      </div>
      <div className="relative mt-4 text-[10px] uppercase tracking-[0.24em] text-white/40">{label}</div>
      <div className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/82">{title}</div>
    </div>
  );
}

export function TileGridOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 grid-cols-4 grid-rows-4 gap-1.5 opacity-[0.16]">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[0.45rem] border border-yellow-300/12 bg-white/[0.02]"
          />
        ))}
      </div>
    </div>
  );
}

export function HeroArtifact({
  gemNames,
}: {
  gemNames: { name: string; className: string }[];
}) {
  return (
    <div className="relative">
      <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -right-6 top-16 h-44 w-44 rounded-full bg-sky-500/18 blur-3xl" />
      <div className="absolute left-16 bottom-10 h-44 w-44 rounded-full bg-emerald-500/14 blur-3xl" />

      <div className="relative rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/45 backdrop-blur-xl">
        <div className="rounded-[1.8rem] border border-yellow-400/15 bg-[linear-gradient(180deg,rgba(20,12,6,0.96),rgba(7,7,12,0.96))] p-5">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-300/80">
              Transmission
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/50">
              Secure Link
            </div>
          </div>

          <div className="mt-5 rounded-[1.45rem] border border-white/10 bg-black/60 p-5">
            <div className="relative rounded-[1.2rem] border border-white/8 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(11,11,18,1),rgba(4,4,8,1))] p-5">
              <TileGridOverlay />

              <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-yellow-400/10 bg-yellow-400/5 shadow-[0_0_70px_rgba(250,204,21,0.09)]" />
                <div className="absolute inset-7 rounded-full border border-yellow-400/10" />
                <div className="absolute h-28 w-28 rotate-12 rounded-[1.8rem] border border-yellow-300/18 bg-[radial-gradient(circle_at_35%_30%,rgba(250,204,21,0.32),rgba(120,53,15,0.12)),linear-gradient(135deg,rgba(250,204,21,0.18),rgba(0,0,0,0))] shadow-[0_0_32px_rgba(250,204,21,0.10)]" />
                <div className="absolute h-20 w-20 -rotate-12 rounded-[1.4rem] border border-white/10 bg-white/[0.03]" />
                <div className="absolute h-10 w-10 rounded-full bg-gradient-to-br from-yellow-200 to-amber-500 shadow-[0_0_30px_rgba(250,204,21,0.45)]" />
                <div className="absolute -right-2 top-9 h-4 w-4 rounded-full bg-rose-500/80 blur-[1px]" />
                <div className="absolute left-8 top-14 h-3 w-3 rounded-full bg-fuchsia-400/80 blur-[1px]" />
                <div className="absolute bottom-10 left-9 h-3 w-3 rounded-full bg-sky-400/80 blur-[1px]" />
                <div className="absolute bottom-8 right-8 h-3 w-3 rounded-full bg-emerald-400/80 blur-[1px]" />
              </div>

              <div className="relative mt-6 grid grid-cols-4 gap-3">
                {gemNames.map((gem) => (
                  <div key={gem.name} className="text-center">
                    <div
                      className={`mx-auto h-12 w-12 rounded-2xl border border-white/10 bg-gradient-to-br ${gem.className} shadow-lg shadow-black/30`}
                    />
                    <div className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                      {gem.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">Concept Directive</div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Build a stylish puzzle experience that expands into collection, kingdom growth,
              crafting hooks, and longer-term progression without losing premium feel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
