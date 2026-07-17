"use client";

import { useState, FormEvent } from "react";
import { getToolBySlug } from "@/data/tools/registry";
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";
import { CopyButton } from "@/components/ui/CopyButton";
import { ResultInsight } from "@/components/tool-page/ResultInsight";

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
      } else if (field.type === "checkbox") {
        initial[field.key] = "false";
      } else {
        initial[field.key] = "";
      }
    });
    return initial;
  });

  const [result, setResult] = useState<Record<string, string | number> | null>(null);
  const [lastInputs, setLastInputs] = useState<Record<string, string | number> | null>(null);
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
        if (field.type === "number") {
          inputs[field.key] = Number(raw);
        } else if (field.type === "checkbox") {
          inputs[field.key] = raw === "true" ? "true" : "false";
        } else {
          inputs[field.key] = raw;
        }
      });
      const output = tool.calculate(inputs);
      setResult(output);
      setLastInputs(inputs);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please check your inputs.");
      setResult(null);
      setLastInputs(null);
    }
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {inputFields.map((field) => {
          if (field.type === "checkbox") {
            return (
              <label key={field.key} className="flex items-center gap-3 text-sm font-medium text-white">
                <input
                  type="checkbox"
                  checked={values[field.key] === "true"}
                  onChange={(e) => handleChange(field.key, e.target.checked ? "true" : "false")}
                  className="h-4 w-4 rounded border-white/20 bg-brand-bg accent-brand-primary"
                />
                {field.label}
              </label>
            );
          }

          return (
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
              ) : field.type === "textarea" ? (
                <textarea
                  value={values[field.key] ?? ""}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  rows={6}
                  className="resize-y rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
                />
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
          );
        })}

        <Button type="submit" className="mt-2 w-full sm:w-auto">
          Calculate
        </Button>
      </form>

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}

      {result && !error && (
        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-2">
          {resultFields.map((field) => {
            const rawValue = result[field.key];
            const displayValue = rawValue !== undefined && rawValue !== null ? String(rawValue) : "-";

            if (field.wide) {
              return (
                <div key={field.key} className="rounded-lg bg-brand-bg p-4 sm:col-span-2">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs uppercase tracking-wide text-brand-secondary">{field.label}</p>
                    <CopyButton value={displayValue} />
                  </div>
                  <p className="mt-2 break-words font-mono text-lg text-brand-accent">{displayValue}</p>
                </div>
              );
            }

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
      )}

      {result && !error && tool.interpret ? (
        <ResultInsight insights={tool.interpret(result, lastInputs ?? {})} />
      ) : null}
    </div>
  );
}