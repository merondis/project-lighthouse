export interface InventoryDaysResult {
  averageInventory: number;
  daysInventoryOutstanding: number;
  turnoverRatio: number;
}

export function calculateInventoryDays(
  cogs: number,
  beginningInventory: number,
  endingInventory: number
): InventoryDaysResult {
  const averageInventory = (beginningInventory + endingInventory) / 2;
  const daysInventoryOutstanding = cogs !== 0 ? (averageInventory / cogs) * 365 : 0;
  const turnoverRatio = averageInventory !== 0 ? cogs / averageInventory : 0;
  return {
    averageInventory: Number(averageInventory.toFixed(2)),
    daysInventoryOutstanding: Number(daysInventoryOutstanding.toFixed(1)),
    turnoverRatio: Number(turnoverRatio.toFixed(2)),
  };
}
