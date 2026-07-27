export type SoilBagSize = "0.75" | "1.5" | "2";

export interface SoilResult {
  cubicFeet: number;
  cubicYards: number;
  bagsNeeded: number;
}

// Focused on bagged garden/potting soil for smaller beds and containers,
// sold in common bag sizes like 0.75, 1.5 or 2 cubic feet. For larger
// areas needing bulk delivery, see our Topsoil Calculator instead, which
// works in cubic yards and delivered tons rather than bag counts.
export function calculateSoil(
  lengthFt: number,
  widthFt: number,
  depthIn: number,
  bagSize: SoilBagSize
): SoilResult {
  if ([lengthFt, widthFt, depthIn].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for length, width and depth.");
  }
  if (lengthFt <= 0 || widthFt <= 0 || depthIn <= 0) {
    throw new Error("Length, width and depth must be greater than zero.");
  }

  const cubicFeet = lengthFt * widthFt * (depthIn / 12);
  const cubicYards = cubicFeet / 27;

  const bagSizeCuFt = Number(bagSize);
  const bagsNeeded = Math.ceil(cubicFeet / bagSizeCuFt);

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
