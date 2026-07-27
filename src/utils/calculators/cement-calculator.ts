export interface CementResult {
  wetVolumeCuFt: number;
  dryVolumeCuFt: number;
  cementBags: number;
  sandCuFt: number;
  aggregateCuFt: number;
}

// Dry materials (cement, sand, aggregate) take up more volume loose than
// they do once mixed and compacted into wet concrete or mortar, due to the
// voids between particles. 1.54 is a standard, widely cited bulking factor
// used to convert a target wet (finished) volume into the total dry
// material volume needed before mixing.
const DRY_VOLUME_FACTOR = 1.54;

// A standard 94 lb bag of Portland cement yields approximately 1 cubic
// foot of loose cement material, a commonly cited figure from cement
// manufacturers.
const CUBIC_FEET_PER_CEMENT_BAG = 1;

// Unlike our Concrete Calculator, which estimates bags of pre-mixed
// concrete by weight yield, this calculator works from a raw mix ratio
// (cement : sand : aggregate, like 1:2:4), the approach used when mixing
// concrete or mortar from separate raw materials rather than a pre-mixed bag.
export function calculateCement(
  lengthFt: number,
  widthFt: number,
  thicknessIn: number,
  cementParts: number,
  sandParts: number,
  aggregateParts: number
): CementResult {
  if (
    [lengthFt, widthFt, thicknessIn, cementParts, sandParts, aggregateParts].some((v) => Number.isNaN(v))
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (lengthFt <= 0 || widthFt <= 0 || thicknessIn <= 0) {
    throw new Error("Length, width and thickness must be greater than zero.");
  }
  if (cementParts <= 0 || sandParts <= 0 || aggregateParts <= 0) {
    throw new Error("Mix ratio parts must all be greater than zero.");
  }

  const wetVolumeCuFt = lengthFt * widthFt * (thicknessIn / 12);
  const dryVolumeCuFt = wetVolumeCuFt * DRY_VOLUME_FACTOR;

  const totalParts = cementParts + sandParts + aggregateParts;
  const cementCuFt = dryVolumeCuFt * (cementParts / totalParts);
  const sandCuFt = dryVolumeCuFt * (sandParts / totalParts);
  const aggregateCuFt = dryVolumeCuFt * (aggregateParts / totalParts);

  const cementBags = Math.ceil(cementCuFt / CUBIC_FEET_PER_CEMENT_BAG);

  return {
    wetVolumeCuFt: roundTo(wetVolumeCuFt, 2),
    dryVolumeCuFt: roundTo(dryVolumeCuFt, 2),
    cementBags,
    sandCuFt: roundTo(sandCuFt, 2),
    aggregateCuFt: roundTo(aggregateCuFt, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
