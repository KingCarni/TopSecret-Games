"use client";

import { useRef, type CSSProperties, type ReactNode, type MouseEvent } from "react";

type CursorGlowProps = {
  children: ReactNode;
  className?: string;
  /** Radius of the glow in px. */
  size?: number;
  /** CSS color (with alpha) used for the glow center. */
  color?: string;
  /** Optional accent color used for a secondary highlight. */
  accent?: string;
  /** Optional inline style overrides for the wrapper. */
  style?: CSSProperties;
  as?: "div" | "section" | "article" | "li" | "a";
};

/**
 * Lightweight cursor-follow glow.
 *
 * Updates --mouse-x / --mouse-y CSS variables on mouse move and
 * renders a pointer-events-none radial-gradient layer on top of children.
 * No dependencies, no animation libs, safe for any card/grid surface.
 */
export default function CursorGlow({
  children,
  className = "",
  size = 360,
  color = "rgba(102, 240, 208, 0.18)",
  accent = "rgba(127, 180, 255, 0.10)",
  style,
  as: Tag = "div",
}: CursorGlowProps) {
  const ref = useRef<HTMLElement | null>(null);

  function handleMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mouse-x", `-9999px`);
    el.style.setProperty("--mouse-y", `-9999px`);
  }

  const TagAny = Tag as any;

  return (
    <TagAny
      ref={ref as any}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative isolate overflow-hidden ${className}`}
      style={style}
    >
      {/* Primary glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${size}px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), ${color}, transparent 70%)`,
        }}
      />
      {/* Secondary accent ring */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${Math.round(size * 1.6)}px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), ${accent}, transparent 75%)`,
        }}
      />
      <span className="relative z-10 block h-full w-full">{children}</span>
    </TagAny>
  );
}
