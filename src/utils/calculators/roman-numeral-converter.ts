export type RomanConversionMode = "toRoman" | "toNumber";

export interface RomanNumeralResult {
  output: string;
}

const ROMAN_VALUES: [string, number][] = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const ROMAN_NUMERAL_PATTERN = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

function numberToRoman(value: number): string {
  let remaining = value;
  let result = "";
  for (const [symbol, symbolValue] of ROMAN_VALUES) {
    while (remaining >= symbolValue) {
      result += symbol;
      remaining -= symbolValue;
    }
  }
  return result;
}

function romanToNumber(roman: string): number {
  let total = 0;
  let i = 0;
  while (i < roman.length) {
    const twoChar = roman.slice(i, i + 2);
    const matchTwo = ROMAN_VALUES.find(([symbol]) => symbol.length === 2 && symbol === twoChar);
    if (matchTwo) {
      total += matchTwo[1];
      i += 2;
      continue;
    }
    const oneChar = roman[i];
    const matchOne = ROMAN_VALUES.find(([symbol]) => symbol.length === 1 && symbol === oneChar);
    if (!matchOne) {
      throw new Error("Please enter a valid Roman numeral.");
    }
    total += matchOne[1];
    i += 1;
  }
  return total;
}

export function convertRomanNumeral(mode: RomanConversionMode, value: string): RomanNumeralResult {
  if (mode === "toRoman") {
    const number = Number(value.trim());
    if (!Number.isFinite(number) || !Number.isInteger(number) || number < 1 || number > 3999) {
      throw new Error("Please enter a whole number between 1 and 3999.");
    }
    return { output: numberToRoman(number) };
  }

  const roman = value.trim().toUpperCase();
  if (!roman || !ROMAN_NUMERAL_PATTERN.test(roman)) {
    throw new Error("Please enter a valid Roman numeral (using I, V, X, L, C, D, M).");
  }
  return { output: String(romanToNumber(roman)) };
}
