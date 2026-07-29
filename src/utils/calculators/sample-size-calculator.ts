export interface SampleSizeResult {
  sampleSize: number;
}

const Z_SCORES: Record<string, number> = {
  "90": 1.645,
  "95": 1.96,
  "99": 2.576,
};

export function calculateSampleSize(
  confidenceLevel: string,
  marginOfErrorPercent: number,
  populationProportionPercent: number,
  populationSize?: number
): SampleSizeResult {
  const zScore = Z_SCORES[confidenceLevel];
  if (!zScore) {
    throw new Error("Please choose a valid confidence level.");
  }
  if (!Number.isFinite(marginOfErrorPercent) || marginOfErrorPercent <= 0 || marginOfErrorPercent >= 100) {
    throw new Error("Please enter a margin of error between 0 and 100%.");
  }
  if (!Number.isFinite(populationProportionPercent) || populationProportionPercent <= 0 || populationProportionPercent >= 100) {
    throw new Error("Please enter a population proportion between 0 and 100%.");
  }

  const e = marginOfErrorPercent / 100;
  const p = populationProportionPercent / 100;

  const baseSampleSize = (zScore * zScore * p * (1 - p)) / (e * e);

  let sampleSize = baseSampleSize;
  if (populationSize && Number.isFinite(populationSize) && populationSize > 0) {
    sampleSize = baseSampleSize / (1 + (baseSampleSize - 1) / populationSize);
  }

  return { sampleSize: Math.ceil(sampleSize) };
}
