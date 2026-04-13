import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectMediaPanel } from "@/components/topsecret/project-media-panel";
import { SectionHeading } from "@/components/topsecret/section-heading";
import { StatusPill } from "@/components/topsecret/status-pill";
import { getProjectBySlug } from "@/lib/topsecret/site-data";

const projectSections: Record<
  string,
  {
    label: string;
    title: string;
    body: string;
  }[]
> = {
  nova: [
    {
      label: "What it is",
      title: "A workspace meant for longer-running execution",
      body:
        "NOVA is being shaped as an AI workspace and command center for work that does not fit cleanly inside disposable chats. The goal is persistent project context, clearer structure, and a better operating surface for builders.",
    },
    {
      label: "Current direction",
      title: "Context, structure, and operating clarity",
      body:
        "The current focus is strengthening how projects are represented, how context is carried forward, and how the interface supports real execution instead of one-off prompting.",
    },
    {
      label: "Why it matters",
      title: "A product lane with real intent behind it",
      body:
        "NOVA matters because it moves the studio beyond content generation and into productized AI tooling with a clear systems point of view.",
    },
    {
      label: "Next step",
      title: "Dedicated live surface later",
      body:
        "This studio page is the public-safe home for NOVA right now. A dedicated live site or subdomain can come later once the product surface is ready for public traffic.",
    },
  ],
  "git-a-job": [
    {
      label: "What it is",
      title: "A practical tool for real job seekers",
      body:
        "Git-a-Job is built to help job seekers improve resumes, align with ATS constraints, and generate stronger application materials without bloated pricing or fake magic.",
    },
    {
      label: "Current direction",
      title: "Trust, utility, and proof-driven positioning",
      body:
        "The main work now is polishing the experience, strengthening trust signals, and making the value proposition clearer and more credible.",
    },
    {
      label: "Why it matters",
      title: "A live product with real constraints",
      body:
        "This is not a portfolio mockup. It is a live product with real users, real product decisions, and real tradeoffs around price, UX, and implementation.",
    },
    {
      label: "Public access",
      title: "Visit the live product",
      body:
        "The public-facing destination for Git-a-Job is the live site. Studio pages are there to add context, not replace the product.",
    },
  ],
  "match-majesty": [
    {
      label: "What it is",
      title: "A fantasy match-3 lane with systems depth",
      body:
        "Match Majesty starts as a polished match-3 prototype, but the real appeal is the room for progression systems, kingdom-building, and longer-tail design work.",
    },
    {
      label: "Current direction",
      title: "Core loop clarity first",
      body:
        "The main focus is making the gameplay flow read more clearly, improving progression planning, and making the prototype feel like a system with future expansion potential.",
    },
    {
      label: "Why it matters",
      title: "Proof of game systems thinking",
      body:
        "This project shows the studio can do more than pitch game ideas. It is a test bed for systems design, presentation clarity, and iterative gameplay work.",
    },
    {
      label: "Public access",
      title: "Studio-facing for now",
      body:
        "This project does not need public source exposure. The studio page is the right place to present it while the game direction is still being sharpened.",
    },
  ],
  "deady-bears-nightmare": [
    {
      label: "What it is",
      title: "A darker game lane built around identity",
      body:
        "Deady Bear's Nightmare is the horror side of the studio slate: atmosphere, identity, and a stronger creative direction than a generic concept deck.",
    },
    {
      label: "Current direction",
      title: "Direction-setting and production framing",
      body:
        "The current work is less about feature lists and more about establishing the right creative lane, feel, and production-facing identity for the project.",
    },
    {
      label: "Why it matters",
      title: "Creative range with a stronger edge",
      body:
        "It gives the studio a distinct tonal lane and proves the work is not confined to utility products and cleaner systems work.",
    },
    {
      label: "Public access",
      title: "Studio presentation over source exposure",
      body:
        "This is best presented as a curated studio project page while the project identity is still being shaped and tightened.",
    },
  ],
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sections = projectSections[project.slug] ?? [];
  const detailLinks = project.links.filter((link) => !link.hideOnDetail);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-sm uppercase tracking-[0.22em] text-zinc-400">{project.category}</p>
          <StatusPill label={project.status} />
        </div>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          {project.name}
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-300">{project.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full border border-white/10 px-5 py-3 text-sm text-white hover:bg-white/5"
          >
            All Projects
          </Link>
          {detailLinks.map((link) => (
            <Link
              key={`${project.slug}-${link.label}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="rounded-full border border-emerald-400/30 px-5 py-3 text-sm text-emerald-200 hover:bg-emerald-400/10"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 lg:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <SectionHeading eyebrow={section.label} title={section.title} body={section.body} />
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Current focus"
            title="What is being sharpened right now"
            body={project.currentFocus}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-5 text-sm text-zinc-300">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Status</p>
              <p className="mt-3 text-lg font-semibold text-white">{project.status}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-5 text-sm text-zinc-300">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Why now</p>
              <p className="mt-3">{project.whyItMatters}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">Tech / systems</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950/40 p-5 text-sm leading-7 text-zinc-300">
            Replace chips, wording, or ordering here as the real public-facing tech stack becomes
            more useful than broad framing.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <ProjectMediaPanel project={project} />
      </section>
    </>
  );
}
