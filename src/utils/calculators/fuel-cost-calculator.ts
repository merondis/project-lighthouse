export interface FuelCostResult {
  fuelNeeded: number;
  totalCost: number;
}

export function calculateFuelCost(
  distance: number,
  fuelEfficiency: number,
  fuelPricePerUnit: number
): FuelCostResult {
  if ([distance, fuelEfficiency, fuelPricePerUnit].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (distance <= 0 || fuelEfficiency <= 0 || fuelPricePerUnit < 0) {
    throw new Error("Distance and fuel efficiency must be greater than zero.");
  }

  const fuelNeeded = distance / fuelEfficiency;
  const totalCost = fuelNeeded * fuelPricePerUnit;

  return {
    fuelNeeded: roundTo(fuelNeeded, 2),
    totalCost: roundTo(totalCost, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}