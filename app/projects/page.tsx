import { ProjectCard } from "@/components/topsecret/project-card";
import { projects } from "@/lib/topsecret/site-data";

function GlowWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#0d8a73]/28 bg-[linear-gradient(180deg,rgba(6,20,18,0.92)_0%,rgba(6,12,14,0.78)_100%)] p-8 shadow-[0_0_0_1px_rgba(13,138,115,0.18),0_0_42px_rgba(0,120,104,0.12)] md:p-10 lg:p-12">
      <div className="absolute inset-x-0 top-0 h-[220px] bg-[radial-gradient(circle_at_18%_12%,rgba(0,186,150,0.18),transparent_32%),radial-gradient(circle_at_42%_18%,rgba(7,105,94,0.14),transparent_36%),linear-gradient(180deg,rgba(3,20,18,0.74)_0%,rgba(2,7,7,0)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(circle_at_8%_24%,rgba(0,186,150,0.10),transparent_42%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function ProjectsPage() {
  const visibleProjects = projects.map((project) => {
    if (project.slug === "match-majesty") return { ...project, status: "Next" as const };
    if (project.slug === "deady-bears-nightmare") return { ...project, status: "Later" as const };
    return project;
  });

  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <GlowWindow>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#66f0d0]">Projects</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            Games, AI products, and practical systems under one studio umbrella.
          </h1>
        </GlowWindow>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 md:pb-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <div key={project.slug} className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,14,22,0.82)_0%,rgba(6,10,18,0.72)_100%)] p-[1px] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_0_34px_rgba(0,120,104,0.12)]">
              <div className={`absolute left-6 top-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${index % 4 === 0 ? "from-[#66f0d0]/80 via-[#3ce4c3]/45 to-transparent" : index % 4 === 1 ? "from-[#7fe8ff]/80 via-[#41dfff]/35 to-transparent" : index % 4 === 2 ? "from-[#ffd65a]/80 via-[#ffcf40]/28 to-transparent" : "from-[#c990ff]/70 via-[#a46aff]/28 to-transparent"} blur-[0.5px]`} />
              <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.04),transparent_44%),radial-gradient(circle_at_22%_0%,rgba(0,190,155,0.10),transparent_34%)]" />
              <div className="relative rounded-[27px] bg-[linear-gradient(180deg,rgba(9,16,25,0.98)_0%,rgba(6,12,20,0.94)_100%)] p-6">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
