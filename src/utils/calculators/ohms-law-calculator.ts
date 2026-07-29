export interface OhmsLawResult {
  voltage: number;
  current: number;
  resistance: number;
  power: number;
}

function parseOptional(value: string): number | null {
  const trimmed = value.trim();
  if (trimmed === "") return null;
  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed)) {
    throw new Error("Please enter valid numbers, or leave exactly one field blank to solve for it.");
  }
  return parsed;
}

export function calculateOhmsLaw(voltageInput: string, currentInput: string, resistanceInput: string): OhmsLawResult {
  const voltage = parseOptional(voltageInput);
  const current = parseOptional(currentInput);
  const resistance = parseOptional(resistanceInput);

  const blankCount = [voltage, current, resistance].filter((v) => v === null).length;

  if (blankCount === 0) {
    throw new Error("Leave exactly one field blank (Voltage, Current or Resistance) to solve for it.");
  }
  if (blankCount > 1) {
    throw new Error("Please fill in at least two of the three fields (Voltage, Current, Resistance).");
  }

  let finalVoltage = voltage;
  let finalCurrent = current;
  let finalResistance = resistance;

  if (voltage === null) {
    if (current === null || resistance === null) throw new Error("Missing values to calculate voltage.");
    finalVoltage = current * resistance;
  } else if (current === null) {
    if (resistance === null || resistance === 0) throw new Error("Resistance must be greater than zero to calculate current.");
    finalCurrent = voltage / resistance;
  } else if (resistance === null) {
    if (current === 0) throw new Error("Current must be greater than zero to calculate resistance.");
    finalResistance = voltage / current;
  }

  if (finalVoltage === null || finalCurrent === null || finalResistance === null) {
    throw new Error("Unable to calculate. Please check your inputs.");
  }

  const power = finalVoltage * finalCurrent;

  return {
    voltage: Math.round(finalVoltage * 10000) / 10000,
    current: Math.round(finalCurrent * 10000) / 10000,
    resistance: Math.round(finalResistance * 10000) / 10000,
    power: Math.round(power * 10000) / 10000,
  };
}
