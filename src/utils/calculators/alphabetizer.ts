export type AlphabetizeDelimiter = "newline" | "comma";

const LEADING_ARTICLES = ["a", "an", "the"];

function sortKey(item: string, caseSensitive: boolean, ignoreArticles: boolean): string {
  let key = caseSensitive ? item : item.toLowerCase();
  if (ignoreArticles) {
    for (const article of LEADING_ARTICLES) {
      const prefix = article + " ";
      if (key.toLowerCase().startsWith(prefix)) {
        key = key.slice(prefix.length);
        break;
      }
    }
  }
  return key;
}

// Alphabetizes a comma- or newline-separated list of items (names, titles,
// bibliography entries) into strict A-Z order, with an option to ignore
// leading articles ("a", "an", "the") when sorting, the convention used for
// properly alphabetizing titles. Distinct from our more general Text
// Sorter, which sorts arbitrary lines alphabetically or numerically without
// this list-specific, article-aware behavior.
export function alphabetizeList(
  text: string,
  delimiter: AlphabetizeDelimiter,
  ignoreArticles: boolean,
  caseSensitive: boolean
): string {
  if (!text.trim()) {
    throw new Error("Please enter some text.");
  }

  const items = (delimiter === "comma" ? text.split(",") : text.split("\n"))
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  if (items.length === 0) {
    throw new Error("Please enter at least one item.");
  }

  const sorted = [...items].sort((a, b) =>
    sortKey(a, caseSensitive, ignoreArticles).localeCompare(sortKey(b, caseSensitive, ignoreArticles))
  );

  return sorted.join(delimiter === "comma" ? ", " : "\n");
}
