export interface BrickResult {
  wallArea: number;
  bricksNeeded: number;
  mortarBagsNeeded: number;
}

// Rule-of-thumb yield: roughly 3 standard 60-80 lb mortar mix bags per 100
// bricks laid with standard joints, a commonly cited estimate from masonry suppliers.
const MORTAR_BAGS_PER_100_BRICKS = 3;

export function calculateBrick(
  wallLengthFt: number,
  wallHeightFt: number,
  brickLengthIn: number,
  brickHeightIn: number,
  mortarJointIn: number,
  wastePercent: number
): BrickResult {
  if (
    [wallLengthFt, wallHeightFt, brickLengthIn, brickHeightIn, mortarJointIn, wastePercent].some((v) =>
      Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (wallLengthFt <= 0 || wallHeightFt <= 0 || brickLengthIn <= 0 || brickHeightIn <= 0) {
    throw new Error("Wall and brick dimensions must be greater than zero.");
  }
  if (mortarJointIn < 0 || wastePercent < 0) {
    throw new Error("Mortar joint and waste percentage cannot be negative.");
  }

  const wallArea = wallLengthFt * wallHeightFt;

  const brickFaceAreaSqFt = ((brickLengthIn + mortarJointIn) * (brickHeightIn + mortarJointIn)) / 144;
  const areaWithWaste = wallArea * (1 + wastePercent / 100);
  const bricksNeeded = Math.ceil(areaWithWaste / brickFaceAreaSqFt);

  const mortarBagsNeeded = Math.ceil((bricksNeeded / 100) * MORTAR_BAGS_PER_100_BRICKS);

  return {
    wallArea: roundTo(wallArea, 2),
    bricksNeeded,
    mortarBagsNeeded,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
