export interface ProfitMarginResult {
  netProfit: number;
  profitMarginPercent: number;
}

export function calculateProfitMargin(revenue: number, totalExpenses: number): ProfitMarginResult {
  const netProfit = revenue - totalExpenses;
  const profitMarginPercent = revenue !== 0 ? (netProfit / revenue) * 100 : 0;
  return {
    netProfit: Number(netProfit.toFixed(2)),
    profitMarginPercent: Number(profitMarginPercent.toFixed(2)),
  };
}
