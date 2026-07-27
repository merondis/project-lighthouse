export interface PercentErrorResult {
  percentError: number;
  absoluteError: number;
}

// Percent error compares a measured (experimental) value against a known or
// accepted value, always relative to the accepted value specifically:
// Percent Error = |Measured − Accepted| ÷ |Accepted| × 100. This is distinct
// from a general percentage change between two arbitrary numbers, it's
// specifically framed around measurement accuracy against a known standard.
export function calculatePercentError(measuredValue: number, acceptedValue: number): PercentErrorResult {
  if ([measuredValue, acceptedValue].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for both values.");
  }
  if (acceptedValue === 0) {
    throw new Error("Accepted value cannot be zero (division by zero).");
  }

  const absoluteError = Math.abs(measuredValue - acceptedValue);
  const percentError = (absoluteError / Math.abs(acceptedValue)) * 100;

  return {
    percentError: roundTo(percentError, 4),
    absoluteError: roundTo(absoluteError, 6),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
