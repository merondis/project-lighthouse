export type CdCompoundingFrequency = "annually" | "semiannually" | "quarterly" | "monthly" | "daily";

const FREQUENCY_MAP: Record<CdCompoundingFrequency, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

export interface CdResult {
  maturityValue: number;
  totalInterest: number;
}

export function calculateCd(
  principal: number,
  annualRatePercent: number,
  termMonths: number,
  frequency: CdCompoundingFrequency
): CdResult {
  const m = FREQUENCY_MAP[frequency] ?? 12;
  const years = termMonths / 12;
  const rate = annualRatePercent / 100;
  const maturityValue = principal * Math.pow(1 + rate / m, m * years);
  const totalInterest = maturityValue - principal;

  return {
    maturityValue: Number(maturityValue.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
  };
}
