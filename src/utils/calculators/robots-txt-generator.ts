export function generateRobotsTxt(
  userAgent: string,
  disallowPaths: string,
  allowPaths: string,
  sitemapUrl: string,
  crawlDelay: string
): string {
  const agent = userAgent.trim() || "*";
  const disallowLines = disallowPaths
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  const allowLines = allowPaths
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (disallowLines.length === 0 && allowLines.length === 0) {
    throw new Error("Please enter at least one Disallow or Allow path.");
  }

  const lines: string[] = [`User-agent: ${agent}`];

  for (const path of disallowLines) {
    lines.push(`Disallow: ${path.startsWith("/") ? path : "/" + path}`);
  }
  for (const path of allowLines) {
    lines.push(`Allow: ${path.startsWith("/") ? path : "/" + path}`);
  }

  const delay = crawlDelay.trim();
  if (delay) {
    const n = Number(delay);
    if (Number.isNaN(n) || n < 0) throw new Error("Crawl delay must be a valid non-negative number.");
    lines.push(`Crawl-delay: ${delay}`);
  }

  if (sitemapUrl.trim()) {
    lines.push("");
    lines.push(`Sitemap: ${sitemapUrl.trim()}`);
  }

  return lines.join("\n");
}
