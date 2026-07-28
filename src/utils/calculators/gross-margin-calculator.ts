export interface GrossMarginResult {
  grossProfit: number;
  grossMarginPercent: number;
}

export function calculateGrossMargin(revenue: number, cogs: number): GrossMarginResult {
  const grossProfit = revenue - cogs;
  const grossMarginPercent = revenue !== 0 ? (grossProfit / revenue) * 100 : 0;
  return {
    grossProfit: Number(grossProfit.toFixed(2)),
    grossMarginPercent: Number(grossMarginPercent.toFixed(2)),
  };
}
