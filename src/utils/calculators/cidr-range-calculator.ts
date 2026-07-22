export interface CidrRangeResult {
  firstAddress: string;
  lastAddress: string;
  totalAddresses: string;
  subnetMaskDotted: string;
}

function parseIp(ip: string): number {
  const parts = ip.trim().split(".");
  if (parts.length !== 4) {
    throw new Error("Please enter a valid IPv4 address in the CIDR block, e.g. 192.168.1.0/24.");
  }
  let value = 0;
  for (const part of parts) {
    if (!/^\d+$/.test(part)) {
      throw new Error("Please enter a valid IPv4 address in the CIDR block, e.g. 192.168.1.0/24.");
    }
    const octet = Number(part);
    if (octet < 0 || octet > 255) {
      throw new Error("Each part of the IP address must be between 0 and 255.");
    }
    value = value * 256 + octet;
  }
  return value >>> 0;
}

function formatIp(value: number): string {
  return [(value >>> 24) & 255, (value >>> 16) & 255, (value >>> 8) & 255, value & 255].join(".");
}

export function calculateCidrRange(cidrInput: string): CidrRangeResult {
  const trimmed = cidrInput.trim();
  const parts = trimmed.split("/");
  if (parts.length !== 2) {
    throw new Error("Please enter a CIDR block, e.g. 192.168.1.0/24.");
  }

  const [ipPart, cidrPart] = parts;
  const ip = parseIp(ipPart);

  if (!/^\d+$/.test(cidrPart.trim())) {
    throw new Error("The CIDR prefix must be a number between 0 and 32, e.g. /24.");
  }
  const cidr = Number(cidrPart.trim());
  if (cidr < 0 || cidr > 32) {
    throw new Error("The CIDR prefix must be between 0 and 32.");
  }

  const maskValue = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
  const networkValue = (ip & maskValue) >>> 0;
  const broadcastValue = (networkValue | (~maskValue >>> 0)) >>> 0;
  const totalAddresses = Math.pow(2, 32 - cidr);

  return {
    firstAddress: formatIp(networkValue),
    lastAddress: formatIp(broadcastValue),
    totalAddresses: totalAddresses.toLocaleString(),
    subnetMaskDotted: formatIp(maskValue),
  };
}
