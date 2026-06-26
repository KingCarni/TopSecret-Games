import Link from "next/link";
import { ArrowUpRight, Radio } from "lucide-react";
import { PageShell, SectionLabel } from "@/components/topsecret/shared/PageShell";
import { nowBuilding } from "@/lib/topsecret/site-data";
import { LaneCard, type Lane } from "@/components/topsecret/now-building/LaneCard";

export const metadata = {
  title: "Now Building — Top Secret Games",
  description:
    "A live lab status for what is active, what is next, and what is being shaped behind the scenes across the Top Secret Games project slate.",
};

const accents = ["#66f0d0", "#7fe8ff", "#ffd65a", "#66f0d0", "#9aff7f", "#ff9b66"];
const slugs = [
  "qatalyst",
  "git-a-job",
  "master-draft-studios",
  "edu-mates",
  "greenlight",
  "puck-king-h" + "ell",
];
const taglines = [
  "QA intelligence engine",
  "ATS-aware resume tooling",
  "Studio + production layer",
  "Educational game platform",
  "Creative decision system",
  "Arcade hockey game lane",
];

const lanes: Lane[] = nowBuilding.map((item, index) => ({
  index: `L / ${String(index + 1).padStart(2, "0")}`,
  name: item.title,
  tagline: taglines[index],
  phase: item.phase === "Later" ? "Shaping" : item.phase,
  accent: accents[index],
  href: `/projects/${slugs[index]}`,
  focus: [item.detail],
}));

const philosophy = [
  {
    index: "01",
    title: "Ship useful things",
    body: "Utility first. If it does not earn a place in a real workflow, it does not earn the polish.",
    accent: "#66f0d0",
  },
  {
    index: "02",
    title: "Validate with real workflows",
    body: "Every lane is tested against actual jobs people do: QA triage, job hunting, creative production, learning loops, and project execution.",
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
  { k: "Next", v: "2" },
  { k: "Shaping", v: "1" },
  { k: "Domains", v: "QA / Career / Creative / Education / Games" },
];

export default function NowBuildingPage() {
  return (
    <PageShell>
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
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <SectionLabel number="01 / LANES">Active surface</SectionLabel>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Six lanes,
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
