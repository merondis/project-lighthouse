export type WireMaterial = "copper" | "aluminum";
export type PhaseType = "single" | "three";

export const WIRE_GAUGE_OPTIONS: { label: string; value: string; circularMils: number }[] = [
  { label: "14 AWG", value: "14", circularMils: 4110 },
  { label: "12 AWG", value: "12", circularMils: 6530 },
  { label: "10 AWG", value: "10", circularMils: 10380 },
  { label: "8 AWG", value: "8", circularMils: 16510 },
  { label: "6 AWG", value: "6", circularMils: 26240 },
  { label: "4 AWG", value: "4", circularMils: 41740 },
  { label: "3 AWG", value: "3", circularMils: 52620 },
  { label: "2 AWG", value: "2", circularMils: 66360 },
  { label: "1 AWG", value: "1", circularMils: 83690 },
  { label: "1/0 AWG", value: "1/0", circularMils: 105600 },
  { label: "2/0 AWG", value: "2/0", circularMils: 133100 },
  { label: "3/0 AWG", value: "3/0", circularMils: 167800 },
  { label: "4/0 AWG", value: "4/0", circularMils: 211600 },
];

const RESISTIVITY_CONSTANT: Record<WireMaterial, number> = {
  copper: 12.9,
  aluminum: 21.2,
};

export interface VoltageDropResult {
  voltageDrop: number;
  percentDrop: number;
  voltageAtLoad: number;
}

export function calculateVoltageDrop(
  material: WireMaterial,
  wireGauge: string,
  current: number,
  lengthFeet: number,
  systemVoltage: number,
  phase: PhaseType
): VoltageDropResult {
  if (!Number.isFinite(current) || current <= 0) {
    throw new Error("Please enter a valid, positive current.");
  }
  if (!Number.isFinite(lengthFeet) || lengthFeet <= 0) {
    throw new Error("Please enter a valid, positive one-way length.");
  }
  if (!Number.isFinite(systemVoltage) || systemVoltage <= 0) {
    throw new Error("Please enter a valid, positive system voltage.");
  }

  const wire = WIRE_GAUGE_OPTIONS.find((w) => w.value === wireGauge);
  if (!wire) {
    throw new Error("Please choose a valid wire gauge.");
  }

  const k = RESISTIVITY_CONSTANT[material];
  const phaseFactor = phase === "three" ? Math.sqrt(3) : 2;

  const voltageDrop = (phaseFactor * k * current * lengthFeet) / wire.circularMils;
  const percentDrop = (voltageDrop / systemVoltage) * 100;
  const voltageAtLoad = systemVoltage - voltageDrop;

  return {
    voltageDrop: Math.round(voltageDrop * 100) / 100,
    percentDrop: Math.round(percentDrop * 100) / 100,
    voltageAtLoad: Math.round(voltageAtLoad * 100) / 100,
  };
}
