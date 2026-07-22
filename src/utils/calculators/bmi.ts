export type UnitSystem = "us" | "metric" | "other";
export type HeightUnit = "cm" | "m" | "in" | "ft";
export type WeightUnit = "kg" | "lbs" | "stone";
export type Gender = "male" | "female";

const LB_TO_KG = 0.45359237;
const KG_TO_LB = 1 / LB_TO_KG;
const IN_TO_M = 0.0254;
const FT_TO_M = 0.3048;
const STONE_TO_KG = 6.35029318;

export function convertHeightToMeters(value: number, unit: HeightUnit): number {
  if (unit === "cm") return value / 100;
  if (unit === "m") return value;
  if (unit === "in") return value * IN_TO_M;
  return value * FT_TO_M;
}

export function convertWeightToKg(value: number, unit: WeightUnit): number {
  if (unit === "kg") return value;
  if (unit === "lbs") return value * LB_TO_KG;
  return value * STONE_TO_KG;
}

export interface BmiCategoryInfo {
  label: string;
  min: number;
  max: number;
}

// Adult BMI classification (WHO-style extended thresholds, adults 18+ only).
export const BMI_CATEGORIES: BmiCategoryInfo[] = [
  { label: "Severe Thinness", min: Number.NEGATIVE_INFINITY, max: 16 },
  { label: "Moderate Thinness", min: 16, max: 17 },
  { label: "Mild Thinness", min: 17, max: 18.5 },
  { label: "Normal", min: 18.5, max: 25 },
  { label: "Overweight", min: 25, max: 30 },
  { label: "Obese Class I", min: 30, max: 35 },
  { label: "Obese Class II", min: 35, max: 40 },
  { label: "Obese Class III", min: 40, max: Number.POSITIVE_INFINITY },
];

// BMI Prime = BMI / 25 (25 being the upper bound of the "Normal" BMI range).
export const BMI_PRIME_CATEGORIES: BmiCategoryInfo[] = [
  { label: "Severe Thinness", min: Number.NEGATIVE_INFINITY, max: 0.64 },
  { label: "Moderate Thinness", min: 0.64, max: 0.68 },
  { label: "Mild Thinness", min: 0.68, max: 0.74 },
  { label: "Normal", min: 0.74, max: 1 },
  { label: "Overweight", min: 1, max: 1.2 },
  { label: "Obese Class I", min: 1.2, max: 1.4 },
  { label: "Obese Class II", min: 1.4, max: 1.6 },
  { label: "Obese Class III", min: 1.6, max: Number.POSITIVE_INFINITY },
];

export function classify(value: number, categories: BmiCategoryInfo[]): string {
  const found = categories.find((c) => value >= c.min && value < c.max);
  return found ? found.label : categories[categories.length - 1].label;
}

export interface BmiResult {
  bmi: number;
  category: string;
  bmiPrime: number;
  bmiPrimeCategory: string;
  healthyWeightMinKg: number;
  healthyWeightMaxKg: number;
  healthyWeightMinLb: number;
  healthyWeightMaxLb: number;
  ponderalIndex: number;
}

const MIN_REALISTIC_HEIGHT_M = 0.5;
const MAX_REALISTIC_HEIGHT_M = 2.75;
const MIN_REALISTIC_WEIGHT_KG = 10;
const MAX_REALISTIC_WEIGHT_KG = 500;

export function calculateBmiDetailed(heightM: number, weightKg: number): BmiResult {
  if ([heightM, weightKg].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for height and weight.");
  }
  if (heightM <= 0 || weightKg <= 0) {
    throw new Error("Height and weight must be greater than zero.");
  }
  if (heightM < MIN_REALISTIC_HEIGHT_M || heightM > MAX_REALISTIC_HEIGHT_M) {
    throw new Error("Please double-check your height, that value seems out of a realistic range.");
  }
  if (weightKg < MIN_REALISTIC_WEIGHT_KG || weightKg > MAX_REALISTIC_WEIGHT_KG) {
    throw new Error("Please double-check your weight, that value seems out of a realistic range.");
  }

  const bmi = weightKg / (heightM * heightM);
  const roundedBmi = roundTo(bmi, 1);
  const category = classify(roundedBmi, BMI_CATEGORIES);

  const bmiPrime = bmi / 25;
  const roundedBmiPrime = roundTo(bmiPrime, 2);
  const bmiPrimeCategory = classify(roundedBmiPrime, BMI_PRIME_CATEGORIES);

  const healthyWeightMinKg = 18.5 * heightM * heightM;
  const healthyWeightMaxKg = 25 * heightM * heightM;

  const ponderalIndex = weightKg / Math.pow(heightM, 3);

  return {
    bmi: roundedBmi,
    category,
    bmiPrime: roundedBmiPrime,
    bmiPrimeCategory,
    healthyWeightMinKg: roundTo(healthyWeightMinKg, 1),
    healthyWeightMaxKg: roundTo(healthyWeightMaxKg, 1),
    healthyWeightMinLb: roundTo(healthyWeightMinKg * KG_TO_LB, 1),
    healthyWeightMaxLb: roundTo(healthyWeightMaxKg * KG_TO_LB, 1),
    ponderalIndex: roundTo(ponderalIndex, 2),
  };
}

// Age and gender don't change the BMI calculation itself, they only inform
// general, non-diagnostic context notes shown alongside the result.
export function getBmiContextNotes(age: number, gender: Gender): string[] {
  const notes: string[] = [];

  if (age >= 65) {
    notes.push(
      "Older adults tend to carry more body fat than younger adults at the same BMI, and a slightly higher BMI (sometimes up to the low overweight range) is not necessarily a health concern later in life."
    );
  } else if (age <= 24) {
    notes.push(
      "Younger adults tend to carry less body fat than older adults at the same BMI, since body composition shifts gradually with age even at a stable weight."
    );
  }

  if (gender === "female") {
    notes.push(
      "On average, women have a higher body fat percentage than men at the same BMI, since BMI doesn't distinguish between fat and lean mass."
    );
  } else {
    notes.push(
      "On average, men have a lower body fat percentage than women at the same BMI, since BMI doesn't distinguish between fat and lean mass."
    );
  }

  return notes;
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
