export type UnitCategory = "length" | "weight" | "temperature";

export interface UnitDefinition {
  key: string;
  label: string;
}

// ---------- LENGTH ----------
const LENGTH_TO_METERS: Record<string, number> = {
  millimeter: 0.001,
  centimeter: 0.01,
  meter: 1,
  kilometer: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.344,
};

export const LENGTH_UNITS: UnitDefinition[] = [
  { key: "millimeter", label: "Millimeters (mm)" },
  { key: "centimeter", label: "Centimeters (cm)" },
  { key: "meter", label: "Meters (m)" },
  { key: "kilometer", label: "Kilometers (km)" },
  { key: "inch", label: "Inches (in)" },
  { key: "foot", label: "Feet (ft)" },
  { key: "yard", label: "Yards (yd)" },
  { key: "mile", label: "Miles (mi)" },
];

// ---------- WEIGHT ----------
const WEIGHT_TO_GRAMS: Record<string, number> = {
  milligram: 0.001,
  gram: 1,
  kilogram: 1000,
  tonne: 1_000_000,
  ounce: 28.349523125,
  pound: 453.59237,
  stone: 6350.29318,
};

export const WEIGHT_UNITS: UnitDefinition[] = [
  { key: "milligram", label: "Milligrams (mg)" },
  { key: "gram", label: "Grams (g)" },
  { key: "kilogram", label: "Kilograms (kg)" },
  { key: "tonne", label: "Metric Tonnes (t)" },
  { key: "ounce", label: "Ounces (oz)" },
  { key: "pound", label: "Pounds (lb)" },
  { key: "stone", label: "Stone (st)" },
];

// ---------- TEMPERATURE ----------
export const TEMPERATURE_UNITS: UnitDefinition[] = [
  { key: "celsius", label: "Celsius (°C)" },
  { key: "fahrenheit", label: "Fahrenheit (°F)" },
  { key: "kelvin", label: "Kelvin (K)" },
];

function toCelsius(value: number, unit: string): number {
  switch (unit) {
    case "celsius":
      return value;
    case "fahrenheit":
      return ((value - 32) * 5) / 9;
    case "kelvin":
      return value - 273.15;
    default:
      throw new Error("Unknown temperature unit.");
  }
}

function fromCelsius(celsius: number, unit: string): number {
  switch (unit) {
    case "celsius":
      return celsius;
    case "fahrenheit":
      return (celsius * 9) / 5 + 32;
    case "kelvin":
      return celsius + 273.15;
    default:
      throw new Error("Unknown temperature unit.");
  }
}

function roundResult(value: number): number {
  return Math.round(value * 1_000_000) / 1_000_000;
}

export function getUnitsForCategory(category: UnitCategory): UnitDefinition[] {
  switch (category) {
    case "length":
      return LENGTH_UNITS;
    case "weight":
      return WEIGHT_UNITS;
    case "temperature":
      return TEMPERATURE_UNITS;
  }
}

export function convertUnit(
  category: UnitCategory,
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  if (Number.isNaN(value)) {
    throw new Error("Please enter a valid number.");
  }

  if (category === "temperature") {
    const celsius = toCelsius(value, fromUnit);
    return roundResult(fromCelsius(celsius, toUnit));
  }

  const table = category === "length" ? LENGTH_TO_METERS : WEIGHT_TO_GRAMS;
  const base = value * table[fromUnit];
  const result = base / table[toUnit];
  return roundResult(result);
}