export type BigNumberOperation = "add" | "subtract" | "multiply" | "divide" | "power";

export interface BigNumberResult {
  result: string;
  remainder?: string;
}

const INTEGER_PATTERN = /^-?\d+$/;
const MAX_DIGITS = 2000;
const MAX_EXPONENT = 1000;

function parseBigInt(value: string, label: string): bigint {
  const trimmed = value.trim();
  if (!INTEGER_PATTERN.test(trimmed)) {
    throw new Error(`Please enter a valid whole number for ${label} (no decimals).`);
  }
  if (trimmed.replace("-", "").length > MAX_DIGITS) {
    throw new Error(`${label} is too large. Please enter a number with ${MAX_DIGITS} digits or fewer.`);
  }
  return BigInt(trimmed);
}

export function calculateBigNumber(aInput: string, operation: BigNumberOperation, bInput: string): BigNumberResult {
  const a = parseBigInt(aInput, "the first number");

  if (operation === "power") {
    const exponent = Number(bInput.trim());
    if (!Number.isFinite(exponent) || !Number.isInteger(exponent) || exponent < 0) {
      throw new Error("Please enter a non-negative whole number exponent.");
    }
    if (exponent > MAX_EXPONENT) {
      throw new Error(`Please enter an exponent of ${MAX_EXPONENT} or fewer.`);
    }
    let result = BigInt(1);
    const exp = BigInt(exponent);
    for (let i = BigInt(0); i < exp; i += BigInt(1)) {
      result = result * a;
      if (result.toString().replace("-", "").length > MAX_DIGITS) {
        throw new Error(`The result exceeds ${MAX_DIGITS} digits. Please use smaller inputs.`);
      }
    }
    return { result: result.toString() };
  }

  const b = parseBigInt(bInput, "the second number");

  switch (operation) {
    case "add":
      return { result: (a + b).toString() };
    case "subtract":
      return { result: (a - b).toString() };
    case "multiply": {
      const product = a * b;
      if (product.toString().replace("-", "").length > MAX_DIGITS) {
        throw new Error(`The result exceeds ${MAX_DIGITS} digits. Please use smaller inputs.`);
      }
      return { result: product.toString() };
    }
    case "divide": {
      if (b === BigInt(0)) {
        throw new Error("Cannot divide by zero.");
      }
      const quotient = a / b;
      const remainder = a % b;
      return { result: quotient.toString(), remainder: remainder.toString() };
    }
    default:
      throw new Error("Please choose a valid operation.");
  }
}
