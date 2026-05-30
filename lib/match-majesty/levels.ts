import { Level } from "./types";

/**
 * Level design — easy ramp, slight scaling per level.
 * Reward resources accumulate in the kingdom resource bar.
 */
export const LEVELS: Level[] = [
  {
    id: 1,
    name: "Dawn of the Cascade",
    moves: 25,
    objectives: [
      { type: "ruby", required: 12 },
      { type: "sapphire", required: 12 },
    ],
    reward: { stardust: 8, stone: 4, wood: 4, cloth: 2, gold: 2 },
  },
  {
    id: 2,
    name: "The Emerald Vale",
    moves: 24,
    objectives: [
      { type: "emerald", required: 14 },
      { type: "topaz", required: 10 },
    ],
    reward: { stardust: 10, stone: 5, wood: 5, cloth: 3, gold: 3 },
  },
  {
    id: 3,
    name: "Twilight Crown",
    moves: 23,
    objectives: [
      { type: "amethyst", required: 12 },
      { type: "pearl", required: 10 },
      { type: "ruby", required: 8 },
    ],
    reward: { stardust: 12, stone: 6, wood: 6, cloth: 4, gold: 4 },
  },
  {
    id: 4,
    name: "Bronze Citadel",
    moves: 22,
    objectives: [
      { type: "topaz", required: 16 },
      { type: "sapphire", required: 12 },
      { type: "emerald", required: 10 },
    ],
    reward: { stardust: 14, stone: 8, wood: 6, cloth: 5, gold: 5 },
  },
  {
    id: 5,
    name: "Heart of the Kingdom",
    moves: 22,
    objectives: [
      { type: "ruby", required: 14 },
      { type: "sapphire", required: 14 },
      { type: "emerald", required: 12 },
      { type: "amethyst", required: 10 },
    ],
    reward: { stardust: 18, stone: 10, wood: 8, cloth: 6, gold: 8 },
  },
  {
    id: 6,
    name: "Ascension",
    moves: 21,
    objectives: [
      { type: "pearl", required: 16 },
      { type: "topaz", required: 14 },
      { type: "amethyst", required: 12 },
    ],
    reward: { stardust: 22, stone: 12, wood: 10, cloth: 8, gold: 10 },
  },
];

export const LOCKED_LEVELS_PREVIEW = 4; // show some greyed-out future nodes after the last real level
