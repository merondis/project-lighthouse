export type BasicOperator = "+" | "-" | "×" | "÷";

export function applyOperator(a: number, b: number, operator: BasicOperator): number {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return b === 0 ? NaN : a / b;
    default:
      return b;
  }
}
