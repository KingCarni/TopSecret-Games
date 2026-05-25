"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const bootLines = [
  "▸ booting top_secret_games.lab",
  "▸ loading shipped_titles[].manifest",
  "▸ syncing qa_pipeline → live_service.metrics",
  "▸ mounting product_lab/{qatalyst, git-a-job, mds, nova}",
  "▸ ready.",
];

export default function HeroLab() {
  const [lineIndex, setLineIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setLineIndex((i) => (i + 1) % (bootLines.length + 2));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center px-6 pb-24 pt-28 sm:px-10 lg:px-16">
      {/* Animated accent orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(102,240,208,0.18),transparent_60%)] blur-2xl animate-[pulse_8s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-48 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(120,90,255,0.16),transparent_60%)] blur-2xl animate-[pulse_11s_ease-in-out_infinite]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#66f0d0] backdrop-blur transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#66f0d0] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#66f0d0]" />
            </span>
            Studio · Product Lab · Live
          </div>

          <h1
            className={`mt-6 text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[1.02] tracking-[-0.02em] transition-all delay-150 duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Games, AI products,
            <br />
            and practical systems —{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#66f0d0] via-[#7fb4ff] to-[#b58bff] bg-clip-text text-transparent">
                built with proof.
              </span>
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left scale-x-0 animate-[grow_1.2s_ease-out_0.6s_forwards] bg-gradient-to-r from-[#66f0d0] via-[#7fb4ff] to-[#b58bff]"
              />
            </span>
          </h1>

          <p
            className={`mt-7 max-w-2xl text-lg leading-8 text-zinc-300/90 transition-all delay-300 duration-700 sm:text-xl ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Top Secret Games is the public studio and product lab for{" "}
            <span className="text-white">Harley Curtis</span> — combining shipped QA work,
            live-service product thinking, AI tools, and self-built systems.
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all delay-500 duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Link
              href="/resume"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(102,240,208,0.35)]"
            >
              <span className="relative z-10">View Proof of Work</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#66f0d0] via-[#7fb4ff] to-[#b58bff] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-[#66f0d0]/40 hover:bg-white/[0.06]"
            >
              Explore Projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { k: "5+ yrs", v: "Shipped QA" },
              { k: "4", v: "Active builds" },
              { k: "All", v: "Platforms" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: animated lab interface */}
        <div className="lg:col-span-5">
          <div
            className={`relative transition-all delay-300 duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Floating module 1 — terminal */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080c12]/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-[11px] font-mono tracking-wider text-zinc-500">
                  tsg.lab — boot.sequence
                </span>
              </div>
              <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed text-zinc-300">
                {bootLines.slice(0, Math.min(lineIndex + 1, bootLines.length)).map((l, i) => (
                  <div
                    key={i}
                    className={
                      i === bootLines.length - 1 && lineIndex >= bootLines.length - 1
                        ? "text-[#66f0d0]"
                        : ""
                    }
                  >
                    {l}
                    {i === Math.min(lineIndex, bootLines.length - 1) && (
                      <span className="ml-1 inline-block h-3.5 w-1.5 -translate-y-[1px] animate-pulse bg-[#66f0d0] align-middle" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating module 2 — system map */}
            <div className="absolute -bottom-12 -left-6 w-[78%] rotate-[-3deg] rounded-2xl border border-white/10 bg-[#0a0f17]/90 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur transition-transform hover:rotate-0">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  system map
                </span>
                <span className="text-[10px] font-mono text-[#66f0d0]">● live</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-[3px] bg-gradient-to-br from-white/[0.04] to-white/[0.01]"
                    style={{
                      backgroundColor:
                        [3, 6, 9, 10, 13].includes(i)
                          ? "rgba(102,240,208,0.55)"
                          : [1, 7, 12].includes(i)
                          ? "rgba(127,180,255,0.4)"
                          : undefined,
                      animation: `pulse ${2 + (i % 4)}s ease-in-out ${i * 0.1}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating module 3 — badge */}
            <div className="absolute -right-4 -top-6 rotate-[4deg] rounded-xl border border-white/10 bg-[#0a0f17]/90 px-4 py-3 shadow-xl backdrop-blur transition-transform hover:rotate-0">
              <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                clearance
              </div>
              <div className="mt-1 font-mono text-sm text-[#66f0d0]">TS-//BUILDER</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
        <span className="inline-block animate-bounce">↓ scroll</span>
      </div>

      <style jsx>{`
        @keyframes grow {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
