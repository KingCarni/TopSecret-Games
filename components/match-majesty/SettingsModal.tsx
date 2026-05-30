"use client";
import { RegalButton } from "./UI";
import { GameSettings } from "@/lib/match-majesty/types";

interface SettingsModalProps {
  open: boolean;
  settings: GameSettings;
  onToggle: (key: keyof GameSettings) => void;
  onClose: () => void;
  onReset: () => void;
}

export function SettingsModal({ open, settings, onToggle, onClose, onReset }: SettingsModalProps) {
  if (!open) return null;
  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm mm-fade-in"
      onClick={onClose}
      data-testid="settings-modal"
    >
      <div
        className="relative w-[420px] max-w-[92vw] rounded-xl text-[#2c1e16] p-7 mm-pop-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          background:
            "linear-gradient(180deg, #F4E7CE 0%, #E8D4AC 100%)",
          border: "6px solid #8C5E35",
          boxShadow:
            "inset 0 0 40px rgba(140,94,53,0.3), 0 14px 40px rgba(0,0,0,0.6)",
        }}
      >
        <button
          type="button"
          aria-label="Close settings"
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#8C5E35] text-[#F4E7CE] font-bold flex items-center justify-center hover:bg-[#6b4524] transition"
          data-testid="settings-close-button"
        >
          ✕
        </button>
        <div className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#5A4433]">
          Throne Settings
        </div>
        <h2 className="mt-1 font-[Cormorant_Garamond] text-3xl font-bold">Settings</h2>
        <div className="mt-5 flex flex-col gap-3">
          <ToggleRow
            label="Sound Effects"
            value={settings.sound}
            onToggle={() => onToggle("sound")}
            testid="settings-sound-toggle"
          />
          <ToggleRow
            label="Music"
            value={settings.music}
            onToggle={() => onToggle("music")}
            testid="settings-music-toggle"
          />
        </div>
        <div className="mt-7 flex flex-col gap-3">
          <RegalButton
            variant="primary"
            onClick={onReset}
            data-testid="settings-reset-button"
          >
            Reset Progress
          </RegalButton>
          <RegalButton variant="ghost" onClick={onClose} data-testid="settings-close-button-bottom">
            Close
          </RegalButton>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  value,
  onToggle,
  testid,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
  testid?: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-[#E8D4AC]/70 border-2 border-[#8C5E35]/40 px-4 py-3">
      <span className="font-[Alegreya_Sans] font-bold text-[#2c1e16] text-base">
        {label}
      </span>
      <button
        type="button"
        onClick={onToggle}
        data-testid={testid}
        aria-pressed={value}
        className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
          value ? "bg-[#10B981]" : "bg-[#8C5E35]/40"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-[#F4E7CE] shadow transition-transform duration-300 ${
            value ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
