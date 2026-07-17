export interface IdealWeightResult {
  idealWeightKg: number;
  idealWeightLb: number;
}

export function calculateIdealWeight(gender: "male" | "female", heightCm: number): IdealWeightResult {
  if (Number.isNaN(heightCm) || heightCm <= 0) {
    throw new Error("Please enter a valid height.");
  }

  const heightInches = heightCm / 2.54;
  const inchesOverFiveFeet = Math.max(0, heightInches - 60);
  const base = gender === "male" ? 50 : 45.5;

  const idealWeightKg = base + 2.3 * inchesOverFiveFeet;
  const idealWeightLb = idealWeightKg * 2.20462;

  return {
    idealWeightKg: Math.round(idealWeightKg * 10) / 10,
    idealWeightLb: Math.round(idealWeightLb * 10) / 10,
  };
}