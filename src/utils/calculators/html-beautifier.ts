type HtmlTokenType = "open" | "close" | "void" | "text" | "passthrough";

interface HtmlToken {
  type: HtmlTokenType;
  raw: string;
  name?: string;
}

const VOID_ELEMENTS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

// Hand-written, lenient HTML tokenizer, no DOM parser involved. Unlike our
// XML Formatter, this deliberately does not throw on mismatched or
// unclosed tags, since real-world HTML5 allows optional closing tags for
// several elements (li, p, td, and others), which would make strict
// validation produce constant false positives.
function tokenizeHtml(html: string): HtmlToken[] {
  const tokens: HtmlToken[] = [];
  let i = 0;
  const len = html.length;

  while (i < len) {
    if (html[i] === "<") {
      if (html.startsWith("<!--", i)) {
        const end = html.indexOf("-->", i);
        const endIdx = end === -1 ? len : end + 3;
        tokens.push({ type: "passthrough", raw: html.slice(i, endIdx) });
        i = endIdx;
        continue;
      }
      if (html.startsWith("<!", i)) {
        const end = html.indexOf(">", i);
        const endIdx = end === -1 ? len : end + 1;
        tokens.push({ type: "passthrough", raw: html.slice(i, endIdx) });
        i = endIdx;
        continue;
      }

      const end = html.indexOf(">", i);
      if (end === -1) {
        tokens.push({ type: "text", raw: html.slice(i) });
        break;
      }
      const raw = html.slice(i, end + 1);

      if (raw.startsWith("</")) {
        tokens.push({ type: "close", raw, name: raw.slice(2, -1).trim().toLowerCase() });
      } else {
        const name = raw
          .slice(1, -1)
          .trim()
          .split(/[\s/]/)[0]
          .toLowerCase();
        if (raw.endsWith("/>") || VOID_ELEMENTS.has(name)) {
          tokens.push({ type: "void", raw, name });
        } else {
          tokens.push({ type: "open", raw, name });
        }
      }
      i = end + 1;
    } else {
      const next = html.indexOf("<", i);
      const text = next === -1 ? html.slice(i) : html.slice(i, next);
      if (text.trim().length > 0) {
        tokens.push({ type: "text", raw: text.trim() });
      }
      i = next === -1 ? len : next;
    }
  }

  return tokens;
}

// Indents HTML by tag depth. Best-effort, not spec-perfect: since HTML5
// permits optional closing tags, depth is simply decremented on every
// closing tag encountered rather than requiring an exact name match.
export function beautifyHtml(html: string, indentSize = 2): string {
  if (!html.trim()) {
    throw new Error("Please enter some HTML.");
  }

  const tokens = tokenizeHtml(html);
  let depth = 0;
  const lines: string[] = [];
  const indent = (d: number) => " ".repeat(Math.max(d, 0) * indentSize);

  for (let idx = 0; idx < tokens.length; idx++) {
    const token = tokens[idx];

    if (
      token.type === "open" &&
      tokens[idx + 1]?.type === "text" &&
      tokens[idx + 2]?.type === "close" &&
      tokens[idx + 2].name === token.name
    ) {
      lines.push(`${indent(depth)}${token.raw}${tokens[idx + 1].raw}${tokens[idx + 2].raw}`);
      idx += 2;
      continue;
    }

    if (token.type === "close") {
      depth = Math.max(depth - 1, 0);
      lines.push(indent(depth) + token.raw);
    } else if (token.type === "open") {
      lines.push(indent(depth) + token.raw);
      depth++;
    } else {
      lines.push(indent(depth) + token.raw);
    }
  }

  return lines.join("\n");
}
