export type UrlEncodeAction = "encode" | "decode";

export function processUrlEncoding(input: string, action: UrlEncodeAction): string {
  if (!input.trim()) {
    throw new Error("Please enter some text.");
  }

  if (action === "encode") {
    return encodeURIComponent(input);
  }

  try {
    return decodeURIComponent(input);
  } catch {
    throw new Error("Invalid URL-encoded string. Please check your input and try again.");
  }
}