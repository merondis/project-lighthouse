export interface BmiResult {
  bmi: number;
  category: string;
}

export function calculateBmi(heightCm: number, weightKg: number): BmiResult {
  if (Number.isNaN(heightCm) || Number.isNaN(weightKg)) {
    throw new Error("Please enter valid numbers for height and weight.");
  }
  if (heightCm <= 0 || weightKg <= 0) {
    throw new Error("Height and weight must be greater than zero.");
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const rounded = Math.round(bmi * 10) / 10;

  let category: string;
  if (rounded < 18.5) category = "Underweight";
  else if (rounded < 25) category = "Normal weight";
  else if (rounded < 30) category = "Overweight";
  else category = "Obese";

  return { bmi: rounded, category };
}