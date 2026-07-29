export interface ConfidenceIntervalResult {
  marginOfError: number;
  lowerBound: number;
  upperBound: number;
}

const Z_SCORES: Record<string, number> = {
  "90": 1.645,
  "95": 1.96,
  "99": 2.576,
};

export function calculateConfidenceInterval(
  sampleMean: number,
  stdDev: number,
  sampleSize: number,
  confidenceLevel: string
): ConfidenceIntervalResult {
  if (![sampleMean, stdDev, sampleSize].every((v) => Number.isFinite(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (stdDev <= 0) {
    throw new Error("Standard deviation must be greater than zero.");
  }
  if (sampleSize <= 0) {
    throw new Error("Sample size must be greater than zero.");
  }

  const zScore = Z_SCORES[confidenceLevel];
  if (!zScore) {
    throw new Error("Please choose a valid confidence level.");
  }

  const marginOfError = zScore * (stdDev / Math.sqrt(sampleSize));

  return {
    marginOfError: Math.round(marginOfError * 10000) / 10000,
    lowerBound: Math.round((sampleMean - marginOfError) * 10000) / 10000,
    upperBound: Math.round((sampleMean + marginOfError) * 10000) / 10000,
  };
}
