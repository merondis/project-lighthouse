export interface PregnancyWeightGainResult {
  prePregnancyBmi: number;
  bmiCategory: string;
  totalGainMinKg: number;
  totalGainMaxKg: number;
  recommendedToDateMinKg: number;
  recommendedToDateMaxKg: number;
}

const FIRST_TRIMESTER_WEEKS = 13;
const FULL_TERM_WEEKS = 40;

interface GainRange {
  min: number;
  max: number;
}

// Institute of Medicine (IOM) recommended total pregnancy weight gain
// ranges, based on pre-pregnancy BMI category.
function getGainRange(bmi: number): { category: string; range: GainRange } {
  if (bmi < 18.5) return { category: "Underweight", range: { min: 12.5, max: 18 } };
  if (bmi < 25) return { category: "Normal Weight", range: { min: 11.5, max: 16 } };
  if (bmi < 30) return { category: "Overweight", range: { min: 7, max: 11.5 } };
  return { category: "Obese", range: { min: 5, max: 9 } };
}

// First-trimester gain guidance is roughly the same (a small amount)
// regardless of starting BMI category, per IOM guidance.
const FIRST_TRIMESTER_RANGE: GainRange = { min: 0.5, max: 2 };

// Estimates recommended total pregnancy weight gain from pre-pregnancy BMI
// category (per IOM guidelines), and, if a current week is provided,
// interpolates a recommended gain-to-date range: a small fixed amount for
// the first trimester, then the remaining recommended gain spread evenly
// across the following weeks.
export function calculatePregnancyWeightGain(
  prePregnancyHeightCm: number,
  prePregnancyWeightKg: number,
  currentWeek: number
): PregnancyWeightGainResult {
  if ([prePregnancyHeightCm, prePregnancyWeightKg, currentWeek].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (prePregnancyHeightCm <= 0 || prePregnancyWeightKg <= 0) {
    throw new Error("Height and weight must be greater than zero.");
  }
  if (currentWeek < 0 || currentWeek > 42) {
    throw new Error("Current week must be between 0 and 42.");
  }

  const heightM = prePregnancyHeightCm / 100;
  const prePregnancyBmi = prePregnancyWeightKg / (heightM * heightM);
  const { category, range } = getGainRange(prePregnancyBmi);

  let recommendedToDateMinKg: number;
  let recommendedToDateMaxKg: number;

  if (currentWeek <= 0) {
    recommendedToDateMinKg = 0;
    recommendedToDateMaxKg = 0;
  } else if (currentWeek <= FIRST_TRIMESTER_WEEKS) {
    const progress = currentWeek / FIRST_TRIMESTER_WEEKS;
    recommendedToDateMinKg = FIRST_TRIMESTER_RANGE.min * progress;
    recommendedToDateMaxKg = FIRST_TRIMESTER_RANGE.max * progress;
  } else {
    const remainingWeeks = FULL_TERM_WEEKS - FIRST_TRIMESTER_WEEKS;
    const weeksIntoRemaining = Math.min(currentWeek, FULL_TERM_WEEKS) - FIRST_TRIMESTER_WEEKS;
    const perWeekMin = (range.min - FIRST_TRIMESTER_RANGE.min) / remainingWeeks;
    const perWeekMax = (range.max - FIRST_TRIMESTER_RANGE.max) / remainingWeeks;
    recommendedToDateMinKg = FIRST_TRIMESTER_RANGE.min + perWeekMin * weeksIntoRemaining;
    recommendedToDateMaxKg = FIRST_TRIMESTER_RANGE.max + perWeekMax * weeksIntoRemaining;
  }

  return {
    prePregnancyBmi: roundTo(prePregnancyBmi, 1),
    bmiCategory: category,
    totalGainMinKg: range.min,
    totalGainMaxKg: range.max,
    recommendedToDateMinKg: roundTo(recommendedToDateMinKg, 1),
    recommendedToDateMaxKg: roundTo(recommendedToDateMaxKg, 1),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
