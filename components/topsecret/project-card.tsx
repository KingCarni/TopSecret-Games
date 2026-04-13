import Link from "next/link";
import type { Project } from "@/lib/topsecret/site-data";
import { StatusPill } from "@/components/topsecret/status-pill";

export function ProjectCard({ project }: { project: Project }) {
  const secondaryLink = project.links.find((link) => !link.hideOnDetail);

  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-400">{project.category}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
        </div>
        <StatusPill label={project.status} />
      </div>
      <p className="mt-4 text-sm leading-7 text-zinc-300">{project.short}</p>
      <p className="mt-4 text-sm leading-7 text-zinc-400">{project.currentFocus}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-white hover:border-emerald-300/40 hover:bg-white/5"
        >
          View Project
        </Link>
        {secondaryLink ? (
          <Link
            href={secondaryLink.href}
            target={secondaryLink.external ? "_blank" : undefined}
            rel={secondaryLink.external ? "noreferrer" : undefined}
            className="rounded-full border border-emerald-400/30 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-400/10"
          >
            {secondaryLink.label}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
