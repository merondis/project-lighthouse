export interface StandardDeviationResult {
  mean: number;
  standardDeviation: number;
  variance: number;
  count: number;
}

export function calculateStandardDeviation(numbersInput: string): StandardDeviationResult {
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

  const count = numbers.length;
  const mean = numbers.reduce((sum, n) => sum + n, 0) / count;
  const squaredDiffs = numbers.map((n) => Math.pow(n - mean, 2));
  const variance = squaredDiffs.reduce((sum, n) => sum + n, 0) / count;
  const standardDeviation = Math.sqrt(variance);

  return {
    mean: Math.round(mean * 10000) / 10000,
    standardDeviation: Math.round(standardDeviation * 10000) / 10000,
    variance: Math.round(variance * 10000) / 10000,
    count,
  };
}