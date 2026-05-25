"use client";

import Link from "next/link";
import { useState } from "react";

type Project = {
  slug: string;
  name: string;
  category: string;
  status: "Shipping" | "Active" | "Next" | "Later";
  value: string;
  accent: string;
  glyph: string;
};

const projects: Project[] = [
  {
    slug: "qatalyst",
    name: "QAtalyst",
    category: "AI · QA Workspace",
    status: "Active",
    value:
      "AI-assisted QA workspace for triage, test cases, bug reports, and clean ticket generation.",
    accent: "from-[#66f0d0] to-[#3ce4c3]",
    glyph: "Q",
  },
  {
    slug: "git-a-job",
    name: "Git-a-Job",
    category: "AI · Careers",
    status: "Shipping",
    value:
      "ATS-aware resume and job application tool built for real job seekers, not recruiters.",
    accent: "from-[#7fb4ff] to-[#4f7cff]",
    glyph: "G",
  },
  {
    slug: "master-draft-studios",
    name: "Master Draft Studios",
    category: "AI · Creative",
    status: "Next",
    value:
      "AI-assisted writing studio for scripts, notes, pitch decks, and creative development.",
    accent: "from-[#b58bff] to-[#7e5cff]",
    glyph: "M",
  },
  {
    slug: "nova",
    name: "NOVA",
    category: "AI · Command Center",
    status: "Later",
    value:
      "AI workspace and command center for deeper project execution and orchestration.",
    accent: "from-[#ff9b66] to-[#ff5e8a]",
    glyph: "N",
  },
];

export default function ProjectOrbit() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative px-6 py-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
              02 — featured builds
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Four products.
              <br />
              <span className="text-zinc-500">One studio.</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white"
          >
            All projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              onMouseEnter={() => setActive(i)}
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0f17] to-[#06090e] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_80px_-20px_rgba(102,240,208,0.25)]"
            >
              {/* gradient wash */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30`}
              />

              <div className="relative flex items-start justify-between gap-6">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-2xl font-bold text-black shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]`}
                >
                  {p.glyph}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-300">
                  {p.status}
                </span>
              </div>

              <div className="relative mt-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  {p.category}
                </div>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-zinc-400">
                  {p.value}
                </p>
              </div>

              <div className="relative mt-10 flex items-center justify-between border-t border-white/5 pt-5">
                <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  /projects/{p.slug}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 group-hover:border-[#66f0d0]/50 group-hover:bg-[#66f0d0] group-hover:text-black">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
