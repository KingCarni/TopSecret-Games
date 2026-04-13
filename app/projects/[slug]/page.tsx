import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusPill } from "@/components/topsecret/status-pill";
import { getProjectBySlug } from "@/lib/topsecret/site-data";

const projectSections: Record<
  string,
  {
    label: string;
    title: string;
    body: string;
    accent: string;
  }[]
> = {
  nova: [
    {
      label: "What it is",
      title: "A workspace meant for longer-running execution",
      body:
        "NOVA is being shaped as an AI workspace and command center for work that does not fit cleanly inside disposable chats. The goal is persistent project context, clearer structure, and a better operating surface for builders.",
      accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
    },
    {
      label: "Current direction",
      title: "Context, structure, and operating clarity",
      body:
        "The current focus is strengthening how projects are represented, how context is carried forward, and how the interface supports real execution instead of one-off prompting.",
      accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
    },
    {
      label: "Why it matters",
      title: "A product lane with real intent behind it",
      body:
        "NOVA matters because it moves the studio beyond content generation and into productized AI tooling with a clear systems point of view.",
      accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
    },
    {
      label: "Next step",
      title: "Dedicated live surface later",
      body:
        "This studio page is the public-safe home for NOVA right now. A dedicated live site or subdomain can come later once the product surface is ready for public traffic.",
      accent: "from-[#8cf3e0]/75 via-[#44d6c2]/32 to-transparent",
    },
  ],
  "git-a-job": [
    {
      label: "What it is",
      title: "A practical tool for real job seekers",
      body:
        "Git-a-Job is built to help job seekers improve resumes, align with ATS constraints, and generate stronger application materials without bloated pricing or fake magic.",
      accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
    },
    {
      label: "Current direction",
      title: "Trust, utility, and proof-driven positioning",
      body:
        "The main work now is polishing the experience, strengthening trust signals, and making the value proposition clearer and more credible.",
      accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
    },
    {
      label: "Why it matters",
      title: "Shipped software with a real audience",
      body:
        "This is not a portfolio mockup. It is a live product with real users, real product decisions, and real tradeoffs around price, UX, and implementation.",
      accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
    },
    {
      label: "Public access",
      title: "Live where it should be",
      body:
        "The live site is where the public experience belongs. This page adds context, not a replacement flow.",
      accent: "from-[#8cf3e0]/75 via-[#44d6c2]/32 to-transparent",
    },
  ],
  "match-majesty": [
    {
      label: "What it is",
      title: "A fantasy match-3 lane with systems depth",
      body:
        "Match Majesty starts as a polished match-3 prototype, but the real appeal is the room for progression systems, kingdom-building, and longer-tail design work.",
      accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
    },
    {
      label: "Current direction",
      title: "Core loop clarity first",
      body:
        "The main focus is making the gameplay flow read more clearly, improving progression planning, and making the prototype feel like a system with future expansion potential.",
      accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
    },
    {
      label: "Why it matters",
      title: "Proof of game systems thinking",
      body:
        "This project shows the studio can do more than pitch game ideas. It is a test bed for systems design, presentation clarity, and iterative gameplay work.",
      accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
    },
    {
      label: "Public access",
      title: "Studio-facing for now",
      body:
        "This project does not need public source exposure. The studio page is the right place to present it while the game direction is still being sharpened.",
      accent: "from-[#8cf3e0]/75 via-[#44d6c2]/32 to-transparent",
    },
  ],
  "deady-bears-nightmare": [
    {
      label: "What it is",
      title: "A darker game lane built around identity",
      body:
        "Deady Bear's Nightmare is the horror side of the studio slate: atmosphere, identity, and a stronger creative direction than a generic concept deck.",
      accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
    },
    {
      label: "Current direction",
      title: "Direction-setting and production framing",
      body:
        "The current work is less about feature lists and more about establishing the right creative lane, feel, and production-facing identity for the project.",
      accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
    },
    {
      label: "Why it matters",
      title: "Creative range with a stronger edge",
      body:
        "It gives the studio a distinct tonal lane and proves the work is not confined to utility products and cleaner systems work.",
      accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
    },
    {
      label: "Public access",
      title: "Studio presentation over source exposure",
      body:
        "This is best presented as a curated studio project page while the project identity is still being shaped and tightened.",
      accent: "from-[#8cf3e0]/75 via-[#44d6c2]/32 to-transparent",
    },
  ],
};

function AccentCard({
  eyebrow,
  title,
  body,
  accent,
}: {
  eyebrow: string;
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.82)_0%,rgba(6,10,18,0.72)_100%)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_36px_rgba(0,120,104,0.12)]">
      <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${accent} blur-[0.5px]`} />
      <div className={`absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.04),transparent_44%),radial-gradient(circle_at_22%_0%,rgba(0,190,155,0.10),transparent_34%)]" />
      <div className="relative pt-7">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#66f0d0]/90">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">{title}</h2>
        <p className="mt-4 text-base leading-8 text-zinc-300">{body}</p>
      </div>
    </article>
  );
}

function ActionLink({ href, label, external, primary = false }: { href: string; label: string; external?: boolean; primary?: boolean }) {
  const cls = primary
    ? "inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
    : "inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#0d8a73]/60 px-6 py-3 text-sm font-semibold text-[#9ff7e5] transition hover:border-[#16b596] hover:text-white";
  if (external) {
    return <a href={href} target="_blank" rel="noreferrer" className={cls}>{label}</a>;
  }
  return <Link href={href} className={cls}>{label}</Link>;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const sections = projectSections[project.slug] ?? [];
  const detailLinks = project.links.filter((link) => !link.hideOnDetail);
  const showGitJobPreview = project.slug === "git-a-job";
  const currentFocusDisplay = project.slug === "git-a-job" ? "2.0 job search and apply - stronger search flow, clearer fit signals, and a more useful application surface for real candidates." : project.currentFocus;

  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <div className="relative overflow-hidden rounded-[32px] border border-[#0d8a73]/28 bg-[linear-gradient(180deg,rgba(6,20,18,0.92)_0%,rgba(6,12,14,0.78)_100%)] p-8 shadow-[0_0_0_1px_rgba(13,138,115,0.18),0_0_42px_rgba(0,120,104,0.12)] md:p-10 lg:p-12">
          <div className="absolute inset-x-0 top-0 h-[240px] bg-[radial-gradient(circle_at_18%_12%,rgba(0,186,150,0.18),transparent_32%),radial-gradient(circle_at_42%_18%,rgba(7,105,94,0.14),transparent_36%),linear-gradient(180deg,rgba(3,20,18,0.74)_0%,rgba(2,7,7,0)_100%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-400">{project.category}</p>
                <StatusPill label={project.status} />
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">{project.name}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{project.summary}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ActionLink href="/projects" label="All Projects" primary />
                {detailLinks.map((link) => (
                  <ActionLink key={`${project.slug}-${link.label}`} href={link.href} label={link.label} external={link.external} />
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#0d8a73]/35 bg-[linear-gradient(180deg,rgba(5,18,16,0.84)_0%,rgba(6,12,16,0.72)_100%)] p-5 shadow-[0_0_0_1px_rgba(13,138,115,0.16),0_0_34px_rgba(0,120,104,0.10)] md:p-6">
              <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(0,192,158,0.12),transparent_42%),radial-gradient(circle_at_76%_0%,rgba(7,105,94,0.10),transparent_36%)]" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">{showGitJobPreview ? "Product preview" : "Project surface"}</p>
              {showGitJobPreview ? (
                <div className="relative mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,25,0.96)_0%,rgba(6,12,20,0.92)_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_24px_rgba(0,124,108,0.08)]">
                  <Image src="/git-a-job-preview.png" alt="Git-a-Job product preview" width={1200} height={760} className="h-auto w-full rounded-2xl border border-white/10" />
                </div>
              ) : (
                <div className="relative mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,25,0.96)_0%,rgba(6,12,20,0.92)_100%)] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_24px_rgba(0,124,108,0.08)]">
                  <div className="absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.05),transparent_42%),radial-gradient(circle_at_26%_0%,rgba(0,190,155,0.08),transparent_34%)]" />
                  <div className="relative pt-4">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/48">Curated media slot</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{project.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">{project.slug === "nova" ? "NOVA stays studio-side for now while the product surface, context flow, and long-running workspace shape keep getting refined." : project.slug === "match-majesty" ? "Match Majesty is the early studio-facing surface for the match-3 concept, progression lane, and broader kingdom-building direction." : "Deady Bear's Nightmare is being framed around atmosphere, identity, and production-facing direction before any public release surface is needed."}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 md:pb-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <AccentCard key={section.title} eyebrow={section.label} title={section.title} body={section.body} accent={section.accent} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-12 md:px-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.82)_0%,rgba(6,10,18,0.72)_100%)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_36px_rgba(0,120,104,0.12)] sm:p-8">
          <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(0,190,155,0.12),transparent_42%),radial-gradient(circle_at_72%_0%,rgba(6,94,84,0.08),transparent_38%)]" />
          <div className="absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#66f0d0]/80 via-[#3ce4c3]/45 to-transparent blur-[0.5px]" />
          <div className="absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#66f0d0]/85 via-[#3ce4c3]/50 to-transparent" />
          <div className="relative pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">Current focus</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">What is being sharpened right now.</h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">{currentFocusDisplay}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-zinc-300 shadow-[0_0_24px_rgba(0,124,108,0.08)]">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Status</p>
                <p className="mt-3 text-lg font-semibold text-white">{project.status}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-zinc-300 shadow-[0_0_24px_rgba(0,124,108,0.08)]">
                <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Why now</p>
                <p className="mt-3 leading-7">{project.whyItMatters}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.82)_0%,rgba(6,10,18,0.72)_100%)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_36px_rgba(0,120,104,0.12)] sm:p-8">
          <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(127,232,255,0.12),transparent_42%),radial-gradient(circle_at_72%_0%,rgba(22,99,128,0.08),transparent_38%)]" />
          <div className="absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent blur-[0.5px]" />
          <div className="absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#7fe8ff]/85 via-[#41dfff]/40 to-transparent" />
          <div className="relative pt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">Tech / systems</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-zinc-200 shadow-[0_0_18px_rgba(0,124,108,0.06)]">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
