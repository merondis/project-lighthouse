export interface BodyFatResult {
  bodyFatPercent: number;
  category: string;
}

function toInches(cm: number) {
  return cm * 0.393701;
}

function classify(gender: "male" | "female", percent: number): string {
  if (gender === "male") {
    if (percent < 6) return "Essential Fat";
    if (percent < 14) return "Athletic";
    if (percent < 18) return "Fitness";
    if (percent < 25) return "Acceptable";
    return "Obese";
  }
  if (percent < 14) return "Essential Fat";
  if (percent < 21) return "Athletic";
  if (percent < 25) return "Fitness";
  if (percent < 32) return "Acceptable";
  return "Obese";
}

export function calculateBodyFat(
  gender: "male" | "female",
  heightCm: number,
  neckCm: number,
  waistCm: number,
  hipCm: number
): BodyFatResult {
  if ([heightCm, neckCm, waistCm].some((v) => Number.isNaN(v) || v <= 0)) {
    throw new Error("Please enter valid measurements for height, neck and waist.");
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
    percent =
      495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    if (waist + hip <= neck) {
      throw new Error("Waist plus hip measurement must be greater than neck measurement.");
    }
    percent =
      495 /
        (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) -
      450;
  }

  return {
    bodyFatPercent: Math.round(percent * 10) / 10,
    category: classify(gender, percent),
  };
}