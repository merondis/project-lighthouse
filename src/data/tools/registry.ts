import { convertTimezone, TIMEZONE_OPTIONS } from "@/utils/calculators/timezone-converter";

const SOUTH_AMERICA_CITIES = ["Sao_Paulo", "Buenos_Aires", "Bogota", "Lima", "Santiago"];

function formatTimezoneLabel(tz: string): string {
  if (tz === "UTC") return "UTC";
  const [region, city] = tz.split("/");
  const cityLabel = city.replace(/_/g, " ");
  const regionLabel =
    region === "America" && SOUTH_AMERICA_CITIES.includes(city) ? "South America" : region;
  return cityLabel + " (" + regionLabel + ")";
}
import { calculateWorkingDays } from "@/utils/calculators/working-days-calculator";
import { calculateSavingsGoal } from "@/utils/calculators/savings-goal-calculator";
import { validateEmailFormat } from "@/utils/calculators/email-format-validator";
import { hslToHexResult } from "@/utils/calculators/hsl-converter";
import { solveQuadratic } from "@/utils/calculators/quadratic-solver";
import { calculateBreakeven } from "@/utils/calculators/breakeven-calculator";
import { calculateHeartRateZones } from "@/utils/calculators/heart-rate-zone-calculator";
import { calculateStandardDeviation } from "@/utils/calculators/standard-deviation-calculator";
import { findAndReplace } from "@/utils/calculators/find-and-replace";
import { calculateCreditCardPayoff } from "@/utils/calculators/credit-card-payoff-calculator";
import { calculateCalorieGoal, Gender as CalorieGender, ActivityLevel as CalorieActivityLevel, Goal as CalorieGoal } from "@/utils/calculators/calorie-goal-calculator";
import { removeDuplicateLines } from "@/utils/calculators/remove-duplicate-lines";
import { calculateWaterIntake, ActivityLevel as WaterActivityLevel } from "@/utils/calculators/water-intake-calculator";
import { calculatePregnancyDueDate } from "@/utils/calculators/pregnancy-due-date-calculator";
import { calculateFraction, FractionOperation } from "@/utils/calculators/fraction-calculator";
import { generateUuids } from "@/utils/calculators/uuid-generator";
import { generateLoremIpsum, LoremUnit } from "@/utils/calculators/lorem-ipsum-generator";
import { calculateGpa } from "@/utils/calculators/gpa-calculator";
import { calculateIdealWeight } from "@/utils/calculators/ideal-weight-calculator";
import { calculateBodyFat } from "@/utils/calculators/body-fat-calculator";
import { calculateInflation } from "@/utils/calculators/inflation-calculator";
import { calculateNetWorth } from "@/utils/calculators/net-worth-calculator";
import { calculateRoi } from "@/utils/calculators/roi-calculator";
import { calculateMarkup } from "@/utils/calculators/markup-calculator";
import { processUrlEncoding, UrlEncodeAction } from "@/utils/calculators/url-encoder";
import { calculateStackedDiscounts } from "@/utils/calculators/discount-stack-calculator";
import { calculateExtraPaymentImpact } from "@/utils/calculators/extra-payment-calculator";
import { calculateTakeHomeSalary } from "@/utils/calculators/salary-calculator";
import { calculateSalesTax } from "@/utils/calculators/sales-tax-calculator";
import { calculateFuelCost } from "@/utils/calculators/fuel-cost-calculator";
import { calculateSimpleInterest } from "@/utils/calculators/simple-interest-calculator";
import { generateRandomNumbers } from "@/utils/calculators/random-number-generator";
import { calculateCompoundInterest, CompoundFrequency } from "@/utils/calculators/compound-interest-calculator";
import { calculateTip } from "@/utils/calculators/tip-calculator";
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
import { calculateSip } from "@/utils/calculators/sip-calculator";
import { calculateRetirement } from "@/utils/calculators/retirement-calculator";
import { calculateProteinNeeds, ProteinActivityLevel, ProteinGoal } from "@/utils/calculators/protein-calculator";
import { calculateTdee, Gender as TdeeGender, ActivityLevel as TdeeActivityLevel } from "@/utils/calculators/tdee-calculator";
import { calculateOvulation } from "@/utils/calculators/ovulation-calculator";
import { addDays } from "@/utils/calculators/add-days-calculator";
import { subtractDays } from "@/utils/calculators/subtract-days-calculator";
import { calculateTimeDuration } from "@/utils/calculators/time-duration-calculator";
import { calculateWeekNumber } from "@/utils/calculators/week-number-calculator";

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
    featured: true,
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
    interpret: (result) => {
      const years = Number(result.years);
      const totalDays = Number(result.totalDays);
      const nextBirthdayYears = years + 1;
      return [
        "You have lived approximately " + totalDays.toLocaleString() + " days so far.",
        "You will turn " + nextBirthdayYears + " on your next birthday.",
        "In total months, that's " + result.totalMonths + " months since birth.",
      ];
    },
explanation: [
      {
        heading: "How to calculate exact age (formula and example)",
        paragraphs: [
          "To calculate age from date of birth, this tool finds the difference between your date of birth and a target date (today, by default) by counting complete years, then complete months within the remaining time, then the remaining days.",
          "For example, someone born on March 15, 2000, calculating their exact age on July 15, 2026, has completed 26 full years (March 2000 to March 2026), plus 4 more complete months (March to July), plus 0 remaining days, giving an age of 26 years, 4 months, 0 days.",
        ],
      },
      {
        heading: "Why age in years, months and days differs from a simple day count",
        paragraphs: [
          "A naive age calculator might divide total days by 365.25, but this doesn't match how people actually express their age. This tool instead counts real calendar years, months and days, correctly handling that months have different lengths and that leap years add an extra day roughly every four years, the same method used to calculate age manually with a calendar.",
        ],
      },
    ],
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
    slug: "timezone-converter",
    category: "date-time",
    title: "Time Zone Converter",
    shortDescription: "Convert a date and time between different time zones.",
    metaDescription: "Free online time zone converter to convert a date and time between different time zones around the world.",
    h1: "Time Zone Converter",
    intro: "Convert a specific date and time from one time zone to another, useful for scheduling calls and meetings across regions.",
    icon: "🕐",
    status: "live",
    inputFields: [
    { key: "dateTimeLocal", label: "Date and Time", type: "datetime" },
     {
        key: "fromZone",
        label: "From Time Zone",
        type: "select",
        options: TIMEZONE_OPTIONS.map((tz) => ({
          label: formatTimezoneLabel(tz),
          value: tz,
        })),
      },
      {
        key: "toZone",
        label: "To Time Zone",
        type: "select",
        options: TIMEZONE_OPTIONS.map((tz) => ({
          label: formatTimezoneLabel(tz),
          value: tz,
        })),
      }, 
    ],
    resultFields: [
      { key: "convertedTime", label: "Converted Time", highlight: true },
      { key: "convertedDate", label: "Converted Date" },
    ],
    calculate: (inputs) => {
      const dateTimeLocal = String(inputs.dateTimeLocal ?? "");
      const fromZone = String(inputs.fromZone);
      const toZone = String(inputs.toZone);
      const output = convertTimezone(dateTimeLocal, fromZone, toZone);
      return { ...output };
    },
    explanation: [
      {
        heading: "How time zone conversion works",
        paragraphs: [
          "This tool interprets your entered date and time as local time in the 'From' time zone, then calculates the equivalent moment in the 'To' time zone, automatically accounting for each region's current UTC offset, including daylight saving time where applicable.",
        ],
      },
      {
        heading: "Why time zone conversion is tricky",
        paragraphs: [
          "Time zone offsets aren't fixed year-round in many regions due to daylight saving time, and some countries change DST rules on different dates than others, which is why a simple fixed-hour-difference calculation can be wrong depending on the time of year.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this account for daylight saving time?",
        answer: "Yes, this tool uses your browser's built-in time zone data, which automatically accounts for daylight saving time rules for the specific date you enter.",
      },
      {
        question: "What format should I use for the date and time?",
        answer: "Enter the date and time in the format YYYY-MM-DDTHH:MM, for example 2026-07-20T14:30 for July 20, 2026 at 2:30 PM.",
      },
    ],
    relatedSlugs: ["date-calculator", "countdown-timer"],
  },
  {
    slug: "working-days-calculator",
    category: "date-time",
    title: "Working Days Calculator",
    shortDescription: "Calculate the number of business days between two dates.",
    metaDescription: "Free online working days calculator to calculate the number of business days (excluding weekends) between two dates.",
    h1: "Working Days Calculator",
    intro: "Calculate the number of working days (Monday through Friday) between two dates, excluding weekends.",
    icon: "📅",
    status: "live",
    inputFields: [
      { key: "startDate", label: "Start Date", type: "date" },
      { key: "endDate", label: "End Date", type: "date" },
    ],
    resultFields: [
      { key: "workingDays", label: "Working Days", highlight: true },
      { key: "totalDays", label: "Total Days" },
      { key: "weekendDays", label: "Weekend Days" },
    ],
    calculate: (inputs) => {
      const startDate = String(inputs.startDate ?? "");
      const endDate = String(inputs.endDate ?? "");
      const output = calculateWorkingDays(startDate, endDate);
      return { ...output };
    },
    explanation: [
      {
        heading: "How working days are counted",
        paragraphs: [
          "This tool counts every day between your two dates (inclusive), then separates them into working days (Monday through Friday) and weekend days (Saturday and Sunday), giving you the count of each.",
        ],
      },
      {
        heading: "What this doesn't account for",
        paragraphs: [
          "This calculator excludes weekends only, it doesn't account for public holidays, which vary by country and region. For project planning around specific holidays, subtract those dates manually from the working days total.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this account for public holidays?",
        answer: "No, this tool only excludes Saturdays and Sundays. Public holidays vary significantly by country and aren't included in this calculation.",
      },
      {
        question: "Are both the start and end date included in the count?",
        answer: "Yes, both dates are included as part of the total day count, consistent with how most people count 'from X to Y' inclusively.",
      },
    ],
    relatedSlugs: ["date-calculator", "age-calculator"],
  },
  {
    slug: "savings-goal-calculator",
    category: "finance",
    title: "Savings Goal Calculator",
    shortDescription: "Calculate the monthly savings needed to reach a financial goal.",
    metaDescription: "Free online savings goal calculator to calculate how much you need to save monthly to reach a target amount.",
    h1: "Savings Goal Calculator",
    intro: "Calculate how much you need to save each month to reach a specific savings goal by a target date, accounting for interest earned along the way.",
    icon: "🐷",
    status: "live",
    inputFields: [
      { key: "targetAmount", label: "Savings Goal", type: "number", step: 0.01, placeholder: "e.g. 20000" },
      { key: "currentSavings", label: "Current Savings", type: "number", step: 0.01, defaultValue: 0 },
      { key: "months", label: "Time Frame (Months)", type: "number", step: 1, placeholder: "e.g. 24" },
      { key: "annualRate", label: "Expected Annual Interest Rate (%)", type: "number", step: 0.1, defaultValue: 0 },
    ],
    resultFields: [
      { key: "monthlyContribution", label: "Monthly Contribution Needed", highlight: true },
      { key: "totalContributions", label: "Total You'll Contribute" },
      { key: "totalInterestEarned", label: "Interest Earned" },
    ],
    calculate: (inputs) => {
      const targetAmount = Number(inputs.targetAmount);
      const currentSavings = Number(inputs.currentSavings);
      const months = Number(inputs.months);
      const annualRate = Number(inputs.annualRate);
      const output = calculateSavingsGoal(targetAmount, currentSavings, months, annualRate);
      return { ...output };
    },
    explanation: [
      {
        heading: "How the required monthly contribution is calculated",
        paragraphs: [
          "This calculator uses the future value of an annuity formula, working backward from your target amount to determine the fixed monthly contribution needed, accounting for both your existing savings growing with interest and your new monthly contributions also earning interest over time.",
        ],
      },
      {
        heading: "Why interest rate matters for your savings plan",
        paragraphs: [
          "Even a modest interest rate reduces how much you need to personally contribute each month, since your money grows on its own over time. Setting the interest rate to 0% shows the contribution needed with no growth, useful as a conservative baseline.",
        ],
      },
    ],
    faqs: [
      {
        question: "What interest rate should I use?",
        answer: "Use the expected annual interest rate for wherever you're keeping the savings, such as a high-yield savings account or investment account. Enter 0 if you want a conservative estimate with no growth.",
      },
      {
        question: "What if I already have enough saved?",
        answer: "If your current savings already meet or exceed your goal, this calculator isn't needed, you've already reached your target.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "net-worth-calculator"],
  },
  {
    slug: "font-signature-generator",
    category: "misc",
    title: "Font Signature Generator",
    shortDescription: "Create a signature image using stylish handwriting fonts.",
    metaDescription: "Free online font signature generator to create a signature image using handwriting-style fonts, downloadable as a transparent PNG.",
    h1: "Font Signature Generator",
    intro: "Type your name and choose a handwriting-style font to generate a signature image you can download and use in documents or emails.",
    icon: "✒️",
    status: "live",
    widgetType: "fontSignature",
    explanation: [
      {
        heading: "How this signature generator works",
        paragraphs: [
          "This tool renders your name using a selected handwriting-style font onto a canvas, then exports it as a transparent PNG image you can paste into documents, PDFs, or email signatures.",
        ],
      },
      {
        heading: "When to use a font signature vs a drawn signature",
        paragraphs: [
          "A font-based signature is quick and consistent, useful for casual documents or a polished, repeatable look. For documents requiring a more personal, hand-drawn appearance, our Handwritten Signature Pad lets you draw your signature directly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this signature legally binding?",
        answer: "A font-based signature image is generally not considered a secure electronic signature for legal purposes. For legally binding signatures, use a dedicated e-signature service with proper authentication and audit trails.",
      },
      {
        question: "Does the downloaded image have a transparent background?",
        answer: "Yes, the downloaded PNG has a transparent background, making it easy to place on top of documents or letterheads.",
      },
    ],
    relatedSlugs: ["handwritten-signature-pad", "email-signature-generator"],
  },
  {
    slug: "handwritten-signature-pad",
    category: "misc",
    title: "Handwritten Signature Pad",
    shortDescription: "Draw your signature with mouse or touch and download it.",
    metaDescription: "Free online handwritten signature pad to draw your signature with your mouse or finger and download it as a transparent PNG.",
    h1: "Handwritten Signature Pad",
    intro: "Draw your signature using your mouse or touchscreen, then download it as a transparent PNG image.",
    icon: "✍️",
    status: "live",
    widgetType: "handwrittenSignature",
    explanation: [
      {
        heading: "How this signature pad works",
        paragraphs: [
          "This tool tracks your mouse or finger movement across a canvas as you draw, capturing your signature as a series of connected lines, then lets you export the result as a transparent PNG image.",
        ],
      },
      {
        heading: "Best used on a touchscreen",
        paragraphs: [
          "While this works with a mouse, drawing a natural-looking signature is usually easier on a touchscreen device like a phone or tablet, or with a stylus if your device supports one.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is my drawn signature saved anywhere?",
        answer: "No, your signature exists only in your browser while you're on this page and is never uploaded or stored anywhere.",
      },
      {
        question: "Can I redo my signature if I make a mistake?",
        answer: "Yes, use the Clear button to erase the canvas and start over.",
      },
    ],
    relatedSlugs: ["font-signature-generator", "email-signature-generator"],
  },
  {
    slug: "email-signature-generator",
    category: "misc",
    title: "Email Signature Generator",
    shortDescription: "Create a professional HTML email signature to paste into your email client.",
    metaDescription: "Free online email signature generator to create a professional HTML email signature for Gmail, Outlook and other email clients.",
    h1: "Email Signature Generator",
    intro: "Fill in your details to generate a professional HTML email signature you can copy and paste into Gmail, Outlook or any email client.",
    icon: "📧",
    status: "live",
    widgetType: "emailSignature",
    explanation: [
      {
        heading: "How to add this signature to your email client",
        paragraphs: [
          "Fill in your details, then copy the generated HTML code and paste it into your email client's signature settings, most clients like Gmail and Outlook accept pasted formatted text directly into their signature editor, preserving the styling.",
        ],
      },
      {
        heading: "What makes a good email signature",
        paragraphs: [
          "A good email signature is simple, includes only essential contact details, and avoids large images or excessive links that can slow down loading or look cluttered on mobile devices.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will this work in Gmail and Outlook?",
        answer: "Yes, the generated HTML uses a simple table-based layout for broad email client compatibility, paste it directly into your client's signature settings.",
      },
      {
        question: "Is my information stored anywhere?",
        answer: "No, everything is generated locally in your browser, your details are never sent to or stored on any server.",
      },
    ],
    relatedSlugs: ["font-signature-generator", "handwritten-signature-pad"],
  },
  {
    slug: "email-format-validator",
    category: "security",
    title: "Email Format Validator",
    shortDescription: "Check if an email address is correctly formatted.",
    metaDescription: "Free online email format validator to check if an email address is correctly formatted and catch common domain typos.",
    h1: "Email Format Validator",
    intro: "Check whether an email address is correctly formatted, and catch common typos in popular email domains.",
    icon: "✅",
    status: "live",
    inputFields: [
      { key: "email", label: "Email Address", type: "text", placeholder: "e.g. name@example.com" },
    ],
    resultFields: [
      { key: "valid", label: "Format Check", highlight: true },
      { key: "reason", label: "Details" },
      { key: "suggestion", label: "Suggested Correction" },
    ],
    calculate: (inputs) => {
      const email = String(inputs.email ?? "");
      const output = validateEmailFormat(email);
      return { ...output };
    },
    explanation: [
      {
        heading: "What this tool checks",
        paragraphs: [
          "This validator checks that an email address follows correct formatting rules (a username, an @ symbol, and a domain with a valid structure), and flags common typos in popular email domains like gmail.com or yahoo.com.",
        ],
      },
      {
        heading: "What this tool doesn't check",
        paragraphs: [
          "This tool checks format only, it does not verify whether the mailbox actually exists or is currently active, since that would require server-side domain and mailbox verification beyond what a browser-based tool can safely or appropriately perform.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this confirm the email address is real and active?",
        answer: "No, this tool only checks formatting and common typos. It cannot confirm whether a mailbox actually exists or is currently receiving mail.",
      },
      {
        question: "Is my email address sent anywhere?",
        answer: "No, all checking happens directly in your browser, the email address you enter is never transmitted or stored anywhere.",
      },
    ],
    relatedSlugs: ["password-generator"],
  },
  {
    slug: "watermark-pdf",
    category: "pdf",
    title: "Watermark PDF",
    shortDescription: "Add a diagonal text watermark to every page of a PDF.",
    metaDescription: "Free online tool to add a custom text watermark to every page of a PDF file, with adjustable opacity.",
    h1: "Watermark PDF",
    intro: "Add a diagonal text watermark, like CONFIDENTIAL or DRAFT, to every page of a PDF document.",
    icon: "🏷️",
    status: "live",
    widgetType: "watermarkPdf",
    explanation: [
      {
        heading: "How watermarking works",
        paragraphs: [
          "This tool draws your chosen text diagonally across the center of every page in your PDF, at an adjustable transparency level, so the underlying content remains visible while clearly marking the document.",
        ],
      },
      {
        heading: "Common uses for watermarks",
        paragraphs: [
          "Watermarks are commonly used to mark documents as DRAFT, CONFIDENTIAL, or SAMPLE, or to indicate ownership before sharing a document publicly, without permanently editing the original content underneath.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I remove the watermark later?",
        answer: "This tool creates a new PDF with the watermark embedded as part of the page content, it isn't a removable overlay, so keep your original file if you need an unwatermarked version later.",
      },
      {
        question: "Does this upload my file anywhere?",
        answer: "No, the watermark is applied entirely in your browser, your PDF is never uploaded to any server.",
      },
    ],
    relatedSlugs: ["merge-pdf", "rotate-pdf", "compress-pdf"],
  },
  {
    slug: "debt-payoff-calculator",
    category: "finance",
    title: "Debt Payoff Calculator",
    shortDescription: "Compare Avalanche vs Snowball strategies to pay off multiple debts.",
    metaDescription: "Free online debt payoff calculator to compare the Avalanche and Snowball methods for paying off multiple debts.",
    h1: "Debt Payoff Calculator",
    intro: "Enter up to three debts to see how long it will take to become debt-free using the Avalanche or Snowball payoff strategy.",
    icon: "❄️",
    status: "live",
    widgetType: "debtPayoff",
    explanation: [
      {
        heading: "Avalanche vs Snowball payoff strategies",
        paragraphs: [
          "The Avalanche method pays extra toward the debt with the highest interest rate first, minimizing total interest paid over time. The Snowball method pays extra toward the smallest balance first, prioritizing quick wins and psychological momentum over pure mathematical efficiency.",
        ],
      },
      {
        heading: "How this calculator works",
        paragraphs: [
          "Each debt makes its minimum payment every month, while any extra payment you specify is directed entirely toward one debt at a time based on your chosen strategy, moving to the next debt once the current target is fully paid off.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which strategy saves more money?",
        answer: "Avalanche typically saves more in total interest since it targets high-interest debt first, but Snowball can be more motivating for some people since it clears smaller debts faster.",
      },
      {
        question: "Can I enter more than three debts?",
        answer: "This tool supports up to three debts at a time. For more debts, you can combine smaller balances into a single entry as an approximation.",
      },
    ],
    relatedSlugs: ["credit-card-payoff-calculator", "extra-payment-calculator"],
  },
  {
    slug: "quadratic-solver",
    category: "misc",
    title: "Quadratic Equation Solver",
    shortDescription: "Solve quadratic equations of the form ax² + bx + c = 0.",
    metaDescription: "Free online quadratic equation solver to find the roots of ax² + bx + c = 0 using the quadratic formula.",
    h1: "Quadratic Equation Solver",
    intro: "Solve any quadratic equation in the form ax² + bx + c = 0 using the quadratic formula.",
    icon: "√",
    status: "live",
    inputFields: [
      { key: "a", label: "a (coefficient of x²)", type: "number", step: 0.01, placeholder: "e.g. 1" },
      { key: "b", label: "b (coefficient of x)", type: "number", step: 0.01, placeholder: "e.g. -3" },
      { key: "c", label: "c (constant)", type: "number", step: 0.01, placeholder: "e.g. 2" },
    ],
    resultFields: [
      { key: "root1", label: "Root 1 (x₁)", highlight: true },
      { key: "root2", label: "Root 2 (x₂)", highlight: true },
      { key: "discriminant", label: "Discriminant" },
      { key: "nature", label: "Nature of Roots" },
    ],
    calculate: (inputs) => {
      const a = Number(inputs.a);
      const b = Number(inputs.b);
      const c = Number(inputs.c);
      const output = solveQuadratic(a, b, c);
      return { ...output };
    },
    explanation: [
      {
        heading: "The quadratic formula",
        paragraphs: [
          "The quadratic formula solves ax² + bx + c = 0 for x: x = (−b ± √(b² − 4ac)) / (2a). The term b² − 4ac is called the discriminant, and its sign determines whether the equation has two real roots, one repeated real root, or two complex roots.",
        ],
      },
      {
        heading: "Reading the discriminant",
        paragraphs: [
          "A positive discriminant means two distinct real roots. A discriminant of exactly zero means one repeated real root (the parabola touches the x-axis at a single point). A negative discriminant means the roots are complex numbers, meaning the parabola never crosses the x-axis.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if 'a' is zero?",
        answer: "If a equals zero, the equation isn't quadratic anymore, it becomes linear. This calculator requires a nonzero value for a.",
      },
      {
        question: "What does a complex root mean?",
        answer: "A complex root includes an imaginary component (shown with 'i'), meaning the equation's graph doesn't intersect the x-axis at any real number.",
      },
    ],
    relatedSlugs: ["standard-deviation-calculator", "fraction-calculator"],
  },
  {
    slug: "rotate-pdf",
    category: "pdf",
    title: "Rotate PDF",
    shortDescription: "Rotate all pages in a PDF file.",
    metaDescription: "Free online tool to rotate all pages of a PDF file by 90, 180 or 270 degrees.",
    h1: "Rotate PDF",
    intro: "Rotate every page in a PDF document by 90, 180 or 270 degrees, processed entirely in your browser.",
    icon: "🔄",
    status: "live",
    widgetType: "rotatePdf",
    explanation: [
      {
        heading: "How PDF rotation works",
        paragraphs: [
          "This tool updates the rotation setting stored in each page of your PDF, rather than actually redrawing the page content, this is the same mechanism PDF viewers use internally, so the rotation applies instantly and preserves full document quality.",
        ],
      },
      {
        heading: "Why this stays entirely in your browser",
        paragraphs: [
          "Since rotation is applied locally using your browser's own processing, your PDF file is never uploaded to any server.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this rotate all pages the same way?",
        answer: "Yes, the selected rotation is applied to every page in the document uniformly.",
      },
      {
        question: "Will rotating reduce PDF quality?",
        answer: "No, rotation only changes the page's orientation metadata, the actual page content is unaffected.",
      },
    ],
    relatedSlugs: ["merge-pdf", "split-pdf", "compress-pdf"],
  },
  {
    slug: "markdown-previewer",
    category: "developer",
    title: "Markdown Previewer",
    shortDescription: "Write Markdown and see a live rendered preview.",
    metaDescription: "Free online Markdown previewer to write Markdown and see a live rendered HTML preview side by side.",
    h1: "Markdown Previewer",
    intro: "Write Markdown on the left and see a live-rendered preview on the right, updated as you type.",
    icon: "📄",
    status: "live",
    widgetType: "markdownPreview",
    explanation: [
      {
        heading: "What is Markdown",
        paragraphs: [
          "Markdown is a lightweight text formatting syntax that converts simple symbols, like # for headings or ** for bold text, into formatted HTML. It's widely used in README files, documentation, forum posts, and note-taking apps because it's readable even in its raw, unformatted form.",
        ],
      },
      {
        heading: "Common Markdown syntax",
        paragraphs: [
          "# creates a heading, ** or __ around text makes it bold, * or _ makes it italic, - or * at the start of a line creates a bullet list, and [text](url) creates a hyperlink.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is my text saved anywhere?",
        answer: "No, all rendering happens directly in your browser, nothing you type is sent to or stored on any server.",
      },
      {
        question: "Which Markdown flavor does this support?",
        answer: "This uses standard Markdown syntax (the CommonMark-based 'marked' parser), covering headings, lists, links, bold/italic text, code blocks and more.",
      },
    ],
    relatedSlugs: ["word-counter", "json-formatter"],
  },
  {
    slug: "scientific-calculator",
    category: "misc",
    title: "Scientific Calculator",
    shortDescription: "A scientific calculator with trigonometric and logarithmic functions.",
    metaDescription: "Free online scientific calculator with support for trigonometric, logarithmic and exponential functions.",
    h1: "Scientific Calculator",
    intro: "A scientific calculator supporting basic arithmetic, trigonometric functions, logarithms, square roots and exponents.",
    icon: "🧮",
    status: "live",
    widgetType: "scientificCalculator",
    explanation: [
      {
        heading: "Supported operations",
        paragraphs: [
          "This calculator supports standard arithmetic (+, −, ×, ÷), exponents (^), square roots, and trigonometric functions (sin, cos, tan), along with logarithms (log for base 10, ln for natural log). Trigonometric functions use radians, not degrees.",
        ],
      },
      {
        heading: "How expressions are evaluated",
        paragraphs: [
          "You can type a full expression like sqrt(16) + 2^3 and it will be evaluated following standard order of operations, respecting parentheses and function precedence.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this use degrees or radians for trig functions?",
        answer: "Trigonometric functions use radians. To convert degrees to radians, multiply by pi and divide by 180.",
      },
      {
        question: "Can I use parentheses for grouping?",
        answer: "Yes, parentheses work as expected to control the order of operations within your expression.",
      },
    ],
    relatedSlugs: ["quadratic-solver", "standard-deviation-calculator"],
  },
  {
    slug: "jpg-to-pdf",
    category: "pdf",
    title: "JPG to PDF",
    shortDescription: "Convert JPG or PNG images into a PDF document.",
    metaDescription: "Free online JPG to PDF converter to combine one or more images into a single PDF document.",
    h1: "JPG to PDF",
    intro: "Convert one or more JPG or PNG images into a single PDF document, processed entirely in your browser.",
    icon: "🖼️",
    status: "live",
    widgetType: "jpgToPdf",
    explanation: [
      {
        heading: "How JPG to PDF conversion works",
        paragraphs: [
          "This tool embeds each image you select directly into a new PDF document, creating one page per image sized to match the image's original dimensions. You can reorder images before converting to control the page order in the final PDF.",
        ],
      },
      {
        heading: "Why this stays entirely in your browser",
        paragraphs: [
          "Unlike many online image-to-PDF converters that upload your files to a server, this tool builds the PDF locally using your browser's own processing, so your images are never transmitted anywhere.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I combine both JPG and PNG images in one PDF?",
        answer: "Yes, you can mix JPG and PNG images in the same conversion, each will become its own page in the resulting PDF.",
      },
      {
        question: "Can I change the order of pages?",
        answer: "Yes, use the up and down buttons next to each image to reorder them before converting, images are added to the PDF in the order shown.",
      },
    ],
    relatedSlugs: ["pdf-to-jpg", "merge-pdf"],
  },
  {
    slug: "auto-loan-calculator",
    category: "finance",
    title: "Auto Loan Calculator",
    shortDescription: "Calculate your monthly car loan payment and full amortization schedule.",
    metaDescription: "Free online auto loan calculator to calculate your monthly car payment with a full amortization schedule.",
    h1: "Auto Loan Calculator",
    intro: "Calculate your estimated monthly car loan payment based on loan amount, interest rate and term, with a full amortization schedule.",
    icon: "🚗",
    status: "live",
    widgetType: "amortization",
    amortizationTenureUnit: "months",
    explanation: [
      {
        heading: "How auto loan payments are calculated",
        paragraphs: [
          "This auto loan calculator uses the same standard amortization formula as our other loan calculators: Monthly Payment = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan amount, r is the monthly interest rate, and n is the total number of monthly payments over your loan term.",
        ],
      },
      {
        heading: "What this calculator doesn't include",
        paragraphs: [
          "This tool estimates principal and interest only. It doesn't include sales tax, registration fees, dealer add-ons, or trade-in value, all of which affect the actual amount financed and your real monthly payment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use the total car price or the amount after down payment?",
        answer: "Enter the amount you're actually financing, meaning the car's price minus any down payment or trade-in value, since that's the balance the loan and interest are calculated on.",
      },
      {
        question: "What's a typical auto loan term?",
        answer: "Common auto loan terms range from 36 to 72 months, with longer terms offering lower monthly payments but more total interest paid over the loan's life.",
      },
    ],
    relatedSlugs: ["emi-calculator", "loan-calculator"],
  },
  {
    slug: "breakeven-calculator",
    category: "finance",
    title: "Break-Even Calculator",
    shortDescription: "Calculate how many units you need to sell to break even.",
    metaDescription: "Free online break-even calculator to calculate how many units you need to sell to cover your fixed costs.",
    h1: "Break-Even Calculator",
    intro: "Calculate the number of units you need to sell, and the revenue required, to cover your fixed costs and break even.",
    icon: "⚖️",
    status: "live",
    inputFields: [
      { key: "fixedCosts", label: "Total Fixed Costs", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "pricePerUnit", label: "Price per Unit", type: "number", step: 0.01, placeholder: "e.g. 50" },
      { key: "variableCostPerUnit", label: "Variable Cost per Unit", type: "number", step: 0.01, placeholder: "e.g. 20" },
    ],
    resultFields: [
      { key: "breakevenUnits", label: "Break-Even Units", highlight: true },
      { key: "breakevenRevenue", label: "Break-Even Revenue", highlight: true },
    ],
    calculate: (inputs) => {
      const fixedCosts = Number(inputs.fixedCosts);
      const pricePerUnit = Number(inputs.pricePerUnit);
      const variableCostPerUnit = Number(inputs.variableCostPerUnit);
      const output = calculateBreakeven(fixedCosts, pricePerUnit, variableCostPerUnit);
      return { ...output };
    },
    explanation: [
      {
        heading: "How break-even point is calculated",
        paragraphs: [
          "Break-even units are calculated as: Fixed Costs ÷ (Price per Unit − Variable Cost per Unit). The denominator, called the contribution margin, represents how much each unit sold contributes toward covering fixed costs after accounting for the cost of producing it.",
          "For example, with 10,000 in fixed costs, a price of 50 per unit, and a variable cost of 20 per unit, the contribution margin is 30, giving a break-even point of 10,000 ÷ 30 ≈ 334 units.",
        ],
      },
      {
        heading: "Fixed costs vs variable costs",
        paragraphs: [
          "Fixed costs (like rent or salaries) stay the same regardless of how many units you sell. Variable costs (like materials per unit) scale directly with production volume. Understanding this split is essential for break-even analysis.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my price per unit is lower than my variable cost?",
        answer: "In that case, you lose money on every unit sold regardless of volume, and there's no break-even point. The calculator will show an error in this scenario.",
      },
      {
        question: "Does this account for taxes or one-time startup costs?",
        answer: "No, this is a simplified break-even model covering ongoing fixed and variable costs only, not taxes or one-time capital expenses.",
      },
    ],
    relatedSlugs: ["markup-calculator", "roi-calculator"],
  },
  {
    slug: "heart-rate-zone-calculator",
    category: "health",
    title: "Heart Rate Zone Calculator",
    shortDescription: "Calculate your target heart rate zones for exercise.",
    metaDescription: "Free online heart rate zone calculator to find your target heart rate zones for different exercise intensities based on age.",
    h1: "Heart Rate Zone Calculator",
    intro: "Calculate your estimated maximum heart rate and target heart rate zones for different exercise intensities.",
    icon: "❤️",
    status: "live",
    inputFields: [
      { key: "age", label: "Age (years)", type: "number", step: 1, placeholder: "e.g. 30" },
    ],
    resultFields: [
      { key: "maxHeartRate", label: "Estimated Max Heart Rate", unit: "bpm", highlight: true },
      { key: "zone1", label: "Zone 1 (Warm Up, 50-60%)" },
      { key: "zone2", label: "Zone 2 (Fat Burn, 60-70%)" },
      { key: "zone3", label: "Zone 3 (Aerobic, 70-80%)" },
      { key: "zone4", label: "Zone 4 (Anaerobic, 80-90%)" },
      { key: "zone5", label: "Zone 5 (Max Effort, 90-100%)" },
    ],
    calculate: (inputs) => {
      const age = Number(inputs.age);
      const output = calculateHeartRateZones(age);
      return { ...output };
    },
    explanation: [
      {
        heading: "How heart rate zones are calculated",
        paragraphs: [
          "This calculator uses the common formula: Maximum Heart Rate = 220 − Age. Each training zone is then calculated as a percentage range of that maximum, from Zone 1 (light warm-up intensity) up to Zone 5 (maximum effort).",
        ],
      },
      {
        heading: "What each zone is used for",
        paragraphs: [
          "Zone 2 is often targeted for fat-burning and base endurance training, Zone 3 for general aerobic fitness, and Zones 4-5 for high-intensity interval training and performance gains. Training across different zones supports different fitness goals.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is the 220 minus age formula?",
        answer: "It's a widely used general estimate, but individual maximum heart rate can vary meaningfully from this formula. A supervised fitness or medical test provides a more precise personal figure.",
      },
      {
        question: "Should I consult a doctor before high-intensity training?",
        answer: "If you have any heart conditions or are new to exercise, consulting a healthcare provider before starting high-intensity training is recommended.",
      },
    ],
    relatedSlugs: ["bmr-calculator", "calorie-goal-calculator"],
  },
  {
    slug: "standard-deviation-calculator",
    category: "misc",
    title: "Standard Deviation Calculator",
    shortDescription: "Calculate mean, variance and standard deviation from a data set.",
    metaDescription: "Free online standard deviation calculator to calculate mean, variance and standard deviation from a list of numbers.",
    h1: "Standard Deviation Calculator",
    intro: "Calculate the mean, variance and standard deviation of a data set by entering numbers separated by commas or spaces.",
    icon: "📊",
    status: "live",
    inputFields: [
      { key: "numbers", label: "Numbers (comma or space separated)", type: "text", placeholder: "e.g. 4, 8, 15, 16, 23, 42" },
    ],
    resultFields: [
      { key: "mean", label: "Mean", highlight: true },
      { key: "standardDeviation", label: "Standard Deviation", highlight: true },
      { key: "variance", label: "Variance" },
      { key: "count", label: "Count" },
    ],
    calculate: (inputs) => {
      const numbers = String(inputs.numbers ?? "");
      const output = calculateStandardDeviation(numbers);
      return { ...output };
    },
    explanation: [
      {
        heading: "How standard deviation is calculated",
        paragraphs: [
          "Standard deviation measures how spread out a set of numbers is from the mean. It's calculated by finding the mean, then the squared difference of each number from that mean (called variance), then taking the square root of the variance.",
        ],
      },
      {
        heading: "Population vs sample standard deviation",
        paragraphs: [
          "This calculator computes population standard deviation, dividing by the total count of numbers. Sample standard deviation (used when your data is a sample of a larger population) divides by count minus one instead, resulting in a slightly larger value.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does a low vs high standard deviation mean?",
        answer: "A low standard deviation means the numbers are clustered closely around the mean, while a high standard deviation means they're spread out over a wider range.",
      },
      {
        question: "How do I enter my numbers?",
        answer: "Enter numbers separated by commas, spaces, or both, for example '4, 8, 15, 16, 23, 42' or '4 8 15 16 23 42' both work.",
      },
    ],
    relatedSlugs: ["percentage-calculator"],
  },
  {
    slug: "find-and-replace",
    category: "text",
    title: "Find and Replace Tool",
    shortDescription: "Find and replace text, with optional regex support.",
    metaDescription: "Free online find and replace tool to search and replace text, with optional case sensitivity and regex support.",
    h1: "Find and Replace Tool",
    intro: "Search for text and replace all occurrences instantly, with optional case sensitivity and regular expression support.",
    icon: "🔁",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste your text here..." },
      { key: "findValue", label: "Find", type: "text", placeholder: "Text to find" },
      { key: "replaceValue", label: "Replace With", type: "text", placeholder: "Replacement text" },
      { key: "caseSensitive", label: "Case Sensitive", type: "checkbox", defaultValue: "false" },
      { key: "useRegex", label: "Use Regular Expression", type: "checkbox", defaultValue: "false" },
    ],
    resultFields: [{ key: "result", label: "Result", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const findValue = String(inputs.findValue ?? "");
      const replaceValue = String(inputs.replaceValue ?? "");
      const caseSensitive = inputs.caseSensitive === "true";
      const useRegex = inputs.useRegex === "true";
      const result = findAndReplace(text, findValue, replaceValue, { caseSensitive, useRegex });
      return { result };
    },
    explanation: [
      {
        heading: "How find and replace works",
        paragraphs: [
          "This tool searches your text for every occurrence of the value you enter in 'Find,' and replaces each one with your 'Replace With' value. By default, it treats your search term as plain text, not a pattern.",
        ],
      },
      {
        heading: "Using regular expressions",
        paragraphs: [
          "Enabling 'Use Regular Expression' lets you use pattern-matching syntax in the Find field, for example \\d+ to match any sequence of digits, useful for more advanced find-and-replace operations beyond exact text matches.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is my text sent to a server?",
        answer: "No, all find-and-replace processing happens directly in your browser, your text is never transmitted anywhere.",
      },
      {
        question: "What happens if my regex pattern is invalid?",
        answer: "If you enable regex mode and enter an invalid pattern, the tool will show an error explaining the pattern couldn't be processed.",
      },
    ],
    relatedSlugs: ["text-diff-checker", "regex-tester"],
  },
  {
    slug: "credit-card-payoff-calculator",
    category: "finance",
    title: "Credit Card Payoff Calculator",
    shortDescription: "See how long it will take to pay off a credit card balance.",
    metaDescription: "Free online credit card payoff calculator to see how long it will take to pay off your balance and how much interest you'll pay.",
    h1: "Credit Card Payoff Calculator",
    intro: "Calculate how many months it will take to pay off a credit card balance at a fixed monthly payment, and how much interest you'll pay in total.",
    icon: "💳",
    status: "live",
    inputFields: [
      { key: "balance", label: "Current Balance", type: "number", step: 0.01, placeholder: "e.g. 5000" },
      { key: "annualApr", label: "Annual APR (%)", type: "number", step: 0.01, placeholder: "e.g. 22" },
      { key: "monthlyPayment", label: "Monthly Payment", type: "number", step: 0.01, placeholder: "e.g. 200" },
    ],
    resultFields: [
      { key: "monthsToPayoff", label: "Months to Pay Off", highlight: true },
      { key: "totalInterest", label: "Total Interest", highlight: true },
      { key: "totalPaid", label: "Total Amount Paid" },
    ],
    calculate: (inputs) => {
      const balance = Number(inputs.balance);
      const annualApr = Number(inputs.annualApr);
      const monthlyPayment = Number(inputs.monthlyPayment);
      const output = calculateCreditCardPayoff(balance, annualApr, monthlyPayment);
      return { ...output };
    },
    explanation: [
      {
        heading: "How credit card payoff time is calculated",
        paragraphs: [
          "This calculator simulates your balance month by month: each month, interest is charged on the remaining balance, and your payment first covers that interest, with the rest reducing the principal, continuing until the balance reaches zero.",
        ],
      },
      {
        heading: "Why credit card debt can take so long to pay off",
        paragraphs: [
          "Credit cards typically carry much higher interest rates than other loans, often 15-25% APR or more, so a large portion of a minimum payment can go toward interest rather than reducing the actual balance, which is why balances can take years to clear at low payment amounts.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my payment doesn't cover the interest?",
        answer: "If your monthly payment is less than or equal to the interest charged each month, the balance will never decrease. The calculator will show an error in this case rather than an incorrect result.",
      },
      {
        question: "Does this account for new purchases added to the card?",
        answer: "No, this assumes no new charges are added and only the existing balance is being paid down.",
      },
    ],
    relatedSlugs: ["extra-payment-calculator", "simple-interest-calculator"],
  },
  {
    slug: "calorie-goal-calculator",
    category: "health",
    title: "Calorie Calculator for Weight Goals",
    shortDescription: "Calculate your daily calorie target to lose, maintain or gain weight.",
    metaDescription: "Free online calorie calculator to find your daily calorie target based on your weight loss, maintenance or weight gain goal.",
    h1: "Calorie Calculator for Weight Goals",
    intro: "Calculate your daily calorie target based on your weight goal and desired rate of change per week.",
    icon: "🔥",
    status: "live",
    inputFields: [
      { key: "gender", label: "Gender", type: "select", options: [
        { label: "Male", value: "male" }, { label: "Female", value: "female" },
      ] },
      { key: "age", label: "Age (years)", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
      { key: "activityLevel", label: "Activity Level", type: "select", options: [
        { label: "Sedentary", value: "sedentary" },
        { label: "Light", value: "light" },
        { label: "Moderate", value: "moderate" },
        { label: "Active", value: "active" },
        { label: "Very Active", value: "veryActive" },
      ] },
      { key: "goal", label: "Goal", type: "select", options: [
        { label: "Lose Weight", value: "lose" },
        { label: "Maintain Weight", value: "maintain" },
        { label: "Gain Weight", value: "gain" },
      ] },
      { key: "ratePerWeekKg", label: "Target Rate of Change (kg/week)", type: "number", step: 0.1, defaultValue: 0.5 },
    ],
    resultFields: [
      { key: "targetCalories", label: "Daily Calorie Target", highlight: true },
      { key: "maintenanceCalories", label: "Maintenance Calories" },
      { key: "weeklyChangeKg", label: "Expected Weekly Change (kg)" },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as CalorieGender;
      const age = Number(inputs.age);
      const heightCm = Number(inputs.heightCm);
      const weightKg = Number(inputs.weightKg);
      const activityLevel = String(inputs.activityLevel) as CalorieActivityLevel;
      const goal = String(inputs.goal) as CalorieGoal;
      const ratePerWeekKg = Number(inputs.ratePerWeekKg);
      const output = calculateCalorieGoal(gender, age, heightCm, weightKg, activityLevel, goal, ratePerWeekKg);
      return { ...output };
    },
    explanation: [
      {
        heading: "How your calorie target is calculated",
        paragraphs: [
          "This calculator first estimates your maintenance calories using the Mifflin-St Jeor BMR formula adjusted for activity level, then adjusts that number based on your goal: subtracting calories to lose weight, or adding calories to gain weight, using the common approximation that 1 kg of body weight corresponds to roughly 7700 kcal.",
        ],
      },
      {
        heading: "Why gradual rates of change are recommended",
        paragraphs: [
          "A rate of 0.25 to 0.5 kg per week is commonly considered a sustainable pace for weight loss or gain. Faster rates require larger calorie deficits or surpluses, which can be harder to maintain and may not be appropriate for everyone, consulting a healthcare provider is recommended for personalized guidance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this the same as the BMR calculator?",
        answer: "This tool builds on the same BMR formula as our BMR/Calorie Calculator, but adds a specific weight-change goal and target rate to calculate a daily calorie number tailored to that goal.",
      },
      {
        question: "What if my calorie target seems too low?",
        answer: "The calculator will show an error if your target rate of change would result in an unsafely low calorie target. Reduce your target rate of change or consult a healthcare provider.",
      },
    ],
    relatedSlugs: ["bmr-calculator", "bmi-calculator"],
  },
  {
    slug: "text-diff-checker",
    category: "text",
    title: "Text Diff Checker",
    shortDescription: "Compare two blocks of text and highlight the differences.",
    metaDescription: "Free online text diff checker to compare two blocks of text and highlight added and removed lines.",
    h1: "Text Diff Checker",
    intro: "Compare two versions of text line by line and see exactly what was added or removed.",
    icon: "🔀",
    status: "live",
    widgetType: "textDiff",
    explanation: [
      {
        heading: "How this text comparison tool works",
        paragraphs: [
          "This tool compares your two texts line by line, identifying which lines are unchanged, which were removed from the original, and which were added in the new version, similar to how source code diff tools work.",
        ],
      },
      {
        heading: "Reading the diff output",
        paragraphs: [
          "Lines shown in green with a plus sign were added in the second text. Lines shown in red with a minus sign were present in the first text but removed. Unmarked lines are unchanged and appear in both versions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this compare word by word or line by line?",
        answer: "This tool compares text at the line level, useful for comparing paragraphs, documents, or code where line structure matters.",
      },
      {
        question: "Is my text sent to a server?",
        answer: "No, the comparison happens entirely in your browser using JavaScript, your text is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["word-counter", "remove-duplicate-lines"],
  },
  {
    slug: "remove-duplicate-lines",
    category: "text",
    title: "Remove Duplicate Lines",
    shortDescription: "Remove duplicate lines from a block of text.",
    metaDescription: "Free online tool to remove duplicate lines from text, keeping only the first occurrence of each line.",
    h1: "Remove Duplicate Lines",
    intro: "Paste your text to instantly remove duplicate lines, keeping only the first occurrence of each.",
    icon: "🧹",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste text with duplicate lines..." },
      { key: "caseSensitive", label: "Case Sensitive Matching", type: "checkbox", defaultValue: "true" },
      { key: "trimWhitespace", label: "Ignore Leading/Trailing Whitespace", type: "checkbox", defaultValue: "true" },
    ],
    resultFields: [{ key: "result", label: "Result (Duplicates Removed)", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const caseSensitive = inputs.caseSensitive === "true";
      const trimWhitespace = inputs.trimWhitespace === "true";
      const result = removeDuplicateLines(text, { caseSensitive, trimWhitespace });
      return { result };
    },
    explanation: [
      {
        heading: "How duplicate line removal works",
        paragraphs: [
          "This tool reads your text line by line, keeping only the first occurrence of each unique line and discarding any repeats that appear later, preserving the original order of the remaining lines.",
        ],
      },
      {
        heading: "Case sensitivity and whitespace options",
        paragraphs: [
          "With case-sensitive matching enabled, 'Apple' and 'apple' are treated as different lines. With whitespace trimming enabled, trailing spaces or leading indentation won't prevent otherwise identical lines from being treated as duplicates.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this remove blank lines too?",
        answer: "Blank lines are treated like any other line, if multiple blank lines exist, only the first is kept unless you disable deduplication for that case manually by editing your input.",
      },
      {
        question: "Is my text sent to a server?",
        answer: "No, all processing happens directly in your browser, your text is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["text-diff-checker", "word-counter"],
  },
  {
    slug: "water-intake-calculator",
    category: "health",
    title: "Water Intake Calculator",
    shortDescription: "Estimate your daily recommended water intake.",
    metaDescription: "Free online water intake calculator to estimate how much water you should drink daily based on weight and activity level.",
    h1: "Water Intake Calculator",
    intro: "Estimate your recommended daily water intake based on your body weight and activity level.",
    icon: "💧",
    status: "live",
    inputFields: [
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
      { key: "activityLevel", label: "Activity Level", type: "select", options: [
        { label: "Low (little exercise)", value: "low" },
        { label: "Moderate (some exercise)", value: "moderate" },
        { label: "High (intense exercise)", value: "high" },
      ] },
    ],
    resultFields: [
      { key: "litersPerDay", label: "Liters per Day", highlight: true },
      { key: "cupsPerDay", label: "Cups per Day" },
      { key: "ouncesPerDay", label: "Ounces per Day" },
    ],
    calculate: (inputs) => {
      const weightKg = Number(inputs.weightKg);
      const activityLevel = String(inputs.activityLevel) as WaterActivityLevel;
      const output = calculateWaterIntake(weightKg, activityLevel);
      return { ...output };
    },
    explanation: [
      {
        heading: "How daily water intake is calculated",
        paragraphs: [
          "This calculator uses a common baseline of 33 ml of water per kilogram of body weight, then adds extra for activity level: 350 ml for moderate activity, or 700 ml for high activity, reflecting additional fluid loss through sweat during exercise.",
        ],
      },
      {
        heading: "This is a general estimate, not medical advice",
        paragraphs: [
          "Actual hydration needs vary based on climate, individual health conditions, and diet (since food also contributes fluid intake). This calculator provides a general starting point, not a personalized medical recommendation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this include water from food?",
        answer: "No, this estimates fluid intake from drinking water specifically. Food, especially fruits and vegetables, also contributes meaningfully to daily hydration.",
      },
      {
        question: "Should I drink more water in hot weather?",
        answer: "Yes, hot weather and increased sweating raise fluid needs beyond this baseline estimate.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "bmr-calculator"],
  },
  {
    slug: "pregnancy-due-date-calculator",
    category: "health",
    title: "Pregnancy Due Date Calculator",
    shortDescription: "Estimate your due date and current pregnancy week.",
    metaDescription: "Free online pregnancy due date calculator to estimate your due date and current week of pregnancy based on your last period.",
    h1: "Pregnancy Due Date Calculator",
    intro: "Estimate your due date and current week of pregnancy based on the first day of your last menstrual period.",
    icon: "👶",
    status: "live",
    inputFields: [
      { key: "lastPeriodDate", label: "First Day of Last Menstrual Period", type: "date" },
    ],
    resultFields: [
      { key: "dueDate", label: "Estimated Due Date", highlight: true },
      { key: "currentWeek", label: "Current Week", highlight: true },
      { key: "currentDay", label: "Days Into Current Week" },
      { key: "trimester", label: "Trimester" },
    ],
    calculate: (inputs) => {
      const lastPeriodDate = String(inputs.lastPeriodDate ?? "");
      const output = calculatePregnancyDueDate(lastPeriodDate);
      return { ...output };
    },
    explanation: [
      {
        heading: "How due date is calculated (Naegele's Rule)",
        paragraphs: [
          "This calculator uses Naegele's Rule, the standard method for estimating due dates: it adds 280 days (40 weeks) to the first day of your last menstrual period. This assumes a typical 28-day cycle with ovulation around day 14.",
        ],
      },
      {
        heading: "This is an estimate, not a diagnosis",
        paragraphs: [
          "Only about 5% of babies are born exactly on their estimated due date, most arrive within a two-week window on either side. An ultrasound-based estimate from a healthcare provider is generally more precise than this calculation alone.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is this due date estimate?",
        answer: "It's a widely used standard estimate, but actual delivery dates vary. An ultrasound dating scan from a healthcare provider typically offers a more precise estimate, especially for irregular cycles.",
      },
      {
        question: "What if I don't know the exact date of my last period?",
        answer: "If your last period date is uncertain, a healthcare provider can estimate your due date using an ultrasound instead, which is generally more reliable in that situation.",
      },
    ],
    relatedSlugs: ["age-calculator", "date-calculator"],
  },
  {
    slug: "fraction-calculator",
    category: "misc",
    title: "Fraction Calculator",
    shortDescription: "Add, subtract, multiply or divide fractions.",
    metaDescription: "Free online fraction calculator to add, subtract, multiply or divide fractions and simplify the result.",
    h1: "Fraction Calculator",
    intro: "Perform addition, subtraction, multiplication or division on two fractions, with the result automatically simplified.",
    icon: "➗",
    status: "live",
    inputFields: [
      { key: "num1", label: "First Numerator", type: "number", step: 1, placeholder: "e.g. 1" },
      { key: "den1", label: "First Denominator", type: "number", step: 1, placeholder: "e.g. 2" },
      { key: "operation", label: "Operation", type: "select", options: [
        { label: "Add (+)", value: "add" },
        { label: "Subtract (−)", value: "subtract" },
        { label: "Multiply (×)", value: "multiply" },
        { label: "Divide (÷)", value: "divide" },
      ] },
      { key: "num2", label: "Second Numerator", type: "number", step: 1, placeholder: "e.g. 1" },
      { key: "den2", label: "Second Denominator", type: "number", step: 1, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "result", label: "Result (Simplified)", highlight: true },
      { key: "decimal", label: "Decimal Equivalent" },
    ],
    calculate: (inputs) => {
      const num1 = Number(inputs.num1);
      const den1 = Number(inputs.den1);
      const num2 = Number(inputs.num2);
      const den2 = Number(inputs.den2);
      const operation = String(inputs.operation) as FractionOperation;
      const output = calculateFraction(num1, den1, num2, den2, operation);
      return { ...output };
    },
    explanation: [
      {
        heading: "How fraction operations work",
        paragraphs: [
          "Adding and subtracting fractions requires a common denominator, achieved by cross-multiplying: a/b + c/d = (a×d + c×b) / (b×d). Multiplying fractions is simpler: multiply numerators together and denominators together. Dividing by a fraction is the same as multiplying by its reciprocal.",
        ],
      },
      {
        heading: "Simplifying fractions automatically",
        paragraphs: [
          "After calculating the result, this tool automatically simplifies the fraction by dividing both numerator and denominator by their greatest common divisor, so results like 4/8 are shown as the simplified 1/2.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use negative numbers?",
        answer: "Yes, this calculator supports negative numerators and denominators for all four operations.",
      },
      {
        question: "Why is my result automatically simplified?",
        answer: "Simplifying to lowest terms is standard mathematical practice and makes the result easier to read and use in further calculations.",
      },
    ],
    relatedSlugs: ["percentage-calculator"],
  },
  {
    slug: "uuid-generator",
    category: "developer",
    title: "UUID Generator",
    shortDescription: "Generate random UUID v4 identifiers.",
    metaDescription: "Free online UUID generator to create one or more random version 4 UUIDs (universally unique identifiers).",
    h1: "UUID Generator",
    intro: "Generate one or more random UUID v4 identifiers, commonly used for unique database keys, session tokens and object identifiers.",
    icon: "🔑",
    status: "live",
    inputFields: [
      { key: "count", label: "Number of UUIDs", type: "number", step: 1, defaultValue: 1 },
    ],
    resultFields: [{ key: "uuids", label: "Generated UUIDs", wide: true }],
    calculate: (inputs) => {
      const count = Number(inputs.count);
      const uuids = generateUuids(count);
      return { uuids: uuids.join("\n") };
    },
    explanation: [
      {
        heading: "What is a UUID v4",
        paragraphs: [
          "A UUID (Universally Unique Identifier) is a 128-bit value typically written as 32 hexadecimal characters split into five groups, such as 550e8400-e29b-41d4-a716-446655440000. Version 4 UUIDs are generated using random or pseudo-random numbers, making collisions (two identical UUIDs) astronomically unlikely even across billions of generated values.",
        ],
      },
      {
        heading: "Common uses for UUIDs",
        paragraphs: [
          "UUIDs are commonly used as database primary keys, session identifiers, API request tracking IDs, and unique object references in distributed systems, anywhere a unique identifier is needed without coordinating with a central authority.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are these UUIDs guaranteed to be unique?",
        answer: "UUID v4 uses randomness that makes collisions extremely unlikely in practice, though not mathematically impossible, this is the standard used across most production systems.",
      },
      {
        question: "Is this generated securely in my browser?",
        answer: "Yes, this uses your browser's built-in cryptographically secure random number generator when available, and never sends any data to a server.",
      },
    ],
    relatedSlugs: ["password-generator"],
  },
  {
    slug: "lorem-ipsum-generator",
    category: "developer",
    title: "Lorem Ipsum Generator",
    shortDescription: "Generate placeholder Lorem Ipsum text.",
    metaDescription: "Free online Lorem Ipsum generator to create placeholder text by words, sentences or paragraphs for design mockups.",
    h1: "Lorem Ipsum Generator",
    intro: "Generate placeholder Lorem Ipsum text by word count, sentence count, or paragraph count, commonly used in design mockups.",
    icon: "📝",
    status: "live",
    inputFields: [
      { key: "count", label: "Count", type: "number", step: 1, defaultValue: 3 },
      { key: "unit", label: "Unit", type: "select", options: [
        { label: "Paragraphs", value: "paragraphs" },
        { label: "Sentences", value: "sentences" },
        { label: "Words", value: "words" },
      ] },
    ],
    resultFields: [{ key: "text", label: "Generated Text", wide: true }],
    calculate: (inputs) => {
      const count = Number(inputs.count);
      const unit = String(inputs.unit) as LoremUnit;
      const text = generateLoremIpsum(count, unit);
      return { text };
    },
    explanation: [
      {
        heading: "What is Lorem Ipsum",
        paragraphs: [
          "Lorem Ipsum is scrambled, nonsensical Latin-derived text traditionally used as filler content in design mockups, print layouts, and web page prototypes, allowing designers to preview text-heavy layouts without being distracted by actual readable content.",
        ],
      },
      {
        heading: "Why designers use placeholder text",
        paragraphs: [
          "Using neutral placeholder text keeps focus on layout, typography, and spacing rather than the meaning of the words themselves, which is why Lorem Ipsum has remained the standard choice in design and publishing for decades.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Lorem Ipsum actual Latin?",
        answer: "It's derived from a classical Latin text but scrambled and altered, so it isn't meaningful or grammatically correct Latin, which is intentional, so it doesn't distract from layout review.",
      },
      {
        question: "Can I generate a specific number of words instead of paragraphs?",
        answer: "Yes, choose 'Words' from the unit dropdown and enter your desired word count instead of paragraphs or sentences.",
      },
    ],
    relatedSlugs: ["word-counter"],
  },
  {
    slug: "mortgage-calculator",
    category: "finance",
    title: "Mortgage Calculator",
    shortDescription: "Calculate your monthly mortgage payment and full amortization schedule.",
    metaDescription: "Free online mortgage calculator to calculate monthly payments and view a full amortization schedule for your home loan.",
    h1: "Mortgage Calculator",
    intro: "Calculate your estimated monthly mortgage payment based on loan amount, interest rate and term, with a full amortization schedule.",
    icon: "🏠",
    status: "live",
    widgetType: "amortization",
    amortizationTenureUnit: "years",
    explanation: [
      {
        heading: "How mortgage payments are calculated",
        paragraphs: [
          "This mortgage calculator uses the same standard loan amortization formula as our EMI and Loan calculators: Monthly Payment = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan principal, r is the monthly interest rate, and n is the total number of monthly payments over your mortgage term.",
        ],
      },
      {
        heading: "What this calculator doesn't include",
        paragraphs: [
          "This tool estimates principal and interest only. It doesn't include property taxes, homeowner's insurance, PMI (private mortgage insurance), or HOA fees, all of which typically add to your actual monthly housing payment beyond this estimate.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this include property tax and insurance?",
        answer: "No, this calculator estimates principal and interest only. Your actual monthly payment may be higher once taxes, insurance, PMI, and HOA fees are included.",
      },
      {
        question: "What's a typical mortgage term?",
        answer: "15-year and 30-year fixed terms are the most common in many markets, with 30-year terms offering lower monthly payments but more total interest paid over the loan's life.",
      },
    ],
    relatedSlugs: ["emi-calculator", "loan-calculator"],
  },
  {
slug: "volume-converter",
    category: "converters",
    title: "Volume Converter",
    shortDescription: "Convert between milliliters, liters, cups, gallons and more.",
    metaDescription: "Free online volume converter to convert between milliliters, liters, cups, pints, quarts and gallons.",
    h1: "Volume Converter",
    intro: "Convert volume measurements between metric and US customary units, useful for cooking, science, and everyday conversions.",
    icon: "🧪",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "volume",
    explanation: [
      {
        heading: "How this volume converter works",
        paragraphs: [
          "This tool converts between volume units using fixed conversion factors, for example, 1 liter equals 1,000 milliliters, 4.22675 US cups, or 0.264172 US gallons. Enter an amount in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "Metric vs US customary volume units",
        paragraphs: [
          "Metric units (milliliters, liters) scale by powers of ten and are used for cooking, science, and most countries outside the US. US customary units (cups, pints, quarts, gallons) are common in US recipes and packaging. Note that a US gallon (3.785 L) differs from a UK imperial gallon (4.546 L), this tool uses US customary definitions.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many cups are in a liter?",
        answer: "One liter is approximately 4.23 cups, a common conversion for cooking and baking.",
      },
      {
        question: "How accurate are these conversions?",
        answer: "Conversions use standard exact conversion factors and are accurate to six decimal places.",
      },
    ],
    relatedSlugs: ["weight-converter", "length-converter"],
  },
  {
slug: "speed-converter",
    category: "converters",
    title: "Speed Converter",
    shortDescription: "Convert between mph, km/h, m/s and knots.",
    metaDescription: "Free online speed converter to convert between miles per hour, kilometers per hour, meters per second and knots.",
    h1: "Speed Converter",
    intro: "Convert speed measurements between mph, km/h, m/s, knots and feet per second.",
    icon: "🚀",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "speed",
    explanation: [
      {
        heading: "How this speed converter works",
        paragraphs: [
          "This tool converts between speed units using fixed conversion factors, for example, 1 mph equals 1.60934 km/h, 0.44704 m/s, or 0.868976 knots. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each speed unit is used",
        paragraphs: [
          "Mph is standard for road speeds in the US and UK, while km/h is used for road speeds in most other countries. Meters per second is the SI unit used in physics and engineering. Knots (nautical miles per hour) are used in aviation and maritime navigation.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert mph to km/h?",
        answer: "Multiply miles per hour by 1.60934 to get kilometers per hour, or use this converter for an instant result.",
      },
      {
        question: "What is a knot?",
        answer: "A knot is a unit of speed equal to one nautical mile per hour, commonly used in aviation and maritime navigation.",
      },
    ],
    relatedSlugs: ["length-converter"],
  },
  {
slug: "area-converter",
    category: "converters",
    title: "Area Converter",
    shortDescription: "Convert between square meters, square feet, acres and hectares.",
    metaDescription: "Free online area converter to convert between square meters, square feet, acres, hectares and more.",
    h1: "Area Converter",
    intro: "Convert area measurements between metric and imperial units, including acres and hectares for land measurement.",
    icon: "📐",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "area",
    explanation: [
      {
        heading: "How this area converter works",
        paragraphs: [
          "This tool converts between area units using fixed conversion factors, for example, 1 acre equals 43,560 square feet, 4,046.86 square meters, or 0.404686 hectares. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "Acres vs hectares for land measurement",
        paragraphs: [
          "Acres are the standard land unit in the US and UK for real estate and agriculture, while hectares (10,000 square meters) are used in most metric countries and in international agriculture and forestry statistics. One hectare is approximately 2.47 acres.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many square feet are in an acre?",
        answer: "One acre equals 43,560 square feet, a standard unit for measuring land, especially in the US.",
      },
      {
        question: "What's the difference between an acre and a hectare?",
        answer: "A hectare (10,000 square meters) is larger than an acre (about 4,047 square meters), hectares are the standard metric unit for land area used in most countries outside the US.",
      },
    ],
    relatedSlugs: ["length-converter", "volume-converter"],
  },
  {
    slug: "regex-tester",
    category: "developer",
    title: "Regex Tester",
    shortDescription: "Test regular expressions against sample text in real time.",
    metaDescription: "Free online regex tester to test regular expressions against sample text with live match highlighting.",
    h1: "Regex Tester",
    intro: "Test a regular expression pattern against sample text and see matches update live as you type.",
    icon: "🔍",
    status: "live",
    widgetType: "regexTester",
    explanation: [
      {
        heading: "How to use this regex tester",
        paragraphs: [
          "Enter a regular expression pattern (without the surrounding slashes), specify flags like 'g' for global matching or 'i' for case-insensitive matching, then paste your test text. Matches update live and show the matched text along with its position in the string.",
        ],
      },
      {
        heading: "Common regex flags",
        paragraphs: [
          "'g' (global) finds all matches instead of stopping at the first one. 'i' (case-insensitive) ignores letter case. 'm' (multiline) changes how ^ and $ behave across multiple lines. Flags can be combined, for example 'gi' for global, case-insensitive matching.",
        ],
      },
    ],
    faqs: [
      {
        question: "What regex syntax does this support?",
        answer: "This uses standard JavaScript regular expression syntax, which is very similar to PCRE (used in many other languages) but with some differences in advanced features.",
      },
      {
        question: "Is my text sent to a server?",
        answer: "No, all pattern matching happens directly in your browser using JavaScript's built-in regex engine, your text is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["json-formatter", "url-encoder"],
  },
  {
    slug: "hex-rgb-converter",
    category: "developer",
    title: "Hex to RGB / RGB to Hex Converter",
    shortDescription: "Convert between hex color codes and RGB values, both directions.",
    metaDescription: "Free online hex to RGB and RGB to hex converter to convert color values both directions with a live color preview.",
    h1: "Hex to RGB / RGB to Hex Converter",
    intro: "Convert between hex color codes and RGB values instantly, in either direction, with a live color preview.",
    icon: "🎨",
    status: "live",
    widgetType: "hexRgbConverter",
    explanation: [
      {
        heading: "How hex and RGB color values relate",
        paragraphs: [
          "Hex color codes represent red, green and blue values as two-digit hexadecimal numbers (00 to FF, or 0 to 255 in decimal), combined into a single 6-character code like #2563EB. RGB notation expresses the same three values directly in decimal, like rgb(37, 99, 235).",
        ],
      },
      {
        heading: "Where each format is used",
        paragraphs: [
          "Hex codes are the most common format in CSS and design tools, while RGB notation is often used when you need to work with individual color channel values directly, such as adjusting brightness or blending colors programmatically.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do hex colors use letters like A through F?",
        answer: "Hex (hexadecimal) is base-16, using digits 0-9 and letters A-F to represent values from 0 to 15, allowing two hex digits to represent the full 0-255 range in a compact two-character format.",
      },
      {
        question: "Does this support transparency (alpha values)?",
        answer: "No, this tool converts standard 6-digit hex and RGB values without an alpha channel. 8-digit hex codes with transparency aren't currently supported.",
      },
    ],
    relatedSlugs: ["json-formatter"],
  },
  {
    slug: "contrast-checker",
    category: "developer",
    title: "Color Contrast Checker",
    shortDescription: "Check WCAG contrast ratio between two colors for accessibility.",
    metaDescription: "Free online color contrast checker to test WCAG AA and AAA accessibility compliance between text and background colors.",
    h1: "Color Contrast Checker",
    intro: "Check the contrast ratio between a text color and background color against WCAG AA and AAA accessibility standards.",
    icon: "◐",
    status: "live",
    widgetType: "contrastChecker",
    explanation: [
      {
        heading: "How contrast ratio is calculated",
        paragraphs: [
          "Contrast ratio is calculated from the relative luminance of both colors using the WCAG formula, producing a ratio from 1:1 (identical colors, no contrast) up to 21:1 (pure black on pure white, maximum contrast).",
        ],
      },
      {
        heading: "Understanding WCAG AA and AAA levels",
        paragraphs: [
          "WCAG AA requires a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (18pt or larger, or 14pt bold). WCAG AAA is stricter, requiring 7:1 for normal text and 4.5:1 for large text. AA is the commonly required standard for most websites.",
        ],
      },
    ],
    faqs: [
      {
        question: "What contrast level should my website meet?",
        answer: "WCAG AA is the widely recommended minimum standard for web accessibility and is often a legal requirement in many jurisdictions. AAA is a stricter, optional standard for enhanced accessibility.",
      },
      {
        question: "Does font size affect the required contrast ratio?",
        answer: "Yes, large text (18pt+/24px+, or 14pt/19px+ bold) has lower minimum contrast requirements than normal-sized text, since larger text is inherently easier to read at lower contrast.",
      },
    ],
    relatedSlugs: ["hex-rgb-converter", "color-palette-generator"],
  },
  {
    slug: "color-palette-generator",
    category: "developer",
    title: "Color Palette Generator",
    shortDescription: "Generate complementary, triadic and analogous color harmonies.",
    metaDescription: "Free online color palette generator to create complementary, triadic and analogous color schemes from a base color.",
    h1: "Color Palette Generator",
    intro: "Generate a color harmony palette from a base color using complementary, triadic or analogous color theory.",
    icon: "🎨",
    status: "live",
    widgetType: "colorPalette",
    explanation: [
      {
        heading: "Understanding color harmonies",
        paragraphs: [
          "Complementary colors sit directly opposite each other on the color wheel (180° apart), creating high contrast and visual impact. Triadic colors are evenly spaced (120° apart), offering vibrant but balanced palettes. Analogous colors sit close together (30° apart), producing harmonious, cohesive palettes.",
        ],
      },
      {
        heading: "How this generator works",
        paragraphs: [
          "This tool converts your base hex color to HSL (Hue, Saturation, Lightness), rotates the hue value according to your chosen harmony type, then converts each resulting hue back to hex, keeping saturation and lightness consistent across the palette.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which harmony type should I use?",
        answer: "Complementary works well for bold accent colors, triadic for vibrant, balanced designs, and analogous for subtle, cohesive color schemes, the right choice depends on the mood you're aiming for.",
      },
      {
        question: "Can I use these colors directly in CSS?",
        answer: "Yes, each generated color is shown as a standard hex code, ready to use directly in CSS, design tools, or anywhere hex colors are accepted.",
      },
    ],
    relatedSlugs: ["hex-rgb-converter", "contrast-checker"],
  },
  {
    slug: "hsl-converter",
    category: "developer",
    title: "HSL to Hex / RGB Converter",
    shortDescription: "Convert HSL color values to hex and RGB.",
    metaDescription: "Free online HSL to hex and RGB converter to convert HSL (hue, saturation, lightness) color values instantly.",
    h1: "HSL to Hex / RGB Converter",
    intro: "Convert HSL (hue, saturation, lightness) color values into hex and RGB format.",
    icon: "🌈",
    status: "live",
    inputFields: [
      { key: "h", label: "Hue (0-360)", type: "number", step: 1, placeholder: "e.g. 217" },
      { key: "s", label: "Saturation (0-100)", type: "number", step: 1, placeholder: "e.g. 83" },
      { key: "l", label: "Lightness (0-100)", type: "number", step: 1, placeholder: "e.g. 53" },
    ],
    resultFields: [
      { key: "hex", label: "Hex Code", highlight: true },
      { key: "rgb", label: "RGB Value", highlight: true },
    ],
    calculate: (inputs) => {
      const h = Number(inputs.h);
      const s = Number(inputs.s);
      const l = Number(inputs.l);
      const output = hslToHexResult(h, s, l);
      return { ...output };
    },
    explanation: [
      {
        heading: "Understanding HSL color notation",
        paragraphs: [
          "HSL represents color using Hue (0-360°, the color's position on the color wheel), Saturation (0-100%, how vivid or gray the color is), and Lightness (0-100%, how light or dark the color is), an intuitive alternative to hex or RGB for adjusting colors by feel.",
        ],
      },
      {
        heading: "Why designers use HSL",
        paragraphs: [
          "HSL makes it easy to create color variations, keep the same hue and adjust lightness for a tints/shades palette, or adjust saturation to make a color more muted or vivid, without needing to recalculate hex or RGB values manually.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between HSL and HSB/HSV?",
        answer: "HSL and HSB (also called HSV) are similar but calculate lightness/brightness differently, they can produce slightly different results for the same hue and saturation values.",
      },
      {
        question: "Can I use HSL directly in CSS?",
        answer: "Yes, modern CSS supports HSL natively, for example hsl(217, 83%, 53%), as an alternative to hex or RGB notation.",
      },
    ],
    relatedSlugs: ["hex-rgb-converter", "color-palette-generator"],
  },
  {
    slug: "pdf-to-jpg",
    category: "pdf",
    title: "PDF to JPG",
    shortDescription: "Convert PDF pages into JPG images.",
    metaDescription: "Free online PDF to JPG converter to convert each page of a PDF into a downloadable JPG image.",
    h1: "PDF to JPG",
    intro: "Convert each page of a PDF file into a high-quality JPG image, processed entirely in your browser.",
    icon: "🖼️",
    status: "live",
    widgetType: "pdfToJpg",
    explanation: [
      {
        heading: "How PDF to JPG conversion works",
        paragraphs: [
          "This tool renders each page of your PDF onto a canvas at high resolution, then exports that canvas as a JPG image, the same rendering approach browsers use to display PDFs natively. Multi-page PDFs are converted page by page and bundled into a downloadable ZIP file.",
        ],
      },
      {
        heading: "Why this stays entirely in your browser",
        paragraphs: [
          "Unlike many online PDF to JPG converters that upload your file to a server, this tool uses your browser's own rendering engine to do the conversion locally, meaning your PDF is never transmitted anywhere.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I download individual pages instead of the whole ZIP?",
        answer: "Yes, each converted page has its own download link below the preview, alongside the option to download all pages together as a ZIP file.",
      },
      {
        question: "What resolution are the output images?",
        answer: "Pages are rendered at 2x scale for good print and screen quality, balancing image clarity with reasonable file size.",
      },
      {
        question: "Does this work with scanned PDFs?",
        answer: "Yes, since this renders the visual page content directly, it works the same way for scanned PDFs and text-based PDFs alike.",
      },
    ],
    relatedSlugs: ["merge-pdf", "split-pdf", "compress-pdf"],
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
    interpret: (result, inputs) => {
      const mode = String(inputs.mode);
      const resultValue = Number(result.result);

      if (mode === "percentageChange") {
        return [
          resultValue >= 0
            ? "This represents an increase of " + Math.abs(resultValue) + "%."
            : "This represents a decrease of " + Math.abs(resultValue) + "%.",
        ];
      }
      return [String(result.explanation)];
    },
      explanation: [
      {
        heading: "How to calculate percentage of a number (X% of Y)",
        paragraphs: [
          "To find X% of Y, the formula is (X ÷ 100) × Y. For example, to calculate 20% of 150: (20 ÷ 100) × 150 = 30.",
        ],
      },
      {
        heading: "How to find what percent one number is of another",
        paragraphs: [
          "To calculate what percentage X is of Y, the formula is (X ÷ Y) × 100. For example, to find what percent 30 is of 150: (30 ÷ 150) × 100 = 20%.",
        ],
      },
      {
        heading: "Percentage increase or decrease formula",
        paragraphs: [
          "To calculate percentage change (percentage increase or percentage decrease) from X to Y, the formula is ((Y − X) ÷ |X|) × 100. For example, a change from 150 to 180 is ((180 − 150) ÷ 150) × 100 = 20%, representing a 20% increase.",
        ],
      },
    ],
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
    slug: "simple-interest-calculator",
    category: "finance",
    title: "Simple Interest Calculator",
    shortDescription: "Calculate simple interest on a principal amount.",
    metaDescription: "Free online simple interest calculator to calculate interest earned or owed on a principal amount.",
    h1: "Simple Interest Calculator",
    intro: "Calculate simple interest based on principal, rate and time, without compounding.",
    icon: "💵",
    status: "live",
    inputFields: [
      { key: "principal", label: "Principal Amount", type: "number", step: 0.01, placeholder: "e.g. 5000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 5" },
      { key: "years", label: "Time Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "interestAmount", label: "Interest Amount", highlight: true },
      { key: "totalAmount", label: "Total Amount", highlight: true },
    ],
calculate: (inputs) => {
      const principal = Number(inputs.principal);
      const annualRate = Number(inputs.annualRate);
      const years = Number(inputs.years);
      const output = calculateSimpleInterest(principal, annualRate, years);
      return { ...output };
    },
    interpret: (result, inputs) => {
      const principal = Number(inputs.principal);
      const interestAmount = Number(result.interestAmount);
      const ratio = principal > 0 ? (interestAmount / principal) * 100 : 0;
      return [
        "The interest earned equals " + Math.round(ratio) + "% of your original principal over this period.",
        "Unlike compound interest, this amount grows at a constant rate, not an accelerating one.",
      ];
    },
explanation: [
      {
        heading: "Simple interest formula with example",
        paragraphs: [
          "The simple interest formula is: Simple Interest = (Principal × Rate × Time) ÷ 100, where Principal is the amount borrowed or invested, Rate is the annual interest rate as a percentage, and Time is the duration in years.",
          "For example, to calculate simple interest on a principal of 5000 at 5% annual interest for 3 years: (5000 × 5 × 3) ÷ 100 = 750 in interest, for a total amount of 5750.",
        ],
      },
      {
        heading: "Simple interest vs compound interest",
        paragraphs: [
          "Unlike compound interest, which is calculated on the growing balance including previously earned interest, simple interest is always calculated on the original principal only, so it grows at a constant, linear rate rather than accelerating over time. This is why simple interest loans typically cost less in total interest than compound interest loans over the same term and rate.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between simple and compound interest?",
        answer:
          "Simple interest is calculated only on the original principal for the entire period, while compound interest is calculated on the principal plus any accumulated interest, causing it to grow faster over time.",
      },
      {
        question: "When is simple interest commonly used?",
        answer:
          "Simple interest is commonly used for short-term loans, certain bonds, and some auto loans, where interest doesn't compound over the loan term.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "emi-calculator"],
  },
  {
    slug: "random-number-generator",
    category: "misc",
    title: "Random Number Generator",
    shortDescription: "Generate random numbers within a range.",
    metaDescription: "Free online random number generator to generate one or more random numbers within a custom range.",
    h1: "Random Number Generator",
    intro: "Generate random numbers within a custom range, with or without duplicates.",
    icon: "🎲",
    status: "live",
    inputFields: [
      { key: "min", label: "Minimum Value", type: "number", step: 1, defaultValue: 1 },
      { key: "max", label: "Maximum Value", type: "number", step: 1, defaultValue: 100 },
      { key: "count", label: "How Many Numbers", type: "number", step: 1, defaultValue: 1 },
      {
        key: "allowDuplicates",
        label: "Allow Duplicate Numbers",
        type: "select",
        options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ],
      },
    ],
    resultFields: [{ key: "numbers", label: "Generated Numbers", wide: true }],
    calculate: (inputs) => {
      const min = Number(inputs.min);
      const max = Number(inputs.max);
      const count = Number(inputs.count);
      const allowDuplicates = String(inputs.allowDuplicates) === "true";
      const results = generateRandomNumbers({ min, max, count, allowDuplicates });
      return { numbers: results.join(", ") };
    },
explanation: [
      {
        heading: "How this random number generator works",
        paragraphs: [
          "This tool generates random whole numbers within a range you specify (a minimum and maximum value), using your browser's built-in random number function. You can choose how many numbers to generate at once, and whether duplicate numbers are allowed in the results.",
        ],
      },
      {
        heading: "Random numbers with or without duplicates",
        paragraphs: [
          "When duplicates are allowed, each number is picked independently, so the same value can appear more than once, similar to rolling a die multiple times. When duplicates are disallowed, each number can only appear once, similar to drawing raffle tickets or lottery numbers without replacement, which requires the range to contain at least as many values as the count requested.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this truly random?",
        answer:
          "Numbers are generated using your browser's built-in random number function, which is suitable for general purposes like games, raffles and sampling, but not for cryptographic or security-critical uses.",
      },
      {
        question: "What happens if I ask for more unique numbers than the range allows?",
        answer:
          "If you disable duplicates and request more numbers than exist in your chosen range, the tool will show an error explaining the range is too small for that count.",
      },
    ],
    relatedSlugs: ["password-generator"],
  },
  {
    slug: "text-summarizer",
    category: "ai",
    title: "AI Text Summarizer",
    shortDescription: "Summarize long text into key points using AI.",
    metaDescription: "Free AI text summarizer to condense long articles or documents into concise summaries.",
    h1: "AI Text Summarizer",
    intro: "Paste long text and get a concise AI-generated summary. Requires your own OpenAI API key.",
    icon: "✨",
    status: "live",
    widgetType: "aiText",
    aiSystemPrompt: "You are a summarization assistant. Summarize the user's text into a concise, clear summary that captures the key points, using 3-5 sentences unless the text is very short.",
    aiActionLabel: "Summarize",
    aiPlaceholder: "Paste the text you want summarized...",
explanation: [
      {
        heading: "How AI text summarization works",
        paragraphs: [
          "This tool sends your text to an AI language model, which identifies the key points and generates a condensed summary that preserves the core meaning while significantly reducing length. It's useful for quickly understanding long articles, reports, or documents without reading the entire text.",
        ],
      },
      {
        heading: "Why this tool uses your own API key",
        paragraphs: [
          "Rather than running AI requests through our own paid account with usage limits, this tool uses your personal OpenAI API key, sent directly with each request and never stored. This keeps the summarizer completely free to use with no artificial caps, while you only pay OpenAI directly for what you use, often covered by free trial credit for light usage.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do I need my own API key?",
        answer:
          "This keeps the tool free with no usage limits imposed by us. Your key is used only for your request and is never stored or logged on our servers.",
      },
      {
        question: "Where do I get an OpenAI API key?",
        answer: "Sign up at platform.openai.com and create a key under API Keys in your account settings. New accounts typically receive some free trial credit.",
      },
      {
        question: "Is my text sent anywhere else?",
        answer: "Your text and key are sent directly to OpenAI to generate the response and are not stored by Merondis.",
      },
    ],
    relatedSlugs: ["paragraph-rewriter", "word-counter"],
  },
  {
    slug: "roi-calculator",
    category: "finance",
    title: "ROI Calculator",
    shortDescription: "Calculate return on investment.",
    metaDescription: "Free online ROI calculator to calculate return on investment and net profit percentage.",
    h1: "ROI Calculator",
    intro: "Calculate the return on investment (ROI) and net profit based on your initial investment and final value.",
    icon: "📊",
    status: "live",
    inputFields: [
      { key: "initialInvestment", label: "Initial Investment", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "finalValue", label: "Final Value", type: "number", step: 0.01, placeholder: "e.g. 12500" },
    ],
    resultFields: [
      { key: "roiPercent", label: "ROI", unit: "%", highlight: true },
      { key: "netProfit", label: "Net Profit", highlight: true },
    ],
    calculate: (inputs) => {
      const initialInvestment = Number(inputs.initialInvestment);
      const finalValue = Number(inputs.finalValue);
      const output = calculateRoi(initialInvestment, finalValue);
      return { ...output };
    },
explanation: [
      {
        heading: "ROI formula: how to calculate return on investment",
        paragraphs: [
          "The ROI formula is: ROI % = ((Final Value − Initial Investment) ÷ Initial Investment) × 100. This expresses your net profit or loss as a percentage of what you originally invested, making it easy to compare returns across different investments regardless of size.",
          "For example, an initial investment of 10,000 that grows to a final value of 12,500 has an ROI of ((12,500 − 10,000) ÷ 10,000) × 100 = 25%.",
        ],
      },
      {
        heading: "What counts as a good ROI",
        paragraphs: [
          "There's no universal 'good' ROI, it depends heavily on the type of investment, the time period involved, and the risk taken. A 25% ROI over one year is very different from a 25% ROI over ten years. This calculator shows a simple ROI percentage without factoring in time period, so it's most useful for comparing investments held over similar durations.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is ROI calculated?",
        answer: "ROI is calculated as the net profit (final value minus initial investment) divided by the initial investment, expressed as a percentage.",
      },
      {
        question: "Can ROI be negative?",
        answer: "Yes, a negative ROI means the final value is less than the initial investment, indicating a loss.",
      },
      {
        question: "Does this account for the time period of the investment?",
        answer: "No, this is a simple ROI calculation and doesn't factor in how long the investment was held. For comparing investments over different time periods, an annualized return would be more appropriate.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "simple-interest-calculator"],
  },
  {
    slug: "markup-calculator",
    category: "finance",
    title: "Markup Calculator",
    shortDescription: "Calculate selling price, profit and margin from cost and markup.",
    metaDescription: "Free online markup calculator to find selling price, profit amount and profit margin from cost price and markup percentage.",
    h1: "Markup Calculator",
    intro: "Calculate your selling price, profit, and profit margin based on cost price and markup percentage.",
    icon: "💹",
    status: "live",
    inputFields: [
      { key: "cost", label: "Cost Price", type: "number", step: 0.01, placeholder: "e.g. 50" },
      { key: "markupPercent", label: "Markup (%)", type: "number", step: 0.01, placeholder: "e.g. 40" },
    ],
    resultFields: [
      { key: "sellingPrice", label: "Selling Price", highlight: true },
      { key: "profit", label: "Profit", highlight: true },
      { key: "marginPercent", label: "Profit Margin", unit: "%" },
    ],
    calculate: (inputs) => {
      const cost = Number(inputs.cost);
      const markupPercent = Number(inputs.markupPercent);
      const output = calculateMarkup(cost, markupPercent);
      return { ...output };
    },
explanation: [
      {
        heading: "Markup formula: how to calculate selling price from cost",
        paragraphs: [
          "The markup formula is: Selling Price = Cost + (Cost × Markup % ÷ 100). For example, a product costing 50 with a 40% markup has a profit of 50 × (40 ÷ 100) = 20, giving a selling price of 70.",
        ],
      },
      {
        heading: "Markup vs margin: why they're not the same percentage",
        paragraphs: [
          "Markup is profit calculated as a percentage of cost price, while margin is the same profit amount calculated as a percentage of selling price, a different base number. In the example above, a 40% markup on a 50 cost produces a selling price of 70, but the profit margin is only 20 ÷ 70 ≈ 28.6% of the selling price, not 40%. Confusing these two is a common pricing mistake.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between markup and margin?",
        answer:
          "Markup is profit expressed as a percentage of cost price, while margin is profit expressed as a percentage of selling price. They use the same profit amount but different bases, so a 40% markup is not the same as a 40% margin.",
      },
      {
        question: "Which one should I use for pricing decisions?",
        answer: "Markup is often used when setting prices from cost, while margin is often used when analyzing profitability of sales. Many businesses track both.",
      },
    ],
    relatedSlugs: ["discount-calculator", "roi-calculator"],
  },
  {
    slug: "data-storage-converter",
    category: "converters",
    title: "Data Storage Converter",
    shortDescription: "Convert between bits, bytes, KB, MB, GB and TB.",
    metaDescription: "Free online data storage converter to convert between bits, bytes, kilobytes, megabytes, gigabytes and terabytes.",
    h1: "Data Storage Converter",
    intro: "Convert digital storage measurements between bits, bytes, kilobytes, megabytes, gigabytes and terabytes.",
    icon: "💾",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "dataStorage",
explanation: [
      {
        heading: "How to convert between bytes, KB, MB, GB and TB",
        paragraphs: [
          "This data storage converter uses 1024 as the conversion factor between each unit (1 KB = 1024 bytes, 1 MB = 1024 KB, and so on), the binary standard used by operating systems for file sizes and memory. Your input is converted to bytes first, then converted into your target unit.",
        ],
      },
      {
        heading: "Why storage capacity looks different in different places",
        paragraphs: [
          "Storage device manufacturers typically advertise capacity using 1000 as the conversion factor (the decimal standard), while your computer's operating system displays file and drive sizes using 1024 (the binary standard). This is why a drive advertised as 1 TB often shows a slightly smaller capacity, around 931 GB, when viewed on your computer.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this based on 1000 or 1024?",
        answer: "This calculator uses 1024 as the conversion factor between units (the binary standard commonly used by operating systems), rather than 1000 (the decimal standard sometimes used by storage manufacturers), which is why file sizes can appear slightly different between your OS and a drive's advertised capacity.",
      },
      {
        question: "Why does my hard drive show less space than advertised?",
        answer: "Manufacturers typically advertise storage using the 1000-based decimal system, while operating systems display it using the 1024-based binary system, causing an apparent (but explainable) discrepancy.",
      },
    ],
    relatedSlugs: ["length-converter", "weight-converter"],
  },
  {
    slug: "url-encoder",
    category: "developer",
    title: "URL Encoder / Decoder",
    shortDescription: "Encode or decode URL strings instantly.",
    metaDescription: "Free online URL encoder and decoder to convert text to and from URL-encoded (percent-encoded) format.",
    h1: "URL Encoder / Decoder",
    intro: "Encode text into URL-safe format, or decode a URL-encoded string back into readable text.",
    icon: "🔗",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Enter text or a URL-encoded string..." },
      {
        key: "action",
        label: "Action",
        type: "select",
        options: [
          { label: "Encode", value: "encode" },
          { label: "Decode", value: "decode" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "Result", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const action = String(inputs.action) as UrlEncodeAction;
      const result = processUrlEncoding(text, action);
      return { result };
    },
explanation: [
      {
        heading: "How URL encoding (percent-encoding) works",
        paragraphs: [
          "URL encoding converts characters that aren't safe to use directly in a URL, such as spaces, symbols, and non-ASCII characters, into a percent sign followed by a two-digit hex code (for example, a space becomes %20). This ensures the URL remains valid and is interpreted correctly by browsers and servers.",
        ],
      },
      {
        heading: "When to use a URL encoder or decoder",
        paragraphs: [
          "URL encoding is commonly needed when building query strings with user input, embedding special characters in a link, or passing data like an email address or search term as a URL parameter. Decoding reverses the process, turning percent-encoded text back into its original, readable form.",
        ],
      },
    ],
    faqs: [
      {
        question: "When do I need to URL-encode text?",
        answer: "URL encoding is needed when including special characters, spaces, or symbols in a URL query string or parameter, since URLs can only safely contain a limited set of characters.",
      },
      {
        question: "What happens to spaces when encoding?",
        answer: "Spaces are converted to %20 in standard URL encoding, ensuring the URL remains valid and correctly interpreted by browsers and servers.",
      },
    ],
    relatedSlugs: ["json-formatter", "base64-tool"],
  },
  {
    slug: "paragraph-rewriter",
    category: "ai",
    title: "AI Paragraph Rewriter",
    shortDescription: "Rewrite and rephrase text using AI.",
    metaDescription: "Free AI paragraph rewriter to rephrase text while keeping the original meaning.",
    h1: "AI Paragraph Rewriter",
    intro: "Paste a paragraph and get an AI-rewritten version with different phrasing. Requires your own OpenAI API key.",
    icon: "✨",
    status: "live",
    widgetType: "aiText",
    aiSystemPrompt: "You are a rewriting assistant. Rewrite the user's text using different wording and sentence structure while preserving the original meaning and tone. Return only the rewritten text.",
    aiActionLabel: "Rewrite",
    aiPlaceholder: "Paste the paragraph you want rewritten...",
explanation: [
      {
        heading: "How AI paragraph rewriting works",
        paragraphs: [
          "This tool sends your paragraph to an AI language model with instructions to rephrase it using different wording and sentence structure while preserving the original meaning and tone, useful for avoiding repetitive phrasing, adjusting tone, or getting a fresh way to express the same idea.",
        ],
      },
      {
        heading: "Why this tool uses your own API key",
        paragraphs: [
          "Rather than running AI requests through our own paid account with usage limits, this tool uses your personal OpenAI API key, sent directly with each request and never stored. This keeps the rewriter completely free to use with no artificial caps, while you only pay OpenAI directly for what you use.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will the rewritten text mean the same thing?",
        answer: "The AI is instructed to preserve the original meaning while changing the wording and structure, though it's always worth reviewing the result yourself.",
      },
      {
        question: "Why do I need my own API key?",
        answer: "This keeps the tool free with no usage limits imposed by us. Your key is used only for your request and is never stored or logged on our servers.",
      },
    ],
    relatedSlugs: ["text-summarizer", "case-converter"],
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
explanation: [
      {
        heading: "How to format and validate JSON online",
        paragraphs: [
          "This tool parses your JSON text to check it's syntactically valid, then re-outputs it in your chosen format. 'Format' (also called beautify or pretty-print) adds indentation and line breaks so nested objects and arrays are easy to read visually. 'Minify' strips all unnecessary whitespace to produce the smallest possible file size, commonly used for production API responses.",
        ],
      },
      {
        heading: "Common JSON syntax errors this tool catches",
        paragraphs: [
          "A JSON validator like this one flags common mistakes such as missing commas between properties, unquoted property names, trailing commas after the last item (not allowed in strict JSON), and mismatched or missing brackets and braces, all frequent causes of a 'invalid JSON' error when working with APIs or config files.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How Base64 encoding and decoding works",
        paragraphs: [
          "Base64 encoding converts binary or text data into a string using only 64 safe, printable ASCII characters (A-Z, a-z, 0-9, plus two symbols). This makes it safe to embed data in places that only reliably support plain text, such as URLs, email attachments, or JSON fields. Decoding reverses the process, converting the Base64 string back into its original form.",
        ],
      },
      {
        heading: "Base64 is encoding, not encryption",
        paragraphs: [
          "A common misconception is that Base64 provides security, it does not. Anyone can decode a Base64 string instantly using any Base64 decoder, including this one, since there's no key or secret involved. Base64 is purely a format conversion for compatibility, not a way to protect sensitive data.",
        ],
      },
    ],
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
    slug: "merge-pdf",
    category: "pdf",
    title: "Merge PDF",
    shortDescription: "Combine multiple PDF files into one.",
    metaDescription: "Free online tool to merge multiple PDF files into a single PDF document, directly in your browser.",
    h1: "Merge PDF",
    intro: "Combine multiple PDF files into a single document. Reorder files before merging, all processed securely in your browser.",
    icon: "📎",
    status: "live",
    featured: true,
    widgetType: "mergePdf",
    explanation: [
      {
        heading: "How to merge PDF files online",
        paragraphs: [
          "This tool combines multiple PDF files into a single document by reading each file's pages directly in your browser and copying them, in the order you specify, into one new PDF. You can reorder files before merging using the up and down arrows next to each one.",
        ],
      },
      {
        heading: "Why this PDF merger works entirely in your browser",
        paragraphs: [
          "Unlike many free PDF merge tools that upload your files to a server for processing, this tool uses client-side JavaScript to combine your PDFs locally on your device. Your files are never transmitted anywhere, which matters when merging documents containing sensitive or private information.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are my files uploaded to a server?",
        answer: "No, all merging happens directly in your browser using client-side processing. Your files are never uploaded anywhere.",
      },
      {
        question: "Can I change the order of the pages before merging?",
        answer: "Yes, use the up and down arrows next to each file to reorder them before merging. Files are combined in the order shown.",
      },
      {
        question: "Is there a limit to how many PDFs I can merge?",
        answer: "There's no hard limit, but very large files or a very high number of PDFs may take longer to process depending on your device.",
      },
    ],
    relatedSlugs: ["split-pdf", "compress-pdf"],
  },
  {
    slug: "split-pdf",
    category: "pdf",
    title: "Split PDF",
    shortDescription: "Extract a page range from a PDF file.",
    metaDescription: "Free online tool to split a PDF and extract a specific page range into a new PDF document.",
    h1: "Split PDF",
    intro: "Extract a specific range of pages from a PDF file into a brand new document, processed securely in your browser.",
    icon: "✂️",
    status: "live",
widgetType: "splitPdf",
    explanation: [
      {
        heading: "How to split a PDF and extract specific pages",
        paragraphs: [
          "This tool lets you extract a range of pages (for example, pages 3 to 7) from a larger PDF and save them as a new, separate document. After uploading a file, it detects the total page count so you can choose exactly which pages to extract.",
        ],
      },
      {
        heading: "Why use a PDF page extractor",
        paragraphs: [
          "Splitting a PDF is useful when you only need to share, print, or archive a portion of a larger document, such as pulling one chapter from a report or isolating a signed page from a longer contract, without sending the entire original file.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are my files uploaded to a server?",
        answer: "No, all splitting happens directly in your browser. Your file is never uploaded anywhere.",
      },
      {
        question: "Can I extract multiple separate ranges at once?",
        answer: "Currently this tool extracts one continuous page range per use. Run the tool again for a different range.",
      },
      {
        question: "Will the extracted pages keep their original formatting?",
        answer: "Yes, page content, formatting and layout are preserved exactly as they appear in the original document.",
      },
    ],
    relatedSlugs: ["merge-pdf", "compress-pdf"],
  },
  {
    slug: "currency-converter",
    category: "converters",
    title: "Currency Converter",
    shortDescription: "Convert between world currencies using live exchange rates.",
    metaDescription: "Free online currency converter with live exchange rates for USD, EUR, GBP, INR and more.",
    h1: "Currency Converter",
    intro: "Convert between major world currencies using regularly updated exchange rates.",
    icon: "💱",
    status: "live",
    featured: true,
    widgetType: "currencyConverter",
explanation: [
      {
        heading: "How currency conversion is calculated",
        paragraphs: [
          "To convert between currencies, the amount is first converted to a common base currency using the source currency's exchange rate, then converted from that base currency into the target currency using the target's exchange rate. This two-step process (via a shared base rate) is how most live currency converters handle any-to-any conversion between dozens of currencies without needing a direct rate between every possible pair.",
        ],
      },
      {
        heading: "Why exchange rates change constantly",
        paragraphs: [
          "Currency exchange rates fluctuate continuously based on global supply and demand, interest rate differences between countries, inflation, and economic events. This is different from fixed conversions like length or weight, which is why a currency calculator relies on regularly updated live exchange rate data rather than a static conversion factor.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often are exchange rates updated?",
        answer: "Exchange rates are refreshed periodically, typically every few hours, to balance accuracy with performance.",
      },
      {
        question: "Can I use this for official financial transactions?",
        answer: "No, this tool is for general informational purposes only. For official transactions, always check rates directly with your bank or payment provider.",
      },
      {
        question: "Which currencies are supported?",
        answer: "This tool supports major world currencies including USD, EUR, GBP, INR, JPY and more.",
      },
    ],
    relatedSlugs: ["length-converter", "weight-converter"],
  },
  {
    slug: "compress-pdf",
    category: "pdf",
    title: "Compress PDF",
    shortDescription: "Reduce the file size of a PDF.",
    metaDescription: "Free online tool to compress a PDF and reduce its file size, directly in your browser.",
    h1: "Compress PDF",
    intro: "Reduce your PDF's file size for easier sharing and uploading, processed entirely in your browser.",
    icon: "🗜️",
    status: "live",
widgetType: "compressPdf",
    explanation: [
      {
        heading: "How PDF compression reduces file size",
        paragraphs: [
          "This tool re-saves your PDF using optimized internal object storage, removing redundant data and overhead from the file structure. Unlike some compressors that reduce image quality, this tool focuses on structural optimization, so the amount of savings depends heavily on how the original PDF was created.",
        ],
      },
      {
        heading: "Why some PDFs compress more than others",
        paragraphs: [
          "PDFs containing large, high-resolution embedded images typically see the biggest reduction in file size, while text-only PDFs or files already optimized by other software may show minimal change, since there's simply less redundant data left to remove.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are my files uploaded to a server?",
        answer: "No, all compression happens directly in your browser. Your file is never uploaded anywhere.",
      },
      {
        question: "How much will my file shrink?",
        answer: "It depends on the PDF's contents. Files with large embedded images typically compress the most, while text-only or already-optimized PDFs may see minimal reduction.",
      },
      {
        question: "Will compression affect the quality of my document?",
        answer: "Text and layout remain unaffected. This tool focuses on reducing file overhead rather than lowering image quality.",
      },
    ],
    relatedSlugs: ["merge-pdf", "split-pdf"],
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
    featured: true,
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
    interpret: (result) => {
      const category = String(result.category);
      const bmi = Number(result.bmi);
      const insights: string[] = [];

      if (category === "Underweight") {
        insights.push("A BMI of " + bmi + " falls in the underweight range (below 18.5).");
        insights.push("Consider speaking with a healthcare provider about a nutrition plan suited to your goals.");
      } else if (category === "Normal weight") {
        insights.push("A BMI of " + bmi + " falls within the healthy weight range (18.5 to 24.9).");
        insights.push("Maintaining your current weight through balanced habits is generally a good target.");
      } else if (category === "Overweight") {
        insights.push("A BMI of " + bmi + " falls in the overweight range (25 to 29.9).");
        insights.push("Small, sustainable changes to diet and activity level can help move toward the normal range.");
      } else {
        insights.push("A BMI of " + bmi + " falls in the obese range (30 or above).");
        insights.push("Consulting a healthcare provider is recommended for personalized guidance.");
      }
      insights.push("Remember, BMI doesn't account for muscle mass or body composition.");
      return insights;
    },
      explanation: [
      {
        heading: "BMI formula: how to calculate Body Mass Index",
        paragraphs: [
          "The BMI formula is: BMI = weight (kg) ÷ height (m)², weight in kilograms divided by height in meters, squared. This calculator converts your height from centimeters to meters automatically before applying the formula, so you can enter height in cm directly.",
          "For example, a person weighing 70 kg with a height of 175 cm (1.75 m) has a BMI of 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 ≈ 22.9, which falls in the normal weight range.",
        ],
      },
      {
        heading: "BMI chart and weight categories",
        paragraphs: [
          "According to the standard BMI chart, a BMI below 18.5 is categorized as underweight, 18.5 to 24.9 as normal weight, 25 to 29.9 as overweight, and 30 or above as obese. These BMI ranges are widely used general screening thresholds, not a personalized health assessment.",
        ],
      },
    ],
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
    slug: "compound-interest-calculator",
    category: "finance",
    title: "Compound Interest Calculator",
    shortDescription: "Calculate how your investment grows with compound interest.",
    metaDescription: "Free online compound interest calculator to see how your savings or investment grows over time.",
    h1: "Compound Interest Calculator",
    intro: "Calculate how an investment grows over time with compound interest, choosing how often interest compounds.",
    icon: "📈",
    status: "live",
    inputFields: [
      { key: "principal", label: "Initial Amount", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
      { key: "years", label: "Time Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 10" },
      {
        key: "frequency",
        label: "Compounding Frequency",
        type: "select",
        options: [
          { label: "Annually", value: "annually" },
          { label: "Semi-Annually", value: "semiannually" },
          { label: "Quarterly", value: "quarterly" },
          { label: "Monthly", value: "monthly" },
          { label: "Daily", value: "daily" },
        ],
      },
    ],
    resultFields: [
      { key: "finalAmount", label: "Final Amount", highlight: true },
      { key: "totalInterest", label: "Total Interest Earned", highlight: true },
    ],
calculate: (inputs) => {
      const principal = Number(inputs.principal);
      const annualRate = Number(inputs.annualRate);
      const years = Number(inputs.years);
      const frequency = String(inputs.frequency) as CompoundFrequency;
      const output = calculateCompoundInterest(principal, annualRate, years, frequency);
      return { ...output };
    },
    interpret: (result, inputs) => {
      const principal = Number(inputs.principal);
      const finalAmount = Number(result.finalAmount);
      const growthMultiple = principal > 0 ? finalAmount / principal : 0;
      return [
        "Your initial investment grows to roughly " + growthMultiple.toFixed(2) + "x its original value.",
        "Total interest earned (" + result.totalInterest + ") is " + Math.round((Number(result.totalInterest) / principal) * 100) + "% of your original principal.",
      ];
    },
      explanation: [
      {
        heading: "Compound interest formula: how compound interest is calculated",
        paragraphs: [
          "The compound interest formula for the final amount is: A = P × (1 + r/n)^(n×t), where P is the initial principal, r is the annual interest rate as a decimal, n is the number of times interest compounds per year, and t is the number of years.",
          "For example, 10,000 invested at 7% annual interest, compounded monthly (n=12), for 10 years grows to 10,000 × (1 + 0.07/12)^(12×10), which works out to roughly 20,097, meaning about 10,097 in compound interest earned over the period.",
        ],
      },
      {
        heading: "Monthly vs annual compounding: why frequency matters",
        paragraphs: [
          "More frequent compounding means interest gets added to the balance more often, so subsequent interest calculations are based on a slightly larger amount each time. This is why monthly compound interest yields marginally more than annual compounding at the same nominal interest rate, an important factor when comparing savings accounts or investments.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is compound interest?",
        answer:
          "Compound interest is interest calculated on both the original principal and the accumulated interest from previous periods, causing growth to accelerate over time compared to simple interest.",
      },
      {
        question: "Does compounding frequency really make a difference?",
        answer:
          "Yes, more frequent compounding (like monthly or daily) results in slightly higher returns than less frequent compounding (like annually), for the same nominal interest rate, though the difference is usually modest.",
      },
      {
        question: "Is this the same as calculating investment returns?",
        answer:
          "This calculator assumes a fixed interest rate and no additional contributions. Real investment returns often vary and may include regular deposits, which this tool does not account for.",
      },
    ],
    relatedSlugs: ["emi-calculator", "loan-calculator"],
  },
  {
    slug: "tip-calculator",
    category: "misc",
    title: "Tip Calculator",
    shortDescription: "Calculate tip amount and split the bill.",
    metaDescription: "Free online tip calculator to calculate tip amount, total bill, and split the cost among multiple people.",
    h1: "Tip Calculator",
    intro: "Calculate the tip amount, total bill, and how much each person owes when splitting a bill.",
    icon: "🧾",
    status: "live",
    inputFields: [
      { key: "billAmount", label: "Bill Amount", type: "number", step: 0.01, placeholder: "e.g. 50" },
      { key: "tipPercent", label: "Tip (%)", type: "number", step: 1, defaultValue: 15 },
      { key: "numPeople", label: "Number of People", type: "number", step: 1, defaultValue: 1 },
    ],
    resultFields: [
      { key: "tipAmount", label: "Tip Amount", highlight: true },
      { key: "totalAmount", label: "Total Bill", highlight: true },
      { key: "amountPerPerson", label: "Per Person" },
    ],
    calculate: (inputs) => {
      const billAmount = Number(inputs.billAmount);
      const tipPercent = Number(inputs.tipPercent);
      const numPeople = Number(inputs.numPeople);
      const output = calculateTip(billAmount, tipPercent, numPeople);
      return { ...output };
    },
explanation: [
      {
        heading: "How to calculate a tip (tip formula)",
        paragraphs: [
          "To calculate a tip, the formula is: Tip Amount = Bill Amount × (Tip % ÷ 100). The total bill is then the original amount plus the tip. For example, calculating a 15% tip on a 50 bill: tip amount = 50 × (15 ÷ 100) = 7.50, for a total of 57.50.",
        ],
      },
      {
        heading: "How to split a bill with tip among multiple people",
        paragraphs: [
          "To split the bill, including tip, evenly among a group, the total bill (original amount plus tip) is divided by the number of people. For example, a 57.50 total split between 3 people works out to 19.17 per person, this is how a bill splitter calculator handles group dining.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a standard tip percentage?",
        answer: "Tipping norms vary by country and situation, but 15-20% is common for restaurant service in the United States.",
      },
      {
        question: "How is the per-person amount calculated?",
        answer: "The total bill, including tip, is divided evenly by the number of people entered.",
      },
    ],
    relatedSlugs: ["percentage-calculator", "discount-calculator"],
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
      explanation: [
      {
        heading: "BMR formula: how to calculate Basal Metabolic Rate",
        paragraphs: [
          "This calculator uses the Mifflin-St Jeor equation, one of the most widely validated BMR formulas for calculating basal metabolic rate: for men, BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age (years) + 5. For women, the same BMR calculation is used but 161 is subtracted instead of adding 5.",
        ],
      },
      {
        heading: "How to calculate daily calorie needs from BMR",
        paragraphs: [
          "BMR alone only reflects calories burned at rest. To estimate total daily calorie needs (also called maintenance calories or TDEE), this figure is multiplied by an activity level multiplier: 1.2 for sedentary, 1.375 for light activity, 1.55 for moderate, 1.725 for active, and 1.9 for very active lifestyles.",
        ],
      },
    ],
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
  explanation: [
      {
        heading: "How word count and character count are calculated",
        paragraphs: [
          "Word count is calculated by splitting the text on whitespace (spaces, tabs, line breaks), so consecutive spaces don't inflate the count. Character count includes every character typed, including spaces and punctuation, while the 'characters without spaces' figure excludes whitespace, useful for platforms with strict character limits.",
        ],
      },
      {
        heading: "How sentence and paragraph count work",
        paragraphs: [
          "Sentences are detected by counting sequences of text ending in a period, question mark, or exclamation point. Paragraphs are counted by splitting text on line breaks and counting non-empty sections, this is how a word counter tool estimates structure for essays, articles, and word-limit-sensitive writing like tweets or meta descriptions.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How text case conversion works",
        paragraphs: [
          "Converting text case means changing the capitalization pattern without changing the actual words. UPPERCASE converts every letter to capital, lowercase converts every letter to small, Title Case capitalizes the first letter of every word (commonly used for headings and names), and Sentence case capitalizes only the first letter of each sentence, matching normal written English.",
        ],
      },
      {
        heading: "When to use each case format",
        paragraphs: [
          "Title case is typically used for headlines, book titles, and proper names. Sentence case is standard for body text and most everyday writing. UPPERCASE is often used for emphasis, acronyms, or legal disclaimers, while lowercase is sometimes used stylistically in usernames, hashtags, or casual branding.",
        ],
      },
    ],
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
    slug: "salary-calculator",
    category: "finance",
    title: "Take-Home Salary Calculator",
    shortDescription: "Estimate your monthly and annual take-home pay.",
    metaDescription: "Free online take-home salary calculator to estimate your net pay after deductions.",
    h1: "Take-Home Salary Calculator",
    intro: "Estimate your take-home pay by entering your annual gross salary and an estimated total deduction percentage for tax and other withholdings.",
    icon: "💼",
    status: "live",
    inputFields: [
      { key: "annualGross", label: "Annual Gross Salary", type: "number", step: 0.01, placeholder: "e.g. 60000" },
      { key: "deductionPercent", label: "Estimated Total Deductions (%)", type: "number", step: 0.1, placeholder: "e.g. 25" },
    ],
    resultFields: [
      { key: "monthlyNet", label: "Monthly Take-Home", highlight: true },
      { key: "annualNet", label: "Annual Take-Home", highlight: true },
      { key: "monthlyGross", label: "Monthly Gross" },
      { key: "totalDeductions", label: "Total Annual Deductions" },
    ],
    calculate: (inputs) => {
      const annualGross = Number(inputs.annualGross);
      const deductionPercent = Number(inputs.deductionPercent);
      const output = calculateTakeHomeSalary(annualGross, deductionPercent);
      return { ...output };
    },
explanation: [
      {
        heading: "How to calculate take-home pay (net salary)",
        paragraphs: [
          "This calculator finds your take-home pay by subtracting a total deduction percentage from your annual gross salary: Net Salary = Gross Salary − (Gross Salary × Deduction % ÷ 100). The result is then divided by 12 to show your monthly take-home pay alongside the annual figure.",
        ],
      },
      {
        heading: "Gross salary vs net salary",
        paragraphs: [
          "Gross salary is your total pay before any deductions, while net salary (take-home pay) is what actually lands in your bank account after tax, social security, retirement contributions and other withholdings are subtracted. The gap between the two varies significantly by country and individual circumstances.",
        ],
      },
    ],
    faqs: [
      {
        question: "What counts as a deduction?",
        answer:
          "Deductions typically include income tax, social security, retirement contributions, health insurance and other withholdings. This calculator uses a single combined percentage rather than modeling any specific country's tax brackets.",
      },
      {
        question: "Why doesn't this calculator use exact tax brackets?",
        answer:
          "Tax rules vary significantly by country, state and personal circumstances. This tool gives a quick estimate using your own deduction percentage rather than assuming one specific tax system, which could otherwise mislead visitors in a different jurisdiction.",
      },
      {
        question: "How do I find my actual deduction percentage?",
        answer: "Check a recent pay stub, divide your total deductions by your gross pay for that period, and multiply by 100 to get your personal deduction percentage.",
      },
    ],
    relatedSlugs: ["emi-calculator", "gst-calculator"],
  },
  {
    slug: "sales-tax-calculator",
    category: "finance",
    title: "Sales Tax Calculator",
    shortDescription: "Calculate sales tax and total price.",
    metaDescription: "Free online sales tax calculator to find the tax amount and total price for a purchase.",
    h1: "Sales Tax Calculator",
    intro: "Calculate the sales tax amount and final total price based on a price and tax rate.",
    icon: "🧮",
    status: "live",
    inputFields: [
      { key: "price", label: "Price Before Tax", type: "number", step: 0.01, placeholder: "e.g. 100" },
      { key: "taxRate", label: "Sales Tax Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 8.25" },
    ],
    resultFields: [
      { key: "taxAmount", label: "Tax Amount", highlight: true },
      { key: "totalPrice", label: "Total Price", highlight: true },
    ],
    calculate: (inputs) => {
      const price = Number(inputs.price);
      const taxRate = Number(inputs.taxRate);
      const output = calculateSalesTax(price, taxRate);
      return { ...output };
    },
      explanation: [
      {
        heading: "How to calculate sales tax on a purchase",
        paragraphs: [
          "The sales tax formula is: Sales Tax = Price × (Tax Rate ÷ 100). The total price you pay is then the original price plus that tax amount. For example, to calculate sales tax on a 100 purchase at an 8.25% tax rate: sales tax = 100 × (8.25 ÷ 100) = 8.25, for a total price of 108.25.",
        ],
      },
      {
        heading: "How to calculate the price before tax (reverse sales tax)",
        paragraphs: [
          "If you know the final total price and want to find the pre-tax price instead, divide the total by (1 + Tax Rate ÷ 100). For example, a total of 108.25 at 8.25% tax gives a pre-tax price of 108.25 ÷ 1.0825 = 100, this reverse calculation is useful when a receipt only shows the final total.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find my local sales tax rate?",
        answer: "Sales tax rates vary by country, state, and sometimes city or county. Check your local government's tax authority website for the exact current rate in your area.",
      },
      {
        question: "Is this the same as GST or VAT?",
        answer: "GST and VAT work similarly to sales tax in principle, calculated as a percentage of the price, but rules on what's taxed and how it's applied can differ. Our GST Calculator has a dedicated add/remove mode for GST-inclusive pricing.",
      },
    ],
    relatedSlugs: ["gst-calculator", "discount-calculator"],
  },
  {
    slug: "fuel-cost-calculator",
    category: "misc",
    title: "Fuel Cost Calculator",
    shortDescription: "Estimate fuel cost for a trip.",
    metaDescription: "Free online fuel cost calculator to estimate how much fuel you'll need and its cost for a given distance.",
    h1: "Fuel Cost Calculator",
    intro: "Estimate the fuel needed and total cost for a trip based on distance, fuel efficiency and fuel price.",
    icon: "⛽",
    status: "live",
    inputFields: [
      { key: "distance", label: "Trip Distance", type: "number", step: 0.1, placeholder: "e.g. 300" },
      { key: "fuelEfficiency", label: "Fuel Efficiency (distance per fuel unit)", type: "number", step: 0.1, placeholder: "e.g. 15" },
      { key: "fuelPrice", label: "Fuel Price (per fuel unit)", type: "number", step: 0.01, placeholder: "e.g. 1.5" },
    ],
    resultFields: [
      { key: "fuelNeeded", label: "Fuel Needed", highlight: true },
      { key: "totalCost", label: "Total Fuel Cost", highlight: true },
    ],
    calculate: (inputs) => {
      const distance = Number(inputs.distance);
      const fuelEfficiency = Number(inputs.fuelEfficiency);
      const fuelPrice = Number(inputs.fuelPrice);
      const output = calculateFuelCost(distance, fuelEfficiency, fuelPrice);
      return { ...output };
    },
explanation: [
      {
        heading: "How to calculate fuel cost for a trip",
        paragraphs: [
          "The fuel cost formula is: Fuel Needed = Distance ÷ Fuel Efficiency, and Total Cost = Fuel Needed × Fuel Price. For example, a 300-mile trip in a vehicle averaging 15 miles per gallon needs 300 ÷ 15 = 20 gallons of fuel, costing 20 × 1.50 = 30 at 1.50 per gallon.",
        ],
      },
      {
        heading: "Estimating gas cost for a road trip",
        paragraphs: [
          "To estimate gas cost accurately, use your vehicle's real-world fuel efficiency (from a recent fill-up) rather than the official rated efficiency, since actual driving conditions, speed and load typically use more fuel than laboratory test ratings suggest.",
        ],
      },
    ],
    faqs: [
      {
        question: "What units should I use?",
        answer: "Use any consistent unit system, for example miles for distance with miles-per-gallon for efficiency and price-per-gallon for fuel price, or kilometers with kilometers-per-liter and price-per-liter. As long as all three inputs use matching units, the result will be accurate.",
      },
      {
        question: "Does this account for traffic, terrain or driving style?",
        answer: "No, this calculator uses a fixed fuel efficiency value you provide. Actual fuel consumption can vary based on traffic, terrain, speed and driving habits.",
      },
    ],
    relatedSlugs: ["length-converter", "currency-converter"],
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
explanation: [
      {
        heading: "How to convert length units (metric and imperial)",
        paragraphs: [
          "This length converter works by converting your input value to meters first (using standard exact conversion factors), then converting from meters into your target unit. For example, converting inches to centimeters uses the exact factor 1 inch = 2.54 cm internally, so 10 inches converts to 25.4 cm.",
        ],
      },
      {
        heading: "Common length conversions",
        paragraphs: [
          "Frequently used conversions include feet to meters (1 foot = 0.3048 m), miles to kilometers (1 mile = 1.609344 km), and centimeters to inches (1 cm ≈ 0.3937 in). The quick reference table below shows several common length and distance conversions at a glance.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "How to convert weight units (kg, lb, oz, stone)",
        paragraphs: [
          "This weight converter works by converting your input value to grams first (using standard exact conversion factors), then converting from grams into your target unit. For example, converting kilograms to pounds uses the exact factor 1 kg = 2.20462 lb internally.",
        ],
      },
      {
        heading: "Common weight conversions",
        paragraphs: [
          "Frequently used conversions include kilograms to pounds (kg to lbs), pounds to kilograms, and grams to ounces, commonly needed for cooking, fitness tracking, or shipping weight limits. The quick reference table below shows several common weight conversions at a glance.",
        ],
      },
    ],
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
explanation: [
      {
        heading: "Celsius to Fahrenheit formula (and Kelvin)",
        paragraphs: [
          "To convert Celsius to Fahrenheit, the formula is: °F = (°C × 9/5) + 32. For example, 20°C converts to (20 × 9/5) + 32 = 68°F. To convert Fahrenheit to Celsius, the reverse formula is: °C = (°F − 32) × 5/9.",
          "To convert Celsius to Kelvin, simply add 273.15: K = °C + 273.15. Kelvin has no negative values, since 0 K (−273.15°C) represents absolute zero, the theoretical point where all molecular motion stops.",
        ],
      },
      {
        heading: "Common temperature reference points",
        paragraphs: [
          "Useful reference points for temperature conversion: water freezes at 0°C (32°F), room temperature is around 20°C (68°F), body temperature is approximately 37°C (98.6°F), and water boils at 100°C (212°F) at sea level. See the full temperature reference table below.",
        ],
      },
    ],
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
    slug: "discount-stack-calculator",
    category: "finance",
    title: "Stacked Discount Calculator",
    shortDescription: "Calculate the final price after two discounts applied in sequence.",
    metaDescription: "Free online stacked discount calculator to find the final price after applying two discounts one after another.",
    h1: "Stacked Discount Calculator",
    intro: "Calculate the final price when two discounts are applied one after another, not added together.",
    icon: "🏷️",
    status: "live",
    inputFields: [
      { key: "originalPrice", label: "Original Price", type: "number", step: 0.01, placeholder: "e.g. 1000" },
      { key: "discount1", label: "First Discount (%)", type: "number", step: 0.01, placeholder: "e.g. 20" },
      { key: "discount2", label: "Second Discount (%)", type: "number", step: 0.01, placeholder: "e.g. 10" },
    ],
    resultFields: [
      { key: "finalPrice", label: "Final Price", highlight: true },
      { key: "totalDiscountAmount", label: "Total Amount Saved", highlight: true },
      { key: "effectiveDiscountPercent", label: "Effective Discount", unit: "%" },
    ],
    calculate: (inputs) => {
      const originalPrice = Number(inputs.originalPrice);
      const discount1 = Number(inputs.discount1);
      const discount2 = Number(inputs.discount2);
      const output = calculateStackedDiscounts(originalPrice, discount1, discount2);
      return { ...output };
    },
explanation: [
      {
        heading: "How stacked discounts are calculated",
        paragraphs: [
          "When two discounts apply one after another, the second discount is calculated on the already-reduced price, not the original price. The formula is: Final Price = Original Price × (1 − Discount1 ÷ 100) × (1 − Discount2 ÷ 100).",
        ],
      },
      {
        heading: "Why 20% off plus 10% off isn't 30% off",
        paragraphs: [
          "For example, a 1000 item with 20% off first drops to 800, then a further 10% off that 800 (not the original 1000) removes another 80, giving a final price of 720. The effective total discount is 28%, not 30%, since the second discount applies to a smaller base amount, this is a common mistake when combining coupon codes or sale discounts.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 20% off plus 10% off the same as 30% off?",
        answer:
          "No. Stacked discounts apply one after the other to the already-reduced price, so 20% then 10% works out to an effective discount of 28%, not 30%, since the second discount applies to a smaller amount.",
      },
      {
        question: "Does the order of the two discounts matter?",
        answer: "No, applying discount A then discount B gives the same final price as applying B then A, multiplication is commutative either way.",
      },
    ],
    relatedSlugs: ["discount-calculator", "percentage-calculator"],
  },
  {
    slug: "extra-payment-calculator",
    category: "finance",
    title: "Loan Extra Payment Calculator",
    shortDescription: "See how extra monthly payments shorten your loan and save interest.",
    metaDescription: "Free online calculator to see how much time and interest you save by paying extra on your loan each month.",
    h1: "Loan Extra Payment Calculator",
    intro: "See how adding an extra amount to your monthly loan payment shortens your payoff time and reduces total interest.",
    icon: "🏦",
    status: "live",
    inputFields: [
      { key: "principal", label: "Remaining Loan Balance", type: "number", step: 0.01, placeholder: "e.g. 200000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 6.5" },
      { key: "originalPayment", label: "Current Monthly Payment", type: "number", step: 0.01, placeholder: "e.g. 1500" },
      { key: "extraPayment", label: "Extra Monthly Payment", type: "number", step: 0.01, placeholder: "e.g. 200" },
    ],
    resultFields: [
      { key: "monthsSaved", label: "Months Saved", highlight: true, unit: "months" },
      { key: "interestSaved", label: "Interest Saved", highlight: true },
      { key: "originalMonths", label: "Original Payoff Time", unit: "months" },
      { key: "newMonths", label: "New Payoff Time", unit: "months" },
    ],
    calculate: (inputs) => {
      const principal = Number(inputs.principal);
      const annualRate = Number(inputs.annualRate);
      const originalPayment = Number(inputs.originalPayment);
      const extraPayment = Number(inputs.extraPayment);
      const output = calculateExtraPaymentImpact(principal, annualRate, originalPayment, extraPayment);
      return { ...output };
    },
explanation: [
      {
        heading: "How extra loan payments reduce total interest",
        paragraphs: [
          "This calculator simulates your loan month by month, comparing your current payment schedule against the same schedule with an extra amount added each month. Because interest is calculated on the remaining balance, paying extra directly reduces principal faster, which lowers the interest charged in every future month for the rest of the loan.",
        ],
      },
      {
        heading: "Extra payments vs a shorter loan term",
        paragraphs: [
          "Adding even a modest extra amount to a monthly mortgage or loan payment can shave years off the payoff time and save a substantial amount in total interest, often more than the extra payments themselves might suggest, because the savings compound over the remaining life of the loan.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does a small extra payment save so much interest?",
        answer:
          "Extra payments go directly toward reducing your principal balance, which reduces the interest charged in every subsequent month for the remaining life of the loan, so the savings compound over time.",
      },
      {
        question: "Does this account for prepayment penalties?",
        answer: "No, some loans charge a fee for paying off early or making extra payments. Check your loan agreement or with your lender before making extra payments.",
      },
      {
        question: "What if my monthly payment is too low to ever pay off the loan?",
        answer: "If your payment doesn't cover the monthly interest charge, the loan balance would never decrease. The calculator will show an error in this case rather than an incorrect result.",
      },
    ],
    relatedSlugs: ["emi-calculator", "loan-calculator"],
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
    featured: true,
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
      explanation: [
      {
        heading: "How a random password generator works",
        paragraphs: [
          "This secure password generator builds a character set from the categories you select (uppercase letters, lowercase letters, numbers, symbols), then randomly picks characters from that combined set, one at a time, for your chosen password length. Each character position is selected independently, so the generated password isn't based on any word, pattern or dictionary entry.",
        ],
      },
      {
        heading: "Password length vs complexity: what makes a strong password",
        paragraphs: [
          "Every additional character multiplies the total number of possible password combinations, rather than just adding to it. A longer strong password made from a smaller set of characters (say, just lowercase letters and numbers) can still be harder to crack than a shorter complex password using every character type, simply because of how quickly the possibilities compound with length.",
        ],
      },
    ],
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
    relatedSlugs: ["uuid-generator", "random-number-generator"],
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
      explanation: [
      {
        heading: "Discount formula: how to calculate a discounted price",
        paragraphs: [
          "The discount formula is: Discount Amount = Original Price × (Discount % ÷ 100). The final sale price is then the original price minus that discount amount.",
          "For example, to calculate 20% off an item priced at 1000: discount amount = 1000 × (20 ÷ 100) = 200, giving a final price of 1000 − 200 = 800.",
        ],
      },
      {
        heading: "How to find the discount percentage from a sale price",
        paragraphs: [
          "If you know both the original and sale price and want to work out what percentage off was applied, that's a reverse calculation: divide the amount saved by the original price, then multiply by 100. Our Percentage Calculator's 'X is what % of Y' mode can be used for this calculation.",
        ],
      },
    ],
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
    featured: true,
    widgetType: "amortization",
    amortizationTenureUnit: "months",
explanation: [
      {
        heading: "EMI formula: how to calculate EMI manually",
        paragraphs: [
          "The EMI formula (Equated Monthly Installment formula) is: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan principal, r is the monthly interest rate (annual rate divided by 12, then by 100), and n is the number of monthly installments.",
          "This loan EMI formula produces a single fixed monthly payment that, when paid every month for n months, exactly pays off both the principal and all accumulated interest by the final payment, whether it's a home loan, car loan, or personal loan EMI.",
        ],
      },
      {
        heading: "EMI calculation example",
        paragraphs: [
          "For a loan of 500,000 at 8.5% annual interest over 60 months: the monthly interest rate is 8.5 ÷ 12 ÷ 100 = 0.007083. Plugging this into the EMI formula gives a fixed monthly EMI, with the exact month-by-month breakdown of how much goes to principal versus interest shown in the loan amortization schedule below.",
        ],
      },
    ],
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
      {
        question: "What is an amortization schedule?",
        answer: "An amortization schedule shows how each payment splits between principal and interest over the life of the loan, and how your remaining balance decreases over time.",
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
explanation: [
      {
        heading: "How to add GST to a price (GST formula)",
        paragraphs: [
          "When your amount doesn't yet include GST, the GST formula to add GST is: GST amount = Price × (GST Rate ÷ 100), and the total price is the original price plus that GST amount. For example, a price of 1000 with 18% GST gives a GST amount of 180, for a GST-inclusive total of 1180.",
        ],
      },
      {
        heading: "How to remove GST from a price (reverse GST calculation)",
        paragraphs: [
          "When your amount already includes GST, the base price (GST-exclusive amount) is calculated by dividing by (1 + GST Rate ÷ 100), not by simply subtracting the percentage. For example, 1180 (GST-inclusive at 18%) divided by 1.18 gives back exactly 1000 as the base price, with 180 as the GST portion, this reverse GST calculation is a common source of confusion.",
        ],
      },
    ],
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
    widgetType: "amortization",
    amortizationTenureUnit: "years",
      explanation: [
      {
        heading: "Loan repayment formula: how monthly loan payments are calculated",
        paragraphs: [
          "This loan calculator uses the same underlying formula as EMI: Monthly Payment = P × r × (1+r)^n / ((1+r)^n − 1), where P is the loan principal, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the total number of monthly payments. The loan tenure you enter in years is converted to months internally before applying the formula.",
        ],
      },
      {
        heading: "Loan repayment calculation example",
        paragraphs: [
          "For a loan of 250,000 at 7.2% annual interest over 15 years (180 months): the monthly interest rate is 7.2 ÷ 12 ÷ 100 = 0.006. Applying the loan formula gives a fixed monthly payment, with total interest and total repayment shown alongside the full loan amortization schedule below, which breaks down exactly how much of each payment goes toward principal versus interest.",
        ],
      },
    ],
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
      {
        question: "Can I see a full payment breakdown, not just totals?",
        answer: "Yes, the amortization schedule below shows a year-by-year or month-by-month breakdown of principal, interest and remaining balance for the entire loan term.",
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
explanation: [
      {
        heading: "How to calculate the number of days between two dates",
        paragraphs: [
          "To find the difference between two dates, this tool counts the exact number of calendar days, then converts that into complete years, months and remaining days, the same way you'd count age or a duration by hand, but automated and accounting for leap years and varying month lengths.",
          "For example, from January 1, 2026 to July 15, 2026 is 195 days, or 6 months and 14 days when broken into a years/months/days format.",
        ],
      },
      {
        heading: "Date difference in weeks, months and total days",
        paragraphs: [
          "Alongside the years/months/days breakdown, this date duration calculator also shows the total number of weeks and total number of days between the two dates, useful for project planning, tracking deadlines, or calculating someone's exact age in days rather than years.",
        ],
      },
    ],
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
    slug: "gpa-calculator",
    category: "misc",
    title: "GPA Calculator",
    shortDescription: "Calculate your Grade Point Average from course grades and credit hours.",
    metaDescription: "Free online GPA calculator to calculate your Grade Point Average from letter grades and credit hours.",
    h1: "GPA Calculator",
    intro: "Calculate your GPA by entering letter grades and credit hours for up to five courses.",
    icon: "🎓",
    status: "live",
    inputFields: [
      { key: "grade1", label: "Course 1 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits1", label: "Course 1 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
      { key: "grade2", label: "Course 2 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits2", label: "Course 2 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
      { key: "grade3", label: "Course 3 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits3", label: "Course 3 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
      { key: "grade4", label: "Course 4 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits4", label: "Course 4 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
      { key: "grade5", label: "Course 5 Grade", type: "select", options: [
        { label: "Not Used", value: "" }, { label: "A", value: "A" }, { label: "A-", value: "A-" },
        { label: "B+", value: "B+" }, { label: "B", value: "B" }, { label: "B-", value: "B-" },
        { label: "C+", value: "C+" }, { label: "C", value: "C" }, { label: "C-", value: "C-" },
        { label: "D+", value: "D+" }, { label: "D", value: "D" }, { label: "F", value: "F" },
      ] },
      { key: "credits5", label: "Course 5 Credit Hours", type: "number", step: 1, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "gpa", label: "GPA", highlight: true },
      { key: "totalCredits", label: "Total Credit Hours" },
    ],
    calculate: (inputs) => {
      const courses = [1, 2, 3, 4, 5].map((n) => ({
        grade: String(inputs["grade" + n] ?? ""),
        credits: Number(inputs["credits" + n]),
      }));
      const output = calculateGpa(courses);
      return { ...output };
    },
    explanation: [
      {
        heading: "How to calculate GPA (Grade Point Average)",
        paragraphs: [
          "GPA is calculated by converting each letter grade to a grade point value (A = 4.0, B = 3.0, C = 2.0, and so on), multiplying by that course's credit hours, summing all the results, then dividing by the total credit hours attempted.",
          "For example, an A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course gives (4.0×3 + 3.0×4) ÷ (3+4) = 24 ÷ 7 ≈ 3.43 GPA.",
        ],
      },
      {
        heading: "Weighted vs unweighted GPA",
        paragraphs: [
          "This is an unweighted GPA calculator, meaning every course counts equally regardless of difficulty. Some schools use weighted GPA, which gives extra grade points for honors or AP courses, this calculator does not apply that adjustment.",
        ],
      },
    ],
    faqs: [
      {
        question: "What grading scale does this GPA calculator use?",
        answer: "This calculator uses the standard 4.0 scale (A = 4.0 down to F = 0.0), the most common grading scale used by US high schools and colleges.",
      },
      {
        question: "Can I calculate GPA for more than 5 courses?",
        answer: "This tool supports up to 5 courses at a time. For a full semester with more courses, you can calculate in batches and combine the weighted totals manually.",
      },
    ],
    relatedSlugs: ["percentage-calculator"],
  },
  {
    slug: "ideal-weight-calculator",
    category: "health",
    title: "Ideal Weight Calculator",
    shortDescription: "Estimate your ideal body weight based on height and gender.",
    metaDescription: "Free online ideal weight calculator to estimate your ideal body weight based on height and gender using the Devine formula.",
    h1: "Ideal Weight Calculator",
    intro: "Estimate your ideal body weight based on your height and gender using the widely used Devine formula.",
    icon: "🎯",
    status: "live",
    inputFields: [
      { key: "gender", label: "Gender", type: "select", options: [
        { label: "Male", value: "male" }, { label: "Female", value: "female" },
      ] },
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
    ],
    resultFields: [
      { key: "idealWeightKg", label: "Ideal Weight (kg)", highlight: true },
      { key: "idealWeightLb", label: "Ideal Weight (lb)", highlight: true },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as "male" | "female";
      const heightCm = Number(inputs.heightCm);
      const output = calculateIdealWeight(gender, heightCm);
      return { ...output };
    },
    explanation: [
      {
        heading: "How ideal weight is calculated (Devine formula)",
        paragraphs: [
          "This calculator uses the Devine formula, one of the most widely used ideal body weight formulas: for men, Ideal Weight (kg) = 50 + 2.3 × (height in inches − 60). For women, the same formula is used but starting from 45.5 kg instead of 50.",
          "The formula is based on height over 5 feet (60 inches), adding 2.3 kg for every inch above that baseline.",
        ],
      },
      {
        heading: "Ideal weight is a general estimate, not a personal target",
        paragraphs: [
          "This formula was originally developed for medical dosing calculations and provides only a general reference point. It doesn't account for muscle mass, bone structure, or individual body composition, so it shouldn't be treated as a strict personal weight goal.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Devine formula accurate for everyone?",
        answer: "It's a general estimate widely used in medical settings, but it doesn't account for muscle mass, frame size, or individual body composition, so actual healthy weight can vary from this estimate.",
      },
      {
        question: "Why does gender affect the result?",
        answer: "The formula uses different baseline constants for men and women to reflect typical differences in body composition, this is a simplification, not a precise individual assessment.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "body-fat-calculator"],
  },
  {
    slug: "body-fat-calculator",
    category: "health",
    title: "Body Fat Percentage Calculator",
    shortDescription: "Estimate body fat percentage using the U.S. Navy method.",
    metaDescription: "Free online body fat calculator to estimate body fat percentage using the U.S. Navy circumference method.",
    h1: "Body Fat Percentage Calculator",
    intro: "Estimate your body fat percentage using the U.S. Navy circumference method based on height, neck, waist and hip measurements.",
    icon: "📉",
    status: "live",
    inputFields: [
      { key: "gender", label: "Gender", type: "select", options: [
        { label: "Male", value: "male" }, { label: "Female", value: "female" },
      ] },
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
      { key: "neckCm", label: "Neck Circumference (cm)", type: "number", step: 0.1, placeholder: "e.g. 38" },
      { key: "waistCm", label: "Waist Circumference (cm)", type: "number", step: 0.1, placeholder: "e.g. 85" },
      { key: "hipCm", label: "Hip Circumference (cm) — required for females", type: "number", step: 0.1, placeholder: "e.g. 95" },
    ],
    resultFields: [
      { key: "bodyFatPercent", label: "Body Fat", unit: "%", highlight: true },
      { key: "category", label: "Category", highlight: true },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as "male" | "female";
      const heightCm = Number(inputs.heightCm);
      const neckCm = Number(inputs.neckCm);
      const waistCm = Number(inputs.waistCm);
      const hipCm = Number(inputs.hipCm);
      const output = calculateBodyFat(gender, heightCm, neckCm, waistCm, hipCm);
      return { ...output };
    },
    explanation: [
      {
        heading: "How the U.S. Navy body fat method works",
        paragraphs: [
          "This method estimates body fat percentage using circumference measurements at the neck, waist, and (for women) hips, combined with height, using a formula developed by the U.S. Navy as a practical field alternative to more precise methods like DEXA scans or hydrostatic weighing.",
        ],
      },
      {
        heading: "How to measure neck, waist and hip correctly",
        paragraphs: [
          "For accurate results, measure your neck just below the larynx, your waist at the narrowest point (or navel level), and hips at the widest point, all with a flexible tape measure held snug but not compressing the skin.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is the Navy body fat method?",
        answer: "It's reasonably accurate for most people as a field estimate, typically within a few percentage points of more precise clinical methods, but individual body shape variation can affect accuracy.",
      },
      {
        question: "Why is hip measurement only used for women?",
        answer: "The U.S. Navy formula uses different variables for men and women based on typical fat distribution patterns, the male formula only requires waist and neck, while the female formula also factors in hip measurement.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "ideal-weight-calculator"],
  },
  {
    slug: "inflation-calculator",
    category: "finance",
    title: "Inflation Calculator",
    shortDescription: "See how inflation affects the value of money over time.",
    metaDescription: "Free online inflation calculator to see how much a sum of money will be worth in the future accounting for inflation.",
    h1: "Inflation Calculator",
    intro: "Calculate how inflation affects the future value of an amount of money over a chosen number of years, using your own assumed annual inflation rate.",
    icon: "📉",
    status: "live",
    inputFields: [
      { key: "amount", label: "Amount", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "years", label: "Number of Years", type: "number", step: 1, placeholder: "e.g. 10" },
      { key: "annualRate", label: "Assumed Annual Inflation Rate (%)", type: "number", step: 0.1, defaultValue: 3 },
    ],
    resultFields: [
      { key: "futureValue", label: "Future Equivalent Value", highlight: true },
      { key: "totalIncrease", label: "Total Increase" },
      { key: "percentIncrease", label: "Percent Increase", unit: "%" },
    ],
    calculate: (inputs) => {
      const amount = Number(inputs.amount);
      const years = Number(inputs.years);
      const annualRate = Number(inputs.annualRate);
      const output = calculateInflation(amount, years, annualRate);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this inflation calculator works",
        paragraphs: [
          "This calculator projects future value using compound growth: Future Value = Amount × (1 + Rate ÷ 100)^Years, applying your chosen annual inflation rate every year, the same mathematical pattern as compound interest.",
        ],
      },
      {
        heading: "This uses an assumed rate, not historical CPI data",
        paragraphs: [
          "Unlike calculators that pull real historical Consumer Price Index data for a specific country, this tool uses an annual inflation rate you specify, letting you model different scenarios (for example, comparing 2% versus 5% average inflation) rather than being limited to one country's historical record.",
        ],
      },
    ],
    faqs: [
      {
        question: "What inflation rate should I use?",
        answer: "A commonly used long-term average is around 2 to 3% for many developed economies, but actual inflation varies significantly by country and year. Check your country's historical average for a more tailored estimate.",
      },
      {
        question: "Does this use real historical inflation data?",
        answer: "No, this calculator applies a constant rate you specify rather than pulling actual historical CPI data, making it a modeling tool rather than a historical lookup.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "net-worth-calculator"],
  },
  {
    slug: "net-worth-calculator",
    category: "finance",
    title: "Net Worth Calculator",
    shortDescription: "Calculate your net worth from total assets and liabilities.",
    metaDescription: "Free online net worth calculator to calculate your net worth by subtracting liabilities from assets.",
    h1: "Net Worth Calculator",
    intro: "Calculate your net worth by entering your total assets and total liabilities.",
    icon: "💳",
    status: "live",
    inputFields: [
      { key: "totalAssets", label: "Total Assets", type: "number", step: 0.01, placeholder: "e.g. 150000" },
      { key: "totalLiabilities", label: "Total Liabilities", type: "number", step: 0.01, placeholder: "e.g. 50000" },
    ],
    resultFields: [
      { key: "netWorth", label: "Net Worth", highlight: true },
      { key: "status", label: "Status", highlight: true },
    ],
    calculate: (inputs) => {
      const totalAssets = Number(inputs.totalAssets);
      const totalLiabilities = Number(inputs.totalLiabilities);
      const output = calculateNetWorth(totalAssets, totalLiabilities);
      return { ...output };
    },
    explanation: [
      {
        heading: "How to calculate net worth",
        paragraphs: [
          "Net worth is calculated as: Net Worth = Total Assets − Total Liabilities. Assets include things like cash, savings, investments, retirement accounts, and property value. Liabilities include debts like mortgages, loans, and credit card balances.",
        ],
      },
      {
        heading: "Why tracking net worth matters",
        paragraphs: [
          "Unlike income or a single account balance, net worth gives a complete picture of financial position by combining everything you own and everything you owe. Tracking it over time, rather than as a single snapshot, is generally more useful for understanding financial progress.",
        ],
      },
    ],
    faqs: [
      {
        question: "What counts as an asset?",
        answer: "Common assets include cash, bank account balances, investments, retirement accounts, real estate value, and vehicle value.",
      },
      {
        question: "What counts as a liability?",
        answer: "Common liabilities include mortgage balances, car loans, student loans, credit card debt, and any other money owed.",
      },
      {
        question: "Is a negative net worth unusual?",
        answer: "It's common, particularly earlier in life or after taking on debt like a mortgage or student loans. Net worth typically shifts over time as assets grow and debts are paid down.",
      },
    ],
    relatedSlugs: ["inflation-calculator", "compound-interest-calculator"],
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
    explanation: [
      {
        heading: "How a countdown timer works",
        paragraphs: [
          "This countdown timer calculates the exact difference between the current time and your chosen target date and time, then updates that difference every second, breaking it down into days, hours, minutes and seconds remaining.",
        ],
      },
      {
        heading: "Uses for a countdown timer",
        paragraphs: [
          "A live countdown is commonly used to track time remaining until an event, deadline, product launch, holiday, or any specific date and time you want to keep visible while the page stays open in your browser.",
        ],
      },
    ],
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
  {
    slug: "sip-calculator",
    category: "finance",
    title: "SIP Calculator",
    shortDescription: "Calculate the maturity value of your monthly SIP investment.",
    metaDescription:
      "Free online SIP calculator to calculate the maturity amount, total investment and wealth gained from a monthly Systematic Investment Plan.",
    h1: "SIP Calculator",
    intro:
      "Calculate the future value of your monthly SIP (Systematic Investment Plan) based on your monthly contribution, expected annual return and investment period.",
    icon: "📈",
    status: "live",
    featured: true,
    inputFields: [
      { key: "monthlyInvestment", label: "Monthly Investment", type: "number", step: 0.01, placeholder: "e.g. 5000" },
      { key: "annualRate", label: "Expected Annual Return (%)", type: "number", step: 0.1, placeholder: "e.g. 12" },
      { key: "years", label: "Investment Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 15" },
    ],
    resultFields: [
      { key: "maturityAmount", label: "Maturity Amount", highlight: true },
      { key: "totalInvested", label: "Total Amount Invested" },
      { key: "totalGains", label: "Wealth Gained", highlight: true },
    ],
    calculate: (inputs) => {
      const monthlyInvestment = Number(inputs.monthlyInvestment);
      const annualRate = Number(inputs.annualRate);
      const years = Number(inputs.years);
      const output = calculateSip(monthlyInvestment, annualRate, years);
      return { ...output };
    },
    interpret: (result) => {
      const totalInvested = Number(result.totalInvested);
      const maturityAmount = Number(result.maturityAmount);
      const growthMultiple = totalInvested > 0 ? maturityAmount / totalInvested : 0;
      return [
        "Your total investment of " + result.totalInvested + " is projected to grow to " + result.maturityAmount + ".",
        "That's roughly " + growthMultiple.toFixed(2) + "x your invested amount.",
        "Estimated wealth gained from returns: " + result.totalGains + ".",
      ];
    },
    explanation: [
      {
        heading: "How SIP maturity value is calculated",
        paragraphs: [
          "A SIP invests a fixed amount every month, and each installment compounds for a different length of time depending on when it was invested. The maturity value is calculated using the future value of a growing annuity formula: M = P × [((1 + i)^n − 1) / i] × (1 + i), where P is the monthly investment, i is the monthly rate of return, and n is the total number of monthly installments.",
          "For example, investing 5,000 per month for 15 years (n = 180) at an expected annual return of 12% (i = 1% monthly) grows to roughly 25.2 lakh, compared to a total invested amount of 9 lakh, meaning about 16.2 lakh comes purely from investment growth.",
        ],
      },
      {
        heading: "Why starting a SIP early matters",
        paragraphs: [
          "Because SIP returns compound monthly, earlier installments have far longer to grow than later ones. This is why extending the investment period, even by a few years, tends to have a much larger impact on the final maturity amount than increasing the monthly contribution by a similar percentage.",
        ],
      },
    ],
    faqs: [
      {
        question: "What return rate should I use for my SIP?",
        answer:
          "This depends on where you're investing. Equity mutual funds have historically returned around 10-15% annually over the long term, but returns aren't guaranteed and vary by fund and market conditions. Use a conservative estimate for planning purposes.",
      },
      {
        question: "Does this account for expense ratios or exit loads?",
        answer:
          "No, this calculator estimates gross returns based on your expected annual rate. Actual returns from a mutual fund SIP will be reduced by fund expense ratios and any applicable exit loads.",
      },
      {
        question: "Can I use this for a lump sum investment instead?",
        answer:
          "This calculator is designed for recurring monthly investments. For a one-time lump sum, use our Compound Interest Calculator instead.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "retirement-calculator", "savings-goal-calculator"],
  },
  {
    slug: "retirement-calculator",
    category: "finance",
    title: "Retirement Calculator",
    shortDescription: "Estimate your retirement savings corpus and future monthly income.",
    metaDescription:
      "Free online retirement calculator to estimate your retirement corpus based on current savings, monthly contributions and expected returns.",
    h1: "Retirement Calculator",
    intro:
      "Estimate how much your retirement savings could grow to by your target retirement age, based on your current savings, monthly contributions and expected annual return.",
    icon: "🏖️",
    status: "live",
    featured: true,
    inputFields: [
      { key: "currentAge", label: "Current Age", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "retirementAge", label: "Target Retirement Age", type: "number", step: 1, placeholder: "e.g. 60" },
      { key: "currentSavings", label: "Current Retirement Savings", type: "number", step: 0.01, defaultValue: 0 },
      { key: "monthlyContribution", label: "Monthly Contribution", type: "number", step: 0.01, placeholder: "e.g. 15000" },
      { key: "annualRate", label: "Expected Annual Return (%)", type: "number", step: 0.1, placeholder: "e.g. 10" },
    ],
    resultFields: [
      { key: "retirementCorpus", label: "Projected Retirement Corpus", highlight: true },
      { key: "estimatedMonthlyIncome", label: "Estimated Sustainable Monthly Income", highlight: true },
      { key: "totalContributions", label: "Total Contributions" },
      { key: "totalGrowth", label: "Total Growth from Returns" },
      { key: "yearsToRetirement", label: "Years to Retirement" },
    ],
    calculate: (inputs) => {
      const currentAge = Number(inputs.currentAge);
      const retirementAge = Number(inputs.retirementAge);
      const currentSavings = Number(inputs.currentSavings);
      const monthlyContribution = Number(inputs.monthlyContribution);
      const annualRate = Number(inputs.annualRate);
      const output = calculateRetirement(currentAge, retirementAge, currentSavings, monthlyContribution, annualRate);
      return { ...output };
    },
    interpret: (result) => {
      return [
        "At your target retirement age, your projected corpus is " + result.retirementCorpus + ".",
        "Using the common 4% withdrawal rule, that could sustain roughly " + result.estimatedMonthlyIncome + " per month in retirement.",
        "Of your total corpus, " + result.totalGrowth + " comes from investment growth rather than your own contributions.",
      ];
    },
    explanation: [
      {
        heading: "How your retirement corpus is projected",
        paragraphs: [
          "This calculator compounds your current savings forward to your retirement age, and separately calculates the future value of your ongoing monthly contributions using the future value of an annuity formula, then adds the two together to get your projected total retirement corpus.",
        ],
      },
      {
        heading: "The 4% withdrawal rule",
        paragraphs: [
          "The estimated monthly income uses the widely referenced 4% rule, which suggests withdrawing about 4% of your retirement savings per year can be sustained over a long retirement without depleting the principal too quickly, though this is a general guideline, not a guarantee, and doesn't account for inflation, sequence-of-returns risk, or your specific spending needs.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this account for inflation?",
        answer:
          "No, this calculator projects nominal (non-inflation-adjusted) future values. Your actual purchasing power at retirement will be lower than the projected corpus suggests, since prices generally rise over time.",
      },
      {
        question: "Is the 4% withdrawal rule guaranteed to work?",
        answer:
          "No, the 4% rule is a commonly cited planning guideline based on historical market data, not a guarantee. Actual sustainable withdrawal rates depend on market performance, your investment mix, and how long your retirement lasts.",
      },
      {
        question: "What if I change jobs or stop contributing for a while?",
        answer:
          "This calculator assumes a constant, uninterrupted monthly contribution. Pauses or changes in your contribution amount will affect your actual results compared to this projection.",
      },
    ],
    relatedSlugs: ["sip-calculator", "compound-interest-calculator", "net-worth-calculator"],
  },
  {
    slug: "protein-calculator",
    category: "health",
    title: "Protein Calculator",
    shortDescription: "Calculate your daily protein intake target based on weight and activity level.",
    metaDescription:
      "Free online protein calculator to estimate your daily protein intake target in grams based on your body weight, activity level and fitness goal.",
    h1: "Protein Calculator",
    intro:
      "Calculate how much protein you should eat daily based on your body weight, activity level and whether your goal is to maintain, build muscle, or lose fat.",
    icon: "🍗",
    status: "live",
    inputFields: [
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
      {
        key: "activityLevel",
        label: "Activity Level",
        type: "select",
        options: [
          { label: "Sedentary", value: "sedentary" },
          { label: "Light", value: "light" },
          { label: "Moderate", value: "moderate" },
          { label: "Active", value: "active" },
          { label: "Very Active", value: "veryActive" },
        ],
      },
      {
        key: "goal",
        label: "Goal",
        type: "select",
        options: [
          { label: "Maintain", value: "maintain" },
          { label: "Build Muscle", value: "muscleGain" },
          { label: "Lose Fat", value: "fatLoss" },
        ],
      },
    ],
    resultFields: [
      { key: "dailyProteinGrams", label: "Daily Protein Target", unit: "g", highlight: true },
      { key: "gramsPerKg", label: "Grams per kg Body Weight" },
      { key: "proteinCalories", label: "Calories from Protein", unit: "kcal" },
      { key: "perMealGrams", label: "Per Meal (4 meals/day)", unit: "g" },
    ],
    calculate: (inputs) => {
      const weightKg = Number(inputs.weightKg);
      const activityLevel = String(inputs.activityLevel) as ProteinActivityLevel;
      const goal = String(inputs.goal) as ProteinGoal;
      const output = calculateProteinNeeds(weightKg, activityLevel, goal);
      return { ...output };
    },
    interpret: (result) => {
      return [
        "Aim for roughly " + result.dailyProteinGrams + "g of protein per day, or about " + result.perMealGrams + "g per meal across 4 meals.",
        "That's about " + result.gramsPerKg + "g of protein per kg of body weight, providing roughly " + result.proteinCalories + " kcal from protein.",
      ];
    },
    explanation: [
      {
        heading: "How your protein target is calculated",
        paragraphs: [
          "This calculator estimates a daily protein target as grams per kilogram of body weight, using a base amount determined by your activity level, then adding an adjustment if your goal is muscle gain or fat loss, since both benefit from higher protein intake to support muscle building or preserve lean mass during a calorie deficit.",
        ],
      },
      {
        heading: "Why protein needs vary by activity level and goal",
        paragraphs: [
          "Sedentary individuals need less protein than those who train regularly, since resistance training and higher activity levels increase muscle protein breakdown and the need for repair and growth. Someone aiming to build muscle or lose fat while preserving muscle generally needs more protein per kg than someone simply maintaining their current weight and activity.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is more protein always better?",
        answer:
          "Not necessarily. This calculator caps its recommendation at 2.2g per kg of body weight, a level generally considered sufficient even for intense training goals. Consuming far beyond this doesn't typically provide additional benefit for most people.",
      },
      {
        question: "Should I use my current weight or my goal weight?",
        answer:
          "Generally, use your current body weight. If you have a significant amount of body fat to lose, some people use a lean body mass estimate instead, since protein needs are more closely tied to muscle mass than total body weight.",
      },
      {
        question: "Is this medical advice?",
        answer:
          "No, this tool provides a general estimate based on common fitness guidelines. Consult a registered dietitian or healthcare provider for personalized nutrition advice, especially if you have kidney issues or other medical conditions affected by protein intake.",
      },
    ],
    relatedSlugs: ["calorie-goal-calculator", "bmr-calculator", "ideal-weight-calculator"],
  },
  {
    slug: "tdee-calculator",
    category: "health",
    title: "TDEE Calculator",
    shortDescription: "Calculate your Total Daily Energy Expenditure and maintenance macros.",
    metaDescription:
      "Free online TDEE calculator to find your Total Daily Energy Expenditure, along with calorie targets for weight loss or gain and a maintenance macro breakdown.",
    h1: "TDEE Calculator",
    intro:
      "Calculate your Total Daily Energy Expenditure (TDEE) based on your age, height, weight and activity level, along with calorie targets for weight loss or gain and a suggested macro split.",
    icon: "⚡",
    status: "live",
    featured: true,
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
      { key: "tdee", label: "Total Daily Energy Expenditure", unit: "kcal/day", highlight: true },
      { key: "bmr", label: "BMR", unit: "kcal/day" },
      { key: "mildWeightLoss", label: "Mild Weight Loss (-0.25 kg/week)", unit: "kcal/day" },
      { key: "weightLoss", label: "Weight Loss (-0.5 kg/week)", unit: "kcal/day" },
      { key: "weightGain", label: "Weight Gain (+0.5 kg/week)", unit: "kcal/day" },
      { key: "proteinGrams", label: "Protein at Maintenance", unit: "g" },
      { key: "carbsGrams", label: "Carbs at Maintenance", unit: "g" },
      { key: "fatGrams", label: "Fat at Maintenance", unit: "g" },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as TdeeGender;
      const age = Number(inputs.age);
      const heightCm = Number(inputs.heightCm);
      const weightKg = Number(inputs.weightKg);
      const activityLevel = String(inputs.activityLevel) as TdeeActivityLevel;
      const output = calculateTdee(gender, age, heightCm, weightKg, activityLevel);
      return { ...output };
    },
    interpret: (result) => {
      return [
        "Your estimated maintenance calories (TDEE) are " + result.tdee + " kcal/day.",
        "To lose roughly 0.5 kg per week, aim for about " + result.weightLoss + " kcal/day.",
        "At maintenance, a balanced macro split is roughly " + result.proteinGrams + "g protein, " + result.carbsGrams + "g carbs and " + result.fatGrams + "g fat.",
      ];
    },
    explanation: [
      {
        heading: "How TDEE is calculated",
        paragraphs: [
          "This calculator first estimates your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation, then multiplies it by an activity multiplier (ranging from 1.2 for sedentary to 1.9 for very active) to estimate your Total Daily Energy Expenditure, the total calories you burn in a day including exercise and daily activity.",
          "Calorie targets for weight loss or gain are then calculated by subtracting or adding a calorie deficit or surplus from your TDEE, using the common approximation that a 500 kcal/day deficit or surplus corresponds to roughly 0.5 kg of body weight change per week.",
        ],
      },
      {
        heading: "How the macro split is calculated",
        paragraphs: [
          "The suggested macro breakdown splits your maintenance TDEE into roughly 30% protein, 40% carbohydrates and 30% fat, a commonly used balanced starting point. Protein and carbohydrates provide about 4 kcal per gram, while fat provides about 9 kcal per gram, which is how the gram amounts are derived from the calorie split.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between BMR and TDEE?",
        answer:
          "BMR is the calories your body burns at complete rest just to maintain basic functions. TDEE builds on BMR by adding in calories burned through daily activity and exercise, giving a more complete picture of your total daily calorie needs.",
      },
      {
        question: "Is the 30/40/30 macro split right for everyone?",
        answer:
          "It's a reasonable general starting point, but individual needs vary based on goals, training style and personal preference. Athletes, for example, often benefit from a higher carbohydrate intake, while some people prefer higher fat, lower carb splits.",
      },
      {
        question: "Should I eat exactly my TDEE every day?",
        answer:
          "Eating at your TDEE is intended to maintain your current weight. Use the weight loss or weight gain targets instead if your goal is to change your body weight, and adjust based on your actual results over a few weeks.",
      },
    ],
    relatedSlugs: ["bmr-calculator", "calorie-goal-calculator", "protein-calculator"],
  },
  {
    slug: "ovulation-calculator",
    category: "health",
    title: "Ovulation Calculator",
    shortDescription: "Estimate your ovulation date and most fertile days.",
    metaDescription:
      "Free online ovulation calculator to estimate your ovulation date, fertile window and next expected period based on your cycle.",
    h1: "Ovulation Calculator",
    intro:
      "Estimate your ovulation date, fertile window and next expected period based on the first day of your last period and your average cycle length.",
    icon: "🌸",
    status: "live",
    inputFields: [
      { key: "lastPeriodDate", label: "First Day of Last Period", type: "date" },
      { key: "cycleLength", label: "Average Cycle Length (days)", type: "number", step: 1, defaultValue: 28, min: 21, max: 45 },
    ],
    resultFields: [
      { key: "ovulationDate", label: "Estimated Ovulation Date", highlight: true },
      { key: "fertileWindowStart", label: "Fertile Window Start", highlight: true },
      { key: "fertileWindowEnd", label: "Fertile Window End", highlight: true },
      { key: "nextPeriodDate", label: "Next Expected Period" },
    ],
    calculate: (inputs) => {
      const lastPeriodDate = String(inputs.lastPeriodDate ?? "");
      const cycleLength = Number(inputs.cycleLength);
      const output = calculateOvulation(lastPeriodDate, cycleLength);
      return { ...output };
    },
    explanation: [
      {
        heading: "How ovulation date is estimated",
        paragraphs: [
          "This calculator estimates ovulation as occurring 14 days before your next expected period, which is calculated by adding your average cycle length to the first day of your last period. This is the standard method used since the second half of the menstrual cycle (the luteal phase) is typically a consistent 14 days, regardless of total cycle length.",
        ],
      },
      {
        heading: "Understanding the fertile window",
        paragraphs: [
          "The fertile window spans from about 5 days before ovulation through 1 day after, since sperm can survive in the reproductive tract for up to 5 days while an egg is typically viable for about 24 hours after release. Conception is most likely for intercourse occurring in the 1-2 days leading up to and including ovulation day itself.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is this estimate?",
        answer:
          "This calculator provides a general estimate based on average cycle patterns. Actual ovulation timing varies cycle to cycle and person to person, especially with irregular cycles. Ovulation predictor kits or tracking basal body temperature can provide more personalized data.",
      },
      {
        question: "What if my cycle length varies from month to month?",
        answer:
          "Use your average cycle length for the best estimate, but be aware that the actual ovulation date may shift if a given cycle is shorter or longer than your average. Tracking several cycles can help identify your typical pattern.",
      },
      {
        question: "Can this calculator be used for contraception?",
        answer:
          "No, this tool is intended for general planning and awareness only. It should not be relied on as a method of contraception, since ovulation timing can vary and this estimate isn't precise enough for that purpose.",
      },
    ],
    relatedSlugs: ["pregnancy-due-date-calculator", "age-calculator", "date-calculator"],
  },
  {
    slug: "add-days-calculator",
    category: "date-time",
    title: "Add Days Calculator",
    shortDescription: "Add a number of days to a date and find the resulting date.",
    metaDescription: "Free online tool to add a number of days to any date and instantly find the resulting date and day of the week.",
    h1: "Add Days Calculator",
    intro: "Add a number of days to a starting date to find the resulting date and day of the week.",
    icon: "➕",
    status: "live",
    inputFields: [
      { key: "startDate", label: "Start Date", type: "date" },
      { key: "days", label: "Days to Add", type: "number", step: 1, min: 0, placeholder: "e.g. 30" },
    ],
    resultFields: [
      { key: "resultDate", label: "Resulting Date", highlight: true },
      { key: "dayOfWeek", label: "Day of the Week", highlight: true },
    ],
    calculate: (inputs) => {
      const startDate = String(inputs.startDate ?? "");
      const days = Number(inputs.days);
      const output = addDays(startDate, days);
      return { ...output };
    },
    explanation: [
      {
        heading: "How adding days to a date works",
        paragraphs: [
          "This tool takes your starting date and moves forward by the exact number of days you specify, automatically handling month-end rollovers and leap years, then reports the resulting calendar date and its day of the week.",
        ],
      },
      {
        heading: "Common uses for adding days to a date",
        paragraphs: [
          "This is useful for calculating deadlines (e.g. 'net 30' payment terms), shipping or delivery estimates, warranty expiration dates, or any situation where you need to project a date a fixed number of days into the future.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I add more than 365 days?",
        answer: "Yes, you can add any number of days, including spans of multiple years, the calculator handles leap years automatically.",
      },
      {
        question: "What if I need to go backward instead?",
        answer: "Use our Subtract Days Calculator to move a date backward by a number of days instead.",
      },
    ],
    relatedSlugs: ["subtract-days-calculator", "date-calculator", "working-days-calculator"],
  },
  {
    slug: "subtract-days-calculator",
    category: "date-time",
    title: "Subtract Days Calculator",
    shortDescription: "Subtract a number of days from a date and find the resulting date.",
    metaDescription: "Free online tool to subtract a number of days from any date and instantly find the resulting date and day of the week.",
    h1: "Subtract Days Calculator",
    intro: "Subtract a number of days from a starting date to find the resulting date and day of the week.",
    icon: "➖",
    status: "live",
    inputFields: [
      { key: "startDate", label: "Start Date", type: "date" },
      { key: "days", label: "Days to Subtract", type: "number", step: 1, min: 0, placeholder: "e.g. 30" },
    ],
    resultFields: [
      { key: "resultDate", label: "Resulting Date", highlight: true },
      { key: "dayOfWeek", label: "Day of the Week", highlight: true },
    ],
    calculate: (inputs) => {
      const startDate = String(inputs.startDate ?? "");
      const days = Number(inputs.days);
      const output = subtractDays(startDate, days);
      return { ...output };
    },
    explanation: [
      {
        heading: "How subtracting days from a date works",
        paragraphs: [
          "This tool takes your starting date and moves backward by the exact number of days you specify, automatically handling month and year boundaries and leap years, then reports the resulting calendar date and its day of the week.",
        ],
      },
      {
        heading: "Common uses for subtracting days from a date",
        paragraphs: [
          "This is useful for finding a date a certain number of days before an event, calculating when to start a task to meet a deadline, or figuring out a past date, such as '90 days before my due date' or a project's required start date.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I subtract more than 365 days?",
        answer: "Yes, you can subtract any number of days, including spans of multiple years, the calculator handles leap years automatically.",
      },
      {
        question: "What if I need to go forward instead?",
        answer: "Use our Add Days Calculator to move a date forward by a number of days instead.",
      },
    ],
    relatedSlugs: ["add-days-calculator", "date-calculator", "working-days-calculator"],
  },
  {
    slug: "time-duration-calculator",
    category: "date-time",
    title: "Time Duration Calculator",
    shortDescription: "Calculate the exact duration between two dates and times.",
    metaDescription: "Free online time duration calculator to find the exact duration between two dates and times in days, hours and minutes.",
    h1: "Time Duration Calculator",
    intro: "Calculate the exact duration between a start and end date and time, broken down into days, hours and minutes.",
    icon: "⏱️",
    status: "live",
    inputFields: [
      { key: "startDateTime", label: "Start Date and Time", type: "datetime" },
      { key: "endDateTime", label: "End Date and Time", type: "datetime" },
    ],
    resultFields: [
      { key: "days", label: "Days", highlight: true },
      { key: "hours", label: "Hours", highlight: true },
      { key: "minutes", label: "Minutes", highlight: true },
      { key: "totalHours", label: "Total Hours" },
      { key: "totalMinutes", label: "Total Minutes" },
      { key: "totalSeconds", label: "Total Seconds" },
    ],
    calculate: (inputs) => {
      const startDateTime = String(inputs.startDateTime ?? "");
      const endDateTime = String(inputs.endDateTime ?? "");
      const output = calculateTimeDuration(startDateTime, endDateTime);
      return { ...output };
    },
    explanation: [
      {
        heading: "How time duration is calculated",
        paragraphs: [
          "This tool calculates the exact number of milliseconds between your start and end date-time, then converts that into a days, hours and minutes breakdown, along with running totals in hours, minutes and seconds for the full duration.",
        ],
      },
      {
        heading: "Why use date and time together instead of just dates",
        paragraphs: [
          "Unlike a simple date difference calculator, this tool accounts for the specific time of day on both ends, making it accurate for tracking things like elapsed work hours, event durations, or the precise time between two timestamped events, even when they span midnight or multiple days.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the order of start and end matter?",
        answer: "No, the calculator automatically detects which date-time is earlier and calculates the duration correctly regardless of the order you enter them.",
      },
      {
        question: "Can I calculate a duration that spans multiple days?",
        answer: "Yes, the duration can span any length of time, from a few minutes to multiple days, months or years, and will be broken down into days, hours and minutes accordingly.",
      },
    ],
    relatedSlugs: ["date-calculator", "countdown-timer", "working-days-calculator"],
  },
  {
    slug: "week-number-calculator",
    category: "date-time",
    title: "Week Number Calculator",
    shortDescription: "Find the ISO week number for any date.",
    metaDescription: "Free online week number calculator to find the ISO 8601 week number and day of the year for any date.",
    h1: "Week Number Calculator",
    intro: "Find the ISO 8601 week number and day of the year for any date.",
    icon: "🗓️",
    status: "live",
    inputFields: [{ key: "date", label: "Date", type: "date" }],
    resultFields: [
      { key: "weekNumber", label: "ISO Week Number", highlight: true },
      { key: "isoYear", label: "ISO Week Year" },
      { key: "dayOfYear", label: "Day of the Year" },
    ],
    calculate: (inputs) => {
      const date = String(inputs.date ?? "");
      const output = calculateWeekNumber(date);
      return { ...output };
    },
    explanation: [
      {
        heading: "How ISO week numbers are calculated",
        paragraphs: [
          "This calculator uses the ISO 8601 standard, where weeks start on Monday and week 1 of the year is defined as the week containing the year's first Thursday. This means the first few days of January can sometimes belong to the last week of the previous year, and the last few days of December can sometimes belong to week 1 of the following year.",
        ],
      },
      {
        heading: "Why ISO week numbers are useful",
        paragraphs: [
          "ISO week numbers are widely used in business, manufacturing and project planning for consistent weekly reporting, since every ISO week has exactly 7 days and starts on the same weekday (Monday), unlike calendar weeks which can be split unevenly across months.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does the ISO week year sometimes differ from the calendar year?",
        answer: "Near the start or end of a calendar year, a date's ISO week can belong to the adjacent year's week numbering, for example, December 31 might fall in week 1 of the following year, or January 1 might fall in the last week of the previous year.",
      },
      {
        question: "Does the week start on Sunday or Monday?",
        answer: "This calculator follows the ISO 8601 standard, where weeks start on Monday. This differs from some calendars and regions that start the week on Sunday.",
      },
    ],
    relatedSlugs: ["date-calculator", "working-days-calculator", "countdown-timer"],
  },
];

export function getToolBySlug(slug: string) {
  return toolRegistry.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string) {
  return toolRegistry.filter((t) => t.category === category);
}