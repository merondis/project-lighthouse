export interface DeckResult {
  deckArea: number;
  totalLinearFeetNeeded: number;
  boardsNeeded: number;
}

export function calculateDeck(
  deckLengthFt: number,
  deckWidthFt: number,
  boardWidthIn: number,
  gapIn: number,
  boardLengthFt: number,
  wastePercent: number
): DeckResult {
  if (
    [deckLengthFt, deckWidthFt, boardWidthIn, gapIn, boardLengthFt, wastePercent].some((v) => Number.isNaN(v))
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (deckLengthFt <= 0 || deckWidthFt <= 0 || boardWidthIn <= 0 || boardLengthFt <= 0) {
    throw new Error("Deck and board dimensions must be greater than zero.");
  }
  if (gapIn < 0 || wastePercent < 0) {
    throw new Error("Gap and waste percentage cannot be negative.");
  }

  const deckArea = deckLengthFt * deckWidthFt;
  const effectiveBoardWidthFt = (boardWidthIn + gapIn) / 12;
  const totalLinearFeetNeeded = (deckArea / effectiveBoardWidthFt) * (1 + wastePercent / 100);
  const boardsNeeded = Math.ceil(totalLinearFeetNeeded / boardLengthFt);

  return {
    deckArea: roundTo(deckArea, 2),
    totalLinearFeetNeeded: roundTo(totalLinearFeetNeeded, 1),
    boardsNeeded,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
