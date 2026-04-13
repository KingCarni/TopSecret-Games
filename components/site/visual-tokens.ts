// CREATE: components/site/visual-tokens.ts
export const SITE_TOKENS = {
  sectionMax: "max-w-[1380px]",
  shellBorder: "border-white/10",
  shellBg: "bg-white/[0.03]",
  shellBlur: "backdrop-blur",
  eyebrow:
    "text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-300/80",
  title:
    "text-3xl font-black uppercase tracking-[-0.02em] sm:text-4xl",
  body:
    "text-base leading-8 text-white/65",
  card:
    "rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur",
};

export const GEM_ACCENTS = {
  violet: {
    border: "border-fuchsia-500/20",
    gradient: "from-fuchsia-500/20 via-violet-500/10 to-transparent",
    glow: "bg-fuchsia-500/10",
    sigil: "bg-gradient-to-br from-fuchsia-400 to-violet-700",
  },
  emerald: {
    border: "border-emerald-500/20",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    glow: "bg-emerald-500/10",
    sigil: "bg-gradient-to-br from-emerald-400 to-green-700",
  },
  sapphire: {
    border: "border-sky-500/20",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    glow: "bg-sky-500/10",
    sigil: "bg-gradient-to-br from-sky-400 to-blue-700",
  },
  amber: {
    border: "border-amber-500/20",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    glow: "bg-amber-500/10",
    sigil: "bg-gradient-to-br from-amber-300 to-amber-700",
  },
} as const;
