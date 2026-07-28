export type PhraseLength = "1" | "2" | "3";

const STOPWORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "he", "in", "is", "it",
  "its", "of", "on", "that", "the", "to", "was", "were", "will", "with", "this", "these", "those",
  "but", "or", "not", "your", "you", "we", "our", "i", "they", "their", "them", "his", "her", "she",
]);

export interface KeywordDensityResult {
  totalWords: number;
  uniqueWords: number;
  topKeywords: string;
}

function tokenize(text: string): string[] {
  return (text.toLowerCase().match(/[a-z0-9']+/g) || []).filter((w) => w.length > 0);
}

// Computes keyword/phrase frequency and density for pasted text, entirely
// in-browser. Single-word mode excludes a basic stopword list so results
// focus on meaningful terms rather than "the", "and", "of", etc.
export function calculateKeywordDensity(text: string, phraseLength: PhraseLength): KeywordDensityResult {
  if (!text.trim()) {
    throw new Error("Please enter some text.");
  }

  const words = tokenize(text);
  if (words.length === 0) {
    throw new Error("No words found in the text.");
  }

  const n = Number(phraseLength);
  const counts = new Map<string, number>();

  for (let i = 0; i <= words.length - n; i++) {
    const phraseWords = words.slice(i, i + n);
    if (n === 1 && STOPWORDS.has(phraseWords[0])) continue;
    const phrase = phraseWords.join(" ");
    counts.set(phrase, (counts.get(phrase) ?? 0) + 1);
  }

  const totalPhrases = words.length - n + 1;
  const sorted = Array.from(counts.entries())
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

  const topKeywords =
    sorted.length > 0
      ? sorted
          .map(([phrase, count]) => `${phrase} — ${count} times (${roundTo((count / totalPhrases) * 100, 2)}%)`)
          .join("\n")
      : "No repeated phrases found at this length.";

  return {
    totalWords: words.length,
    uniqueWords: new Set(words).size,
    topKeywords,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
