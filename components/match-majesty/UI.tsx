"use client";
import React from "react";

/* -------------------------- Regal Button -------------------------- */
interface RegalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function RegalButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: RegalButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  } as const;

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-[0.18em] transition-all duration-200 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  if (variant === "primary") {
    return (
      <button
        {...rest}
        className={`${base} ${sizes[size]} text-[#2c1e16] mm-regal-btn ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]">
          {children}
        </span>
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        {...rest}
        className={`${base} ${sizes[size]} mm-secondary-btn text-[#F2D57E] ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }

  return (
    <button
      {...rest}
      className={`${base} ${sizes[size]} text-white/75 hover:text-white border border-white/10 hover:border-amber-300/40 bg-black/30 hover:bg-black/50 backdrop-blur-md ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

/* -------------------------- Glass HUD Card -------------------------- */
export function HudCard({
  label,
  value,
  testid,
  accent = "#F2D57E",
  small = false,
}: {
  label: string;
  value: React.ReactNode;
  testid?: string;
  accent?: string;
  small?: boolean;
}) {
  return (
    <div
      data-testid={testid}
      className="relative rounded-2xl border border-amber-300/20 bg-[rgba(20,15,30,0.6)] backdrop-blur-md px-4 py-2.5 shadow-[0_4px_18px_rgba(0,0,0,0.55)] overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
      <div
        className="text-[10px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: accent + "C0" }}
      >
        {label}
      </div>
      <div
        className={`mt-0.5 font-bold tabular-nums ${
          small ? "text-base" : "text-xl"
        } text-white`}
      >
        {value}
      </div>
    </div>
  );
}

/* -------------------------- Parchment Card -------------------------- */
export function ParchmentCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative rounded-xl text-[#2c1e16] ${className}`}
      style={{
        background:
          "linear-gradient(180deg, #F4E7CE 0%, #E8D4AC 100%), radial-gradient(ellipse at 20% 10%, rgba(255,255,255,0.4), transparent 50%)",
        border: "6px solid #8C5E35",
        boxShadow:
          "inset 0 0 40px rgba(140,94,53,0.35), 0 12px 40px rgba(0,0,0,0.55), 0 0 0 2px rgba(74,50,25,0.4)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-md pointer-events-none opacity-50 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(ellipse at 80% 90%, rgba(140,94,53,0.4), transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(140,94,53,0.3), transparent 50%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/* -------------------------- Resource Pill -------------------------- */
const RESOURCE_META: Record<
  string,
  { label: string; color: string; svg: React.ReactNode }
> = {
  stardust: {
    label: "Stardust",
    color: "#A78BFA",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path
          d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z"
          fill="#C4B5FD"
          stroke="#7C3AED"
          strokeWidth="0.8"
        />
      </svg>
    ),
  },
  stone: {
    label: "Stone",
    color: "#CBD5E1",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path d="M4 14 L7 7 L14 5 L20 11 L17 18 L9 19 Z" fill="#94A3B8" stroke="#475569" strokeWidth="0.8" />
        <path d="M8 12 L14 9 L17 14" fill="none" stroke="#1F2937" strokeWidth="0.8" opacity=".5" />
      </svg>
    ),
  },
  wood: {
    label: "Wood",
    color: "#D97706",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18">
        <rect x="3" y="9" width="18" height="6" rx="2" fill="#92400E" stroke="#451A03" strokeWidth="0.8" />
        <ellipse cx="6" cy="12" rx="2.2" ry="2.4" fill="#B45309" stroke="#451A03" strokeWidth="0.6" />
        <ellipse cx="6" cy="12" rx="1" ry="1.1" fill="none" stroke="#451A03" strokeWidth="0.5" />
      </svg>
    ),
  },
  cloth: {
    label: "Cloth",
    color: "#38BDF8",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path d="M4 6 Q12 2, 20 6 L19 19 Q12 22, 5 19 Z" fill="#0EA5E9" stroke="#0C4A6E" strokeWidth="0.8" />
        <path d="M4 10 Q12 7, 20 10" fill="none" stroke="#082F49" strokeWidth="0.6" opacity=".6" />
        <path d="M4 14 Q12 11, 20 14" fill="none" stroke="#082F49" strokeWidth="0.6" opacity=".6" />
      </svg>
    ),
  },
  gold: {
    label: "Gold",
    color: "#FBBF24",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18">
        <circle cx="12" cy="12" r="9" fill="url(#g-gold)" stroke="#92400E" strokeWidth="1" />
        <defs>
          <radialGradient id="g-gold" cx=".3" cy=".3" r=".8">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="55%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#92400E" />
          </radialGradient>
        </defs>
        <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#451A03">
          ⛁
        </text>
      </svg>
    ),
  },
};

export function ResourcePill({
  resourceKey,
  amount,
}: {
  resourceKey: string;
  amount: number;
}) {
  const meta = RESOURCE_META[resourceKey];
  if (!meta) return null;
  return (
    <div
      data-testid={`resource-${resourceKey}`}
      className="group flex items-center gap-2 rounded-full bg-[rgba(20,15,30,0.55)] backdrop-blur-md border border-white/10 px-3 py-1.5 hover:border-amber-300/40 transition-colors"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.45)" }}
    >
      <span
        className="flex items-center justify-center w-6 h-6 rounded-full"
        style={{
          background: `radial-gradient(circle at 35% 30%, ${meta.color}55, ${meta.color}10 60%, transparent)`,
        }}
      >
        {meta.svg}
      </span>
      <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
        {meta.label}
      </span>
      <span
        className="font-bold tabular-nums text-sm"
        style={{ color: meta.color }}
        data-testid={`resource-${resourceKey}-amount`}
      >
        {amount}
      </span>
    </div>
  );
}

/* -------------------------- Objective Card -------------------------- */
export function ObjectiveCard({
  gemVisual,
  label,
  current,
  required,
}: {
  gemVisual: React.ReactNode;
  label: string;
  current: number;
  required: number;
}) {
  const done = current >= required;
  const pct = Math.min(100, (current / required) * 100);
  return (
    <div
      data-testid={`objective-${label.toLowerCase()}`}
      className={`relative rounded-xl border px-3 py-2.5 flex items-center gap-3 transition-colors ${
        done
          ? "bg-emerald-500/10 border-emerald-300/40"
          : "bg-[rgba(20,15,30,0.6)] border-amber-300/15"
      } backdrop-blur-md`}
      style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
    >
      <div className="w-10 h-10 flex items-center justify-center shrink-0">{gemVisual}</div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
            {label}
          </span>
          <span
            className={`font-bold tabular-nums text-sm ${
              done ? "text-emerald-300" : "text-white"
            }`}
          >
            {Math.min(current, required)}/{required}
          </span>
        </div>
        <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            className={`h-full rounded-full transition-[width] duration-500 ${
              done ? "bg-emerald-400" : "bg-gradient-to-r from-amber-300 to-amber-500"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      {done && (
        <span className="absolute -top-2 -right-2 text-[9px] uppercase tracking-[0.16em] bg-emerald-500 text-emerald-950 font-bold px-2 py-0.5 rounded-full">
          done
        </span>
      )}
    </div>
  );
}
