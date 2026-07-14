"use client";

import { useState, FormEvent } from "react";
import { ToolConfig } from "@/types/tool";
import { Button } from "@/components/ui/Button";

export function CalculatorWidget({ tool }: { tool: ToolConfig }) {
  const inputFields = tool.inputFields ?? [];
  const resultFields = tool.resultFields ?? [];

  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    inputFields.forEach((field) => {
      initial[field.key] = field.defaultValue !== undefined ? String(field.defaultValue) : "";
    });
    return initial;
  });

  const [result, setResult] = useState<Record<string, string | number> | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleChange(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!tool.calculate) return;

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
      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        {inputFields.map((field) => (
          <label key={field.key} className="flex flex-col gap-2 text-sm font-medium text-white">
            {field.label}
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
          </label>
        ))}

        <div className="sm:col-span-2">
          <Button type="submit">Calculate</Button>
        </div>
      </form>

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}

      {result && !error && (
        <div className="mt-8 grid gap-4 border-t border-white/5 pt-6 sm:grid-cols-3">
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