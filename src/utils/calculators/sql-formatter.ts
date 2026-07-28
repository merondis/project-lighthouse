const MAJOR_KEYWORDS = [
  "SELECT",
  "FROM",
  "WHERE",
  "GROUP BY",
  "ORDER BY",
  "HAVING",
  "LIMIT",
  "OFFSET",
  "UNION ALL",
  "UNION",
  "INSERT INTO",
  "VALUES",
  "UPDATE",
  "SET",
  "DELETE FROM",
];

const JOIN_KEYWORDS = ["LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN", "LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "CROSS JOIN", "JOIN"];

const CLAUSE_KEYWORDS = [...MAJOR_KEYWORDS, ...JOIN_KEYWORDS].sort((a, b) => b.length - a.length);

// Heuristic, keyword-based SQL formatter, not a full SQL parser. It breaks
// lines before major clause keywords and indents AND/OR conditions, which
// covers typical single-statement queries well but won't perfectly handle
// deeply nested subqueries or vendor-specific syntax the way a real SQL
// parser would.
export function formatSql(sql: string): string {
  if (!sql.trim()) {
    throw new Error("Please enter a SQL query.");
  }

  let formatted = sql.replace(/\s+/g, " ").trim();

  for (const kw of CLAUSE_KEYWORDS) {
    const pattern = kw.replace(/ /g, "\\s+");
    const regex = new RegExp(`\\s*\\b${pattern}\\b`, "gi");
    formatted = formatted.replace(regex, (match) => `\n${match.trim().toUpperCase()}`);
  }

  formatted = formatted.replace(/\s+\b(AND|OR)\b/gi, (match) => `\n  ${match.trim().toUpperCase()}`);

  const lines = formatted
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  return lines.join("\n");
}
