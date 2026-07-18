"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { calculateContrast, ContrastResult } from "@/utils/calculators/contrast-checker";

export function ContrastCheckerWidget() {
  const [color1, setColor1] = useState("#111827");
  const [color2, setColor2] = useState("#ffffff");
  const [result, setResult] = useState<ContrastResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleCheck() {
    setError(null);
    setResult(null);
    try {
      const output = calculateContrast(color1, color2);
      setResult(output);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  const resultBox = result ? (
    <div className="mt-8 border-t border-white/5 pt-6">
      <div className="rounded-lg bg-brand-bg p-4 text-center">
        <p className="text-xs uppercase tracking-wide text-brand-secondary">Contrast Ratio</p>
        <p className="mt-1 text-3xl font-bold text-brand-accent">{result.ratio}:1</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "AA Normal Text", value: result.aaNormalText },
          { label: "AA Large Text", value: result.aaLargeText },
          { label: "AAA Normal Text", value: result.aaaNormalText },
          { label: "AAA Large Text", value: result.aaaLargeText },
        ].map((item) => (
          <div key={item.label} className="rounded-lg bg-brand-bg p-3 text-center">
            <p className="text-xs text-brand-secondary">{item.label}</p>
            <p className={"mt-1 text-sm font-bold " + (item.value === "Pass" ? "text-green-400" : "text-red-400")}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex w-full flex-col items-center gap-2 text-sm font-medium text-white">
          Text Color
          <input
            type="text"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-center font-mono text-white focus:border-brand-accent focus:outline-none"
          />
          <div className="h-12 w-full rounded-lg border border-white/10" style={{ backgroundColor: color1 }} />
        </label>

        <label className="flex w-full flex-col items-center gap-2 text-sm font-medium text-white">
          Background Color
          <input
            type="text"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-center font-mono text-white focus:border-brand-accent focus:outline-none"
          />
          <div className="h-12 w-full rounded-lg border border-white/10" style={{ backgroundColor: color2 }} />
        </label>
      </div>

      <div
        className="mt-6 flex h-24 items-center justify-center rounded-lg border border-white/10 text-lg font-medium"
        style={{ backgroundColor: color2, color: color1 }}
      >
        Sample Text Preview
      </div>

      <div className="mt-6 flex w-full justify-center">
        <Button type="button" onClick={handleCheck} className="w-full max-w-xs sm:w-auto">
          Check Contrast
        </Button>
      </div>

      {errorBox}
      {resultBox}
    </div>
  );
}