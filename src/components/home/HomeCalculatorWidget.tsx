"use client";

import { useState } from "react";
import { applyOperator, BasicOperator } from "@/utils/calculators/basic-calculator";

const MAX_DISPLAY_LENGTH = 16;

function formatForDisplay(value: number): string {
  if (Number.isNaN(value)) return "Error";
  if (!Number.isFinite(value)) return "Error";
  const str = String(value);
  return str.length > MAX_DISPLAY_LENGTH ? value.toPrecision(10) : str;
}

export function HomeCalculatorWidget() {
  const [display, setDisplay] = useState("0");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [pendingOperator, setPendingOperator] = useState<BasicOperator | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [memory, setMemory] = useState(0);

  function inputDigit(digit: string) {
    if (display === "Error" || waitingForNewValue) {
      setDisplay(digit);
      setWaitingForNewValue(false);
      return;
    }
    if (display === "0") {
      setDisplay(digit);
      return;
    }
    if (display.replace("-", "").length >= MAX_DISPLAY_LENGTH) return;
    setDisplay(display + digit);
  }

  function inputDecimal() {
    if (display === "Error" || waitingForNewValue) {
      setDisplay("0.");
      setWaitingForNewValue(false);
      return;
    }
    if (!display.includes(".")) setDisplay(display + ".");
  }

  function clearAll() {
    setDisplay("0");
    setStoredValue(null);
    setPendingOperator(null);
    setWaitingForNewValue(false);
  }

  function backspace() {
    if (display === "Error" || waitingForNewValue) {
      setDisplay("0");
      return;
    }
    const next = display.slice(0, -1);
    setDisplay(next === "" || next === "-" ? "0" : next);
  }

  function toggleSign() {
    if (display === "Error") return;
    if (display === "0") return;
    setDisplay(display.startsWith("-") ? display.slice(1) : "-" + display);
  }

  function inputPercent() {
    if (display === "Error") return;
    const value = parseFloat(display) / 100;
    setDisplay(formatForDisplay(value));
  }

  function handleOperator(operator: BasicOperator) {
    if (display === "Error") return;
    const inputValue = parseFloat(display);

    if (storedValue !== null && pendingOperator && !waitingForNewValue) {
      const result = applyOperator(storedValue, inputValue, pendingOperator);
      setDisplay(formatForDisplay(result));
      setStoredValue(Number.isFinite(result) ? result : null);
    } else {
      setStoredValue(inputValue);
    }

    setPendingOperator(operator);
    setWaitingForNewValue(true);
  }

  function handleEquals() {
    if (display === "Error" || storedValue === null || !pendingOperator) return;
    const inputValue = parseFloat(display);
    const result = applyOperator(storedValue, inputValue, pendingOperator);
    setDisplay(formatForDisplay(result));
    setStoredValue(null);
    setPendingOperator(null);
    setWaitingForNewValue(true);
  }

  function memoryClear() {
    setMemory(0);
  }

  function memoryRecall() {
    setDisplay(formatForDisplay(memory));
    setWaitingForNewValue(true);
  }

  function memoryAdd() {
    if (display === "Error") return;
    setMemory(memory + parseFloat(display));
    setWaitingForNewValue(true);
  }

  function memorySubtract() {
    if (display === "Error") return;
    setMemory(memory - parseFloat(display));
    setWaitingForNewValue(true);
  }

  const opBtn =
    "rounded-lg border border-white/10 bg-brand-primary/10 py-3 text-base font-semibold text-brand-accent hover:border-brand-accent";
  const digitBtn =
    "rounded-lg border border-white/10 bg-brand-bg py-3 text-base font-medium text-white hover:border-brand-accent hover:text-brand-accent";
  const memBtn =
    "rounded-lg border border-white/5 bg-transparent py-2 text-xs font-semibold text-brand-secondary hover:border-brand-accent hover:text-brand-accent";

  return (
    <div className="mx-auto max-w-sm rounded-xl border border-white/5 bg-brand-card p-4 sm:p-6">
      <div className="mb-3 grid grid-cols-4 gap-2">
        <button type="button" onClick={memoryClear} className={memBtn}>
          MC
        </button>
        <button type="button" onClick={memoryRecall} className={memBtn}>
          MR
        </button>
        <button type="button" onClick={memoryAdd} className={memBtn}>
          M+
        </button>
        <button type="button" onClick={memorySubtract} className={memBtn}>
          M-
        </button>
      </div>

      <div className="mb-4 flex items-center justify-between rounded-lg bg-brand-bg px-4 py-4">
        {memory !== 0 ? <span className="text-xs font-semibold text-brand-secondary">M</span> : <span />}
        <span className="truncate text-right text-3xl font-semibold text-white">{display}</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <button type="button" onClick={clearAll} className={opBtn}>
          AC
        </button>
        <button type="button" onClick={toggleSign} className={opBtn}>
          ±
        </button>
        <button type="button" onClick={inputPercent} className={opBtn}>
          %
        </button>
        <button type="button" onClick={() => handleOperator("÷")} className={opBtn}>
          ÷
        </button>

        <button type="button" onClick={() => inputDigit("7")} className={digitBtn}>
          7
        </button>
        <button type="button" onClick={() => inputDigit("8")} className={digitBtn}>
          8
        </button>
        <button type="button" onClick={() => inputDigit("9")} className={digitBtn}>
          9
        </button>
        <button type="button" onClick={() => handleOperator("×")} className={opBtn}>
          ×
        </button>

        <button type="button" onClick={() => inputDigit("4")} className={digitBtn}>
          4
        </button>
        <button type="button" onClick={() => inputDigit("5")} className={digitBtn}>
          5
        </button>
        <button type="button" onClick={() => inputDigit("6")} className={digitBtn}>
          6
        </button>
        <button type="button" onClick={() => handleOperator("-")} className={opBtn}>
          −
        </button>

        <button type="button" onClick={() => inputDigit("1")} className={digitBtn}>
          1
        </button>
        <button type="button" onClick={() => inputDigit("2")} className={digitBtn}>
          2
        </button>
        <button type="button" onClick={() => inputDigit("3")} className={digitBtn}>
          3
        </button>
        <button type="button" onClick={() => handleOperator("+")} className={opBtn}>
          +
        </button>

        <button type="button" onClick={() => inputDigit("0")} className={`${digitBtn} col-span-1`}>
          0
        </button>
        <button type="button" onClick={backspace} className={digitBtn}>
          ⌫
        </button>
        <button type="button" onClick={inputDecimal} className={digitBtn}>
          .
        </button>
        <button
          type="button"
          onClick={handleEquals}
          className="rounded-lg bg-brand-primary py-3 text-base font-semibold text-white hover:bg-blue-700"
        >
          =
        </button>
      </div>
    </div>
  );
}
