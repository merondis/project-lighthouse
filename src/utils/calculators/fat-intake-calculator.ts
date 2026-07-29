export interface FatIntakeResult {
  fatGramsMin: number;
  fatGramsMax: number;
  fatCaloriesMin: number;
  fatCaloriesMax: number;
}

const FAT_CALORIES_PER_GRAM = 9;
const MIN_PERCENT = 0.2;
const MAX_PERCENT = 0.35;

export function calculateFatIntake(dailyCalories: number): FatIntakeResult {
  if (!Number.isFinite(dailyCalories) || dailyCalories <= 0) {
    throw new Error("Please enter a valid daily calorie target.");
  }

  const fatCaloriesMin = dailyCalories * MIN_PERCENT;
  const fatCaloriesMax = dailyCalories * MAX_PERCENT;

  return {
    fatGramsMin: Math.round(fatCaloriesMin / FAT_CALORIES_PER_GRAM),
    fatGramsMax: Math.round(fatCaloriesMax / FAT_CALORIES_PER_GRAM),
    fatCaloriesMin: Math.round(fatCaloriesMin),
    fatCaloriesMax: Math.round(fatCaloriesMax),
  };
}
