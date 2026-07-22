export interface TileResult {
  tilesNeeded: number;
  roomArea: number;
  tileAreaSqFt: number;
  totalAreaWithWaste: number;
}

export function calculateTiles(
  roomLengthFt: number,
  roomWidthFt: number,
  tileLengthIn: number,
  tileWidthIn: number,
  wastePercent: number
): TileResult {
  if ([roomLengthFt, roomWidthFt, tileLengthIn, tileWidthIn, wastePercent].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (roomLengthFt <= 0 || roomWidthFt <= 0 || tileLengthIn <= 0 || tileWidthIn <= 0) {
    throw new Error("Room and tile dimensions must be greater than zero.");
  }
  if (wastePercent < 0) {
    throw new Error("Waste percentage cannot be negative.");
  }

  const roomArea = roomLengthFt * roomWidthFt;
  const tileAreaSqFt = (tileLengthIn / 12) * (tileWidthIn / 12);
  const totalAreaWithWaste = roomArea * (1 + wastePercent / 100);
  const tilesNeeded = Math.ceil(totalAreaWithWaste / tileAreaSqFt);

  return {
    tilesNeeded,
    roomArea: roundTo(roomArea, 2),
    tileAreaSqFt: roundTo(tileAreaSqFt, 3),
    totalAreaWithWaste: roundTo(totalAreaWithWaste, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
