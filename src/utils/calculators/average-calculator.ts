export interface AverageResult {
  average: number;
  sum: number;
  count: number;
}

// A focused, single-purpose average (arithmetic mean) calculator: sum of
// all values divided by how many there are. Our Mean, Median & Mode
// Calculator and Statistics Calculator both include this same figure as
// part of a broader set of results, this tool is for when all you want is
// the average itself, quickly.
export function calculateAverage(numbersInput: string): AverageResult {
  const numbers = numbersInput
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map(Number);

  if (numbers.length === 0 || numbers.some((n) => Number.isNaN(n))) {
    throw new Error("Please enter a valid list of numbers separated by commas or spaces.");
  }

  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const average = sum / numbers.length;

  return {
    average: roundTo(average, 4),
    sum: roundTo(sum, 4),
    count: numbers.length,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
