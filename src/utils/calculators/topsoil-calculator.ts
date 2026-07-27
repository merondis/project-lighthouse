export interface TopsoilResult {
  cubicFeet: number;
  cubicYards: number;
  tonsNeeded: number;
}

// Typical density of loose topsoil, commonly cited by bulk landscaping suppliers.
const TOPSOIL_TONS_PER_CUBIC_YARD = 1.1;

// Focused on bulk topsoil delivery for larger areas like new lawns or
// grading, measured in cubic yards and delivered tons, the units bulk
// suppliers typically quote in. For smaller garden beds or containers,
// see our Soil Calculator instead, which works in bag counts.
export function calculateTopsoil(lengthFt: number, widthFt: number, depthIn: number): TopsoilResult {
  if ([lengthFt, widthFt, depthIn].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for length, width and depth.");
  }
  if (lengthFt <= 0 || widthFt <= 0 || depthIn <= 0) {
    throw new Error("Length, width and depth must be greater than zero.");
  }

  const cubicFeet = lengthFt * widthFt * (depthIn / 12);
  const cubicYards = cubicFeet / 27;
  const tonsNeeded = cubicYards * TOPSOIL_TONS_PER_CUBIC_YARD;

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
