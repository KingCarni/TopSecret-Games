import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type LaneStatus = "Active" | "Next" | "Shaping" | "Internal";

export type Lane = {
  index: string;
  name: string;
  tagline: string;
  phase: LaneStatus;
  accent: string;
  focus: string[];
  href?: string;
};

const phaseDot: Record<LaneStatus, string> = {
  Active: "#66f0d0",
  Next: "#c9a8ff",
  Shaping: "#ffd65a",
  Internal: "#7fe8ff",
};

export function LaneCard({ lane }: { lane: Lane }) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(11,15,23,0.95)_0%,rgba(6,9,15,0.94)_100%)] p-7 transition duration-300 hover:border-white/20 hover:-translate-y-0.5 md:p-9"
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 24px 70px -40px ${lane.accent}`,
      }}
    >
      <div
        aria-hidden
        className="absolute left-7 top-5 h-1 w-28 rounded-full md:left-9"
        style={{ background: `linear-gradient(90deg, ${lane.accent}, transparent)` }}
      />

      <div className="flex items-start justify-between pt-8">
        <span className="font-mono text-[11px] tracking-[0.3em] text-white/55">
          {lane.index}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.26em] text-white/80">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: phaseDot[lane.phase] }}
          />
          {lane.phase}
        </span>
      </div>

      <h3 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
        {lane.name}
      </h3>
      <p
        className="mt-2 text-sm font-medium"
        style={{ color: lane.accent }}
      >
        {lane.tagline}
      </p>

      <ul className="mt-6 space-y-3 text-[15px] leading-7 text-white/80">
        {lane.focus.map((f) => (
          <li key={f} className="flex gap-3">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: lane.accent }}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {lane.href ? (
        <div className="mt-7">
          <Link
            href={lane.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            Open case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
