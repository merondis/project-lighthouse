export interface MeanMedianModeResult {
  mean: number;
  median: number;
  mode: string;
  range: number;
  count: number;
}

export function calculateMeanMedianMode(numbersInput: string): MeanMedianModeResult {
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
  const mean = numbers.reduce((sum, n) => sum + n, 0) / count;

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

  const range = sorted[count - 1] - sorted[0];

  return {
    mean: roundTo(mean, 4),
    median: roundTo(median, 4),
    mode,
    range: roundTo(range, 4),
    count,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
