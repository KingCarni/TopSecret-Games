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

export type ProjectDetailSection = {
  label: string;
  title: string;
  body: string;
  accent: string;
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
    body: "Git-a-Job and Top Secret Games show product thinking beyond QA into shipping, positioning, and execution.",
  },
];

export const featuredProof = homepageProof;

const commonAiTech = ["Next.js", "TypeScript", "Tailwind", "Vercel", "Git", "VS Code", "Codex", "AI tools"];

export const projects: Project[] = [
  {
    slug: "qatalyst",
    name: "QAtalyst",
    category: "AI Product",
    status: "Active",
    short: "AI-assisted QA workspace for triage, test cases, bug reports, and clean ticket generation.",
    summary:
      "QAtalyst is an AI-assisted QA workspace for turning tickets, specs, and product notes into practical QA output: test cases, QAt triage notes, risk callouts, bug reports, and well-written tickets in seconds.",
    currentFocus:
      "QAt triage flows, ticket-to-test-case generation, fast bug and ticket drafting, project memory, terminology awareness, and practical integrations with Jira, TestRail, and Playwright.",
    whyItMatters:
      "QA teams lose time translating vague requirements, messy repro notes, and release pressure into usable testing artifacts. QAtalyst speeds that up while keeping human QA judgment in control.",
    tech: [...commonAiTech, "Jira", "TestRail", "Playwright", "QAt triage", "Ticket generation"],
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
    slug: "git-a-job",
    name: "Git-a-Job",
    category: "AI Product",
    status: "Live",
    short: "ATS-aware resume and cover-letter tool built for real job seekers.",
    summary:
      "Git-a-Job is a practical hiring utility built to help real job seekers improve resumes, align with ATS constraints, and create stronger application materials without bloated pricing, vague promises, or fake magic.",
    currentFocus:
      "2.0 job search and apply - stronger search flow, clearer fit signals, more credible trust cues, and a more useful application surface for real candidates.",
    whyItMatters:
      "It is real shipped software with a live audience, real product constraints, and practical decisions around UX, pricing, parsing, and conversion.",
    tech: [...commonAiTech, "Prisma", "Neon", "Stripe", "Resume parsing"],
    links: [
      { label: "Open Live Site", href: "https://git-a-job.com", external: true },
      { label: "Resume Proof", href: "/resume" },
    ],
    media: {
      eyebrow: "Product preview",
      title: "ATS-aware career tooling",
      caption: "The live product already carries the public experience. This page frames the build, proof, and product decisions behind it.",
    },
    detailSections: [
      {
        label: "What it is",
        title: "A practical tool for real job seekers",
        body: "Git-a-Job helps users strengthen resumes, align with ATS expectations, and generate more useful application materials without subscription bloat or empty AI hype.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Current direction",
        title: "Trust, utility, and stronger product clarity",
        body: "The main push now is improving the end-to-end candidate flow, sharpening fit signals, and making the value proposition more obvious and credible.",
        accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
      },
    ],
  },
  {
    slug: "master-draft-studios",
    name: "Master Draft Studios",
    category: "AI Product",
    status: "Next",
    short: "AI-assisted writing studio for scripts, notes, pitch decks, and creative development.",
    summary:
      "Master Draft Studios is a creative writing workspace built for scriptwriters and storytellers who need more than a blank page.",
    currentFocus:
      "Core writing surface, project memory, multi-tool workflow, script export direction, and a cleaner creative operating system.",
    whyItMatters:
      "Creative work gets messy fast when scripts, notes, references, character ideas, and pitch materials live in separate places.",
    tech: [...commonAiTech, "Script writing", "Notes", "Brainstorming", "Pitch decks", "Image generation"],
    links: [
      { label: "Studio Overview", href: "/now-building" },
      { label: "Creative Lane", href: "/projects", hideOnDetail: true },
    ],
    media: {
      eyebrow: "Curated media slot",
      title: "Studio + production layer",
      caption: "The early studio-facing surface for the writing workspace, creative memory, pitch deck tooling, and broader script development direction.",
    },
    detailSections: [
      {
        label: "What it is",
        title: "A creative workspace for serious story development",
        body: "Master Draft Studios brings script writing, note-taking, brainstorming, context memory, pitch deck creation, and image generation into one focused studio environment.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Why it matters",
        title: "Keeping creative context together",
        body: "It is designed to keep creative context organized so the work can build instead of constantly restarting from scratch.",
        accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
      },
    ],
  },
  {
    slug: "edu-mates",
    name: "Edu-Mates",
    category: "AI Product",
    status: "Active",
    short: "Educational game/platform concept that makes academic practice feel more like an adventure than a worksheet.",
    summary:
      "Edu-Mates is an educational game/platform concept built around making learning feel more like an adventure than a worksheet.",
    currentFocus:
      "Product shape, learning loop clarity, teacher and parent value, and early platform framing.",
    whyItMatters:
      "Edu-Mates is the flagship education lane: a serious attempt to turn academic practice into something students want to return to.",
    tech: [...commonAiTech, "Educational systems", "Game design", "Progression design", "Classroom workflows"],
    links: [
      { label: "Studio Overview", href: "/now-building" },
      { label: "Education Lane", href: "/projects", hideOnDetail: true },
    ],
    media: {
      eyebrow: "Education product lane",
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
    slug: "greenlight",
    name: "Greenlight",
    category: "AI Product",
    status: "Next",
    short: "Creative decision and production-readiness workspace for concept approval, planning, and execution.",
    summary:
      "Greenlight is a creative decision and production-readiness workspace for helping ideas move from rough concept to clearer approval, planning, and execution.",
    currentFocus:
      "Idea evaluation, concept scoring, project readiness, decision support, and lightweight production planning.",
    whyItMatters:
      "Greenlight gives the studio a way to decide what is worth building next instead of treating every idea like it has equal priority.",
    tech: [...commonAiTech, "Project scoring", "Product planning", "Creative review", "Decision systems"],
    links: [
      { label: "Studio Overview", href: "/now-building" },
      { label: "Decision Lane", href: "/projects", hideOnDetail: true },
    ],
    media: {
      eyebrow: "Creative workflow lane",
      title: "Creative decision system",
      caption: "Greenlight is being shaped as a cleaner way to evaluate, prioritize, and prepare ideas for production.",
    },
    detailSections: [
      {
        label: "What it is",
        title: "A decision system for creative work",
        body: "Greenlight helps rough ideas become clearer build candidates through evaluation, readiness checks, and lightweight production planning.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Why it matters",
        title: "Better decisions before bigger builds",
        body: "It gives the studio a practical way to choose what deserves time, budget, and polish before production momentum takes over.",
        accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
      },
    ],
  },
  {
    slug: "puck-king-h" + "ell",
    name: ["Puck King", "Hell"].join(" "),
    category: "Game",
    status: "Later",
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

export const nowBuilding = [
  {
    title: "QAtalyst",
    phase: "Active",
    detail: "QAt triage, ticket-to-test-case generation, clean ticket drafting, Jira, TestRail, and Playwright workflow integrations.",
  },
  {
    title: "Git-a-Job",
    phase: "Active",
    detail: "2.0 job search and apply, clearer fit signals, stronger trust cues, and a more useful candidate flow.",
  },
  {
    title: "Master Draft Studios",
    phase: "Next",
    detail: "Script writing, note-taking, brainstorming, context memory, pitch decks, image generation, and export workflow planning.",
  },
  {
    title: "Edu-Mates",
    phase: "Active",
    detail: "Learning loop clarity, teacher and parent value, progression systems, and early classroom platform framing.",
  },
  {
    title: "Greenlight",
    phase: "Next",
    detail: "Idea evaluation, concept scoring, project readiness, decision support, and lightweight production planning.",
  },
  {
    title: ["Puck King", "Hell"].join(" "),
    phase: "Later",
    detail: "Core identity, gameplay hook, tone, and production lane definition for the arcade hockey game concept.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
