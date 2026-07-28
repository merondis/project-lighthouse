export interface SvgOptimizeResult {
  result: string;
  originalSizeBytes: number;
  optimizedSizeBytes: number;
  reductionPercent: number;
}

// Editor-specific namespaced attributes and elements that are safe to
// strip, they're metadata left behind by design tools (Illustrator,
// Inkscape, Sketch, Figma) and have no effect on how the SVG renders.
// Matches both namespace declarations (xmlns:inkscape="...") and
// namespaced attributes that use that prefix (inkscape:version="...").
const EDITOR_ATTR_PATTERN = /\s+(?:xmlns:(?:inkscape|sodipodi|sketch)|(?:inkscape|sodipodi|sketch):[\w-]+)="[^"]*"/g;
const EDITOR_ELEMENT_PATTERN = /<(metadata|sodipodi:namedview|inkscape:[\w-]+)\b[^>]*?(\/>|>[\s\S]*?<\/\1>)/g;

// Attributes that hold coordinate/numeric data worth trimming. Deliberately
// narrow: rounding is only applied inside these specific attribute values,
// never to arbitrary numbers elsewhere in the document (like a version
// string or an id), so it can't corrupt unrelated content.
const COORDINATE_ATTR_PATTERN = /\s(d|viewBox|points|transform)="([^"]*)"/g;

// Rounds numeric values inside coordinate-bearing attributes to a fixed
// decimal precision, trimming unnecessary precision that design tools
// often leave behind (e.g. 12.340000000001 -> 12.34).
function roundCoordinatePrecision(svg: string, precision: number): string {
  return svg.replace(COORDINATE_ATTR_PATTERN, (match, attrName, attrValue) => {
    const rounded = attrValue.replace(/-?\d+\.\d+/g, (num: string) => {
      const r = Number(num).toFixed(precision);
      return r.replace(/0+$/, "").replace(/\.$/, "");
    });
    return ` ${attrName}="${rounded}"`;
  });
}

// Heuristic, text-based SVG optimizer, not a full SVGO-equivalent AST
// optimizer. Strips comments, XML/editor metadata, and unnecessary
// whitespace, and rounds excessive coordinate precision, safe,
// non-destructive cleanups that account for most of the reducible size in
// hand-exported SVGs.
export function optimizeSvg(svg: string, precision: number): SvgOptimizeResult {
  if (!svg.trim()) {
    throw new Error("Please paste some SVG markup.");
  }
  if (!svg.includes("<svg")) {
    throw new Error("This doesn't look like valid SVG markup (no <svg> tag found).");
  }

  const originalSizeBytes = new TextEncoder().encode(svg).length;

  let result = svg;
  result = result.replace(/<!--[\s\S]*?-->/g, "");
  result = result.replace(EDITOR_ELEMENT_PATTERN, "");
  result = result.replace(EDITOR_ATTR_PATTERN, "");
  result = result.replace(/\s+(xml:space)="[^"]*"/g, "");
  result = roundCoordinatePrecision(result, precision);
  result = result.replace(/>\s+</g, "><");
  result = result.replace(/\s{2,}/g, " ");
  result = result.trim();

  const optimizedSizeBytes = new TextEncoder().encode(result).length;
  const reductionPercent = originalSizeBytes > 0 ? ((originalSizeBytes - optimizedSizeBytes) / originalSizeBytes) * 100 : 0;

  return {
    result,
    originalSizeBytes,
    optimizedSizeBytes,
    reductionPercent: Math.round(reductionPercent * 10) / 10,
  };
}
