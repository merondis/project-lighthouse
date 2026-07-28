type XmlTokenType = "open" | "close" | "selfclose" | "text" | "comment" | "cdata" | "decl" | "doctype";

interface XmlToken {
  type: XmlTokenType;
  raw: string;
  name?: string;
}

// Hand-written XML tokenizer, no DOM parser or third-party library
// involved. Splits raw XML into tags, text, comments, CDATA sections and
// declarations, tracking enough structure to detect common well-formedness
// errors (unclosed tags, mismatched tags, multiple root elements).
function tokenizeXml(xml: string): XmlToken[] {
  const tokens: XmlToken[] = [];
  let i = 0;
  const len = xml.length;

  while (i < len) {
    if (xml[i] === "<") {
      if (xml.startsWith("<!--", i)) {
        const end = xml.indexOf("-->", i);
        if (end === -1) throw new Error("Unclosed comment (missing '-->').");
        tokens.push({ type: "comment", raw: xml.slice(i, end + 3) });
        i = end + 3;
        continue;
      }
      if (xml.startsWith("<![CDATA[", i)) {
        const end = xml.indexOf("]]>", i);
        if (end === -1) throw new Error("Unclosed CDATA section (missing ']]>').");
        tokens.push({ type: "cdata", raw: xml.slice(i, end + 3) });
        i = end + 3;
        continue;
      }
      if (xml.startsWith("<?", i)) {
        const end = xml.indexOf("?>", i);
        if (end === -1) throw new Error("Unclosed processing instruction (missing '?>').");
        tokens.push({ type: "decl", raw: xml.slice(i, end + 2) });
        i = end + 2;
        continue;
      }
      if (xml.slice(i, i + 9).toUpperCase() === "<!DOCTYPE") {
        const end = xml.indexOf(">", i);
        if (end === -1) throw new Error("Unclosed DOCTYPE declaration.");
        tokens.push({ type: "doctype", raw: xml.slice(i, end + 1) });
        i = end + 1;
        continue;
      }

      const end = xml.indexOf(">", i);
      if (end === -1) throw new Error("Unclosed tag: found '<' with no matching '>'.");
      const raw = xml.slice(i, end + 1);

      if (raw.startsWith("</")) {
        const name = raw.slice(2, -1).trim();
        tokens.push({ type: "close", raw, name });
      } else if (raw.endsWith("/>")) {
        const name = raw.slice(1, -2).trim().split(/\s/)[0];
        tokens.push({ type: "selfclose", raw, name });
      } else {
        const name = raw.slice(1, -1).trim().split(/\s/)[0];
        tokens.push({ type: "open", raw, name });
      }
      i = end + 1;
    } else {
      const next = xml.indexOf("<", i);
      const text = next === -1 ? xml.slice(i) : xml.slice(i, next);
      if (text.trim().length > 0) {
        tokens.push({ type: "text", raw: text.trim() });
      }
      i = next === -1 ? len : next;
    }
  }

  return tokens;
}

// Pretty-prints XML with consistent indentation, and doubles as a
// well-formedness check: throws if tags are unclosed, mismatched, or if
// there isn't exactly one root element.
export function formatXml(xml: string, indentSize = 2): string {
  if (!xml.trim()) {
    throw new Error("Please enter some XML.");
  }

  const tokens = tokenizeXml(xml);
  let depth = 0;
  let topLevelElementCount = 0;
  const stack: string[] = [];
  const lines: string[] = [];
  const indent = (d: number) => " ".repeat(Math.max(d, 0) * indentSize);

  for (let idx = 0; idx < tokens.length; idx++) {
    const token = tokens[idx];

    // Collapse <tag>text</tag> onto a single line when the element's only
    // child is a single text node, matching how most XML/HTML formatters
    // handle simple leaf elements.
    if (token.type === "open" && tokens[idx + 1]?.type === "text" && tokens[idx + 2]?.type === "close" && tokens[idx + 2].name === token.name) {
      if (depth === 0) topLevelElementCount++;
      lines.push(`${indent(depth)}${token.raw}${tokens[idx + 1].raw}${tokens[idx + 2].raw}`);
      idx += 2;
      continue;
    }

    if (token.type === "close") {
      depth = Math.max(depth - 1, 0);
      if (stack.length === 0) {
        throw new Error(`Unexpected closing tag with no matching opening tag: ${token.raw}`);
      }
      if (stack[stack.length - 1] !== token.name) {
        throw new Error(`Mismatched closing tag: expected </${stack[stack.length - 1]}> but found ${token.raw}.`);
      }
      stack.pop();
      lines.push(indent(depth) + token.raw);
    } else if (token.type === "open") {
      if (depth === 0) topLevelElementCount++;
      lines.push(indent(depth) + token.raw);
      stack.push(token.name ?? "");
      depth++;
    } else if (token.type === "selfclose") {
      if (depth === 0) topLevelElementCount++;
      lines.push(indent(depth) + token.raw);
    } else if (token.type === "decl" || token.type === "doctype") {
      lines.push(token.raw);
    } else {
      lines.push(indent(depth) + token.raw);
    }
  }

  if (stack.length > 0) {
    throw new Error(`Unclosed tag(s) at end of document: ${stack.map((t) => `<${t}>`).join(", ")}.`);
  }
  if (topLevelElementCount === 0) {
    throw new Error("No root element found.");
  }
  if (topLevelElementCount > 1) {
    throw new Error("XML must have exactly one root element, but multiple top-level elements were found.");
  }

  return lines.join("\n");
}

export interface XmlValidationResult {
  isValid: string;
  message: string;
}

export function validateXml(xml: string): XmlValidationResult {
  if (!xml.trim()) {
    throw new Error("Please enter some XML.");
  }
  try {
    formatXml(xml);
    return { isValid: "Valid", message: "This XML is well-formed." };
  } catch (err) {
    return { isValid: "Invalid", message: err instanceof Error ? err.message : "This XML is not well-formed." };
  }
}
