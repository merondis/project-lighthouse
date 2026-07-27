export interface CagrResult {
  cagrPercent: number;
  totalGrowthPercent: number;
  endingValueMultiple: number;
}

// CAGR = (Ending Value / Beginning Value)^(1/years) - 1
// Represents the constant annual growth rate that would take the beginning
// value to the ending value over the given number of years, smoothing out
// any year-to-year volatility in between.
export function calculateCagr(
  beginningValue: number,
  endingValue: number,
  years: number
): CagrResult {
  if ([beginningValue, endingValue, years].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (beginningValue <= 0 || endingValue <= 0) {
    throw new Error("Beginning and ending values must be greater than zero.");
  }
  if (years <= 0) {
    throw new Error("Number of years must be greater than zero.");
  }

  const cagr = Math.pow(endingValue / beginningValue, 1 / years) - 1;
  const totalGrowthPercent = ((endingValue - beginningValue) / beginningValue) * 100;
  const endingValueMultiple = endingValue / beginningValue;

  return {
    cagrPercent: roundTo(cagr * 100, 2),
    totalGrowthPercent: roundTo(totalGrowthPercent, 2),
    endingValueMultiple: roundTo(endingValueMultiple, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
