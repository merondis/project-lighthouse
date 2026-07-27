export interface MulchResult {
  cubicFeet: number;
  cubicYards: number;
  bagsNeeded: number;
}

// Standard bagged mulch is commonly sold in 2 cubic foot bags.
const CUBIC_FEET_PER_BAG = 2;

export function calculateMulch(lengthFt: number, widthFt: number, depthIn: number): MulchResult {
  if ([lengthFt, widthFt, depthIn].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for length, width and depth.");
  }
  if (lengthFt <= 0 || widthFt <= 0 || depthIn <= 0) {
    throw new Error("Length, width and depth must be greater than zero.");
  }

  const cubicFeet = lengthFt * widthFt * (depthIn / 12);
  const cubicYards = cubicFeet / 27;
  const bagsNeeded = Math.ceil(cubicFeet / CUBIC_FEET_PER_BAG);

  return {
    cubicFeet: roundTo(cubicFeet, 2),
    cubicYards: roundTo(cubicYards, 3),
    bagsNeeded,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
