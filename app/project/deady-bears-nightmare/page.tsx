import Link from "next/link";
import {
  GlassPanel,
  HeroStat,
  PageBackdrop,
  SectionIntro,
  SectionWrap,
} from "@/components/site/visual-system";

const featureCards = [
  {
    title: "Fast Twin-Stick Combat",
    body: "Responsive movement, aiming, firing, and dodge-based survival built for punchy room-to-room action.",
  },
  {
    title: "Graft-Driven Evolution",
    body: "Harvest enemy parts and transform Deady Bear with grotesque new weapons, mutations, and run-defining build paths.",
  },
  {
    title: "Toy-Horror Identity",
    body: "A darkly cute nightmare world of broken comfort objects, corrupted play spaces, and creepy-cute body horror.",
  },
  {
    title: "Replayable Run Structure",
    body: "Fight through escalating rooms, claim rewards, adapt your build, and push deeper into the nightmare.",
  },
];

const devStatus = [
  "Core movement and firing feel",
  "Combat sandbox development",
  "Readable placeholder art direction",
  "Modular weapon and projectile standards",
  "Enemy reaction and combat feedback",
  "World and brand identity building",
];

const brandTags = [
  "Flagship IP",
  "PC / Steam First",
  "Twin-Stick Roguelite",
  "Room-Crawler",
  "Toy Horror",
];

export default function DeadyBearsNightmarePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <PageBackdrop />

      <section className="relative border-b border-white/10">
        <SectionWrap className="grid gap-12 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="relative z-10 max-w-[640px]">
            <div className="mb-5 inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-300">
              Flagship Project • In Development
            </div>

            <h1 className="max-w-[680px] text-5xl font-black uppercase leading-[0.88] tracking-[-0.035em] sm:text-6xl lg:text-[5rem]">
              Deady Bear’s Nightmare
              <span className="mt-1 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                One More Run Through The Toy Box.
              </span>
            </h1>

            <p className="mt-6 max-w-[600px] text-base leading-8 text-white/72 sm:text-lg">
              A darkly cute top-down twin-stick roguelite where a stitched-up teddy bear fights
              through twisted childhood nightmares, scavenging enemy parts to build grotesque new
              weapons, mutations, and run-defining synergies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {brandTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#follow"
                className="inline-flex items-center rounded-xl border border-yellow-400 bg-yellow-400 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:scale-[1.02] hover:bg-yellow-300"
              >
                Follow Development
              </a>
              <Link
                href="/"
                className="inline-flex items-center rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/20 hover:bg-white/[0.08]"
              >
                Back To Studio
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <HeroStat label="Studio Role" value="Flagship" highlight />
              <HeroStat label="Genre" value="Twin-Stick Roguelite" />
              <HeroStat label="Platform" value="PC First" />
            </div>
          </div>

          <div className="relative">
            <GlassPanel className="p-4">
              <div className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,10,14,1),rgba(4,4,8,1))] p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-yellow-300/80">
                    Key Art Placeholder
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Main Brand IP
                  </div>
                </div>

                <div className="mt-5 flex min-h-[360px] items-center justify-center rounded-[1.35rem] border border-dashed border-white/12 bg-black/35 p-6 text-center">
                  <div className="max-w-sm">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.03] text-4xl">
                      🧸
                    </div>
                    <p className="mt-4 text-lg font-black uppercase tracking-[0.08em] text-white">
                      Deady Bear Hero Art
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/55">
                      Swap this module later with key art, GIFs, combat footage, boss teases, or
                      stitched toy-box promotional art.
                    </p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        </SectionWrap>
      </section>

      <section className="relative border-b border-white/10">
        <SectionWrap className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <GlassPanel>
              <SectionIntro
                eyebrow="What Is It?"
                title="A broken comfort object surviving inside a corrupted childhood memory."
                body="Deady Bear’s Nightmare is Top Secret Games’ flagship IP: a darkly cute toy-horror action roguelite built around fast room-based combat, memorable visual identity, and grotesque graft-driven progression."
              />
              <div className="mt-6 space-y-4 text-sm leading-8 text-white/65">
                <p>
                  Deady Bear is not a mascot. He is a stitched-up, battle-worn teddy bear who
                  refuses to stay broken.
                </p>
                <p>
                  To survive, he scavenges parts from defeated enemies and grafts them onto
                  himself, becoming stronger, stranger, and more monstrous with every run.
                </p>
              </div>
            </GlassPanel>

            <GlassPanel>
              <SectionIntro
                eyebrow="World Tone"
                title="Cute. Grotesque. Playable."
                body="This is not generic spooky toy horror. It is darkly cute, creepy, punchy, weirdly lovable, and built to be immediately recognizable as Deady Bear’s Nightmare."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Broken Nursery",
                  "Toyz-4-U Factory",
                  "Forgotten Playroom",
                  "Nightmare Core",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassPanel>
          </div>
        </SectionWrap>
      </section>

      <section className="relative border-b border-white/10">
        <SectionWrap className="py-16 lg:py-20">
          <SectionIntro
            eyebrow="Core Features"
            title="Fast, readable, and built around identity."
            body="The game’s core promise is simple: strong action, strong silhouette, strong reward fantasy."
            className="max-w-3xl"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card) => (
              <GlassPanel key={card.title} className="h-full">
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-yellow-300/70">
                  Feature
                </div>
                <h3 className="mt-3 text-xl font-black uppercase tracking-[-0.02em] text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{card.body}</p>
              </GlassPanel>
            ))}
          </div>
        </SectionWrap>
      </section>

      <section className="relative border-b border-white/10">
        <SectionWrap className="grid gap-8 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <GlassPanel>
            <SectionIntro
              eyebrow="Meet Deady Bear"
              title="Not a mascot. A survivor."
              body="He is damaged, resilient, darkly funny, strangely heroic, and increasingly shaped by the nightmare he is fighting through."
            />
            <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-black/25 p-5 text-sm leading-8 text-white/65">
              The more he survives, the more he changes. That transformation is not just visual —
              it is the mechanical heart of the game.
            </div>
          </GlassPanel>

          <GlassPanel>
            <SectionIntro
              eyebrow="Development Status"
              title="Current focus"
              body="DBN is in active gameplay and identity prototyping, with the current work centered on building a clean, readable, modular combat foundation."
            />
            <div className="mt-6 grid gap-3">
              {devStatus.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white/72"
                >
                  • {item}
                </div>
              ))}
            </div>
          </GlassPanel>
        </SectionWrap>
      </section>

      <section id="follow" className="relative">
        <SectionWrap className="py-16 lg:py-20">
          <GlassPanel className="bg-gradient-to-br from-yellow-400/[0.08] via-white/[0.03] to-transparent">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-yellow-300/80">
                  Closing Signal
                </div>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.03em] text-white sm:text-4xl">
                  This is the flagship.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/68 sm:text-base">
                  Deady Bear’s Nightmare is the project defining Top Secret Games’ voice, visual
                  identity, and long-term direction.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-yellow-400 bg-yellow-400 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:bg-yellow-300"
                >
                  Contact Studio
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Back To Home
                </Link>
              </div>
            </div>
          </GlassPanel>
        </SectionWrap>
      </section>
    </main>
  );
}
