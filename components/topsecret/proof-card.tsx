export function ProofCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{body}</p>
    </article>
  );
}
