import Link from "next/link";
import {
  ArrowUpRight,
  Gamepad2,
  ShieldCheck,
  Workflow,
  FileCheck2,
  Sparkles,
  Layers,
} from "lucide-react";
import { PageShell, SectionLabel } from "@/components/topsecret/shared/PageShell";
import { projects } from "@/lib/topsecret/site-data";
import {
  CapabilityCard,
  type Capability,
} from "@/components/topsecret/about/CapabilityCard";
import {
  PrincipleRow,
  type Principle,
} from "@/components/topsecret/about/PrincipleRow";

export const metadata = {
  title: "About — Top Secret Games",
  description:
    "Top Secret Games is the public studio and product lab for Harley Curtis — QA lead, systems-minded builder, and product creator working across game QA, AI tools, education systems, and practical software.",
};

const identity = [
  { k: "Role", v: "QA Lead · Builder" },
  { k: "Discipline", v: "QA / AI / Product" },
  { k: "Experience", v: "5+ years shipped" },
  { k: "Mode", v: "Building in public" },
];

const capabilities: Capability[] = [
  {
    index: "C / 01",
    title: "5+ years shipped QA",
    body: "Console, PC, mobile, and VR. Real production cycles, not side projects. Work that went out the door under deadline.",
    accent: "#66f0d0",
    icon: Gamepad2,
  },
  {
    index: "C / 02",
    title: "QA leadership & triage",
    body: "Owning quality across teams of 8-12, running triage, coordinating contractors, and keeping release confidence measurable.",
    accent: "#7fe8ff",
    icon: ShieldCheck,
  },
  {
    index: "C / 03",
    title: "Documentation & workflow systems",
    body: "Test plans, onboarding flows, Jira/TestRail pipelines, and the connective tissue that keeps QA legible for the rest of the team.",
    accent: "#ffd65a",
    icon: Workflow,
  },
  {
    index: "C / 04",
    title: "Shipped game support",
    body: "Gears of War: E-Day, NHL 21-23, UFC 4, Prodigy live-service. Production work, not portfolio decoration.",
    accent: "#c9a8ff",
    icon: FileCheck2,
  },
  {
    index: "C / 05",
    title: "AI-assisted product dev",
    body: "Using AI as a builder, not a demo. Shipping real tools across resume workflows, QA intelligence, education systems, and creative production.",
    accent: "#66f0d0",
    icon: Sparkles,
  },
  {
    index: "C / 06",
    title: "Studio-scale execution",
    body: "Operating as a small team that ships like a larger one: identity, production pipeline, and repeatable surfaces.",
    accent: "#7fe8ff",
    icon: Layers,
  },
];

const principles: Principle[] = [
  {
    index: "P / 01",
    title: "Proof over pitch",
    body: "Anything shown here should be inspectable. Live links, shipped releases, written records, working tools. Slides are not the artifact.",
    accent: "#66f0d0",
  },
  {
    index: "P / 02",
    title: "Systems before spectacle",
    body: "Clean workflows beat clever demos. The point is something a team can actually use on Monday: repeatable, documented, debuggable.",
    accent: "#7fe8ff",
  },
  {
    index: "P / 03",
    title: "Practical tools, not empty demos",
    body: "Every product lane solves a job someone actually has. If it does not survive contact with a real workflow, it does not ship.",
    accent: "#ffd65a",
  },
  {
    index: "P / 04",
    title: "Readable work",
    body: "Code, tests, and tickets should explain themselves. Future-me and the next person on the team are the primary audience.",
    accent: "#c9a8ff",
  },
  {
    index: "P / 05",
    title: "Quality, clarity, execution",
    body: "The same three lenses, applied to QA work, product work, and studio work. Everything Top Secret Games ships passes through them.",
    accent: "#66f0d0",
  },
];

const laneAccents = ["#66f0d0", "#7fe8ff", "#ffd65a", "#c9a8ff", "#9aff7f", "#ff9b66"];
const lanes = projects.map((project, index) => ({
  name: project.name,
  tag: project.media.title,
  accent: laneAccents[index % laneAccents.length],
  href: `/projects/${project.slug}`,
}));

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        <SectionLabel number="00 / IDENTITY">About</SectionLabel>
        <h1 className="mt-10 max-w-5xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl lg:text-[88px]">
          A QA lead, product builder,
          <br />
          <span className="text-white/45">and systems thinker</span>
          <br />
          building in public.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
          Top Secret Games is where shipped QA experience, practical product thinking,
          and self-built tools come together under{" "}
          <span className="text-white">one studio identity.</span>
        </p>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {identity.map((s, i) => (
            <div key={s.k} className="bg-[#06090d] p-5">
              <span className="font-mono text-[11px] tracking-[0.3em] text-[#66f0d0]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                {s.k}
              </p>
              <p className="mt-2 text-base font-semibold text-white">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <SectionLabel number="01 / CAPABILITY">What I bring</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          A working stack of QA, product,
          <span className="text-white/45"> and execution.</span>
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((c) => (
            <CapabilityCard key={c.title} cap={c} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <SectionLabel number="02 / METHOD">How I work</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Five lenses applied to
          <span className="text-white/45"> every lane.</span>
        </h2>
        <div className="mt-12">
          {principles.map((p) => (
            <PrincipleRow key={p.index} p={p} />
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <SectionLabel number="03 / TRAJECTORY">
          What Top Secret Games is becoming
        </SectionLabel>
        <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
          Six product lanes, one operating system{" "}
          <span className="text-white/45">for shipping work.</span>
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lanes.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#06090d] p-6 transition hover:border-white/25"
              style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 20px 60px -50px ${l.accent}`,
              }}
            >
              <div
                aria-hidden
                className="absolute left-6 top-4 h-[3px] w-16 rounded-full"
                style={{ background: `linear-gradient(90deg, ${l.accent}, transparent)` }}
              />
              <span className="font-mono text-[11px] tracking-[0.3em] text-white/50">
                L / 0{i + 1}
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{l.name}</h3>
              <p
                className="mt-1 text-sm font-medium"
                style={{ color: l.accent }}
              >
                {l.tag}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 transition group-hover:text-white">
                Open
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
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
          <SectionLabel number="04 / NEXT">Working channels</SectionLabel>
          <h2 className="relative mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            The studio is the index.
            <br />
            <span className="text-white/45">The work is the proof.</span>
          </h2>
          <div className="relative mt-10 flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              View resume
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Explore projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/now-building"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              See what&rsquo;s building
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
