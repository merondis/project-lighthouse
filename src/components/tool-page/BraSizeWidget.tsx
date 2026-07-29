"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import {
  calculateBraSize,
  BraSizeResult,
  BraSizeUnit,
  BAND_SIZE_TABLE,
  CUP_DIFFERENCE_TABLE,
} from "@/utils/calculators/bra-size-calculator";

const inputClasses =
  "rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none";
const labelClasses = "flex flex-col gap-2 text-sm font-medium text-white";
const toggleBaseClasses = "flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors";

export function BraSizeWidget() {
  const [unit, setUnit] = useState<BraSizeUnit>("in");
  const [bust, setBust] = useState("36");
  const [band, setBand] = useState("32");

  const [result, setResult] = useState<BraSizeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleCalculate() {
    setError(null);
    try {
      const output = calculateBraSize(Number(bust), Number(band), unit);
      setResult(output);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please check your inputs.");
      setResult(null);
    }
  }

  const unitToggle = (
    <div className="flex gap-2 rounded-lg bg-brand-bg p-1">
      <button
        type="button"
        onClick={() => setUnit("in")}
        className={toggleBaseClasses + " " + (unit === "in" ? "bg-brand-primary text-white" : "text-brand-secondary")}
      >
        Inches
      </button>
      <button
        type="button"
        onClick={() => setUnit("cm")}
        className={toggleBaseClasses + " " + (unit === "cm" ? "bg-brand-primary text-white" : "text-brand-secondary")}
      >
        Centimeters
      </button>
    </div>
  );

  const resultBox = result ? (
    <div className="mt-8 border-t border-white/5 pt-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <p className="text-xs uppercase tracking-wide text-brand-secondary">US / Canada Size</p>
            <CopyButton value={result.sizeUS} />
          </div>
          <p className="mt-1 text-2xl font-bold text-brand-accent">{result.sizeUS}</p>
        </div>
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <p className="text-xs uppercase tracking-wide text-brand-secondary">UK / Australia / NZ Size</p>
            <CopyButton value={result.sizeUK} />
          </div>
          <p className="mt-1 text-2xl font-bold text-brand-accent">{result.sizeUK}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">Band (US/UK)</p>
          <p className="mt-1 text-lg font-bold text-white">{result.bandSizeUS}</p>
        </div>
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">Band (EU)</p>
          <p className="mt-1 text-lg font-bold text-white">{result.bandEU}</p>
        </div>
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">Band (FR/BE/ES)</p>
          <p className="mt-1 text-lg font-bold text-white">{result.bandFrBeEs}</p>
        </div>
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">Band (AU/NZ)</p>
          <p className="mt-1 text-lg font-bold text-white">{result.bandAuNz}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-brand-secondary">
        Your bust-to-band difference is about {result.difference}&quot;, giving a US cup of {result.cupUS} and a
        UK/Australia cup of {result.cupUK}.
      </p>
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        {unitToggle}

        <div className="grid grid-cols-2 gap-3">
          <label className={labelClasses}>
            Bust Size ({unit === "in" ? "in" : "cm"})
            <input type="number" step={0.1} value={bust} onChange={(e) => setBust(e.target.value)} className={inputClasses} />
          </label>
          <label className={labelClasses}>
            Band Size ({unit === "in" ? "in" : "cm"})
            <input type="number" step={0.1} value={band} onChange={(e) => setBand(e.target.value)} className={inputClasses} />
          </label>
        </div>

        <p className="text-xs leading-relaxed text-brand-secondary">
          Bust size is the loose circumference around the fullest part of the breasts. Band size is the firm
          circumference measured directly underneath the breasts.
        </p>

        <Button type="button" onClick={handleCalculate} className="w-full sm:w-auto">
          Calculate Bra Size
        </Button>
      </div>

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}
      {resultBox}

      <div className="mt-12">
        <h2 className="text-xl font-bold text-white">Band Size Conversion Table</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-bg text-xs uppercase text-brand-secondary">
              <tr>
                <th className="px-4 py-3">Size</th>
                <th className="px-4 py-3">FR/BE/ES</th>
                <th className="px-4 py-3">EU (EN 13402)</th>
                <th className="px-4 py-3">US &amp; UK</th>
                <th className="px-4 py-3">AU &amp; NZ</th>
              </tr>
            </thead>
            <tbody>
              {BAND_SIZE_TABLE.map((row) => (
                <tr
                  key={row.tier}
                  className={"border-t border-white/5" + (result?.bandSizeUS === row.usUk ? " bg-brand-primary/10" : "")}
                >
                  <td className="px-4 py-2 text-white">{row.tier}</td>
                  <td className="px-4 py-2 text-brand-secondary">{row.frBeEs}</td>
                  <td className="px-4 py-2 text-brand-secondary">{row.eu}</td>
                  <td className="px-4 py-2 text-brand-secondary">{row.usUk}</td>
                  <td className="px-4 py-2 text-brand-secondary">{row.auNz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-white">Cup Size by Bust-to-Band Difference (inches)</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-bg text-xs uppercase text-brand-secondary">
              <tr>
                <th className="px-4 py-3">Difference</th>
                <th className="px-4 py-3">US Cup</th>
                <th className="px-4 py-3">UK/AU Cup</th>
              </tr>
            </thead>
            <tbody>
              {CUP_DIFFERENCE_TABLE.map((row) => (
                <tr
                  key={row.diffInches}
                  className={
                    "border-t border-white/5" +
                    (result && Math.round(Math.max(0, Math.min(14, result.difference))) === row.diffInches
                      ? " bg-brand-primary/10"
                      : "")
                  }
                >
                  <td className="px-4 py-2 text-white">{row.diffInches === 0 ? '< 1"' : row.diffInches + '"'}</td>
                  <td className="px-4 py-2 text-brand-secondary">{row.us}</td>
                  <td className="px-4 py-2 text-brand-secondary">{row.ukAu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
