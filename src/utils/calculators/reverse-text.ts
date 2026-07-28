export type ReverseTextMode = "characters" | "words" | "lines";

// Reverses text by character, word, or line order.
export function reverseText(text: string, mode: ReverseTextMode): string {
  if (!text) {
    throw new Error("Please enter some text.");
  }

  if (mode === "characters") {
    return [...text].reverse().join("");
  }
  if (mode === "words") {
    return text.trim().split(/\s+/).reverse().join(" ");
  }
  return text.split("\n").reverse().join("\n");
}
