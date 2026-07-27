export type ApyCompoundFrequency = "annually" | "semiannually" | "quarterly" | "monthly" | "daily";

const FREQUENCY_MAP: Record<ApyCompoundFrequency, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

export interface ApyResult {
  apyPercent: number;
  firstYearInterest: number;
}

// APY (Annual Percentage Yield) reflects the true effective annual return once
// compounding is taken into account: APY = (1 + r/n)^n - 1, where r is the
// nominal annual interest rate (APR) and n is the number of times it compounds
// per year. APY is always greater than or equal to the nominal rate whenever
// compounding happens more than once a year.
export function calculateApy(
  nominalRatePercent: number,
  frequency: ApyCompoundFrequency,
  depositAmount: number
): ApyResult {
  if ([nominalRatePercent, depositAmount].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (nominalRatePercent < 0) {
    throw new Error("Nominal interest rate cannot be negative.");
  }
  if (depositAmount < 0) {
    throw new Error("Deposit amount cannot be negative.");
  }

  const n = FREQUENCY_MAP[frequency] ?? 1;
  const r = nominalRatePercent / 100;

  const apy = Math.pow(1 + r / n, n) - 1;
  const firstYearInterest = depositAmount * apy;

  return {
    apyPercent: roundTo(apy * 100, 4),
    firstYearInterest: roundTo(firstYearInterest, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
