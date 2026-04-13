import { nowBuilding } from "@/lib/topsecret/site-data";

const phaseAccent = (phase: string, title: string) => {
  const normalized = phase.toLowerCase();
  if (title.toLowerCase().includes("git-a-job")) {
    return { label: "Live", glow: "shadow-[0_0_0_1px_rgba(102,240,208,0.08),0_0_36px_rgba(0,120,104,0.12)]", bar: "from-[#66f0d0]/85 via-[#3ce4c3]/45 to-transparent" };
  }
  if (normalized.includes("next")) {
    return { label: "Next", glow: "shadow-[0_0_0_1px_rgba(255,214,90,0.07),0_0_36px_rgba(120,92,18,0.11)]", bar: "from-[#ffd65a]/85 via-[#ffcf40]/35 to-transparent" };
  }
  if (normalized.includes("later")) {
    return { label: "Later", glow: "shadow-[0_0_0_1px_rgba(201,144,255,0.07),0_0_36px_rgba(95,58,129,0.10)]", bar: "from-[#c990ff]/82 via-[#a06dff]/32 to-transparent" };
  }
  return { label: "Active", glow: "shadow-[0_0_0_1px_rgba(127,232,255,0.07),0_0_36px_rgba(33,108,128,0.12)]", bar: "from-[#7fe8ff]/85 via-[#41dfff]/40 to-transparent" };
};

export default function NowBuildingPage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <div className="max-w-5xl">
          <div className="relative overflow-hidden rounded-[32px] border border-[#0d8a73]/28 bg-[linear-gradient(180deg,rgba(6,20,18,0.92)_0%,rgba(6,12,14,0.78)_100%)] p-8 shadow-[0_0_0_1px_rgba(13,138,115,0.18),0_0_42px_rgba(0,120,104,0.12)] md:p-10 lg:p-12">
            <div className="absolute inset-x-0 top-0 h-[240px] bg-[radial-gradient(circle_at_18%_12%,rgba(0,186,150,0.18),transparent_32%),radial-gradient(circle_at_42%_18%,rgba(7,105,94,0.14),transparent_36%),linear-gradient(180deg,rgba(3,20,18,0.74)_0%,rgba(2,7,7,0)_100%)]" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">Now Building</p>
              <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">What is active, what is next, and what is waiting for the right moment.</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-0 pb-12 md:px-10 md:pb-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {nowBuilding.map((item) => {
            const accent = phaseAccent(item.phase, item.title);
            return (
              <article key={item.title} className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.82)_0%,rgba(6,10,18,0.72)_100%)] p-6 ${accent.glow} sm:p-8`}>
                <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${accent.bar} blur-[0.5px]`} />
                <div className={`absolute left-6 top-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${accent.bar}`} />
                <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.04),transparent_44%),radial-gradient(circle_at_22%_0%,rgba(0,190,155,0.10),transparent_34%)]" />
                <div className="relative pt-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#66f0d0]">{accent.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{item.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
