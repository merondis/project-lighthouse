export interface ExponentResult {
  result: number;
}

// Calculates base^exponent, supporting negative exponents (reciprocal of a
// positive power) and fractional exponents (roots, e.g. base^0.5 is the
// square root of base). Negative bases with fractional exponents are only
// meaningful for exponents with an odd integer denominator, in the real
// number system, most other cases produce a non-real result, which
// JavaScript's Math.pow reports as NaN.
export function calculateExponent(base: number, exponent: number): ExponentResult {
  if ([base, exponent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for base and exponent.");
  }
  if (base === 0 && exponent < 0) {
    throw new Error("Zero cannot be raised to a negative exponent.");
  }

  const result = Math.pow(base, exponent);

  if (Number.isNaN(result)) {
    throw new Error("This combination has no real number result (for example, a negative base with a non-integer exponent).");
  }
  if (!Number.isFinite(result)) {
    throw new Error("The result is too large to compute precisely. Try smaller values.");
  }

  return { result: roundTo(result, 10) };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
