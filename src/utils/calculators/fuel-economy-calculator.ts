export type FuelEconomyDistanceUnit = "miles" | "km";
export type FuelEconomyVolumeUnit = "gallonsUS" | "gallonsUK" | "liters";

export interface FuelEconomyResult {
  mpgUS: number;
  mpgUK: number;
  litersPer100km: number;
  kmPerLiter: number;
}

const MILES_PER_KM = 1 / 1.609344;
const LITERS_PER_GALLON_US = 3.785411784;
const LITERS_PER_GALLON_UK = 4.54609;

// Calculates fuel economy in four common formats (US MPG, UK/Imperial MPG,
// L/100km, and km/L) from a distance driven and the fuel used, regardless
// of which distance/volume units were entered. Distinct from our Fuel Cost
// Calculator, which estimates trip cost from a known efficiency rating
// rather than deriving efficiency itself across multiple unit systems.
export function calculateFuelEconomy(
  distance: number,
  distanceUnit: FuelEconomyDistanceUnit,
  fuelUsed: number,
  fuelUnit: FuelEconomyVolumeUnit
): FuelEconomyResult {
  if ([distance, fuelUsed].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for distance and fuel used.");
  }
  if (distance <= 0 || fuelUsed <= 0) {
    throw new Error("Distance and fuel used must be greater than zero.");
  }

  const distanceMiles = distanceUnit === "miles" ? distance : distance * MILES_PER_KM;
  const distanceKm = distanceUnit === "km" ? distance : distance / MILES_PER_KM;

  let fuelLiters: number;
  if (fuelUnit === "liters") {
    fuelLiters = fuelUsed;
  } else if (fuelUnit === "gallonsUS") {
    fuelLiters = fuelUsed * LITERS_PER_GALLON_US;
  } else {
    fuelLiters = fuelUsed * LITERS_PER_GALLON_UK;
  }

  const fuelGallonsUS = fuelLiters / LITERS_PER_GALLON_US;
  const fuelGallonsUK = fuelLiters / LITERS_PER_GALLON_UK;

  const mpgUS = distanceMiles / fuelGallonsUS;
  const mpgUK = distanceMiles / fuelGallonsUK;
  const litersPer100km = (fuelLiters / distanceKm) * 100;
  const kmPerLiter = distanceKm / fuelLiters;

  return {
    mpgUS: roundTo(mpgUS, 2),
    mpgUK: roundTo(mpgUK, 2),
    litersPer100km: roundTo(litersPer100km, 2),
    kmPerLiter: roundTo(kmPerLiter, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
