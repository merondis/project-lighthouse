export type ScientificNotationMode = "toScientific" | "toDecimal";

export interface ScientificNotationResult {
  decimalValue: number;
  coefficient: number;
  exponent: number;
  scientificNotationText: string;
}

// Converts between standard decimal notation and scientific notation
// (a x 10^b, where 1 <= |a| < 10), in either direction: enter a decimal
// number to see it in scientific notation, or enter a coefficient and
// exponent to see the expanded decimal value.
export function calculateScientificNotation(
  mode: ScientificNotationMode,
  decimalInput: number,
  coefficientInput: number,
  exponentInput: number
): ScientificNotationResult {
  if (mode === "toScientific") {
    if (Number.isNaN(decimalInput)) {
      throw new Error("Please enter a valid number.");
    }
    if (decimalInput === 0) {
      return { decimalValue: 0, coefficient: 0, exponent: 0, scientificNotationText: "0 × 10^0" };
    }

    const exponent = Math.floor(Math.log10(Math.abs(decimalInput)));
    const coefficient = decimalInput / Math.pow(10, exponent);
    const roundedCoefficient = roundTo(coefficient, 6);

    return {
      decimalValue: decimalInput,
      coefficient: roundedCoefficient,
      exponent,
      scientificNotationText: `${roundedCoefficient} × 10^${exponent}`,
    };
  }

  if ([coefficientInput, exponentInput].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for coefficient and exponent.");
  }

  const decimalValue = coefficientInput * Math.pow(10, exponentInput);

  if (!Number.isFinite(decimalValue)) {
    throw new Error("The result is too large to compute precisely. Try a smaller exponent.");
  }

  return {
    decimalValue: roundTo(decimalValue, 10),
    coefficient: coefficientInput,
    exponent: exponentInput,
    scientificNotationText: `${coefficientInput} × 10^${exponentInput}`,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
