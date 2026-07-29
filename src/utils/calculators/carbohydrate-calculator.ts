export interface CarbohydrateResult {
  carbGramsMin: number;
  carbGramsMax: number;
  carbCaloriesMin: number;
  carbCaloriesMax: number;
}

const CARB_CALORIES_PER_GRAM = 4;
const MIN_PERCENT = 0.45;
const MAX_PERCENT = 0.65;

export function calculateCarbohydrateIntake(dailyCalories: number): CarbohydrateResult {
  if (!Number.isFinite(dailyCalories) || dailyCalories <= 0) {
    throw new Error("Please enter a valid daily calorie target.");
  }

  const carbCaloriesMin = dailyCalories * MIN_PERCENT;
  const carbCaloriesMax = dailyCalories * MAX_PERCENT;

  return {
    carbGramsMin: Math.round(carbCaloriesMin / CARB_CALORIES_PER_GRAM),
    carbGramsMax: Math.round(carbCaloriesMax / CARB_CALORIES_PER_GRAM),
    carbCaloriesMin: Math.round(carbCaloriesMin),
    carbCaloriesMax: Math.round(carbCaloriesMax),
  };
}
