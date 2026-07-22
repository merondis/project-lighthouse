export type IpFormat = "decimal" | "binary" | "hex";

export interface IpConversionResult {
  decimalDotted: string;
  binaryDotted: string;
  hexDotted: string;
  hexCompact: string;
  decimalInteger: string;
}

function parseDecimalDotted(input: string): number {
  const parts = input.trim().split(".");
  if (parts.length !== 4) {
    throw new Error("Please enter a valid decimal IP address, e.g. 192.168.1.1.");
  }
  let value = 0;
  for (const part of parts) {
    if (!/^\d+$/.test(part)) {
      throw new Error("Please enter a valid decimal IP address, e.g. 192.168.1.1.");
    }
    const octet = Number(part);
    if (octet < 0 || octet > 255) {
      throw new Error("Each decimal part must be between 0 and 255.");
    }
    value = value * 256 + octet;
  }
  return value >>> 0;
}

function parseBinary(input: string): number {
  const cleaned = input.trim().replace(/[.\s]/g, "");
  if (!/^[01]+$/.test(cleaned) || cleaned.length !== 32) {
    throw new Error("Please enter a valid 32-bit binary address, e.g. 11000000.10101000.00000001.00000001.");
  }
  return parseInt(cleaned, 2) >>> 0;
}

function parseHex(input: string): number {
  const cleaned = input.trim().replace(/^0x/i, "").replace(/[.\s]/g, "");
  if (!/^[0-9a-fA-F]+$/.test(cleaned) || cleaned.length !== 8) {
    throw new Error("Please enter a valid 8-digit hex address, e.g. C0A80101 or C0.A8.01.01.");
  }
  return parseInt(cleaned, 16) >>> 0;
}

function formatDecimalDotted(value: number): string {
  return [(value >>> 24) & 255, (value >>> 16) & 255, (value >>> 8) & 255, value & 255].join(".");
}

function formatBinaryDotted(value: number): string {
  return [(value >>> 24) & 255, (value >>> 16) & 255, (value >>> 8) & 255, value & 255]
    .map((octet) => octet.toString(2).padStart(8, "0"))
    .join(".");
}

function formatHexDotted(value: number): string {
  return [(value >>> 24) & 255, (value >>> 16) & 255, (value >>> 8) & 255, value & 255]
    .map((octet) => octet.toString(16).toUpperCase().padStart(2, "0"))
    .join(".");
}

export function convertIpAddress(inputValue: string, format: IpFormat): IpConversionResult {
  if (!inputValue.trim()) {
    throw new Error("Please enter an IP address to convert.");
  }

  let value: number;
  if (format === "decimal") {
    value = parseDecimalDotted(inputValue);
  } else if (format === "binary") {
    value = parseBinary(inputValue);
  } else {
    value = parseHex(inputValue);
  }

  return {
    decimalDotted: formatDecimalDotted(value),
    binaryDotted: formatBinaryDotted(value),
    hexDotted: formatHexDotted(value),
    hexCompact: "0x" + value.toString(16).toUpperCase().padStart(8, "0"),
    decimalInteger: value.toString(),
  };
}
