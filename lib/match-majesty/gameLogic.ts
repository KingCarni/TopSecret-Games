import { Board, Gem, GEM_TYPES, GemType } from "./types";

export const BOARD_SIZE = 8;

let _idCounter = 0;
export function nextGemId(): string {
  _idCounter += 1;
  return `g${_idCounter}`;
}

function randomGemType(exclude: GemType[] = []): GemType {
  const pool = GEM_TYPES.filter((t) => !exclude.includes(t));
  return pool[Math.floor(Math.random() * pool.length)];
}

/** Create a single gem with a given spawn row used for the fall-in animation. */
export function makeGem(type: GemType, spawnRow: number): Gem {
  return { id: nextGemId(), type, spawnRow };
}

/**
 * Generate a fresh board guaranteed to have NO initial 3-in-a-row.
 * Builds top-to-bottom, left-to-right, excluding types that would create a match.
 */
export function generateBoard(): Board {
  const board: Board = [];
  for (let r = 0; r < BOARD_SIZE; r++) {
    const row: Gem[] = [];
    for (let c = 0; c < BOARD_SIZE; c++) {
      const exclude: GemType[] = [];
      // avoid 3-in-a-row horizontally
      if (c >= 2 && row[c - 1]?.type === row[c - 2]?.type) {
        exclude.push(row[c - 1].type);
      }
      // avoid 3-in-a-row vertically
      if (r >= 2 && board[r - 1][c]?.type === board[r - 2][c]?.type) {
        exclude.push(board[r - 1][c]!.type);
      }
      row.push(makeGem(randomGemType(exclude), r));
    }
    board.push(row);
  }
  return board;
}

/** Two cells are adjacent if exactly one of (row,col) differs by exactly 1. */
export function areAdjacent(a: { r: number; c: number }, b: { r: number; c: number }): boolean {
  const dr = Math.abs(a.r - b.r);
  const dc = Math.abs(a.c - b.c);
  return (dr === 1 && dc === 0) || (dr === 0 && dc === 1);
}

/** Swap two cells in-place on a NEW board (does not mutate input). */
export function swapCells(board: Board, a: { r: number; c: number }, b: { r: number; c: number }): Board {
  const next = board.map((row) => row.slice());
  const tmp = next[a.r][a.c];
  next[a.r][a.c] = next[b.r][b.c];
  next[b.r][b.c] = tmp;
  return next;
}

/**
 * Match detection: find all gems participating in any horizontal or vertical run of 3+.
 * Returns a 2D boolean grid where true = matched.
 */
export function findMatches(board: Board): boolean[][] {
  const matched: boolean[][] = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(false)
  );

  // Horizontal
  for (let r = 0; r < BOARD_SIZE; r++) {
    let runStart = 0;
    for (let c = 1; c <= BOARD_SIZE; c++) {
      const sameAsPrev =
        c < BOARD_SIZE &&
        board[r][c] !== null &&
        board[r][c - 1] !== null &&
        board[r][c]!.type === board[r][c - 1]!.type;
      if (!sameAsPrev) {
        const runLen = c - runStart;
        if (runLen >= 3) {
          for (let i = runStart; i < c; i++) matched[r][i] = true;
        }
        runStart = c;
      }
    }
  }
  // Vertical
  for (let c = 0; c < BOARD_SIZE; c++) {
    let runStart = 0;
    for (let r = 1; r <= BOARD_SIZE; r++) {
      const sameAsPrev =
        r < BOARD_SIZE &&
        board[r] &&
        board[r][c] !== null &&
        board[r - 1][c] !== null &&
        board[r][c]!.type === board[r - 1][c]!.type;
      if (!sameAsPrev) {
        const runLen = r - runStart;
        if (runLen >= 3) {
          for (let i = runStart; i < r; i++) matched[i][c] = true;
        }
        runStart = r;
      }
    }
  }

  return matched;
}

/** Returns true if any cell is matched. */
export function hasAnyMatch(matched: boolean[][]): boolean {
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (matched[r][c]) return true;
    }
  }
  return false;
}

/** Clears matched gems by setting them to null. Returns a new board and the cleared gem types/count. */
export function clearMatched(
  board: Board,
  matched: boolean[][]
): { board: Board; cleared: { type: GemType; r: number; c: number }[] } {
  const next = board.map((row) => row.slice());
  const cleared: { type: GemType; r: number; c: number }[] = [];
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (matched[r][c] && next[r][c]) {
        cleared.push({ type: next[r][c]!.type, r, c });
        next[r][c] = null;
      }
    }
  }
  return { board: next, cleared };
}

/**
 * Apply gravity: gems fall down to fill empty cells beneath them.
 * Pure: returns new board.
 */
export function applyGravity(board: Board): Board {
  const next: Board = Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null));
  for (let c = 0; c < BOARD_SIZE; c++) {
    let writeRow = BOARD_SIZE - 1;
    for (let r = BOARD_SIZE - 1; r >= 0; r--) {
      const gem = board[r][c];
      if (gem !== null) {
        next[writeRow][c] = gem;
        writeRow -= 1;
      }
    }
  }
  return next;
}

/**
 * Refill empty cells from the top with new random gems.
 * Pure: returns new board. New gems get spawnRow = negative offset (so they animate falling in).
 */
export function refillBoard(board: Board): Board {
  const next: Board = board.map((row) => row.slice());
  for (let c = 0; c < BOARD_SIZE; c++) {
    // Count empty cells in this column (always at the top after gravity)
    let emptyCount = 0;
    for (let r = 0; r < BOARD_SIZE; r++) {
      if (next[r][c] === null) emptyCount += 1;
      else break;
    }
    for (let r = 0; r < emptyCount; r++) {
      // spawnRow set to a negative-ish offset so the visual falls into place
      next[r][c] = makeGem(randomGemType(), r - emptyCount);
    }
  }
  return next;
}

/**
 * After a swap, check if it produces any match (used to validate swaps).
 */
export function swapProducesMatch(
  board: Board,
  a: { r: number; c: number },
  b: { r: number; c: number }
): boolean {
  const swapped = swapCells(board, a, b);
  return hasAnyMatch(findMatches(swapped));
}
