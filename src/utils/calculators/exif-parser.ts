export interface ExifTag {
  label: string;
  value: string;
}

export interface ExifResult {
  hasExif: boolean;
  tags: ExifTag[];
}

// Hand-written JPEG/EXIF/TIFF binary parser, no third-party library. Scoped
// to JPEG files (by far the most common EXIF-carrying format from cameras
// and phones), reading the IFD0 and Exif sub-IFD tag tables per the
// TIFF/EXIF specification.
const TAG_NAMES: Record<number, string> = {
  0x010e: "Image Description",
  0x010f: "Make",
  0x0110: "Model",
  0x0112: "Orientation",
  0x011a: "X Resolution",
  0x011b: "Y Resolution",
  0x0128: "Resolution Unit",
  0x0131: "Software",
  0x0132: "Date/Time",
  0x8769: "Exif IFD Pointer",
  0x8825: "GPS Info IFD Pointer",
  0x829a: "Exposure Time",
  0x829d: "F-Number",
  0x8822: "Exposure Program",
  0x8827: "ISO Speed Ratings",
  0x9003: "Date/Time Original",
  0x9004: "Date/Time Digitized",
  0x920a: "Focal Length",
  0xa002: "Image Width (EXIF)",
  0xa003: "Image Height (EXIF)",
  0xa430: "Camera Owner",
  0xa431: "Body Serial Number",
  0xa433: "Lens Make",
  0xa434: "Lens Model",
};

const ORIENTATION_LABELS: Record<number, string> = {
  1: "Normal",
  2: "Flipped horizontally",
  3: "Rotated 180°",
  4: "Flipped vertically",
  5: "Rotated 90° CW + flipped",
  6: "Rotated 90° CW",
  7: "Rotated 90° CCW + flipped",
  8: "Rotated 90° CCW",
};

const POINTER_TAG_LABELS = new Set(["Exif IFD Pointer", "GPS Info IFD Pointer"]);

function typeSize(type: number): number {
  switch (type) {
    case 1:
    case 2:
    case 6:
    case 7:
      return 1; // BYTE, ASCII, SBYTE, UNDEFINED
    case 3:
    case 8:
      return 2; // SHORT, SSHORT
    case 4:
    case 9:
    case 11:
      return 4; // LONG, SLONG, FLOAT
    case 5:
    case 10:
    case 12:
      return 8; // RATIONAL, SRATIONAL, DOUBLE
    default:
      return 1;
  }
}

function readIfdEntryValue(view: DataView, tiffStart: number, entryOffset: number, littleEndian: boolean): string {
  const type = view.getUint16(entryOffset + 2, littleEndian);
  const count = view.getUint32(entryOffset + 4, littleEndian);
  const size = typeSize(type) * count;
  const valueOffset = size <= 4 ? entryOffset + 8 : tiffStart + view.getUint32(entryOffset + 8, littleEndian);

  if (type === 2) {
    let str = "";
    for (let i = 0; i < count - 1; i++) {
      const code = view.getUint8(valueOffset + i);
      if (code === 0) break;
      str += String.fromCharCode(code);
    }
    return str.trim();
  }

  if (type === 3) {
    const vals: number[] = [];
    for (let i = 0; i < count; i++) vals.push(view.getUint16(valueOffset + i * 2, littleEndian));
    return vals.join(", ");
  }

  if (type === 4) {
    const vals: number[] = [];
    for (let i = 0; i < count; i++) vals.push(view.getUint32(valueOffset + i * 4, littleEndian));
    return vals.join(", ");
  }

  if (type === 5 || type === 10) {
    const vals: string[] = [];
    for (let i = 0; i < count; i++) {
      const num = type === 5 ? view.getUint32(valueOffset + i * 8, littleEndian) : view.getInt32(valueOffset + i * 8, littleEndian);
      const den = type === 5 ? view.getUint32(valueOffset + i * 8 + 4, littleEndian) : view.getInt32(valueOffset + i * 8 + 4, littleEndian);
      if (den === 0) {
        vals.push("0");
        continue;
      }
      const value = num / den;
      vals.push(Number.isInteger(value) ? String(value) : value.toFixed(4));
    }
    return vals.join(", ");
  }

  return String(view.getUint32(entryOffset + 8, littleEndian));
}

function parseIfd(
  view: DataView,
  tiffStart: number,
  ifdOffset: number,
  littleEndian: boolean
): { tags: ExifTag[]; entries: Map<number, number> } {
  const entryCount = view.getUint16(tiffStart + ifdOffset, littleEndian);
  const tags: ExifTag[] = [];
  const entries = new Map<number, number>();

  for (let i = 0; i < entryCount; i++) {
    const entryOffset = tiffStart + ifdOffset + 2 + i * 12;
    const tagId = view.getUint16(entryOffset, littleEndian);
    entries.set(tagId, entryOffset);

    const name = TAG_NAMES[tagId];
    if (!name) continue;

    let value = readIfdEntryValue(view, tiffStart, entryOffset, littleEndian);

    if (tagId === 0x0112) value = ORIENTATION_LABELS[Number(value)] ?? value;
    if (tagId === 0x829a) value = `${value} s`;
    if (tagId === 0x829d) value = `f/${value}`;
    if (tagId === 0x920a) value = `${value} mm`;

    tags.push({ label: name, value });
  }

  return { tags, entries };
}

export function parseExif(buffer: ArrayBuffer): ExifResult {
  const view = new DataView(buffer);

  if (view.byteLength < 4 || view.getUint16(0, false) !== 0xffd8) {
    throw new Error("This doesn't look like a JPEG file. EXIF Viewer currently supports JPEG files only.");
  }

  let offset = 2;
  let exifSegmentOffset = -1;

  while (offset < view.byteLength - 4) {
    const marker = view.getUint16(offset, false);
    if ((marker & 0xff00) !== 0xff00) break;
    if (marker === 0xffd9 || marker === 0xffda) break;
    const segmentLength = view.getUint16(offset + 2, false);

    if (marker === 0xffe1) {
      const candidate = offset + 4;
      if (candidate + 6 <= view.byteLength) {
        const id = String.fromCharCode(
          view.getUint8(candidate),
          view.getUint8(candidate + 1),
          view.getUint8(candidate + 2),
          view.getUint8(candidate + 3)
        );
        if (id === "Exif") {
          exifSegmentOffset = candidate;
          break;
        }
      }
    }
    offset += 2 + segmentLength;
  }

  if (exifSegmentOffset === -1) {
    return { hasExif: false, tags: [] };
  }

  const tiffStart = exifSegmentOffset + 6;
  const byteOrderMark = view.getUint16(tiffStart, false);
  if (byteOrderMark !== 0x4949 && byteOrderMark !== 0x4d4d) {
    return { hasExif: false, tags: [] };
  }
  const littleEndian = byteOrderMark === 0x4949;

  const firstIfdOffset = view.getUint32(tiffStart + 4, littleEndian);
  const { tags: ifd0Tags, entries: ifd0Entries } = parseIfd(view, tiffStart, firstIfdOffset, littleEndian);

  const allTags = [...ifd0Tags];

  const exifIfdEntryOffset = ifd0Entries.get(0x8769);
  if (exifIfdEntryOffset !== undefined) {
    const exifIfdOffset = view.getUint32(exifIfdEntryOffset + 8, littleEndian);
    const { tags: exifTags } = parseIfd(view, tiffStart, exifIfdOffset, littleEndian);
    allTags.push(...exifTags);
  }

  const displayTags = allTags.filter((t) => !POINTER_TAG_LABELS.has(t.label));

  return { hasExif: displayTags.length > 0, tags: displayTags };
}
