import { SectionHeading } from "@/components/topsecret/section-heading";
import { nowBuilding } from "@/lib/topsecret/site-data";

export default function NowBuildingPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Now Building"
        title="What is active, what is next, and what is waiting for the right moment."
        body="This page is meant to feel operational and honest, not like a fake roadmap slide."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {nowBuilding.map((item) => (
          <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">{item.phase}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
