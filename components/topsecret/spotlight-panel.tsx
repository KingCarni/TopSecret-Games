import type { ReactNode } from "react";

type SpotlightItem = {
  label: string;
  value: string;
};

type SpotlightPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: SpotlightItem[];
  footer?: ReactNode;
};

export function SpotlightPanel({
  eyebrow,
  title,
  description,
  items,
  footer,
}: SpotlightPanelProps) {
  return (
    <aside className="rounded-[2rem] border border-emerald-400/20 bg-emerald-500/[0.06] p-6 shadow-[0_0_0_1px_rgba(16,185,129,0.06)] backdrop-blur-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300">{description}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              {item.label}
            </p>
            <p className="mt-3 text-base font-medium leading-7 text-zinc-100">{item.value}</p>
          </div>
        ))}
      </div>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </aside>
  );
}
