export interface PrimeFactorizationResult {
  factorsList: string;
  exponentForm: string;
  factorCount: number;
}

const MAX_INPUT = 100_000_000;

function primeFactorize(n: number): number[] {
  const factors: number[] = [];
  let num = n;
  let divisor = 2;
  while (num > 1) {
    while (num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
    }
    divisor += divisor === 2 ? 1 : 2;
    if (divisor * divisor > num && num > 1) {
      factors.push(num);
      break;
    }
  }
  return factors;
}

// Breaks a number down into the prime numbers that multiply together to
// produce it, shown both as a plain multiplication list and in compact
// exponent form (e.g. 2^3 x 3 x 5), the standard way factorizations are
// written when a prime repeats.
export function calculatePrimeFactorization(input: number): PrimeFactorizationResult {
  if (Number.isNaN(input)) {
    throw new Error("Please enter a valid number.");
  }
  if (!Number.isInteger(input) || input < 2) {
    throw new Error("Please enter a whole number greater than 1.");
  }
  if (input > MAX_INPUT) {
    throw new Error(`Please enter a number smaller than ${MAX_INPUT.toLocaleString()}.`);
  }

  const factors = primeFactorize(input);

  const counts = new Map<number, number>();
  factors.forEach((f) => counts.set(f, (counts.get(f) ?? 0) + 1));

  const exponentForm = Array.from(counts.entries())
    .map(([prime, exp]) => (exp > 1 ? `${prime}^${exp}` : `${prime}`))
    .join(" × ");

  return {
    factorsList: factors.join(" × "),
    exponentForm,
    factorCount: factors.length,
  };
}
