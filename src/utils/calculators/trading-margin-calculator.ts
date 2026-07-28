export interface TradingMarginResult {
  requiredMargin: number;
  borrowedAmount: number;
  maxLeverage: number | string;
}

export function calculateTradingMargin(positionValue: number, marginPercentRequired: number): TradingMarginResult {
  const requiredMargin = positionValue * (marginPercentRequired / 100);
  const borrowedAmount = positionValue - requiredMargin;
  const maxLeverage = marginPercentRequired > 0 ? Number((100 / marginPercentRequired).toFixed(2)) : "N/A";

  return {
    requiredMargin: Number(requiredMargin.toFixed(2)),
    borrowedAmount: Number(borrowedAmount.toFixed(2)),
    maxLeverage,
  };
}
