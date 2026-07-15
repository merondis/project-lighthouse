export type CompoundFrequency = "annually" | "semiannually" | "quarterly" | "monthly" | "daily";

const FREQUENCY_MAP: Record<CompoundFrequency, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

export interface CompoundInterestResult {
  finalAmount: number;
  totalInterest: number;
}

export function calculateCompoundInterest(
  principal: number,
  annualRatePercent: number,
  years: number,
  frequency: CompoundFrequency
): CompoundInterestResult {
  if ([principal, annualRatePercent, years].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (principal <= 0 || years <= 0) {
    throw new Error("Principal and time period must be greater than zero.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Interest rate cannot be negative.");
  }

  const n = FREQUENCY_MAP[frequency] ?? 1;
  const r = annualRatePercent / 100;

  const finalAmount = principal * Math.pow(1 + r / n, n * years);
  const totalInterest = finalAmount - principal;

  return {
    finalAmount: roundTo(finalAmount, 2),
    totalInterest: roundTo(totalInterest, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}