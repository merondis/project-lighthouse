export type Gender = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "veryActive";

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

export interface TdeeResult {
  bmr: number;
  tdee: number;
  mildWeightLoss: number;
  weightLoss: number;
  weightGain: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
}

export function calculateTdee(
  gender: Gender,
  age: number,
  heightCm: number,
  weightKg: number,
  activityLevel: ActivityLevel
): TdeeResult {
  if ([age, heightCm, weightKg].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for age, height and weight.");
  }
  if (age <= 0 || heightCm <= 0 || weightKg <= 0) {
    throw new Error("Age, height and weight must be greater than zero.");
  }

  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const bmr = gender === "male" ? base + 5 : base - 161;
  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel] ?? 1.2;
  const tdee = bmr * multiplier;

  const mildWeightLoss = Math.max(tdee - 250, 0);
  const weightLoss = Math.max(tdee - 500, 0);
  const weightGain = tdee + 500;

  // Standard maintenance macro split: 30% protein, 40% carbs, 30% fat.
  // Protein and carbs provide 4 kcal/g, fat provides 9 kcal/g.
  const proteinGrams = (tdee * 0.3) / 4;
  const carbsGrams = (tdee * 0.4) / 4;
  const fatGrams = (tdee * 0.3) / 9;

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    mildWeightLoss: Math.round(mildWeightLoss),
    weightLoss: Math.round(weightLoss),
    weightGain: Math.round(weightGain),
    proteinGrams: Math.round(proteinGrams),
    carbsGrams: Math.round(carbsGrams),
    fatGrams: Math.round(fatGrams),
  };
}
