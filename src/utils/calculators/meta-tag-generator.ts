export interface MetaTagInputs {
  title: string;
  description: string;
  keywords: string;
  author: string;
  robotsIndex: boolean;
  robotsFollow: boolean;
  viewport: boolean;
  charset: boolean;
}

export function generateMetaTags(inputs: MetaTagInputs): string {
  const { title, description, keywords, author, robotsIndex, robotsFollow, viewport, charset } = inputs;

  if (!title.trim() && !description.trim()) {
    throw new Error("Please enter at least a title or description.");
  }

  const lines: string[] = [];

  if (charset) lines.push('<meta charset="UTF-8">');
  if (viewport) lines.push('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
  if (title.trim()) lines.push(`<title>${escapeHtml(title.trim())}</title>`);
  if (description.trim()) lines.push(`<meta name="description" content="${escapeHtml(description.trim())}">`);
  if (keywords.trim()) lines.push(`<meta name="keywords" content="${escapeHtml(keywords.trim())}">`);
  if (author.trim()) lines.push(`<meta name="author" content="${escapeHtml(author.trim())}">`);

  const robotsParts = [robotsIndex ? "index" : "noindex", robotsFollow ? "follow" : "nofollow"];
  lines.push(`<meta name="robots" content="${robotsParts.join(", ")}">`);

  return lines.join("\n");
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
