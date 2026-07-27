export type MatrixOperation = "add" | "subtract" | "multiply" | "determinant" | "transpose";

export type Matrix = number[][];

export interface MatrixResult {
  resultMatrix: Matrix | null;
  determinantValue: number | null;
}

function validateSquare(matrix: Matrix, size: number, label: string) {
  if (matrix.length !== size || matrix.some((row) => row.length !== size)) {
    throw new Error(`Matrix ${label} must be a ${size}x${size} matrix.`);
  }
  if (matrix.some((row) => row.some((v) => Number.isNaN(v)))) {
    throw new Error(`Please enter valid numbers for all cells of Matrix ${label}.`);
  }
}

function addMatrices(a: Matrix, b: Matrix): Matrix {
  return a.map((row, i) => row.map((v, j) => v + b[i][j]));
}

function subtractMatrices(a: Matrix, b: Matrix): Matrix {
  return a.map((row, i) => row.map((v, j) => v - b[i][j]));
}

function multiplyMatrices(a: Matrix, b: Matrix): Matrix {
  const size = a.length;
  const result: Matrix = Array.from({ length: size }, () => Array(size).fill(0));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let sum = 0;
      for (let k = 0; k < size; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function determinant(matrix: Matrix): number {
  const size = matrix.length;
  if (size === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }
  // 3x3 via the rule of Sarrus / cofactor expansion along the first row.
  const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
  return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}

function transpose(matrix: Matrix): Matrix {
  const size = matrix.length;
  const result: Matrix = Array.from({ length: size }, () => Array(size).fill(0));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}

// Performs standard 2x2 or 3x3 matrix operations. Add, subtract and multiply
// require two matrices of the same size; determinant and transpose only use
// Matrix A.
export function calculateMatrix(
  operation: MatrixOperation,
  size: number,
  matrixA: Matrix,
  matrixB: Matrix
): MatrixResult {
  if (size !== 2 && size !== 3) {
    throw new Error("Matrix size must be 2x2 or 3x3.");
  }

  validateSquare(matrixA, size, "A");

  if (operation === "determinant") {
    return { resultMatrix: null, determinantValue: roundMatrixValue(determinant(matrixA)) };
  }

  if (operation === "transpose") {
    return { resultMatrix: roundMatrix(transpose(matrixA)), determinantValue: null };
  }

  validateSquare(matrixB, size, "B");

  let resultMatrix: Matrix;
  if (operation === "add") {
    resultMatrix = addMatrices(matrixA, matrixB);
  } else if (operation === "subtract") {
    resultMatrix = subtractMatrices(matrixA, matrixB);
  } else {
    resultMatrix = multiplyMatrices(matrixA, matrixB);
  }

  return { resultMatrix: roundMatrix(resultMatrix), determinantValue: null };
}

function roundMatrixValue(value: number): number {
  return Math.round(value * 1000) / 1000;
}

function roundMatrix(matrix: Matrix): Matrix {
  return matrix.map((row) => row.map(roundMatrixValue));
}
