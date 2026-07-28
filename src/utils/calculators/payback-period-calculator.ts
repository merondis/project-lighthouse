export interface PaybackPeriodResult {
  paybackPeriodYears: number | string;
}

export function calculatePaybackPeriod(initialInvestment: number, annualCashFlows: number[]): PaybackPeriodResult {
  let cumulative = 0;
  for (let i = 0; i < annualCashFlows.length; i++) {
    const flow = annualCashFlows[i];
    if (flow <= 0) continue;
    const prevCumulative = cumulative;
    cumulative += flow;
    if (cumulative >= initialInvestment) {
      const remaining = initialInvestment - prevCumulative;
      const fraction = flow !== 0 ? remaining / flow : 0;
      return { paybackPeriodYears: Number((i + fraction).toFixed(2)) };
    }
  }
  return { paybackPeriodYears: "Not recovered within entered years" };
}
