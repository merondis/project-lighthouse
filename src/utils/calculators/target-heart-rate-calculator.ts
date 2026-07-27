export interface TargetHeartRateResult {
  maxHeartRate: number;
  heartRateReserve: number;
  targetHeartRateLow: number;
  targetHeartRateHigh: number;
}

// Uses the Karvonen method, which factors in your resting heart rate to
// calculate a target range: Target HR = ((Max HR − Resting HR) x Intensity)
// + Resting HR. This is a more personalized method than simply taking a flat
// percentage of max heart rate, since two people with the same max heart
// rate but very different fitness levels (and therefore very different
// resting heart rates) will get meaningfully different target ranges.
export function calculateTargetHeartRate(
  age: number,
  restingHeartRate: number,
  intensityLowPercent: number,
  intensityHighPercent: number
): TargetHeartRateResult {
  if ([age, restingHeartRate, intensityLowPercent, intensityHighPercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (age <= 0 || age > 120) {
    throw new Error("Please enter a valid age.");
  }
  if (restingHeartRate <= 0 || restingHeartRate > 220) {
    throw new Error("Please enter a valid resting heart rate.");
  }
  if (intensityLowPercent < 0 || intensityHighPercent > 100 || intensityLowPercent > intensityHighPercent) {
    throw new Error("Intensity percentages must be between 0 and 100, with the low end no greater than the high end.");
  }

  const maxHeartRate = 220 - age;
  const heartRateReserve = maxHeartRate - restingHeartRate;

  if (heartRateReserve <= 0) {
    throw new Error("Resting heart rate must be lower than your estimated maximum heart rate.");
  }

  const targetHeartRateLow = heartRateReserve * (intensityLowPercent / 100) + restingHeartRate;
  const targetHeartRateHigh = heartRateReserve * (intensityHighPercent / 100) + restingHeartRate;

  return {
    maxHeartRate: Math.round(maxHeartRate),
    heartRateReserve: Math.round(heartRateReserve),
    targetHeartRateLow: Math.round(targetHeartRateLow),
    targetHeartRateHigh: Math.round(targetHeartRateHigh),
  };
}
