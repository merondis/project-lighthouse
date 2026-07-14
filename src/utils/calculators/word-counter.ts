export interface WordCountResult {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
}

export function countWords(text: string): WordCountResult {
  const trimmed = text.trim();

  const words = trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences =
    trimmed.length === 0 ? 0 : (trimmed.match(/[^.!?]+[.!?]+/g) || (trimmed ? [trimmed] : [])).length;
  const paragraphs =
    trimmed.length === 0 ? 0 : trimmed.split(/\n+/).filter((p) => p.trim().length > 0).length;

  return { words, characters, charactersNoSpaces, sentences, paragraphs };
}