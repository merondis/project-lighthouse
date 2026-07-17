export interface DedupeOptions {
  caseSensitive: boolean;
  trimWhitespace: boolean;
}

export function removeDuplicateLines(text: string, options: DedupeOptions): string {
  if (!text.trim()) {
    throw new Error("Please enter some text.");
  }

  const lines = text.split("\n");
  const seen = new Set<string>();
  const result: string[] = [];

  for (const line of lines) {
    let key = options.trimWhitespace ? line.trim() : line;
    if (!options.caseSensitive) key = key.toLowerCase();

    if (!seen.has(key)) {
      seen.add(key);
      result.push(line);
    }
  }

  return result.join("\n");
}