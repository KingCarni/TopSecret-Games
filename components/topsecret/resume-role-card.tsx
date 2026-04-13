import type { ResumeRole } from "@/lib/topsecret/site-data";

export function ResumeRoleCard({ role }: { role: ResumeRole }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{role.title}</h3>
          <p className="text-sm text-emerald-200">{role.company}</p>
        </div>
        <p className="text-sm text-zinc-400">{role.dates}</p>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
        {role.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
