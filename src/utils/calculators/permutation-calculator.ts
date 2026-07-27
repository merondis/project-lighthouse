export interface PermutationResult {
  result: number;
}

// nPr = n! / (n − r)!, the number of ways to arrange r items chosen from a
// set of n, where order matters. Computed as a running product rather than
// full factorials, so it stays accurate for larger values of n than a naive
// factorial-based implementation would allow.
export function calculatePermutation(n: number, r: number): PermutationResult {
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

  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= n - i;
  }

  if (!Number.isFinite(result)) {
    throw new Error("The result is too large to compute precisely. Try smaller values.");
  }

  return { result };
}
