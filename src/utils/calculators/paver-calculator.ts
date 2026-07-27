export interface PaverResult {
  patioArea: number;
  paversNeeded: number;
  sandCubicFeet: number;
  gravelBaseCubicFeet: number;
}

// Unlike our indoor Tile Calculator, this calculator is built for outdoor
// hardscaping and additionally estimates the two prep layers a paver patio
// or walkway needs underneath: a compacted gravel base layer and a leveling
// sand bedding layer, on top of the paver count itself.
export function calculatePaver(
  patioLengthFt: number,
  patioWidthFt: number,
  paverLengthIn: number,
  paverWidthIn: number,
  wastePercent: number,
  sandDepthIn: number,
  gravelDepthIn: number
): PaverResult {
  if (
    [patioLengthFt, patioWidthFt, paverLengthIn, paverWidthIn, wastePercent, sandDepthIn, gravelDepthIn].some(
      (v) => Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (patioLengthFt <= 0 || patioWidthFt <= 0 || paverLengthIn <= 0 || paverWidthIn <= 0) {
    throw new Error("Patio and paver dimensions must be greater than zero.");
  }
  if (wastePercent < 0 || sandDepthIn < 0 || gravelDepthIn < 0) {
    throw new Error("Waste percentage and layer depths cannot be negative.");
  }

  const patioArea = patioLengthFt * patioWidthFt;
  const paverAreaSqFt = (paverLengthIn / 12) * (paverWidthIn / 12);
  const areaWithWaste = patioArea * (1 + wastePercent / 100);
  const paversNeeded = Math.ceil(areaWithWaste / paverAreaSqFt);

  const sandCubicFeet = patioArea * (sandDepthIn / 12);
  const gravelBaseCubicFeet = patioArea * (gravelDepthIn / 12);

  return {
    patioArea: roundTo(patioArea, 2),
    paversNeeded,
    sandCubicFeet: roundTo(sandCubicFeet, 2),
    gravelBaseCubicFeet: roundTo(gravelBaseCubicFeet, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
