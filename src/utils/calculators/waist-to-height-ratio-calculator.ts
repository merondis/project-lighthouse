export interface WaistToHeightRatioResult {
  ratio: number;
  category: string;
}

// Waist-to-height ratio is often summarized as "keep your waist to less
// than half your height", a simpler rule of thumb than BMI that some
// research suggests is a better indicator of cardiovascular and metabolic
// risk, since it directly captures abdominal fat rather than overall body
// weight, and works reasonably consistently across different heights.
export function calculateWaistToHeightRatio(
  waistCm: number,
  heightCm: number
): WaistToHeightRatioResult {
  if ([waistCm, heightCm].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for waist and height.");
  }
  if (waistCm <= 0 || heightCm <= 0) {
    throw new Error("Waist and height must be greater than zero.");
  }

  const ratio = waistCm / heightCm;

  let category: string;
  if (ratio < 0.4) {
    category = "Underweight / Take Care";
  } else if (ratio < 0.5) {
    category = "Healthy";
  } else if (ratio < 0.6) {
    category = "Overweight / Increased Risk";
  } else {
    category = "Obese / High Risk";
  }

  return {
    ratio: roundTo(ratio, 2),
    category,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
