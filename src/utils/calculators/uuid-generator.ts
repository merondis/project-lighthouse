export function generateUuids(count: number): string[] {
  if (!count || Number.isNaN(count) || count < 1 || count > 100) {
    throw new Error("Please enter a count between 1 and 100.");
  }

  const uuids: string[] = [];
  for (let i = 0; i < count; i++) {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      uuids.push(crypto.randomUUID());
    } else {
      uuids.push(fallbackUuid());
    }
  }
  return uuids;
}

function fallbackUuid(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}