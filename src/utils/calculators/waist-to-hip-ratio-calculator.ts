export type WhrGender = "male" | "female";

export interface WaistToHipRatioResult {
  ratio: number;
  riskCategory: string;
}

// Waist-to-hip ratio is a WHO-recognized screening measure for
// cardiovascular and metabolic risk associated with fat distribution
// (specifically abdominal, "apple-shaped" fat carrying more risk than
// hip/thigh, "pear-shaped" fat), independent of overall body weight or BMI.
export function calculateWaistToHipRatio(
  gender: WhrGender,
  waistCm: number,
  hipCm: number
): WaistToHipRatioResult {
  if ([waistCm, hipCm].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for waist and hip measurements.");
  }
  if (waistCm <= 0 || hipCm <= 0) {
    throw new Error("Waist and hip measurements must be greater than zero.");
  }

  const ratio = waistCm / hipCm;

  let riskCategory: string;
  if (gender === "male") {
    riskCategory = ratio < 0.9 ? "Low Risk" : ratio < 1.0 ? "Moderate Risk" : "High Risk";
  } else {
    riskCategory = ratio < 0.8 ? "Low Risk" : ratio < 0.85 ? "Moderate Risk" : "High Risk";
  }

  return {
    ratio: roundTo(ratio, 2),
    riskCategory,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
