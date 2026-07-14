import { calculatePercentage, PercentageMode } from "@/utils/calculators/percentage-calculator";
import { calculateBmi } from "@/utils/calculators/bmi-calculator";
import { ToolConfig } from "@/types/tool";
import { calculateAge } from "@/utils/calculators/age-calculator";

export const toolRegistry: ToolConfig[] = [
  {
    slug: "age-calculator",
    category: "date-time",
    title: "Age Calculator",
    shortDescription: "Calculate your exact age in years, months, weeks and days.",
    metaDescription:
      "Free online age calculator. Find your exact age in years, months, weeks and days from your date of birth.",
    h1: "Age Calculator",
    intro:
      "Enter your date of birth to instantly calculate your exact age in years, months and days, along with your total age in weeks and days.",
    icon: "🎂",
    status: "live",
    inputFields: [
      { key: "birthDate", label: "Date of Birth", type: "date" },
      { key: "toDate", label: "Age at Date (optional)", type: "date" },
    ],
    resultFields: [
      { key: "years", label: "Years", highlight: true },
      { key: "months", label: "Months", highlight: true },
      { key: "days", label: "Days", highlight: true },
      { key: "totalMonths", label: "Total Months" },
      { key: "totalWeeks", label: "Total Weeks" },
      { key: "totalDays", label: "Total Days" },
    ],
    calculate: (inputs) => {
      const birthDate = String(inputs.birthDate ?? "");
      const toDate = inputs.toDate ? String(inputs.toDate) : undefined;
      const result = calculateAge(birthDate, toDate);
      return { ...result };
    },
    faqs: [
      {
        question: "How is age calculated?",
        answer:
          "Age is calculated by finding the difference between your date of birth and today's date (or a chosen date), accounting for varying month lengths and leap years.",
      },
      {
        question: "Can I calculate age on a future date?",
        answer:
          "Yes. Enter a future date in the 'Age at Date' field to see how old you will be on that date.",
      },
      {
        question: "Is this age calculator accurate?",
        answer:
          "Yes, it accounts for leap years and different month lengths to give you a precise breakdown in years, months and days.",
      },
    ],
    relatedSlugs: ["date-calculator", "countdown-timer", "bmi-calculator"],
  },
  {
    slug: "percentage-calculator",
    category: "misc",
    title: "Percentage Calculator",
    shortDescription: "Calculate percentages instantly.",
    metaDescription: "Free online percentage calculator to find percentages, percentage increase/decrease and more.",
    h1: "Percentage Calculator",
    intro: "Calculate percentages, percentage change, and percentage of a number quickly and accurately.",
    icon: "📊",
    status: "live",
    inputFields: [
      {
        key: "mode",
        label: "Calculation Type",
        type: "select",
        options: [
          { label: "X% of Y", value: "percentOf" },
          { label: "X is what % of Y", value: "isWhatPercent" },
          { label: "Percentage change from X to Y", value: "percentageChange" },
        ],
      },
      { key: "valueA", label: "First Number (X)", type: "number", step: 0.01 },
      { key: "valueB", label: "Second Number (Y)", type: "number", step: 0.01 },
    ],
    resultFields: [
      { key: "result", label: "Result", unit: "%", highlight: true },
      { key: "explanation", label: "Explanation" },
    ],
    calculate: (inputs) => {
      const mode = String(inputs.mode) as PercentageMode;
      const valueA = Number(inputs.valueA);
      const valueB = Number(inputs.valueB);
      const output = calculatePercentage(mode, valueA, valueB);
      return { ...output };
    },
    faqs: [
      {
        question: "How do I calculate what percentage one number is of another?",
        answer:
          "Choose 'X is what % of Y', enter the two numbers, and the calculator divides X by Y and multiplies by 100.",
      },
      {
        question: "How is percentage change calculated?",
        answer:
          "Percentage change is calculated as (New Value − Old Value) ÷ Old Value × 100, showing the increase or decrease as a percentage.",
      },
      {
        question: "Can this calculator handle negative numbers?",
        answer: "Yes, it works with negative numbers for all three calculation types.",
      },
    ],
    relatedSlugs: ["age-calculator", "discount-calculator"],
  },
  {
    slug: "bmi-calculator",
    category: "health",
    title: "BMI Calculator",
    shortDescription: "Calculate your Body Mass Index instantly.",
    metaDescription: "Free online BMI calculator to check your Body Mass Index based on height and weight.",
    h1: "BMI Calculator",
    intro: "Calculate your Body Mass Index (BMI) using your height and weight to understand your weight category.",
    icon: "⚖️",
    status: "live",
    inputFields: [
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
    ],
    resultFields: [
      { key: "bmi", label: "BMI", highlight: true },
      { key: "category", label: "Category", highlight: true },
    ],
    calculate: (inputs) => {
      const heightCm = Number(inputs.heightCm);
      const weightKg = Number(inputs.weightKg);
      const output = calculateBmi(heightCm, weightKg);
      return { ...output };
    },
    faqs: [
      {
        question: "What is a healthy BMI range?",
        answer:
          "A BMI between 18.5 and 24.9 is generally considered a healthy weight range for most adults.",
      },
      {
        question: "Is BMI accurate for everyone?",
        answer:
          "BMI is a general screening tool and does not account for muscle mass, bone density, or body composition, so it may not be fully accurate for athletes or older adults.",
      },
      {
        question: "How often should I check my BMI?",
        answer: "Checking BMI periodically (e.g. monthly) can help track general weight trends over time.",
      },
    ],
    relatedSlugs: ["age-calculator", "percentage-calculator"],
  },
  {
    slug: "discount-calculator",
    category: "finance",
    title: "Discount Calculator",
    shortDescription: "Calculate discounts instantly.",
    metaDescription: "Free online discount calculator to find the final price after a percentage discount.",
    h1: "Discount Calculator",
    intro: "Calculate the final price after applying a discount, and see how much you save.",
    icon: "🏷️",
    status: "comingSoon",
    faqs: [],
    relatedSlugs: ["percentage-calculator", "emi-calculator"],
  },
  {
    slug: "emi-calculator",
    category: "finance",
    title: "EMI Calculator",
    shortDescription: "Calculate monthly loan EMI.",
    metaDescription: "Free online EMI calculator to calculate your monthly loan installment.",
    h1: "EMI Calculator",
    intro: "Calculate your Equated Monthly Installment (EMI) for a loan based on principal, interest rate and tenure.",
    icon: "💰",
    status: "comingSoon",
    faqs: [],
    relatedSlugs: ["loan-calculator", "gst-calculator"],
  },
  {
    slug: "gst-calculator",
    category: "finance",
    title: "GST Calculator",
    shortDescription: "Calculate GST instantly.",
    metaDescription: "Free online GST calculator to add or remove GST from an amount.",
    h1: "GST Calculator",
    intro: "Calculate GST amount and final price for a given rate quickly and accurately.",
    icon: "🧾",
    status: "comingSoon",
    faqs: [],
    relatedSlugs: ["emi-calculator", "discount-calculator"],
  },
  {
    slug: "loan-calculator",
    category: "finance",
    title: "Loan Calculator",
    shortDescription: "Loan repayment calculator.",
    metaDescription: "Free online loan calculator to estimate repayments, interest and total cost of a loan.",
    h1: "Loan Calculator",
    intro: "Estimate your loan repayment schedule, total interest and total repayment amount.",
    icon: "🏦",
    status: "comingSoon",
    faqs: [],
    relatedSlugs: ["emi-calculator", "gst-calculator"],
  },
  {
    slug: "date-calculator",
    category: "date-time",
    title: "Date Calculator",
    shortDescription: "Find the difference between two dates.",
    metaDescription:
      "Free online date calculator to find the number of days, weeks, months or years between two dates.",
    h1: "Date Calculator",
    intro: "Find the exact difference between two dates in days, weeks, months and years.",
    icon: "📆",
    status: "comingSoon",
    faqs: [],
    relatedSlugs: ["age-calculator", "countdown-timer"],
  },
  {
    slug: "countdown-timer",
    category: "date-time",
    title: "Countdown Timer",
    shortDescription: "Countdown to any event.",
    metaDescription: "Free online countdown timer to count down to any date and event.",
    h1: "Countdown Timer",
    intro: "Set a target date and see a live countdown in days, hours, minutes and seconds.",
    icon: "⏳",
    status: "comingSoon",
    faqs: [],
    relatedSlugs: ["date-calculator", "age-calculator"],
  },
];

export function getToolBySlug(slug: string) {
  return toolRegistry.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string) {
  return toolRegistry.filter((t) => t.category === category);
}