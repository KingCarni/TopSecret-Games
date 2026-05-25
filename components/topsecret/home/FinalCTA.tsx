import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative px-6 pb-32 pt-16 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0a0f17] via-[#080c12] to-[#06090e] p-10 sm:p-16 md:p-20">
        {/* animated grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse at 70% 30%, black 30%, transparent 75%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(102,240,208,0.25),transparent_60%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(120,90,255,0.20),transparent_60%)] blur-2xl"
        />

        <div className="relative grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
              05 — start here
            </p>
            <h2 className="mt-5 text-[clamp(2.4rem,6vw,4.8rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
              See the work.
              <br />
              <span className="bg-gradient-to-r from-[#66f0d0] via-[#7fb4ff] to-[#b58bff] bg-clip-text text-transparent">
                Then let's build.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              The proof is in the resume, the projects, and what's actively shipping
              in the lab. Pick a path.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-4">
            <Link
              href="/resume"
              className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white px-6 py-5 text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(102,240,208,0.35)]"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  01
                </div>
                <div className="mt-1 text-base font-semibold">View Resume</div>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/projects"
              className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-5 text-white backdrop-blur transition-all hover:border-[#66f0d0]/40 hover:bg-white/[0.06]"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  02
                </div>
                <div className="mt-1 text-base font-semibold">Explore Projects</div>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/now-building"
              className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.03] px-6 py-5 text-white backdrop-blur transition-all hover:border-[#b58bff]/40 hover:bg-white/[0.06]"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  03
                </div>
                <div className="mt-1 text-base font-semibold">Now Building</div>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
