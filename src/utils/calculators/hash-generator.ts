// Pure, dependency-free implementations of MD5, SHA-1 and SHA-256, verified
// against Node's built-in crypto module across empty input, block-boundary
// lengths (55/56/63/64/65/1000 bytes) and unicode input before being wired
// up here. No third-party crypto library involved.

function rotl32(x: number, c: number): number {
  return (x << c) | (x >>> (32 - c));
}

function rotr32(x: number, n: number): number {
  return (x >>> n) | (x << (32 - n));
}

function bytesFromUtf8(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

function bytesToHex(bytes: Uint8Array | number[]): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Appends a 64-bit bit-length to the padded message, using plain number
// arithmetic (no BigInt) since JS numbers are exact up to 2^53, far beyond
// any realistic text input a browser tool would hash. Avoids BigInt
// literals, which aren't available at this project's ES2017 build target.
function pushLength64BigEndian(bytes: number[], bitLength: number): void {
  const high = Math.floor(bitLength / 0x100000000);
  const low = bitLength >>> 0;
  for (let i = 3; i >= 0; i--) bytes.push((high >>> (8 * i)) & 0xff);
  for (let i = 3; i >= 0; i--) bytes.push((low >>> (8 * i)) & 0xff);
}

function pushLength64LittleEndian(bytes: number[], bitLength: number): void {
  const high = Math.floor(bitLength / 0x100000000);
  const low = bitLength >>> 0;
  for (let i = 0; i < 4; i++) bytes.push((low >>> (8 * i)) & 0xff);
  for (let i = 0; i < 4; i++) bytes.push((high >>> (8 * i)) & 0xff);
}

// ---------------- MD5 ----------------
const MD5_K: number[] = (() => {
  const k: number[] = [];
  for (let i = 0; i < 64; i++) {
    k.push(Math.floor(Math.abs(Math.sin(i + 1)) * 2 ** 32) >>> 0);
  }
  return k;
})();

const MD5_S = [
  7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
  4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15,
  21,
];

export function md5Hex(input: string): string {
  let a0 = 0x67452301,
    b0 = 0xefcdab89,
    c0 = 0x98badcfe,
    d0 = 0x10325476;

  const msg = bytesFromUtf8(input);
  const padded: number[] = Array.from(msg);
  padded.push(0x80);
  while (padded.length % 64 !== 56) padded.push(0);
  pushLength64LittleEndian(padded, msg.length * 8);

  for (let chunkStart = 0; chunkStart < padded.length; chunkStart += 64) {
    const M = new Uint32Array(16);
    for (let i = 0; i < 16; i++) {
      M[i] =
        padded[chunkStart + i * 4] |
        (padded[chunkStart + i * 4 + 1] << 8) |
        (padded[chunkStart + i * 4 + 2] << 16) |
        (padded[chunkStart + i * 4 + 3] << 24);
    }
    let A = a0,
      B = b0,
      C = c0,
      D = d0;
    for (let i = 0; i < 64; i++) {
      let F: number, g: number;
      if (i < 16) {
        F = (B & C) | (~B & D);
        g = i;
      } else if (i < 32) {
        F = (D & B) | (~D & C);
        g = (5 * i + 1) % 16;
      } else if (i < 48) {
        F = B ^ C ^ D;
        g = (3 * i + 5) % 16;
      } else {
        F = C ^ (B | ~D);
        g = (7 * i) % 16;
      }
      F = (F + A + MD5_K[i] + M[g]) >>> 0;
      A = D;
      D = C;
      C = B;
      B = (B + rotl32(F, MD5_S[i])) >>> 0;
    }
    a0 = (a0 + A) >>> 0;
    b0 = (b0 + B) >>> 0;
    c0 = (c0 + C) >>> 0;
    d0 = (d0 + D) >>> 0;
  }

  function toHexLE(n: number): string {
    const bytes = [n & 0xff, (n >>> 8) & 0xff, (n >>> 16) & 0xff, (n >>> 24) & 0xff];
    return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return toHexLE(a0) + toHexLE(b0) + toHexLE(c0) + toHexLE(d0);
}

// ---------------- SHA-1 ----------------
export function sha1Hex(input: string): string {
  const msg = bytesFromUtf8(input);
  const bytes: number[] = Array.from(msg);
  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);
  pushLength64BigEndian(bytes, msg.length * 8);

  let h0 = 0x67452301,
    h1 = 0xefcdab89,
    h2 = 0x98badcfe,
    h3 = 0x10325476,
    h4 = 0xc3d2e1f0;

  for (let chunkStart = 0; chunkStart < bytes.length; chunkStart += 64) {
    const w = new Uint32Array(80);
    for (let i = 0; i < 16; i++) {
      w[i] =
        ((bytes[chunkStart + i * 4] << 24) |
          (bytes[chunkStart + i * 4 + 1] << 16) |
          (bytes[chunkStart + i * 4 + 2] << 8) |
          bytes[chunkStart + i * 4 + 3]) >>>
        0;
    }
    for (let i = 16; i < 80; i++) {
      w[i] = rotl32(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16], 1) >>> 0;
    }
    let a = h0,
      b = h1,
      c = h2,
      d = h3,
      e = h4;
    for (let i = 0; i < 80; i++) {
      let f: number, k: number;
      if (i < 20) {
        f = (b & c) | (~b & d);
        k = 0x5a827999;
      } else if (i < 40) {
        f = b ^ c ^ d;
        k = 0x6ed9eba1;
      } else if (i < 60) {
        f = (b & c) | (b & d) | (c & d);
        k = 0x8f1bbcdc;
      } else {
        f = b ^ c ^ d;
        k = 0xca62c1d6;
      }
      const temp = (rotl32(a, 5) + f + e + k + w[i]) >>> 0;
      e = d;
      d = c;
      c = rotl32(b, 30) >>> 0;
      b = a;
      a = temp;
    }
    h0 = (h0 + a) >>> 0;
    h1 = (h1 + b) >>> 0;
    h2 = (h2 + c) >>> 0;
    h3 = (h3 + d) >>> 0;
    h4 = (h4 + e) >>> 0;
  }
  return [h0, h1, h2, h3, h4].map((h) => h.toString(16).padStart(8, "0")).join("");
}

// ---------------- SHA-256 ----------------
const SHA256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98,
  0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
  0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8,
  0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
  0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
  0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7,
  0xc67178f2,
];

// Byte-level SHA-256 core, returns raw digest bytes. Exposed separately from
// sha256Hex so the JWT Generator can build HMAC-SHA256 on top of it without
// round-tripping through a UTF-8 string (HMAC operates on raw key/message
// bytes, which aren't guaranteed to be valid UTF-8 after XOR-padding).
export function sha256Bytes(bytes: Uint8Array): Uint8Array {
  const padded: number[] = Array.from(bytes);
  padded.push(0x80);
  while (padded.length % 64 !== 56) padded.push(0);
  pushLength64BigEndian(padded, bytes.length * 8);

  const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];

  for (let chunkStart = 0; chunkStart < padded.length; chunkStart += 64) {
    const w = new Uint32Array(64);
    for (let i = 0; i < 16; i++) {
      w[i] =
        ((padded[chunkStart + i * 4] << 24) |
          (padded[chunkStart + i * 4 + 1] << 16) |
          (padded[chunkStart + i * 4 + 2] << 8) |
          padded[chunkStart + i * 4 + 3]) >>>
        0;
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rotr32(w[i - 15], 7) ^ rotr32(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rotr32(w[i - 2], 17) ^ rotr32(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, hh] = h;
    for (let i = 0; i < 64; i++) {
      const S1 = rotr32(e, 6) ^ rotr32(e, 11) ^ rotr32(e, 25);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (hh + S1 + ch + SHA256_K[i] + w[i]) >>> 0;
      const S0 = rotr32(a, 2) ^ rotr32(a, 13) ^ rotr32(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) >>> 0;
      hh = g;
      g = f;
      f = e;
      e = (d + temp1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) >>> 0;
    }
    h[0] = (h[0] + a) >>> 0;
    h[1] = (h[1] + b) >>> 0;
    h[2] = (h[2] + c) >>> 0;
    h[3] = (h[3] + d) >>> 0;
    h[4] = (h[4] + e) >>> 0;
    h[5] = (h[5] + f) >>> 0;
    h[6] = (h[6] + g) >>> 0;
    h[7] = (h[7] + hh) >>> 0;
  }

  const out = new Uint8Array(32);
  for (let i = 0; i < 8; i++) {
    out[i * 4] = (h[i] >>> 24) & 0xff;
    out[i * 4 + 1] = (h[i] >>> 16) & 0xff;
    out[i * 4 + 2] = (h[i] >>> 8) & 0xff;
    out[i * 4 + 3] = h[i] & 0xff;
  }
  return out;
}

export function sha256Hex(input: string): string {
  return bytesToHex(sha256Bytes(bytesFromUtf8(input)));
}

export type HashAlgorithm = "md5" | "sha1" | "sha256";

export interface HashGeneratorResult {
  md5: string;
  sha1: string;
  sha256: string;
}

export function calculateHashes(text: string): HashGeneratorResult {
  if (!text) {
    throw new Error("Please enter some text.");
  }
  return {
    md5: md5Hex(text),
    sha1: sha1Hex(text),
    sha256: sha256Hex(text),
  };
}
