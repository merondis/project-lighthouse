export interface GcfResult {
  gcf: number;
  count: number;
}

function gcdTwo(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}

// Finds the Greatest Common Factor (GCF), also called the Greatest Common
// Divisor (GCD), the largest whole number that divides every number in the
// list with no remainder, using the Euclidean algorithm.
export function calculateGcf(numbersInput: string): GcfResult {
  const numbers = numbersInput
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map(Number);

  if (numbers.length === 0 || numbers.some((n) => Number.isNaN(n))) {
    throw new Error("Please enter a valid list of numbers separated by commas or spaces.");
  }
  if (numbers.length < 2) {
    throw new Error("Please enter at least two numbers.");
  }
  if (numbers.some((n) => !Number.isInteger(n) || n <= 0)) {
    throw new Error("Please enter positive whole numbers only.");
  }

  const gcf = numbers.reduce((acc, n) => gcdTwo(acc, n));

  return {
    gcf,
    count: numbers.length,
  };
}
