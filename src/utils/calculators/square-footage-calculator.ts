export type ShapeType = "rectangle" | "circle" | "triangle";

export interface SquareFootageResult {
  areaSqFt: number;
  areaSqYards: number;
  areaSqMeters: number;
}

export function calculateSquareFootage(
  shape: ShapeType,
  dimensionA: number,
  dimensionB: number
): SquareFootageResult {
  if (Number.isNaN(dimensionA)) {
    throw new Error("Please enter a valid number for the first dimension.");
  }
  if (dimensionA <= 0) {
    throw new Error("The first dimension must be greater than zero.");
  }

  let areaSqFt: number;

  if (shape === "circle") {
    const radius = dimensionA / 2;
    areaSqFt = Math.PI * radius * radius;
  } else {
    if (Number.isNaN(dimensionB) || dimensionB <= 0) {
      throw new Error("Please enter a valid second dimension greater than zero.");
    }
    areaSqFt = shape === "triangle" ? 0.5 * dimensionA * dimensionB : dimensionA * dimensionB;
  }

  return {
    areaSqFt: roundTo(areaSqFt, 2),
    areaSqYards: roundTo(areaSqFt / 9, 3),
    areaSqMeters: roundTo(areaSqFt * 0.092903, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
