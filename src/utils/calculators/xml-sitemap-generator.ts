const VALID_CHANGEFREQ = new Set(["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"]);

function escapeXml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

// Builds an XML sitemap from a pasted list of URLs (one per line), each
// optionally followed by priority, changefreq and lastmod as comma-
// separated values: "https://example.com/page, 0.8, weekly, 2026-07-01".
// This tool does not crawl a live site (browsers can't fetch arbitrary
// external pages due to CORS), it formats a URL list you already have.
export function generateSitemap(urlList: string, defaultPriority: string, defaultChangefreq: string): string {
  const lines = urlList
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length === 0) {
    throw new Error("Please enter at least one URL.");
  }

  const defaultPriorityNum = defaultPriority.trim() || "0.5";
  if (Number.isNaN(Number(defaultPriorityNum)) || Number(defaultPriorityNum) < 0 || Number(defaultPriorityNum) > 1) {
    throw new Error("Default priority must be a number between 0.0 and 1.0.");
  }
  const defaultFreq = defaultChangefreq.trim() || "monthly";
  if (!VALID_CHANGEFREQ.has(defaultFreq)) {
    throw new Error(`Default change frequency must be one of: ${Array.from(VALID_CHANGEFREQ).join(", ")}.`);
  }

  const entries = lines.map((line) => {
    const parts = line.split(",").map((p) => p.trim());
    const url = parts[0];
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      throw new Error(`Each URL must start with http:// or https://: "${url}"`);
    }
    const priority = parts[1] || defaultPriorityNum;
    const changefreq = parts[2] || defaultFreq;
    const lastmod = parts[3] || "";

    if (Number.isNaN(Number(priority)) || Number(priority) < 0 || Number(priority) > 1) {
      throw new Error(`Priority must be between 0.0 and 1.0: "${url}"`);
    }
    if (!VALID_CHANGEFREQ.has(changefreq)) {
      throw new Error(`Invalid change frequency "${changefreq}" for "${url}".`);
    }

    let xml = "  <url>\n";
    xml += `    <loc>${escapeXml(url)}</loc>\n`;
    if (lastmod) xml += `    <lastmod>${escapeXml(lastmod)}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += "  </url>";
    return xml;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>`;
}
