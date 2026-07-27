export type Activity =
  | "walking"
  | "running"
  | "cycling"
  | "swimming"
  | "weightlifting"
  | "yoga"
  | "hiking"
  | "dancing"
  | "jumpingRope"
  | "basketball";

// MET (Metabolic Equivalent of Task) values from the widely used Compendium
// of Physical Activities, representing how many times more energy an
// activity uses compared to resting.
const MET_VALUES: Record<Activity, number> = {
  walking: 3.5,
  running: 9.8,
  cycling: 8.0,
  swimming: 7.0,
  weightlifting: 6.0,
  yoga: 3.0,
  hiking: 6.0,
  dancing: 4.5,
  jumpingRope: 11.0,
  basketball: 8.0,
};

export interface CaloriesBurnedResult {
  caloriesBurned: number;
  caloriesPerHour: number;
}

// Calories burned = MET x weight (kg) x duration (hours), the standard
// formula for estimating energy expenditure during physical activity based
// on its metabolic intensity relative to rest.
export function calculateCaloriesBurned(
  activity: Activity,
  weightKg: number,
  durationMinutes: number
): CaloriesBurnedResult {
  if ([weightKg, durationMinutes].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for weight and duration.");
  }
  if (weightKg <= 0 || durationMinutes <= 0) {
    throw new Error("Weight and duration must be greater than zero.");
  }

  const met = MET_VALUES[activity] ?? MET_VALUES.walking;
  const durationHours = durationMinutes / 60;
  const caloriesBurned = met * weightKg * durationHours;
  const caloriesPerHour = met * weightKg;

  return {
    caloriesBurned: roundTo(caloriesBurned, 0),
    caloriesPerHour: roundTo(caloriesPerHour, 0),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
