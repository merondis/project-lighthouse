"use client";

import { useEffect, useMemo, useState } from "react";
import { CURRENCIES } from "@/data/currencies";

export function CurrencyConverterWidget() {
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isStale, setIsStale] = useState(false);

  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  useEffect(() => {
    async function loadRates() {
      setIsLoading(true);
      setLoadError(null);

      try {
        const res = await fetch("/api/exchange-rates");
        const data = await res.json();

        if (!res.ok || data.error) {
          throw new Error(data.error || "Failed to load exchange rates.");
        }

        setRates(data.rates);
        setIsStale(Boolean(data.stale));
      } catch (err) {
        setLoadError(
          err instanceof Error ? err.message : "Unable to load exchange rates right now."
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadRates();
  }, []);

  const result = useMemo(() => {
    if (!rates) return null;

    const numericAmount = Number(amount);
    if (Number.isNaN(numericAmount)) return null;

    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    if (!fromRate || !toRate) return null;

    // rates are relative to USD, so convert via USD as the base
    const inUsd = numericAmount / fromRate;
    const converted = inUsd * toRate;

    return Math.round(converted * 1_000_000) / 1_000_000;
  }, [rates, amount, fromCurrency, toCurrency]);

  function handleSwap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      {isLoading && (
        <p className="text-sm text-brand-secondary">Loading live exchange rates...</p>
      )}

      {loadError && !isLoading && (
        <p className="text-sm font-medium text-red-400">{loadError}</p>
      )}

      {!isLoading && !loadError && rates && (
        <>
          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-2 text-sm font-medium text-white">
              Amount
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter an amount"
                className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
              />
            </label>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
              <label className="flex flex-col gap-2 text-sm font-medium text-white">
                From
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
                >
                  {CURRENCIES.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} — {currency.name}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="button"
                onClick={handleSwap}
                aria-label="Swap currencies"
                className="mb-0.5 flex h-11 w-11 items-center justify-center self-center rounded-lg border border-white/10 bg-brand-bg text-white hover:border-brand-accent sm:mb-0"
              >
                ⇄
              </button>

              <label className="flex flex-col gap-2 text-sm font-medium text-white">
                To
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
                >
                  {CURRENCIES.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} — {currency.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {result !== null && (
            <div className="mt-8 rounded-lg bg-brand-bg p-6 text-center">
              <p className="text-xs uppercase tracking-wide text-brand-secondary">Result</p>
              <p className="mt-2 break-words text-3xl font-bold text-brand-accent">
                {result} {toCurrency}
              </p>
            </div>
          )}

          {isStale && (
            <p className="mt-4 text-xs text-brand-secondary">
              Showing recently cached rates. Live rates may differ slightly.
            </p>
          )}

          <p className="mt-6 text-xs text-brand-secondary">
            Exchange rates are updated periodically and are for informational purposes only, not
            financial advice.
          </p>
        </>
      )}
    </div>
  );
}