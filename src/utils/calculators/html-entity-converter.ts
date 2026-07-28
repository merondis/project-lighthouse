export type HtmlEntityMode = "encode" | "decode";

const ENCODE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

// Encodes special characters into HTML entities, or decodes HTML entities
// (named, decimal, and hex) back into their original characters. Manual
// string-based implementation, not reliant on the browser DOM, so it works
// identically regardless of rendering context.
export function convertHtmlEntities(text: string, mode: HtmlEntityMode): string {
  if (!text) {
    throw new Error("Please enter some text.");
  }

  if (mode === "encode") {
    return text.replace(/[&<>"']/g, (ch) => ENCODE_MAP[ch]);
  }

  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity: string) => {
    if (entity[0] === "#") {
      const isHex = entity[1] === "x" || entity[1] === "X";
      const code = isHex ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
      if (Number.isNaN(code)) return match;
      return String.fromCodePoint(code);
    }
    const named = NAMED_ENTITIES[entity.toLowerCase()];
    return named ?? match;
  });
}
