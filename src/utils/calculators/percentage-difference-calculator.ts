export interface PercentageDifferenceResult {
  percentageDifference: number;
  absoluteDifference: number;
}

// Percentage difference compares two values symmetrically, with neither
// treated as a "before" or "reference" value: Percentage Difference =
// |A − B| ÷ ((A + B) ÷ 2) × 100, using the average of both values as the
// denominator. This differs from percentage change (which divides by the
// starting value specifically, and is directional) and from percent error
// (which divides by a known "accepted" value specifically), this is for
// comparing two peer values where neither is more authoritative than the
// other.
export function calculatePercentageDifference(valueA: number, valueB: number): PercentageDifferenceResult {
  if ([valueA, valueB].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for both values.");
  }
  if (valueA === 0 && valueB === 0) {
    throw new Error("Both values cannot be zero.");
  }
  if (valueA < 0 || valueB < 0) {
    throw new Error("Percentage difference is typically defined for non-negative values.");
  }

  const absoluteDifference = Math.abs(valueA - valueB);
  const average = (valueA + valueB) / 2;
  const percentageDifference = (absoluteDifference / average) * 100;

  return {
    percentageDifference: roundTo(percentageDifference, 4),
    absoluteDifference: roundTo(absoluteDifference, 6),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
