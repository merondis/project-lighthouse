export interface InflationResult {
  futureValue: number;
  totalIncrease: number;
  percentIncrease: number;
}

export function calculateInflation(
  amount: number,
  years: number,
  annualRatePercent: number
): InflationResult {
  if ([amount, years, annualRatePercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (amount <= 0 || years <= 0) {
    throw new Error("Amount and number of years must be greater than zero.");
  }
  if (annualRatePercent < 0) {
    throw new Error("Inflation rate cannot be negative.");
  }

  const futureValue = amount * Math.pow(1 + annualRatePercent / 100, years);
  const totalIncrease = futureValue - amount;
  const percentIncrease = (totalIncrease / amount) * 100;

  return {
    futureValue: Math.round(futureValue * 100) / 100,
    totalIncrease: Math.round(totalIncrease * 100) / 100,
    percentIncrease: Math.round(percentIncrease * 100) / 100,
  };
}