import Link from "next/link";
import { PageShell, SectionLabel } from "@/components/topsecret/shared/PageShell";
import {
  ProjectGridCard,
  type ProjectCardData,
} from "@/components/topsecret/projects/ProjectGridCard";

export const metadata = {
  title: "Projects — Top Secret Games",
  description:
    "An operating record of the products, tools, and systems built under the Top Secret Games studio umbrella.",
};

const projects: ProjectCardData[] = [
  {
    index: "P / 01",
    title: "QAtalyst",
    tagline: "QA intelligence engine",
    description:
      "An internal-facing QA system that turns testing into a measurable, repeatable surface — triage, coverage maps, and release confidence on a single command deck.",
    status: "In Build",
    stack: ["QA Systems", "Workflow Design", "Reporting"],
    href: "/projects/qatalyst",
    accent: "emerald",
  },
  {
    index: "P / 02",
    title: "Git-a-Job",
    tagline: "ATS-aware résumé tooling",
    description:
      "A live product for real job seekers: keyword-aware résumé building, cover-letter generation, and a pipeline that respects how applicant tracking systems actually parse documents.",
    status: "Live",
    stack: ["Next.js", "AI", "ATS Parsing"],
    href: "/projects/git-a-job",
    externalHref: "https://git-a-job.com",
    accent: "cyan",
  },
  {
    index: "P / 03",
    title: "Master Draft Studios",
    tagline: "Studio + production layer",
    description:
      "The studio shell behind the games and creative IP — identity, production pipeline, and the systems that let small teams ship like larger ones.",
    status: "Internal",
    stack: ["Studio Ops", "Production", "Brand"],
    href: "/projects/master-draft-studios",
    accent: "amber",
  },
  {
    index: "P / 04",
    title: "NOVA",
    tagline: "AI command center",
    description:
      "A personal AI workspace built to coordinate projects, context, and execution across long-running work — designed for operators, not chat tabs.",
    status: "In Build",
    stack: ["AI Orchestration", "Workspaces", "Context"],
    href: "/projects/nova",
    accent: "violet",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        <SectionLabel number="00 / INDEX">Projects</SectionLabel>
        <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]">
          Four products.
          <br />
          <span className="text-white/45">One operating system</span>
          <br />
          for shipping work.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
          Games, AI tooling, and quality systems built under one studio. Each one is a record
          of execution — not a pitch deck.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {[
            { k: "Live", v: "1" },
            { k: "In Build", v: "2" },
            { k: "Internal", v: "1" },
            { k: "Domains", v: "Games / AI / QA" },
          ].map((s) => (
            <div key={s.k} className="bg-[#06090d] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
                {s.k}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="mb-10">
          <SectionLabel number="01 / GRID">Active surface</SectionLabel>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectGridCard key={p.href} project={p} />
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-36">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,18,18,0.9)_0%,rgba(6,10,18,0.9)_100%)] p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <SectionLabel number="02 / NEXT">Working channels</SectionLabel>
          <h2 className="relative mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Want to see how any of this works in practice?
          </h2>
          <div className="relative mt-10 flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              See the resume
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Back to lab
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
