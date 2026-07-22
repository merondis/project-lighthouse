export interface FlooringResult {
  roomArea: number;
  totalAreaWithWaste: number;
  boxesNeeded: number;
}

export function calculateFlooring(
  roomLengthFt: number,
  roomWidthFt: number,
  coveragePerBoxSqFt: number,
  wastePercent: number
): FlooringResult {
  if ([roomLengthFt, roomWidthFt, coveragePerBoxSqFt, wastePercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (roomLengthFt <= 0 || roomWidthFt <= 0 || coveragePerBoxSqFt <= 0) {
    throw new Error("Room dimensions and box coverage must be greater than zero.");
  }
  if (wastePercent < 0) {
    throw new Error("Waste percentage cannot be negative.");
  }

  const roomArea = roomLengthFt * roomWidthFt;
  const totalAreaWithWaste = roomArea * (1 + wastePercent / 100);
  const boxesNeeded = Math.ceil(totalAreaWithWaste / coveragePerBoxSqFt);

  return {
    roomArea: roundTo(roomArea, 2),
    totalAreaWithWaste: roundTo(totalAreaWithWaste, 2),
    boxesNeeded,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
