"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  applyGravity,
  areAdjacent,
  BOARD_SIZE,
  clearMatched,
  findMatches,
  generateBoard,
  hasAnyMatch,
  refillBoard,
  swapCells,
  swapProducesMatch,
} from "./gameLogic";
import { LEVELS } from "./levels";
import { Board, GemType, Level, Resources, RESOURCE_KEYS } from "./types";

export type GameStatus = "playing" | "won" | "lost";

export interface MatchEvent {
  /** Each cleared gem yields a unique id so we can spawn sparkles. */
  id: string;
  r: number;
  c: number;
  type: GemType;
  cascade: number;
}

const SWAP_BACK_MS = 240;
const POP_MS = 260;
const FALL_MS = 320;

export interface GameState {
  level: Level;
  board: Board;
  score: number;
  movesLeft: number;
  status: GameStatus;
  collected: Record<GemType, number>;
  selected: { r: number; c: number } | null;
  isLocked: boolean; // input lock while resolving
  cascadeLevel: number;
  matchEvents: MatchEvent[]; // recent flash events for sparkle layer
  invalidSwap: { a: { r: number; c: number }; b: { r: number; c: number } } | null;
}

const emptyCollected = (): Record<GemType, number> => ({
  ruby: 0,
  sapphire: 0,
  emerald: 0,
  topaz: 0,
  amethyst: 0,
  pearl: 0,
});

function isLevelComplete(level: Level, collected: Record<GemType, number>): boolean {
  return level.objectives.every((o) => collected[o.type] >= o.required);
}

let _evtCounter = 0;
const evtId = () => `m${++_evtCounter}`;

export function useGame(initialLevel: Level) {
  const [state, setState] = useState<GameState>(() => ({
    level: initialLevel,
    board: generateBoard(),
    score: 0,
    movesLeft: initialLevel.moves,
    status: "playing",
    collected: emptyCollected(),
    selected: null,
    isLocked: false,
    cascadeLevel: 0,
    matchEvents: [],
    invalidSwap: null,
  }));

  // Refs for stable state in async cascade resolution
  const stateRef = useRef(state);
  stateRef.current = state;

  /** Resolve all cascading matches starting from a given board until stable. */
  const resolveCascades = useCallback(async (startBoard: Board) => {
    let board = startBoard;
    let cascade = 0;
    let totalScore = 0;
    const collectedDelta: Record<GemType, number> = emptyCollected();

    // Loop: find matches -> clear -> gravity -> refill -> repeat
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const matches = findMatches(board);
      if (!hasAnyMatch(matches)) break;
      cascade += 1;
      const { board: cleared, cleared: clearedList } = clearMatched(board, matches);

      // Build flash events
      const events: MatchEvent[] = clearedList.map((c) => ({
        id: evtId(),
        r: c.r,
        c: c.c,
        type: c.type,
        cascade,
      }));

      // Score: 10 per gem, +5 bonus per extra gem in a single cluster (approx via cascade multiplier)
      const baseScore = clearedList.length * 10;
      const cascadeBonus = (cascade - 1) * clearedList.length * 5;
      totalScore += baseScore + cascadeBonus;

      // Update collected counters
      clearedList.forEach((c) => {
        collectedDelta[c.type] += 1;
      });

      // Show cleared (matched) state — gems still in their place but flashing
      setState((s) => ({
        ...s,
        board, // pre-clear, gems still visible for pop animation
        matchEvents: [...s.matchEvents.slice(-40), ...events],
        cascadeLevel: cascade,
      }));
      await delay(POP_MS);

      // Apply clear -> gravity -> refill
      board = cleared;
      board = applyGravity(board);
      board = refillBoard(board);

      // Commit the post-cascade board (gems fall in)
      const commitBoard = board;
      setState((s) => ({
        ...s,
        board: commitBoard,
      }));
      await delay(FALL_MS);
    }

    // Commit accumulated score + collected + check win
    setState((s) => {
      const newCollected = { ...s.collected };
      (Object.keys(collectedDelta) as GemType[]).forEach((t) => {
        // cap at required (display) — but keep extra in raw count for nicety
        newCollected[t] = s.collected[t] + collectedDelta[t];
      });
      const won = isLevelComplete(s.level, newCollected);
      const lost = !won && s.movesLeft <= 0;
      return {
        ...s,
        board,
        score: s.score + totalScore,
        collected: newCollected,
        cascadeLevel: 0,
        isLocked: false,
        status: won ? "won" : lost ? "lost" : s.status,
      };
    });
  }, []);

  const trySwap = useCallback(
    async (a: { r: number; c: number }, b: { r: number; c: number }) => {
      if (stateRef.current.isLocked || stateRef.current.status !== "playing") return;
      if (!areAdjacent(a, b)) {
        setState((s) => ({ ...s, selected: b }));
        return;
      }

      const board = stateRef.current.board;
      const isValid = swapProducesMatch(board, a, b);
      const swapped = swapCells(board, a, b);

      // Show the visual swap immediately, with input locked
      setState((s) => ({
        ...s,
        board: swapped,
        selected: null,
        isLocked: true,
        invalidSwap: isValid ? null : { a, b },
      }));

      if (!isValid) {
        // Wait then swap back
        await delay(SWAP_BACK_MS);
        const reverted = swapCells(swapped, a, b);
        setState((s) => ({
          ...s,
          board: reverted,
          isLocked: false,
          invalidSwap: null,
        }));
        return;
      }

      // Valid swap: consume a move, then resolve cascades
      setState((s) => ({ ...s, movesLeft: Math.max(0, s.movesLeft - 1) }));
      await delay(180); // small breath after swap
      await resolveCascades(swapped);
    },
    [resolveCascades]
  );

  const selectCell = useCallback(
    (r: number, c: number) => {
      if (stateRef.current.isLocked || stateRef.current.status !== "playing") return;
      const sel = stateRef.current.selected;
      if (!sel) {
        setState((s) => ({ ...s, selected: { r, c } }));
        return;
      }
      if (sel.r === r && sel.c === c) {
        setState((s) => ({ ...s, selected: null }));
        return;
      }
      void trySwap(sel, { r, c });
    },
    [trySwap]
  );

  const reset = useCallback((level: Level) => {
    setState({
      level,
      board: generateBoard(),
      score: 0,
      movesLeft: level.moves,
      status: "playing",
      collected: emptyCollected(),
      selected: null,
      isLocked: false,
      cascadeLevel: 0,
      matchEvents: [],
      invalidSwap: null,
    });
  }, []);

  // Auto-detect lose: if movesLeft reaches 0 and not won, finalize lose after current resolution
  useEffect(() => {
    if (
      state.status === "playing" &&
      state.movesLeft <= 0 &&
      !state.isLocked &&
      !isLevelComplete(state.level, state.collected)
    ) {
      setState((s) => ({ ...s, status: "lost" }));
    }
  }, [state.movesLeft, state.isLocked, state.status, state.level, state.collected]);

  return { state, selectCell, reset, BOARD_SIZE, RESOURCE_KEYS } as const;
}

function delay(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

export function objectiveProgress(level: Level, collected: Record<GemType, number>) {
  const total = level.objectives.reduce((sum, o) => sum + o.required, 0);
  const done = level.objectives.reduce((sum, o) => sum + Math.min(collected[o.type], o.required), 0);
  return total === 0 ? 0 : Math.min(1, done / total);
}

export function addResources(base: Resources, delta: Partial<Resources>): Resources {
  return {
    stardust: base.stardust + (delta.stardust ?? 0),
    stone: base.stone + (delta.stone ?? 0),
    wood: base.wood + (delta.wood ?? 0),
    cloth: base.cloth + (delta.cloth ?? 0),
    gold: base.gold + (delta.gold ?? 0),
  };
}

export const ALL_LEVELS = LEVELS;
