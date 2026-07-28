import { InputFieldConfig } from "@/types/tool";
import { GrowthScheduleResult } from "@/utils/calculators/growth-schedules";
import {
  compoundInterestSchedule,
  sipSchedule,
  retirementSchedule,
  retirement401kSchedule,
  fireSchedule,
  savingsGoalSchedule,
  rothIraSchedule,
  traditionalIraSchedule,
  cdSchedule,
  annuitySchedule,
  annuityPayoutSchedule,
  collegeCostSchedule,
  investmentReturnSchedule,
} from "@/utils/calculators/growth-schedules";

export interface GrowthCalculatorConfig {
  inputFields: InputFieldConfig[];
  calculate: (inputs: Record<string, string | number>) => GrowthScheduleResult;
}

const COMPOUND_FREQUENCY_OPTIONS = [
  { label: "Annually", value: "annually" },
  { label: "Semi-Annually", value: "semiannually" },
  { label: "Quarterly", value: "quarterly" },
  { label: "Monthly", value: "monthly" },
  { label: "Daily", value: "daily" },
];

export const growthCalculatorConfigs: Record<string, GrowthCalculatorConfig> = {
  "compound-interest-calculator": {
    inputFields: [
      { key: "principal", label: "Initial Amount", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
      { key: "years", label: "Time Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 10" },
      { key: "frequency", label: "Compounding Frequency", type: "select", options: COMPOUND_FREQUENCY_OPTIONS },
    ],
    calculate: (inputs) =>
      compoundInterestSchedule(Number(inputs.principal), Number(inputs.annualRate), Number(inputs.years), String(inputs.frequency)),
  },

  "sip-calculator": {
    inputFields: [
      { key: "monthlyInvestment", label: "Monthly Investment", type: "number", step: 0.01, placeholder: "e.g. 5000" },
      { key: "annualRate", label: "Expected Annual Return (%)", type: "number", step: 0.1, placeholder: "e.g. 12" },
      { key: "years", label: "Investment Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 15" },
    ],
    calculate: (inputs) => sipSchedule(Number(inputs.monthlyInvestment), Number(inputs.annualRate), Number(inputs.years)),
  },

  "retirement-calculator": {
    inputFields: [
      { key: "currentAge", label: "Current Age", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "retirementAge", label: "Target Retirement Age", type: "number", step: 1, placeholder: "e.g. 60" },
      { key: "currentSavings", label: "Current Retirement Savings", type: "number", step: 0.01, defaultValue: 0 },
      { key: "monthlyContribution", label: "Monthly Contribution", type: "number", step: 0.01, placeholder: "e.g. 15000" },
      { key: "annualRate", label: "Expected Annual Return (%)", type: "number", step: 0.1, placeholder: "e.g. 10" },
    ],
    calculate: (inputs) =>
      retirementSchedule(
        Number(inputs.currentAge),
        Number(inputs.retirementAge),
        Number(inputs.currentSavings) || 0,
        Number(inputs.monthlyContribution),
        Number(inputs.annualRate)
      ),
  },

  "401k-calculator": {
    inputFields: [
      { key: "currentAge", label: "Current Age", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "retirementAge", label: "Retirement Age", type: "number", step: 1, placeholder: "e.g. 65" },
      { key: "currentBalance", label: "Current 401(k) Balance", type: "number", step: 0.01, defaultValue: 0 },
      { key: "annualSalary", label: "Annual Salary", type: "number", step: 0.01, placeholder: "e.g. 70000" },
      { key: "contributionPercent", label: "Your Contribution (% of Salary)", type: "number", step: 0.1, placeholder: "e.g. 6" },
      { key: "employerMatchPercent", label: "Employer Match Rate (%)", type: "number", step: 1, placeholder: "e.g. 50" },
      { key: "employerMatchLimitPercent", label: "Employer Match Limit (% of Salary)", type: "number", step: 0.1, placeholder: "e.g. 6" },
      { key: "expectedReturn", label: "Expected Annual Return (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
      { key: "salaryGrowth", label: "Annual Salary Growth (%, optional)", type: "number", step: 0.1, defaultValue: 0 },
    ],
    calculate: (inputs) =>
      retirement401kSchedule(
        Number(inputs.currentAge),
        Number(inputs.retirementAge),
        Number(inputs.currentBalance) || 0,
        Number(inputs.annualSalary),
        Number(inputs.contributionPercent),
        Number(inputs.employerMatchPercent),
        Number(inputs.employerMatchLimitPercent),
        Number(inputs.expectedReturn),
        Number(inputs.salaryGrowth) || 0
      ),
  },

  "fire-calculator": {
    inputFields: [
      { key: "currentAge", label: "Current Age", type: "number", step: 1, placeholder: "e.g. 28" },
      { key: "currentSavings", label: "Current Investable Savings", type: "number", step: 0.01, defaultValue: 0 },
      { key: "monthlyContribution", label: "Monthly Contribution", type: "number", step: 0.01, placeholder: "e.g. 2000" },
      { key: "expectedReturn", label: "Expected Annual Return (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
      { key: "annualExpenses", label: "Desired Annual Expenses in Retirement", type: "number", step: 0.01, placeholder: "e.g. 40000" },
      { key: "withdrawalRate", label: "Safe Withdrawal Rate (%)", type: "number", step: 0.1, defaultValue: 4 },
    ],
    calculate: (inputs) =>
      fireSchedule(
        Number(inputs.currentAge),
        Number(inputs.currentSavings) || 0,
        Number(inputs.monthlyContribution),
        Number(inputs.expectedReturn),
        Number(inputs.annualExpenses),
        Number(inputs.withdrawalRate) || 4
      ),
  },

  "savings-goal-calculator": {
    inputFields: [
      { key: "targetAmount", label: "Savings Goal", type: "number", step: 0.01, placeholder: "e.g. 20000" },
      { key: "currentSavings", label: "Current Savings", type: "number", step: 0.01, defaultValue: 0 },
      { key: "months", label: "Time Frame (Months)", type: "number", step: 1, placeholder: "e.g. 24" },
      { key: "annualRate", label: "Expected Annual Interest Rate (%)", type: "number", step: 0.1, defaultValue: 0 },
    ],
    calculate: (inputs) =>
      savingsGoalSchedule(
        Number(inputs.targetAmount),
        Number(inputs.currentSavings) || 0,
        Number(inputs.months),
        Number(inputs.annualRate) || 0
      ),
  },

  "roth-ira-calculator": {
    inputFields: [
      { key: "currentAge", label: "Current Age", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "retirementAge", label: "Retirement Age", type: "number", step: 1, placeholder: "e.g. 65" },
      { key: "currentBalance", label: "Current Roth IRA Balance", type: "number", step: 0.01, defaultValue: 0 },
      { key: "annualContribution", label: "Annual Contribution", type: "number", step: 0.01, placeholder: "e.g. 7000" },
      { key: "expectedReturn", label: "Expected Annual Return (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
      { key: "comparisonTaxRate", label: "Comparison Tax Rate (%, for taxable account)", type: "number", step: 0.1, defaultValue: 15 },
    ],
    calculate: (inputs) =>
      rothIraSchedule(
        Number(inputs.currentAge),
        Number(inputs.retirementAge),
        Number(inputs.currentBalance) || 0,
        Number(inputs.annualContribution),
        Number(inputs.expectedReturn),
        Number(inputs.comparisonTaxRate) || 0
      ),
  },

  "traditional-ira-calculator": {
    inputFields: [
      { key: "currentAge", label: "Current Age", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "retirementAge", label: "Retirement Age", type: "number", step: 1, placeholder: "e.g. 65" },
      { key: "currentBalance", label: "Current Traditional IRA Balance", type: "number", step: 0.01, defaultValue: 0 },
      { key: "annualContribution", label: "Annual Contribution", type: "number", step: 0.01, placeholder: "e.g. 7000" },
      { key: "expectedReturn", label: "Expected Annual Return (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
      { key: "currentTaxRate", label: "Current Marginal Tax Rate (%)", type: "number", step: 0.1, placeholder: "e.g. 22" },
      { key: "retirementTaxRate", label: "Expected Tax Rate in Retirement (%)", type: "number", step: 0.1, placeholder: "e.g. 15" },
    ],
    calculate: (inputs) =>
      traditionalIraSchedule(
        Number(inputs.currentAge),
        Number(inputs.retirementAge),
        Number(inputs.currentBalance) || 0,
        Number(inputs.annualContribution),
        Number(inputs.expectedReturn),
        Number(inputs.currentTaxRate),
        Number(inputs.retirementTaxRate)
      ),
  },

  "cd-calculator": {
    inputFields: [
      { key: "principal", label: "Deposit Amount", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 4" },
      { key: "termMonths", label: "Term (Months)", type: "number", step: 1, placeholder: "e.g. 12" },
      {
        key: "frequency",
        label: "Compounding Frequency",
        type: "select",
        defaultValue: "monthly",
        options: COMPOUND_FREQUENCY_OPTIONS.map((o) => (o.value === "semiannually" ? { label: "Semiannually", value: "semiannually" } : o)),
      },
    ],
    calculate: (inputs) =>
      cdSchedule(Number(inputs.principal), Number(inputs.annualRate), Number(inputs.termMonths), String(inputs.frequency)),
  },

  "annuity-calculator": {
    inputFields: [
      { key: "periodicPayment", label: "Payment Amount", type: "number", step: 0.01, placeholder: "e.g. 500" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 6" },
      { key: "years", label: "Number of Years", type: "number", step: 1, placeholder: "e.g. 10" },
      { key: "paymentsPerYear", label: "Payments per Year", type: "number", step: 1, defaultValue: 12 },
      {
        key: "timing",
        label: "Payment Timing",
        type: "select",
        defaultValue: "ordinary",
        options: [
          { label: "Ordinary Annuity (end of period)", value: "ordinary" },
          { label: "Annuity Due (start of period)", value: "due" },
        ],
      },
    ],
    calculate: (inputs) =>
      annuitySchedule(
        Number(inputs.periodicPayment),
        Number(inputs.annualRate),
        Number(inputs.years),
        Number(inputs.paymentsPerYear) || 12,
        String(inputs.timing)
      ),
  },

  "annuity-payout-calculator": {
    inputFields: [
      { key: "lumpSum", label: "Lump Sum Amount", type: "number", step: 0.01, placeholder: "e.g. 200000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 5" },
      { key: "payoutYears", label: "Payout Period (Years)", type: "number", step: 1, placeholder: "e.g. 20" },
      { key: "paymentsPerYear", label: "Payments per Year", type: "number", step: 1, defaultValue: 12 },
    ],
    calculate: (inputs) =>
      annuityPayoutSchedule(
        Number(inputs.lumpSum),
        Number(inputs.annualRate),
        Number(inputs.payoutYears),
        Number(inputs.paymentsPerYear) || 12
      ),
  },

  "college-cost-calculator": {
    inputFields: [
      { key: "currentAnnualCost", label: "Current Annual Cost (Tuition + Room & Board)", type: "number", step: 0.01, placeholder: "e.g. 25000" },
      { key: "yearsUntilEnrollment", label: "Years Until Enrollment", type: "number", step: 1, placeholder: "e.g. 10" },
      { key: "inflationRate", label: "Expected College Cost Inflation (%)", type: "number", step: 0.1, defaultValue: 5 },
      { key: "yearsInCollege", label: "Years in College", type: "number", step: 1, defaultValue: 4 },
    ],
    calculate: (inputs) =>
      collegeCostSchedule(
        Number(inputs.currentAnnualCost),
        Number(inputs.yearsUntilEnrollment),
        Number(inputs.inflationRate) || 0,
        Number(inputs.yearsInCollege) || 4
      ),
  },

  "investment-return-calculator": {
    inputFields: [
      { key: "initialInvestment", label: "Initial Investment", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "monthlyContribution", label: "Monthly Contribution (optional)", type: "number", step: 0.01, defaultValue: 0 },
      { key: "years", label: "Time Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 10" },
      { key: "endingBalance", label: "Ending Balance", type: "number", step: 0.01, placeholder: "e.g. 30000" },
    ],
    calculate: (inputs) =>
      investmentReturnSchedule(
        Number(inputs.initialInvestment),
        Number(inputs.monthlyContribution) || 0,
        Number(inputs.years),
        Number(inputs.endingBalance)
      ),
  },
};
