export type LbmGender = "male" | "female";

export interface LeanBodyMassResult {
  leanBodyMass: number;
  fatMass: number;
  leanMassPercent: number;
}

// Uses the Boer formula, one of the most widely cited equations for
// estimating lean body mass (everything in your body that isn't fat:
// muscle, bone, organs and water) from just height and weight, without
// requiring body fat percentage as an input.
export function calculateLeanBodyMass(
  gender: LbmGender,
  heightCm: number,
  weightKg: number
): LeanBodyMassResult {
  if ([heightCm, weightKg].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for height and weight.");
  }
  if (heightCm <= 0 || weightKg <= 0) {
    throw new Error("Height and weight must be greater than zero.");
  }

  const leanBodyMass =
    gender === "male"
      ? 0.407 * weightKg + 0.267 * heightCm - 19.2
      : 0.252 * weightKg + 0.473 * heightCm - 48.3;

  const fatMass = weightKg - leanBodyMass;
  const leanMassPercent = (leanBodyMass / weightKg) * 100;

  return {
    leanBodyMass: roundTo(leanBodyMass, 1),
    fatMass: roundTo(fatMass, 1),
    leanMassPercent: roundTo(leanMassPercent, 1),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
