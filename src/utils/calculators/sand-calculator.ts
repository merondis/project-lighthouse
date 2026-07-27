export interface SandResult {
  cubicFeet: number;
  cubicYards: number;
  tonsNeeded: number;
}

// Typical density of dry sand, commonly cited by landscaping and building material suppliers.
const SAND_TONS_PER_CUBIC_YARD = 1.35;

export function calculateSand(lengthFt: number, widthFt: number, depthIn: number): SandResult {
  if ([lengthFt, widthFt, depthIn].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for length, width and depth.");
  }
  if (lengthFt <= 0 || widthFt <= 0 || depthIn <= 0) {
    throw new Error("Length, width and depth must be greater than zero.");
  }

  const cubicFeet = lengthFt * widthFt * (depthIn / 12);
  const cubicYards = cubicFeet / 27;
  const tonsNeeded = cubicYards * SAND_TONS_PER_CUBIC_YARD;

  return {
    cubicFeet: roundTo(cubicFeet, 2),
    cubicYards: roundTo(cubicYards, 3),
    tonsNeeded: roundTo(tonsNeeded, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
