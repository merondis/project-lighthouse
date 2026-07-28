// Regex-based CSS minifier: strips comments, then removes unnecessary
// whitespace around punctuation and collapses remaining whitespace.
export function minifyCss(css: string): string {
  if (!css.trim()) {
    throw new Error("Please enter some CSS.");
  }

  let result = css.replace(/\/\*[\s\S]*?\*\//g, "");
  result = result.replace(/\s*([{}:;,])\s*/g, "$1");
  result = result.replace(/;}/g, "}");
  result = result.replace(/\s+/g, " ");
  result = result.trim();

  return result;
}
