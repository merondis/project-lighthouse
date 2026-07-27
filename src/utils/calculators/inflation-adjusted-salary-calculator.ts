export interface InflationAdjustedSalaryResult {
  inflationAdjustedOldSalary: number;
  nominalChangePercent: string;
  realChangePercent: string;
  purchasingPowerChangePercent: number;
}

// Compares an old salary to what it would need to be today just to keep pace
// with inflation, and, if a new (current) salary is provided, splits the
// change into its nominal and real (inflation-adjusted) components, the
// clearest way to see whether a raise actually increased purchasing power
// or merely kept up with (or lagged behind) rising prices.
export function calculateInflationAdjustedSalary(
  oldSalary: number,
  newSalary: number,
  years: number,
  annualInflationRatePercent: number
): InflationAdjustedSalaryResult {
  if ([oldSalary, newSalary, years, annualInflationRatePercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (oldSalary <= 0) {
    throw new Error("Old salary must be greater than zero.");
  }
  if (newSalary < 0) {
    throw new Error("New salary cannot be negative.");
  }
  if (years <= 0) {
    throw new Error("Number of years must be greater than zero.");
  }
  if (annualInflationRatePercent < 0) {
    throw new Error("Inflation rate cannot be negative.");
  }

  const inflationAdjustedOldSalary = oldSalary * Math.pow(1 + annualInflationRatePercent / 100, years);
  const purchasingPowerChangePercent = ((inflationAdjustedOldSalary - oldSalary) / oldSalary) * 100;

  const hasNewSalary = newSalary > 0;
  const nominalChangePercent = hasNewSalary ? ((newSalary - oldSalary) / oldSalary) * 100 : 0;
  const realChangePercent = hasNewSalary
    ? ((newSalary - inflationAdjustedOldSalary) / inflationAdjustedOldSalary) * 100
    : 0;

  return {
    inflationAdjustedOldSalary: roundTo(inflationAdjustedOldSalary, 2),
    nominalChangePercent: hasNewSalary ? roundTo(nominalChangePercent, 2) + "%" : "N/A (enter a new salary to compare)",
    realChangePercent: hasNewSalary ? roundTo(realChangePercent, 2) + "%" : "N/A (enter a new salary to compare)",
    purchasingPowerChangePercent: roundTo(purchasingPowerChangePercent, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
