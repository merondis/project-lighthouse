"use client";

import { useState, FormEvent } from "react";
import { getToolBySlug } from "@/data/tools/registry";
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";

export function CalculatorWidget({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);

  const inputFields = tool?.inputFields ?? [];
  const resultFields = tool?.resultFields ?? [];

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

  const [result, setResult] = useState<Record<string, string | number> | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!tool) return null;

  function handleChange(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!tool?.calculate) return;

    try {
      const inputs: Record<string, string | number> = {};
      inputFields.forEach((field) => {
        const raw = values[field.key];
        inputs[field.key] = field.type === "number" ? Number(raw) : raw;
      });
      const output = tool.calculate(inputs);
      setResult(output);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please check your inputs.");
      setResult(null);
    }
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {inputFields.map((field) => (
          <label key={field.key} className="flex flex-col gap-2 text-sm font-medium text-white">
            {field.label}

            {field.type === "date" ? (
              <DatePicker
                value={values[field.key] ?? ""}
                onChange={(v) => handleChange(field.key, v)}
                placeholder={field.placeholder}
              />
            ) : field.type === "select" ? (
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
                type={field.type === "number" ? "number" : field.type}
                value={values[field.key] ?? ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                min={field.min}
                max={field.max}
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
        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-2">
          {resultFields.map((field) => (
            <div key={field.key} className="rounded-lg bg-brand-bg p-4 text-center">
              <p className="text-xs uppercase tracking-wide text-brand-secondary">{field.label}</p>
              <p className={`mt-1 text-2xl font-bold ${field.highlight ? "text-brand-accent" : "text-white"}`}>
                {result[field.key] ?? "-"}
                {field.unit && <span className="ml-1 text-sm text-brand-secondary">{field.unit}</span>}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}