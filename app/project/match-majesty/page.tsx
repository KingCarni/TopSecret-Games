// REPLACE: app/project/match-majesty/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  GlassPanel,
  HeroStat,
  PageBackdrop,
  SectionIntro,
  SectionWrap,
} from "@/components/site/visual-system";

const pillars = [
  {
    title: "Royal Match-3 Core",
    body: "A satisfying premium-feel board built around strong cascades, gem combos, and clean readability. Every move should feel juicy, elegant, and rewarding before deeper systems even kick in.",
    tone: "from-fuchsia-500/16 via-violet-500/8 to-transparent border-fuchsia-500/18",
  },
  {
    title: "Kingdom Progression",
    body: "Victories convert into stardust, resources, and unlock momentum. Progress is not just level clearing — it feeds the growth of your magical kingdom and gives every session a larger purpose.",
    tone: "from-emerald-500/16 via-green-500/8 to-transparent border-emerald-500/18",
  },
  {
    title: "Style + Identity",
    body: "Match Majesty is designed to feel regal, luminous, and collectible. Strong visual flavor, fantasy polish, and a sense of premium world-building are core to the experience from day one.",
    tone: "from-sky-500/16 via-blue-500/8 to-transparent border-sky-500/18",
  },
  {
    title: "Quests + Collection",
    body: "Beyond the core loop, future layers include curated goals, unlockable rewards, cosmetics, and evolving systems that keep progression feeling fresh beyond simple level completion.",
    tone: "from-amber-500/16 via-orange-500/8 to-transparent border-amber-500/18",
  },
];

const buildFocus = [
  "Polish the core board feel until every move feels premium.",
  "Lock the progression loop between level clears and kingdom growth.",
  "Shape the first visual language for jewels, UI, and regal world tone.",
  "Prepare future layers for quests, collection, and cosmetic identity.",
];

const roadmap = [
  {
    phase: "Phase 01",
    title: "Core Board Feel",
    body: "Establish the foundation: readable board states, satisfying cascades, combo excitement, and the kind of tactile feedback that makes the puzzle loop fun on its own.",
  },
  {
    phase: "Phase 02",
    title: "Kingdom Loop",
    body: "Tie puzzle success to a larger progression arc. Resources, upgrades, and settlement growth give players a reason to care about every completed run.",
  },
  {
    phase: "Phase 03",
    title: "Identity Layers",
    body: "Expand the game into a fuller fantasy package with style hooks, collection systems, quests, unlockables, and more reasons to stay invested over time.",
  },
];

const transmissions = [
  { label: "Core", title: "Board Feel", color: "border-fuchsia-500/20 bg-fuchsia-500/[0.05] text-fuchsia-300" },
  { label: "Progression", title: "Kingdom Loop", color: "border-emerald-500/20 bg-emerald-500/[0.05] text-emerald-300" },
  { label: "Future", title: "Collection Hooks", color: "border-amber-500/20 bg-amber-500/[0.05] text-amber-300" },
];

const coreLoop = [
  {
    step: "01",
    title: "Match",
    body: "Create satisfying cascades, line up gems, and chase a board feel that feels polished from the first move.",
  },
  {
    step: "02",
    title: "Collect",
    body: "Turn completed runs into stardust, resources, and momentum that carry value beyond a single level clear.",
  },
  {
    step: "03",
    title: "Build",
    body: "Feed those rewards back into kingdom growth, unlock layers, and a broader fantasy progression arc.",
  },
];

const differentiators = [
  "Premium board feel first, bigger systems second.",
  "Puzzle success feeds a kingdom progression loop.",
  "Regal fantasy identity instead of generic candy polish.",
  "Built to expand into collection, quests, and style hooks.",
];

function GemBoardPreview() {
  const gems = [
    { src: "/magenta.png", alt: "Magenta gem", label: "Royal Violet" },
    { src: "/cyan.png", alt: "Cyan gem", label: "Sapphire Pulse" },
    { src: "/green.png", alt: "Green gem", label: "Emerald Bloom" },
    { src: "/red.png", alt: "Red gem", label: "Ruby Ember" },
    { src: "/yellow.png", alt: "Yellow gem", label: "Sunflare" },
    { src: "/blue.png", alt: "Blue gem", label: "Azure Crown" },
  ];

  return (
    <div className="relative">
      <div className="absolute -left-8 top-12 h-44 w-44 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute right-6 top-20 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,10,14,1),rgba(4,4,8,1))] p-4">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(250,204,21,0.12),transparent_26%),radial-gradient(circle_at_74%_18%,rgba(217,70,239,0.08),transparent_22%)]" />

          <div className="relative z-10 rounded-[1.3rem] border border-yellow-400/10 bg-black/40 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow-300/80">
                Transmission
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/45">
                Secure Link
              </div>
            </div>

            <div className="rounded-[1.2rem] border border-white/8 bg-black/30 p-4">
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">Gem Channel</div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gems.map((gem) => (
                  <div
                    key={gem.src}
                    className="rounded-2xl border border-white/8 bg-white/[0.02] p-3 text-center"
                  >
                    <div className="relative mx-auto aspect-square w-full max-w-[96px]">
                      <Image
                        src={gem.src}
                        alt={gem.alt}
                        fill
                        sizes="96px"
                        className="object-contain drop-shadow-[0_0_22px_rgba(255,255,255,0.08)]"
                      />
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/48">
                      {gem.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow-300/80">
              Concept Directive
            </div>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Build a stylish puzzle experience that expands into collection, kingdom growth, and longer-term progression without losing premium feel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualAuthorityCards() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      <div className="rounded-3xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/18 via-violet-500/8 to-transparent p-4">
        <div className="rounded-[1.5rem] border border-white/8 bg-black/25 p-4">
          <div className="space-y-3 rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
            <div className="flex items-center justify-between rounded-xl border border-white/8 bg-black/25 px-3 py-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Score</span>
              <span className="text-sm font-bold text-white">48,250</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-white/8 bg-fuchsia-500/12 p-4" />
              <div className="rounded-lg border border-white/8 bg-sky-500/12 p-4" />
              <div className="rounded-lg border border-white/8 bg-emerald-500/12 p-4" />
              <div className="rounded-lg border border-white/8 bg-rose-500/12 p-4" />
              <div className="rounded-lg border border-white/8 bg-yellow-400/12 p-4" />
              <div className="rounded-lg border border-white/8 bg-blue-500/12 p-4" />
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Cascade Meter / Moves / Objectives
            </div>
          </div>
        </div>
        <div className="mt-4 text-[10px] uppercase tracking-[0.24em] text-white/40">Interface Pass</div>
        <div className="mt-2 text-lg font-bold text-white">Jewel UI</div>
      </div>

      <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-sky-500/18 via-blue-500/8 to-transparent p-4">
        <div className="rounded-[1.5rem] border border-white/8 bg-black/25 p-4">
          <div className="relative h-[220px] rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
            <div className="absolute left-8 top-10 h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_14px_rgba(250,204,21,0.55)]" />
            <div className="absolute left-1/2 top-14 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.55)]" />
            <div className="absolute bottom-12 left-14 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.55)]" />
            <div className="absolute bottom-10 right-10 h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_14px_rgba(217,70,239,0.55)]" />

            <svg className="absolute inset-0 h-full w-full opacity-40">
              <path d="M35 40 C95 65, 120 78, 180 120" stroke="rgba(255,255,255,0.16)" fill="none" strokeWidth="2" />
              <path d="M95 65 C120 105, 145 120, 210 145" stroke="rgba(255,255,255,0.12)" fill="none" strokeWidth="2" />
            </svg>

            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Region Nodes / Quest Routes / Unlock Flow
            </div>
          </div>
        </div>
        <div className="mt-4 text-[10px] uppercase tracking-[0.24em] text-white/40">Meta Layer</div>
        <div className="mt-2 text-lg font-bold text-white">World Map</div>
      </div>

      <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/18 via-green-500/8 to-transparent p-4">
        <div className="rounded-[1.5rem] border border-white/8 bg-black/25 p-4">
          <div className="space-y-3 rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 rounded-xl border border-white/8 bg-emerald-500/10" />
              <div className="h-16 rounded-xl border border-white/8 bg-emerald-500/14" />
              <div className="h-10 rounded-xl border border-white/8 bg-emerald-500/8" />
            </div>

            <div className="grid grid-cols-4 gap-2">
              <div className="h-8 rounded-lg border border-white/8 bg-yellow-400/10" />
              <div className="h-8 rounded-lg border border-white/8 bg-sky-500/10" />
              <div className="h-8 rounded-lg border border-white/8 bg-fuchsia-500/10" />
              <div className="h-8 rounded-lg border border-white/8 bg-emerald-500/10" />
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Resource Spend / Building Tiers / Settlement Growth
            </div>
          </div>
        </div>
        <div className="mt-4 text-[10px] uppercase tracking-[0.24em] text-white/40">Expansion Loop</div>
        <div className="mt-2 text-lg font-bold text-white">Kingdom Build</div>
      </div>
    </div>
  );
}

export default function MatchMajestyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <PageBackdrop />

      <section className="relative border-b border-white/10">
        <SectionWrap className="grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="relative z-10 max-w-[620px]">
            <div className="mb-5 inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-300">
              Project File 001 • In Active Development
            </div>

            <h1 className="max-w-[620px] text-5xl font-black uppercase leading-[0.88] tracking-[-0.035em] sm:text-6xl lg:text-[5rem]">
              Match Majesty
              <span className="mt-1 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Crown The Cascade.
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-8 text-white/72 sm:text-lg">
              Match Majesty is a premium fantasy-flavored match game built around satisfying cascades,
              elegant board feel, and a deeper progression loop. Match, collect, craft, and grow a magical
              kingdom that expands far beyond simple level clears.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pillars"
                className="inline-flex items-center rounded-xl border border-yellow-400 bg-yellow-400 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:scale-[1.02] hover:bg-yellow-300"
              >
                View Pillars
              </a>
              <Link
                href="/"
                className="inline-flex items-center rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                Back To Studio
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <HeroStat label="Genre" value="Fantasy Match-3+" />
              <HeroStat label="Status" value="Prototype Expanding" highlight />
              <HeroStat label="Vision" value="Puzzle + Progression" />
            </div>
          </div>

          <div className="relative lg:pl-6">
            <GemBoardPreview />
          </div>
        </SectionWrap>
      </section>

      <section id="pillars" className="relative border-b border-white/10">
        <SectionWrap className="py-16 lg:py-20">
          <SectionIntro
            eyebrow="Core Pillars"
            title="More Than A Simple Match Loop"
            body="Match Majesty is being designed to feel premium and expandable from day one — strong puzzle fundamentals first, then layered systems that reward longer-term play."
            className="max-w-4xl"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <GlassPanel
                key={pillar.title}
                className={`h-full bg-gradient-to-br ${pillar.tone}`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border border-white/10 bg-white/10" />
                  <h3 className="text-2xl font-black tracking-[-0.02em] text-white">{pillar.title}</h3>
                </div>
                <p className="mt-5 text-sm leading-8 text-white/68">{pillar.body}</p>
              </GlassPanel>
            ))}
          </div>
        </SectionWrap>
      </section>

      <section className="relative border-b border-white/10">
        <SectionWrap className="py-16 lg:py-20">
          <SectionIntro
            eyebrow="Core Loop"
            title="Match. Collect. Build."
            body="The loop should be easy to understand and satisfying to repeat. The board gives you the immediate reward. The progression gives you the reason to come back."
            className="max-w-4xl"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {coreLoop.map((item) => (
              <GlassPanel key={item.step} className="h-full">
                <div className="text-[10px] uppercase tracking-[0.24em] text-yellow-300/70">{item.step}</div>
                <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
              </GlassPanel>
            ))}
          </div>
        </SectionWrap>
      </section>

      <section className="relative border-b border-white/10">
        <SectionWrap className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <GlassPanel>
              <SectionIntro
                eyebrow="Development Route"
                title="Current Build Focus"
                body="Right now the project is focused on locking the most important truth first: the game has to feel good before the bigger systems matter."
              />

              <div className="mt-6 grid gap-3">
                {buildFocus.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 text-[11px] font-black text-yellow-300">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-white/68">{item}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel>
              <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-yellow-300/80">
                Media Channel
              </div>
              <h3 className="mt-4 text-4xl font-black uppercase tracking-[-0.03em] text-white">
                Visual Direction Preview
              </h3>
              <div className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/45">
                Early Mockups
              </div>

              <VisualAuthorityCards />

              <p className="mt-5 text-sm leading-7 text-white/62">
                These are still concept-facing modules, but they now read more like believable game systems instead of generic placeholders.
              </p>
            </GlassPanel>
          </div>
        </SectionWrap>
      </section>

      <section className="relative border-b border-white/10">
        <SectionWrap className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <SectionIntro
                eyebrow="Why It Hits Different"
                title="Built To Grow Beyond The First Session"
                body="The goal is not just a good puzzle game. The goal is a puzzle game that earns attachment over time — stronger progression, more identity, and better reasons to come back."
                className="max-w-3xl"
              />

              <div className="mt-8 grid gap-3">
                {differentiators.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4 text-sm leading-7 text-white/68">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <GlassPanel>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-yellow-300/80">
                  Progression Roadmap
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/45">
                  Layered Build
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {roadmap.map((item) => (
                  <div key={item.phase} className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-yellow-300/70">{item.phase}</div>
                    <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.body}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </SectionWrap>
      </section>

      <section className="relative border-b border-white/10">
        <SectionWrap className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <GlassPanel>
              <SectionIntro
                eyebrow="Transmission"
                title="Project Status"
                body="Match Majesty is in active concept + prototype development. The focus right now is clarity, feel, and system direction — not fake launch promises."
              />

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.04] p-4">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-yellow-300/70">Current Truth</div>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Core gameplay and long-term structure are being defined first. This page is meant to show real direction, not pretend-finished content.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-white/40">Next Milestone</div>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    Lock the first premium-feel gameplay loop, then deepen the kingdom progression and identity layers around it.
                  </p>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-yellow-300/80">
                    Build Channel
                  </div>
                  <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.02em] text-white">
                    Development Signals
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/45">
                  Live Direction
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/65">
                The strongest current themes guiding the build right now.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {transmissions.map((item) => (
                  <div key={item.title} className={`rounded-2xl border p-4 ${item.color}`}>
                    <div className="text-[10px] uppercase tracking-[0.24em]">{item.label}</div>
                    <div className="mt-3 text-sm font-semibold text-white">{item.title}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/8 bg-black/20 p-4">
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/40">Current Intent</div>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Make the board satisfying enough to earn repeat play, then use progression, collection, and kingdom-building to turn that repeat play into attachment.
                </p>
              </div>
            </GlassPanel>
          </div>
        </SectionWrap>
      </section>

      <section className="relative">
        <SectionWrap className="py-16 lg:py-20">
          <GlassPanel>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionIntro
                  eyebrow="Studio Routing"
                  title="Return To Top Secret Games HQ"
                  body="The studio page is the front door. Match Majesty is the first active file. More projects can plug into this structure as the studio grows."
                />
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-xl border border-yellow-400 bg-yellow-400 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:bg-yellow-300"
                >
                  Back To Studio
                </Link>
                <a
                  href="mailto:har.curtis@topsecret-games.com?subject=Match%20Majesty%20Interest"
                  className="inline-flex items-center rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Follow Development
                </a>
              </div>
            </div>
          </GlassPanel>
        </SectionWrap>
      </section>
    </main>
  );
}
