"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { calculateMatrix, Matrix, MatrixOperation } from "@/utils/calculators/matrix-calculator";

function emptyMatrix(size: number): string[][] {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => ""));
}

const inputClasses =
  "h-12 w-14 rounded-lg border border-white/10 bg-brand-bg text-center text-white focus:border-brand-accent focus:outline-none";
const toggleBaseClasses = "flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors";

export function MatrixCalculatorWidget() {
  const [size, setSize] = useState(2);
  const [operation, setOperation] = useState<MatrixOperation>("add");
  const [matrixA, setMatrixA] = useState<string[][]>(emptyMatrix(2));
  const [matrixB, setMatrixB] = useState<string[][]>(emptyMatrix(2));
  const [resultMatrix, setResultMatrix] = useState<Matrix | null>(null);
  const [determinantValue, setDeterminantValue] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSizeChange(newSize: number) {
    setSize(newSize);
    setMatrixA(emptyMatrix(newSize));
    setMatrixB(emptyMatrix(newSize));
    setResultMatrix(null);
    setDeterminantValue(null);
    setError(null);
  }

  function updateCell(matrix: "A" | "B", row: number, col: number, value: string) {
    const setter = matrix === "A" ? setMatrixA : setMatrixB;
    setter((prev) => {
      const next = prev.map((r) => [...r]);
      next[row][col] = value;
      return next;
    });
  }

  function parseMatrix(matrix: string[][]): number[][] {
    return matrix.map((row) => row.map((cell) => Number(cell)));
  }

  function handleCalculate() {
    setError(null);
    setResultMatrix(null);
    setDeterminantValue(null);
    try {
      const parsedA = parseMatrix(matrixA);
      const parsedB = parseMatrix(matrixB);
      const output = calculateMatrix(operation, size, parsedA, parsedB);
      setResultMatrix(output.resultMatrix);
      setDeterminantValue(output.determinantValue);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please check your inputs.");
    }
  }

  const needsMatrixB = operation === "add" || operation === "subtract" || operation === "multiply";

  const size2Classes = toggleBaseClasses + " " + (size === 2 ? "bg-brand-primary text-white" : "bg-brand-bg text-brand-secondary");
  const size3Classes = toggleBaseClasses + " " + (size === 3 ? "bg-brand-primary text-white" : "bg-brand-bg text-brand-secondary");

  function renderGrid(label: string, matrix: string[][], which: "A" | "B") {
    return (
      <div>
        <p className="mb-2 text-sm font-medium text-white">Matrix {label}</p>
        <div className="flex flex-col gap-2">
          {matrix.map((row, i) => (
            <div key={i} className="flex gap-2">
              {row.map((cell, j) => (
                <input
                  key={j}
                  type="number"
                  value={cell}
                  onChange={(e) => updateCell(which, i, j, e.target.value)}
                  className={inputClasses}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const resultBox = resultMatrix ? (
    <div className="mt-6 rounded-lg bg-brand-bg p-4">
      <p className="mb-2 text-xs uppercase tracking-wide text-brand-secondary">Result Matrix</p>
      <div className="flex flex-col gap-2">
        {resultMatrix.map((row, i) => (
          <div key={i} className="flex gap-2">
            {row.map((value, j) => (
              <div
                key={j}
                className="flex h-12 w-16 items-center justify-center rounded-lg border border-white/10 font-mono text-brand-accent"
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ) : null;

  const determinantBox = determinantValue !== null ? (
    <div className="mt-6 rounded-lg bg-brand-bg p-4 text-center">
      <p className="text-xs uppercase tracking-wide text-brand-secondary">Determinant</p>
      <p className="mt-1 text-2xl font-bold text-brand-accent">{determinantValue}</p>
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 rounded-lg bg-brand-bg p-1">
          <button type="button" onClick={() => handleSizeChange(2)} className={size2Classes}>
            2 x 2
          </button>
          <button type="button" onClick={() => handleSizeChange(3)} className={size3Classes}>
            3 x 3
          </button>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Operation
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value as MatrixOperation)}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          >
            <option value="add">Add (A + B)</option>
            <option value="subtract">Subtract (A − B)</option>
            <option value="multiply">Multiply (A × B)</option>
            <option value="determinant">Determinant (of A)</option>
            <option value="transpose">Transpose (of A)</option>
          </select>
        </label>

        <div className="flex flex-wrap gap-8">
          {renderGrid("A", matrixA, "A")}
          {needsMatrixB ? renderGrid("B", matrixB, "B") : null}
        </div>

        <Button type="button" onClick={handleCalculate} className="w-full sm:w-auto">
          Calculate
        </Button>
      </div>

      {error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null}

      {resultBox}
      {determinantBox}
    </div>
  );
}
