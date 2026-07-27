export interface OneRepMaxResult {
  epley1RM: number;
  brzycki1RM: number;
  average1RM: number;
  percent90: number;
  percent80: number;
  percent70: number;
  percent60: number;
}

// Estimates one-rep max (1RM) using two widely used formulas, since neither
// is perfectly accurate for every lifter, showing both (and their average)
// gives a more reasonable estimate than relying on a single formula.
// Estimates are most accurate for sets of roughly 10 reps or fewer, accuracy
// drops off for higher rep sets. Also shows a few common training
// percentages of the estimated max, useful for planning working sets.
export function calculateOneRepMax(weight: number, reps: number): OneRepMaxResult {
  if ([weight, reps].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for weight and reps.");
  }
  if (weight <= 0) {
    throw new Error("Weight must be greater than zero.");
  }
  if (reps <= 0 || reps > 20) {
    throw new Error("Reps must be between 1 and 20 (estimates are unreliable beyond this range).");
  }

  const epley1RM = reps === 1 ? weight : weight * (1 + reps / 30);
  const brzycki1RM = reps === 1 ? weight : weight * (36 / (37 - reps));
  const average1RM = (epley1RM + brzycki1RM) / 2;

  return {
    epley1RM: roundTo(epley1RM, 1),
    brzycki1RM: roundTo(brzycki1RM, 1),
    average1RM: roundTo(average1RM, 1),
    percent90: roundTo(average1RM * 0.9, 1),
    percent80: roundTo(average1RM * 0.8, 1),
    percent70: roundTo(average1RM * 0.7, 1),
    percent60: roundTo(average1RM * 0.6, 1),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
