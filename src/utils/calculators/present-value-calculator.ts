export type PvCompoundFrequency = "annually" | "semiannually" | "quarterly" | "monthly" | "daily";

const FREQUENCY_MAP: Record<PvCompoundFrequency, number> = {
  annually: 1,
  semiannually: 2,
  quarterly: 4,
  monthly: 12,
  daily: 365,
};

export interface PresentValueResult {
  presentValue: number;
  totalDiscount: number;
}

// Present value: the amount you'd need to invest today, at the given discount
// rate and compounding frequency, to reach a target future value.
// PV = FV / (1 + r/n)^(n*t)
export function calculatePresentValue(
  futureValue: number,
  annualRatePercent: number,
  years: number,
  frequency: PvCompoundFrequency
): PresentValueResult {
  if ([futureValue, annualRatePercent, years].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (futureValue <= 0 || years <= 0) {
    throw new Error("Future value and time period must be greater than zero.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Discount rate cannot be negative.");
  }

  const n = FREQUENCY_MAP[frequency] ?? 1;
  const r = annualRatePercent / 100;

  const presentValue = futureValue / Math.pow(1 + r / n, n * years);
  const totalDiscount = futureValue - presentValue;

  return {
    presentValue: roundTo(presentValue, 2),
    totalDiscount: roundTo(totalDiscount, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
