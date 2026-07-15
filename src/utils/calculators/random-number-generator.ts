export interface RandomNumberOptions {
  min: number;
  max: number;
  allowDuplicates: boolean;
  count: number;
}

export function generateRandomNumbers(options: RandomNumberOptions): number[] {
  const { min, max, allowDuplicates, count } = options;

  if ([min, max, count].some((v) => Number.isNaN(v))) {
    throw new Error("Please enter valid numbers for min, max and count.");
  }
  if (min > max) {
    throw new Error("Minimum value cannot be greater than maximum value.");
  }
  if (count < 1 || count > 1000) {
    throw new Error("Count must be between 1 and 1000.");
  }

  const rangeSize = max - min + 1;

  if (!allowDuplicates && count > rangeSize) {
    throw new Error(
      "Cannot generate " + count + " unique numbers from a range of only " + rangeSize + " values."
    );
  }

  const results: number[] = [];

  if (allowDuplicates) {
    for (let i = 0; i < count; i++) {
      results.push(Math.floor(Math.random() * rangeSize) + min);
    }
  } else {
    const pool: number[] = [];
    for (let i = min; i <= max; i++) {
      pool.push(i);
    }
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pool[i];
      pool[i] = pool[j];
      pool[j] = temp;
    }
    for (let i = 0; i < count; i++) {
      results.push(pool[i]);
    }
  }

  return results;
}