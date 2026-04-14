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

export const projects: Project[] = [
  {
    slug: "nova",
    name: "NOVA",
    category: "AI Product",
    status: "Active",
    short: "AI workspace and command center for deeper project execution.",
    summary:
      "NOVA is a builder-focused AI workspace for longer-running project execution. It is designed to preserve context, support structured thinking, and give complex creative or technical work a stronger operating surface than a disposable chat window.",
    currentFocus:
      "Workspace architecture, context carry-forward, project memory, and a more durable product surface for longer-running execution.",
    whyItMatters:
      "It proves the studio can build productized AI experiences with real workflow intent, stronger continuity, and systems thinking beyond one-off prompt wrappers.",
    tech: [
      "Next.js",
      "TypeScript",
      "App Router",
      "Prisma",
      "Neon",
      "Vercel",
      "Git",
      "VS Code",
      "Codex",
      "AI tools",
      "Workspace UI",
    ],
    links: [
      { label: "Follow Development", href: "/now-building", hideOnDetail: true },
      { label: "Live Surface Later", href: "/now-building" },
    ],
    media: {
      eyebrow: "Curated media slot",
      title: "NOVA",
      caption:
        "NOVA screenshots are currently 'Classified'.",
    },
    detailSections: [
      {
        label: "What it is",
        title: "An AI workspace built for real project continuity",
        body:
          "NOVA is being shaped as a serious workspace for work that outgrows disposable chats. The goal is persistent context, structured execution, and a cleaner command surface for longer-running creative and technical projects.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Current direction",
        title: "Context, memory, and operating clarity",
        body:
          "The current work is focused on how projects are represented, how context is carried forward, and how the interface supports actual execution instead of isolated prompt-response sessions.",
        accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
      },
      {
        label: "Why it matters",
        title: "A real product lane, not a chat reskin",
        body:
          "NOVA matters because it pushes the studio into AI product design with a sharper systems point of view. It is meant to feel like a working environment, not a novelty wrapper around generic model access.",
        accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
      },
      {
        label: "NOVA",
        title: "Neural Operator & Virtual Assistant",
        body:
          "NOVA is your personal AI assistant built for contextual prompting, intelligent ticket creation, sturctured execution, and brainstorming — turning thoughts into organized actions.",
        accent: "from-[#8cf3e0]/75 via-[#44d6c2]/32 to-transparent",
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
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Neon",
      "Stripe",
      "Vercel",
      "Git",
      "VS Code",
      "Codex",
      "AI tools",
      "Resume parsing",
    ],
    links: [
      { label: "Open Live Site", href: "https://git-a-job.com", external: true },
      { label: "Resume Proof", href: "/resume" },
    ],
    media: {
      eyebrow: "Product preview",
      title: "Utility-first product surface",
      caption:
        "The live product already carries the public experience. This page exists to frame the build, the proof, and the product decisions behind it.",
    },
    detailSections: [
      {
        label: "What it is",
        title: "A practical tool for real job seekers",
        body:
          "Git-a-Job is built to help users strengthen resumes, align with ATS expectations, and generate more useful application materials without leaning on fluff, subscription bloat, or empty AI hype.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Current direction",
        title: "Trust, utility, and stronger product clarity",
        body:
          "The main push now is improving the end-to-end candidate flow, sharpening fit signals, and making the value proposition more obvious, useful, and credible for people actively trying to land interviews.",
        accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
      },
      {
        label: "Why it matters",
        title: "Shipped software with real stakes",
        body:
          "This is not portfolio filler. It is a live product with real users, real tradeoffs, and real implementation choices around parsing, payments, usability, and conversion.",
        accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
      },
      {
        label: "Public access",
        title: "Git-a-job.com",
        body:
          "Currently, Git-a-job V 1.0 is live. Version 2.0 will allow for Job search and apply, recommendations based on fit and preference, notifications of relevant roles. V.2.0 is expected to release April 17th, 2026",
        accent: "from-[#8cf3e0]/75 via-[#44d6c2]/32 to-transparent",
      },
    ],
  },
  {
    slug: "match-majesty",
    name: "Match Majesty",
    category: "Game",
    status: "Next",
    short: "Fantasy match-3 prototype with room for deeper progression systems.",
    summary:
      "Match Majesty is a fantasy match-3 project with kingdom-building systems, and longer-tail gameplay depth.",
    currentFocus:
      "Core loop readability, progression planning, HUD and interface clarity, and creating a modularsystem with room to expand.",
    whyItMatters:
      "It shows the studio can carry systems thinking into playable game design and not just present game ideas as loose concepts or mood boards.",
    tech: [
      "Godot",
      "GDScript",
      "Gameplay systems",
      "UI systems",
      "Progression design",
      "Git",
      "VS Code",
      "Codex",
      "AI tools",
    ],
    links: [
      { label: "Studio Overview", href: "/now-building" },
      { label: "Gameplay Lane", href: "/projects", hideOnDetail: true },
    ],
    media: {
      eyebrow: "Curated media slot",
      title: "Match Majesty",
      caption:
        "Match Majesty is the early studio-facing surface for the match-3 concept, progression lane, and broader kingdom-building direction.",
    },
    detailSections: [
      {
        label: "What it is",
        title: "A match-3 project with real systems upside",
        body:
          "Match Majesty is a polished match-3 foundation, but the real opportunity is in the surrounding systems: progression, world growth, interface clarity, and the ability to expand into something more layered than a simple puzzle prototype.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Current direction",
        title: "Core loop clarity first",
        body:
          "The current work is focused on making the gameplay read cleanly, tightening progression structure, and improving the modular system so the project feels like a credible systems-driven game.",
        accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
      },
      {
        label: "Why it matters",
        title: "Proof of game systems thinking",
        body:
          "This project proves the studio can do more than talk about game ideas. It is a working lane for systems design, gameplay iteration, presentation discipline, and future feature planning.",
        accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
      },
      {
        label: "Public access",
        title: "User Test Play Opportunities",
        body:
          "Match Majesty is currently in the confidential TOP SECRET files. Playable demo TBA.",
        accent: "from-[#8cf3e0]/75 via-[#44d6c2]/32 to-transparent",
      },
    ],
  },
  {
    slug: "deady-bears-nightmare",
    name: "Deady Bear's Nightmare",
    category: "Game",
    status: "Later",
    short: "Horror project built around atmosphere, identity, and creative direction.",
    summary:
      "Deady Bear's Nightmare is a horror game project centered on atmosphere, tonal identity, and a stronger production-facing creative direction. It gives the studio a darker lane with sharper personality and a more memorable edge.",
    currentFocus:
      "Direction-setting, atmosphere, interaction pillars, and production-facing identity work before any public release surface is needed.",
    whyItMatters:
      "It expands the studio beyond utility products and cleaner systems work into mood, tension, world feel, and more distinct experiential design.",
    tech: [
      "Godot",
      "GDScript",
      "Horror design",
      "Atmosphere design",
      "Interaction design",
      "Git",
      "VS Code",
      "Codex",
      "AI tools",
    ],
    links: [
      { label: "Studio Overview", href: "/now-building" },
      { label: "Horror Lane", href: "/projects", hideOnDetail: true },
    ],
    media: {
      eyebrow: "Curated media slot",
      title: "Deady Bear's Nightmare",
      caption:
        "Deady Bear's Nightmare is being framed around atmosphere, identity, and production-facing direction before any public release surface is needed.",
    },
    detailSections: [
      {
        label: "What it is",
        title: "A horror lane built around atmosphere and identity",
        body:
          "Deady Bear's Nightmare is the darker side of the studio slate. The project is a memorable horror lane, unorthodox, and boasts a clear creative identity and unique flavor from the start.",
        accent: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent",
      },
      {
        label: "Current direction",
        title: "Creative framing before feature sprawl",
        body:
          "The current work is about setting the right production-facing direction, interaction pillars, and atmospheric identity so the project has a stronger foundation before broader implementation work starts pulling it in too many directions.",
        accent: "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent",
      },
      {
        label: "Why it matters",
        title: "Creative range with sharper personality",
        body:
          "It proves the studio is not boxed into utility tools and cleaner systems products. This lane brings in mood, tension, tonal control, and a more distinct creative fingerprint.",
        accent: "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent",
      },
      {
        label: "Public access",
        title: "User Test Play Opportunities",
        body:
          "Deady Bear's Nightmare is currently in the confidential TOP SECRET files. Playable demo TBA.",
        accent: "from-[#8cf3e0]/75 via-[#44d6c2]/32 to-transparent",
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
    detail: "Workspace architecture, context carry-forward, project memory, and a stronger long-running execution surface.",
  },
  {
    title: "Git-a-Job",
    phase: "Active",
    detail: "2.0 job search and apply, clearer fit signals, stronger trust cues, and a more useful candidate flow.",
  },
  {
    title: "Match Majesty",
    phase: "Next",
    detail: "Core loop readability, progression planning, and interface clarity for a stronger systems-first prototype.",
  },
  {
    title: "Deady Bear's Nightmare",
    phase: "Later",
    detail: "Direction-setting, atmosphere, interaction pillars, and a stronger production-facing horror identity.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
