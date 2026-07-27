export type ArmyBfGender = "male" | "female";

export interface ArmyBodyFatResult {
  bodyFatPercent: number;
  maxAllowedPercent: number;
  meetsStandard: boolean;
}

function toInches(cm: number) {
  return cm * 0.393701;
}

// Age brackets and maximum allowable body fat percentages under the U.S.
// Army's body composition standard (AR 600-9). These are commonly cited
// figures; always confirm against the current official regulation for any
// official use.
function maxAllowedPercent(gender: ArmyBfGender, age: number): number {
  if (gender === "male") {
    if (age <= 20) return 20;
    if (age <= 27) return 22;
    if (age <= 39) return 24;
    return 26;
  }
  if (age <= 20) return 30;
  if (age <= 27) return 32;
  if (age <= 39) return 34;
  return 36;
}

// Uses the Hodgdon-Beckett circumference-based formula developed for and
// used by the U.S. military tape test, mathematically distinct from the
// Navy/Siri-based formula used by our general Body Fat Calculator (a
// reciprocal log-based formula), this one is a direct linear combination of
// log10 circumference terms, in inches.
export function calculateArmyBodyFat(
  gender: ArmyBfGender,
  age: number,
  heightCm: number,
  neckCm: number,
  waistCm: number,
  hipCm: number
): ArmyBodyFatResult {
  if ([age, heightCm, neckCm, waistCm].some((v) => Number.isNaN(v) || v <= 0)) {
    throw new Error("Please enter valid values for age, height, neck and waist.");
  }
  if (gender === "female" && (Number.isNaN(hipCm) || hipCm <= 0)) {
    throw new Error("Please enter a valid hip measurement.");
  }

  const height = toInches(heightCm);
  const neck = toInches(neckCm);
  const waist = toInches(waistCm);
  const hip = toInches(hipCm);

  let percent: number;

  if (gender === "male") {
    if (waist <= neck) {
      throw new Error("Waist measurement must be greater than neck measurement.");
    }
    percent = 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
  } else {
    if (waist + hip <= neck) {
      throw new Error("Waist plus hip measurement must be greater than neck measurement.");
    }
    percent = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
  }

  const maxAllowed = maxAllowedPercent(gender, age);

  return {
    bodyFatPercent: roundTo(percent, 1),
    maxAllowedPercent: maxAllowed,
    meetsStandard: percent <= maxAllowed,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
