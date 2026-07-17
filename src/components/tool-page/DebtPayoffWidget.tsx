"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { calculateDebtPayoff, DebtPayoffResult, PayoffStrategy } from "@/utils/calculators/debt-payoff-calculator";

export function DebtPayoffWidget() {
  const [debts, setDebts] = useState([
    { name: "Debt 1", balance: "", apr: "", minPayment: "" },
    { name: "Debt 2", balance: "", apr: "", minPayment: "" },
    { name: "Debt 3", balance: "", apr: "", minPayment: "" },
  ]);
  const [extraPayment, setExtraPayment] = useState("0");
  const [strategy, setStrategy] = useState<PayoffStrategy>("avalanche");
  const [result, setResult] = useState<DebtPayoffResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateDebt(index: number, field: "name" | "balance" | "apr" | "minPayment", value: string) {
    setDebts((prev) => {
      const next = prev.slice();
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  function handleCalculate() {
    setError(null);
    setResult(null);

    try {
      const parsedDebts = debts.map((d) => ({
        name: d.name || "Debt",
        balance: Number(d.balance) || 0,
        annualApr: Number(d.apr) || 0,
        minimumPayment: Number(d.minPayment) || 0,
      }));

      const output = calculateDebtPayoff(parsedDebts, Number(extraPayment) || 0, strategy);
      setResult(output);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please check your inputs.");
    }
  }

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  const resultBox = result ? (
    <div className="mt-8 border-t border-white/5 pt-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">Months to Debt Free</p>
          <p className="mt-1 text-2xl font-bold text-brand-accent">{result.monthsToPayoff}</p>
        </div>
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">Total Interest Paid</p>
          <p className="mt-1 text-2xl font-bold text-white">{result.totalInterest}</p>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-brand-bg p-4">
        <p className="text-xs uppercase tracking-wide text-brand-secondary">Payoff Order</p>
        <p className="mt-1 text-sm text-white">{result.payoffOrder.join(" → ")}</p>
      </div>
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        {debts.map((debt, i) => (
          <div key={i} className="rounded-lg border border-white/5 bg-brand-bg p-4">
            <input
              type="text"
              value={debt.name}
              onChange={(e) => updateDebt(i, "name", e.target.value)}
              placeholder={"Debt " + (i + 1) + " name (optional)"}
              className="mb-3 w-full rounded-lg border border-white/10 bg-brand-card px-3 py-2 text-sm text-white focus:border-brand-accent focus:outline-none"
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                type="number"
                value={debt.balance}
                onChange={(e) => updateDebt(i, "balance", e.target.value)}
                placeholder="Balance"
                className="rounded-lg border border-white/10 bg-brand-card px-3 py-2 text-sm text-white focus:border-brand-accent focus:outline-none"
              />
              <input
                type="number"
                value={debt.apr}
                onChange={(e) => updateDebt(i, "apr", e.target.value)}
                placeholder="APR %"
                className="rounded-lg border border-white/10 bg-brand-card px-3 py-2 text-sm text-white focus:border-brand-accent focus:outline-none"
              />
              <input
                type="number"
                value={debt.minPayment}
                onChange={(e) => updateDebt(i, "minPayment", e.target.value)}
                placeholder="Min Payment"
                className="rounded-lg border border-white/10 bg-brand-card px-3 py-2 text-sm text-white focus:border-brand-accent focus:outline-none"
              />
            </div>
          </div>
        ))}

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Extra Monthly Payment (applied to payoff strategy)
          <input
            type="number"
            value={extraPayment}
            onChange={(e) => setExtraPayment(e.target.value)}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Strategy
          <select
            value={strategy}
            onChange={(e) => setStrategy(e.target.value as PayoffStrategy)}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          >
            <option value="avalanche">Avalanche (highest APR first)</option>
            <option value="snowball">Snowball (smallest balance first)</option>
          </select>
        </label>

        <Button type="button" onClick={handleCalculate} className="w-full sm:w-auto">
          Calculate Payoff Plan
        </Button>
      </div>

      {errorBox}
      {resultBox}
    </div>
  );
}