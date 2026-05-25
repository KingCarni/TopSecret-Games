import type { ReactNode } from "react";

/**
 * Shared visual shell for non-home pages of Top Secret Games.
 * Provides the dark grid background, atmospheric glow accents, and
 * consistent spacing tokens used on the redesigned homepage.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04070a] text-white">
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Atmospheric color blooms */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(0,186,150,0.28), transparent 60%), radial-gradient(circle at 70% 60%, rgba(127,232,255,0.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-200px] right-[-200px] h-[600px] w-[600px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(164,106,255,0.22), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </main>
  );
}

export function SectionLabel({
  number,
  children,
  accent = "#66f0d0",
}: {
  number: string;
  children: ReactNode;
  accent?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="font-mono text-xs tracking-[0.32em]"
        style={{ color: accent }}
      >
        {number}
      </span>
      <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-white/30 to-transparent" />
      <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
        {children}
      </span>
    </div>
  );
}
