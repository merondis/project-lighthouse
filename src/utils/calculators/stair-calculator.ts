export interface StairResult {
  numberOfSteps: number;
  actualRiserHeight: number;
  numberOfTreads: number;
  totalRun: number;
  stringerLength: number;
  angleDegrees: number;
}

export function calculateStairs(totalRiseInches: number, desiredRiserInches: number, treadDepthInches: number): StairResult {
  if (!Number.isFinite(totalRiseInches) || totalRiseInches <= 0) {
    throw new Error("Please enter a valid, positive total rise.");
  }
  if (!Number.isFinite(desiredRiserInches) || desiredRiserInches <= 0) {
    throw new Error("Please enter a valid, positive desired riser height.");
  }
  if (!Number.isFinite(treadDepthInches) || treadDepthInches <= 0) {
    throw new Error("Please enter a valid, positive tread depth.");
  }

  const numberOfSteps = Math.max(1, Math.round(totalRiseInches / desiredRiserInches));
  const actualRiserHeight = totalRiseInches / numberOfSteps;
  const numberOfTreads = Math.max(0, numberOfSteps - 1);
  const totalRun = numberOfTreads * treadDepthInches;
  const stringerLength = Math.sqrt(totalRiseInches * totalRiseInches + totalRun * totalRun);
  const angleDegrees = totalRun > 0 ? (Math.atan(totalRiseInches / totalRun) * 180) / Math.PI : 90;

  return {
    numberOfSteps,
    actualRiserHeight: Math.round(actualRiserHeight * 100) / 100,
    numberOfTreads,
    totalRun: Math.round(totalRun * 100) / 100,
    stringerLength: Math.round(stringerLength * 100) / 100,
    angleDegrees: Math.round(angleDegrees * 100) / 100,
  };
}
