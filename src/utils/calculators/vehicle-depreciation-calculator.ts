export interface VehicleDepreciationResult {
  valueAfter1Year: number;
  valueAfter5Years: number;
  valueAtProjectedYears: number;
  totalDepreciationAmount: number;
  totalDepreciationPercent: number;
}

// Projects a vehicle's value decline using a two-stage declining-balance
// model: a (typically larger) first-year depreciation rate, followed by a
// steady annual rate for every year after. This matches the commonly cited
// real-world pattern of new cars losing a bigger chunk of value in year one
// than in later years.
export function calculateVehicleDepreciation(
  purchasePrice: number,
  firstYearDepreciationPercent: number,
  annualDepreciationPercent: number,
  yearsToProject: number
): VehicleDepreciationResult {
  if (
    [purchasePrice, firstYearDepreciationPercent, annualDepreciationPercent, yearsToProject].some((v) => Number.isNaN(v))
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (purchasePrice <= 0) {
    throw new Error("Purchase price must be greater than zero.");
  }
  if (firstYearDepreciationPercent < 0 || firstYearDepreciationPercent > 100) {
    throw new Error("First-year depreciation rate must be between 0 and 100.");
  }
  if (annualDepreciationPercent < 0 || annualDepreciationPercent > 100) {
    throw new Error("Annual depreciation rate must be between 0 and 100.");
  }
  if (!Number.isInteger(yearsToProject) || yearsToProject < 1 || yearsToProject > 30) {
    throw new Error("Years to project must be a whole number between 1 and 30.");
  }

  const valueAtYear = (year: number): number => {
    if (year <= 0) return purchasePrice;
    let value = purchasePrice * (1 - firstYearDepreciationPercent / 100);
    for (let y = 2; y <= year; y++) {
      value *= 1 - annualDepreciationPercent / 100;
    }
    return value;
  };

  const valueAfter1Year = valueAtYear(1);
  const valueAfter5Years = valueAtYear(5);
  const valueAtProjectedYears = valueAtYear(yearsToProject);
  const totalDepreciationAmount = purchasePrice - valueAtProjectedYears;
  const totalDepreciationPercent = (totalDepreciationAmount / purchasePrice) * 100;

  return {
    valueAfter1Year: roundTo(valueAfter1Year, 2),
    valueAfter5Years: roundTo(valueAfter5Years, 2),
    valueAtProjectedYears: roundTo(valueAtProjectedYears, 2),
    totalDepreciationAmount: roundTo(totalDepreciationAmount, 2),
    totalDepreciationPercent: roundTo(totalDepreciationPercent, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
