export interface WallpaperResult {
  wallArea: number;
  areaWithWaste: number;
  rollsNeeded: number;
}

export function calculateWallpaper(
  wallLengthFt: number,
  wallHeightFt: number,
  rollCoverageSqFt: number,
  wastePercent: number
): WallpaperResult {
  if ([wallLengthFt, wallHeightFt, rollCoverageSqFt, wastePercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (wallLengthFt <= 0 || wallHeightFt <= 0 || rollCoverageSqFt <= 0) {
    throw new Error("Wall dimensions and roll coverage must be greater than zero.");
  }
  if (wastePercent < 0) {
    throw new Error("Waste percentage cannot be negative.");
  }

  const wallArea = wallLengthFt * wallHeightFt;
  const areaWithWaste = wallArea * (1 + wastePercent / 100);
  const rollsNeeded = Math.ceil(areaWithWaste / rollCoverageSqFt);

  return {
    wallArea: roundTo(wallArea, 2),
    areaWithWaste: roundTo(areaWithWaste, 2),
    rollsNeeded,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
