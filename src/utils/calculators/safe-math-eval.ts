// A small, safe arithmetic expression evaluator (no eval/Function usage).
// Supports + - * / ^ parentheses and common functions: sin cos tan sqrt log ln

type Token = { type: "num" | "op" | "lparen" | "rparen" | "func"; value: string };

function tokenize(expr: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const funcs = ["sin", "cos", "tan", "sqrt", "log", "ln"];

  while (i < expr.length) {
    const ch = expr[i];

    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    if (/[0-9.]/.test(ch)) {
      let num = "";
      while (i < expr.length && /[0-9.]/.test(expr[i])) {
        num += expr[i];
        i++;
      }
      tokens.push({ type: "num", value: num });
      continue;
    }
    if (ch === "(") {
      tokens.push({ type: "lparen", value: "(" });
      i++;
      continue;
    }
    if (ch === ")") {
      tokens.push({ type: "rparen", value: ")" });
      i++;
      continue;
    }
    if ("+-*/^".includes(ch)) {
      tokens.push({ type: "op", value: ch });
      i++;
      continue;
    }
    let matchedFunc = "";
    for (const f of funcs) {
      if (expr.slice(i, i + f.length).toLowerCase() === f) {
        matchedFunc = f;
        break;
      }
    }
    if (matchedFunc) {
      tokens.push({ type: "func", value: matchedFunc });
      i += matchedFunc.length;
      continue;
    }
    if (ch.toLowerCase() === "pi") {
      tokens.push({ type: "num", value: String(Math.PI) });
      i++;
      continue;
    }

    throw new Error("Unexpected character: " + ch);
  }

  return tokens;
}

const PRECEDENCE: Record<string, number> = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };

function toRPN(tokens: Token[]): Token[] {
  const output: Token[] = [];
  const opStack: Token[] = [];

  for (const token of tokens) {
    if (token.type === "num") {
      output.push(token);
    } else if (token.type === "func") {
      opStack.push(token);
    } else if (token.type === "op") {
      while (
        opStack.length > 0 &&
        opStack[opStack.length - 1].type === "op" &&
        PRECEDENCE[opStack[opStack.length - 1].value] >= PRECEDENCE[token.value]
      ) {
        output.push(opStack.pop() as Token);
      }
      opStack.push(token);
    } else if (token.type === "lparen") {
      opStack.push(token);
    } else if (token.type === "rparen") {
      while (opStack.length > 0 && opStack[opStack.length - 1].type !== "lparen") {
        output.push(opStack.pop() as Token);
      }
      opStack.pop();
      if (opStack.length > 0 && opStack[opStack.length - 1].type === "func") {
        output.push(opStack.pop() as Token);
      }
    }
  }

  while (opStack.length > 0) {
    output.push(opStack.pop() as Token);
  }

  return output;
}

function evalRPN(rpn: Token[]): number {
  const stack: number[] = [];

  for (const token of rpn) {
    if (token.type === "num") {
      stack.push(parseFloat(token.value));
    } else if (token.type === "func") {
      const a = stack.pop();
      if (a === undefined) throw new Error("Invalid expression.");
      let result: number;
      switch (token.value) {
        case "sin": result = Math.sin(a); break;
        case "cos": result = Math.cos(a); break;
        case "tan": result = Math.tan(a); break;
        case "sqrt": result = Math.sqrt(a); break;
        case "log": result = Math.log10(a); break;
        case "ln": result = Math.log(a); break;
        default: throw new Error("Unknown function.");
      }
      stack.push(result);
    } else if (token.type === "op") {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) throw new Error("Invalid expression.");
      let result: number;
      switch (token.value) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        case "^": result = Math.pow(a, b); break;
        default: throw new Error("Unknown operator.");
      }
      stack.push(result);
    }
  }

  if (stack.length !== 1) throw new Error("Invalid expression.");
  return stack[0];
}

export function evaluateExpression(expr: string): number {
  if (!expr.trim()) throw new Error("Please enter an expression.");
  const tokens = tokenize(expr);
  const rpn = toRPN(tokens);
  const result = evalRPN(rpn);
  if (!isFinite(result)) throw new Error("The result is undefined (e.g. division by zero).");
  return Math.round(result * 1000000) / 1000000;
}