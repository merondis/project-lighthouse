export type RebarSize = "3" | "4" | "5" | "6" | "7" | "8";

export interface RebarResult {
  barsLengthwise: number;
  barsWidthwise: number;
  totalLinearFeet: number;
  barsNeeded: number;
  totalWeightLbs: number;
}

// Standard weight per linear foot for common US rebar sizes (ASTM A615),
// bar number roughly corresponds to the bar's diameter in eighths of an inch.
const WEIGHT_LBS_PER_FT: Record<RebarSize, number> = {
  "3": 0.376,
  "4": 0.668,
  "5": 1.043,
  "6": 1.502,
  "7": 2.044,
  "8": 2.67,
};

// Estimates rebar needed for a two-way reinforcement grid across a
// rectangular slab, spaced evenly in both directions, a standard layout
// for slab-on-grade reinforcement.
export function calculateRebar(
  slabLengthFt: number,
  slabWidthFt: number,
  spacingIn: number,
  barSize: RebarSize,
  stockBarLengthFt: number
): RebarResult {
  if ([slabLengthFt, slabWidthFt, spacingIn, stockBarLengthFt].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (slabLengthFt <= 0 || slabWidthFt <= 0 || spacingIn <= 0 || stockBarLengthFt <= 0) {
    throw new Error("All dimensions must be greater than zero.");
  }

  const spacingFt = spacingIn / 12;

  // Bars running the length of the slab, spaced out across its width.
  const barsLengthwise = Math.floor(slabWidthFt / spacingFt) + 1;
  // Bars running the width of the slab, spaced out across its length.
  const barsWidthwise = Math.floor(slabLengthFt / spacingFt) + 1;

  const totalLinearFeet = barsLengthwise * slabLengthFt + barsWidthwise * slabWidthFt;
  const barsNeeded = Math.ceil(totalLinearFeet / stockBarLengthFt);

  const weightPerFt = WEIGHT_LBS_PER_FT[barSize] ?? WEIGHT_LBS_PER_FT["4"];
  const totalWeightLbs = totalLinearFeet * weightPerFt;

  return {
    barsLengthwise,
    barsWidthwise,
    totalLinearFeet: roundTo(totalLinearFeet, 1),
    barsNeeded,
    totalWeightLbs: roundTo(totalWeightLbs, 1),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
