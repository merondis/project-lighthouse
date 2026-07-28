// Hand-written CSV parser (state machine), handles quoted fields with
// embedded delimiters, newlines, and escaped ("") quotes, no library.
function parseCsv(text: string, delimiter: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === delimiter) {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char === "\r") {
      // Skip; paired \n (if present) handles the row break.
    } else {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((r) => !(r.length === 1 && r[0] === ""));
}

function escapeCsvField(value: unknown, delimiter: string): string {
  const str = value === null || value === undefined ? "" : String(value);
  if (str.includes(delimiter) || str.includes('"') || str.includes("\n")) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

export function convertCsvToJson(csvText: string, delimiter: string): string {
  if (!csvText.trim()) {
    throw new Error("Please enter some CSV data.");
  }

  const rows = parseCsv(csvText.trim(), delimiter);
  if (rows.length < 2) {
    throw new Error("CSV must include a header row and at least one data row.");
  }

  const headers = rows[0];
  const objects = rows.slice(1).map((r) => {
    const obj: Record<string, string> = {};
    headers.forEach((h, idx) => {
      obj[h] = r[idx] ?? "";
    });
    return obj;
  });

  return JSON.stringify(objects, null, 2);
}

export function convertJsonToCsv(jsonText: string, delimiter: string): string {
  if (!jsonText.trim()) {
    throw new Error("Please enter some JSON data.");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    throw new Error("Invalid JSON: could not parse input.");
  }

  if (!Array.isArray(parsed)) {
    throw new Error("JSON input must be an array of objects, e.g. [{...}, {...}].");
  }
  if (parsed.length === 0) {
    throw new Error("JSON array is empty.");
  }

  const headerSet = new Set<string>();
  for (const item of parsed) {
    if (typeof item !== "object" || item === null || Array.isArray(item)) {
      throw new Error("Each item in the array must be a flat JSON object.");
    }
    Object.keys(item as Record<string, unknown>).forEach((k) => headerSet.add(k));
  }
  const headers = Array.from(headerSet);

  const lines = [headers.map((h) => escapeCsvField(h, delimiter)).join(delimiter)];
  for (const item of parsed) {
    const row = headers.map((h) => escapeCsvField((item as Record<string, unknown>)[h], delimiter));
    lines.push(row.join(delimiter));
  }

  return lines.join("\n");
}
