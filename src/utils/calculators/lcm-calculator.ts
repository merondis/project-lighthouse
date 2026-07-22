export interface LcmResult {
  lcm: number;
  gcd: number;
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

function lcmTwo(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcdTwo(a, b);
}

export function calculateLcm(numbersInput: string): LcmResult {
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

  const gcdResult = numbers.reduce((acc, n) => gcdTwo(acc, n));
  const lcmResult = numbers.reduce((acc, n) => lcmTwo(acc, n));

  return {
    lcm: lcmResult,
    gcd: gcdResult,
    count: numbers.length,
  };
}
