export type Gender = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "veryActive";
export type Goal = "lose" | "maintain" | "gain";

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

export interface CalorieGoalResult {
  maintenanceCalories: number;
  targetCalories: number;
  weeklyChangeKg: number;
}

export function calculateCalorieGoal(
  gender: Gender,
  age: number,
  heightCm: number,
  weightKg: number,
  activityLevel: ActivityLevel,
  goal: Goal,
  ratePerWeekKg: number
): CalorieGoalResult {
  if ([age, heightCm, weightKg, ratePerWeekKg].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (age <= 0 || heightCm <= 0 || weightKg <= 0) {
    throw new Error("Age, height and weight must be greater than zero.");
  }
  if (ratePerWeekKg < 0) {
    throw new Error("Rate of change cannot be negative.");
  }

  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const bmr = gender === "male" ? base + 5 : base - 161;
  const maintenanceCalories = bmr * ACTIVITY_MULTIPLIERS[activityLevel];

  // 1 kg of body weight is roughly 7700 kcal
  const weeklyCalorieAdjustment = ratePerWeekKg * 7700;
  const dailyCalorieAdjustment = weeklyCalorieAdjustment / 7;

  let targetCalories = maintenanceCalories;
  let weeklyChangeKg = 0;

  if (goal === "lose") {
    targetCalories = maintenanceCalories - dailyCalorieAdjustment;
    weeklyChangeKg = -ratePerWeekKg;
  } else if (goal === "gain") {
    targetCalories = maintenanceCalories + dailyCalorieAdjustment;
    weeklyChangeKg = ratePerWeekKg;
  }

  if (targetCalories < 1000) {
    throw new Error("The resulting calorie target is too low to be safe. Reduce your target rate of change.");
  }

  return {
    maintenanceCalories: Math.round(maintenanceCalories),
    targetCalories: Math.round(targetCalories),
    weeklyChangeKg: Math.round(weeklyChangeKg * 100) / 100,
  };
}