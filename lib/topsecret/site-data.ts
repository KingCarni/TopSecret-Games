export type ProjectStatus =
  | "Active"
  | "Live"
  | "Next"
  | "Later"
  | "In Progress"
  | "Concept";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  hideOnDetail?: boolean;
};

export type ProjectMedia = {
  eyebrow: string;
  title: string;
  caption: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: "AI Product" | "Game" | "System";
  status: ProjectStatus;
  short: string;
  summary: string;
  currentFocus: string;
  whyItMatters: string;
  tech: string[];
  links: ProjectLink[];
  media: ProjectMedia;
};

export type ResumeRole = {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
};

export const primarySummary =
  "Senior QA Analyst and systems-minded builder focused on work that can be inspected, tested, and backed up.";

export const heroSummary =
  "Top Secret Games is the public-facing studio home for Harley Curtis - bringing shipped game QA, live-service product thinking, self-built software, and game development under one serious builder identity.";

export const trustPoints = [
  "Shipped game QA support across major titles",
  "Live-service impact with measurable results",
  "Self-built products and active studio work",
  "QA-minded systems thinking applied to product and game execution",
];

export const homepageProof = [
  {
    title: "Shipped game work",
    body: "Gears of War: E-Day, NHL 2021, NHL 2022, UFC 4, NHL 2023, and Prodigy live-service support.",
  },
  {
    title: "Leadership and systems",
    body: "QA leadership, triage, onboarding, contractor coordination, automation-adjacent workflows, and documentation systems.",
  },
  {
    title: "Proven business impact",
    body: "Revenue +11%, Conversion +8.6%, ASP +4.8%, OTP revenue +11%, and purchase rate +6.5% from the Hard Mode initiative.",
  },
  {
    title: "Built product work",
    body: "Git-a-Job and Top Secret Games show product thinking beyond QA into shipping, positioning, and execution.",
  },
];

export const featuredProof = homepageProof;

export const projects: Project[] = [
  {
    slug: "nova",
    name: "NOVA",
    category: "AI Product",
    status: "Active",
    short: "AI workspace and command center for deeper project execution.",
    summary:
      "NOVA is a builder-focused AI workspace for longer-running project execution. It is meant to hold context, support structured thinking, and give creative or technical work a cleaner operating surface than a disposable chat window.",
    currentFocus:
      "Workspace structure, context handling, and a stronger long-running product shape.",
    whyItMatters:
      "It proves the studio can build productized AI experiences with real workflow intent, not just one-off prompts or concept pages.",
    tech: ["Next.js", "TypeScript", "Prisma", "App Router", "Workspace UI"],
    links: [
      { label: "Follow Development", href: "/now-building", hideOnDetail: true },
      { label: "Live Surface Later", href: "/now-building" },
    ],
    media: {
      eyebrow: "Preview lane",
      title: "Structured workspace surface",
      caption:
        "Swap this panel with a public-safe NOVA UI crop, architecture board, or focused product screenshot later.",
    },
  },
  {
    slug: "git-a-job",
    name: "Git-a-Job",
    category: "AI Product",
    status: "Live",
    short: "ATS-aware resume and cover-letter tool built for real job seekers.",
    summary:
      "Git-a-Job is a practical utility product focused on resume improvement, ATS alignment, and stronger job application materials. It is built around usability, affordability, and clear value for real job seekers.",
    currentFocus:
      "Trust, polish, UX consistency, and practical utility improvements for job seekers.",
    whyItMatters:
      "It is real shipped software with a clear audience, product constraints, and practical market positioning.",
    tech: ["Next.js", "Tailwind", "Prisma", "Stripe", "Resume parsing"],
    links: [
      { label: "Open Live Site", href: "https://git-a-job.com", external: true },
      { label: "Resume Proof", href: "/resume" },
    ],
    media: {
      eyebrow: "Product preview",
      title: "Utility-first product surface",
      caption:
        "Replace with a polished Git-a-Job dashboard crop, landing screenshot, or product flow panel when ready.",
    },
  },
  {
    slug: "match-majesty",
    name: "Match Majesty",
    category: "Game",
    status: "Next",
    short: "Fantasy match-3 prototype with room for deeper progression systems.",
    summary:
      "Match Majesty is a fantasy match-3 project with room to grow into deeper progression loops, kingdom-building, and expandable systems work. It represents UI iteration, gameplay tuning, and prototype discipline.",
    currentFocus:
      "Gameplay flow, progression planning, and clarity in the core loop.",
    whyItMatters:
      "It shows the studio can carry product-level thinking into playable game systems and not just present game ideas as loose concepts.",
    tech: ["Godot", "Gameplay systems", "UI", "Progression design"],
    links: [
      { label: "Studio Overview", href: "/now-building" },
      { label: "Gameplay Lane", href: "/projects", hideOnDetail: true },
    ],
    media: {
      eyebrow: "Gameplay slot",
      title: "Board, UI, and progression preview",
      caption:
        "Use this slot for a board screenshot, HUD crop, or progress mockup once a public-safe capture is ready.",
    },
  },
  {
    slug: "deady-bears-nightmare",
    name: "Deady Bear's Nightmare",
    category: "Game",
    status: "Later",
    short: "Horror project built around atmosphere, identity, and creative direction.",
    summary:
      "Deady Bear's Nightmare is a horror game project built around atmosphere, identity, and a stronger production-facing creative direction. It gives the studio a darker lane with sharper personality.",
    currentFocus:
      "Direction-setting, atmosphere, and production-facing identity work.",
    whyItMatters:
      "It expands the studio beyond utility products into mood, worldbuilding, and memorable experiential design.",
    tech: ["Godot", "Horror design", "Atmosphere", "Interaction"],
    links: [
      { label: "Studio Overview", href: "/now-building" },
      { label: "Horror Lane", href: "/projects", hideOnDetail: true },
    ],
    media: {
      eyebrow: "Mood slot",
      title: "Atmosphere and identity preview",
      caption:
        "Drop in a title treatment, environment crop, or mood-forward frame once the public-facing art lane is ready.",
    },
  },
];

export const resumeRoles: ResumeRole[] = [
  {
    title: "QA Lead",
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
    title: "QA VR Biomedical Specialist",
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
    title: "Software Test Engineer 3",
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
    title: "Dev Support Tier 4 / QA Lead",
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

export const skillGroups = [
  {
    title: "QA leadership",
    items: [
      "Test planning",
      "Defect triage",
      "Stakeholder communication",
      "Onboarding",
      "Release support",
    ],
  },
  {
    title: "Testing and systems",
    items: [
      "End-to-end testing",
      "Smoke and health checks",
      "Automation collaboration",
      "Platform validation",
      "Documentation systems",
    ],
  },
  {
    title: "Tools and environments",
    items: ["Jira", "Confluence", "TestRail", "PowerBI", "UE4 / UE5", "Playwright"],
  },
];

export const nowBuilding = [
  {
    title: "NOVA",
    phase: "Active",
    detail: "Workspace structure, context handling, and a stronger long-running product shape.",
  },
  {
    title: "Git-a-Job",
    phase: "Active",
    detail: "Trust, polish, UX consistency, and practical utility improvements for job seekers.",
  },
  {
    title: "Match Majesty",
    phase: "Next",
    detail: "Gameplay flow, progression planning, and clarity in the core loop.",
  },
  {
    title: "Deady Bear's Nightmare",
    phase: "Later",
    detail: "Direction-setting, atmosphere, and production-facing identity work.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
