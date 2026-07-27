export type FvCompoundFrequency = "annually" | "semiannually" | "quarterly" | "monthly" | "daily";

const FREQUENCY_MAP: Record<FvCompoundFrequency, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

export interface FutureValueResult {
  futureValue: number;
  totalContributions: number;
  totalInterest: number;
}

// Future value of a present sum plus a series of periodic (monthly) contributions,
// compounded at the given frequency: FV = PV(1+r/n)^(n*t) + contribution annuity
// grown at the same periodic rate as the contributions are made (monthly).
export function calculateFutureValue(
  presentValue: number,
  annualRatePercent: number,
  years: number,
  frequency: FvCompoundFrequency,
  monthlyContribution: number
): FutureValueResult {
  if ([presentValue, annualRatePercent, years, monthlyContribution].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (presentValue < 0 || monthlyContribution < 0) {
    throw new Error("Present value and monthly contribution cannot be negative.");
  }
  if (years <= 0) {
    throw new Error("Time period must be greater than zero.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Interest rate cannot be negative.");
  }

  const n = FREQUENCY_MAP[frequency] ?? 1;
  const r = annualRatePercent / 100;

  const fvOfPresentValue = presentValue * Math.pow(1 + r / n, n * years);

  const months = Math.round(years * 12);
  const monthlyRate = r / 12;
  const fvOfContributions =
    monthlyContribution === 0
      ? 0
      : monthlyRate === 0
      ? monthlyContribution * months
      : monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const futureValue = fvOfPresentValue + fvOfContributions;
  const totalContributions = presentValue + monthlyContribution * months;
  const totalInterest = futureValue - totalContributions;

  return {
    futureValue: roundTo(futureValue, 2),
    totalContributions: roundTo(totalContributions, 2),
    totalInterest: roundTo(totalInterest, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
