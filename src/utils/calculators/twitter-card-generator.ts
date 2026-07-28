export interface TwitterCardInputs {
  cardType: string;
  title: string;
  description: string;
  image: string;
  site: string;
  creator: string;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function normalizeHandle(handle: string): string {
  const trimmed = handle.trim();
  if (!trimmed) return "";
  return trimmed.startsWith("@") ? trimmed : `@${trimmed}`;
}

export function generateTwitterCardTags(inputs: TwitterCardInputs): string {
  if (!inputs.title.trim()) {
    throw new Error("Please enter a title.");
  }

  const lines: string[] = [];
  lines.push(`<meta name="twitter:card" content="${inputs.cardType.trim() || "summary"}">`);
  lines.push(`<meta name="twitter:title" content="${escapeHtml(inputs.title.trim())}">`);
  if (inputs.description.trim()) lines.push(`<meta name="twitter:description" content="${escapeHtml(inputs.description.trim())}">`);
  if (inputs.image.trim()) lines.push(`<meta name="twitter:image" content="${escapeHtml(inputs.image.trim())}">`);
  if (inputs.site.trim()) lines.push(`<meta name="twitter:site" content="${escapeHtml(normalizeHandle(inputs.site))}">`);
  if (inputs.creator.trim()) lines.push(`<meta name="twitter:creator" content="${escapeHtml(normalizeHandle(inputs.creator))}">`);

  return lines.join("\n");
}
