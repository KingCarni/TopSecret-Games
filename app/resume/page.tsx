import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { PageShell, SectionLabel } from "@/components/topsecret/shared/PageShell";
import { ExperienceItem, type Job } from "@/components/topsecret/resume/ExperienceItem";

export const metadata = {
  title: "Resume — Harley Curtis",
  description:
    "Senior QA Analyst, QA Lead, and systems-minded builder. Shipped game work, leadership, and built product surfaces.",
};

const proofSnapshot = [
  {
    k: "Shipped game work",
    v: "Gears of War: E-Day, NHL 21–23, UFC 4, Prodigy live-service.",
  },
  {
    k: "Leadership & systems",
    v: "QA leadership, triage, onboarding, contractor coordination, automation-adjacent workflows.",
  },
  {
    k: "Business impact",
    v: "Revenue +11%, conversion +8.6%, ASP +4.8%, purchase rate +6.5% (Hard Mode initiative).",
  },
  {
    k: "Built product work",
    v: "Git-a-Job and Top Secret Games — shipping, positioning, and execution beyond QA.",
  },
];

const experience: Job[] = [
  {
    index: "E / 01",
    role: "QA Lead",
    company: "Prodigy Education",
    dates: "Feb 2025 — Jan 2026",
    accent: "emerald",
    bullets: [
      "Improved testing efficiency by building tools still in use by QA and stakeholders.",
      "Coordinated playtests, account management, and feedback loops for release quality.",
      "Delegated hundreds of test cases to contract teams while maintaining documentation standards.",
      "Worked across automation and workflow integrations via Jira and Sheets.",
    ],
  },
  {
    index: "E / 02",
    role: "QA VR Biomedical Specialist",
    company: "PrecisionOS",
    dates: "Oct 2023 — Apr 2024",
    accent: "cyan",
    bullets: [
      "Performed smoke and health checks across UE4 and UE5 training modules.",
      "Hosted global VR sessions for surgeons and clients.",
      "Prepared proof-of-concepts across anatomy, trauma, and arthroscope modules.",
      "Collaborated with designers, engineers, and product owners on quality and delivery.",
    ],
  },
  {
    index: "E / 03",
    role: "Software Test Engineer 3",
    company: "Microsoft / Ascendion",
    dates: "May 2023 — Oct 2023",
    accent: "amber",
    bullets: [
      "Supported work tied to Gears of War: E-Day.",
      "Point of contact for smoke and health checks across tools and engine workflows.",
      "Led Jira → Jira Cloud migration as the only QA on the project.",
      "Built automation-facing test plans and reviewed resulting issues.",
    ],
  },
  {
    index: "E / 04",
    role: "Dev Support Tier 4 / QA Lead",
    company: "EA / Keywords Studios",
    dates: "May 2019 — Sept 2022",
    accent: "emerald",
    bullets: [
      "Supported NHL 21, NHL 22, UFC 4, and NHL 23.",
      "Led and coordinated a team of 8–12 testers in Romania.",
      "Owned onboarding, health checks, automation coordination, and daily task management.",
      "Represented QV in bug triage and cross-functional planning discussions.",
    ],
  },
];

const skills = [
  {
    title: "QA leadership",
    accent: "#66f0d0",
    items: [
      "Test planning",
      "Defect triage",
      "Stakeholder communication",
      "Onboarding",
      "Release support",
    ],
  },
  {
    title: "Testing & systems",
    accent: "#7fe8ff",
    items: [
      "End-to-end testing",
      "Smoke & health checks",
      "Automation collaboration",
      "Platform validation",
      "Documentation systems",
    ],
  },
  {
    title: "Tools & environments",
    accent: "#ffd65a",
    items: ["Jira", "Confluence", "TestRail", "PowerBI", "UE4 / UE5", "Playwright"],
  },
];

export default function ResumePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        <SectionLabel number="00 / FILE">Resume / proof of work</SectionLabel>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[96px]">
              Harley
              <br />
              <span className="text-white/45">Curtis.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70 md:text-xl">
              Senior QA Analyst, QA Lead, and systems-minded builder. Focused on work that
              can be <span className="text-white">inspected, tested, and backed up.</span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <a
              href="/resume/Harley-Curtis-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download PDF
            </a>
            <a
              href="https://www.linkedin.com/in/harley-curtis-/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Proof snapshot */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/5 md:grid-cols-2 xl:grid-cols-4">
          {proofSnapshot.map((p, i) => (
            <div
              key={p.k}
              className="relative bg-[#06090d] p-6 md:p-8"
            >
              <span
                className="font-mono text-[11px] tracking-[0.3em] text-[#66f0d0]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/55">
                {p.k}
              </p>
              <p className="mt-3 text-base leading-7 text-white/85">{p.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="mb-2">
          <SectionLabel number="01 / TIMELINE">Experience</SectionLabel>
        </div>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Roles, responsibilities, and results that
          <span className="text-white/45"> connect cleanly.</span>
        </h2>

        <div className="mt-12">
          {experience.map((job) => (
            <ExperienceItem key={`${job.role}-${job.company}`} job={job} />
          ))}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <SectionLabel number="02 / STACK">Skill lanes</SectionLabel>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          What I bring to the table.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skills.map((lane) => (
            <div
              key={lane.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(11,15,23,0.95)_0%,rgba(7,11,18,0.92)_100%)] p-7"
              style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 20px 60px -40px ${lane.accent}`,
              }}
            >
              <div
                className="absolute left-7 top-5 h-1 w-24 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${lane.accent}, transparent)`,
                }}
              />
              <div className="pt-8">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {lane.title}
                </h3>
                <ul className="mt-5 space-y-3 text-base text-white/80">
                  {lane.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 rounded-full"
                        style={{ background: lane.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
          <SectionLabel number="03 / NEXT">Proof in the work</SectionLabel>
          <h2 className="relative mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            The resume is the index.
            <br />
            <span className="text-white/45">The projects are the proof.</span>
          </h2>
          <div className="relative mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="/resume/Harley-Curtis-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
