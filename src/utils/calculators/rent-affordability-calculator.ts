export interface RentAffordabilityResult {
  recommendedMaxRent: number;
  debtAdjustedMaxRent: number;
}

export function calculateRentAffordability(
  monthlyIncome: number,
  monthlyDebts: number,
  rentToIncomeRatioPercent: number
): RentAffordabilityResult {
  const recommendedMaxRent = monthlyIncome * (rentToIncomeRatioPercent / 100);
  const debtAdjustedMaxRent = Math.max(0, monthlyIncome * 0.4 - monthlyDebts);
  return {
    recommendedMaxRent: Number(recommendedMaxRent.toFixed(2)),
    debtAdjustedMaxRent: Number(debtAdjustedMaxRent.toFixed(2)),
  };
}
