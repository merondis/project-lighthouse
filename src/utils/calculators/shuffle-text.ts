export type ShuffleTextMode = "characters" | "words" | "lines";

function fisherYatesShuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Randomly shuffles text by character, word, or line, using a Fisher-Yates
// shuffle. Unlike our other text tools, this one is intentionally
// non-deterministic, running it again on the same input gives a different
// result each time.
export function shuffleText(text: string, mode: ShuffleTextMode): string {
  if (!text) {
    throw new Error("Please enter some text.");
  }

  if (mode === "characters") {
    return fisherYatesShuffle([...text]).join("");
  }
  if (mode === "words") {
    return fisherYatesShuffle(text.trim().split(/\s+/)).join(" ");
  }
  return fisherYatesShuffle(text.split("\n")).join("\n");
}
