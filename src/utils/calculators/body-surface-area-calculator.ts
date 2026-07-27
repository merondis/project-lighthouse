export interface BodySurfaceAreaResult {
  bsaMosteller: number;
  bsaDuBois: number;
}

// Body Surface Area is used mostly in clinical settings, for example to
// dose certain medications (especially chemotherapy) proportionally to body
// size rather than weight alone. This calculator shows two widely used
// formulas: Mosteller (simpler, very close to DuBois in practice, commonly
// the default in clinical calculators) and DuBois & DuBois (the original
// 1916 formula, still widely referenced).
export function calculateBodySurfaceArea(
  heightCm: number,
  weightKg: number
): BodySurfaceAreaResult {
  if ([heightCm, weightKg].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for height and weight.");
  }
  if (heightCm <= 0 || weightKg <= 0) {
    throw new Error("Height and weight must be greater than zero.");
  }

  const bsaMosteller = Math.sqrt((heightCm * weightKg) / 3600);
  const bsaDuBois = 0.007184 * Math.pow(heightCm, 0.725) * Math.pow(weightKg, 0.425);

  return {
    bsaMosteller: roundTo(bsaMosteller, 2),
    bsaDuBois: roundTo(bsaDuBois, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
