export interface OpenGraphInputs {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  siteName: string;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function generateOpenGraphTags(inputs: OpenGraphInputs): string {
  if (!inputs.title.trim()) {
    throw new Error("Please enter a title.");
  }

  const lines: string[] = [];
  lines.push(`<meta property="og:title" content="${escapeHtml(inputs.title.trim())}">`);
  if (inputs.description.trim()) lines.push(`<meta property="og:description" content="${escapeHtml(inputs.description.trim())}">`);
  if (inputs.image.trim()) lines.push(`<meta property="og:image" content="${escapeHtml(inputs.image.trim())}">`);
  if (inputs.url.trim()) lines.push(`<meta property="og:url" content="${escapeHtml(inputs.url.trim())}">`);
  lines.push(`<meta property="og:type" content="${escapeHtml(inputs.type.trim() || "website")}">`);
  if (inputs.siteName.trim()) lines.push(`<meta property="og:site_name" content="${escapeHtml(inputs.siteName.trim())}">`);

  return lines.join("\n");
}
