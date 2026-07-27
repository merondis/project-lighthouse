export interface AsphaltResult {
  cubicFeet: number;
  cubicYards: number;
  tonsNeeded: number;
}

// Typical density of compacted hot mix asphalt, commonly cited by paving suppliers.
const ASPHALT_LBS_PER_CUBIC_FOOT = 145;

export function calculateAsphalt(lengthFt: number, widthFt: number, thicknessIn: number): AsphaltResult {
  if ([lengthFt, widthFt, thicknessIn].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for length, width and thickness.");
  }
  if (lengthFt <= 0 || widthFt <= 0 || thicknessIn <= 0) {
    throw new Error("Length, width and thickness must be greater than zero.");
  }

  const cubicFeet = lengthFt * widthFt * (thicknessIn / 12);
  const cubicYards = cubicFeet / 27;
  const tonsNeeded = (cubicFeet * ASPHALT_LBS_PER_CUBIC_FOOT) / 2000;

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
