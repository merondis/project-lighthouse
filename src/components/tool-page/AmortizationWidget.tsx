"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import {
  generateAmortizationSchedule,
  AmortizationScheduleResult,
} from "@/utils/calculators/amortization-schedule";

interface AmortizationWidgetProps {
  tenureUnit: "months" | "years";
}

export function AmortizationWidget({ tenureUnit }: AmortizationWidgetProps) {
  const [principal, setPrincipal] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [tenureValue, setTenureValue] = useState("");
  const [showMonthly, setShowMonthly] = useState(false);
  const [result, setResult] = useState<AmortizationScheduleResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setShowMonthly(false);

    try {
      const principalNum = Number(principal);
      const rateNum = Number(annualRate);
      const tenureNum = Number(tenureValue);
      const tenureMonths = tenureUnit === "years" ? Math.round(tenureNum * 12) : tenureNum;

      const output = generateAmortizationSchedule(principalNum, rateNum, tenureMonths);
      setResult(output);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please check your inputs.");
    }
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Loan Amount
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="e.g. 250000"
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Annual Interest Rate (%)
          <input
            type="number"
            step="0.01"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            placeholder="e.g. 7.5"
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          {tenureUnit === "years" ? "Tenure (Years)" : "Tenure (Months)"}
          <input
            type="number"
            value={tenureValue}
            onChange={(e) => setTenureValue(e.target.value)}
            placeholder={tenureUnit === "years" ? "e.g. 15" : "e.g. 60"}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <Button type="submit" className="mt-2 w-full sm:w-auto">
          Calculate
        </Button>
      </form>

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}

      {result && !error && (
        <>
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-3">
            <div className="rounded-lg bg-brand-bg p-4 text-center">
              <p className="text-xs uppercase tracking-wide text-brand-secondary">Monthly Payment</p>
              <p className="mt-1 text-2xl font-bold text-brand-accent">{result.monthlyPayment}</p>
            </div>
            <div className="rounded-lg bg-brand-bg p-4 text-center">
              <p className="text-xs uppercase tracking-wide text-brand-secondary">Total Interest</p>
              <p className="mt-1 text-2xl font-bold text-white">{result.totalInterest}</p>
            </div>
            <div className="rounded-lg bg-brand-bg p-4 text-center">
              <p className="text-xs uppercase tracking-wide text-brand-secondary">Total Payment</p>
              <p className="mt-1 text-2xl font-bold text-white">{result.totalPayment}</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Amortization Schedule</h3>
              <button
                type="button"
                onClick={() => setShowMonthly((v) => !v)}
                className="rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-brand-accent hover:border-brand-accent"
              >
                {showMonthly ? "Show Yearly" : "Show Monthly"}
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto rounded-lg border border-white/5">
              <table className="w-full text-left text-sm">
                <thead className="sticky top-0 bg-brand-bg text-xs uppercase text-brand-secondary">
                  <tr>
                    <th className="px-4 py-3">{showMonthly ? "Month" : "Year"}</th>
                    <th className="px-4 py-3">Principal Paid</th>
                    <th className="px-4 py-3">Interest Paid</th>
                    <th className="px-4 py-3">Ending Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {showMonthly
                    ? result.monthly.map((row) => (
                        <tr key={row.period} className="border-t border-white/5">
                          <td className="px-4 py-2 text-white">{row.period}</td>
                          <td className="px-4 py-2 text-brand-secondary">{row.principalPaid}</td>
                          <td className="px-4 py-2 text-brand-secondary">{row.interestPaid}</td>
                          <td className="px-4 py-2 text-brand-secondary">{row.balance}</td>
                        </tr>
                      ))
                    : result.yearly.map((row) => (
                        <tr key={row.year} className="border-t border-white/5">
                          <td className="px-4 py-2 text-white">{row.year}</td>
                          <td className="px-4 py-2 text-brand-secondary">{row.principalPaid}</td>
                          <td className="px-4 py-2 text-brand-secondary">{row.interestPaid}</td>
                          <td className="px-4 py-2 text-brand-secondary">{row.endingBalance}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}