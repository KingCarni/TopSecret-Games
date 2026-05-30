"use client";
import { useMemo, useRef, useState } from "react";
import { GemVisual } from "./GemVisual";
import { Board as TBoard, Gem } from "@/lib/match-majesty/types";
import { findMatches } from "@/lib/match-majesty/gameLogic";

interface BoardProps {
  board: TBoard;
  selected: { r: number; c: number } | null;
  isLocked: boolean;
  cellSize: number; // px size of each cell
  onCellSelect: (r: number, c: number) => void;
  /** swap-back invalid hint (for shake effect) */
  invalidSwap: { a: { r: number; c: number }; b: { r: number; c: number } } | null;
}

export function MatchBoard({
  board,
  selected,
  isLocked,
  cellSize,
  onCellSelect,
  invalidSwap,
}: BoardProps) {
  // Map gem id -> {row, col} so we can absolute-position each gem in the board.
  // React's key on the gem means React re-uses the same DOM node when the gem moves -> CSS transition animates it.
  const positions = useMemo(() => {
    const out: { gem: Gem; r: number; c: number }[] = [];
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        const g = board[r][c];
        if (g) out.push({ gem: g, r, c });
      }
    }
    return out;
  }, [board]);

  // Matched gems (currently in the board state during pop window)
  const matched = useMemo(() => findMatches(board), [board]);

  // For invalid-swap shake effect, derive the two ids that should shake
  const shakeIds = useMemo(() => {
    if (!invalidSwap) return new Set<string>();
    const aGem = board[invalidSwap.a.r]?.[invalidSwap.a.c];
    const bGem = board[invalidSwap.b.r]?.[invalidSwap.b.c];
    const ids = new Set<string>();
    if (aGem) ids.add(aGem.id);
    if (bGem) ids.add(bGem.id);
    return ids;
  }, [invalidSwap, board]);

  // Drag handling for swipe-to-swap
  const dragRef = useRef<{ r: number; c: number; sx: number; sy: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent, r: number, c: number) => {
    if (isLocked) return;
    dragRef.current = { r, c, sx: e.clientX, sy: e.clientY };
  };
  const handlePointerUp = (e: React.PointerEvent, r: number, c: number) => {
    const d = dragRef.current;
    dragRef.current = null;
    if (isLocked) return;
    if (!d || (d.r === r && d.c === c)) {
      // Tap
      onCellSelect(r, c);
      return;
    }
    const dx = e.clientX - d.sx;
    const dy = e.clientY - d.sy;
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12) {
      onCellSelect(r, c);
      return;
    }
    let tr = d.r;
    let tc = d.c;
    if (Math.abs(dx) > Math.abs(dy)) {
      tc = d.c + (dx > 0 ? 1 : -1);
    } else {
      tr = d.r + (dy > 0 ? 1 : -1);
    }
    if (tr < 0 || tr >= board.length || tc < 0 || tc >= board[0].length) return;
    // Initiate swap by selecting source then target
    onCellSelect(d.r, d.c);
    onCellSelect(tr, tc);
  };

  const boardPx = cellSize * board.length;
  const gap = Math.max(2, Math.round(cellSize * 0.08));

  return (
    <div
      data-testid="match-board"
      className="match-board-frame relative"
      style={{
        width: boardPx + 24,
        height: boardPx + 24,
        padding: 12,
        borderRadius: 20,
        background:
          "linear-gradient(180deg, rgba(20,15,38,0.85) 0%, rgba(8,12,30,0.9) 100%)",
        border: "2px solid rgba(140,94,53,0.55)",
        boxShadow:
          "0 0 0 6px rgba(140,94,53,0.18), 0 0 60px rgba(123,66,246,0.25), 0 0 24px rgba(242,213,126,0.18), inset 0 0 30px rgba(0,0,0,0.7)",
      }}
    >
      {/* Inner cell grid (visual backdrop only) */}
      <div
        className="relative"
        style={{ width: boardPx, height: boardPx }}
      >
        {/* Cell backgrounds */}
        {Array.from({ length: board.length }).map((_, r) =>
          Array.from({ length: board[0].length }).map((__, c) => (
            <div
              key={`cell-${r}-${c}`}
              className="absolute rounded-md"
              style={{
                left: c * cellSize + gap / 2,
                top: r * cellSize + gap / 2,
                width: cellSize - gap,
                height: cellSize - gap,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            />
          ))
        )}

        {/* Selection highlight */}
        {selected && (
          <div
            className="absolute pointer-events-none mm-selected-glow"
            style={{
              left: selected.c * cellSize,
              top: selected.r * cellSize,
              width: cellSize,
              height: cellSize,
              borderRadius: 12,
              border: "2px solid #F2D57E",
              boxShadow:
                "0 0 18px rgba(242,213,126,0.7), inset 0 0 18px rgba(242,213,126,0.35)",
            }}
          />
        )}

        {/* Gems layer */}
        {positions.map(({ gem, r, c }) => {
          const isMatched = matched[r][c];
          const isShake = shakeIds.has(gem.id);
          const initialFromSpawn = gem.spawnRow < 0;
          return (
            <button
              key={gem.id}
              type="button"
              data-testid={`gem-cell-${r}-${c}`}
              data-gem-type={gem.type}
              onPointerDown={(e) => handlePointerDown(e, r, c)}
              onPointerUp={(e) => handlePointerUp(e, r, c)}
              className={`mm-gem ${isMatched ? "mm-gem-pop" : ""} ${
                isShake ? "mm-gem-shake" : ""
              }`}
              style={{
                position: "absolute",
                width: cellSize,
                height: cellSize,
                transform: `translate(${c * cellSize}px, ${r * cellSize}px)`,
                transition:
                  "transform 220ms cubic-bezier(0.34, 1.4, 0.64, 1)",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: isLocked ? "default" : "pointer",
                // Falling animation: when initial spawnRow < 0, start the gem above its slot using extra translate via animation
                animation: initialFromSpawn
                  ? "mm-fall-in 380ms cubic-bezier(0.22,1.4,0.36,1) both"
                  : undefined,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GemVisual
                  type={gem.type}
                  size={Math.round(cellSize * 0.78)}
                  highlighted={selected?.r === r && selected?.c === c}
                  power={gem.power}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
