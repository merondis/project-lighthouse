// Brace-depth state machine formatter: reformats CSS with one declaration
// per line and consistent indentation for nested rules (e.g. media
// queries). No parser/AST, just tracks {, } and ; boundaries.
export function beautifyCss(css: string, indentSize = 2): string {
  if (!css.trim()) {
    throw new Error("Please enter some CSS.");
  }

  const noComments = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const indent = (d: number) => " ".repeat(Math.max(d, 0) * indentSize);

  function formatDeclaration(raw: string): string {
    const colonIdx = raw.indexOf(":");
    if (colonIdx === -1) return raw;
    const property = raw.slice(0, colonIdx).trim();
    const value = raw.slice(colonIdx + 1).trim();
    return `${property}: ${value}`;
  }

  let depth = 0;
  let result = "";
  let buffer = "";

  for (let i = 0; i < noComments.length; i++) {
    const ch = noComments[i];
    if (ch === "{") {
      const selector = buffer.trim();
      if (selector) result += indent(depth) + selector + " {\n";
      buffer = "";
      depth++;
    } else if (ch === "}") {
      if (buffer.trim()) {
        result += indent(depth) + formatDeclaration(buffer.trim()) + ";\n";
      }
      buffer = "";
      depth = Math.max(depth - 1, 0);
      result += indent(depth) + "}\n";
    } else if (ch === ";") {
      const declaration = buffer.trim();
      if (declaration) result += indent(depth) + formatDeclaration(declaration) + ";\n";
      buffer = "";
    } else {
      buffer += ch;
    }
  }

  if (buffer.trim()) {
    result += indent(depth) + formatDeclaration(buffer.trim()) + "\n";
  }

  return result.trim();
}
