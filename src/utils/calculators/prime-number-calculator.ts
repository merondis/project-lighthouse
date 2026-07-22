export interface PrimeResult {
  isPrime: string;
  primeFactors: string;
  nextPrime: number;
  previousPrime: number | string;
}

const MAX_INPUT = 100_000_000;

function isPrimeNumber(n: number): boolean {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

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

function findNextPrime(n: number): number {
  let candidate = n + 1;
  while (!isPrimeNumber(candidate)) {
    candidate += 1;
  }
  return candidate;
}

function findPreviousPrime(n: number): number | null {
  let candidate = n - 1;
  while (candidate >= 2) {
    if (isPrimeNumber(candidate)) return candidate;
    candidate -= 1;
  }
  return null;
}

export function calculatePrime(input: number): PrimeResult {
  if (Number.isNaN(input)) {
    throw new Error("Please enter a valid number.");
  }
  if (!Number.isInteger(input) || input < 1) {
    throw new Error("Please enter a positive whole number.");
  }
  if (input > MAX_INPUT) {
    throw new Error(`Please enter a number smaller than ${MAX_INPUT.toLocaleString()}.`);
  }

  const prime = isPrimeNumber(input);
  const factors = input === 1 ? [] : primeFactorize(input);
  const previous = findPreviousPrime(input);

  return {
    isPrime: prime ? "Yes" : "No",
    primeFactors: input === 1 ? "1 has no prime factors" : factors.join(" × "),
    nextPrime: findNextPrime(input),
    previousPrime: previous === null ? "None" : previous,
  };
}
