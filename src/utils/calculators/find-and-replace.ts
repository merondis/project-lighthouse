export interface FindReplaceOptions {
  caseSensitive: boolean;
  useRegex: boolean;
}

export function findAndReplace(
  text: string,
  findValue: string,
  replaceValue: string,
  options: FindReplaceOptions
): string {
  if (!text) {
    throw new Error("Please enter some text.");
  }
  if (!findValue) {
    throw new Error("Please enter a value to find.");
  }

  if (options.useRegex) {
    try {
      const flags = options.caseSensitive ? "g" : "gi";
      const regex = new RegExp(findValue, flags);
      return text.replace(regex, replaceValue);
    } catch {
      throw new Error("Invalid regular expression pattern.");
    }
  }

  const escaped = findValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const flags = options.caseSensitive ? "g" : "gi";
  const regex = new RegExp(escaped, flags);
  return text.replace(regex, replaceValue);
}