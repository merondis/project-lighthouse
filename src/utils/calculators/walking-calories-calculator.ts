export interface WalkingCaloriesResult {
  caloriesBurned: number;
  averageSpeedKmh: number;
  metUsed: number;
}

const KM_PER_MILE = 1.60934;

// Unlike a generic activity calorie calculator that applies one fixed MET
// value to "walking" regardless of how fast you actually walked, this
// calculator derives your average speed from the distance and time you
// provide, then looks up a MET value that matches that specific pace, since
// walking's metabolic demand varies meaningfully between a slow stroll and
// brisk power walking.
export function calculateWalkingCalories(
  weightKg: number,
  distanceKm: number,
  durationMinutes: number
): WalkingCaloriesResult {
  if ([weightKg, distanceKm, durationMinutes].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (weightKg <= 0 || distanceKm <= 0 || durationMinutes <= 0) {
    throw new Error("Weight, distance and duration must all be greater than zero.");
  }

  const speedKmh = distanceKm / (durationMinutes / 60);
  const speedMph = speedKmh / KM_PER_MILE;

  let met: number;
  if (speedMph < 2.0) {
    met = 2.0;
  } else if (speedMph < 3.0) {
    met = 2.8;
  } else if (speedMph < 4.0) {
    met = 3.5;
  } else if (speedMph < 4.5) {
    met = 5.0;
  } else {
    met = 7.0;
  }

  const durationHours = durationMinutes / 60;
  const caloriesBurned = met * weightKg * durationHours;

  return {
    caloriesBurned: roundTo(caloriesBurned, 0),
    averageSpeedKmh: roundTo(speedKmh, 2),
    metUsed: met,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
