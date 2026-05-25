export type Principle = {
  index: string;
  title: string;
  body: string;
  accent: string;
};

export function PrincipleRow({ p }: { p: Principle }) {
  return (
    <div className="group grid grid-cols-1 gap-6 border-t border-white/10 py-8 md:grid-cols-[160px_220px_1fr] md:py-10">
      <div>
        <span
          className="font-mono text-[11px] tracking-[0.3em]"
          style={{ color: p.accent }}
        >
          {p.index}
        </span>
      </div>
      <h3 className="text-2xl font-semibold tracking-tight md:text-[26px]">
        {p.title}
      </h3>
      <p className="max-w-2xl text-base leading-8 text-white/70">{p.body}</p>
    </div>
  );
}
