export type PercentageMode = "percentOf" | "isWhatPercent" | "percentageChange";

export interface PercentageResult {
  result: number;
  explanation: string;
}

export function calculatePercentage(
  mode: PercentageMode,
  valueA: number,
  valueB: number
): PercentageResult {
  if (Number.isNaN(valueA) || Number.isNaN(valueB)) {
    throw new Error("Please enter valid numbers in both fields.");
  }

  switch (mode) {
    case "percentOf": {
      // valueA% of valueB
      const result = (valueA / 100) * valueB;
      return {
        result: roundTo(result, 4),
        explanation: `${valueA}% of ${valueB} is ${roundTo(result, 4)}`,
      };
    }
    case "isWhatPercent": {
      // valueA is what % of valueB
      if (valueB === 0) throw new Error("The second value cannot be zero.");
      const result = (valueA / valueB) * 100;
      return {
        result: roundTo(result, 4),
        explanation: `${valueA} is ${roundTo(result, 4)}% of ${valueB}`,
      };
    }
    case "percentageChange": {
      // percentage change from valueA to valueB
      if (valueA === 0) throw new Error("The starting value cannot be zero.");
      const result = ((valueB - valueA) / Math.abs(valueA)) * 100;
      return {
        result: roundTo(result, 4),
        explanation: `Change from ${valueA} to ${valueB} is ${roundTo(result, 4)}%`,
      };
    }
    default:
      throw new Error("Unknown calculation type.");
  }
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}