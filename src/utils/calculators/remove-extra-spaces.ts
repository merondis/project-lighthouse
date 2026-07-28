// Collapses consecutive spaces and tabs within each line down to a single
// space. With "trim lines" enabled, leading and trailing whitespace on each
// line is also removed. Unlike Remove Empty Lines, this tool never removes
// blank lines themselves, it only cleans up horizontal whitespace.
export function removeExtraSpaces(text: string, trimLines: boolean): string {
  if (!text.trim()) {
    throw new Error("Please enter some text.");
  }

  const lines = text.split("\n").map((line) => {
    let cleaned = line.replace(/[ \t]+/g, " ");
    if (trimLines) cleaned = cleaned.trim();
    return cleaned;
  });

  return lines.join("\n");
}
