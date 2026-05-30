"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  applyGravity,
  areAdjacent,
  BOARD_SIZE,
  expandPowerEffects,
  generateBoard,
  refillBoard,
  resolveMatchWave,
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
  const resolveCascades = useCallback(
    async (
      startBoard: Board,
      swapOrigin?: { r: number; c: number },
      forceTrigger?: { r: number; c: number }[]
    ) => {
      let board = startBoard;
      let cascade = 0;
      let totalScore = 0;
      const collectedDelta: Record<GemType, number> = emptyCollected();
      let origin: { r: number; c: number } | undefined = swapOrigin;

      // FIRST: if the player swapped IN/OUT a power-up gem (no natural match
      // forms but a power should fire), manually expand the power effects and
      // clear once before entering the normal cascade loop.
      if (forceTrigger && forceTrigger.length) {
        const matched: boolean[][] = Array.from({ length: BOARD_SIZE }, () =>
          Array(BOARD_SIZE).fill(false)
        );
        forceTrigger.forEach((p) => {
          if (board[p.r]?.[p.c]) matched[p.r][p.c] = true;
        });
        const finalMatched = expandPowerEffects(board, matched);
        const cleared: { type: GemType; r: number; c: number }[] = [];
        const next: Board = board.map((row) => row.slice());
        for (let r = 0; r < BOARD_SIZE; r++) {
          for (let c = 0; c < BOARD_SIZE; c++) {
            if (finalMatched[r][c] && next[r][c]) {
              cleared.push({ type: next[r][c]!.type, r, c });
              next[r][c] = null;
            }
          }
        }
        if (cleared.length) {
          cascade += 1;
          const events: MatchEvent[] = cleared.map((c) => ({
            id: evtId(),
            r: c.r,
            c: c.c,
            type: c.type,
            cascade,
          }));
          totalScore += cleared.length * 15;
          cleared.forEach((c) => (collectedDelta[c.type] += 1));

          setState((s) => ({
            ...s,
            board,
            matchEvents: [...s.matchEvents.slice(-40), ...events],
            cascadeLevel: cascade,
          }));
          await delay(POP_MS);
          setState((s) => ({ ...s, board: next }));
          await delay(120);
          let after = applyGravity(next);
          after = refillBoard(after);
          board = after;
          setState((s) => ({ ...s, board }));
          await delay(FALL_MS);
        }
      }

      // Loop: find matches -> clear (with power spawns) -> gravity -> refill -> repeat
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const wave = resolveMatchWave(board, origin);
        if (!wave) break;
        cascade += 1;
        origin = undefined; // only the first wave is anchored to the player's swap

        const { board: nextBoard, cleared, spawns } = wave;

        // Build flash events for the cleared cells (for sparkle layer)
        const events: MatchEvent[] = cleared.map((c) => ({
          id: evtId(),
          r: c.r,
          c: c.c,
          type: c.type,
          cascade,
        }));

        // Score: 10 per gem, +5 per gem per extra cascade level, +25 per power spawn
        const baseScore = cleared.length * 10;
        const cascadeBonus = (cascade - 1) * cleared.length * 5;
        const powerBonus = spawns.length * 25;
        totalScore += baseScore + cascadeBonus + powerBonus;

        cleared.forEach((c) => {
          collectedDelta[c.type] += 1;
        });

        setState((s) => ({
          ...s,
          board,
          matchEvents: [...s.matchEvents.slice(-40), ...events],
          cascadeLevel: cascade,
        }));
        await delay(POP_MS);

        setState((s) => ({ ...s, board: nextBoard }));
        await delay(120);

        let boardAfter = applyGravity(nextBoard);
        boardAfter = refillBoard(boardAfter);
        board = boardAfter;
        setState((s) => ({ ...s, board }));
        await delay(FALL_MS);
      }

      setState((s) => {
        const newCollected = { ...s.collected };
        (Object.keys(collectedDelta) as GemType[]).forEach((t) => {
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
    },
    []
  );

  const trySwap = useCallback(
    async (a: { r: number; c: number }, b: { r: number; c: number }) => {
      if (stateRef.current.isLocked || stateRef.current.status !== "playing") return;
      if (!areAdjacent(a, b)) {
        setState((s) => ({ ...s, selected: b }));
        return;
      }

      const board = stateRef.current.board;
      // Power-up activation rule: swapping a power-up with ANY adjacent gem
      // counts as a valid move and triggers the power-up effect directly.
      const aGem = board[a.r]?.[a.c];
      const bGem = board[b.r]?.[b.c];
      const powerCells: { r: number; c: number }[] = [];
      if (aGem?.power) powerCells.push(a);
      if (bGem?.power) powerCells.push(b);
      const naturalMatch = swapProducesMatch(board, a, b);
      const involvesPower = powerCells.length > 0;
      const isValid = involvesPower || naturalMatch;
      const swapped = swapCells(board, a, b);
      // After swap, the power gem is at the OTHER position
      const triggerAfter: { r: number; c: number }[] = [];
      if (aGem?.power) triggerAfter.push(b);
      if (bGem?.power) triggerAfter.push(a);

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

      // Valid swap: consume a move, then resolve cascades anchored at target cell
      setState((s) => ({ ...s, movesLeft: Math.max(0, s.movesLeft - 1) }));
      await delay(180); // small breath after swap
      await resolveCascades(swapped, b, involvesPower ? triggerAfter : undefined);
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
