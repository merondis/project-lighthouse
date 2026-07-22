const DOOR_AREA_SQFT = 21; // Standard door, approx. 3ft x 7ft
const WINDOW_AREA_SQFT = 15; // Standard window, approx. 3ft x 5ft

export interface PaintResult {
  netWallArea: number;
  totalPaintArea: number;
  gallonsNeeded: number;
}

export function calculatePaint(
  roomLengthFt: number,
  roomWidthFt: number,
  wallHeightFt: number,
  numDoors: number,
  numWindows: number,
  coats: number,
  coveragePerGallon: number
): PaintResult {
  if (
    [roomLengthFt, roomWidthFt, wallHeightFt, numDoors, numWindows, coats, coveragePerGallon].some((v) =>
      Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (roomLengthFt <= 0 || roomWidthFt <= 0 || wallHeightFt <= 0) {
    throw new Error("Room length, width and wall height must be greater than zero.");
  }
  if (numDoors < 0 || numWindows < 0) {
    throw new Error("Number of doors and windows cannot be negative.");
  }
  if (coats <= 0) {
    throw new Error("Number of coats must be greater than zero.");
  }
  if (coveragePerGallon <= 0) {
    throw new Error("Coverage per gallon must be greater than zero.");
  }

  const perimeter = 2 * (roomLengthFt + roomWidthFt);
  const grossWallArea = perimeter * wallHeightFt;
  const openingsArea = numDoors * DOOR_AREA_SQFT + numWindows * WINDOW_AREA_SQFT;
  const netWallArea = Math.max(grossWallArea - openingsArea, 0);
  const totalPaintArea = netWallArea * coats;
  const gallonsNeeded = Math.ceil(totalPaintArea / coveragePerGallon);

  return {
    netWallArea: roundTo(netWallArea, 2),
    totalPaintArea: roundTo(totalPaintArea, 2),
    gallonsNeeded,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
