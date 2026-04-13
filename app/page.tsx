import Link from "next/link";

import { ProjectCard } from "@/components/topsecret/project-card";
import { projects } from "@/lib/topsecret/site-data";

const homepageProjects = projects.map((project) => {
  if (project.slug === "match-majesty") return { ...project, status: "Next" as const };
  if (project.slug === "deady-bears-nightmare") return { ...project, status: "Later" as const };
  return project;
});

const trustPoints = [
  "Shipped game QA support across major titles",
  "Live-service impact with measurable results",
  "Self-built products and active studio work",
  "QA-minded systems thinking applied to product and game execution",
];

const heroSummary =
  "Top Secret Games is the public-facing studio home for Harley Curtis - bringing shipped game QA, live-service product thinking, self-built software, and game development under one serious builder identity.";

const primarySummary =
  "Senior QA Analyst and systems-minded builder focused on work that can be inspected, tested, and backed up.";

function GlowFrame({
  children,
  accent = "from-[#66f0d0]/80 via-[#3ce4c3]/45 to-transparent",
  strength = "base",
}: {
  children: React.ReactNode;
  accent?: string;
  strength?: "soft" | "base";
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.82)_0%,rgba(6,10,18,0.72)_100%)] ${
        strength === "soft"
          ? "shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_26px_rgba(0,120,104,0.10)]"
          : "shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_34px_rgba(0,120,104,0.12)]"
      }`}
    >
      <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${accent} blur-[0.5px]`} />
      <div className={`absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.04),transparent_44%),radial-gradient(circle_at_22%_0%,rgba(0,190,155,0.10),transparent_34%)]" />
      <div className="relative p-6 sm:p-8">{children}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{body}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 sm:pb-20 sm:pt-20 md:px-10">
          <div className="max-w-5xl">
            <GlowFrame accent="from-[#66f0d0]/85 via-[#3ce4c3]/50 to-transparent">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">Virtual HQ</p>
                <span className="inline-flex min-h-[38px] items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                  QA-minded builder
                </span>
              </div>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Games, AI tools, and practical systems - built with proof.
              </h1>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-200">{heroSummary}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{primarySummary}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/projects" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200">
                  View Projects
                </Link>
                <Link href="/resume" className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5">
                  Explore Proof of Work
                </Link>
                <Link href="/about" className="rounded-full border border-emerald-400/30 px-6 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/10">
                  About the Builder
                </Link>
              </div>
            </GlowFrame>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 md:grid-cols-2 xl:grid-cols-4 md:px-10">
          {trustPoints.map((point, index) => (
            <GlowFrame
              key={point}
              accent={index % 4 === 0 ? "from-[#66f0d0]/70 via-[#3ce4c3]/35 to-transparent" : index % 4 === 1 ? "from-[#7fe8ff]/70 via-[#41dfff]/30 to-transparent" : index % 4 === 2 ? "from-[#ffd65a]/72 via-[#ffcf40]/28 to-transparent" : "from-[#8cf3e0]/70 via-[#44d6c2]/30 to-transparent"}
              strength="soft"
            >
              <div className="p-0 text-sm text-zinc-300">{point}</div>
            </GlowFrame>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading eyebrow="Featured work" title="Work across products, games, and systems."  />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {homepageProjects.map((project, index) => (
            <GlowFrame key={project.slug} accent={index % 4 === 0 ? "from-[#66f0d0]/80 via-[#3ce4c3]/45 to-transparent" : index % 4 === 1 ? "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent" : index % 4 === 2 ? "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent" : "from-[#c990ff]/70 via-[#a46aff]/28 to-transparent"}>
              <ProjectCard project={project} />
            </GlowFrame>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading eyebrow="What lives here" title="More than a portfolio. A working studio hub."  />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            ["Games", "Playable concepts, progression systems, interface work, and identity-driven projects with room to expand.", "from-[#66f0d0]/80 via-[#3ce4c3]/45 to-transparent"],
            ["AI Products", "Useful software, workflow tools, and practical AI experiences built around real outcomes instead of empty hype.", "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent"],
            ["Systems & Proof", "Documentation, structure, iteration, and evidence-driven presentation that make the work hold up under scrutiny.", "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent"],
          ].map(([title, body, accent]) => (
            <GlowFrame key={title} accent={accent as string}>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-8 text-zinc-300">{body}</p>
            </GlowFrame>
          ))}
        </div>
      </section>
    </main>
  );
}
