"use client";

import Image from "next/image";
import CursorGlow from "@/components/topsecret/shared/CursorGlow";

type Props = {
  imageSrc?: string;
  imageAlt?: string;
  status?: string;
  category?: string;
  projectName: string;
};

/**
 * Right-side dossier surface for the project hero.
 * Renders project.media.imageSrc when present, otherwise a
 * stylized "lab interface" panel that matches the homepage HeroLab.
 */
export default function ProjectMediaPanel({
  imageSrc,
  imageAlt,
  status,
  category,
  projectName,
}: Props) {
  return (
    <CursorGlow
      className="relative rounded-2xl border border-white/10 bg-[#080c12]/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur"
      color="rgba(102, 240, 208, 0.20)"
      accent="rgba(181, 139, 255, 0.12)"
      size={420}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 truncate font-mono text-[11px] tracking-wider text-zinc-500">
          tsg.lab — {projectName.toLowerCase().replace(/\s+/g, "_")}.surface
        </span>
      </div>

      {/* Body */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || projectName}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-contain p-6"
            priority
          />
        ) : (
          <FallbackSurface />
        )}

        {/* Floating meta chips */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {status && (
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#66f0d0] backdrop-blur">
              ● {status}
            </span>
          )}
          {category && (
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur">
              {category}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
          surface · live
        </div>
      </div>
    </CursorGlow>
  );
}

function FallbackSurface() {
  return (
    <div className="absolute inset-0 grid grid-cols-6 gap-1 p-6">
      {Array.from({ length: 36 }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-[3px] bg-gradient-to-br from-white/[0.05] to-white/[0.01]"
          style={{
            backgroundColor: [3, 8, 11, 14, 19, 22, 27, 30].includes(i)
              ? "rgba(102,240,208,0.45)"
              : [5, 13, 21, 28].includes(i)
              ? "rgba(127,180,255,0.35)"
              : [9, 18, 25].includes(i)
              ? "rgba(181,139,255,0.30)"
              : undefined,
            animation: `pulse ${2 + (i % 5)}s ease-in-out ${i * 0.08}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
