export interface EngineHorsepowerResult {
  horsepower: number;
  method: "Trap Speed" | "Elapsed Time";
}

function parseOptional(value: string): number | null {
  const trimmed = value.trim();
  if (trimmed === "") return null;
  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed)) {
    throw new Error("Please enter a valid number.");
  }
  return parsed;
}

export function calculateEngineHorsepower(
  weightLbInput: string,
  trapSpeedMphInput: string,
  elapsedTimeSecInput: string
): EngineHorsepowerResult {
  const weightLb = parseOptional(weightLbInput);
  if (weightLb === null || weightLb <= 0) {
    throw new Error("Please enter a valid, positive vehicle weight.");
  }

  const trapSpeed = parseOptional(trapSpeedMphInput);
  const elapsedTime = parseOptional(elapsedTimeSecInput);

  if (trapSpeed !== null && trapSpeed > 0) {
    const horsepower = weightLb * Math.pow(trapSpeed / 234, 3);
    return { horsepower: Math.round(horsepower * 100) / 100, method: "Trap Speed" };
  }

  if (elapsedTime !== null && elapsedTime > 0) {
    const horsepower = weightLb / Math.pow(elapsedTime / 5.825, 3);
    return { horsepower: Math.round(horsepower * 100) / 100, method: "Elapsed Time" };
  }

  throw new Error("Please enter either a quarter-mile trap speed or an elapsed time.");
}
