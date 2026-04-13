import Link from "next/link";
import { SectionHeading } from "@/components/topsecret/section-heading";
import { SpotlightPanel } from "@/components/topsecret/spotlight-panel";

const principles = [
  [
    "Execution over fluff",
    "The work should hold up when someone clicks deeper, inspects the details, and looks for proof.",
  ],
  [
    "Systems over chaos",
    "Product and game work both improve when structure, clarity, and repeatable patterns are treated as features.",
  ],
  [
    "Proof over claims",
    "Shipped titles, measurable outcomes, and live builds matter more than empty positioning or inflated language.",
  ],
];

const strengths = [
  "Shipped game QA support and release-facing work",
  "Live-service thinking and measurable product impact",
  "Cross-functional communication and stakeholder coordination",
  "Self-built products, studio framing, and systems discipline",
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
            About
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            A builder story rooted in QA, systems thinking, and execution.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-300">
            Top Secret Games exists to bring games, AI tools, and practical digital products under
            one credible studio identity.
          </p>
          <div className="mt-8 max-w-4xl space-y-5 text-base leading-8 text-zinc-300">
            <p>
              Harley Curtis brings shipped game QA experience, live-service thinking, stakeholder
              coordination, and self-driven product building into one studio frame. That mix is what
              makes the work feel grounded instead of hypothetical.
            </p>
            <p>
              The QA background matters because it sharpens how systems are designed, how risk is
              spotted, and how quality is protected when ideas turn into something real.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              View Proof of Work
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Browse Projects
            </Link>
          </div>
        </div>

        <SpotlightPanel
          eyebrow="Builder frame"
          title="Why this background translates"
          description="This site works because the same mindset carries across QA, product work, and studio presentation: reduce noise, keep the system honest, and make the proof easy to inspect."
          items={[
            { label: "Anchor", value: "QA-minded builder" },
            { label: "Default mode", value: "Structure first, polish second, claims last" },
            { label: "What gets protected", value: "Clarity, credibility, and execution quality" },
            { label: "What visitors should feel", value: "This is real work, not positioning theatre" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Operating strengths
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              What this background adds to the studio.
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-zinc-300">
              {strengths.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Studio use
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              How that shows up on the site.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Homepage",
                  "Clear identity, proof-first structure, and tighter framing instead of empty flair.",
                ],
                [
                  "Project pages",
                  "Public-safe CTAs, real status language, and stronger product-specific direction.",
                ],
                [
                  "Resume",
                  "Evidence elevated above duties, with live work and shipped support near the top.",
                ],
                [
                  "About",
                  "A builder story that explains the operating model without drifting into autobiography.",
                ],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10">
        <SectionHeading
          eyebrow="Operating principles"
          title="The site should feel deliberate, inspectable, and hard to bluff."
          body="That means clearer hierarchy, tighter claims, and enough structure that the work still holds up after the first impression fades."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {principles.map(([title, body]) => (
            <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
