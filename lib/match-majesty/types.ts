// Match Majesty - Shared types
export const GEM_TYPES = ["ruby", "sapphire", "emerald", "topaz", "amethyst", "pearl"] as const;
export type GemType = typeof GEM_TYPES[number];

export const RESOURCE_KEYS = ["stardust", "stone", "wood", "cloth", "gold"] as const;
export type ResourceKey = typeof RESOURCE_KEYS[number];

export type Resources = Record<ResourceKey, number>;

/**
 * Special power gem types created from large matches:
 * - line-h: clears entire row when matched/triggered
 * - line-v: clears entire column when matched/triggered
 * - bomb:   clears 3x3 area when matched/triggered (from L/T shape)
 * - color:  clears every gem of the gem's type (from 5-in-a-row)
 */
export type GemPower = "line-h" | "line-v" | "bomb" | "color";

export interface Gem {
  /** Stable id used as React key so swap/fall animations are smooth */
  id: string;
  type: GemType;
  /** Spawn row used as the visual starting position when refilling (for falling animation) */
  spawnRow: number;
  /** Optional power-up indicator. When this gem is cleared, its effect triggers. */
  power?: GemPower;
}

export type Cell = Gem | null;
export type Board = Cell[][]; // [row][col]

export interface LevelObjective {
  type: GemType;
  required: number;
}

export interface Level {
  id: number;
  name: string;
  moves: number;
  objectives: LevelObjective[];
  reward: Partial<Resources>;
}

export type Screen = "title" | "game" | "map" | "town";

export interface GameSettings {
  sound: boolean;
  music: boolean;
}
