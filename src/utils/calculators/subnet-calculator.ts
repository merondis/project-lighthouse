export interface SubnetResult {
  networkAddress: string;
  broadcastAddress: string;
  firstHost: string;
  lastHost: string;
  usableHosts: string;
  subnetMaskDotted: string;
  cidr: string;
  wildcardMask: string;
}

function parseIp(ip: string): number {
  const parts = ip.trim().split(".");
  if (parts.length !== 4) {
    throw new Error("Please enter a valid IPv4 address, e.g. 192.168.1.10.");
  }
  let value = 0;
  for (const part of parts) {
    if (!/^\d+$/.test(part)) {
      throw new Error("Please enter a valid IPv4 address, e.g. 192.168.1.10.");
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

function parseCidrFromMaskInput(input: string): number {
  const trimmed = input.trim().replace(/^\//, "");

  if (!trimmed) {
    throw new Error("Please enter a subnet mask (e.g. 255.255.255.0) or CIDR prefix (e.g. /24 or 24).");
  }

  if (!trimmed.includes(".")) {
    if (!/^\d+$/.test(trimmed)) {
      throw new Error("Please enter a subnet mask (e.g. 255.255.255.0) or CIDR prefix (e.g. /24 or 24).");
    }
    const cidr = Number(trimmed);
    if (cidr < 0 || cidr > 32) {
      throw new Error("CIDR prefix must be between 0 and 32.");
    }
    return cidr;
  }

  const maskValue = parseIp(trimmed);
  let cidr = 0;
  let sawZero = false;
  for (let i = 31; i >= 0; i--) {
    const bit = (maskValue >>> i) & 1;
    if (bit === 1) {
      if (sawZero) {
        throw new Error("Please enter a valid subnet mask, e.g. 255.255.255.0.");
      }
      cidr++;
    } else {
      sawZero = true;
    }
  }
  return cidr;
}

export function calculateSubnet(ipInput: string, maskInput: string): SubnetResult {
  if (!ipInput.trim() || !maskInput.trim()) {
    throw new Error("Please enter both an IP address and a subnet mask or CIDR prefix.");
  }

  const ip = parseIp(ipInput);
  const cidr = parseCidrFromMaskInput(maskInput);

  const maskValue = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
  const wildcardValue = ~maskValue >>> 0;

  const networkValue = (ip & maskValue) >>> 0;
  const broadcastValue = (networkValue | wildcardValue) >>> 0;

  const totalAddresses = Math.pow(2, 32 - cidr);

  let usableHosts: number;
  let firstHostValue: number;
  let lastHostValue: number;

  if (cidr === 32) {
    usableHosts = 1;
    firstHostValue = networkValue;
    lastHostValue = networkValue;
  } else if (cidr === 31) {
    usableHosts = 2;
    firstHostValue = networkValue;
    lastHostValue = broadcastValue;
  } else {
    usableHosts = totalAddresses - 2;
    firstHostValue = networkValue + 1;
    lastHostValue = broadcastValue - 1;
  }

  return {
    networkAddress: formatIp(networkValue),
    broadcastAddress: formatIp(broadcastValue),
    firstHost: formatIp(firstHostValue >>> 0),
    lastHost: formatIp(lastHostValue >>> 0),
    usableHosts: usableHosts.toLocaleString(),
    subnetMaskDotted: formatIp(maskValue),
    cidr: `/${cidr}`,
    wildcardMask: formatIp(wildcardValue),
  };
}
