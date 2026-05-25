type Job = {
  index: string;
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  accent: "emerald" | "cyan" | "amber";
};

const accentColor: Record<Job["accent"], string> = {
  emerald: "#66f0d0",
  cyan: "#7fe8ff",
  amber: "#ffd65a",
};

export function ExperienceItem({ job }: { job: Job }) {
  const color = accentColor[job.accent];
  return (
    <div className="group relative grid gap-6 border-t border-white/10 py-10 md:grid-cols-[180px_1fr] md:gap-10 md:py-14">
      <div>
        <p
          className="font-mono text-xs tracking-[0.3em]"
          style={{ color }}
        >
          {job.index}
        </p>
        <p className="mt-3 text-sm text-white/55">{job.dates}</p>
      </div>
      <div>
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {job.role}
        </h3>
        <p className="mt-2 text-base font-medium" style={{ color }}>
          {job.company}
        </p>
        <ul className="mt-7 grid gap-4 md:grid-cols-2">
          {job.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-base leading-7 text-white/80"
            >
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: color }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export type { Job };
