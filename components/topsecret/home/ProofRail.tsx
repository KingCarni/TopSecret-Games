import CursorGlow from "@/components/topsecret/shared/CursorGlow";

const points = [
  { k: "Not a portfolio", v: "A builder identity backed by shipped work." },
  { k: "Proof over polish", v: "Every claim ties to a product, repo, or release." },
  { k: "Systems thinking", v: "QA-grade rigor applied across product execution." },
  { k: "Active lab", v: "Tools shipping in public, iterating in the open." },
];

export default function ProofRail() {
  return (
    <section className="relative px-6 py-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
              01 — proof first
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              This isn't a portfolio.
              <br />
              <span className="text-zinc-500">It's a record of execution.</span>
            </h2>
          </div>
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-600 md:block">
            // record.md
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <CursorGlow
              key={p.k}
              as="article"
              className="group bg-[#06090e] p-7 transition-colors hover:bg-[#0a0f17]"
              size={260}
              color="rgba(102, 240, 208, 0.12)"
              accent="rgba(127, 180, 255, 0.06)"
            >
              <div className="font-mono text-[11px] text-zinc-600">
                0{i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.k}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{p.v}</p>
              <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#66f0d0] via-[#7fb4ff] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </CursorGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
