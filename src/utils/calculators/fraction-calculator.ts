export type FractionOperation = "add" | "subtract" | "multiply" | "divide";

export interface FractionResult {
  result: string;
  decimal: number;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function simplify(numerator: number, denominator: number): [number, number] {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero.");
  }
  const sign = denominator < 0 ? -1 : 1;
  numerator *= sign;
  denominator *= sign;
  const divisor = gcd(Math.abs(numerator), denominator) || 1;
  return [numerator / divisor, denominator / divisor];
}

export function calculateFraction(
  num1: number,
  den1: number,
  num2: number,
  den2: number,
  operation: FractionOperation
): FractionResult {
  if ([num1, den1, num2, den2].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid whole numbers for both fractions.");
  }
  if (den1 === 0 || den2 === 0) {
    throw new Error("Denominators cannot be zero.");
  }

  let resultNum: number;
  let resultDen: number;

  switch (operation) {
    case "add":
      resultNum = num1 * den2 + num2 * den1;
      resultDen = den1 * den2;
      break;
    case "subtract":
      resultNum = num1 * den2 - num2 * den1;
      resultDen = den1 * den2;
      break;
    case "multiply":
      resultNum = num1 * num2;
      resultDen = den1 * den2;
      break;
    case "divide":
      if (num2 === 0) throw new Error("Cannot divide by a fraction with a zero numerator.");
      resultNum = num1 * den2;
      resultDen = den1 * num2;
      break;
    default:
      throw new Error("Unknown operation.");
  }

  const [simplifiedNum, simplifiedDen] = simplify(resultNum, resultDen);

  return {
    result: simplifiedNum + "/" + simplifiedDen,
    decimal: Math.round((simplifiedNum / simplifiedDen) * 10000) / 10000,
  };
}