export interface RentalPropertyResult {
  monthlyCashFlow: number;
  annualCashFlow: number;
  capRatePercent: number;
  cashOnCashReturnPercent: number | string;
}

export function calculateRentalProperty(
  purchasePrice: number,
  downPayment: number,
  monthlyRent: number,
  monthlyOperatingExpenses: number,
  monthlyMortgagePayment: number
): RentalPropertyResult {
  const monthlyNoi = monthlyRent - monthlyOperatingExpenses;
  const annualNoi = monthlyNoi * 12;
  const monthlyCashFlow = monthlyNoi - monthlyMortgagePayment;
  const annualCashFlow = monthlyCashFlow * 12;
  const capRatePercent = purchasePrice !== 0 ? (annualNoi / purchasePrice) * 100 : 0;
  const cashOnCashReturnPercent = downPayment !== 0 ? Number(((annualCashFlow / downPayment) * 100).toFixed(2)) : "N/A";

  return {
    monthlyCashFlow: Number(monthlyCashFlow.toFixed(2)),
    annualCashFlow: Number(annualCashFlow.toFixed(2)),
    capRatePercent: Number(capRatePercent.toFixed(2)),
    cashOnCashReturnPercent,
  };
}
