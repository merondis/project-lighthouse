export interface ZScoreResult {
  zScore: number;
  percentile: number;
}

// Abramowitz and Stegun approximation of the standard normal CDF.
function standardNormalCdf(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  let prob =
    d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (z > 0) prob = 1 - prob;
  return prob;
}

export function calculateZScore(value: number, mean: number, stdDev: number): ZScoreResult {
  if (![value, mean, stdDev].every((v) => Number.isFinite(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (stdDev <= 0) {
    throw new Error("Standard deviation must be greater than zero.");
  }

  const zScore = (value - mean) / stdDev;
  const percentile = standardNormalCdf(zScore) * 100;

  return {
    zScore: Math.round(zScore * 10000) / 10000,
    percentile: Math.round(percentile * 100) / 100,
  };
}
