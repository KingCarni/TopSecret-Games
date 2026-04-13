import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/now-building", label: "Now Building" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-emerald-400/30 bg-white/5" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Top Secret Games
            </p>
            <p className="text-xs text-zinc-400">Studio / Product Lab</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-300 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/resume"
          className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-100 hover:bg-emerald-400/20"
        >
          View Proof of Work
        </Link>
      </div>
    </header>
  );
}
