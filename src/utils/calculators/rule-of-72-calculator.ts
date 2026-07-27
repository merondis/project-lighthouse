export type Rule72Mode = "yearsToDouble" | "requiredRate";

export interface Rule72Result {
  ruleOf72Result: number;
  exactResult: number;
  difference: number;
}

// The Rule of 72 is a quick mental-math approximation for compound growth:
// dividing 72 by an annual interest rate estimates the number of years needed
// to double an investment, and dividing 72 by a number of years estimates the
// rate needed to double it in that time. This calculator also shows the exact
// answer (derived from the compound growth formula) alongside the Rule of 72
// approximation, so you can see how close the shortcut actually gets.
export function calculateRule72(mode: Rule72Mode, value: number): Rule72Result {
  if (Number.isNaN(value)) {
    throw new Error("Please enter a valid number.");
  }
  if (value <= 0) {
    throw new Error("Please enter a value greater than zero.");
  }

  if (mode === "yearsToDouble") {
    const ratePercent = value;
    const ruleOf72Result = 72 / ratePercent;
    const exactResult = Math.log(2) / Math.log(1 + ratePercent / 100);
    return {
      ruleOf72Result: roundTo(ruleOf72Result, 2),
      exactResult: roundTo(exactResult, 2),
      difference: roundTo(ruleOf72Result - exactResult, 2),
    };
  }

  const years = value;
  const ruleOf72Result = 72 / years;
  const exactResult = (Math.pow(2, 1 / years) - 1) * 100;
  return {
    ruleOf72Result: roundTo(ruleOf72Result, 2),
    exactResult: roundTo(exactResult, 2),
    difference: roundTo(ruleOf72Result - exactResult, 2),
  };
}

function roundTo(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
