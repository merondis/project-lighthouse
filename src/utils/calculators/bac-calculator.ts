export type BacGender = "male" | "female";

export interface BacResult {
  bacPercent: number;
  impairmentLevel: string;
}

const WIDMARK_FACTOR: Record<BacGender, number> = {
  male: 0.68,
  female: 0.55,
};

const ELIMINATION_RATE_PER_HOUR = 0.015;

function classify(bac: number): string {
  if (bac <= 0) return "None Detected";
  if (bac < 0.03) return "Minimal Impairment";
  if (bac < 0.06) return "Mild Impairment";
  if (bac < 0.1) return "Significant Impairment";
  if (bac < 0.2) return "Severe Impairment";
  return "Extreme Impairment (Medical Risk)";
}

// Estimates blood alcohol concentration using the Widmark formula, a
// standard (though approximate) method: BAC = (alcohol grams consumed /
// (body weight in grams x Widmark factor)) x 100, minus the alcohol
// eliminated over time at a typical average metabolism rate.
// This is a rough estimate only, see the important safety note in the
// explanation, individual results vary substantially based on factors this
// formula cannot account for.
export function calculateBac(
  gender: BacGender,
  weightKg: number,
  numberOfDrinks: number,
  gramsPerDrink: number,
  hoursElapsed: number
): BacResult {
  if ([weightKg, numberOfDrinks, gramsPerDrink, hoursElapsed].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (weightKg <= 0) {
    throw new Error("Body weight must be greater than zero.");
  }
  if (numberOfDrinks < 0 || gramsPerDrink < 0) {
    throw new Error("Number of drinks and grams per drink cannot be negative.");
  }
  if (hoursElapsed < 0) {
    throw new Error("Hours elapsed cannot be negative.");
  }

  const totalAlcoholGrams = numberOfDrinks * gramsPerDrink;
  const bodyWeightGrams = weightKg * 1000;
  const r = WIDMARK_FACTOR[gender];

  const rawBac = (totalAlcoholGrams / (bodyWeightGrams * r)) * 100;
  const eliminated = ELIMINATION_RATE_PER_HOUR * hoursElapsed;
  const bacPercent = Math.max(0, rawBac - eliminated);

  return {
    bacPercent: roundTo(bacPercent, 3),
    impairmentLevel: classify(bacPercent),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
