import { ProjectCard } from "@/components/topsecret/project-card";
import { SectionHeading } from "@/components/topsecret/section-heading";
import { projects } from "@/lib/topsecret/site-data";

export default function ProjectsPage() {
  const visibleProjects = projects.map((project) => {
    if (project.slug === "match-majesty") return { ...project, status: "Next" as const };
    if (project.slug === "deady-bears-nightmare") return { ...project, status: "Later" as const };
    return project;
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Games, AI products, and practical systems under one studio umbrella."
        body="The slate is intentionally mixed: shipped utility work, active AI tooling, and game projects with room to grow. Public links stay curated and safe."
      />

      <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
        {["All", "AI Products", "Games", "Systems / Experiments"].map((item) => (
          <span key={item} className="rounded-full border border-white/10 px-4 py-2">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
