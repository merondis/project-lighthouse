export interface LumberResult {
  boardFeetPerBoard: number;
  totalBoardFeet: number;
  totalLinearFeet: number;
  estimatedCost: number;
}

// Board feet is the standard unit lumber is priced and sold by in the US:
// Board Feet = (Thickness (in) × Width (in) × Length (ft)) ÷ 12. This
// calculator estimates total board footage and cost for a quantity of
// boards, a general lumber purchase estimator, distinct from our Deck
// Calculator, which counts full-length decking boards to cover a specific
// deck surface area rather than estimating board-foot volume for a
// general lumber order.
export function calculateLumber(
  thicknessIn: number,
  widthIn: number,
  lengthFt: number,
  quantity: number,
  pricePerBoardFoot: number
): LumberResult {
  if ([thicknessIn, widthIn, lengthFt, quantity, pricePerBoardFoot].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (thicknessIn <= 0 || widthIn <= 0 || lengthFt <= 0 || quantity <= 0) {
    throw new Error("Board dimensions and quantity must be greater than zero.");
  }
  if (pricePerBoardFoot < 0) {
    throw new Error("Price per board foot cannot be negative.");
  }

  const boardFeetPerBoard = (thicknessIn * widthIn * lengthFt) / 12;
  const totalBoardFeet = boardFeetPerBoard * quantity;
  const totalLinearFeet = lengthFt * quantity;
  const estimatedCost = totalBoardFeet * pricePerBoardFoot;

  return {
    boardFeetPerBoard: roundTo(boardFeetPerBoard, 3),
    totalBoardFeet: roundTo(totalBoardFeet, 2),
    totalLinearFeet: roundTo(totalLinearFeet, 1),
    estimatedCost: roundTo(estimatedCost, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
