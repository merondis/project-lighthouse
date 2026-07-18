export interface EmailValidationResult {
  valid: string;
  reason: string;
  suggestion: string;
}

const COMMON_DOMAIN_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gnail.com": "gmail.com",
  "yahooo.com": "yahoo.com",
  "yaho.com": "yahoo.com",
  "yahoo.co": "yahoo.com",
  "hotmial.com": "hotmail.com",
  "hotmil.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outllok.com": "outlook.com",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmailFormat(email: string): EmailValidationResult {
  const trimmed = email.trim();

  if (!trimmed) {
    throw new Error("Please enter an email address.");
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return {
      valid: "Invalid",
      reason: "This does not appear to be a validly formatted email address.",
      suggestion: "-",
    };
  }

  const domain = (trimmed.split("@")[1] || "").toLowerCase();
  const suggestedDomain = COMMON_DOMAIN_TYPOS[domain];

  return {
    valid: "Valid Format",
    reason: suggestedDomain
      ? "The format is valid, but the domain looks like a possible typo."
      : "The email address format is valid.",
    suggestion: suggestedDomain ? trimmed.split("@")[0] + "@" + suggestedDomain : "-",
  };
}