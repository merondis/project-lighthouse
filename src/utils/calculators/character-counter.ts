export interface CharacterCountResult {
  totalCharacters: number;
  charactersNoSpaces: number;
  remainingCharacters: number;
  percentUsed: number;
  overLimit: string;
}

// Counts characters and tracks usage against a target character limit (like
// a tweet, SMS, or meta description limit). Distinct from our Word Counter,
// which reports overall word/sentence/paragraph statistics without any
// limit-tracking, this tool is purpose-built for the "how many characters
// do I have left" use case.
export function calculateCharacterCount(text: string, characterLimit: number): CharacterCountResult {
  if (!Number.isFinite(characterLimit) || characterLimit <= 0) {
    throw new Error("Please enter a character limit greater than zero.");
  }

  const totalCharacters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const remainingCharacters = characterLimit - totalCharacters;
  const percentUsed = (totalCharacters / characterLimit) * 100;
  const overLimit = totalCharacters > characterLimit ? "Yes" : "No";

  return {
    totalCharacters,
    charactersNoSpaces,
    remainingCharacters,
    percentUsed: roundTo(percentUsed, 1),
    overLimit,
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
