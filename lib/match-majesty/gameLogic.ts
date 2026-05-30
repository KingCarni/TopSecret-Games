import { Board, Gem, GEM_TYPES, GemPower, GemType } from "./types";

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
export function makeGem(type: GemType, spawnRow: number, power?: GemPower): Gem {
  return { id: nextGemId(), type, spawnRow, power };
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

/* ---------------------------- Power-up support ---------------------------- */

/** Determine the per-cell horizontal run length (same type, same row). */
function buildRunGrids(board: Board, matched: boolean[][]) {
  const hRun: number[][] = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(0)
  );
  const vRun: number[][] = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(0)
  );
  // Horizontal
  for (let r = 0; r < BOARD_SIZE; r++) {
    let start = 0;
    for (let c = 1; c <= BOARD_SIZE; c++) {
      const same =
        c < BOARD_SIZE &&
        matched[r][c] &&
        matched[r][c - 1] &&
        board[r][c]?.type === board[r][c - 1]?.type;
      if (!same) {
        const len = c - start;
        if (len >= 3) for (let i = start; i < c; i++) hRun[r][i] = len;
        start = c;
      }
    }
  }
  // Vertical
  for (let c = 0; c < BOARD_SIZE; c++) {
    let start = 0;
    for (let r = 1; r <= BOARD_SIZE; r++) {
      const same =
        r < BOARD_SIZE &&
        matched[r][c] &&
        matched[r - 1][c] &&
        board[r][c]?.type === board[r - 1][c]?.type;
      if (!same) {
        const len = r - start;
        if (len >= 3) for (let i = start; i < r; i++) vRun[i][c] = len;
        start = c < 0 ? 0 : start; // no-op, keep TS happy
        start = r;
      }
    }
  }
  return { hRun, vRun };
}

/** Connected matched cells of same type form a cluster (flood-fill 4-neighbors). */
interface Cluster {
  type: GemType;
  cells: { r: number; c: number }[];
  maxH: number;
  maxV: number;
  /** intersection cell where both row run >=3 and column run >=3 are at the same point */
  intersection?: { r: number; c: number };
}

function findClusters(board: Board, matched: boolean[][]): Cluster[] {
  const { hRun, vRun } = buildRunGrids(board, matched);
  const visited: boolean[][] = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(false)
  );
  const clusters: Cluster[] = [];
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (!matched[r][c] || visited[r][c]) continue;
      const type = board[r][c]!.type;
      const queue: { r: number; c: number }[] = [{ r, c }];
      const cells: { r: number; c: number }[] = [];
      let maxH = 0;
      let maxV = 0;
      let intersection: { r: number; c: number } | undefined;
      while (queue.length) {
        const cur = queue.shift()!;
        if (visited[cur.r][cur.c]) continue;
        if (!matched[cur.r][cur.c]) continue;
        if (board[cur.r][cur.c]?.type !== type) continue;
        visited[cur.r][cur.c] = true;
        cells.push(cur);
        const h = hRun[cur.r][cur.c];
        const v = vRun[cur.r][cur.c];
        if (h > maxH) maxH = h;
        if (v > maxV) maxV = v;
        if (h >= 3 && v >= 3 && !intersection) intersection = { r: cur.r, c: cur.c };
        const nb = [
          { r: cur.r - 1, c: cur.c },
          { r: cur.r + 1, c: cur.c },
          { r: cur.r, c: cur.c - 1 },
          { r: cur.r, c: cur.c + 1 },
        ];
        for (const n of nb) {
          if (
            n.r >= 0 &&
            n.r < BOARD_SIZE &&
            n.c >= 0 &&
            n.c < BOARD_SIZE &&
            matched[n.r][n.c] &&
            !visited[n.r][n.c] &&
            board[n.r][n.c]?.type === type
          ) {
            queue.push(n);
          }
        }
      }
      if (cells.length >= 3) {
        clusters.push({ type, cells, maxH, maxV, intersection });
      }
    }
  }
  return clusters;
}

/**
 * For each cluster, decide if a power-up gem should be spawned and at which cell:
 * - L/T intersection (maxH>=3 AND maxV>=3, intersection exists)         => bomb at intersection
 * - max run >= 5                                                         => color at center
 * - max run == 4                                                         => line at preferred cell
 * Returns a list of power spawns.
 */
export interface PowerSpawn {
  r: number;
  c: number;
  type: GemType;
  power: GemPower;
}

export function planPowerSpawns(
  clusters: Cluster[],
  preferred?: { r: number; c: number }
): PowerSpawn[] {
  const out: PowerSpawn[] = [];
  for (const cl of clusters) {
    let spawn: PowerSpawn | null = null;
    if (cl.intersection) {
      spawn = {
        r: cl.intersection.r,
        c: cl.intersection.c,
        type: cl.type,
        power: "bomb",
      };
    } else if (Math.max(cl.maxH, cl.maxV) >= 5) {
      const cell = pickCell(cl.cells, preferred);
      spawn = { r: cell.r, c: cell.c, type: cl.type, power: "color" };
    } else if (Math.max(cl.maxH, cl.maxV) === 4) {
      const cell = pickCell(cl.cells, preferred);
      const power: GemPower = cl.maxH >= 4 ? "line-h" : "line-v";
      spawn = { r: cell.r, c: cell.c, type: cl.type, power };
    }
    if (spawn) out.push(spawn);
  }
  return out;
}

function pickCell(
  cells: { r: number; c: number }[],
  preferred?: { r: number; c: number }
): { r: number; c: number } {
  if (preferred) {
    const hit = cells.find((p) => p.r === preferred.r && p.c === preferred.c);
    if (hit) return hit;
  }
  // Pick the median cell as a sensible default
  return cells[Math.floor(cells.length / 2)];
}

/**
 * Expand a matched-grid to include power-up effects.
 * For each matched cell that is a power-up gem, add its effect cells to the matched set.
 * Repeats until no new cells are added (chains power-ups).
 */
export function expandPowerEffects(
  board: Board,
  matched: boolean[][]
): boolean[][] {
  const m = matched.map((row) => row.slice());
  let changed = true;
  // Track which power gems we have already triggered so they don't double-fire forever
  const triggered: boolean[][] = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(false)
  );
  while (changed) {
    changed = false;
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (!m[r][c] || triggered[r][c]) continue;
        const gem = board[r][c];
        if (!gem || !gem.power) continue;
        triggered[r][c] = true;
        const adds = powerEffectCells(board, r, c, gem.power, gem.type);
        for (const cell of adds) {
          if (!m[cell.r][cell.c]) {
            m[cell.r][cell.c] = true;
            changed = true;
          }
        }
      }
    }
  }
  return m;
}

function powerEffectCells(
  board: Board,
  r: number,
  c: number,
  power: GemPower,
  type: GemType
): { r: number; c: number }[] {
  const out: { r: number; c: number }[] = [];
  if (power === "line-h") {
    for (let cc = 0; cc < BOARD_SIZE; cc++) if (board[r][cc]) out.push({ r, c: cc });
  } else if (power === "line-v") {
    for (let rr = 0; rr < BOARD_SIZE; rr++) if (board[rr][c]) out.push({ r: rr, c });
  } else if (power === "bomb") {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const rr = r + dr;
        const cc = c + dc;
        if (rr >= 0 && rr < BOARD_SIZE && cc >= 0 && cc < BOARD_SIZE && board[rr][cc])
          out.push({ r: rr, c: cc });
      }
    }
  } else if (power === "color") {
    for (let rr = 0; rr < BOARD_SIZE; rr++) {
      for (let cc = 0; cc < BOARD_SIZE; cc++) {
        if (board[rr][cc]?.type === type) out.push({ r: rr, c: cc });
      }
    }
  }
  return out;
}

/**
 * Resolve one "match wave":
 *   - finds matches
 *   - expands them with power-up effects (chained)
 *   - reserves cells for new power-ups (so they survive the clear)
 *   - clears the rest
 * Returns the new board, the cleared cells (for scoring/counters/animation),
 * and the spawned power-ups (for visual indication).
 *
 * @param origin - optional cell where the player's swap landed (used to bias
 *   the power-up spawn location for 4/5-runs to feel intentional).
 */
export function resolveMatchWave(
  startBoard: Board,
  origin?: { r: number; c: number }
): {
  board: Board;
  cleared: { type: GemType; r: number; c: number }[];
  spawns: PowerSpawn[];
} | null {
  const matched = findMatches(startBoard);
  if (!hasAnyMatch(matched)) return null;

  // Find clusters from the BASE match (not yet expanded by power effects) to decide power spawns
  const clusters = findClusters(startBoard, matched);
  const spawns = planPowerSpawns(clusters, origin);

  // Expand match set with power-up chains
  const expanded = expandPowerEffects(startBoard, matched);

  // Reserve power-up spawn cells (they will become the new gem rather than getting cleared)
  const reserved = new Set<string>();
  spawns.forEach((s) => reserved.add(`${s.r},${s.c}`));

  // Clear: every expanded cell that is not reserved becomes null.
  // Reserved cells become a NEW gem with the same type AND the new power.
  const next: Board = startBoard.map((row) => row.slice());
  const cleared: { type: GemType; r: number; c: number }[] = [];
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      if (!expanded[r][c]) continue;
      const gem = next[r][c];
      if (!gem) continue;
      if (reserved.has(`${r},${c}`)) continue; // keep for power-up upgrade below
      cleared.push({ type: gem.type, r, c });
      next[r][c] = null;
    }
  }
  // Upgrade reserved cells to power-up gems
  for (const s of spawns) {
    next[s.r][s.c] = makeGem(s.type, s.r, s.power);
  }
  return { board: next, cleared, spawns };
}

