export type AnnuityTiming = "ordinary" | "due";

export interface AnnuityResult {
  futureValue: number;
  totalContributions: number;
  totalGrowth: number;
}

export function calculateAnnuity(
  periodicPayment: number,
  annualRatePercent: number,
  years: number,
  paymentsPerYear: number,
  timing: AnnuityTiming
): AnnuityResult {
  const n = years * paymentsPerYear;
  const r = annualRatePercent / 100 / paymentsPerYear;

  let futureValue: number;
  if (r === 0) {
    futureValue = periodicPayment * n;
  } else {
    futureValue = periodicPayment * ((Math.pow(1 + r, n) - 1) / r);
    if (timing === "due") futureValue *= 1 + r;
  }

  const totalContributions = periodicPayment * n;
  const totalGrowth = futureValue - totalContributions;

  return {
    futureValue: Number(futureValue.toFixed(2)),
    totalContributions: Number(totalContributions.toFixed(2)),
    totalGrowth: Number(totalGrowth.toFixed(2)),
  };
}
