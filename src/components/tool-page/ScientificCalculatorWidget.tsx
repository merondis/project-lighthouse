"use client";

import { useState } from "react";
import { evaluateExpression } from "@/utils/calculators/safe-math-eval";

const BUTTONS = [
  "7", "8", "9", "/", "sin(",
  "4", "5", "6", "*", "cos(",
  "1", "2", "3", "-", "tan(",
  "0", ".", "(", ")", "+",
  "sqrt(", "log(", "ln(", "^", "C",
];

export function ScientificCalculatorWidget() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleButton(value: string) {
    setError(null);
    if (value === "C") {
      setExpression("");
      setResult(null);
      return;
    }
    setExpression((prev) => prev + value);
  }

  function handleEqual() {
    setError(null);
    try {
      const value = evaluateExpression(expression);
      setResult(String(value));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid expression.");
      setResult(null);
    }
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="Enter an expression, e.g. sqrt(16) + 2^3"
        className="w-full rounded-lg border border-white/10 bg-brand-bg px-4 py-3 font-mono text-lg text-white focus:border-brand-accent focus:outline-none"
      />

      <div className="mt-4 grid grid-cols-5 gap-2">
        {BUTTONS.map((btn) => (
          <button
            key={btn}
            type="button"
            onClick={() => handleButton(btn)}
            className="rounded-lg border border-white/10 bg-brand-bg py-3 text-sm font-medium text-white hover:border-brand-accent hover:text-brand-accent"
          >
            {btn.replace("(", "")}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleEqual}
        className="mt-3 w-full rounded-lg bg-brand-primary py-3 text-sm font-semibold text-white hover:bg-blue-700"
      >
        = Calculate
      </button>

      {error ? <p className="mt-4 text-sm font-medium text-red-400">{error}</p> : null}

      {result !== null && !error ? (
        <div className="mt-4 rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">Result</p>
          <p className="mt-1 text-3xl font-bold text-brand-accent">{result}</p>
        </div>
      ) : null}

      <p className="mt-6 text-xs text-brand-secondary">
        Trig functions (sin, cos, tan) use radians. Use pi for π.
      </p>
    </div>
  );
}