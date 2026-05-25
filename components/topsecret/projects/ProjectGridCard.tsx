"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export type ProjectCardData = {
  index: string;
  title: string;
  tagline: string;
  description: string;
  status: "Live" | "In Build" | "Internal" | "Concept";
  stack: string[];
  href: string;
  externalHref?: string;
  accent: "emerald" | "cyan" | "amber" | "violet";
};

const accentMap = {
  emerald: {
    bar: "from-[#66f0d0] via-[#3ce4c3]/60 to-transparent",
    text: "text-[#66f0d0]",
    glow: "rgba(102,240,208,0.22)",
    ring: "rgba(102,240,208,0.35)",
  },
  cyan: {
    bar: "from-[#7fe8ff] via-[#41dfff]/55 to-transparent",
    text: "text-[#7fe8ff]",
    glow: "rgba(127,232,255,0.20)",
    ring: "rgba(127,232,255,0.32)",
  },
  amber: {
    bar: "from-[#ffd65a] via-[#ffcf40]/45 to-transparent",
    text: "text-[#ffd65a]",
    glow: "rgba(255,214,90,0.18)",
    ring: "rgba(255,214,90,0.30)",
  },
  violet: {
    bar: "from-[#c990ff] via-[#a46aff]/50 to-transparent",
    text: "text-[#c990ff]",
    glow: "rgba(201,144,255,0.22)",
    ring: "rgba(201,144,255,0.32)",
  },
};

export function ProjectGridCard({ project }: { project: ProjectCardData }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const accent = accentMap[project.accent];

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,15,23,0.95)_0%,rgba(7,11,18,0.92)_100%)] p-7 transition-all duration-500 hover:border-white/20 md:p-9"
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 30px 80px -40px ${accent.glow}`,
      }}
    >
      {/* Cursor-follow glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, ${accent.ring}, transparent 50%)`,
        }}
      />
      {/* Top accent bar */}
      <div
        className={`absolute left-7 top-5 h-1 w-28 rounded-full bg-gradient-to-r ${accent.bar}`}
      />
      {/* Faint grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative pt-8">
        <div className="flex items-start justify-between gap-4">
          <span className={`font-mono text-xs tracking-[0.3em] ${accent.text}`}>
            {project.index}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: accent.glow.replace("0.22", "1").replace("0.20", "1").replace("0.18", "1") }}
            />
            {project.status}
          </span>
        </div>

        <h3 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h3>
        <p className={`mt-2 text-sm font-medium ${accent.text}`}>
          {project.tagline}
        </p>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/65"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={project.href}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Open case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
          {project.externalHref && (
            <a
              href={project.externalHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:border-white/35 hover:text-white"
            >
              Live site
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
