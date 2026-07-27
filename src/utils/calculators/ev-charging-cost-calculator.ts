export interface EvChargingCostResult {
  energyAddedKwh: number;
  energyDrawnFromGridKwh: number;
  totalCost: number;
  milesAdded: number | null;
  costPerMile: number | null;
}

// Estimates the cost of charging an EV from a current charge level to a
// target charge level. Accounts for charging losses (the energy drawn from
// the wall is always somewhat more than the energy that actually reaches
// the battery), using a charger efficiency percentage. Optionally converts
// the result into a cost-per-mile figure if the vehicle's rated
// efficiency (miles per kWh) is provided.
export function calculateEvChargingCost(
  batteryCapacityKwh: number,
  currentChargePercent: number,
  targetChargePercent: number,
  electricityRatePerKwh: number,
  chargerEfficiencyPercent: number,
  efficiencyMilesPerKwh: number
): EvChargingCostResult {
  if (
    [batteryCapacityKwh, currentChargePercent, targetChargePercent, electricityRatePerKwh, chargerEfficiencyPercent, efficiencyMilesPerKwh].some(
      (v) => Number.isNaN(v)
    )
  ) {
    throw new Error("Please enter valid numbers for all fields.");
  }
  if (batteryCapacityKwh <= 0) {
    throw new Error("Battery capacity must be greater than zero.");
  }
  if (currentChargePercent < 0 || currentChargePercent > 100 || targetChargePercent < 0 || targetChargePercent > 100) {
    throw new Error("Charge percentages must be between 0 and 100.");
  }
  if (targetChargePercent <= currentChargePercent) {
    throw new Error("Target charge must be greater than current charge.");
  }
  if (electricityRatePerKwh <= 0) {
    throw new Error("Electricity rate must be greater than zero.");
  }
  if (chargerEfficiencyPercent <= 0 || chargerEfficiencyPercent > 100) {
    throw new Error("Charger efficiency must be between 0 and 100.");
  }
  if (efficiencyMilesPerKwh < 0) {
    throw new Error("Vehicle efficiency cannot be negative.");
  }

  const energyAddedKwh = batteryCapacityKwh * ((targetChargePercent - currentChargePercent) / 100);
  const energyDrawnFromGridKwh = energyAddedKwh / (chargerEfficiencyPercent / 100);
  const totalCost = energyDrawnFromGridKwh * electricityRatePerKwh;

  const milesAdded = efficiencyMilesPerKwh > 0 ? energyAddedKwh * efficiencyMilesPerKwh : null;
  const costPerMile = milesAdded && milesAdded > 0 ? totalCost / milesAdded : null;

  return {
    energyAddedKwh: roundTo(energyAddedKwh, 2),
    energyDrawnFromGridKwh: roundTo(energyDrawnFromGridKwh, 2),
    totalCost: roundTo(totalCost, 2),
    milesAdded: milesAdded === null ? null : roundTo(milesAdded, 1),
    costPerMile: costPerMile === null ? null : roundTo(costPerMile, 3),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
