const RECENT_TOOLS_KEY = "merondis:recent-tools";
const MAX_RECENT = 6;

export function addRecentTool(slug: string) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(RECENT_TOOLS_KEY);
    const list: string[] = raw ? JSON.parse(raw) : [];
    const filtered = list.filter((s) => s !== slug);
    filtered.unshift(slug);
    window.localStorage.setItem(RECENT_TOOLS_KEY, JSON.stringify(filtered.slice(0, MAX_RECENT)));
  } catch {
    // localStorage unavailable (private browsing, etc.), fail silently
  }
}

export function getRecentTools(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(RECENT_TOOLS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}