import type { Metadata } from "next";
import { MatchMajestyApp } from "@/components/match-majesty/MatchMajestyApp";
import "./match-majesty.css";

export const metadata: Metadata = {
  title: "Match Majesty — Playable Prototype",
  description:
    "A premium fantasy match-3 prototype. Crown the cascade and grow your twilight kingdom.",
};

export default function MatchMajestyPage() {
  return (
    <div className="mm-fullscreen-overlay">
      <MatchMajestyApp />
    </div>
  );
}
