import Link from "next/link";

const principles = [
  {
    title: "Execution over fluff",
    body: "The work should still make sense when someone clicks deeper, inspects the details, and asks what actually shipped.",
    accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
  },
  {
    title: "Systems over chaos",
    body: "The same operating model shows up in QA, product work, documentation, and how the studio presents itself publicly.",
    accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
  },
  {
    title: "Proof over posture",
    body: "Shipped work, measurable outcomes, and useful products matter more than inflated positioning or generic portfolio language.",
    accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
  },
];

const strengths = [
  "Shipped game QA support across major titles",
  "Live-service product thinking with measurable business impact",
  "Cross-functional coordination, triage, and systems discipline",
  "Self-built products and studio framing that hold up publicly",
];

const studioUses = [
  { title: "Homepage", body: "Clear identity, stronger proof framing, and a cleaner public-facing studio surface." },
  { title: "Resume", body: "Evidence near the top, tighter role history, and visible work that backs up the claims." },
  { title: "Projects", body: "Curated project pages with public-safe links, current focus, and better execution context." },
  { title: "About", body: "A direct explanation of how the work is structured, evaluated, and presented." },
];

function GlowCard({ eyebrow, title, body, accent }: { eyebrow: string; title: string; body?: string; accent: string }) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.84)_0%,rgba(6,10,18,0.74)_100%)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_34px_rgba(0,120,104,0.12)] sm:p-8">
      <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${accent} blur-[0.5px]`} />
      <div className={`absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.04),transparent_44%),radial-gradient(circle_at_22%_0%,rgba(0,190,155,0.10),transparent_34%)]" />
      <div className="relative pt-7">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">{eyebrow}</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
        {body ? <p className="mt-4 text-base leading-8 text-zinc-300">{body}</p> : null}
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <div className="relative overflow-hidden rounded-[32px] border border-[#0d8a73]/28 bg-[linear-gradient(180deg,rgba(6,20,18,0.92)_0%,rgba(6,12,14,0.78)_100%)] p-8 shadow-[0_0_0_1px_rgba(13,138,115,0.18),0_0_42px_rgba(0,120,104,0.12)] md:p-10 lg:p-12">
          <div className="absolute inset-x-0 top-0 h-[240px] bg-[radial-gradient(circle_at_18%_12%,rgba(0,186,150,0.18),transparent_32%),radial-gradient(circle_at_42%_18%,rgba(7,105,94,0.14),transparent_36%),linear-gradient(180deg,rgba(3,20,18,0.74)_0%,rgba(2,7,7,0)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(circle_at_8%_24%,rgba(0,186,150,0.10),transparent_42%)]" />
          <div className="relative z-10 max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">About</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">The builder logic behind the studio.</h1>
            <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-zinc-300">
              <p>Top Secret Games is the public-facing studio home for Harley Curtis: shipped game QA, live-service product thinking, self-built software, and game development under one clear system.</p>
              <p>The QA background matters because it changes how work gets framed. Risk gets spotted earlier, structure is taken seriously, and the finished presentation is expected to hold up after the first impression.</p>
              <p>That same mindset carries into product work, portfolio structure, and project execution. The goal is straightforward: make the work clear, inspectable, and difficult to bluff.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/resume" className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">View Proof of Work</Link>
              <Link href="/projects" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#0d8a73]/60 px-6 py-3 text-sm font-semibold text-[#9ff7e5] transition hover:border-[#16b596] hover:text-white">Browse Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 md:pb-14">
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
          <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.84)_0%,rgba(6,10,18,0.74)_100%)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_34px_rgba(0,120,104,0.12)] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(0,190,155,0.12),transparent_42%),radial-gradient(circle_at_72%_0%,rgba(6,94,84,0.08),transparent_38%)]" />
            <div className="absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#66f0d0]/80 via-[#3ce4c3]/45 to-transparent blur-[0.5px]" />
            <div className="absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#66f0d0]/85 via-[#3ce4c3]/50 to-transparent" />
            <div className="relative pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">Operating strengths</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">What this background adds to the studio.</h2>
              <ul className="mt-6 space-y-4 text-sm leading-8 text-zinc-300">
                {strengths.map((item) => (<li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#66f0d0]" /><span>{item}</span></li>))}
              </ul>
            </div>
          </article>
          {principles.map((item) => (<GlowCard key={item.title} eyebrow="Operating principle" title={item.title} body={item.body} accent={item.accent} />))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 md:pb-14">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.84)_0%,rgba(6,10,18,0.74)_100%)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_34px_rgba(0,120,104,0.12)] sm:p-8">
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_18%_0%,rgba(127,232,255,0.12),transparent_42%),radial-gradient(circle_at_74%_0%,rgba(6,94,84,0.08),transparent_38%)]" />
          <div className="absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent blur-[0.5px]" />
          <div className="absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#7fe8ff]/85 via-[#41dfff]/40 to-transparent" />
          <div className="relative pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">Studio use</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">How the system shows up across the site.</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {studioUses.map((item, index) => (
                <div key={item.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,25,0.95)_0%,rgba(6,12,20,0.90)_100%)] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_24px_rgba(0,124,108,0.08)]">
                  <div className={`absolute inset-x-0 top-0 h-px ${index === 0 ? "bg-[#2ee6c8]/35" : index === 1 ? "bg-[#74e0ff]/25" : index === 2 ? "bg-[#c990ff]/30" : "bg-[#ffd548]/25"}`} />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-zinc-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
