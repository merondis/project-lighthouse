"use client";
import { CopyButton } from "@/components/ui/CopyButton";
import { useMemo, useState } from "react";
import {
  convertUnit,
  getUnitsForCategory,
  UnitCategory,
} from "@/utils/calculators/unit-converter";

export function UnitConverterWidget({ category }: { category: UnitCategory }) {
  const units = useMemo(() => getUnitsForCategory(category), [category]);

  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState(units[0]?.key ?? "");
  const [toUnit, setToUnit] = useState(units[1]?.key ?? units[0]?.key ?? "");
  const [error, setError] = useState<string | null>(null);

  const result = useMemo(() => {
    setError(null);
    try {
      const numericValue = Number(value);
      if (value.trim() === "" || Number.isNaN(numericValue)) return null;
      return convertUnit(category, numericValue, fromUnit, toUnit);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed.");
      return null;
    }
  }, [category, value, fromUnit, toUnit]);

  function handleSwap() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  const resultUnitLabel = units.find((u) => u.key === toUnit)?.label.match(/\(([^)]+)\)/)?.[1] ?? "";

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Value
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter a value"
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
          <label className="flex flex-col gap-2 text-sm font-medium text-white">
            From
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
            >
              {units.map((unit) => (
                <option key={unit.key} value={unit.key}>
                  {unit.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={handleSwap}
            aria-label="Swap units"
            className="mb-0.5 flex h-11 w-11 items-center justify-center self-center rounded-lg border border-white/10 bg-brand-bg text-white hover:border-brand-accent sm:mb-0"
          >
            ⇄
          </button>

          <label className="flex flex-col gap-2 text-sm font-medium text-white">
            To
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
            >
              {units.map((unit) => (
                <option key={unit.key} value={unit.key}>
                  {unit.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}

{result !== null && !error && (
        <div className="mt-8 rounded-lg border-t border-white/5 bg-brand-bg p-6 pt-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <p className="text-xs uppercase tracking-wide text-brand-secondary">Result</p>
            <CopyButton value={result + " " + resultUnitLabel} />
          </div>
          <p className="mt-2 break-words text-3xl font-bold text-brand-accent">
            {result} {resultUnitLabel}
          </p>
        </div>
      )}
    </div>
  );
}