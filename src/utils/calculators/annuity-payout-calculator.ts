export interface AnnuityPayoutResult {
  periodicPayout: number;
  totalPayout: number;
  totalInterestEarned: number;
}

export function calculateAnnuityPayout(
  lumpSum: number,
  annualRatePercent: number,
  payoutYears: number,
  paymentsPerYear: number
): AnnuityPayoutResult {
  const n = payoutYears * paymentsPerYear;
  const r = annualRatePercent / 100 / paymentsPerYear;

  const periodicPayout = r === 0 ? lumpSum / n : (lumpSum * r) / (1 - Math.pow(1 + r, -n));
  const totalPayout = periodicPayout * n;
  const totalInterestEarned = totalPayout - lumpSum;

  return {
    periodicPayout: Number(periodicPayout.toFixed(2)),
    totalPayout: Number(totalPayout.toFixed(2)),
    totalInterestEarned: Number(totalInterestEarned.toFixed(2)),
  };
}
