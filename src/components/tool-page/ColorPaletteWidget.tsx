"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { generatePalette, HarmonyType, PaletteResult } from "@/utils/calculators/color-palette-generator";

export function ColorPaletteWidget() {
  const [hex, setHex] = useState("#2563eb");
  const [harmony, setHarmony] = useState<HarmonyType>("complementary");
  const [result, setResult] = useState<PaletteResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleGenerate() {
    setError(null);
    setResult(null);
    try {
      const output = generatePalette(hex, harmony);
      setResult(output);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  const resultBox = result ? (
    <div className="mt-8 border-t border-white/5 pt-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {result.colors.map((c, i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-white/10">
            <div className="h-20 w-full" style={{ backgroundColor: c }} />
            <p className="bg-brand-bg py-2 text-center font-mono text-xs text-white">{c}</p>
          </div>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Base Color
          <input
            type="text"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 font-mono text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Harmony Type
          <select
            value={harmony}
            onChange={(e) => setHarmony(e.target.value as HarmonyType)}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          >
            <option value="complementary">Complementary</option>
            <option value="triadic">Triadic</option>
            <option value="analogous">Analogous</option>
          </select>
        </label>

        <Button type="button" onClick={handleGenerate} className="w-full sm:w-auto">
          Generate Palette
        </Button>
      </div>

      {errorBox}
      {resultBox}
    </div>
  );
}