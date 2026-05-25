import type { LucideIcon } from "lucide-react";

export type Capability = {
  index: string;
  title: string;
  body: string;
  accent: string;
  icon?: LucideIcon;
};

export function CapabilityCard({ cap }: { cap: Capability }) {
  const Icon = cap.icon;
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(11,15,23,0.95)_0%,rgba(7,11,18,0.92)_100%)] p-7 transition duration-300 hover:border-white/20 hover:-translate-y-0.5"
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 20px 60px -40px ${cap.accent}`,
      }}
    >
      <div
        aria-hidden
        className="absolute left-7 top-5 h-1 w-24 rounded-full"
        style={{ background: `linear-gradient(90deg, ${cap.accent}, transparent)` }}
      />
      <div className="pt-8 flex items-start justify-between gap-4">
        <div>
          <span
            className="font-mono text-[11px] tracking-[0.3em]"
            style={{ color: cap.accent }}
          >
            {cap.index}
          </span>
          <h3 className="mt-3 text-xl font-semibold tracking-tight">{cap.title}</h3>
        </div>
        {Icon ? (
          <Icon
            className="h-5 w-5 shrink-0 opacity-70 transition group-hover:opacity-100"
            style={{ color: cap.accent }}
          />
        ) : null}
      </div>
      <p className="mt-4 text-[15px] leading-7 text-white/75">{cap.body}</p>
    </div>
  );
}
