export type TextSortOrder = "az" | "za" | "numAsc" | "numDesc";

// Sorts the lines of a block of text, either alphabetically or numerically,
// ascending or descending, with optional case-sensitive comparison and
// duplicate removal. A general-purpose line sorter for any kind of list.
export function sortTextLines(
  text: string,
  order: TextSortOrder,
  caseSensitive: boolean,
  removeDuplicates: boolean
): string {
  if (!text.trim()) {
    throw new Error("Please enter some text.");
  }

  let lines = text.split("\n");

  if (removeDuplicates) {
    const seen = new Set<string>();
    lines = lines.filter((line) => {
      const key = caseSensitive ? line : line.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  if (order === "numAsc" || order === "numDesc") {
    lines = [...lines].sort((a, b) => {
      const na = parseFloat(a);
      const nb = parseFloat(b);
      const va = Number.isNaN(na) ? Infinity : na;
      const vb = Number.isNaN(nb) ? Infinity : nb;
      return order === "numAsc" ? va - vb : vb - va;
    });
  } else {
    lines = [...lines].sort((a, b) => {
      const x = caseSensitive ? a : a.toLowerCase();
      const y = caseSensitive ? b : b.toLowerCase();
      return order === "az" ? x.localeCompare(y) : y.localeCompare(x);
    });
  }

  return lines.join("\n");
}
