export interface InventoryTurnoverResult {
  averageInventory: number;
  turnoverRatio: number;
  daysToSellInventory: number;
}

export function calculateInventoryTurnover(
  cogs: number,
  beginningInventory: number,
  endingInventory: number
): InventoryTurnoverResult {
  const averageInventory = (beginningInventory + endingInventory) / 2;
  const turnoverRatio = averageInventory !== 0 ? cogs / averageInventory : 0;
  const daysToSellInventory = turnoverRatio !== 0 ? 365 / turnoverRatio : 0;
  return {
    averageInventory: Number(averageInventory.toFixed(2)),
    turnoverRatio: Number(turnoverRatio.toFixed(2)),
    daysToSellInventory: Number(daysToSellInventory.toFixed(1)),
  };
}
