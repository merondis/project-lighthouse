export type Gender = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "veryActive";
export type MacroGoal = "lose" | "maintain" | "gain";
export type DietStyle = "balanced" | "highProtein" | "lowCarb" | "keto";

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const GOAL_ADJUSTMENT: Record<MacroGoal, number> = {
  lose: -500,
  maintain: 0,
  gain: 500,
};

const DIET_SPLITS: Record<DietStyle, { protein: number; carbs: number; fat: number }> = {
  balanced: { protein: 0.3, carbs: 0.4, fat: 0.3 },
  highProtein: { protein: 0.4, carbs: 0.3, fat: 0.3 },
  lowCarb: { protein: 0.4, carbs: 0.2, fat: 0.4 },
  keto: { protein: 0.25, carbs: 0.05, fat: 0.7 },
};

export interface MacroResult {
  targetCalories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
}

export function calculateMacros(
  gender: Gender,
  age: number,
  heightCm: number,
  weightKg: number,
  activityLevel: ActivityLevel,
  goal: MacroGoal,
  dietStyle: DietStyle
): MacroResult {
  if ([age, heightCm, weightKg].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for age, height and weight.");
  }
  if (age <= 0 || heightCm <= 0 || weightKg <= 0) {
    throw new Error("Age, height and weight must be greater than zero.");
  }

  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const bmr = gender === "male" ? base + 5 : base - 161;
  const tdee = bmr * (ACTIVITY_MULTIPLIERS[activityLevel] ?? 1.2);

  const targetCalories = Math.max(tdee + GOAL_ADJUSTMENT[goal], 1000);
  const split = DIET_SPLITS[dietStyle];

  const proteinGrams = (targetCalories * split.protein) / 4;
  const carbsGrams = (targetCalories * split.carbs) / 4;
  const fatGrams = (targetCalories * split.fat) / 9;

  return {
    targetCalories: Math.round(targetCalories),
    proteinGrams: Math.round(proteinGrams),
    carbsGrams: Math.round(carbsGrams),
    fatGrams: Math.round(fatGrams),
  };
}
