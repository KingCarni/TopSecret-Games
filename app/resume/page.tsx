import Link from "next/link";

const proofSnapshot = [
  {
    title: "Shipped game work",
    value: "Gears of War: E-Day, NHL 2021, NHL 2022, UFC 4, NHL 2023, and Prodigy live-service support.",
  },
  {
    title: "Leadership and systems",
    value: "QA leadership, triage, onboarding, contractor coordination, automation-adjacent workflows, and documentation systems.",
  },
  {
    title: "Business impact",
    value: "Revenue +11%, conversion +8.6%, ASP +4.8%, OTP revenue +11%, and purchase rate +6.5% from the Hard Mode initiative.",
  },
  {
    title: "Built product work",
    value: "Git-a-Job and Top Secret Games show product thinking beyond QA into shipping, positioning, and execution.",
  },
];

const experience = [
  {
    role: "QA Lead",
    company: "Prodigy Education",
    dates: "Feb 2025 - Jan 2026",
    accent: "from-[#66f0d0]/90 via-[#3ce4c3]/45 to-transparent",
    glow: "shadow-[0_0_0_1px_rgba(102,240,208,0.07),0_0_36px_rgba(15,110,95,0.16),inset_0_1px_0_rgba(157,247,229,0.03)]",
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
    accent: "from-[#7fe8ff]/85 via-[#41dfff]/35 to-transparent",
    glow: "shadow-[0_0_0_1px_rgba(127,232,255,0.07),0_0_36px_rgba(33,108,128,0.16),inset_0_1px_0_rgba(180,245,255,0.03)]",
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
    accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
    glow: "shadow-[0_0_0_1px_rgba(255,214,90,0.06),0_0_34px_rgba(120,92,18,0.14),inset_0_1px_0_rgba(255,240,170,0.025)]",
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
    accent: "from-[#66f0d0]/90 via-[#3ce4c3]/45 to-transparent",
    glow: "shadow-[0_0_0_1px_rgba(102,240,208,0.07),0_0_36px_rgba(15,110,95,0.16),inset_0_1px_0_rgba(157,247,229,0.03)]",
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
    accent: "from-[#66f0d0]/90 via-[#3ce4c3]/45 to-transparent",
    glow: "shadow-[0_0_0_1px_rgba(102,240,208,0.07),0_0_36px_rgba(15,110,95,0.16),inset_0_1px_0_rgba(157,247,229,0.03)]",
    primary: { label: "View Project", href: "/projects/nova" },
    secondary: { label: "Live Surface Later", href: "/projects/nova" },
  },
  {
    title: "Git-a-Job",
    body: "ATS-aware resume and cover-letter tool built for real job seekers.",
    accent: "from-[#7fe8ff]/85 via-[#41dfff]/35 to-transparent",
    glow: "shadow-[0_0_0_1px_rgba(127,232,255,0.07),0_0_36px_rgba(33,108,128,0.16),inset_0_1px_0_rgba(180,245,255,0.03)]",
    primary: { label: "View Project", href: "/projects/git-a-job" },
    secondary: { label: "Open Live Site", href: "https://git-a-job.com", external: true },
  },
  {
    title: "Match Majesty",
    body: "Fantasy match-3 prototype with room for deeper progression systems.",
    accent: "from-[#66f0d0]/90 via-[#3ce4c3]/45 to-transparent",
    glow: "shadow-[0_0_0_1px_rgba(102,240,208,0.07),0_0_36px_rgba(15,110,95,0.16),inset_0_1px_0_rgba(157,247,229,0.03)]",
    primary: { label: "View Project", href: "/projects/match-majesty" },
    secondary: { label: "Studio Overview", href: "/projects" },
  },
  {
    title: "Deady Bear's Nightmare",
    body: "Horror project built around atmosphere, identity, and creative direction.",
    accent: "from-[#7fe8ff]/85 via-[#41dfff]/35 to-transparent",
    glow: "shadow-[0_0_0_1px_rgba(127,232,255,0.07),0_0_36px_rgba(33,108,128,0.16),inset_0_1px_0_rgba(180,245,255,0.03)]",
    primary: { label: "View Project", href: "/projects/deady-bears-nightmare" },
    secondary: { label: "Studio Overview", href: "/projects" },
  },
];

const skillLanes = [
  {
    title: "QA leadership",
    accent: "from-emerald-400/80 to-cyan-400/25",
    glow: "shadow-[0_0_0_1px_rgba(102,240,208,0.06),0_0_30px_rgba(15,110,95,0.13),inset_0_1px_0_rgba(157,247,229,0.025)]",
    items: ["Test planning", "Defect triage", "Stakeholder communication", "Onboarding", "Release support"],
  },
  {
    title: "Testing and systems",
    accent: "from-cyan-400/80 to-sky-400/25",
    glow: "shadow-[0_0_0_1px_rgba(127,232,255,0.06),0_0_30px_rgba(33,108,128,0.13),inset_0_1px_0_rgba(180,245,255,0.025)]",
    items: ["End-to-end testing", "Smoke and health checks", "Automation collaboration", "Platform validation", "Documentation systems"],
  },
  {
    title: "Tools & environments",
    accent: "from-amber-300/90 to-yellow-400/25",
    glow: "shadow-[0_0_0_1px_rgba(255,214,90,0.05),0_0_30px_rgba(120,92,18,0.12),inset_0_1px_0_rgba(255,240,170,0.02)]",
    items: ["Jira", "Confluence", "TestRail", "PowerBI", "UE4 / UE5", "Playwright"],
  },
];

function ActionLink({
  href,
  label,
  external,
  variant = "secondary",
  fullWidth = false,
}: {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}) {
  const baseClass = fullWidth ? "w-full" : "";
  const className =
    variant === "primary"
      ? `${baseClass} inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90`
      : `${baseClass} inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#0d8a73]/60 px-5 py-2.5 text-center text-sm font-semibold text-[#9ff7e5] transition hover:border-[#16b596] hover:text-white`;

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
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <div className="relative overflow-hidden rounded-[32px] border border-[#0d8a73]/28 bg-[linear-gradient(180deg,rgba(6,20,18,0.92)_0%,rgba(6,12,14,0.78)_100%)] p-8 shadow-[0_0_0_1px_rgba(13,138,115,0.18),0_0_42px_rgba(0,120,104,0.12)] md:p-10 lg:p-12">
          <div className="absolute inset-x-0 top-0 h-[220px] bg-[radial-gradient(circle_at_18%_12%,rgba(0,186,150,0.18),transparent_32%),radial-gradient(circle_at_42%_18%,rgba(7,105,94,0.14),transparent_36%),linear-gradient(180deg,rgba(3,20,18,0.74)_0%,rgba(2,7,7,0)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(circle_at_8%_24%,rgba(0,186,150,0.10),transparent_42%)]" />
          <div className="relative z-10 max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
              Resume / Proof of Work
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Harley Curtis</h1>
            <p className="mt-4 text-base text-[#9ff7e5] md:text-lg">
              Senior QA Analyst / QA Lead / Systems-Minded Builder
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/88">
              Senior QA Analyst and systems-minded builder focused on work that can be inspected,
              tested, and backed up.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ActionLink href="https://www.linkedin.com" label="View LinkedIn" external variant="primary" />
              <ActionLink href="/projects" label="View Projects" />
            </div>
          </div>

          <div className="relative z-10 mt-10 overflow-hidden rounded-[28px] border border-[#0d8a73]/35 bg-[linear-gradient(180deg,rgba(3,18,16,0.72)_0%,rgba(3,14,13,0.66)_100%)] p-6 shadow-[0_0_0_1px_rgba(12,110,95,0.16),0_0_40px_rgba(0,122,102,0.08)] md:p-7">
            <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_18%_0%,rgba(0,192,158,0.12),transparent_42%),radial-gradient(circle_at_75%_0%,rgba(7,105,94,0.10),transparent_36%)]" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">
              Proof snapshot
            </p>
            <div className="relative mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {proofSnapshot.map((item, index) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,25,0.94)_0%,rgba(6,12,20,0.90)_100%)] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_24px_rgba(0,124,108,0.08)]"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px ${
                      index === 0
                        ? "bg-[#2ee6c8]/35"
                        : index === 1
                          ? "bg-[#74e0ff]/25"
                          : index === 2
                            ? "bg-[#ffd548]/25"
                            : "bg-[#8cf3e0]/22"
                    }`}
                  />
                  <div className="absolute inset-x-0 top-0 h-14 bg-[radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.05),transparent_42%),radial-gradient(circle_at_26%_0%,rgba(0,190,155,0.08),transparent_34%)]" />
                  <p className="relative text-[11px] uppercase tracking-[0.28em] text-white/48">{item.title}</p>
                  <p className="relative mt-3 text-sm leading-7 text-white/88 md:text-[15px]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">
        <div className="grid gap-8 xl:grid-cols-[0.72fr_1.38fr] xl:items-start">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.78)_0%,rgba(6,10,18,0.68)_100%)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_32px_rgba(0,120,104,0.10),inset_0_1px_0_rgba(150,255,235,0.03)] md:p-7">
            <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(0,190,155,0.12),transparent_42%),radial-gradient(circle_at_72%_0%,rgba(6,94,84,0.08),transparent_38%)]" />
            <div className="absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#66f0d0]/80 via-[#3ce4c3]/45 to-transparent blur-[0.5px]" />
            <div className="absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#66f0d0]/85 via-[#3ce4c3]/50 to-transparent" />
            <div className="relative pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">Experience</p>
              <h2 className="mt-4 max-w-[12ch] text-3xl font-semibold tracking-tight md:text-4xl">
                Roles, responsibilities, and results that connect cleanly.
              </h2>
              <div className="mt-6">
                <ActionLink href="/resume/Harley-Curtis-Resume.pdf" label="Download Resume" external />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {experience.map((job) => (
              <div
                key={`${job.role}-${job.company}`}
                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(11,15,23,0.98)_0%,rgba(9,13,20,0.95)_100%)] p-6 ${job.glow}`}
              >
                <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${job.accent} blur-[0.4px]`} />
                <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.05),transparent_44%),radial-gradient(circle_at_24%_0%,rgba(0,190,155,0.08),transparent_34%)]" />
                <div className="relative flex flex-col gap-2 pt-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold md:text-2xl">{job.role}</h3>
                    <p className="mt-1 text-base text-[#66f0d0]">{job.company}</p>
                  </div>
                  <p className="text-sm text-white/55 md:text-[15px]">{job.dates}</p>
                </div>
                <ul className="relative mt-5 space-y-3.5 text-base leading-7 text-white/84">
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

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.3fr] xl:items-start">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.78)_0%,rgba(6,10,18,0.68)_100%)] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_32px_rgba(0,120,104,0.10),inset_0_1px_0_rgba(150,255,235,0.03)] md:p-7">
            <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(0,190,155,0.12),transparent_42%),radial-gradient(circle_at_72%_0%,rgba(6,94,84,0.08),transparent_38%)]" />
            <div className="absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#66f0d0]/80 via-[#3ce4c3]/45 to-transparent blur-[0.5px]" />
            <div className="absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#66f0d0]/85 via-[#3ce4c3]/50 to-transparent" />
            <div className="relative pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">Built work</p>
              <h2 className="mt-4 max-w-[11ch] text-3xl font-semibold tracking-tight md:text-4xl">
                Current work that backs up the resume.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {builtWork.map((project) => (
              <div
                key={project.title}
                className={`relative flex min-h-[252px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(11,15,23,0.98)_0%,rgba(9,13,20,0.95)_100%)] p-6 ${project.glow}`}
              >
                <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${project.accent} blur-[0.5px]`} />
                <div className={`absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${project.accent}`} />
                <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.05),transparent_44%),radial-gradient(circle_at_24%_0%,rgba(0,190,155,0.08),transparent_34%)]" />
                <div className="relative pt-8">
                  <h3 className="text-xl font-semibold md:text-2xl">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/82">{project.body}</p>
                </div>
                <div className="relative mt-auto grid grid-cols-2 gap-3 pt-7">
                  <ActionLink href={project.primary.href} label={project.primary.label} fullWidth />
                  <ActionLink
                    href={project.secondary.href}
                    label={project.secondary.label}
                    external={project.secondary.external}
                    fullWidth
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
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(11,15,23,0.98)_0%,rgba(9,13,20,0.95)_100%)] p-6 ${lane.glow}`}
            >
              <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${lane.accent} blur-[0.5px]`} />
              <div className={`absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${lane.accent}`} />
              <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.045),transparent_44%),radial-gradient(circle_at_24%_0%,rgba(0,190,155,0.07),transparent_34%)]" />
              <div className="relative pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">Skill lane</p>
                <h3 className="mt-4 min-h-[64px] text-[28px] font-semibold leading-tight">{lane.title}</h3>
                <ul className="mt-5 space-y-3 text-base leading-7 text-white/84">
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
