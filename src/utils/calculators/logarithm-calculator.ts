export interface LogarithmResult {
  result: number;
}

// Calculates log base b of x using the change-of-base formula:
// log_b(x) = ln(x) / ln(b), which works for any valid base since it's
// expressed in terms of the natural logarithm.
export function calculateLogarithm(value: number, base: number): LogarithmResult {
  if ([value, base].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for value and base.");
  }
  if (value <= 0) {
    throw new Error("Value must be greater than zero.");
  }
  if (base <= 0 || base === 1) {
    throw new Error("Base must be greater than zero and not equal to 1.");
  }

  const result = Math.log(value) / Math.log(base);

  return { result: roundTo(result, 10) };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
