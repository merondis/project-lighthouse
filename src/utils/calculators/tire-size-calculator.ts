export interface TireSizeResult {
  currentDiameterIn: number;
  newDiameterIn: number;
  diameterDifferencePercent: number;
  currentRevsPerMile: number;
  newRevsPerMile: number;
  speedometerDifferencePercent: number;
}

const MM_PER_IN = 25.4;
const IN_PER_MILE = 63360;

function overallDiameterIn(sectionWidthMm: number, aspectRatioPercent: number, rimDiameterIn: number): number {
  const sidewallHeightMm = sectionWidthMm * (aspectRatioPercent / 100);
  const overallDiameterMm = rimDiameterIn * MM_PER_IN + 2 * sidewallHeightMm;
  return overallDiameterMm / MM_PER_IN;
}

// Compares a current tire size against a replacement size (both in standard
// metric tire notation, e.g. 225/45R17) to find the change in overall
// diameter, revolutions per mile, and the resulting speedometer/odometer
// reading error a mismatched tire size would introduce.
export function calculateTireSize(
  currentWidthMm: number,
  currentAspectRatio: number,
  currentRimIn: number,
  newWidthMm: number,
  newAspectRatio: number,
  newRimIn: number
): TireSizeResult {
  if (
    [currentWidthMm, currentAspectRatio, currentRimIn, newWidthMm, newAspectRatio, newRimIn].some((v) => Number.isNaN(v))
  ) {
    throw new Error("Please enter valid numbers for all tire dimensions.");
  }
  if ([currentWidthMm, currentAspectRatio, currentRimIn, newWidthMm, newAspectRatio, newRimIn].some((v) => v <= 0)) {
    throw new Error("All tire dimensions must be greater than zero.");
  }

  const currentDiameterIn = overallDiameterIn(currentWidthMm, currentAspectRatio, currentRimIn);
  const newDiameterIn = overallDiameterIn(newWidthMm, newAspectRatio, newRimIn);

  const currentRevsPerMile = IN_PER_MILE / (currentDiameterIn * Math.PI);
  const newRevsPerMile = IN_PER_MILE / (newDiameterIn * Math.PI);

  const diameterDifferencePercent = ((newDiameterIn - currentDiameterIn) / currentDiameterIn) * 100;
  // A larger tire covers more distance per revolution, so a speedometer
  // calibrated for the original tire will under-read actual speed, and
  // vice versa for a smaller replacement tire.
  const speedometerDifferencePercent = diameterDifferencePercent;

  return {
    currentDiameterIn: roundTo(currentDiameterIn, 2),
    newDiameterIn: roundTo(newDiameterIn, 2),
    diameterDifferencePercent: roundTo(diameterDifferencePercent, 2),
    currentRevsPerMile: roundTo(currentRevsPerMile, 1),
    newRevsPerMile: roundTo(newRevsPerMile, 1),
    speedometerDifferencePercent: roundTo(speedometerDifferencePercent, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
