export type ActivityLevel = "low" | "moderate" | "high";

export interface WaterIntakeResult {
  litersPerDay: number;
  cupsPerDay: number;
  ouncesPerDay: number;
}

const ACTIVITY_BONUS_ML: Record<ActivityLevel, number> = {
  low: 0,
  moderate: 350,
  high: 700,
};

export function calculateWaterIntake(weightKg: number, activityLevel: ActivityLevel): WaterIntakeResult {
  if (Number.isNaN(weightKg) || weightKg <= 0) {
    throw new Error("Please enter a valid weight.");
  }

  const baseMl = weightKg * 33;
  const totalMl = baseMl + ACTIVITY_BONUS_ML[activityLevel];
  const liters = totalMl / 1000;

  return {
    litersPerDay: Math.round(liters * 100) / 100,
    cupsPerDay: Math.round((totalMl / 236.588) * 10) / 10,
    ouncesPerDay: Math.round((totalMl / 29.5735) * 10) / 10,
  };
}