export interface HslToHexResult {
  hex: string;
  rgb: string;
}

export function hslToHexResult(h: number, s: number, l: number): HslToHexResult {
  if ([h, s, l].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for hue, saturation and lightness.");
  }
  if (s < 0 || s > 100 || l < 0 || l > 100) {
    throw new Error("Saturation and lightness must be between 0 and 100.");
  }

  const hue = ((h % 360) + 360) % 360;
  const sat = s / 100;
  const light = l / 100;

  const c = (1 - Math.abs(2 * light - 1)) * sat;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = light - c / 2;

  let r = 0, g = 0, b = 0;
  if (hue < 60) { r = c; g = x; b = 0; }
  else if (hue < 120) { r = x; g = c; b = 0; }
  else if (hue < 180) { r = 0; g = c; b = x; }
  else if (hue < 240) { r = 0; g = x; b = c; }
  else if (hue < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  const rFinal = Math.round((r + m) * 255);
  const gFinal = Math.round((g + m) * 255);
  const bFinal = Math.round((b + m) * 255);

  const toHex = (v: number) => v.toString(16).padStart(2, "0");
  const hex = "#" + toHex(rFinal) + toHex(gFinal) + toHex(bFinal);
  const rgb = "rgb(" + rFinal + ", " + gFinal + ", " + bFinal + ")";

  return { hex, rgb };
}