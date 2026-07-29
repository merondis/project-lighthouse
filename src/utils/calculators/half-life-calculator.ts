export interface HalfLifeResult {
  remainingAmount: number;
  percentRemaining: number;
  numberOfHalfLives: number;
}

export function calculateHalfLife(initialAmount: number, halfLife: number, elapsedTime: number): HalfLifeResult {
  if (!Number.isFinite(initialAmount) || initialAmount <= 0) {
    throw new Error("Please enter a valid, positive initial amount.");
  }
  if (!Number.isFinite(halfLife) || halfLife <= 0) {
    throw new Error("Please enter a valid, positive half-life.");
  }
  if (!Number.isFinite(elapsedTime) || elapsedTime < 0) {
    throw new Error("Please enter a valid, non-negative elapsed time.");
  }

  const numberOfHalfLives = elapsedTime / halfLife;
  const remainingAmount = initialAmount * Math.pow(0.5, numberOfHalfLives);
  const percentRemaining = (remainingAmount / initialAmount) * 100;

  return {
    remainingAmount: Math.round(remainingAmount * 10000) / 10000,
    percentRemaining: Math.round(percentRemaining * 10000) / 10000,
    numberOfHalfLives: Math.round(numberOfHalfLives * 10000) / 10000,
  };
}
