export interface ProbabilityResult {
  probabilityA: string;
  probabilityB: string;
  probabilityBothAnd: string;
  probabilityEitherOr: string;
}

export function calculateProbability(
  favorableA: number,
  totalA: number,
  favorableB: number,
  totalB: number
): ProbabilityResult {
  if ([favorableA, totalA].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for event A's favorable and total outcomes.");
  }
  if (totalA <= 0) {
    throw new Error("Total outcomes for event A must be greater than zero.");
  }
  if (favorableA < 0 || favorableA > totalA) {
    throw new Error("Favorable outcomes for event A cannot be negative or exceed the total outcomes.");
  }

  const pA = favorableA / totalA;
  const hasEventB = !Number.isNaN(favorableB) && !Number.isNaN(totalB) && totalB > 0;

  let pB = 0;
  if (hasEventB) {
    if (favorableB < 0 || favorableB > totalB) {
      throw new Error("Favorable outcomes for event B cannot be negative or exceed the total outcomes.");
    }
    pB = favorableB / totalB;
  }

  const pBothAnd = hasEventB ? pA * pB : pA;
  const pEitherOr = hasEventB ? pA + pB - pA * pB : pA;

  return {
    probabilityA: formatProbability(pA),
    probabilityB: hasEventB ? formatProbability(pB) : "N/A",
    probabilityBothAnd: hasEventB ? formatProbability(pBothAnd) : "N/A",
    probabilityEitherOr: hasEventB ? formatProbability(pEitherOr) : "N/A",
  };
}

function formatProbability(p: number): string {
  return `${(p * 100).toFixed(2)}% (${roundTo(p, 4)})`;
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
