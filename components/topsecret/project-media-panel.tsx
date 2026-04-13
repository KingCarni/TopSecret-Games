import Image from "next/image";
import type { Project } from "@/lib/topsecret/site-data";

const accentMap: Record<string, string> = {
  nova: "from-cyan-400/20 via-emerald-400/10 to-transparent border-cyan-400/20 text-cyan-100",
  "git-a-job":
    "from-emerald-400/20 via-teal-400/10 to-transparent border-emerald-400/20 text-emerald-100",
  "match-majesty":
    "from-amber-400/20 via-orange-400/10 to-transparent border-amber-400/20 text-amber-100",
  "deady-bears-nightmare":
    "from-fuchsia-400/20 via-rose-400/10 to-transparent border-fuchsia-400/20 text-fuchsia-100",
};

export function ProjectMediaPanel({ project }: { project: Project }) {
  const tone =
    accentMap[project.slug] ??
    "from-white/10 via-white/5 to-transparent border-white/10 text-white";

  return (
    <div className={`rounded-3xl border bg-gradient-to-br ${tone} p-6 shadow-2xl shadow-black/20`}>
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">{project.media.eyebrow}</p>
      <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/60">
        {project.media.imageSrc ? (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.media.imageSrc}
              alt={project.media.imageAlt ?? `${project.name} preview`}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] w-full p-5">
            <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-dashed border-white/10 bg-black/30 p-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-zinc-500">
                  Curated media slot
                </p>
                <h3 className="mt-4 max-w-md text-2xl font-semibold text-white">
                  {project.media.title}
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">
                  Public-safe screenshot
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">
                  UI crop or mock panel
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">
                  Swap later without layout changes
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="mt-4 text-sm leading-7 text-zinc-300">{project.media.caption}</p>
    </div>
  );
}
