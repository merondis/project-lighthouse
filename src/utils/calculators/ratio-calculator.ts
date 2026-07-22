export interface RatioResult {
  simplifiedRatio: string;
  decimalValue: number;
  percentage: number;
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
}

function decimalPlaces(n: number): number {
  const s = n.toString();
  return s.includes(".") ? s.split(".")[1].length : 0;
}

export function calculateRatio(a: number, b: number): RatioResult {
  if ([a, b].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for both values.");
  }
  if (a <= 0 || b <= 0) {
    throw new Error("Both values must be greater than zero.");
  }

  const decimals = Math.max(decimalPlaces(a), decimalPlaces(b));
  const scale = Math.pow(10, decimals);
  const intA = Math.round(a * scale);
  const intB = Math.round(b * scale);
  const divisor = gcd(intA, intB) || 1;

  return {
    simplifiedRatio: `${intA / divisor}:${intB / divisor}`,
    decimalValue: roundTo(a / b, 4),
    percentage: roundTo((a / b) * 100, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
