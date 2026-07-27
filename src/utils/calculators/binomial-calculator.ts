export interface BinomialResult {
  exactProbabilityPercent: number;
  cumulativeProbabilityPercent: number;
  meanSuccesses: number;
  standardDeviation: number;
}

function combination(n: number, r: number): number {
  const rEffective = Math.min(r, n - r);
  let result = 1;
  for (let i = 0; i < rEffective; i++) {
    result = (result * (n - i)) / (i + 1);
  }
  return result;
}

function binomialPmf(n: number, p: number, k: number): number {
  return combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

// Binomial probability: for n independent trials each with success
// probability p, calculates the probability of exactly k successes,
// P(X=k) = C(n,k) x p^k x (1-p)^(n-k), plus the cumulative probability of
// k or fewer successes, P(X<=k), the sum of P(X=i) for i from 0 to k.
export function calculateBinomial(n: number, probabilityPercent: number, k: number): BinomialResult {
  if ([n, probabilityPercent, k].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (!Number.isInteger(n) || n <= 0 || n > 1000) {
    throw new Error("Number of trials must be a whole number between 1 and 1000.");
  }
  if (!Number.isInteger(k) || k < 0 || k > n) {
    throw new Error("Number of successes must be a whole number between 0 and the number of trials.");
  }
  if (probabilityPercent < 0 || probabilityPercent > 100) {
    throw new Error("Probability of success must be between 0 and 100.");
  }

  const p = probabilityPercent / 100;

  const exactProbability = binomialPmf(n, p, k);

  let cumulativeProbability = 0;
  for (let i = 0; i <= k; i++) {
    cumulativeProbability += binomialPmf(n, p, i);
  }

  const meanSuccesses = n * p;
  const standardDeviation = Math.sqrt(n * p * (1 - p));

  return {
    exactProbabilityPercent: roundTo(exactProbability * 100, 4),
    cumulativeProbabilityPercent: roundTo(cumulativeProbability * 100, 4),
    meanSuccesses: roundTo(meanSuccesses, 2),
    standardDeviation: roundTo(standardDeviation, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
