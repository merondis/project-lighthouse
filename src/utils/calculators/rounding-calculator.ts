export type RoundingMode = "nearest" | "up" | "down";

export interface RoundingResult {
  roundedValue: number;
}

export function calculateRounding(value: number, decimalPlaces: number, mode: RoundingMode): RoundingResult {
  if (!Number.isFinite(value)) {
    throw new Error("Please enter a valid number.");
  }
  if (!Number.isFinite(decimalPlaces) || decimalPlaces < 0 || !Number.isInteger(decimalPlaces)) {
    throw new Error("Please enter a whole number of 0 or more for decimal places.");
  }

  const factor = Math.pow(10, decimalPlaces);
  let roundedValue: number;

  if (mode === "up") {
    roundedValue = Math.ceil(value * factor) / factor;
  } else if (mode === "down") {
    roundedValue = Math.floor(value * factor) / factor;
  } else {
    roundedValue = Math.round(value * factor) / factor;
  }

  return { roundedValue };
}
