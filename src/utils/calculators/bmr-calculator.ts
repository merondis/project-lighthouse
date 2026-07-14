export type Gender = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "veryActive";

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

export interface BmrResult {
  bmr: number;
  maintenanceCalories: number;
}

export function calculateBmr(
  gender: Gender,
  age: number,
  heightCm: number,
  weightKg: number,
  activityLevel: ActivityLevel
): BmrResult {
  if ([age, heightCm, weightKg].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for age, height and weight.");
  }
  if (age <= 0 || heightCm <= 0 || weightKg <= 0) {
    throw new Error("Age, height and weight must be greater than zero.");
  }

  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const bmr = gender === "male" ? base + 5 : base - 161;
  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel] ?? 1.2;
  const maintenanceCalories = bmr * multiplier;

  return {
    bmr: Math.round(bmr),
    maintenanceCalories: Math.round(maintenanceCalories),
  };
}