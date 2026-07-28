"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { growthCalculatorConfigs } from "@/data/growthCalculatorConfigs";
import { GrowthScheduleResult } from "@/utils/calculators/growth-schedules";
import { CompositionDonutChart } from "@/components/tool-page/charts/CompositionDonutChart";
import { YearlyStackedBarChart } from "@/components/tool-page/charts/YearlyStackedBarChart";
import { BalanceOverTimeChart } from "@/components/tool-page/charts/BalanceOverTimeChart";

export function GrowthCalculatorWidget({ growthKey }: { growthKey: string }) {
  const config = growthCalculatorConfigs[growthKey];
  const inputFields = config?.inputFields ?? [];

  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    inputFields.forEach((field) => {
      if (field.defaultValue !== undefined) {
        initial[field.key] = String(field.defaultValue);
      } else if (field.type === "select" && field.options?.length) {
        initial[field.key] = field.options[0].value;
      } else {
        initial[field.key] = "";
      }
    });
    return initial;
  });

  const [result, setResult] = useState<GrowthScheduleResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!config) return null;

  function handleChange(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const inputs: Record<string, string | number> = {};
      inputFields.forEach((field) => {
        const raw = values[field.key];
        inputs[field.key] = field.type === "number" ? Number(raw) : raw;
      });
      const output = config.calculate(inputs);
      if (output.errorMessage) {
        setError(output.errorMessage);
        return;
      }
      setResult(output);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please check your inputs.");
    }
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {inputFields.map((field) => (
          <label key={field.key} className="flex flex-col gap-2 text-sm font-medium text-white">
            {field.label}
            {field.type === "select" ? (
              <select
                value={values[field.key] ?? ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="number"
                value={values[field.key] ?? ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                step={field.step}
                className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
              />
            )}
          </label>
        ))}

        <Button type="submit" className="mt-2 w-full sm:w-auto">
          Calculate
        </Button>
      </form>

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}

      {result && !error && (
        <>
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-2">
            {result.summary.map((field) => {
              const displayValue = String(field.value);
              return (
                <div key={field.key} className="rounded-lg bg-brand-bg p-4 text-center">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wide text-brand-secondary">{field.label}</p>
                    <CopyButton value={displayValue} />
                  </div>
                  <p className={"mt-1 text-2xl font-bold " + (field.highlight ? "text-brand-accent" : "text-white")}>
                    {displayValue}
                    {field.unit ? <span className="ml-1 text-sm text-brand-secondary">{field.unit}</span> : null}
                  </p>
                </div>
              );
            })}
          </div>

          {(result.composition.length > 0 || result.yearlySchedule.length > 0) && (
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-white/5 pt-6 lg:grid-cols-2">
              {result.composition.length > 0 && (
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-white">Composition</h3>
                  <CompositionDonutChart data={result.composition} />
                </div>
              )}

              <div className={result.composition.length > 0 ? "" : "lg:col-span-2"}>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {result.chartMode === "deplete" ? "Balance Over Time" : result.chartMode === "flat" ? (result.aLabel ?? "By Year") : "By Year"}
                </h3>

                {result.chartMode === "accumulate" ? (
                  <YearlyStackedBarChart
                    data={result.yearlySchedule.map((row) => ({ label: row.label, a: row.a, b: row.b }))}
                    aLabel={result.aLabel}
                    bLabel={result.bLabel}
                  />
                ) : (
                  <BalanceOverTimeChart
                    data={result.yearlySchedule.map((row) => ({ label: row.label, balance: row.balance }))}
                    label={result.aLabel}
                    referenceValue={result.referenceValue}
                    referenceLabel={result.referenceLabel}
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
