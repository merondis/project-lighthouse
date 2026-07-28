// Builds a set of hreflang alternate link tags from language-code/URL pairs
// (one pair per line, "langcode, url"), plus an optional x-default entry.
// The same generated block is meant to be placed on every page in the set.
export function generateHreflangTags(pairsText: string, includeXDefault: boolean, xDefaultUrl: string): string {
  const lines = pairsText
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length === 0) {
    throw new Error("Please enter at least one language code and URL pair.");
  }

  const entries = lines.map((line) => {
    const commaIdx = line.indexOf(",");
    if (commaIdx === -1) {
      throw new Error(`Each line must be "language-code, URL": "${line}"`);
    }
    const lang = line.slice(0, commaIdx).trim();
    const url = line.slice(commaIdx + 1).trim();
    if (!lang) throw new Error(`Missing language code in line: "${line}"`);
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      throw new Error(`URL must start with http:// or https:// in line: "${line}"`);
    }
    return `<link rel="alternate" hreflang="${lang}" href="${url}">`;
  });

  if (includeXDefault) {
    const trimmedDefault = xDefaultUrl.trim();
    if (!trimmedDefault) {
      throw new Error("Please enter an x-default URL, or disable the x-default option.");
    }
    entries.push(`<link rel="alternate" hreflang="x-default" href="${trimmedDefault}">`);
  }

  return entries.join("\n");
}
