export type GravelShape = "rectangle" | "circle" | "triangle";
export type GravelType = "crushedStone" | "peaGravel" | "riverRock" | "decomposedGranite";

export interface GravelVolumeResult {
  areaSqFt: number;
  cubicFeet: number;
  cubicYards: number;
  tonsNeeded: number;
}

// Approximate tons per cubic yard for common gravel/aggregate types,
// commonly cited by landscaping suppliers. Actual density varies by
// moisture content and how tightly the material is compacted.
const DENSITY_TONS_PER_CUBIC_YARD: Record<GravelType, number> = {
  crushedStone: 1.4,
  peaGravel: 1.3,
  riverRock: 1.325,
  decomposedGranite: 1.4,
};

// Unlike our original Gravel Calculator (rectangular areas and a single
// fixed density only), this version supports circular and triangular beds
// too, and lets you choose from several common gravel material types, each
// with its own typical density, useful for round fire pits, triangular
// corner beds, or comparing material weight across gravel types.
export function calculateGravelVolume(
  shape: GravelShape,
  dimensionA: number,
  dimensionB: number,
  depthIn: number,
  gravelType: GravelType
): GravelVolumeResult {
  if (Number.isNaN(dimensionA) || dimensionA <= 0) {
    throw new Error("Please enter a valid first dimension greater than zero.");
  }
  if (Number.isNaN(depthIn) || depthIn <= 0) {
    throw new Error("Please enter a valid depth greater than zero.");
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

  const cubicFeet = areaSqFt * (depthIn / 12);
  const cubicYards = cubicFeet / 27;
  const density = DENSITY_TONS_PER_CUBIC_YARD[gravelType] ?? DENSITY_TONS_PER_CUBIC_YARD.crushedStone;
  const tonsNeeded = cubicYards * density;

  return {
    areaSqFt: roundTo(areaSqFt, 2),
    cubicFeet: roundTo(cubicFeet, 2),
    cubicYards: roundTo(cubicYards, 3),
    tonsNeeded: roundTo(tonsNeeded, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
