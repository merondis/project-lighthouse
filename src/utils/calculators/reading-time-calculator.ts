export interface ReadingTimeResult {
  wordCount: number;
  readingTimeFormatted: string;
  readingTimeMinutesDecimal: number;
}

// Estimates reading time from word count and a reading speed (words per
// minute), a common average is around 200-238 wpm for adult silent reading.
export function calculateReadingTime(text: string, wordsPerMinute: number): ReadingTimeResult {
  if (!Number.isFinite(wordsPerMinute) || wordsPerMinute <= 0) {
    throw new Error("Please enter a reading speed greater than zero.");
  }

  const trimmed = text.trim();
  const wordCount = trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
  const totalMinutesDecimal = wordCount / wordsPerMinute;
  const totalSeconds = Math.round(totalMinutesDecimal * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const readingTimeFormatted = minutes > 0 ? `${minutes} min ${seconds} sec` : `${seconds} sec`;

  return {
    wordCount,
    readingTimeFormatted,
    readingTimeMinutesDecimal: roundTo(totalMinutesDecimal, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
