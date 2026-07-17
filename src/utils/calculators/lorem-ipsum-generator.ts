const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "eu", "fugiat", "nulla", "pariatur", "excepteur",
  "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui",
  "officia", "deserunt", "mollit", "anim", "id", "est", "laborum",
];

export type LoremUnit = "words" | "sentences" | "paragraphs";

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function randomWord(): string {
  return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
}

function generateSentence(): string {
  const length = 6 + Math.floor(Math.random() * 10);
  const words = Array.from({ length }, () => randomWord());
  words[0] = capitalize(words[0]);
  return words.join(" ") + ".";
}

function generateParagraph(): string {
  const sentenceCount = 3 + Math.floor(Math.random() * 4);
  return Array.from({ length: sentenceCount }, () => generateSentence()).join(" ");
}

export function generateLoremIpsum(count: number, unit: LoremUnit): string {
  if (!count || Number.isNaN(count) || count < 1 || count > 50) {
    throw new Error("Please enter a count between 1 and 50.");
  }

  if (unit === "words") {
    const words = Array.from({ length: count }, () => randomWord());
    words[0] = capitalize(words[0]);
    return words.join(" ") + ".";
  }

  if (unit === "sentences") {
    return Array.from({ length: count }, () => generateSentence()).join(" ");
  }

  return Array.from({ length: count }, () => generateParagraph()).join("\n\n");
}