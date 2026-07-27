export type DimensionUnit = "ft" | "in" | "yd" | "m" | "cm";

export interface CubicVolumeResult {
  cubicFeet: number;
  cubicYards: number;
  cubicMeters: number;
}

const TO_FEET: Record<DimensionUnit, number> = {
  ft: 1,
  in: 1 / 12,
  yd: 3,
  m: 3.28084,
  cm: 0.0328084,
};

const CUBIC_FEET_TO_CUBIC_METERS = 0.0283168;

// A general-purpose dimensional volume calculator: enter length, width and
// height, each in whichever unit is most convenient, and get the volume in
// cubic feet, cubic yards and cubic meters all at once. This underlies our
// dedicated Cubic Yard, Cubic Feet and Cubic Meter calculator pages, each
// simply highlighting the unit its name promises while still showing all
// three for convenience.
export function calculateCubicVolume(
  length: number,
  lengthUnit: DimensionUnit,
  width: number,
  widthUnit: DimensionUnit,
  height: number,
  heightUnit: DimensionUnit
): CubicVolumeResult {
  if ([length, width, height].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for length, width and height.");
  }
  if (length <= 0 || width <= 0 || height <= 0) {
    throw new Error("Length, width and height must be greater than zero.");
  }

  const lengthFt = length * TO_FEET[lengthUnit];
  const widthFt = width * TO_FEET[widthUnit];
  const heightFt = height * TO_FEET[heightUnit];

  const cubicFeet = lengthFt * widthFt * heightFt;
  const cubicYards = cubicFeet / 27;
  const cubicMeters = cubicFeet * CUBIC_FEET_TO_CUBIC_METERS;

  return {
    cubicFeet: roundTo(cubicFeet, 3),
    cubicYards: roundTo(cubicYards, 3),
    cubicMeters: roundTo(cubicMeters, 3),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
