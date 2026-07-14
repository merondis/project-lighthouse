export type Base64Action = "encode" | "decode";

export function processBase64(input: string, action: Base64Action): string {
  if (!input.trim()) {
    throw new Error("Please enter some text.");
  }

  if (action === "encode") {
    try {
      return btoa(unescape(encodeURIComponent(input)));
    } catch {
      throw new Error("Unable to encode this text.");
    }
  }

  try {
    return decodeURIComponent(escape(atob(input.trim())));
  } catch {
    throw new Error("Invalid Base64 string. Please check your input and try again.");
  }
}