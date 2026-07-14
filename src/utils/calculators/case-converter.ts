export type CaseMode = "upper" | "lower" | "title" | "sentence";

export function convertCase(text: string, mode: CaseMode): string {
  switch (mode) {
    case "upper":
      return text.toUpperCase();
    case "lower":
      return text.toLowerCase();
    case "title":
      return text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    case "sentence": {
      const lower = text.toLowerCase();
      return lower.replace(/(^\s*\w|[.!?]\s*\w)/g, (match) => match.toUpperCase());
    }
    default:
      throw new Error("Unknown case conversion type.");
  }
}