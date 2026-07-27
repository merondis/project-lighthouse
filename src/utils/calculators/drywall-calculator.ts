export interface DrywallResult {
  sheetsNeeded: number;
  jointCompoundBuckets: number;
  tapeRolls: number;
}

// Rough, commonly cited coverage estimates for finishing supplies.
const SQFT_PER_JOINT_COMPOUND_BUCKET = 500; // ~4.5 gallon (~61 lb) pre-mixed bucket
const SQFT_PER_TAPE_ROLL = 350; // ~250 ft roll of joint tape

export function calculateDrywall(
  totalAreaSqFt: number,
  sheetWidthFt: number,
  sheetLengthFt: number,
  wastePercent: number
): DrywallResult {
  if ([totalAreaSqFt, sheetWidthFt, sheetLengthFt, wastePercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (totalAreaSqFt <= 0 || sheetWidthFt <= 0 || sheetLengthFt <= 0) {
    throw new Error("Area and sheet dimensions must be greater than zero.");
  }
  if (wastePercent < 0) {
    throw new Error("Waste percentage cannot be negative.");
  }

  const sheetAreaSqFt = sheetWidthFt * sheetLengthFt;
  const areaWithWaste = totalAreaSqFt * (1 + wastePercent / 100);
  const sheetsNeeded = Math.ceil(areaWithWaste / sheetAreaSqFt);

  const jointCompoundBuckets = Math.ceil(totalAreaSqFt / SQFT_PER_JOINT_COMPOUND_BUCKET);
  const tapeRolls = Math.ceil(totalAreaSqFt / SQFT_PER_TAPE_ROLL);

  return {
    sheetsNeeded,
    jointCompoundBuckets,
    tapeRolls,
  };
}
