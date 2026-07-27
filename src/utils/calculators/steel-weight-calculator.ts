export type SteelShape = "flatBar" | "roundBar" | "squareBar" | "pipe";

export interface SteelWeightResult {
  volumeCuIn: number;
  weightLbs: number;
  weightKg: number;
}

// Standard density of steel, commonly cited as 0.2836 lb per cubic inch
// (equivalent to about 490 lb per cubic foot, or 7850 kg per cubic meter).
const STEEL_DENSITY_LBS_PER_CU_IN = 0.2836;
const LBS_TO_KG = 0.453592;

// Calculates the volume and weight of a steel piece from its shape and
// dimensions (all in inches): a flat bar/plate, round bar, square bar, or
// pipe/tube (using outer diameter and wall thickness).
export function calculateSteelWeight(
  shape: SteelShape,
  dimensionA: number,
  dimensionB: number,
  lengthIn: number
): SteelWeightResult {
  if ([dimensionA, lengthIn].some((v) => Number.isNaN(v)) || dimensionA <= 0 || lengthIn <= 0) {
    throw new Error("Please enter valid, positive numbers for the shape dimensions and length.");
  }

  let volumeCuIn: number;

  if (shape === "flatBar") {
    if (Number.isNaN(dimensionB) || dimensionB <= 0) {
      throw new Error("Please enter a valid thickness greater than zero.");
    }
    volumeCuIn = dimensionA * dimensionB * lengthIn;
  } else if (shape === "roundBar") {
    const radius = dimensionA / 2;
    volumeCuIn = Math.PI * radius * radius * lengthIn;
  } else if (shape === "squareBar") {
    volumeCuIn = dimensionA * dimensionA * lengthIn;
  } else {
    if (Number.isNaN(dimensionB) || dimensionB <= 0) {
      throw new Error("Please enter a valid wall thickness greater than zero.");
    }
    if (dimensionB * 2 >= dimensionA) {
      throw new Error("Wall thickness is too large for the given outer diameter.");
    }
    const outerRadius = dimensionA / 2;
    const innerRadius = outerRadius - dimensionB;
    volumeCuIn = Math.PI * (outerRadius * outerRadius - innerRadius * innerRadius) * lengthIn;
  }

  const weightLbs = volumeCuIn * STEEL_DENSITY_LBS_PER_CU_IN;
  const weightKg = weightLbs * LBS_TO_KG;

  return {
    volumeCuIn: roundTo(volumeCuIn, 3),
    weightLbs: roundTo(weightLbs, 2),
    weightKg: roundTo(weightKg, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
