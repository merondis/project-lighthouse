export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

const UPPER = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const LOWER = "abcdefghijkmnpqrstuvwxyz";
const NUMBERS = "23456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}";

export function generatePassword(options: PasswordOptions): string {
  const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;

  if (!length || Number.isNaN(length) || length < 4 || length > 128) {
    throw new Error("Password length must be between 4 and 128 characters.");
  }

  let charset = "";
  if (includeUppercase) charset += UPPER;
  if (includeLowercase) charset += LOWER;
  if (includeNumbers) charset += NUMBERS;
  if (includeSymbols) charset += SYMBOLS;

  if (!charset) {
    throw new Error("Please select at least one character type.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}