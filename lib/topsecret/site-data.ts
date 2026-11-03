export type ProjectStatus =
  | "Active"
  | "Live"
  | "Next"
  | "Later"
  | "In Progress"
  | "Concept"
  | "Building";

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

export type ProjectDetailSection = {
  label: string;
  title: string;
  body: string;
  accent: string;
};

export type Project = {
  slug: string;
  name: string;
  category:
    | "QA System"
    | "Career Tool"
    | "Creative Studio"
    | "Educational Game Platform"
    | "Game"
    | "System";
  status: ProjectStatus;
  short: string;
  summary: string;
  currentFocus: string;
  whyItMatters: string;
  tech: string[];
  links: ProjectLink[];
  media: ProjectMedia;
  detailSections: ProjectDetailSection[];
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
    body: "TestFLY, Hourkeepers, and GroSharey show product thinking beyond QA into shipping, positioning, and execution.",
  },
];

export const featuredProof = homepageProof;

const commonProductTech = ["Next.js", "TypeScript", "Tailwind", "Vercel", "Git", "VS Code", "Codex"];

export const projects: Project[] = [
  {
    slug: "qatalyst",
    name: "QAtalyst",
    category: "QA System",
    status: "Active",
    short: "AI-assisted QA workspace for triage, test cases, bug reports, and clean ticket generation.",
    summary:
      "QAtalyst is an AI-assisted QA workspace for turning tickets, specs, and product notes into practical QA output: test cases, QAt triage notes, risk callouts, bug reports, and well-written tickets in seconds.",
    currentFocus:
      "QAt triage flows, ticket-to-test-case generation, fast bug and ticket drafting, project memory, terminology awareness, and practical integrations with Jira, TestRail, and Playwright.",
    whyItMatters:
      "QA teams lose time translating vague requirements, messy repro notes, and release pressure into usable testing artifacts. QAtalyst speeds that up while keeping human QA judgment in control.",
    tech: [...commonProductTech, "AI tools", "Jira", "TestRail", "Playwright", "QAt triage", "Ticket generation"],
    links: [
      { label: "Open QAtalystStudio.com", href: "https://qatalyststudio.com", external: true },
      { label: "Studio Overview", href: "/now-building" },
    ],
    media: {
      eyebrow: "Product preview",
      title: "QA intelligence engine",
      caption: "QAtalyst now has its own product home at QAtalystStudio.com.",
      imageSrc: "/qatalyst-logo.png",
      imageAlt: "QAtalyst logo",
    },
    detailSections: [
      {
        label: "What it is",
        title: "An AI-assisted QA workspace for real testing work",
        body: "QAtalyst turns Jira tickets, specs, feature notes, and rough QA thoughts into practical test cases, triage notes, risk callouts, bug reports, and clean tickets in seconds.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Integrations",
        title: "Jira, TestRail, and Playwright in the workflow",
        body: "The product is being shaped around practical QA toolchains: Jira for triage, TestRail for test case management, and Playwright for automation-adjacent coverage planning.",
        accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
      },
    ],
  },
  {
    slug: "testfly",
    name: "TestFLY",
    category: "QA System",
    status: "Live",
    short: "Test management platform for organized cases, test runs, reporting, and fast execution.",
    summary: "TestFLY is a QA test management platform for organizing test cases, creating and assigning runs, tracking execution, and reviewing results. Its desktop companion supports quick testing workflows with global hotkeys.",
    currentFocus: "CSV test case imports, section organization, test runs and assignments, reporting, workspace access, and the TestFLY Companion overlay.",
    whyItMatters: "Large QA teams need a practical way to manage thousands of test cases without losing execution speed or visibility.",
    tech: ["Next.js","TypeScript","Supabase","Electron","Stripe","Test management"],
    links: [{ label: "Visit TestFLY", href: "https://www.testfly.ca", external: true }, { label: "Now Building", href: "/now-building" }],
    media: { eyebrow: "Product overview", title: "Test management and companion overlay", imageSrc: "/projects/testfly.jpg", imageAlt: "TestFLY test management product interface", caption: "Organized test cases, execution queues, and a desktop companion built around everyday QA work." },
    detailSections: [{ label: "What it is", title: "Test management and companion overlay", body: "TestFLY is a QA test management platform for organizing test cases, creating and assigning runs, tracking execution, and reviewing results. Its desktop companion supports quick testing workflows with global hotkeys.", accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent" }, { label: "Current focus", title: "Building practical workflows", body: "CSV test case imports, section organization, test runs and assignments, reporting, workspace access, and the TestFLY Companion overlay.", accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent" }],
  },
  {
    slug: "hourkeepers",
    name: "Hourkeepers",
    category: "System",
    status: "Active",
    short: "Workforce timesheets, approvals, and staffing visibility in one SaaS workspace.",
    summary: "Hourkeepers is a workforce management platform for employees, managers, and administrators, with weekly timesheets, approval workflows, project assignments, staffing views, and reporting.",
    currentFocus: "Timesheet submission, manager approvals, project-scoped access, employee invitations, staffing targets, labor-cost reporting, and organization workflows.",
    whyItMatters: "Teams need reliable hours and approvals without fragmented spreadsheets or opaque staffing information.",
    tech: ["Next.js","TypeScript","Prisma","PostgreSQL","Vercel","Timesheets"],
    links: [{ label: "Visit Hourkeepers", href: "https://hourkeepers.com", external: true }, { label: "Now Building", href: "/now-building" }],
    media: { eyebrow: "Product overview", title: "Workforce hours and approvals", imageSrc: "/projects/hourkeepers.jpg", imageAlt: "Hourkeepers timesheets and approvals product interface", caption: "Timesheets, manager review, project staffing, and practical workforce reporting." },
    detailSections: [{ label: "What it is", title: "Workforce hours and approvals", body: "Hourkeepers is a workforce management platform for employees, managers, and administrators, with weekly timesheets, approval workflows, project assignments, staffing views, and reporting.", accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent" }, { label: "Current focus", title: "Building practical workflows", body: "Timesheet submission, manager approvals, project-scoped access, employee invitations, staffing targets, labor-cost reporting, and organization workflows.", accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent" }],
  },
  {
    slug: "edu-mates",
    name: "Edu-Mates",
    category: "Educational Game Platform",
    status: "Building",
    short: "Educational game/platform concept that makes academic practice feel more like an adventure than a worksheet.",
    summary:
      "Edu-Mates is an educational game/platform concept built around making learning feel more like an adventure than a worksheet.",
    currentFocus:
      "Product shape, learning loop clarity, teacher and parent value, and early platform framing.",
    whyItMatters:
      "Edu-Mates is the flagship education lane: a serious attempt to turn academic practice into something students want to return to.",
    tech: ["Educational systems", "Game design", "Progression design", "Classroom workflows", "Teacher tools", "Student motivation"],
    links: [
      { label: "Studio Overview", href: "/now-building" },
      { label: "Education Lane", href: "/projects", hideOnDetail: true },
    ],
    media: {
      eyebrow: "Education game lane",
      title: "Educational game platform",
      caption: "Edu-Mates is the flagship education lane for academic practice, progression, and classroom usefulness.",
    },
    detailSections: [
      {
        label: "What it is",
        title: "A learning platform with game-first motivation",
        body: "Edu-Mates combines classroom usefulness, student motivation, progression systems, and playful academic practice into a more engaging learning loop.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Why it matters",
        title: "The flagship education lane",
        body: "The goal is not another worksheet wrapper. The goal is an educational system kids want to return to and teachers can trust.",
        accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
      },
    ],
  },
  {
    slug: "grosharey",
    name: "GroSharey",
    category: "System",
    status: "Building",
    short: "Shared grocery lists that keep household shopping organized together.",
    summary: "GroSharey is a mobile grocery-list app designed for households to coordinate shopping, share lists, and stay in sync.",
    currentFocus: "Shared lists, account access, household collaboration, notifications, and receipt workflows.",
    whyItMatters: "Household shopping is easier when everyone can work from the same up-to-date list.",
    tech: ["Expo","React Native","Supabase","Mobile","Shared lists"],
    links: [{ label: "Now Building", href: "/now-building" }],
    media: { eyebrow: "Product overview", title: "Shared grocery shopping", caption: "A mobile-first shared grocery list for coordinating everyday shopping." },
    detailSections: [{ label: "What it is", title: "Shared grocery shopping", body: "GroSharey is a mobile grocery-list app designed for households to coordinate shopping, share lists, and stay in sync.", accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent" }, { label: "Current focus", title: "Building practical workflows", body: "Shared lists, account access, household collaboration, notifications, and receipt workflows.", accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent" }],
  },
  {
    slug: "puck-king-h" + "ell",
    name: ["Puck King", "Hell"].join(" "),
    category: "Game",
    status: "Building",
    short: "Hockey-themed game concept with arcade energy, attitude, progression, and sports-comedy identity.",
    summary:
      "This hockey-themed game concept has arcade energy, attitude, progression, and room for sports-comedy identity.",
    currentFocus:
      "Core identity, gameplay hook, tone, and production lane definition.",
    whyItMatters:
      "This lane keeps the studio connected to game-first creative work while giving the slate a sharper and more playful sports direction.",
    tech: ["Game design", "Hockey systems", "Arcade gameplay", "Progression design", "Godot", "UI"],
    links: [
      { label: "Studio Overview", href: "/now-building" },
      { label: "Game Lane", href: "/projects", hideOnDetail: true },
    ],
    media: {
      eyebrow: "Game concept lane",
      title: "Arcade hockey game lane",
      caption: "A rowdy sports-comedy lane with room for progression, chaos, and sharper game identity.",
    },
    detailSections: [
      {
        label: "What it is",
        title: "An arcade hockey concept with attitude",
        body: "This project is a hockey game lane built around speed, character, progression, and an identity that can stand apart from simulation sports.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Current direction",
        title: "Core hook before production scale",
        body: "The immediate work is defining the core hook, tone, and gameplay loop before investing in larger production systems.",
        accent: "from-[#ff9b66]/80 via-[#ff5e8a]/35 to-transparent",
      },
    ],
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
    items: ["Test planning", "Defect triage", "Stakeholder communication", "Onboarding", "Release support"],
  },
  {
    title: "Testing and systems",
    items: ["End-to-end testing", "Smoke and health checks", "Automation collaboration", "Platform validation", "Documentation systems"],
  },
  {
    title: "Tools and environments",
    items: ["Jira", "Confluence", "TestRail", "PowerBI", "UE4 / UE5", "Playwright"],
  },
];

export const nowBuilding = projects.map((project) => ({ title: project.name, phase: project.status, detail: project.currentFocus }));

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
