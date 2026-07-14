export type JsonAction = "format" | "minify";

export interface JsonFormatResult {
  output: string;
  isValid: string;
}

export function formatJson(input: string, action: JsonAction): JsonFormatResult {
  if (!input.trim()) {
    throw new Error("Please enter some JSON to format.");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(input);
  } catch {
    throw new Error("Invalid JSON. Please check for syntax errors like missing commas or quotes.");
  }

  const output = action === "minify" ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2);

  return { output, isValid: "Valid JSON" };
}