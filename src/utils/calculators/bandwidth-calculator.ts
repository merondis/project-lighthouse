export type FileSizeUnit = "KB" | "MB" | "GB" | "TB";
export type SpeedUnit = "Kbps" | "Mbps" | "Gbps" | "MBps";

const FILE_SIZE_TO_BITS: Record<FileSizeUnit, number> = {
  KB: 8 * 1000,
  MB: 8 * 1000 * 1000,
  GB: 8 * 1000 * 1000 * 1000,
  TB: 8 * 1000 * 1000 * 1000 * 1000,
};

const SPEED_TO_BITS_PER_SECOND: Record<SpeedUnit, number> = {
  Kbps: 1000,
  Mbps: 1000 * 1000,
  Gbps: 1000 * 1000 * 1000,
  MBps: 8 * 1000 * 1000,
};

export interface BandwidthResult {
  transferTimeSeconds: number;
  formattedTime: string;
}

function formatSeconds(totalSeconds: number): string {
  if (totalSeconds < 1) {
    return Math.round(totalSeconds * 1000) + " ms";
  }
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.round(totalSeconds % 60);

  const parts: string[] = [];
  if (days > 0) parts.push(days + "d");
  if (hours > 0) parts.push(hours + "h");
  if (minutes > 0) parts.push(minutes + "m");
  if (seconds > 0 || parts.length === 0) parts.push(seconds + "s");

  return parts.join(" ");
}

export function calculateBandwidth(
  fileSize: number,
  fileSizeUnit: FileSizeUnit,
  connectionSpeed: number,
  speedUnit: SpeedUnit
): BandwidthResult {
  if (!Number.isFinite(fileSize) || fileSize <= 0) {
    throw new Error("Please enter a valid, positive file size.");
  }
  if (!Number.isFinite(connectionSpeed) || connectionSpeed <= 0) {
    throw new Error("Please enter a valid, positive connection speed.");
  }

  const totalBits = fileSize * FILE_SIZE_TO_BITS[fileSizeUnit];
  const bitsPerSecond = connectionSpeed * SPEED_TO_BITS_PER_SECOND[speedUnit];

  const transferTimeSeconds = totalBits / bitsPerSecond;

  return {
    transferTimeSeconds: Math.round(transferTimeSeconds * 1000) / 1000,
    formattedTime: formatSeconds(transferTimeSeconds),
  };
}
