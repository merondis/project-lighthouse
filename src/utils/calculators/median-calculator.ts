export interface MedianResult {
  median: number;
  count: number;
  sortedList: string;
}

// A focused, single-purpose median calculator: the middle value of a
// sorted data set (or the average of the two middle values, for an even
// count). Our Mean, Median & Mode Calculator and Statistics Calculator both
// include this same figure as part of a broader set of results, this tool
// is for when all you want is the median itself, quickly.
export function calculateMedian(numbersInput: string): MedianResult {
  const numbers = numbersInput
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map(Number);

  if (numbers.length === 0 || numbers.some((n) => Number.isNaN(n))) {
    throw new Error("Please enter a valid list of numbers separated by commas or spaces.");
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];

  return {
    median: roundTo(median, 4),
    count: numbers.length,
    sortedList: sorted.join(", "),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
