export interface StatisticsResult {
  count: number;
  sum: number;
  mean: number;
  median: number;
  mode: string;
  min: number;
  max: number;
  range: number;
  variance: number;
  standardDeviation: number;
  sampleVariance: number;
  sampleStandardDeviation: number;
  q1: number;
  q3: number;
  iqr: number;
}

function percentile(sorted: number[], p: number): number {
  if (sorted.length === 1) return sorted[0];
  const index = (p / 100) * (sorted.length - 1);
  const lower = Math.floor(index);
  const upper = Math.ceil(index);
  if (lower === upper) return sorted[lower];
  const fraction = index - lower;
  return sorted[lower] + (sorted[upper] - sorted[lower]) * fraction;
}

export function calculateStatistics(numbersInput: string): StatisticsResult {
  const numbers = numbersInput
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map(Number);

  if (numbers.length === 0 || numbers.some((n) => Number.isNaN(n))) {
    throw new Error("Please enter a valid list of numbers separated by commas or spaces.");
  }

  const count = numbers.length;
  const sorted = [...numbers].sort((a, b) => a - b);
  const sum = numbers.reduce((s, n) => s + n, 0);
  const mean = sum / count;

  const mid = Math.floor(count / 2);
  const median = count % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];

  const frequency = new Map<number, number>();
  numbers.forEach((n) => frequency.set(n, (frequency.get(n) ?? 0) + 1));
  const maxFrequency = Math.max(...frequency.values());
  let mode: string;
  if (maxFrequency === 1) {
    mode = "No mode (all values unique)";
  } else {
    mode = [...frequency.entries()]
      .filter(([, freq]) => freq === maxFrequency)
      .map(([value]) => value)
      .sort((a, b) => a - b)
      .join(", ");
  }

  const min = sorted[0];
  const max = sorted[count - 1];
  const range = max - min;

  const squaredDiffs = numbers.map((n) => Math.pow(n - mean, 2));
  const variance = squaredDiffs.reduce((s, n) => s + n, 0) / count;
  const standardDeviation = Math.sqrt(variance);

  const sampleVariance = count > 1 ? squaredDiffs.reduce((s, n) => s + n, 0) / (count - 1) : 0;
  const sampleStandardDeviation = Math.sqrt(sampleVariance);

  const q1 = percentile(sorted, 25);
  const q3 = percentile(sorted, 75);
  const iqr = q3 - q1;

  return {
    count,
    sum: roundTo(sum, 4),
    mean: roundTo(mean, 4),
    median: roundTo(median, 4),
    mode,
    min: roundTo(min, 4),
    max: roundTo(max, 4),
    range: roundTo(range, 4),
    variance: roundTo(variance, 4),
    standardDeviation: roundTo(standardDeviation, 4),
    sampleVariance: roundTo(sampleVariance, 4),
    sampleStandardDeviation: roundTo(sampleStandardDeviation, 4),
    q1: roundTo(q1, 4),
    q3: roundTo(q3, 4),
    iqr: roundTo(iqr, 4),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
