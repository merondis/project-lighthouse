export type SlugSeparator = "-" | "_";

// Converts text into a URL-friendly slug: strips diacritics and special
// characters, collapses whitespace/separators, and joins words with the
// chosen separator.
export function generateSlug(text: string, separator: SlugSeparator, lowercase: boolean): string {
  if (!text.trim()) {
    throw new Error("Please enter some text.");
  }

  let result = text.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
  result = result.replace(/[^a-zA-Z0-9\s\-_]/g, "");
  if (lowercase) result = result.toLowerCase();
  result = result.trim().replace(/[\s\-_]+/g, separator);
  const escapedSeparator = separator === "-" ? "\\-" : "_";
  result = result.replace(new RegExp(`^${escapedSeparator}+|${escapedSeparator}+$`, "g"), "");

  if (!result) {
    throw new Error("Please enter text containing letters or numbers.");
  }

  return result;
}
