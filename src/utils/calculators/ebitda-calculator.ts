export interface EbitdaResult {
  ebitda: number;
  ebitdaMarginPercent: number | string;
}

export function calculateEbitda(
  netIncome: number,
  interestExpense: number,
  taxExpense: number,
  depreciation: number,
  amortization: number,
  revenue: number
): EbitdaResult {
  const ebitda = netIncome + interestExpense + taxExpense + depreciation + amortization;
  const ebitdaMarginPercent = revenue > 0 ? Number(((ebitda / revenue) * 100).toFixed(2)) : "N/A";
  return {
    ebitda: Number(ebitda.toFixed(2)),
    ebitdaMarginPercent,
  };
}
