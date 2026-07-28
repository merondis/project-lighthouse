export interface CashFlowResult {
  netCashFlow: number;
}

export function calculateCashFlow(
  operatingCashFlow: number,
  investingCashFlow: number,
  financingCashFlow: number
): CashFlowResult {
  const netCashFlow = operatingCashFlow + investingCashFlow + financingCashFlow;
  return {
    netCashFlow: Number(netCashFlow.toFixed(2)),
  };
}
