import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-zinc-200">Top Secret Games</p>
          <p className="mt-1">
            Games, AI tools, and practical digital products built with proof, polish, and systems
            thinking.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/resume" className="hover:text-white">
            Resume
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/now-building" className="hover:text-white">
            Now Building
          </Link>
        </div>
      </div>
    </footer>
  );
}
