function base64UrlDecodeToString(segment: string): string {
  let base64 = segment.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) base64 += "=";
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}

export interface JwtDecodeResult {
  header: string;
  payload: string;
  signature: string;
}

// Decodes a JWT's header and payload segments (base64url + JSON.parse).
// This is a decoder only, it does not verify the signature, since that
// would require the signing secret or public key, which this tool never
// asks for or has access to.
export function decodeJwt(token: string): JwtDecodeResult {
  const trimmed = token.trim();
  if (!trimmed) {
    throw new Error("Please enter a JWT.");
  }

  const parts = trimmed.split(".");
  if (parts.length !== 3) {
    throw new Error("A JWT must have three parts separated by periods (header.payload.signature).");
  }

  let header: string;
  let payload: string;

  try {
    header = JSON.stringify(JSON.parse(base64UrlDecodeToString(parts[0])), null, 2);
  } catch {
    throw new Error("Could not decode the JWT header, it isn't valid base64url-encoded JSON.");
  }

  try {
    payload = JSON.stringify(JSON.parse(base64UrlDecodeToString(parts[1])), null, 2);
  } catch {
    throw new Error("Could not decode the JWT payload, it isn't valid base64url-encoded JSON.");
  }

  return { header, payload, signature: parts[2] };
}
