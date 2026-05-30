// Match Majesty - Shared types
export const GEM_TYPES = ["ruby", "sapphire", "emerald", "topaz", "amethyst", "pearl"] as const;
export type GemType = typeof GEM_TYPES[number];

export const RESOURCE_KEYS = ["stardust", "stone", "wood", "cloth", "gold"] as const;
export type ResourceKey = typeof RESOURCE_KEYS[number];

export type Resources = Record<ResourceKey, number>;

export interface Gem {
  /** Stable id used as React key so swap/fall animations are smooth */
  id: string;
  type: GemType;
  /** Spawn row used as the visual starting position when refilling (for falling animation) */
  spawnRow: number;
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
