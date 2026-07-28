export interface FinalGradeResult {
  neededScore: number | string;
  isAchievable: boolean;
}

export function calculateFinalGradeNeeded(
  currentGrade: number,
  finalExamWeightPercent: number,
  desiredGrade: number
): FinalGradeResult {
  const weight = finalExamWeightPercent / 100;
  if (weight <= 0 || weight > 1) {
    return { neededScore: "N/A", isAchievable: false };
  }
  const needed = (desiredGrade - currentGrade * (1 - weight)) / weight;
  const rounded = Number(needed.toFixed(2));
  const isAchievable = rounded <= 100 && rounded >= 0;
  return { neededScore: rounded, isAchievable };
}
