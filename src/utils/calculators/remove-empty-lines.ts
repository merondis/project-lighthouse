export interface RemoveEmptyLinesResult {
  result: string;
  linesRemoved: number;
}

// Removes blank lines from a block of text. With "treat whitespace-only as
// empty" enabled, lines containing only spaces or tabs are also removed,
// not just fully blank lines.
export function removeEmptyLines(text: string, treatWhitespaceAsEmpty: boolean): RemoveEmptyLinesResult {
  if (!text) {
    throw new Error("Please enter some text.");
  }

  const lines = text.split("\n");
  const kept = lines.filter((line) => (treatWhitespaceAsEmpty ? line.trim().length > 0 : line.length > 0));

  return {
    result: kept.join("\n"),
    linesRemoved: lines.length - kept.length,
  };
}
