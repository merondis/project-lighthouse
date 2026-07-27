export interface CombinationResult {
  result: number;
}

// nCr = n! / (r! x (n − r)!), the number of ways to choose r items from a
// set of n where order doesn't matter. Computed via the multiplicative
// formula (alternating multiply and divide) rather than full factorials,
// so it stays accurate and avoids unnecessary overflow for larger n.
export function calculateCombination(n: number, r: number): CombinationResult {
  if ([n, r].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for n and r.");
  }
  if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0) {
    throw new Error("n and r must be non-negative whole numbers.");
  }
  if (r > n) {
    throw new Error("r cannot be greater than n.");
  }
  if (n > 1000) {
    throw new Error("Please enter a value of n no greater than 1000.");
  }

  const rEffective = Math.min(r, n - r);
  let result = 1;
  for (let i = 0; i < rEffective; i++) {
    result = (result * (n - i)) / (i + 1);
  }

  result = Math.round(result);

  if (!Number.isFinite(result)) {
    throw new Error("The result is too large to compute precisely. Try smaller values.");
  }

  return { result };
}
