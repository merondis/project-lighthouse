export interface CanonicalTagResult {
  tag: string;
  warnings: string;
}

// Generates a canonical link tag from a URL, and flags common issues that
// undermine canonicalization: missing protocol, http instead of https,
// and an unnecessary trailing slash (on a non-root path).
export function generateCanonicalTag(url: string): CanonicalTagResult {
  const trimmed = url.trim();
  if (!trimmed) {
    throw new Error("Please enter a URL.");
  }

  const warnings: string[] = [];

  if (!/^https?:\/\//i.test(trimmed)) {
    throw new Error("URL must start with http:// or https://.");
  }
  if (trimmed.startsWith("http://")) {
    warnings.push("URL uses http:// instead of https://, consider using your site's secure (https) version as the canonical.");
  }

  let path = "";
  try {
    const parsed = new URL(trimmed);
    path = parsed.pathname;
  } catch {
    throw new Error("Please enter a valid, complete URL.");
  }

  if (path.length > 1 && path.endsWith("/")) {
    warnings.push("URL has a trailing slash on a non-root path, make sure this matches the canonical form your site actually serves.");
  }
  if (trimmed.includes("?") || trimmed.includes("#")) {
    warnings.push("URL includes a query string or fragment, canonical URLs are typically the clean version without tracking parameters.");
  }

  return {
    tag: `<link rel="canonical" href="${trimmed}">`,
    warnings: warnings.length > 0 ? warnings.join(" ") : "No issues found.",
  };
}
