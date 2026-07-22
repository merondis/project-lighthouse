// Typical density for compacted gravel/crushed stone, commonly cited by aggregate suppliers.
const GRAVEL_TONS_PER_CUBIC_YARD = 1.4;

export interface GravelResult {
  cubicFeet: number;
  cubicYards: number;
  tonsNeeded: number;
}

export function calculateGravel(lengthFt: number, widthFt: number, depthIn: number): GravelResult {
  if ([lengthFt, widthFt, depthIn].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for length, width and depth.");
  }
  if (lengthFt <= 0 || widthFt <= 0 || depthIn <= 0) {
    throw new Error("Length, width and depth must be greater than zero.");
  }

  const cubicFeet = lengthFt * widthFt * (depthIn / 12);
  const cubicYards = cubicFeet / 27;
  const tonsNeeded = cubicYards * GRAVEL_TONS_PER_CUBIC_YARD;

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
