# Match Majesty — Product Requirements Document

## Problem Statement
Build a standalone playable web app prototype for a fantasy match-3 game called **Match Majesty**. Premium fantasy puzzle game with regal castle / kingdom / jewel-box energy (twilight purple + amber, emerald-forest + bronze blend). 1280x800 landscape-first prototype that lives on `topsecret-games.com/match-majesty`.

## Tech Stack
- **Framework**: Next.js 16.2.1 (App Router) with React 19, TypeScript, Tailwind CSS v4
- **Hosting**: Existing Top Secret Games studio site; game served at `/match-majesty` as a fullscreen overlay route
- **Runtime**: Production build (`next start`) — dev mode HMR WebSocket fails behind the preview proxy, so production build is used for hydration to work
- **State**: Pure frontend prototype with `localStorage` persistence (key `match-majesty-progress-v1`). No backend.
- **Animations**: CSS keyframes (no framer-motion to keep bundle small)

## User Persona
- Indie game studio prospects / players exploring the studio's "Project File 001"
- Wants a polished, satisfying jewel-box match-3 prototype to demo the direction of the game

## Core Requirements (delivered)
- ✅ Title screen with Match Majesty logo, Play/Continue/Settings, mascot owl, floating gems, castle silhouette
- ✅ Gameplay screen with 8x8 board, swap/match/clear/fall/refill/cascade, HUD (level, score, moves, progress), Royal Decree objective panel, top resource bar (Stardust, Stone, Wood, Cloth, Gold), bottom nav (Board, Map, Town, Retry, Settings)
- ✅ Map screen with curved kingdom path, level nodes (unlocked/locked/completed states), info panel, Start button
- ✅ Town screen with bento grid placeholders (Rune Words, Capsule Clash, Royal Shop, Kingdom Upgrades) plus Aurelius the Owl Scribe mascot panel
- ✅ Settings modal (sound, music, reset progress, close)
- ✅ Win/Lose modal with score, tribute rewards, next-level/retry/map buttons
- ✅ 6 distinct gem designs (Ruby octagon, Sapphire sphere, Emerald hex, Topaz diamond, Amethyst triangle, Pearl teardrop) — pure CSS/SVG
- ✅ Full polish animations: swap (smooth transform), pop+sparkle (matched gems), fall-in (refill from top), board frame shimmer, selected-cell pulse, regal button hover/press

## File Structure
- `/app/app/match-majesty/page.tsx` — route
- `/app/app/match-majesty/match-majesty.css` — game-only styles & animations
- `/app/components/match-majesty/` — all React components (GemVisual, MatchBoard, TitleScreen, GameScreen, MapScreen, TownScreen, SettingsModal, WinLoseModal, UI primitives, MatchMajestyApp)
- `/app/lib/match-majesty/` — game logic (gameLogic.ts, useGame.ts, levels.ts, types.ts)
- `/app/app/project/match-majesty/page.tsx` — existing marketing page, updated with "Play Prototype" CTA linking to `/match-majesty`

## What's Been Implemented (Jan 2026)
- 6 levels with rising objective difficulty (12+12 → 16+14+12 gem counts)
- Reward system grants resources (stardust, stone, wood, cloth, gold) per level clear
- Progress persistence (unlocked levels, completed levels, resources, settings)
- Domain-ready route at /match-majesty within existing Top Secret Games Next.js site

## Prioritized Backlog (P0/P1/P2)
- **P1**: Add power-up gems (line clears, bombs, color-swap) — currently only basic matches
- **P1**: Sound design + music (toggles already wired but no audio assets)
- **P1**: Real Rune Words / Capsule Clash mini-games to replace placeholders
- **P2**: Cosmetic shop functionality (currently placeholder)
- **P2**: Daily quest / login streak hooks
- **P2**: Visual polish — particle effects on cascade, screen shake on big combo, board "wow" on win
- **P2**: Mobile-portrait support (currently landscape-first only)

## Known Notes
- Dev server uses `next start` (production build) because dev HMR WebSocket is blocked by the preview proxy. To iterate, run `yarn build && sudo supervisorctl restart frontend`.
