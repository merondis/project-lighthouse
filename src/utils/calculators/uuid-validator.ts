export interface UuidValidationResult {
  isValid: string;
  version: string;
  variant: string;
}

const UUID_PATTERN = /^([0-9a-f]{8})-([0-9a-f]{4})-([1-8])([0-9a-f]{3})-([0-9a-f])([0-9a-f]{3})-([0-9a-f]{12})$/i;

// Validates a UUID string against the standard 8-4-4-4-12 hex format and
// reports its version (from the version nibble) and variant (from the
// top bits of the variant field), following RFC 4122.
export function validateUuid(input: string): UuidValidationResult {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error("Please enter a UUID.");
  }

  const match = trimmed.match(UUID_PATTERN);
  if (!match) {
    return { isValid: "Invalid", version: "N/A", variant: "N/A" };
  }

  const versionDigit = match[3];
  const variantNibble = match[5].toLowerCase();

  let variant = "Unknown/Non-standard";
  if ("89ab".includes(variantNibble)) {
    variant = "RFC 4122";
  } else if ("0123".includes(variantNibble)) {
    variant = "NCS (legacy, reserved)";
  } else if ("cd".includes(variantNibble)) {
    variant = "Microsoft (reserved)";
  }

  return {
    isValid: "Valid",
    version: `Version ${versionDigit}`,
    variant,
  };
}
