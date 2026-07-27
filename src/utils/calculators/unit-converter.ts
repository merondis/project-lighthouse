export type UnitCategory =
  | "length"
  | "weight"
  | "temperature"
  | "dataStorage"
  | "volume"
  | "speed"
  | "area"
  | "pressure"
  | "energy"
  | "power"
  | "force"
  | "density"
  | "torque"
  | "angle"
  | "digitalTransferRate"
  | "frequency"
  | "radiation"
  | "viscosity"
  | "flowRate";

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

// ---------- VOLUME ----------
const VOLUME_TO_LITERS: Record<string, number> = {
  milliliter: 0.001,
  liter: 1,
  cubicMeter: 1000,
  teaspoon: 0.00492892,
  tablespoon: 0.0147868,
  cup: 0.236588,
  pint: 0.473176,
  quart: 0.946353,
  gallon: 3.78541,
};

export const VOLUME_UNITS: UnitDefinition[] = [
  { key: "milliliter", label: "Milliliters (ml)" },
  { key: "liter", label: "Liters (L)" },
  { key: "cubicMeter", label: "Cubic Meters (m³)" },
  { key: "teaspoon", label: "Teaspoons (tsp)" },
  { key: "tablespoon", label: "Tablespoons (tbsp)" },
  { key: "cup", label: "Cups" },
  { key: "pint", label: "Pints (pt)" },
  { key: "quart", label: "Quarts (qt)" },
  { key: "gallon", label: "Gallons (gal)" },
];

// ---------- SPEED ----------
const SPEED_TO_MPS: Record<string, number> = {
  mps: 1,
  kmh: 0.277778,
  mph: 0.44704,
  knot: 0.514444,
  fps: 0.3048,
};

export const SPEED_UNITS: UnitDefinition[] = [
  { key: "mps", label: "Meters per Second (m/s)" },
  { key: "kmh", label: "Kilometers per Hour (km/h)" },
  { key: "mph", label: "Miles per Hour (mph)" },
  { key: "knot", label: "Knots (kn)" },
  { key: "fps", label: "Feet per Second (ft/s)" },
];

// ---------- AREA ----------
const AREA_TO_SQ_METERS: Record<string, number> = {
  sqMeter: 1,
  sqKilometer: 1000000,
  sqCentimeter: 0.0001,
  sqFoot: 0.092903,
  sqYard: 0.836127,
  sqMile: 2589988.11,
  acre: 4046.86,
  hectare: 10000,
};

export const AREA_UNITS: UnitDefinition[] = [
  { key: "sqMeter", label: "Square Meters (m²)" },
  { key: "sqKilometer", label: "Square Kilometers (km²)" },
  { key: "sqCentimeter", label: "Square Centimeters (cm²)" },
  { key: "sqFoot", label: "Square Feet (ft²)" },
  { key: "sqYard", label: "Square Yards (yd²)" },
  { key: "sqMile", label: "Square Miles (mi²)" },
  { key: "acre", label: "Acres" },
  { key: "hectare", label: "Hectares" },
];

// ---------- DATA STORAGE ----------
const DATA_TO_BYTES: Record<string, number> = {
  bit: 0.125,
  byte: 1,
  kilobyte: 1024,
  megabyte: 1024 ** 2,
  gigabyte: 1024 ** 3,
  terabyte: 1024 ** 4,
};

export const DATA_STORAGE_UNITS: UnitDefinition[] = [
  { key: "bit", label: "Bits (b)" },
  { key: "byte", label: "Bytes (B)" },
  { key: "kilobyte", label: "Kilobytes (KB)" },
  { key: "megabyte", label: "Megabytes (MB)" },
  { key: "gigabyte", label: "Gigabytes (GB)" },
  { key: "terabyte", label: "Terabytes (TB)" },
];

// ---------- PRESSURE ----------
const PRESSURE_TO_PASCAL: Record<string, number> = {
  pascal: 1,
  kilopascal: 1000,
  bar: 100000,
  psi: 6894.757293168361,
  atmosphere: 101325,
  torr: 133.322368,
};

export const PRESSURE_UNITS: UnitDefinition[] = [
  { key: "pascal", label: "Pascals (Pa)" },
  { key: "kilopascal", label: "Kilopascals (kPa)" },
  { key: "bar", label: "Bar" },
  { key: "psi", label: "Pounds per Square Inch (psi)" },
  { key: "atmosphere", label: "Atmospheres (atm)" },
  { key: "torr", label: "Torr (mmHg)" },
];

// ---------- ENERGY ----------
const ENERGY_TO_JOULES: Record<string, number> = {
  joule: 1,
  kilojoule: 1000,
  calorie: 4.184,
  kilocalorie: 4184,
  wattHour: 3600,
  kilowattHour: 3_600_000,
  btu: 1055.05585262,
};

export const ENERGY_UNITS: UnitDefinition[] = [
  { key: "joule", label: "Joules (J)" },
  { key: "kilojoule", label: "Kilojoules (kJ)" },
  { key: "calorie", label: "Calories (cal)" },
  { key: "kilocalorie", label: "Kilocalories (kcal)" },
  { key: "wattHour", label: "Watt-Hours (Wh)" },
  { key: "kilowattHour", label: "Kilowatt-Hours (kWh)" },
  { key: "btu", label: "British Thermal Units (BTU)" },
];

// ---------- POWER ----------
const POWER_TO_WATTS: Record<string, number> = {
  watt: 1,
  kilowatt: 1000,
  megawatt: 1_000_000,
  horsepower: 745.699872,
  btuPerHour: 0.29307107,
};

export const POWER_UNITS: UnitDefinition[] = [
  { key: "watt", label: "Watts (W)" },
  { key: "kilowatt", label: "Kilowatts (kW)" },
  { key: "megawatt", label: "Megawatts (MW)" },
  { key: "horsepower", label: "Horsepower (hp)" },
  { key: "btuPerHour", label: "BTU per Hour (BTU/h)" },
];

// ---------- FORCE ----------
const FORCE_TO_NEWTONS: Record<string, number> = {
  newton: 1,
  kilonewton: 1000,
  dyne: 0.00001,
  poundForce: 4.4482216153,
  kilogramForce: 9.80665,
};

export const FORCE_UNITS: UnitDefinition[] = [
  { key: "newton", label: "Newtons (N)" },
  { key: "kilonewton", label: "Kilonewtons (kN)" },
  { key: "dyne", label: "Dynes (dyn)" },
  { key: "poundForce", label: "Pound-Force (lbf)" },
  { key: "kilogramForce", label: "Kilogram-Force (kgf)" },
];

// ---------- DENSITY ----------
const DENSITY_TO_KG_PER_M3: Record<string, number> = {
  kgPerM3: 1,
  gPerCm3: 1000,
  kgPerL: 1000,
  lbPerFt3: 16.01846337,
  lbPerGalUS: 119.826427,
};

export const DENSITY_UNITS: UnitDefinition[] = [
  { key: "kgPerM3", label: "Kilograms per Cubic Meter (kg/m³)" },
  { key: "gPerCm3", label: "Grams per Cubic Centimeter (g/cm³)" },
  { key: "kgPerL", label: "Kilograms per Liter (kg/L)" },
  { key: "lbPerFt3", label: "Pounds per Cubic Foot (lb/ft³)" },
  { key: "lbPerGalUS", label: "Pounds per Gallon (US, lb/gal)" },
];

// ---------- TORQUE ----------
const TORQUE_TO_NEWTON_METERS: Record<string, number> = {
  newtonMeter: 1,
  newtonCentimeter: 0.01,
  poundFoot: 1.35581795,
  poundInch: 0.112984829,
  kilogramForceMeter: 9.80665,
};

export const TORQUE_UNITS: UnitDefinition[] = [
  { key: "newtonMeter", label: "Newton-Meters (N·m)" },
  { key: "newtonCentimeter", label: "Newton-Centimeters (N·cm)" },
  { key: "poundFoot", label: "Pound-Feet (lb·ft)" },
  { key: "poundInch", label: "Pound-Inches (lb·in)" },
  { key: "kilogramForceMeter", label: "Kilogram-Force Meters (kgf·m)" },
];

// ---------- ANGLE ----------
const ANGLE_TO_DEGREES: Record<string, number> = {
  degree: 1,
  radian: 57.29577951308232,
  gradian: 0.9,
  arcminute: 1 / 60,
  arcsecond: 1 / 3600,
  revolution: 360,
};

export const ANGLE_UNITS: UnitDefinition[] = [
  { key: "degree", label: "Degrees (°)" },
  { key: "radian", label: "Radians (rad)" },
  { key: "gradian", label: "Gradians (grad)" },
  { key: "arcminute", label: "Arcminutes (′)" },
  { key: "arcsecond", label: "Arcseconds (″)" },
  { key: "revolution", label: "Revolutions (turns)" },
];

// ---------- DIGITAL TRANSFER RATE ----------
const TRANSFER_RATE_TO_BPS: Record<string, number> = {
  bitPerSecond: 1,
  kilobitPerSecond: 1000,
  megabitPerSecond: 1_000_000,
  gigabitPerSecond: 1_000_000_000,
  bytePerSecond: 8,
  megabytePerSecond: 8_000_000,
};

export const DIGITAL_TRANSFER_RATE_UNITS: UnitDefinition[] = [
  { key: "bitPerSecond", label: "Bits per Second (bps)" },
  { key: "kilobitPerSecond", label: "Kilobits per Second (Kbps)" },
  { key: "megabitPerSecond", label: "Megabits per Second (Mbps)" },
  { key: "gigabitPerSecond", label: "Gigabits per Second (Gbps)" },
  { key: "bytePerSecond", label: "Bytes per Second (B/s)" },
  { key: "megabytePerSecond", label: "Megabytes per Second (MB/s)" },
];

// ---------- FREQUENCY ----------
const FREQUENCY_TO_HERTZ: Record<string, number> = {
  hertz: 1,
  kilohertz: 1000,
  megahertz: 1_000_000,
  gigahertz: 1_000_000_000,
  rpm: 1 / 60,
};

export const FREQUENCY_UNITS: UnitDefinition[] = [
  { key: "hertz", label: "Hertz (Hz)" },
  { key: "kilohertz", label: "Kilohertz (kHz)" },
  { key: "megahertz", label: "Megahertz (MHz)" },
  { key: "gigahertz", label: "Gigahertz (GHz)" },
  { key: "rpm", label: "Revolutions per Minute (RPM)" },
];

// ---------- RADIATION (equivalent dose) ----------
const RADIATION_TO_SIEVERT: Record<string, number> = {
  sievert: 1,
  millisievert: 0.001,
  microsievert: 0.000001,
  rem: 0.01,
  millirem: 0.00001,
};

export const RADIATION_UNITS: UnitDefinition[] = [
  { key: "sievert", label: "Sieverts (Sv)" },
  { key: "millisievert", label: "Millisieverts (mSv)" },
  { key: "microsievert", label: "Microsieverts (µSv)" },
  { key: "rem", label: "Rem" },
  { key: "millirem", label: "Millirem (mrem)" },
];

// ---------- VISCOSITY (dynamic) ----------
const VISCOSITY_TO_PASCAL_SECOND: Record<string, number> = {
  pascalSecond: 1,
  millipascalSecond: 0.001,
  poise: 0.1,
  centipoise: 0.001,
  poundSecondPerSqFt: 47.880259,
};

export const VISCOSITY_UNITS: UnitDefinition[] = [
  { key: "pascalSecond", label: "Pascal-Seconds (Pa·s)" },
  { key: "millipascalSecond", label: "Millipascal-Seconds (mPa·s)" },
  { key: "poise", label: "Poise (P)" },
  { key: "centipoise", label: "Centipoise (cP)" },
  { key: "poundSecondPerSqFt", label: "Pound-Second per Sq Ft (lb·s/ft²)" },
];

// ---------- FLOW RATE ----------
const FLOW_RATE_TO_M3_PER_SECOND: Record<string, number> = {
  cubicMeterPerSecond: 1,
  literPerSecond: 0.001,
  literPerMinute: 0.001 / 60,
  literPerHour: 0.001 / 3600,
  gallonUSPerMinute: 0.0000630902,
  cubicFeetPerMinute: 0.000471947,
};

export const FLOW_RATE_UNITS: UnitDefinition[] = [
  { key: "cubicMeterPerSecond", label: "Cubic Meters per Second (m³/s)" },
  { key: "literPerSecond", label: "Liters per Second (L/s)" },
  { key: "literPerMinute", label: "Liters per Minute (L/min)" },
  { key: "literPerHour", label: "Liters per Hour (L/h)" },
  { key: "gallonUSPerMinute", label: "Gallons per Minute (US, GPM)" },
  { key: "cubicFeetPerMinute", label: "Cubic Feet per Minute (CFM)" },
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
    case "dataStorage":
      return DATA_STORAGE_UNITS;
    case "volume":
      return VOLUME_UNITS;
    case "speed":
      return SPEED_UNITS;
    case "area":
      return AREA_UNITS;
    case "pressure":
      return PRESSURE_UNITS;
    case "energy":
      return ENERGY_UNITS;
    case "power":
      return POWER_UNITS;
    case "force":
      return FORCE_UNITS;
    case "density":
      return DENSITY_UNITS;
    case "torque":
      return TORQUE_UNITS;
    case "angle":
      return ANGLE_UNITS;
    case "digitalTransferRate":
      return DIGITAL_TRANSFER_RATE_UNITS;
    case "frequency":
      return FREQUENCY_UNITS;
    case "radiation":
      return RADIATION_UNITS;
    case "viscosity":
      return VISCOSITY_UNITS;
    case "flowRate":
      return FLOW_RATE_UNITS;
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

let table: Record<string, number>;
  if (category === "length") {
    table = LENGTH_TO_METERS;
  } else if (category === "weight") {
    table = WEIGHT_TO_GRAMS;
  } else if (category === "dataStorage") {
    table = DATA_TO_BYTES;
  } else if (category === "volume") {
    table = VOLUME_TO_LITERS;
  } else if (category === "speed") {
    table = SPEED_TO_MPS;
  } else if (category === "area") {
    table = AREA_TO_SQ_METERS;
  } else if (category === "pressure") {
    table = PRESSURE_TO_PASCAL;
  } else if (category === "energy") {
    table = ENERGY_TO_JOULES;
  } else if (category === "power") {
    table = POWER_TO_WATTS;
  } else if (category === "force") {
    table = FORCE_TO_NEWTONS;
  } else if (category === "density") {
    table = DENSITY_TO_KG_PER_M3;
  } else if (category === "torque") {
    table = TORQUE_TO_NEWTON_METERS;
  } else if (category === "angle") {
    table = ANGLE_TO_DEGREES;
  } else if (category === "digitalTransferRate") {
    table = TRANSFER_RATE_TO_BPS;
  } else if (category === "frequency") {
    table = FREQUENCY_TO_HERTZ;
  } else if (category === "radiation") {
    table = RADIATION_TO_SIEVERT;
  } else if (category === "viscosity") {
    table = VISCOSITY_TO_PASCAL_SECOND;
  } else {
    table = FLOW_RATE_TO_M3_PER_SECOND;
  }

  const base = value * table[fromUnit];
  const result = base / table[toUnit];
  return roundResult(result);
}