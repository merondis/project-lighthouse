export interface UtmInputs {
  baseUrl: string;
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
}

// Appends UTM tracking parameters to a base URL, properly URL-encoded, and
// preserving any existing query string.
export function buildUtmUrl(inputs: UtmInputs): string {
  const { baseUrl, source, medium, campaign, term, content } = inputs;
  if (!baseUrl.trim()) throw new Error("Please enter a base URL.");
  if (!source.trim()) throw new Error("Please enter a campaign source (utm_source).");
  if (!medium.trim()) throw new Error("Please enter a campaign medium (utm_medium).");
  if (!campaign.trim()) throw new Error("Please enter a campaign name (utm_campaign).");

  let url: URL;
  try {
    url = new URL(baseUrl.trim());
  } catch {
    throw new Error("Please enter a valid, complete URL (including http:// or https://).");
  }

  url.searchParams.set("utm_source", source.trim());
  url.searchParams.set("utm_medium", medium.trim());
  url.searchParams.set("utm_campaign", campaign.trim());
  if (term.trim()) url.searchParams.set("utm_term", term.trim());
  if (content.trim()) url.searchParams.set("utm_content", content.trim());

  return url.toString();
}
