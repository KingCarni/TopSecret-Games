const toneClasses: Record<string, string> = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  Active: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
  Next: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  Later: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
  Concept: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
  "In Progress": "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
};

export function StatusPill({ label }: { label: string }) {
  const tone =
    toneClasses[label] ?? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${tone}`}
    >
      {label}
    </span>
  );
}
