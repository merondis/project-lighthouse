export type ProteinActivityLevel = "sedentary" | "light" | "moderate" | "active" | "veryActive";
export type ProteinGoal = "maintain" | "muscleGain" | "fatLoss";

const BASE_GRAMS_PER_KG: Record<ProteinActivityLevel, number> = {
  sedentary: 0.8,
  light: 1.0,
  moderate: 1.2,
  active: 1.4,
  veryActive: 1.6,
};

const GOAL_MODIFIER: Record<ProteinGoal, number> = {
  maintain: 0,
  muscleGain: 0.4,
  fatLoss: 0.4,
};

const MAX_GRAMS_PER_KG = 2.2;

export interface ProteinResult {
  dailyProteinGrams: number;
  gramsPerKg: number;
  proteinCalories: number;
  perMealGrams: number;
}

export function calculateProteinNeeds(
  weightKg: number,
  activityLevel: ProteinActivityLevel,
  goal: ProteinGoal
): ProteinResult {
  if (Number.isNaN(weightKg)) {
    throw new Error("Please enter a valid number for weight.");
  }
  if (weightKg <= 0) {
    throw new Error("Weight must be greater than zero.");
  }

  const gramsPerKg = Math.min(BASE_GRAMS_PER_KG[activityLevel] + GOAL_MODIFIER[goal], MAX_GRAMS_PER_KG);
  const dailyProteinGrams = weightKg * gramsPerKg;
  const proteinCalories = dailyProteinGrams * 4;
  const perMealGrams = dailyProteinGrams / 4;

  return {
    dailyProteinGrams: roundTo(dailyProteinGrams, 1),
    gramsPerKg: roundTo(gramsPerKg, 2),
    proteinCalories: Math.round(proteinCalories),
    perMealGrams: roundTo(perMealGrams, 1),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
