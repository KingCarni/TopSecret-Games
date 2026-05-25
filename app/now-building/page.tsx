import Link from "next/link";
import { ArrowUpRight, Radio } from "lucide-react";
import { PageShell, SectionLabel } from "@/components/topsecret/shared/PageShell";
import { LaneCard, type Lane } from "@/components/topsecret/now-building/LaneCard";

export const metadata = {
  title: "Now Building — Top Secret Games",
  description:
    "A live lab status: what's actively being built, what's next, and what's being shaped behind the scenes across QAtalyst, Git-a-Job, Master Draft Studios, and NOVA.",
};

const lanes: Lane[] = [
  {
    index: "L / 01",
    name: "QAtalyst",
    tagline: "QA intelligence engine",
    phase: "Active",
    accent: "#66f0d0",
    href: "/projects/qatalyst",
    focus: [
      "QA triage surface — turning noisy bug intake into actionable lanes.",
      "Ticket-to-test-case generation and clean ticket drafting flows.",
      "Jira, TestRail, and Playwright workflow integrations.",
      "Release confidence reporting designed for stakeholders, not just QA.",
    ],
  },
  {
    index: "L / 02",
    name: "Git-a-Job",
    tagline: "ATS-aware résumé tooling",
    phase: "Active",
    accent: "#7fe8ff",
    href: "/projects/git-a-job",
    focus: [
      "Git-a-Job 2.0 — sharper job search and apply experience.",
      "Clearer fit signals between résumé, posting, and ATS parsing.",
      "Stronger trust cues across the candidate flow.",
      "A more useful end-to-end pipeline for real job seekers.",
    ],
  },
  {
    index: "L / 03",
    name: "Master Draft Studios",
    tagline: "Studio + production layer",
    phase: "Next",
    accent: "#ffd65a",
    href: "/projects/master-draft-studios",
    focus: [
      "Script writing, note-taking, and brainstorming as a connected surface.",
      "Context memory across long-running creative work.",
      "Pitch decks and image generation wired into the same workspace.",
      "Export workflow planning — from idea to deliverable.",
    ],
  },
  {
    index: "L / 04",
    name: "NOVA",
    tagline: "AI command center",
    phase: "Active",
    accent: "#c9a8ff",
    href: "/projects/nova",
    focus: [
      "Workspace architecture for operators, not chat tabs.",
      "Context carry-forward across sessions and projects.",
      "Project memory tuned for long-running execution.",
      "A stronger surface for coordinating real work end-to-end.",
    ],
  },
];

const philosophy = [
  {
    index: "01",
    title: "Ship useful things",
    body: "Utility first. If it doesn't earn a place in a real workflow, it doesn't earn the polish.",
    accent: "#66f0d0",
  },
  {
    index: "02",
    title: "Validate with real workflows",
    body: "Every lane is tested against actual jobs people do — QA triage, job hunting, creative production, project execution.",
    accent: "#7fe8ff",
  },
  {
    index: "03",
    title: "Keep proof visible",
    body: "Status, decisions, and trade-offs are part of the product. The build board is public on purpose.",
    accent: "#ffd65a",
  },
  {
    index: "04",
    title: "Avoid fake polish",
    body: "No motion for motion's sake. No marketing language pretending to be a feature. Surfaces stay honest.",
    accent: "#c9a8ff",
  },
  {
    index: "05",
    title: "Iterate publicly where possible",
    body: "Notes, screenshots, and shipped slices over private decks. The lab is the demo.",
    accent: "#66f0d0",
  },
];

const status = [
  { k: "Active", v: "3" },
  { k: "Next", v: "1" },
  { k: "Domains", v: "QA / AI / Studio" },
  { k: "Mode", v: "Building in public" },
];

export default function NowBuildingPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        <SectionLabel number="00 / STATUS">Now building</SectionLabel>

        <div className="mt-10 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#66f0d0] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#66f0d0]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/65">
            Lab signal · live
          </span>
        </div>

        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl lg:text-[88px]">
          The active
          <br />
          <span className="text-white/45">build board.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
          A public view of what is moving, what is being sharpened, and what is{" "}
          <span className="text-white">waiting for the right moment.</span>
        </p>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          {status.map((s, i) => (
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

      {/* ACTIVE LANES */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <SectionLabel number="01 / LANES">Active surface</SectionLabel>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Four lanes,
              <span className="text-white/45"> one operating system.</span>
            </h2>
          </div>
          <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-white/70 md:inline-flex">
            <Radio className="h-3.5 w-3.5 text-[#66f0d0]" />
            Updated continuously
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {lanes.map((l) => (
            <LaneCard key={l.name} lane={l} />
          ))}
        </div>
      </section>

      {/* BUILD PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <SectionLabel number="02 / METHOD">Build philosophy</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          How the lab decides
          <span className="text-white/45"> what ships.</span>
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {philosophy.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#06090d] p-7 transition hover:border-white/20 hover:-translate-y-0.5"
              style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 20px 60px -45px ${p.accent}`,
              }}
            >
              <div
                aria-hidden
                className="absolute left-7 top-5 h-1 w-20 rounded-full"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
              />
              <span
                className="mt-8 inline-block font-mono text-[11px] tracking-[0.3em]"
                style={{ color: p.accent }}
              >
                {p.index}
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-white/75">{p.body}</p>
            </div>
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
          <SectionLabel number="03 / NEXT">Trace the work</SectionLabel>
          <h2 className="relative mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            The board is the lab.
            <br />
            <span className="text-white/45">The shipped work is the receipt.</span>
          </h2>
          <div className="relative mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Explore projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              View proof of work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
