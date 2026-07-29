export interface HealthyWeightResult {
  minWeightKg: number;
  maxWeightKg: number;
  minWeightLb: number;
  maxWeightLb: number;
}

export function calculateHealthyWeight(heightCm: number): HealthyWeightResult {
  if (!Number.isFinite(heightCm) || heightCm <= 0) {
    throw new Error("Please enter a valid height.");
  }

  const heightM = heightCm / 100;
  const minWeightKg = 18.5 * heightM * heightM;
  const maxWeightKg = 25 * heightM * heightM;

  return {
    minWeightKg: Math.round(minWeightKg * 10) / 10,
    maxWeightKg: Math.round(maxWeightKg * 10) / 10,
    minWeightLb: Math.round(minWeightKg * 2.20462 * 10) / 10,
    maxWeightLb: Math.round(maxWeightKg * 2.20462 * 10) / 10,
  };
}
