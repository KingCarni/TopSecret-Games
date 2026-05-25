const qaProof = [
  "5+ years professional QA experience",
  "Console, PC, mobile, and VR platforms",
  "Shipped support across major titles",
  "QA leadership and triage ownership",
  "Automation-adjacent workflows",
  "Documentation systems at scale",
];

const labBuilds = [
  { name: "QAtalyst", phase: "active", note: "Triage + ticketing AI" },
  { name: "Git-a-Job", phase: "shipping", note: "ATS-aware resume tool" },
  { name: "Master Draft Studios", phase: "next", note: "Creative writing studio" },
  { name: "NOVA", phase: "later", note: "Command center workspace" },
];

export default function BuildShowcase() {
  return (
    <section className="relative px-6 py-32 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* QA credibility */}
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
              03 — shipped QA
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Tested under fire.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-400">
              Real titles, real teams, real release pressure. The product instincts
              come from years of holding the line on quality.
            </p>

            <ul className="mt-10 space-y-3">
              {qaProof.map((q, i) => (
                <li
                  key={q}
                  className="group flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all hover:border-[#66f0d0]/30 hover:bg-white/[0.04]"
                >
                  <span className="mt-1 font-mono text-[11px] text-zinc-600">
                    0{i + 1}
                  </span>
                  <span className="text-sm text-zinc-200">{q}</span>
                  <span className="ml-auto text-[#66f0d0] opacity-0 transition-opacity group-hover:opacity-100">
                    ✓
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lab pipeline */}
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b58bff]">
              04 — product lab
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Always building.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-zinc-400">
              Practical tools shipped in public. Each one solves a real workflow
              problem found while shipping games and software.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
              {labBuilds.map((b, i) => (
                <div
                  key={b.name}
                  className={`group relative flex items-center justify-between gap-4 px-5 py-5 transition-colors hover:bg-white/[0.04] ${
                    i !== labBuilds.length - 1 ? "border-b border-white/[0.06]" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="relative flex h-2 w-2">
                      {b.phase === "active" || b.phase === "shipping" ? (
                        <>
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#66f0d0] opacity-60" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#66f0d0]" />
                        </>
                      ) : (
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-zinc-600" />
                      )}
                    </span>
                    <div>
                      <div className="text-base font-semibold text-white">{b.name}</div>
                      <div className="text-xs text-zinc-500">{b.note}</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    {b.phase}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
