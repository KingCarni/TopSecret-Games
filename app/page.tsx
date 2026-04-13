import Link from "next/link";
import { ProjectCard } from "@/components/topsecret/project-card";
import { ProofCard } from "@/components/topsecret/proof-card";
import { SectionHeading } from "@/components/topsecret/section-heading";
import {
  heroSummary,
  homepageProof,
  nowBuilding,
  primarySummary,
  projects,
  trustPoints,
} from "@/lib/topsecret/site-data";

export default function HomePage() {
  const homepageProjects = projects.map((project) => {
    if (project.slug === "match-majesty") return { ...project, status: "Next" as const };
    if (project.slug === "deady-bears-nightmare") return { ...project, status: "Later" as const };
    return project;
  });

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-16 sm:pb-20 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Virtual HQ
            </p>
            <h1 className="mt-4 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Games, AI tools, and practical systems - built with proof.
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-200">{heroSummary}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{primarySummary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Explore Proof of Work
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-emerald-400/30 px-6 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/10"
              >
                About the Builder
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-400/20 bg-white/5 p-6 shadow-2xl shadow-emerald-950/20">
            <p className="text-xs uppercase tracking-[0.26em] text-zinc-400">Studio frame</p>
            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-zinc-950/50 p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Role</p>
              <p className="mt-3 text-2xl font-semibold text-white">QA-minded builder</p>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/50 p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Focus</p>
                <p className="mt-3 text-base leading-8 text-zinc-200">
                  Execution, systems thinking, and proof over positioning.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/50 p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Current lane</p>
                <p className="mt-3 text-base leading-8 text-zinc-200">
                  Products, AI tooling, portfolio proof, and game development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 md:grid-cols-2 xl:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-white/10 bg-zinc-950/40 px-5 py-4 text-sm text-zinc-300"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Featured work"
          title="Work across products, games, and systems."
          body="The goal is not to look busy. The goal is to make the range feel coherent, credible, and easy to verify."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {homepageProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="What lives here"
          title="More than a portfolio. A working studio hub."
          body="This site functions as a portfolio, proof hub, and builder home for current and future work."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            [
              "Games",
              "Playable concepts, progression systems, interface work, and identity-driven projects with room to expand.",
            ],
            [
              "AI Products",
              "Useful software, workflow tools, and practical AI experiences built around real outcomes instead of empty hype.",
            ],
            [
              "Systems & Proof",
              "Documentation, structure, iteration, and evidence-driven presentation that make the work hold up under scrutiny.",
            ],
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-8 text-zinc-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Proof of work"
          title="Shipped work, proven impact, and real execution."
          body="The strongest claims here are backed by shipped titles, leadership scope, measurable business impact, and built products."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {homepageProof.map((item) => (
            <ProofCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Active work"
          title="Active work, not fake roadmap theatre."
          body="A quick read on what is active now, what is next, and what is being shaped for later."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {nowBuilding.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-300">
                {item.phase}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-8 text-zinc-300">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/now-building"
            className="inline-flex rounded-full border border-emerald-400/30 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/10"
          >
            Open Now Building
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-4">
        <div className="rounded-[2rem] border border-emerald-400/20 bg-emerald-400/10 p-8 shadow-2xl shadow-emerald-950/10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Built by Harley Curtis
          </p>
          <p className="mt-4 max-w-4xl text-2xl leading-10 text-white sm:text-4xl sm:leading-tight">
            Senior QA Analyst, QA lead, and systems-minded builder focused on work that can be
            inspected, tested, and backed up.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50/85">
            Top Secret Games works best as a builder homepage: a place where shipped experience,
            current projects, and proof all live in one clean system.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              View Resume
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
