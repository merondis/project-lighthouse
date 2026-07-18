function hexToRgbValues(hex: string): [number, number, number] | null {
  const clean = hex.replace("#", "").trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null;
  return [
    parseInt(clean.substring(0, 2), 16),
    parseInt(clean.substring(2, 4), 16),
    parseInt(clean.substring(4, 6), 16),
  ];
}

function relativeLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export interface ContrastResult {
  ratio: number;
  aaNormalText: string;
  aaLargeText: string;
  aaaNormalText: string;
  aaaLargeText: string;
}

export function calculateContrast(hex1: string, hex2: string): ContrastResult {
  const rgb1 = hexToRgbValues(hex1);
  const rgb2 = hexToRgbValues(hex2);

  if (!rgb1 || !rgb2) {
    throw new Error("Please enter two valid hex colors, e.g. #FFFFFF.");
  }

  const l1 = relativeLuminance(...rgb1);
  const l2 = relativeLuminance(...rgb2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  const ratio = (lighter + 0.05) / (darker + 0.05);
  const rounded = Math.round(ratio * 100) / 100;

  return {
    ratio: rounded,
    aaNormalText: rounded >= 4.5 ? "Pass" : "Fail",
    aaLargeText: rounded >= 3 ? "Pass" : "Fail",
    aaaNormalText: rounded >= 7 ? "Pass" : "Fail",
    aaaLargeText: rounded >= 4.5 ? "Pass" : "Fail",
  };
}