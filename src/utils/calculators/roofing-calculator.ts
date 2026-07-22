export interface RoofingResult {
  roofArea: number;
  squaresNeeded: number;
  bundlesNeeded: number;
}

export function calculateRoofing(
  buildingLengthFt: number,
  buildingWidthFt: number,
  roofPitch: number,
  wastePercent: number
): RoofingResult {
  if ([buildingLengthFt, buildingWidthFt, roofPitch, wastePercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (buildingLengthFt <= 0 || buildingWidthFt <= 0) {
    throw new Error("Building length and width must be greater than zero.");
  }
  if (roofPitch < 0) {
    throw new Error("Roof pitch cannot be negative.");
  }
  if (wastePercent < 0) {
    throw new Error("Waste percentage cannot be negative.");
  }

  const footprintArea = buildingLengthFt * buildingWidthFt;
  // Pitch multiplier converts flat footprint area to sloped surface area,
  // based on a rise of `roofPitch` inches per 12 inches of run.
  const pitchMultiplier = Math.sqrt(144 + roofPitch * roofPitch) / 12;
  const roofArea = footprintArea * pitchMultiplier;
  const totalAreaWithWaste = roofArea * (1 + wastePercent / 100);

  // A "square" is the standard roofing unit: 100 square feet of coverage.
  const squaresNeeded = totalAreaWithWaste / 100;
  // Standard 3-tab and architectural shingles are packaged 3 bundles per square.
  const bundlesNeeded = Math.ceil(squaresNeeded * 3);

  return {
    roofArea: roundTo(roofArea, 2),
    squaresNeeded: roundTo(squaresNeeded, 2),
    bundlesNeeded,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
