import Link from "next/link";
import { PageShell, SectionLabel } from "@/components/topsecret/shared/PageShell";
import { projects as projectSlate } from "@/lib/topsecret/site-data";
import {
  ProjectGridCard,
  type ProjectCardData,
} from "@/components/topsecret/projects/ProjectGridCard";

export const metadata = {
  title: "Projects - Top Secret Games",
  description:
    "An operating record of the products, tools, games, and systems built under the Top Secret Games studio umbrella.",
};

const accents: ProjectCardData["accent"][] = ["emerald", "cyan", "amber", "violet"];

function toCardStatus(status: string): ProjectCardData["status"] {
  if (status === "Live") return "Live";
  if (status === "Later" || status === "Concept") return "Concept";
  if (status === "Next") return "Internal";
  return "In Build";
}

const projects: ProjectCardData[] = projectSlate.map((project, index) => {
  const external = project.links.find((link) => link.external);

  return {
    index: `P / ${String(index + 1).padStart(2, "0")}`,
    title: project.name,
    tagline: project.media.title,
    description: project.short,
    status: toCardStatus(project.status),
    stack: project.tech.slice(0, 3),
    href: `/projects/${project.slug}`,
    externalHref: external?.href,
    accent: accents[index % accents.length],
  };
});

const liveCount = projectSlate.filter((project) => project.status === "Live").length;
const activeCount = projectSlate.filter(
  (project) => project.status === "Active" || project.status === "In Progress"
).length;
const futureCount = projectSlate.filter(
  (project) => project.status === "Next" || project.status === "Later" || project.status === "Concept"
).length;

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        <SectionLabel number="00 / INDEX">Projects</SectionLabel>
        <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]">
          Six projects.
          <br />
          <span className="text-white/45">One operating system</span>
          <br />
          for shipping work.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
          Games, AI tooling, education systems, and quality workflows built under one studio.
          Each one is a record of execution - not a pitch deck.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {[
            { k: "Live", v: String(liveCount) },
            { k: "Active", v: String(activeCount) },
            { k: "Future", v: String(futureCount) },
            { k: "Domains", v: "Games / AI / QA / Education" },
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
