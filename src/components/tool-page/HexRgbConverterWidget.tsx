"use client";

import { useState } from "react";

function hexToRgb(hex: string): string | null {
  const clean = hex.replace("#", "").trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null;
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function rgbToHex(r: number, g: number, b: number): string | null {
  if ([r, g, b].some((v) => Number.isNaN(v) || v < 0 || v > 255)) return null;
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

export function HexRgbConverterWidget() {
  const [hex, setHex] = useState("#2563eb");
  const [r, setR] = useState("37");
  const [g, setG] = useState("99");
  const [b, setB] = useState("235");

  function handleHexChange(value: string) {
    setHex(value);
    const rgb = hexToRgb(value);
    if (rgb) {
      const nums = rgb.match(/\d+/g);
      if (nums) {
        setR(nums[0]);
        setG(nums[1]);
        setB(nums[2]);
      }
    }
  }

  function handleRgbChange(newR: string, newG: string, newB: string) {
    setR(newR);
    setG(newG);
    setB(newB);
    const converted = rgbToHex(Number(newR), Number(newG), Number(newB));
    if (converted) setHex(converted);
  }

  const previewColor = hexToRgb(hex) ? hex : "#000000";

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div
          className="h-24 w-24 shrink-0 rounded-lg border border-white/10"
          style={{ backgroundColor: previewColor }}
        />

        <div className="flex flex-1 flex-col gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium text-white">
            Hex Color
            <input
              type="text"
              value={hex}
              onChange={(e) => handleHexChange(e.target.value)}
              placeholder="#2563eb"
              className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 font-mono text-white focus:border-brand-accent focus:outline-none"
            />
          </label>

          <div className="grid grid-cols-3 gap-3">
            <label className="flex flex-col gap-2 text-sm font-medium text-white">
              R
              <input
                type="number"
                min={0}
                max={255}
                value={r}
                onChange={(e) => handleRgbChange(e.target.value, g, b)}
                className="rounded-lg border border-white/10 bg-brand-bg px-3 py-2 text-white focus:border-brand-accent focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-white">
              G
              <input
                type="number"
                min={0}
                max={255}
                value={g}
                onChange={(e) => handleRgbChange(r, e.target.value, b)}
                className="rounded-lg border border-white/10 bg-brand-bg px-3 py-2 text-white focus:border-brand-accent focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-white">
              B
              <input
                type="number"
                min={0}
                max={255}
                value={b}
                onChange={(e) => handleRgbChange(r, g, e.target.value)}
                className="rounded-lg border border-white/10 bg-brand-bg px-3 py-2 text-white focus:border-brand-accent focus:outline-none"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}