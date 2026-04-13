import Link from "next/link";

const topSignals = [
  {
    label: "Shipped title support",
    value:
      "Gears of War: E-Day, NHL 2021, NHL 2022, UFC 4, NHL 2023, and live-service product QA.",
    accent: "from-emerald-400/80 to-cyan-400/30",
  },
  {
    label: "Leadership and systems",
    value:
      "Delegation, triage, onboarding, cross-functional coordination, and documentation discipline.",
    accent: "from-cyan-400/80 to-sky-400/30",
  },
  {
    label: "Business impact",
    value:
      "Revenue +11%, conversion +8.6%, ASP +4.8%, OTP revenue +11%, and purchase rate +6.5%.",
    accent: "from-amber-300/90 to-yellow-400/30",
  },
  {
    label: "Built products",
    value:
      "Git-a-Job, Top Secret Games, and active product framing beyond pure QA execution.",
    accent: "from-fuchsia-300/80 to-violet-400/30",
  },
];

const featuredProof = [
  {
    title: "Shipped game work",
    body:
      "Gears of War: E-Day, NHL 2021, NHL 2022, UFC 4, NHL 2023, and Prodigy live-service support.",
  },
  {
    title: "Leadership and systems",
    body:
      "QA leadership, triage, onboarding, contractor coordination, automation-adjacent workflows, and documentation systems.",
  },
  {
    title: "Proven business impact",
    body:
      "Revenue +11%, Conversion +8.6%, ASP +4.8%, OTP revenue +11%, and purchase rate +6.5% from the Hard Mode initiative.",
  },
  {
    title: "Built product work",
    body:
      "Git-a-Job and Top Secret Games show product thinking beyond QA into shipping, positioning, and execution.",
  },
];

const experience = [
  {
    role: "QA Lead",
    company: "Prodigy Education",
    dates: "Feb 2025 - Jan 2026",
    bullets: [
      "Improved testing efficiency by creating tools still used by QA devs and stakeholders.",
      "Coordinated playtests, account management, and feedback loops to strengthen release quality.",
      "Delegated hundreds of test cases to contract teams and maintained documentation standards.",
      "Worked with automation and workflow integrations through Jira and Sheets.",
    ],
  },
  {
    role: "QA VR Biomedical Specialist",
    company: "PrecisionOS",
    dates: "Oct 2023 - Apr 2024",
    bullets: [
      "Performed smoke and health checks across UE4 and UE5 training modules.",
      "Hosted global VR sessions for surgeons and clients.",
      "Prepared proof-of-concepts across anatomy, trauma, and arthroscope modules.",
      "Collaborated with designers, engineers, and product owners on quality and delivery.",
    ],
  },
  {
    role: "Software Test Engineer 3",
    company: "Microsoft / Ascendion",
    dates: "May 2023 - Oct 2023",
    bullets: [
      "Supported work tied to Gears of War: E-Day.",
      "Served as point of contact for smoke and health checks for tools and engine workflows.",
      "Supported Jira migration to Jira Cloud as the only QA.",
      "Built automation-facing test plans and reviewed resulting issues.",
    ],
  },
  {
    role: "Dev Support Tier 4 / QA Lead",
    company: "EA / Keywords Studios",
    dates: "May 2019 - Sept 2022",
    bullets: [
      "Supported NHL 2021, NHL 2022, UFC 4, and NHL 2023.",
      "Led and coordinated a team of 8-12 testers in Romania.",
      "Owned onboarding, health checks, automation coordination, and daily task management.",
      "Represented QV in bug triage and cross-functional planning discussions.",
    ],
  },
];

const builtWork = [
  {
    title: "NOVA",
    body: "AI workspace and command center for deeper project execution.",
    primary: { label: "View Project", href: "/projects/nova" },
    secondary: { label: "Live Surface Later", href: "/projects/nova" },
  },
  {
    title: "Git-a-Job",
    body: "ATS-aware resume and cover-letter tool built for real job seekers.",
    primary: { label: "View Project", href: "/projects/git-a-job" },
    secondary: { label: "Open Live Site", href: "https://git-a-job.com", external: true },
  },
  {
    title: "Match Majesty",
    body: "Fantasy match-3 prototype with room for deeper progression systems.",
    primary: { label: "View Project", href: "/project/match-majesty" },
    secondary: { label: "Studio Overview", href: "/projects" },
  },
  {
    title: "Deady Bear's Nightmare",
    body: "Horror project built around atmosphere, identity, and creative direction.",
    primary: { label: "View Project", href: "/project/deady-bears-nightmare" },
    secondary: { label: "Studio Overview", href: "/projects" },
  },
];

const skillLanes = [
  {
    title: "QA leadership",
    accent: "from-emerald-400/80 to-cyan-400/25",
    items: ["Test planning", "Defect triage", "Stakeholder communication", "Onboarding", "Release support"],
  },
  {
    title: "Testing and systems",
    accent: "from-cyan-400/80 to-sky-400/25",
    items: ["End-to-end testing", "Smoke and health checks", "Automation collaboration", "Platform validation", "Documentation systems"],
  },
  {
    title: "Tools and environments",
    accent: "from-amber-300/90 to-yellow-400/25",
    items: ["Jira", "Confluence", "TestRail", "PowerBI", "UE4 / UE5", "Playwright"],
  },
];

function AccentCard({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f17] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${accent} blur-[0.5px]`} />
      <div className={`absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      <div className="pt-6">
        <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[#66f0d0]">{title}</p>
        <p className="text-lg leading-8 text-white/90">{body}</p>
      </div>
    </div>
  );
}

function ActionLink({
  href,
  label,
  external,
  variant = "secondary",
}: {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
      : "inline-flex items-center justify-center rounded-full border border-[#0d8a73]/60 px-6 py-3 text-sm font-semibold text-[#9ff7e5] transition hover:border-[#16b596] hover:text-white";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function ResumePage() {
  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_30%_25%,rgba(0,186,150,0.18),transparent_40%),radial-gradient(circle_at_58%_18%,rgba(8,119,104,0.16),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
                Resume / Proof of Work
              </p>
              <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">Harley Curtis</h1>
              <p className="mt-5 text-2xl text-[#9ff7e5]">
                Senior QA Analyst / QA Lead / Systems-Minded Builder
              </p>
              <p className="mt-10 max-w-3xl text-2xl leading-10 text-white/90">
                Senior QA Analyst and systems-minded builder focused on work that can be inspected,
                tested, and backed up.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ActionLink href="https://www.linkedin.com" label="View LinkedIn" external variant="primary" />
                <ActionLink href="/projects" label="View Projects" />
              </div>
            </div>

            <div className="relative z-10 rounded-[32px] border border-[#0d8a73]/45 bg-[rgba(4,18,16,0.88)] p-7 shadow-[0_0_0_1px_rgba(12,110,95,0.2),0_0_50px_rgba(0,122,102,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
                Proof Snapshot
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight">
                What this page should prove fast
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/82">
                This is here to surface the strongest evidence quickly, then back it up with
                experience, product work, and public-safe proof.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">Fast scan</p>
                  <p className="mt-3 text-lg leading-8 text-white/90">
                    Shipped support, leadership range, measurable product outcomes, and built work.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                    Shipped titles
                  </p>
                  <p className="mt-3 text-lg leading-8 text-white/90">
                    Gears of War: E-Day, NHL 2021, NHL 2022, UFC 4, NHL 2023, and live-service
                    product support.
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-white/8 bg-black/20 p-5">
                <p className="text-lg leading-8 text-white/90">
                  The strongest evidence belongs near the top, but the rest should still feel easy
                  to inspect.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {topSignals.map((signal) => (
              <AccentCard key={signal.label} title={signal.label} body={signal.value} accent={signal.accent} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
          Featured proof
        </p>
        <h2 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight">
          The strongest evidence belongs near the top.
        </h2>
        <p className="mt-5 max-w-3xl text-2xl leading-10 text-white/88">
          This page is built to prove the claims, not just repeat them.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featuredProof.map((item, index) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f17] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className={`absolute inset-x-0 top-0 h-px ${index % 2 === 0 ? "bg-[#2ee6c8]/35" : "bg-[#74e0ff]/25"}`} />
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-lg leading-8 text-white/82">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.35fr] xl:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
              Experience
            </p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight">
              Resume history, but built to be explored.
            </h2>
            <p className="mt-5 text-2xl leading-10 text-white/88">
              Each role should be easy to skim quickly and still hold up under deeper review.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-[#0b0f17] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
                Reading guide
              </p>
              <ul className="mt-5 space-y-5 text-lg leading-8 text-white/84">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#66f0d0]" />
                  Look for ownership, not job-duty filler.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#74e0ff]" />
                  Look for shipped work, leadership signals, and systems contribution.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#ffd548]" />
                  Use the built-work section below to connect claims to current public-facing work.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            {experience.map((job) => (
              <div
                key={`${job.role}-${job.company}`}
                className="rounded-3xl border border-white/10 bg-[#0b0f17] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{job.role}</h3>
                    <p className="mt-1 text-lg text-[#66f0d0]">{job.company}</p>
                  </div>
                  <p className="text-base text-white/55">{job.dates}</p>
                </div>
                <ul className="mt-6 space-y-4 text-lg leading-8 text-white/84">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#66f0d0]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.3fr] xl:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
              Built work
            </p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight">
              The resume comes alive when the proof is clickable.
            </h2>
            <p className="mt-5 text-2xl leading-10 text-white/88">
              This is where the page stops being a PDF and starts acting like a portfolio. Public
              links stay curated and safe.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {builtWork.map((project) => (
              <div
                key={project.title}
                className="relative flex min-h-[260px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f17] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <div className="absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#66f0d0] to-transparent blur-[0.5px]" />
                <div className="pt-8">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-white/82">{project.body}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                  <ActionLink href={project.primary.href} label={project.primary.label} />
                  <ActionLink
                    href={project.secondary.href}
                    label={project.secondary.label}
                    external={project.secondary.external}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {skillLanes.map((lane) => (
            <div
              key={lane.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f17] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${lane.accent} blur-[0.5px]`} />
              <div className={`absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${lane.accent}`} />
              <div className="pt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
                  Skill lane
                </p>
                <h3 className="mt-5 text-3xl font-semibold">{lane.title}</h3>
                <ul className="mt-6 space-y-4 text-lg leading-8 text-white/84">
                  {lane.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
