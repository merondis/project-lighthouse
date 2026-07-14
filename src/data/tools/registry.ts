import { formatJson, JsonAction } from "@/utils/calculators/json-formatter";
import { processBase64, Base64Action } from "@/utils/calculators/base64-tool";
import { calculateBmr, ActivityLevel, Gender } from "@/utils/calculators/bmr-calculator";
import { countWords } from "@/utils/calculators/word-counter";
import { convertCase, CaseMode } from "@/utils/calculators/case-converter";
import { generatePassword } from "@/utils/calculators/password-generator";
import { calculateDateDifference } from "@/utils/calculators/date-calculator";
import { calculateDiscount } from "@/utils/calculators/discount-calculator";
import { calculateGst, GstMode } from "@/utils/calculators/gst-calculator";
import { calculateEmi } from "@/utils/calculators/emi-calculator";
import { calculateLoan } from "@/utils/calculators/loan-calculator";
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
    slug: "json-formatter",
    category: "developer",
    title: "JSON Formatter",
    shortDescription: "Format, validate and minify JSON instantly.",
    metaDescription: "Free online JSON formatter and validator to beautify or minify JSON data instantly.",
    h1: "JSON Formatter",
    intro: "Paste your JSON to format it with proper indentation, or minify it to a single line. Also validates JSON syntax.",
    icon: "🧩",
    status: "live",
    inputFields: [
      { key: "json", label: "Your JSON", type: "textarea", placeholder: '{"example": "paste your JSON here"}' },
      {
        key: "action",
        label: "Action",
        type: "select",
        options: [
          { label: "Format / Beautify", value: "format" },
          { label: "Minify", value: "minify" },
        ],
      },
    ],
    resultFields: [
      { key: "isValid", label: "Status", highlight: true },
      { key: "output", label: "Result", wide: true },
    ],
    calculate: (inputs) => {
      const json = String(inputs.json ?? "");
      const action = String(inputs.action) as JsonAction;
      const output = formatJson(json, action);
      return { ...output };
    },
    faqs: [
      {
        question: "What happens if my JSON is invalid?",
        answer: "The tool will show an error message describing that the JSON has a syntax issue, such as a missing comma, bracket, or quotation mark.",
      },
      {
        question: "Is my JSON data sent to a server?",
        answer: "No, all formatting and validation happens entirely in your browser. Your data is never transmitted or stored.",
      },
      {
        question: "What is the difference between format and minify?",
        answer: "Format adds indentation and line breaks for readability, while minify removes all unnecessary whitespace to reduce file size.",
      },
    ],
    relatedSlugs: ["base64-tool"],
  },
  {
    slug: "base64-tool",
    category: "developer",
    title: "Base64 Encoder / Decoder",
    shortDescription: "Encode or decode Base64 text instantly.",
    metaDescription: "Free online Base64 encoder and decoder to convert text to and from Base64 format.",
    h1: "Base64 Encoder / Decoder",
    intro: "Encode plain text into Base64, or decode Base64 back into readable text.",
    icon: "🔐",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Enter text to encode or decode..." },
      {
        key: "action",
        label: "Action",
        type: "select",
        options: [
          { label: "Encode to Base64", value: "encode" },
          { label: "Decode from Base64", value: "decode" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "Result", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const action = String(inputs.action) as Base64Action;
      const result = processBase64(text, action);
      return { result };
    },
    faqs: [
      {
        question: "What is Base64 encoding used for?",
        answer:
          "Base64 encoding converts binary or text data into an ASCII string format, commonly used for embedding data in URLs, emails, or JSON payloads.",
      },
      {
        question: "Does this tool support Unicode characters?",
        answer: "Yes, this tool correctly encodes and decodes Unicode text, including accented characters and emoji.",
      },
      {
        question: "Is Base64 encoding a form of encryption?",
        answer: "No, Base64 is not encryption or security, it is simply a reversible encoding format and should not be used to protect sensitive data.",
      },
    ],
    relatedSlugs: ["json-formatter"],
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
    slug: "bmr-calculator",
    category: "health",
    title: "BMR / Calorie Calculator",
    shortDescription: "Calculate your daily calorie needs.",
    metaDescription:
      "Free online BMR and calorie calculator. Find your Basal Metabolic Rate and daily maintenance calories.",
    h1: "BMR / Calorie Calculator",
    intro:
      "Calculate your Basal Metabolic Rate (BMR) and estimated daily calorie needs based on your age, height, weight and activity level.",
    icon: "🔥",
    status: "live",
    inputFields: [
      {
        key: "gender",
        label: "Gender",
        type: "select",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ],
      },
      { key: "age", label: "Age (years)", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
      {
        key: "activityLevel",
        label: "Activity Level",
        type: "select",
        options: [
          { label: "Sedentary (little or no exercise)", value: "sedentary" },
          { label: "Light (1-3 days/week)", value: "light" },
          { label: "Moderate (3-5 days/week)", value: "moderate" },
          { label: "Active (6-7 days/week)", value: "active" },
          { label: "Very Active (hard exercise daily)", value: "veryActive" },
        ],
      },
    ],
    resultFields: [
      { key: "bmr", label: "BMR", unit: "kcal/day", highlight: true },
      { key: "maintenanceCalories", label: "Maintenance Calories", unit: "kcal/day", highlight: true },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as Gender;
      const age = Number(inputs.age);
      const heightCm = Number(inputs.heightCm);
      const weightKg = Number(inputs.weightKg);
      const activityLevel = String(inputs.activityLevel) as ActivityLevel;
      const output = calculateBmr(gender, age, heightCm, weightKg, activityLevel);
      return { ...output };
    },
    faqs: [
      {
        question: "What is BMR?",
        answer:
          "BMR (Basal Metabolic Rate) is the number of calories your body needs at complete rest to maintain basic functions like breathing and circulation.",
      },
      {
        question: "What are maintenance calories?",
        answer:
          "Maintenance calories are your BMR adjusted for your activity level, representing the calories needed to maintain your current weight.",
      },
      {
        question: "Which formula does this calculator use?",
        answer: "This calculator uses the Mifflin-St Jeor equation, widely regarded as one of the most accurate BMR formulas.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "age-calculator"],
  },
  {
    slug: "word-counter",
    category: "text",
    title: "Word Counter",
    shortDescription: "Count words, characters and sentences.",
    metaDescription: "Free online word counter to count words, characters, sentences and paragraphs in your text.",
    h1: "Word Counter",
    intro: "Paste or type your text to instantly count words, characters, sentences and paragraphs.",
    icon: "📝",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste or type your text here..." },
    ],
    resultFields: [
      { key: "words", label: "Words", highlight: true },
      { key: "characters", label: "Characters", highlight: true },
      { key: "charactersNoSpaces", label: "Characters (no spaces)" },
      { key: "sentences", label: "Sentences" },
      { key: "paragraphs", label: "Paragraphs" },
    ],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const output = countWords(text);
      return { ...output };
    },
    faqs: [
      {
        question: "How is the word count calculated?",
        answer: "Words are counted by splitting your text on whitespace, so consecutive spaces or line breaks don't count as extra words.",
      },
      {
        question: "Does this tool store my text?",
        answer: "No, all counting happens directly in your browser. Your text is never sent to or stored on our servers.",
      },
    ],
    relatedSlugs: ["case-converter"],
  },
  {
    slug: "case-converter",
    category: "text",
    title: "Case Converter",
    shortDescription: "Convert text between upper, lower and title case.",
    metaDescription: "Free online case converter to convert text to uppercase, lowercase, title case or sentence case.",
    h1: "Case Converter",
    intro: "Convert your text between UPPERCASE, lowercase, Title Case and Sentence case instantly.",
    icon: "🔤",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste or type your text here..." },
      {
        key: "mode",
        label: "Convert To",
        type: "select",
        options: [
          { label: "UPPERCASE", value: "upper" },
          { label: "lowercase", value: "lower" },
          { label: "Title Case", value: "title" },
          { label: "Sentence case", value: "sentence" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "Converted Text", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const mode = String(inputs.mode) as CaseMode;
      const result = convertCase(text, mode);
      return { result };
    },
    faqs: [
      {
        question: "What is Title Case?",
        answer: "Title Case capitalizes the first letter of every word, commonly used for headings and titles.",
      },
      {
        question: "What is Sentence case?",
        answer: "Sentence case capitalizes only the first letter of each sentence, similar to normal written English.",
      },
    ],
    relatedSlugs: ["word-counter"],
  },
  {
    slug: "length-converter",
    category: "converters",
    title: "Length Converter",
    shortDescription: "Convert between mm, cm, m, km, inches, feet, yards and miles.",
    metaDescription:
      "Free online length converter to convert between millimeters, centimeters, meters, kilometers, inches, feet, yards and miles.",
    h1: "Length Converter",
    intro: "Convert length and distance measurements between metric and imperial units instantly.",
    icon: "📏",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "length",
    faqs: [
      {
        question: "How accurate are these conversions?",
        answer: "Conversions use standard international conversion factors and are accurate to six decimal places.",
      },
      {
        question: "Can I convert between metric and imperial units?",
        answer: "Yes, you can convert between any combination of metric (mm, cm, m, km) and imperial (in, ft, yd, mi) units.",
      },
    ],
    relatedSlugs: ["weight-converter", "temperature-converter"],
  },
  {
    slug: "weight-converter",
    category: "converters",
    title: "Weight Converter",
    shortDescription: "Convert between mg, g, kg, tonnes, ounces, pounds and stone.",
    metaDescription:
      "Free online weight converter to convert between milligrams, grams, kilograms, tonnes, ounces, pounds and stone.",
    h1: "Weight Converter",
    intro: "Convert weight and mass measurements between metric and imperial units instantly.",
    icon: "⚖️",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "weight",
    faqs: [
      {
        question: "How accurate are these conversions?",
        answer: "Conversions use standard international conversion factors and are accurate to six decimal places.",
      },
      {
        question: "How many pounds are in a stone?",
        answer: "One stone equals 14 pounds, a unit commonly used in the UK and Ireland for body weight.",
      },
    ],
    relatedSlugs: ["length-converter", "bmi-calculator"],
  },
  {
    slug: "temperature-converter",
    category: "converters",
    title: "Temperature Converter",
    shortDescription: "Convert between Celsius, Fahrenheit and Kelvin.",
    metaDescription: "Free online temperature converter to convert between Celsius, Fahrenheit and Kelvin instantly.",
    h1: "Temperature Converter",
    intro: "Convert temperature values between Celsius, Fahrenheit and Kelvin instantly.",
    icon: "🌡️",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "temperature",
    faqs: [
      {
        question: "What is the formula to convert Celsius to Fahrenheit?",
        answer: "Fahrenheit is calculated as Celsius multiplied by 9/5, plus 32.",
      },
      {
        question: "What is 0 Kelvin?",
        answer: "0 Kelvin, known as absolute zero, is equal to -273.15°C, the theoretical point where molecular motion stops.",
      },
    ],
    relatedSlugs: ["length-converter", "weight-converter"],
  },
  {
    slug: "password-generator",
    category: "security",
    title: "Password Generator",
    shortDescription: "Generate strong, random passwords.",
    metaDescription: "Free online password generator to create strong, secure, random passwords instantly.",
    h1: "Password Generator",
    intro: "Generate a strong, random password with your choice of length and character types.",
    icon: "🔑",
    status: "live",
    inputFields: [
      { key: "length", label: "Password Length", type: "number", min: 4, max: 128, step: 1, defaultValue: 16 },
      { key: "includeUppercase", label: "Include Uppercase Letters (A-Z)", type: "checkbox", defaultValue: "true" },
      { key: "includeLowercase", label: "Include Lowercase Letters (a-z)", type: "checkbox", defaultValue: "true" },
      { key: "includeNumbers", label: "Include Numbers (0-9)", type: "checkbox", defaultValue: "true" },
      { key: "includeSymbols", label: "Include Symbols (!@#$...)", type: "checkbox", defaultValue: "false" },
    ],
    resultFields: [{ key: "password", label: "Generated Password", wide: true }],
    calculate: (inputs) => {
      const password = generatePassword({
        length: Number(inputs.length),
        includeUppercase: inputs.includeUppercase === "true",
        includeLowercase: inputs.includeLowercase === "true",
        includeNumbers: inputs.includeNumbers === "true",
        includeSymbols: inputs.includeSymbols === "true",
      });
      return { password };
    },
    faqs: [
      {
        question: "Are these passwords generated securely?",
        answer:
          "Passwords are generated entirely in your browser and are never sent to or stored on our servers.",
      },
      {
        question: "What makes a strong password?",
        answer:
          "A strong password is typically at least 12-16 characters long and combines uppercase letters, lowercase letters, numbers and symbols.",
      },
      {
        question: "Should I reuse passwords across sites?",
        answer: "No, it's recommended to use a unique password for each account, ideally managed with a password manager.",
      },
    ],
    relatedSlugs: [],
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
    status: "live",
    inputFields: [
      { key: "originalPrice", label: "Original Price", type: "number", step: 0.01, placeholder: "e.g. 1000" },
      { key: "discountPercent", label: "Discount (%)", type: "number", step: 0.01, placeholder: "e.g. 20" },
    ],
    resultFields: [
      { key: "finalPrice", label: "Final Price", highlight: true },
      { key: "discountAmount", label: "Discount Amount", highlight: true },
      { key: "youSave", label: "You Save" },
    ],
    calculate: (inputs) => {
      const originalPrice = Number(inputs.originalPrice);
      const discountPercent = Number(inputs.discountPercent);
      const output = calculateDiscount(originalPrice, discountPercent);
      return { ...output };
    },
    faqs: [
      {
        question: "How is the final price calculated?",
        answer:
          "The discount amount is calculated as a percentage of the original price, then subtracted from the original price to get the final price.",
      },
      {
        question: "Can I use this for multiple stacked discounts?",
        answer:
          "This calculator handles a single discount. For stacked discounts, apply this calculator once per discount, using the previous result as the new original price.",
      },
    ],
    relatedSlugs: ["percentage-calculator", "gst-calculator"],
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
    status: "live",
    inputFields: [
      { key: "principal", label: "Loan Amount", type: "number", step: 0.01, placeholder: "e.g. 500000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 8.5" },
      { key: "tenureMonths", label: "Tenure (Months)", type: "number", step: 1, placeholder: "e.g. 60" },
    ],
    resultFields: [
      { key: "monthlyEmi", label: "Monthly EMI", highlight: true },
      { key: "totalInterest", label: "Total Interest" },
      { key: "totalPayment", label: "Total Payment" },
    ],
    calculate: (inputs) => {
      const principal = Number(inputs.principal);
      const annualRate = Number(inputs.annualRate);
      const tenureMonths = Number(inputs.tenureMonths);
      const output = calculateEmi(principal, annualRate, tenureMonths);
      return { ...output };
    },
    faqs: [
      {
        question: "How is EMI calculated?",
        answer:
          "EMI is calculated using the loan amount, interest rate and tenure via the standard reducing-balance formula, which spreads principal and interest across equal monthly payments.",
      },
      {
        question: "Does a longer tenure reduce EMI?",
        answer:
          "Yes, a longer tenure generally reduces the monthly EMI amount, but increases the total interest paid over the life of the loan.",
      },
      {
        question: "Is the interest rate here monthly or annual?",
        answer: "Enter the annual interest rate. The calculator automatically converts it to a monthly rate internally.",
      },
    ],
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
    status: "live",
    inputFields: [
      { key: "amount", label: "Amount", type: "number", step: 0.01, placeholder: "e.g. 1000" },
      { key: "gstRate", label: "GST Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 18" },
      {
        key: "mode",
        label: "Calculation Type",
        type: "select",
        options: [
          { label: "Add GST (amount is exclusive)", value: "add" },
          { label: "Remove GST (amount is inclusive)", value: "remove" },
        ],
      },
    ],
    resultFields: [
      { key: "baseAmount", label: "Base Amount" },
      { key: "gstAmount", label: "GST Amount", highlight: true },
      { key: "totalAmount", label: "Total Amount", highlight: true },
    ],
    calculate: (inputs) => {
      const amount = Number(inputs.amount);
      const gstRate = Number(inputs.gstRate);
      const mode = String(inputs.mode) as GstMode;
      const output = calculateGst(amount, gstRate, mode);
      return { ...output };
    },
    faqs: [
      {
        question: "What does 'Add GST' mean?",
        answer:
          "Use 'Add GST' when your amount does not yet include GST, and you want to find the GST amount and the final total.",
      },
      {
        question: "What does 'Remove GST' mean?",
        answer:
          "Use 'Remove GST' when your amount already includes GST, and you want to find the original base price before GST was added.",
      },
    ],
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
    status: "live",
    inputFields: [
      { key: "principal", label: "Loan Amount", type: "number", step: 0.01, placeholder: "e.g. 250000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 7.2" },
      { key: "tenureYears", label: "Tenure (Years)", type: "number", step: 0.5, placeholder: "e.g. 15" },
    ],
    resultFields: [
      { key: "monthlyPayment", label: "Monthly Payment", highlight: true },
      { key: "totalInterest", label: "Total Interest" },
      { key: "totalRepayment", label: "Total Repayment" },
      { key: "tenureMonths", label: "Tenure (Months)" },
    ],
    calculate: (inputs) => {
      const principal = Number(inputs.principal);
      const annualRate = Number(inputs.annualRate);
      const tenureYears = Number(inputs.tenureYears);
      const output = calculateLoan(principal, annualRate, tenureYears);
      return { ...output };
    },
    faqs: [
      {
        question: "How is this different from the EMI calculator?",
        answer:
          "This calculator uses tenure in years and focuses on total repayment and interest cost, while the EMI calculator focuses on the monthly installment using tenure in months. Both use the same underlying formula.",
      },
      {
        question: "Does this include additional fees?",
        answer:
          "No, this calculator estimates principal and interest only. Processing fees, insurance, or other charges are not included and vary by lender.",
      },
    ],
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
    status: "live",
    inputFields: [
      { key: "startDate", label: "Start Date", type: "date" },
      { key: "endDate", label: "End Date", type: "date" },
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
      const startDate = String(inputs.startDate ?? "");
      const endDate = String(inputs.endDate ?? "");
      const output = calculateDateDifference(startDate, endDate);
      return { ...output };
    },
    faqs: [
      {
        question: "Does the order of the two dates matter?",
        answer:
          "No. The calculator automatically detects which date is earlier and calculates the difference correctly regardless of the order you enter them.",
      },
      {
        question: "Can I calculate the difference between two future dates?",
        answer: "Yes, both dates can be in the future, the past, or one of each.",
      },
    ],
    relatedSlugs: ["age-calculator", "countdown-timer"],
  },
{
    slug: "countdown-timer",
    category: "date-time",
    title: "Countdown Timer",
    shortDescription: "Countdown to any event.",
    metaDescription: "Free online countdown timer to count down to any date and event.",
    h1: "Countdown Timer",
    intro: "Set a target date and time and watch a live countdown in days, hours, minutes and seconds.",
    icon: "⏳",
    status: "live",
    widgetType: "countdown",
    faqs: [
      {
        question: "Does the countdown keep running if I leave the page open?",
        answer: "Yes, the countdown updates live every second while the page stays open in your browser.",
      },
      {
        question: "What happens when the countdown reaches zero?",
        answer: "The timer will display a completion message once the target date and time have passed.",
      },
    ],
    relatedSlugs: ["date-calculator", "age-calculator"],
  },
];

export function getToolBySlug(slug: string) {
  return toolRegistry.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string) {
  return toolRegistry.filter((t) => t.category === category);
}