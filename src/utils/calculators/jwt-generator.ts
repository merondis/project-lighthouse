import { sha256Bytes } from "@/utils/calculators/hash-generator";

// Base64url encode raw bytes (no padding), the encoding JWTs use for each
// segment.
function base64UrlEncodeBytes(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlEncodeString(str: string): string {
  return base64UrlEncodeBytes(new TextEncoder().encode(str));
}

// HMAC-SHA256 built directly on our verified sha256Bytes core, following
// RFC 2104 (block size 64 bytes for SHA-256). Verified against Node's
// crypto.createHmac('sha256', ...) across empty key/message, a key longer
// than the block size, and JWT-shaped input.
function hmacSha256(keyBytes: Uint8Array, msgBytes: Uint8Array): Uint8Array {
  const blockSize = 64;
  let key = keyBytes;
  if (key.length > blockSize) key = sha256Bytes(key);

  const keyPadded = new Uint8Array(blockSize);
  keyPadded.set(key);

  const ipad = new Uint8Array(blockSize);
  const opad = new Uint8Array(blockSize);
  for (let i = 0; i < blockSize; i++) {
    ipad[i] = keyPadded[i] ^ 0x36;
    opad[i] = keyPadded[i] ^ 0x5c;
  }

  const innerInput = new Uint8Array(ipad.length + msgBytes.length);
  innerInput.set(ipad);
  innerInput.set(msgBytes, ipad.length);
  const inner = sha256Bytes(innerInput);

  const outerInput = new Uint8Array(opad.length + inner.length);
  outerInput.set(opad);
  outerInput.set(inner, opad.length);
  return sha256Bytes(outerInput);
}

export interface JwtGeneratorResult {
  token: string;
  header: string;
  payload: string;
}

// Generates an HS256-signed JWT from a header/payload JSON and a secret,
// using our own SHA-256/HMAC implementation, no crypto library involved.
export function generateJwt(payloadJson: string, secret: string): JwtGeneratorResult {
  if (!payloadJson.trim()) {
    throw new Error("Please enter a JSON payload.");
  }
  if (!secret) {
    throw new Error("Please enter a secret key.");
  }

  let payloadObj: unknown;
  try {
    payloadObj = JSON.parse(payloadJson);
  } catch {
    throw new Error("Payload must be valid JSON.");
  }
  if (typeof payloadObj !== "object" || payloadObj === null) {
    throw new Error("Payload must be a JSON object.");
  }

  const header = { alg: "HS256", typ: "JWT" };
  const headerSegment = base64UrlEncodeString(JSON.stringify(header));
  const payloadSegment = base64UrlEncodeString(JSON.stringify(payloadObj));

  const signingInput = `${headerSegment}.${payloadSegment}`;
  const signatureBytes = hmacSha256(new TextEncoder().encode(secret), new TextEncoder().encode(signingInput));
  const signatureSegment = base64UrlEncodeBytes(signatureBytes);

  return {
    token: `${signingInput}.${signatureSegment}`,
    header: JSON.stringify(header, null, 2),
    payload: JSON.stringify(payloadObj, null, 2),
  };
}
