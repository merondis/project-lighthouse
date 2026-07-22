export type ConcreteBagSize = "40" | "60" | "80";

// Cubic feet of mixed concrete yielded per pound of dry mix (standard yield used by
// major premix brands: a 40 lb bag yields 0.30 cu ft, 60 lb yields 0.45 cu ft, 80 lb yields 0.60 cu ft).
const BAG_YIELD_CU_FT_PER_LB = 0.0075;

export interface ConcreteResult {
  cubicFeet: number;
  cubicYards: number;
  bagsNeeded: number;
}

export function calculateConcrete(
  lengthFt: number,
  widthFt: number,
  thicknessIn: number,
  bagSize: ConcreteBagSize
): ConcreteResult {
  if ([lengthFt, widthFt, thicknessIn].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for length, width and thickness.");
  }
  if (lengthFt <= 0 || widthFt <= 0 || thicknessIn <= 0) {
    throw new Error("Length, width and thickness must be greater than zero.");
  }

  const cubicFeet = lengthFt * widthFt * (thicknessIn / 12);
  const cubicYards = cubicFeet / 27;

  const bagWeight = Number(bagSize);
  const yieldPerBag = bagWeight * BAG_YIELD_CU_FT_PER_LB;
  const bagsNeeded = Math.ceil(cubicFeet / yieldPerBag);

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
