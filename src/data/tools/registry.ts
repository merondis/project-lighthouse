import { calculateMortgageRefinance } from "@/utils/calculators/mortgage-refinance-calculator";
import { calculateCreditCardInterest } from "@/utils/calculators/credit-card-interest-calculator";
import { calculateDti } from "@/utils/calculators/dti-calculator";
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
import { ToolConfig } from "@/types/tool";
import { calculateProfitMargin } from "@/utils/calculators/profit-margin-calculator";
import { calculateGrossMargin } from "@/utils/calculators/gross-margin-calculator";
import { calculateEbitda } from "@/utils/calculators/ebitda-calculator";
import { calculateInventoryTurnover } from "@/utils/calculators/inventory-turnover-calculator";
import { calculateInventoryDays } from "@/utils/calculators/inventory-days-calculator";
import { calculateWorkingCapital } from "@/utils/calculators/working-capital-calculator";
import { calculateCashFlow } from "@/utils/calculators/cash-flow-calculator";
import { calculateInvoiceDueDate } from "@/utils/calculators/invoice-due-date-calculator";
import { calculateBusinessValuation } from "@/utils/calculators/business-valuation-calculator";
import { calculateCgpa } from "@/utils/calculators/cgpa-calculator";
import { calculateFinalGradeNeeded } from "@/utils/calculators/final-grade-calculator";
import { calculateGradePercentage } from "@/utils/calculators/grade-percentage-calculator";
import { calculateAttendance } from "@/utils/calculators/attendance-calculator";
import { calculateStudyTime } from "@/utils/calculators/study-time-calculator";
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
import { calculateRatio } from "@/utils/calculators/ratio-calculator";
import { calculateLcm } from "@/utils/calculators/lcm-calculator";
import { calculatePrime } from "@/utils/calculators/prime-number-calculator";
import { calculateMeanMedianMode } from "@/utils/calculators/mean-median-mode-calculator";
import { calculateConcrete, ConcreteBagSize } from "@/utils/calculators/concrete-calculator";
import { calculateTiles } from "@/utils/calculators/tile-calculator";
import { calculatePaint } from "@/utils/calculators/paint-calculator";
import { calculateFlooring } from "@/utils/calculators/flooring-calculator";
import { calculateRoofing } from "@/utils/calculators/roofing-calculator";
import { calculateGravel } from "@/utils/calculators/gravel-calculator";
import { calculateSubnet } from "@/utils/calculators/subnet-calculator";
import { calculateCidrRange } from "@/utils/calculators/cidr-range-calculator";
import { convertIpAddress, IpFormat } from "@/utils/calculators/ip-address-converter";
import { calculateBtu, SunExposure } from "@/utils/calculators/btu-calculator";
import {
  calculateMacros,
  Gender as MacroGender,
  ActivityLevel as MacroActivityLevel,
  MacroGoal,
  DietStyle,
} from "@/utils/calculators/macro-calculator";
import { calculateSquareFootage, ShapeType } from "@/utils/calculators/square-footage-calculator";
import { calculateProbability } from "@/utils/calculators/probability-calculator";
import { calculateStatistics } from "@/utils/calculators/statistics-calculator";
import { calculateFutureValue, FvCompoundFrequency } from "@/utils/calculators/future-value-calculator";
import { calculatePresentValue, PvCompoundFrequency } from "@/utils/calculators/present-value-calculator";
import { calculateCagr } from "@/utils/calculators/cagr-calculator";
import { calculateInvestmentReturn } from "@/utils/calculators/investment-return-calculator";
import { calculateApy, ApyCompoundFrequency } from "@/utils/calculators/apy-calculator";
import { calculateRule72, Rule72Mode } from "@/utils/calculators/rule-of-72-calculator";
import { calculateLease } from "@/utils/calculators/lease-calculator";
import { calculateStudentLoan } from "@/utils/calculators/student-loan-calculator";
import { calculate401k } from "@/utils/calculators/401k-calculator";
import { calculateRothIra } from "@/utils/calculators/roth-ira-calculator";
import { calculateFire } from "@/utils/calculators/fire-calculator";
import { calculateInflationAdjustedSalary } from "@/utils/calculators/inflation-adjusted-salary-calculator";
import { calculateSavingsInterest } from "@/utils/calculators/savings-interest-calculator";
import { calculateAnnualIncome, PayFrequency } from "@/utils/calculators/annual-income-calculator";
import { calculateHourlyWage } from "@/utils/calculators/hourly-wage-calculator";
import { calculateCommission } from "@/utils/calculators/commission-calculator";
import { calculateLeanBodyMass, LbmGender } from "@/utils/calculators/lean-body-mass-calculator";
import { calculateBodySurfaceArea } from "@/utils/calculators/body-surface-area-calculator";
import { calculateWaistToHipRatio, WhrGender } from "@/utils/calculators/waist-to-hip-ratio-calculator";
import { calculateWaistToHeightRatio } from "@/utils/calculators/waist-to-height-ratio-calculator";
import { calculateArmyBodyFat, ArmyBfGender } from "@/utils/calculators/army-body-fat-calculator";
import { calculateCaloriesBurned, Activity } from "@/utils/calculators/calories-burned-calculator";
import { calculateTargetHeartRate } from "@/utils/calculators/target-heart-rate-calculator";
import { calculateOneRepMax } from "@/utils/calculators/one-rep-max-calculator";
import { calculateRunningPace } from "@/utils/calculators/running-pace-calculator";
import { calculateWalkingCalories } from "@/utils/calculators/walking-calories-calculator";
import { calculateBac, BacGender } from "@/utils/calculators/bac-calculator";
import { calculatePregnancyWeightGain } from "@/utils/calculators/pregnancy-weight-gain-calculator";
import { calculatePregnancyWeek, PregnancyInputMode } from "@/utils/calculators/pregnancy-week-calculator";
import { calculateDueDateReverse } from "@/utils/calculators/due-date-reverse-calculator";
import { calculateFertilityWindow } from "@/utils/calculators/fertility-window-calculator";
import { calculateGcf } from "@/utils/calculators/gcf-calculator";
import { calculatePrimeFactorization } from "@/utils/calculators/prime-factorization-calculator";
import { calculatePermutation } from "@/utils/calculators/permutation-calculator";
import { calculateCombination } from "@/utils/calculators/combination-calculator";
import { calculateBinomial } from "@/utils/calculators/binomial-calculator";
import { calculateExponent } from "@/utils/calculators/exponent-calculator";
import { calculateLogarithm } from "@/utils/calculators/logarithm-calculator";
import { calculateScientificNotation, ScientificNotationMode } from "@/utils/calculators/scientific-notation-calculator";
import { calculatePercentError } from "@/utils/calculators/percent-error-calculator";
import { calculatePercentageDifference } from "@/utils/calculators/percentage-difference-calculator";
import { calculateAverage } from "@/utils/calculators/average-calculator";
import { calculateMedian } from "@/utils/calculators/median-calculator";
import { calculateMulch } from "@/utils/calculators/mulch-calculator";
import { calculateAsphalt } from "@/utils/calculators/asphalt-calculator";
import { calculateBrick } from "@/utils/calculators/brick-calculator";
import { calculateConcreteBlock } from "@/utils/calculators/concrete-block-calculator";
import { calculateDeck } from "@/utils/calculators/deck-calculator";
import { calculateFence } from "@/utils/calculators/fence-calculator";
import { calculateWallpaper } from "@/utils/calculators/wallpaper-calculator";
import { calculatePaver } from "@/utils/calculators/paver-calculator";
import { calculateDrywall } from "@/utils/calculators/drywall-calculator";
import { calculateSoil, SoilBagSize } from "@/utils/calculators/soil-calculator";
import { calculateTopsoil } from "@/utils/calculators/topsoil-calculator";
import { calculateCubicVolume, DimensionUnit } from "@/utils/calculators/cubic-volume-calculator";
import { calculateCement } from "@/utils/calculators/cement-calculator";
import { calculateSand } from "@/utils/calculators/sand-calculator";
import { calculateGravelVolume, GravelShape, GravelType } from "@/utils/calculators/gravel-volume-calculator";
import { calculateRebar, RebarSize } from "@/utils/calculators/rebar-calculator";
import { calculateBeamLoad, BeamLoadType } from "@/utils/calculators/beam-load-calculator";
import { calculateSteelWeight, SteelShape } from "@/utils/calculators/steel-weight-calculator";
import { calculateLumber } from "@/utils/calculators/lumber-calculator";
import { calculateFuelEconomy, FuelEconomyDistanceUnit, FuelEconomyVolumeUnit } from "@/utils/calculators/fuel-economy-calculator";
import { calculateEvChargingCost } from "@/utils/calculators/ev-charging-cost-calculator";
import { calculateTireSize } from "@/utils/calculators/tire-size-calculator";
import { calculateVehicleDepreciation } from "@/utils/calculators/vehicle-depreciation-calculator";
import { calculateCarLoanAffordability } from "@/utils/calculators/car-loan-affordability-calculator";
import { calculateCharacterCount } from "@/utils/calculators/character-counter";
import { calculateReadingTime } from "@/utils/calculators/reading-time-calculator";
import { generateSlug, SlugSeparator } from "@/utils/calculators/slug-generator";
import { sortTextLines, TextSortOrder } from "@/utils/calculators/text-sorter";
import { alphabetizeList, AlphabetizeDelimiter } from "@/utils/calculators/alphabetizer";
import { removeEmptyLines } from "@/utils/calculators/remove-empty-lines";
import { removeExtraSpaces } from "@/utils/calculators/remove-extra-spaces";
import { reverseText, ReverseTextMode } from "@/utils/calculators/reverse-text";
import { shuffleText, ShuffleTextMode } from "@/utils/calculators/shuffle-text";
import { convertHtmlEntities, HtmlEntityMode } from "@/utils/calculators/html-entity-converter";
import { validateUuid } from "@/utils/calculators/uuid-validator";
import { formatXml, validateXml } from "@/utils/calculators/xml-formatter";
import { convertCsvToJson, convertJsonToCsv } from "@/utils/calculators/csv-json-converter";
import { formatSql } from "@/utils/calculators/sql-formatter";
import { decodeJwt } from "@/utils/calculators/jwt-decoder";
import { calculateHashes } from "@/utils/calculators/hash-generator";
import { generateJwt } from "@/utils/calculators/jwt-generator";
import { generateCron } from "@/utils/calculators/cron-generator";
import { convertTimestamp, TimestampConversionMode } from "@/utils/calculators/unix-timestamp-converter";
import { minifyHtml } from "@/utils/calculators/html-minifier";
import { beautifyHtml } from "@/utils/calculators/html-beautifier";
import { minifyCss } from "@/utils/calculators/css-minifier";
import { beautifyCss } from "@/utils/calculators/css-beautifier";
import { generateMetaTags } from "@/utils/calculators/meta-tag-generator";
import { generateRobotsTxt } from "@/utils/calculators/robots-txt-generator";
import { generateSitemap } from "@/utils/calculators/xml-sitemap-generator";
import { generateOpenGraphTags } from "@/utils/calculators/open-graph-generator";
import { generateTwitterCardTags } from "@/utils/calculators/twitter-card-generator";
import { generateSchemaMarkup, SchemaType } from "@/utils/calculators/schema-markup-generator";
import { generateCanonicalTag } from "@/utils/calculators/canonical-tag-generator";
import { generateHreflangTags } from "@/utils/calculators/hreflang-generator";
import { calculateKeywordDensity, PhraseLength } from "@/utils/calculators/keyword-density-checker";
import { buildUtmUrl } from "@/utils/calculators/utm-url-builder";
import { generateRedirectSnippets } from "@/utils/calculators/url-redirect-generator";
import { optimizeSvg } from "@/utils/calculators/svg-optimizer";

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
    slug: "amortization-schedule-calculator",
    category: "finance",
    title: "Amortization Schedule Calculator",
    shortDescription: "Generate a full year-by-year or month-by-month loan amortization schedule.",
    metaDescription: "Free online amortization schedule calculator to generate a full year-by-year or month-by-month loan payment breakdown for any loan type.",
    h1: "Amortization Schedule Calculator",
    intro: "Generate a complete amortization schedule for any loan, showing exactly how each payment splits between principal and interest over time.",
    icon: "📋",
    status: "live",
    widgetType: "amortization",
    amortizationTenureUnit: "months",
    explanation: [
      {
        heading: "What an amortization schedule shows",
        paragraphs: [
          "An amortization schedule breaks down every single payment over the life of a loan into two parts, interest and principal, showing exactly how the balance decreases over time. Early payments are weighted more toward interest, while later payments shift increasingly toward principal, even though the total payment amount stays fixed.",
        ],
      },
      {
        heading: "How this differs from our loan-specific calculators",
        paragraphs: [
          "This tool works for any type of amortizing loan, personal loans, business loans, or any fixed-rate installment loan, not just mortgages or car loans specifically. If you're working with a home loan or auto loan specifically, our Mortgage Calculator and Auto Loan Calculator include the same schedule with terminology tailored to that loan type.",
        ],
      },
    ],
    faqs: [
      {
        question: "What information do I need to generate a schedule?",
        answer: "You need the loan amount (principal), the annual interest rate, and the loan term in months, the same three inputs used for any standard amortizing loan calculation.",
      },
      {
        question: "Can I see monthly detail for a long-term loan?",
        answer: "Yes, toggle between the yearly summary view and the full monthly breakdown using the button above the schedule table.",
      },
    ],
    relatedSlugs: ["emi-calculator", "mortgage-calculator", "loan-calculator"],
  },
  {
    slug: "mortgage-refinance-calculator",
    category: "finance",
    title: "Mortgage Refinance Calculator",
    shortDescription: "Compare your current mortgage against a refinance offer to see if it's worth it.",
    metaDescription: "Free online mortgage refinance calculator to compare your current loan against a new offer, including break-even point and total savings.",
    h1: "Mortgage Refinance Calculator",
    intro: "Compare your current mortgage against a new refinance offer to see your monthly savings, break-even point, and total interest savings.",
    icon: "🔁",
    status: "live",
    inputFields: [
      { key: "remainingBalance", label: "Remaining Loan Balance", type: "number", step: 0.01, placeholder: "e.g. 250000" },
      { key: "currentRate", label: "Current Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 7.5" },
      { key: "remainingMonths", label: "Remaining Months on Current Loan", type: "number", step: 1, placeholder: "e.g. 300" },
      { key: "newRate", label: "New Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 6.2" },
      { key: "newTermMonths", label: "New Loan Term (Months)", type: "number", step: 1, placeholder: "e.g. 360" },
      { key: "closingCosts", label: "Refinance Closing Costs", type: "number", step: 0.01, placeholder: "e.g. 4000" },
    ],
    resultFields: [
      { key: "monthlySavings", label: "Monthly Savings", highlight: true },
      { key: "breakEvenMonths", label: "Break-Even Point (Months)", highlight: true },
      { key: "currentMonthlyPayment", label: "Current Monthly Payment" },
      { key: "newMonthlyPayment", label: "New Monthly Payment" },
      { key: "totalInterestSavings", label: "Total Savings (After Closing Costs)" },
    ],
    calculate: (inputs) => {
      const remainingBalance = Number(inputs.remainingBalance);
      const currentRate = Number(inputs.currentRate);
      const remainingMonths = Number(inputs.remainingMonths);
      const newRate = Number(inputs.newRate);
      const newTermMonths = Number(inputs.newTermMonths);
      const closingCosts = Number(inputs.closingCosts);
      const output = calculateMortgageRefinance(
        remainingBalance,
        currentRate,
        remainingMonths,
        newRate,
        newTermMonths,
        closingCosts
      );
      return { ...output };
    },
    explanation: [
      {
        heading: "How the break-even point is calculated",
        paragraphs: [
          "The break-even point is calculated as: Closing Costs ÷ Monthly Savings, giving the number of months it takes for your accumulated monthly savings to cover the cost of refinancing. If you plan to stay in the home shorter than this break-even period, refinancing may not be worthwhile despite a lower rate.",
        ],
      },
      {
        heading: "Why total savings compares more than just the interest rate",
        paragraphs: [
          "A lower interest rate doesn't automatically mean refinancing saves money overall, extending your loan term resets the amortization clock, potentially increasing total interest paid even at a lower rate. This calculator compares total remaining cost of your current loan against the new loan's total cost plus closing costs, giving a fuller picture than the rate alone.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my monthly savings are negative?",
        answer: "A negative monthly savings means the new loan actually costs more per month than your current one, refinancing likely isn't beneficial in that scenario despite a lower rate, often due to a shorter new term.",
      },
      {
        question: "Does this include appraisal or other refinance fees?",
        answer: "Enter your total estimated closing costs, including any appraisal, origination, or other fees your lender quotes, as a single combined number in the closing costs field.",
      },
    ],
    relatedSlugs: ["mortgage-calculator", "emi-calculator"],
  },
  {
    slug: "credit-card-interest-calculator",
    category: "finance",
    title: "Credit Card Interest Calculator",
    shortDescription: "Calculate how much interest a credit card charges in one billing cycle.",
    metaDescription: "Free online credit card interest calculator to calculate the interest charged on a credit card balance for one billing cycle using the average daily balance method.",
    h1: "Credit Card Interest Calculator",
    intro: "Calculate the actual interest charge for one billing cycle based on your average daily balance and APR, the same method most credit card issuers use.",
    icon: "📊",
    status: "live",
    inputFields: [
      { key: "averageDailyBalance", label: "Average Daily Balance", type: "number", step: 0.01, placeholder: "e.g. 2000" },
      { key: "apr", label: "Annual Percentage Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 22" },
      { key: "billingDays", label: "Days in Billing Cycle", type: "number", step: 1, defaultValue: 30 },
    ],
    resultFields: [
      { key: "monthlyInterestCharge", label: "Interest Charged This Cycle", highlight: true },
      { key: "dailyPeriodicRate", label: "Daily Periodic Rate" },
      { key: "annualInterestIfUnpaid", label: "Projected Annual Interest" },
    ],
    calculate: (inputs) => {
      const averageDailyBalance = Number(inputs.averageDailyBalance);
      const apr = Number(inputs.apr);
      const billingDays = Number(inputs.billingDays);
      const output = calculateCreditCardInterest(averageDailyBalance, apr, billingDays);
      return { ...output };
    },
    explanation: [
      {
        heading: "How credit card interest is actually calculated",
        paragraphs: [
          "Most credit card issuers use the average daily balance method: they track your balance every day of the billing cycle, average it, then apply a daily periodic rate (your APR divided by 365) multiplied by the number of days in the cycle. This is different from a simple one-time monthly interest calculation.",
        ],
      },
      {
        heading: "This tool vs our Credit Card Payoff Calculator",
        paragraphs: [
          "This calculator answers 'how much interest does one billing cycle actually charge' using the average daily balance method. If you instead want to know how long it will take to pay off a balance completely and the total interest over that whole payoff period, use our Credit Card Payoff Calculator instead.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is average daily balance?",
        answer: "It's the average of your account balance calculated at the end of each day during the billing cycle, accounting for any payments or purchases made during that period. Your statement typically shows this figure directly.",
      },
      {
        question: "Why is the projected annual interest different from 12 times the monthly charge?",
        answer: "The projected annual figure assumes the same average daily balance stays constant for a full year, in reality, your balance and interest charges will vary from cycle to cycle based on payments and new purchases.",
      },
    ],
    relatedSlugs: ["credit-card-payoff-calculator", "simple-interest-calculator"],
  },
  {
    slug: "dti-calculator",
    category: "finance",
    title: "Debt-to-Income (DTI) Calculator",
    shortDescription: "Calculate your debt-to-income ratio for loan and mortgage qualification.",
    metaDescription: "Free online debt-to-income (DTI) calculator to calculate your DTI ratio, commonly used by lenders for loan and mortgage qualification.",
    h1: "Debt-to-Income (DTI) Calculator",
    intro: "Calculate your debt-to-income ratio, a key figure lenders use to assess loan and mortgage eligibility.",
    icon: "⚖️",
    status: "live",
    inputFields: [
      { key: "monthlyDebtPayments", label: "Total Monthly Debt Payments", type: "number", step: 0.01, placeholder: "e.g. 1500" },
      { key: "grossMonthlyIncome", label: "Gross Monthly Income", type: "number", step: 0.01, placeholder: "e.g. 5000" },
    ],
    resultFields: [
      { key: "dtiRatio", label: "DTI Ratio", unit: "%", highlight: true },
      { key: "category", label: "Category", highlight: true },
    ],
    calculate: (inputs) => {
      const monthlyDebtPayments = Number(inputs.monthlyDebtPayments);
      const grossMonthlyIncome = Number(inputs.grossMonthlyIncome);
      const output = calculateDti(monthlyDebtPayments, grossMonthlyIncome);
      return { ...output };
    },
    explanation: [
      {
        heading: "How DTI ratio is calculated",
        paragraphs: [
          "The DTI formula is: DTI % = (Total Monthly Debt Payments ÷ Gross Monthly Income) × 100. This includes recurring debt obligations like rent or mortgage, car loans, student loans, and minimum credit card payments, divided by your income before taxes and deductions.",
        ],
      },
      {
        heading: "Why lenders care about DTI ratio",
        paragraphs: [
          "Lenders use DTI as a key indicator of how much additional debt you can reasonably manage. Most conventional mortgage lenders look for a DTI at or below 43%, though requirements vary by lender and loan type, a lower DTI generally improves loan approval odds and terms.",
        ],
      },
    ],
    faqs: [
      {
        question: "What counts as a monthly debt payment?",
        answer: "Include rent or mortgage payments, car loans, student loans, minimum credit card payments, and any other recurring debt obligations. Don't include expenses like groceries, utilities, or insurance.",
      },
      {
        question: "Should I use gross or net income?",
        answer: "Use gross income (before taxes and deductions), which is the standard measure lenders use for DTI calculations.",
      },
      {
        question: "What's considered a good DTI ratio?",
        answer: "Generally, 36% or below is considered good, with many mortgage lenders capping approval around 43%. Ratios above that may make loan qualification more difficult.",
      },
    ],
    relatedSlugs: ["mortgage-calculator", "credit-card-payoff-calculator", "net-worth-calculator"],
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
    category: "math",
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
    category: "math",
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
    category: "math",
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
    category: "math",
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
    category: "math",
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
    shortDescription: "Calculate your BMI, BMI Prime, healthy weight range and Ponderal Index.",
    metaDescription:
      "Free online BMI calculator for adults. Calculate your Body Mass Index, BMI Prime, healthy weight range and Ponderal Index using US, metric or custom units.",
    h1: "BMI Calculator",
    intro:
      "Calculate your Body Mass Index (BMI), BMI Prime, healthy weight range and Ponderal Index for adults, using US, metric or custom units.",
    icon: "⚖️",
    status: "live",
    featured: true,
    widgetType: "bmi",
    explanation: [
      {
        heading: "What is BMI?",
        paragraphs: [
          "Body Mass Index (BMI) is a simple screening measure that estimates whether your weight is in a healthy range relative to your height. It's calculated as weight divided by height squared, and is widely used by healthcare providers, researchers and public health organizations as a quick, low-cost starting point for assessing weight status across large populations.",
          "BMI doesn't measure body fat directly, and this calculator is intended for adults aged 18 and over, it doesn't use the separate age- and sex-specific percentile charts used for children and teenagers.",
        ],
      },
      {
        heading: "BMI classification table for adults",
        paragraphs: [
          "A BMI below 16 is classified as Severe Thinness; 16 to 17 as Moderate Thinness; 17 to 18.5 as Mild Thinness; 18.5 to 25 as Normal weight; 25 to 30 as Overweight; 30 to 35 as Obese Class I; 35 to 40 as Obese Class II; and 40 or above as Obese Class III.",
          "These thresholds are the standard adult BMI classification used internationally, extending the commonly cited 'underweight / normal / overweight / obese' categories into finer bands that better distinguish mild from severe cases at both ends of the scale.",
        ],
      },
      {
        heading: "Risks of being overweight",
        paragraphs: [
          "Carrying excess weight, particularly over a sustained period, is associated with an increased risk of several health conditions.",
          "Increased risk of type 2 diabetes, as excess body fat contributes to insulin resistance.",
          "Higher risk of high blood pressure and cardiovascular disease, including heart attack and stroke.",
          "Greater strain on joints, particularly the knees and hips, which can contribute to osteoarthritis.",
          "Increased risk of certain cancers, including breast, colon and endometrial cancer.",
          "Higher likelihood of sleep apnea and other breathing difficulties during sleep.",
        ],
      },
      {
        heading: "Risks of being underweight",
        paragraphs: [
          "Having too little body weight relative to height carries its own set of health risks, distinct from those of excess weight.",
          "Weakened immune function, making infections more difficult to fight off.",
          "Nutrient deficiencies, since low body weight can reflect inadequate intake of essential vitamins and minerals.",
          "Reduced bone density and higher fracture risk, particularly in older adults.",
          "Fertility issues, as very low body fat can disrupt hormone levels involved in reproduction.",
          "Increased risk of anemia and fatigue from insufficient caloric or nutritional intake.",
        ],
      },
      {
        heading: "Limitations of BMI",
        paragraphs: [
          "BMI is a screening tool, not a diagnostic one, it doesn't distinguish between fat mass and lean muscle mass. A muscular athlete can have a high BMI without carrying excess body fat, while someone with a 'normal' BMI could still have a high body fat percentage and low muscle mass, a pattern sometimes called 'normal weight obesity.'",
          "BMI also doesn't account for where fat is distributed on the body, even though abdominal fat carries different health risks than fat carried elsewhere. It doesn't factor in bone density, overall body frame, or ethnicity-related differences in body composition that some research suggests affect the health risks associated with a given BMI.",
          "For adults, this calculator applies a single set of thresholds. It does not include the CDC's separate growth-chart-based percentile method used to assess BMI in children and adolescents, since body composition changes substantially during growth and requires age- and sex-specific reference curves rather than fixed adult thresholds.",
        ],
      },
      {
        heading: "BMI formula (USC and SI units, with a worked example)",
        paragraphs: [
          "In SI (metric) units: BMI = weight (kg) ÷ height (m)². For example, someone weighing 70 kg at a height of 175 cm (1.75 m) has a BMI of 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 ≈ 22.9, which falls in the Normal category.",
          "In USC (imperial) units: BMI = 703 × weight (lb) ÷ height (in)². The constant 703 converts pounds and inches into the equivalent metric result without you needing to convert units yourself. For example, someone weighing 154 lb at a height of 68.9 in gets 703 × 154 ÷ (68.9 × 68.9) = 108,262 ÷ 4,747.2 ≈ 22.8, matching the metric result above (154 lb ≈ 70 kg, 68.9 in ≈ 175 cm) within normal rounding.",
        ],
      },
      {
        heading: "BMI Prime: what it is and how it's classified",
        paragraphs: [
          "BMI Prime is BMI divided by 25 (the upper bound of the Normal BMI range), giving a simple ratio to the upper healthy-weight threshold. A BMI Prime of exactly 1.0 means your BMI is exactly 25; values below 1.0 mean your BMI is below 25, and values above 1.0 mean it's above 25.",
          "BMI Prime uses its own classification: below 0.64 is Severe Thinness, 0.64 to 0.68 is Moderate Thinness, 0.68 to 0.74 is Mild Thinness, 0.74 to 1.0 is Normal, 1.0 to 1.2 is Overweight, 1.2 to 1.4 is Obese Class I, 1.4 to 1.6 is Obese Class II, and above 1.6 is Obese Class III, mirroring the standard BMI bands rescaled around 25.",
        ],
      },
      {
        heading: "Ponderal Index: an alternative to BMI",
        paragraphs: [
          "The Ponderal Index is a related measure that divides weight by height cubed rather than height squared: PI = mass ÷ height³. In SI units, mass is in kilograms and height in meters, giving a result in kg/m³, typically in the range of about 11 to 15 for most adults.",
          "Because it divides by height cubed instead of squared, Ponderal Index is considered less sensitive to a person's height than BMI is, some research suggests it's a more consistent measure across people of very different heights. The same underlying formula can be computed with weight in pounds and height in inches, using the appropriate unit conversion, and produces the same physical result once expressed in consistent units.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a healthy BMI range?",
        answer:
          "A BMI between 18.5 and 25 is generally classified as Normal weight for most adults. This calculator also breaks down BMI further into eight bands, from Severe Thinness to Obese Class III, for more detail than the four-category version.",
      },
      {
        question: "Is BMI accurate for everyone?",
        answer:
          "BMI is a general screening tool and does not account for muscle mass, bone density, fat distribution, or body composition, so it may not be fully accurate for athletes, older adults, or people with an unusually muscular or lean build. It's a useful starting point, not a diagnosis.",
      },
      {
        question: "What is BMI Prime?",
        answer:
          "BMI Prime is your BMI divided by 25, expressing how your BMI compares to the upper bound of the Normal range as a simple ratio. A BMI Prime under 1.0 means your BMI is below 25; over 1.0 means it's above 25.",
      },
      {
        question: "What is the Ponderal Index and how is it different from BMI?",
        answer:
          "The Ponderal Index divides weight by height cubed instead of height squared (as BMI does). This makes it less sensitive to height differences between people, and it's sometimes used as an alternative or complement to BMI in research settings.",
      },
      {
        question: "Does this calculator work for children or teenagers?",
        answer:
          "No, this calculator is designed for adults aged 18 and over. Children and adolescents require a different, age- and sex-specific percentile-based method (such as the CDC growth charts), which isn't included here.",
      },
      {
        question: "Why does the calculator ask for my age and gender?",
        answer:
          "Age and gender don't change how BMI itself is calculated, they're used only to show general, non-diagnostic context notes, for example, that older adults and women tend to carry more body fat than younger adults or men at the same BMI.",
      },
      {
        question: "How is the healthy weight range calculated?",
        answer:
          "The healthy weight range is the span of weights that would produce a BMI between 18.5 and 25 at your entered height, calculated by solving the BMI formula for weight at each of those two BMI values.",
      },
      {
        question: "Can I enter my height and weight in units other than metric or US standard?",
        answer:
          "Yes, select 'Other' in the unit toggle to choose your height unit (centimeters, meters, inches or feet) and weight unit (kilograms, pounds or stone) independently.",
      },
    ],
    relatedSlugs: ["calorie-goal-calculator", "body-fat-calculator", "bmr-calculator", "ideal-weight-calculator"],
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
      {
        question: "I need my GPA across multiple semesters, not just one. Where do I do that?",
        answer: "Use the CGPA Calculator instead. It combines each semester's GPA and credit hours into one cumulative figure, rather than calculating a single semester from letter grades.",
      },
    ],
    relatedSlugs: ["percentage-calculator", "cgpa-calculator"],
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
  {
    slug: "ratio-calculator",
    category: "math",
    title: "Ratio Calculator",
    shortDescription: "Simplify a ratio to its lowest terms and see its decimal equivalent.",
    metaDescription: "Free online ratio calculator to simplify a ratio to its lowest terms and convert it to a decimal or percentage.",
    h1: "Ratio Calculator",
    intro: "Simplify a ratio to its lowest whole-number terms, and see its equivalent decimal and percentage.",
    icon: "⚖️",
    status: "live",
    inputFields: [
      { key: "valueA", label: "First Value (A)", type: "number", step: 0.01, placeholder: "e.g. 8" },
      { key: "valueB", label: "Second Value (B)", type: "number", step: 0.01, placeholder: "e.g. 12" },
    ],
    resultFields: [
      { key: "simplifiedRatio", label: "Simplified Ratio", highlight: true },
      { key: "decimalValue", label: "Decimal Equivalent (A ÷ B)" },
      { key: "percentage", label: "Percentage (A as % of B)", unit: "%" },
    ],
    calculate: (inputs) => {
      const valueA = Number(inputs.valueA);
      const valueB = Number(inputs.valueB);
      const output = calculateRatio(valueA, valueB);
      return { ...output };
    },
    explanation: [
      {
        heading: "How a ratio is simplified",
        paragraphs: [
          "To simplify a ratio, this calculator finds the greatest common divisor (GCD) of the two values and divides both by it, reducing the ratio to its lowest whole-number terms. For example, a ratio of 8:12 has a GCD of 4, simplifying to 2:3.",
          "If either value includes decimals, both values are first scaled up to whole numbers (for example, 1.5:2 becomes 15:20) before finding the GCD, so the simplified ratio is still expressed in whole numbers.",
        ],
      },
      {
        heading: "Ratio vs decimal vs percentage",
        paragraphs: [
          "A ratio like 2:3 can also be expressed as a decimal (2 ÷ 3 ≈ 0.667) or a percentage (about 66.7%), showing what the first value represents relative to the second. These different formats are useful depending on context, ratios are common in recipes and mixing proportions, while decimals and percentages are often more useful for comparisons.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I enter decimal values?",
        answer: "Yes, this calculator accepts decimal values for either number and will scale them to whole numbers before simplifying the ratio.",
      },
      {
        question: "What does it mean if the ratio can't be simplified further?",
        answer: "If the two values share no common factor other than 1 (they're coprime), the ratio is already in its simplest form, for example 5:7.",
      },
    ],
    relatedSlugs: ["fraction-calculator", "percentage-calculator", "lcm-calculator"],
  },
  {
    slug: "lcm-calculator",
    category: "math",
    title: "LCM Calculator",
    shortDescription: "Find the least common multiple (and greatest common divisor) of a list of numbers.",
    metaDescription: "Free online LCM calculator to find the least common multiple and greatest common divisor (GCD) of two or more numbers.",
    h1: "LCM Calculator",
    intro: "Find the least common multiple (LCM) and greatest common divisor (GCD) of two or more whole numbers.",
    icon: "🔢",
    status: "live",
    inputFields: [
      { key: "numbers", label: "Numbers (comma or space separated)", type: "text", placeholder: "e.g. 4, 6, 8" },
    ],
    resultFields: [
      { key: "lcm", label: "Least Common Multiple (LCM)", highlight: true },
      { key: "gcd", label: "Greatest Common Divisor (GCD)" },
      { key: "count", label: "Numbers Entered" },
    ],
    calculate: (inputs) => {
      const numbers = String(inputs.numbers ?? "");
      const output = calculateLcm(numbers);
      return { ...output };
    },
    explanation: [
      {
        heading: "How LCM is calculated",
        paragraphs: [
          "The least common multiple of a set of numbers is the smallest positive number that all of them divide into evenly. This calculator finds it using the relationship LCM(a, b) = |a × b| ÷ GCD(a, b), applying this pairwise across all the numbers you enter.",
          "For example, the LCM of 4, 6 and 8 is 24, the smallest number that 4, 6 and 8 all divide into without a remainder.",
        ],
      },
      {
        heading: "How GCD is calculated",
        paragraphs: [
          "The greatest common divisor (also called GCF, greatest common factor) is the largest number that divides evenly into all the numbers entered. This calculator finds it using the Euclidean algorithm, repeatedly dividing and taking remainders until the remainder is zero.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many numbers can I enter?",
        answer: "You can enter two or more whole numbers, separated by commas or spaces, the calculator finds the LCM and GCD across all of them at once.",
      },
      {
        question: "What's the difference between LCM and GCD?",
        answer: "LCM is the smallest number that all your numbers divide into evenly, useful for tasks like finding a common denominator. GCD is the largest number that divides evenly into all your numbers, useful for simplifying fractions or ratios.",
      },
    ],
    relatedSlugs: ["fraction-calculator", "ratio-calculator", "prime-number-calculator"],
  },
  {
    slug: "prime-number-calculator",
    category: "math",
    title: "Prime Number Calculator",
    shortDescription: "Check if a number is prime and find its prime factorization.",
    metaDescription: "Free online prime number calculator to check if a number is prime, find its prime factors, and see the nearest primes.",
    h1: "Prime Number Calculator",
    intro: "Check whether a number is prime, see its prime factorization, and find the nearest prime numbers before and after it.",
    icon: "🔟",
    status: "live",
    inputFields: [
      { key: "number", label: "Number", type: "number", step: 1, min: 1, placeholder: "e.g. 97" },
    ],
    resultFields: [
      { key: "isPrime", label: "Is Prime?", highlight: true },
      { key: "primeFactors", label: "Prime Factorization" },
      { key: "nextPrime", label: "Next Prime Number" },
      { key: "previousPrime", label: "Previous Prime Number" },
    ],
    calculate: (inputs) => {
      const number = Number(inputs.number);
      const output = calculatePrime(number);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this checks whether a number is prime",
        paragraphs: [
          "A prime number is a whole number greater than 1 with no divisors other than 1 and itself. This calculator checks primality by trial division, testing whether any number up to the square root of your input divides evenly into it. If none do, the number is prime.",
        ],
      },
      {
        heading: "How prime factorization works",
        paragraphs: [
          "Every whole number greater than 1 can be broken down into a unique product of prime numbers, called its prime factorization. This calculator repeatedly divides your number by the smallest possible prime factor until only 1 remains, listing each prime factor found along the way.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 1 a prime number?",
        answer: "No, by definition a prime number must have exactly two distinct positive divisors: 1 and itself. The number 1 has only one divisor, so it's neither prime nor composite.",
      },
      {
        question: "What's the largest number this calculator can check?",
        answer: "This calculator supports positive whole numbers up to 100,000,000. Very large numbers would take too long to check using this method in a browser.",
      },
    ],
    relatedSlugs: ["lcm-calculator", "quadratic-solver", "fraction-calculator"],
  },
  {
    slug: "mean-median-mode-calculator",
    category: "math",
    title: "Mean, Median & Mode Calculator",
    shortDescription: "Calculate the mean, median, mode and range of a data set.",
    metaDescription: "Free online mean, median and mode calculator to find the average, middle value, most frequent value and range of a data set.",
    h1: "Mean, Median & Mode Calculator",
    intro: "Calculate the mean, median, mode and range of a set of numbers by entering values separated by commas or spaces.",
    icon: "📈",
    status: "live",
    inputFields: [
      { key: "numbers", label: "Numbers (comma or space separated)", type: "text", placeholder: "e.g. 4, 8, 6, 8, 15, 23" },
    ],
    resultFields: [
      { key: "mean", label: "Mean (Average)", highlight: true },
      { key: "median", label: "Median", highlight: true },
      { key: "mode", label: "Mode", highlight: true },
      { key: "range", label: "Range" },
      { key: "count", label: "Count" },
    ],
    calculate: (inputs) => {
      const numbers = String(inputs.numbers ?? "");
      const output = calculateMeanMedianMode(numbers);
      return { ...output };
    },
    explanation: [
      {
        heading: "How mean, median and mode are calculated",
        paragraphs: [
          "The mean is the sum of all values divided by how many there are, the familiar arithmetic average. The median is the middle value when the numbers are sorted in order (or the average of the two middle values if there's an even count), which isn't skewed by extreme outliers the way the mean can be. The mode is the value or values that appear most frequently in the data set.",
        ],
      },
      {
        heading: "When to use mean vs median",
        paragraphs: [
          "The mean is useful for evenly distributed data, but a few extreme values can pull it away from what feels like a 'typical' value, for example, average household income is often much higher than the median due to a small number of very high earners. The median better represents a typical value in data sets with outliers or skewed distributions.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if there's more than one mode?",
        answer: "If two or more values tie for the highest frequency, this calculator lists all of them. If every value appears exactly once, it reports that there's no mode.",
      },
      {
        question: "How do I enter my numbers?",
        answer: "Enter numbers separated by commas, spaces, or both, for example '4, 8, 6, 8, 15, 23' or '4 8 6 8 15 23' both work.",
      },
    ],
    relatedSlugs: ["standard-deviation-calculator", "percentage-calculator"],
  },
  {
    slug: "concrete-calculator",
    category: "construction",
    title: "Concrete Calculator",
    shortDescription: "Estimate the cubic yards and bags of concrete needed for a slab.",
    metaDescription: "Free online concrete calculator to estimate cubic yards, cubic feet and the number of bags of concrete needed for a slab or footing.",
    h1: "Concrete Calculator",
    intro: "Estimate how much concrete you need for a slab, footing or pad based on its length, width and thickness.",
    icon: "🧱",
    status: "live",
    featured: true,
    inputFields: [
      { key: "lengthFt", label: "Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "widthFt", label: "Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "thicknessIn", label: "Thickness (inches)", type: "number", step: 0.5, placeholder: "e.g. 4" },
      {
        key: "bagSize",
        label: "Bag Size",
        type: "select",
        options: [
          { label: "40 lb bag", value: "40" },
          { label: "60 lb bag", value: "60" },
          { label: "80 lb bag", value: "80" },
        ],
      },
    ],
    resultFields: [
      { key: "cubicYards", label: "Cubic Yards Needed", highlight: true },
      { key: "bagsNeeded", label: "Bags Needed", highlight: true },
      { key: "cubicFeet", label: "Cubic Feet" },
    ],
    calculate: (inputs) => {
      const lengthFt = Number(inputs.lengthFt);
      const widthFt = Number(inputs.widthFt);
      const thicknessIn = Number(inputs.thicknessIn);
      const bagSize = String(inputs.bagSize) as ConcreteBagSize;
      const output = calculateConcrete(lengthFt, widthFt, thicknessIn, bagSize);
      return { ...output };
    },
    explanation: [
      {
        heading: "How concrete volume is calculated",
        paragraphs: [
          "This calculator multiplies length × width × thickness to find the volume of concrete needed in cubic feet, then converts that to cubic yards (dividing by 27) since ready-mix concrete is typically ordered by the cubic yard for larger pours.",
          "For bagged concrete, it uses the standard published yield for premixed bags: a 40 lb bag yields about 0.30 cubic feet, a 60 lb bag about 0.45 cubic feet, and an 80 lb bag about 0.60 cubic feet, then divides your total volume by the bag's yield and rounds up to a whole number of bags.",
        ],
      },
      {
        heading: "Should I order ready-mix or use bags?",
        paragraphs: [
          "For small projects like fence posts or a small pad, bagged concrete mixed on-site is usually more practical. For larger pours (roughly a cubic yard or more), ready-mix concrete delivered by truck is typically more cost-effective and easier to place in one continuous pour.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I add extra for waste?",
        answer: "This calculator gives the exact theoretical volume. Many contractors add 5-10% extra to account for spillage, uneven subgrade, and over-excavation, consider rounding up your final order.",
      },
      {
        question: "Does this account for rebar or wire mesh?",
        answer: "No, this calculator estimates concrete volume only. Reinforcement like rebar or wire mesh doesn't meaningfully change the concrete volume needed and should be planned separately.",
      },
    ],
    relatedSlugs: ["gravel-calculator", "flooring-calculator", "roofing-calculator"],
  },
  {
    slug: "tile-calculator",
    category: "construction",
    title: "Tile Calculator",
    shortDescription: "Calculate how many tiles you need for a floor or wall.",
    metaDescription: "Free online tile calculator to estimate how many tiles you need for a room, including an allowance for cuts and waste.",
    h1: "Tile Calculator",
    intro: "Calculate how many tiles you need to cover a room, based on the room size, tile size and a waste allowance for cuts.",
    icon: "🔲",
    status: "live",
    inputFields: [
      { key: "roomLengthFt", label: "Room Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 12" },
      { key: "roomWidthFt", label: "Room Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "tileLengthIn", label: "Tile Length (inches)", type: "number", step: 0.5, placeholder: "e.g. 12" },
      { key: "tileWidthIn", label: "Tile Width (inches)", type: "number", step: 0.5, placeholder: "e.g. 12" },
      { key: "wastePercent", label: "Waste Allowance (%)", type: "number", step: 1, defaultValue: 10 },
    ],
    resultFields: [
      { key: "tilesNeeded", label: "Tiles Needed", highlight: true },
      { key: "roomArea", label: "Room Area", unit: "sq ft" },
      { key: "totalAreaWithWaste", label: "Area Including Waste", unit: "sq ft" },
    ],
    calculate: (inputs) => {
      const roomLengthFt = Number(inputs.roomLengthFt);
      const roomWidthFt = Number(inputs.roomWidthFt);
      const tileLengthIn = Number(inputs.tileLengthIn);
      const tileWidthIn = Number(inputs.tileWidthIn);
      const wastePercent = Number(inputs.wastePercent);
      const output = calculateTiles(roomLengthFt, roomWidthFt, tileLengthIn, tileWidthIn, wastePercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How the number of tiles is calculated",
        paragraphs: [
          "This calculator divides your room's area by a single tile's area to find the number of tiles needed to cover it, then adds your chosen waste percentage on top to account for cuts, breakage and pattern matching, before rounding up to a whole number of tiles.",
        ],
      },
      {
        heading: "How much waste allowance should I use?",
        paragraphs: [
          "10% is a common default for straight tile layouts. Diagonal layouts, rooms with lots of corners or fixtures, or large-format tiles that are harder to cut efficiently often warrant a higher allowance, sometimes 15-20%.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this account for grout lines?",
        answer: "No, this calculator uses the tile's stated size and doesn't separately account for grout line width, which has only a small effect on the total tile count for most standard grout widths.",
      },
      {
        question: "Should I buy exactly the amount this calculator suggests?",
        answer: "It's a good idea to round up to the nearest full box, and consider keeping a few extra tiles on hand for future repairs, since matching a discontinued tile later can be difficult.",
      },
    ],
    relatedSlugs: ["flooring-calculator", "paint-calculator", "concrete-calculator"],
  },
  {
    slug: "paint-calculator",
    category: "construction",
    title: "Paint Calculator",
    shortDescription: "Estimate how many gallons of paint you need for a room.",
    metaDescription: "Free online paint calculator to estimate how many gallons of paint you need for a room based on wall size, coats and coverage.",
    h1: "Paint Calculator",
    intro: "Estimate how many gallons of paint you need to cover a room's walls, based on room size, doors, windows and number of coats.",
    icon: "🎨",
    status: "live",
    inputFields: [
      { key: "roomLengthFt", label: "Room Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 12" },
      { key: "roomWidthFt", label: "Room Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "wallHeightFt", label: "Wall Height (ft)", type: "number", step: 0.1, placeholder: "e.g. 8" },
      { key: "numDoors", label: "Number of Doors", type: "number", step: 1, defaultValue: 1 },
      { key: "numWindows", label: "Number of Windows", type: "number", step: 1, defaultValue: 1 },
      { key: "coats", label: "Number of Coats", type: "number", step: 1, defaultValue: 2 },
      { key: "coveragePerGallon", label: "Coverage per Gallon (sq ft)", type: "number", step: 10, defaultValue: 350 },
    ],
    resultFields: [
      { key: "gallonsNeeded", label: "Gallons Needed", highlight: true },
      { key: "netWallArea", label: "Wall Area (excl. doors/windows)", unit: "sq ft" },
      { key: "totalPaintArea", label: "Total Area to Paint (all coats)", unit: "sq ft" },
    ],
    calculate: (inputs) => {
      const roomLengthFt = Number(inputs.roomLengthFt);
      const roomWidthFt = Number(inputs.roomWidthFt);
      const wallHeightFt = Number(inputs.wallHeightFt);
      const numDoors = Number(inputs.numDoors);
      const numWindows = Number(inputs.numWindows);
      const coats = Number(inputs.coats);
      const coveragePerGallon = Number(inputs.coveragePerGallon);
      const output = calculatePaint(roomLengthFt, roomWidthFt, wallHeightFt, numDoors, numWindows, coats, coveragePerGallon);
      return { ...output };
    },
    explanation: [
      {
        heading: "How paint quantity is calculated",
        paragraphs: [
          "This calculator finds the room's wall area by multiplying the perimeter (2 × (length + width)) by the wall height, then subtracts a standard estimated area for each door (about 21 sq ft) and window (about 15 sq ft) you specify. That net area is multiplied by your number of coats, then divided by your paint's coverage rate per gallon and rounded up to a whole gallon.",
        ],
      },
      {
        heading: "Why coverage per gallon varies",
        paragraphs: [
          "Most paint covers around 350-400 sq ft per gallon on a smooth, primed surface, but this varies by paint brand, sheen, and the porosity or texture of your walls. Check your specific paint can's label for its stated coverage rate for the most accurate estimate.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I paint the ceiling too?",
        answer: "No, this calculator estimates wall paint only. Ceilings are typically painted with a separate ceiling paint and would need to be calculated separately using the room's floor area.",
      },
      {
        question: "How many coats do I need?",
        answer: "Two coats is standard for most new paint jobs. A single coat may work for a minor touch-up in a similar color, while three coats might be needed for a light color covering a much darker existing wall.",
      },
    ],
    relatedSlugs: ["tile-calculator", "flooring-calculator", "concrete-calculator"],
  },
  {
    slug: "flooring-calculator",
    category: "construction",
    title: "Flooring Calculator",
    shortDescription: "Calculate how many boxes of flooring you need for a room.",
    metaDescription: "Free online flooring calculator to estimate how many boxes of laminate, vinyl or hardwood flooring you need for a room.",
    h1: "Flooring Calculator",
    intro: "Calculate how many boxes of flooring, such as laminate, vinyl plank or hardwood, you need to cover a room.",
    icon: "🪵",
    status: "live",
    inputFields: [
      { key: "roomLengthFt", label: "Room Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 12" },
      { key: "roomWidthFt", label: "Room Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "coveragePerBoxSqFt", label: "Coverage per Box (sq ft)", type: "number", step: 0.1, defaultValue: 20 },
      { key: "wastePercent", label: "Waste Allowance (%)", type: "number", step: 1, defaultValue: 10 },
    ],
    resultFields: [
      { key: "boxesNeeded", label: "Boxes Needed", highlight: true },
      { key: "roomArea", label: "Room Area", unit: "sq ft" },
      { key: "totalAreaWithWaste", label: "Area Including Waste", unit: "sq ft" },
    ],
    calculate: (inputs) => {
      const roomLengthFt = Number(inputs.roomLengthFt);
      const roomWidthFt = Number(inputs.roomWidthFt);
      const coveragePerBoxSqFt = Number(inputs.coveragePerBoxSqFt);
      const wastePercent = Number(inputs.wastePercent);
      const output = calculateFlooring(roomLengthFt, roomWidthFt, coveragePerBoxSqFt, wastePercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How the number of boxes is calculated",
        paragraphs: [
          "This calculator multiplies your room's length and width to find its area, adds your chosen waste percentage to account for cuts and offcuts, then divides that total by how much area a single box of flooring covers, rounding up to a whole number of boxes.",
        ],
      },
      {
        heading: "How much waste allowance should I use?",
        paragraphs: [
          "10% is a typical default for straightforward rectangular rooms. Rooms with lots of corners, closets or angled walls, or flooring installed diagonally, generally need a higher allowance since more cutting is involved.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do I find the coverage per box?",
        answer: "This is printed on the flooring product's packaging or listed on the retailer's product page, it varies by plank size and brand, so check your specific product for an accurate figure.",
      },
      {
        question: "Should I buy exactly this many boxes?",
        answer: "It's wise to round up to the nearest full box and keep any leftover material for future repairs, since matching a discontinued flooring style later can be difficult.",
      },
    ],
    relatedSlugs: ["tile-calculator", "paint-calculator", "concrete-calculator"],
  },
  {
    slug: "roofing-calculator",
    category: "construction",
    title: "Roofing Calculator",
    shortDescription: "Estimate roofing squares and shingle bundles needed for a roof.",
    metaDescription: "Free online roofing calculator to estimate the roof area, roofing squares and shingle bundles needed based on building size and roof pitch.",
    h1: "Roofing Calculator",
    intro: "Estimate your roof's surface area, roofing squares and shingle bundles needed based on your building's footprint and roof pitch.",
    icon: "🏠",
    status: "live",
    inputFields: [
      { key: "buildingLengthFt", label: "Building Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 40" },
      { key: "buildingWidthFt", label: "Building Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 30" },
      { key: "roofPitch", label: "Roof Pitch (rise per 12 in run)", type: "number", step: 0.5, defaultValue: 6, placeholder: "e.g. 6" },
      { key: "wastePercent", label: "Waste Allowance (%)", type: "number", step: 1, defaultValue: 10 },
    ],
    resultFields: [
      { key: "squaresNeeded", label: "Roofing Squares Needed", highlight: true },
      { key: "bundlesNeeded", label: "Shingle Bundles Needed", highlight: true },
      { key: "roofArea", label: "Roof Surface Area", unit: "sq ft" },
    ],
    calculate: (inputs) => {
      const buildingLengthFt = Number(inputs.buildingLengthFt);
      const buildingWidthFt = Number(inputs.buildingWidthFt);
      const roofPitch = Number(inputs.roofPitch);
      const wastePercent = Number(inputs.wastePercent);
      const output = calculateRoofing(buildingLengthFt, buildingWidthFt, roofPitch, wastePercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How roof area and pitch are calculated",
        paragraphs: [
          "This calculator starts with your building's flat footprint area (length × width), then applies a pitch multiplier to account for the roof's slope, since a sloped roof has more actual surface area than its footprint. The multiplier is calculated as √(144 + pitch²) ÷ 12, where pitch is the rise in inches per 12 inches of horizontal run (for example, a '6/12' roof has a pitch of 6).",
          "Roofing materials are measured in 'squares,' where 1 square covers 100 square feet. This calculator divides your total roof area (plus waste allowance) by 100 to find the number of squares, then multiplies by 3, since standard shingle bundles are packaged 3 per square.",
        ],
      },
      {
        heading: "Finding your roof's pitch",
        paragraphs: [
          "Roof pitch is usually expressed as 'X/12,' meaning the roof rises X inches for every 12 inches of horizontal run. A 4/12 roof is fairly shallow, while a 12/12 roof is a steep 45-degree slope. Check your building plans, or measure with a level and tape measure along a section of exposed rafter.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this account for hips, valleys or dormers?",
        answer: "No, this calculator estimates a simple gabled or shed roof based on the building's footprint and pitch. Complex roof shapes with hips, valleys or dormers have additional surface area and cutting waste that this estimate doesn't capture, consult a roofing contractor for a precise measurement.",
      },
      {
        question: "What waste allowance should I use?",
        answer: "10% is a reasonable default for a simple roof shape. More complex roofs with lots of cuts, hips or valleys typically need 15% or more.",
      },
    ],
    relatedSlugs: ["concrete-calculator", "gravel-calculator", "paint-calculator"],
  },
  {
    slug: "gravel-calculator",
    category: "construction",
    title: "Gravel Calculator",
    shortDescription: "Estimate the tons of gravel needed for a driveway or path.",
    metaDescription: "Free online gravel calculator to estimate the cubic yards and tons of gravel needed for a driveway, path or base layer.",
    h1: "Gravel Calculator",
    intro: "Estimate how much gravel you need, in cubic yards and tons, for a driveway, path or base layer based on its length, width and depth.",
    icon: "🪨",
    status: "live",
    inputFields: [
      { key: "lengthFt", label: "Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 20" },
      { key: "widthFt", label: "Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "depthIn", label: "Depth (inches)", type: "number", step: 0.5, placeholder: "e.g. 4" },
    ],
    resultFields: [
      { key: "tonsNeeded", label: "Tons Needed", highlight: true },
      { key: "cubicYards", label: "Cubic Yards" },
      { key: "cubicFeet", label: "Cubic Feet" },
    ],
    calculate: (inputs) => {
      const lengthFt = Number(inputs.lengthFt);
      const widthFt = Number(inputs.widthFt);
      const depthIn = Number(inputs.depthIn);
      const output = calculateGravel(lengthFt, widthFt, depthIn);
      return { ...output };
    },
    explanation: [
      {
        heading: "How gravel quantity is calculated",
        paragraphs: [
          "This calculator multiplies length × width × depth to find the volume of gravel needed in cubic feet, converts that to cubic yards (dividing by 27), then converts to tons using a typical density of 1.4 tons per cubic yard for compacted gravel or crushed stone, the unit most gravel suppliers sell by.",
        ],
      },
      {
        heading: "Why gravel density varies",
        paragraphs: [
          "Actual gravel density depends on the material type and how compacted it is, ranging roughly from 1.2 to 1.5 tons per cubic yard. For a large or expensive order, it's worth confirming the exact density figure with your specific supplier for a more precise quantity.",
        ],
      },
    ],
    faqs: [
      {
        question: "How deep should a gravel driveway be?",
        answer: "A typical gravel driveway uses 4-6 inches of depth, sometimes with a deeper base layer of larger stone beneath a finer top layer. Depth needs vary by soil type and expected vehicle weight.",
      },
      {
        question: "Should I order extra gravel?",
        answer: "Many suppliers recommend ordering 5-10% extra to account for compaction and an uneven base, especially for larger or irregularly shaped areas.",
      },
    ],
    relatedSlugs: ["concrete-calculator", "roofing-calculator", "flooring-calculator"],
  },
  {
    slug: "subnet-calculator",
    category: "security",
    title: "Subnet Calculator",
    shortDescription: "Calculate network address, broadcast address, usable host range and more from an IP and subnet mask.",
    metaDescription: "Free online subnet calculator to find the network address, broadcast address, usable host range, wildcard mask and CIDR from an IPv4 address and subnet mask.",
    h1: "Subnet Calculator",
    intro: "Enter an IPv4 address and a subnet mask or CIDR prefix to calculate the network address, broadcast address, usable host range and more.",
    icon: "🌐",
    status: "live",
    featured: true,
    inputFields: [
      { key: "ipAddress", label: "IP Address", type: "text", placeholder: "e.g. 192.168.1.10" },
      { key: "subnetMask", label: "Subnet Mask or CIDR", type: "text", placeholder: "e.g. 255.255.255.0 or /24" },
    ],
    resultFields: [
      { key: "networkAddress", label: "Network Address", highlight: true },
      { key: "broadcastAddress", label: "Broadcast Address", highlight: true },
      { key: "firstHost", label: "First Usable Host" },
      { key: "lastHost", label: "Last Usable Host" },
      { key: "usableHosts", label: "Usable Hosts" },
      { key: "subnetMaskDotted", label: "Subnet Mask (Dotted Decimal)" },
      { key: "cidr", label: "CIDR Notation" },
      { key: "wildcardMask", label: "Wildcard Mask" },
    ],
    calculate: (inputs) => {
      const ipAddress = String(inputs.ipAddress ?? "");
      const subnetMask = String(inputs.subnetMask ?? "");
      const output = calculateSubnet(ipAddress, subnetMask);
      return { ...output };
    },
    explanation: [
      {
        heading: "How subnet calculations work",
        paragraphs: [
          "This calculator converts your IP address and subnet mask (or CIDR prefix) into 32-bit binary numbers, then applies a bitwise AND between the IP and the mask to find the network address, the lowest address in the range. The broadcast address is found by setting all the 'host' bits (the bits not covered by the mask) to 1.",
          "The usable host range excludes the network address and broadcast address from a subnet, since those are reserved, except for /31 subnets (used for point-to-point links, both addresses are usable) and /32 (a single host route with exactly one address).",
        ],
      },
      {
        heading: "CIDR notation vs dotted-decimal subnet mask",
        paragraphs: [
          "CIDR notation (like /24) expresses the subnet mask as a prefix length, the number of leading 1 bits in the mask. This is equivalent to a dotted-decimal mask like 255.255.255.0, this calculator accepts either format and shows both in the results, along with the wildcard mask, the inverse of the subnet mask used in access control lists on some network equipment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I enter the subnet mask as either a CIDR prefix or dotted decimal?",
        answer: "Yes, this calculator accepts either format in the subnet mask field, for example both '/24' (or just '24') and '255.255.255.0' work and produce the same result.",
      },
      {
        question: "Why does a /31 subnet have 2 usable hosts instead of 0?",
        answer: "Per RFC 3021, /31 subnets are a special case used for point-to-point links, both addresses in the subnet are usable as host addresses since there's no need for a separate broadcast address on a two-device link.",
      },
    ],
    relatedSlugs: ["cidr-range-calculator", "ip-address-converter", "password-generator"],
  },
  {
    slug: "cidr-range-calculator",
    category: "security",
    title: "CIDR to IP Range Calculator",
    shortDescription: "Convert a CIDR block into its first and last IP address.",
    metaDescription: "Free online CIDR to IP range calculator to convert a CIDR block (like 192.168.1.0/24) into its first address, last address and total address count.",
    h1: "CIDR to IP Range Calculator",
    intro: "Enter a CIDR block to find the first and last IP address in the range, the total number of addresses, and the equivalent subnet mask.",
    icon: "📶",
    status: "live",
    inputFields: [
      { key: "cidrBlock", label: "CIDR Block", type: "text", placeholder: "e.g. 192.168.1.0/24" },
    ],
    resultFields: [
      { key: "firstAddress", label: "First Address", highlight: true },
      { key: "lastAddress", label: "Last Address", highlight: true },
      { key: "totalAddresses", label: "Total Addresses" },
      { key: "subnetMaskDotted", label: "Equivalent Subnet Mask" },
    ],
    calculate: (inputs) => {
      const cidrBlock = String(inputs.cidrBlock ?? "");
      const output = calculateCidrRange(cidrBlock);
      return { ...output };
    },
    explanation: [
      {
        heading: "How a CIDR block maps to an IP range",
        paragraphs: [
          "A CIDR block like 192.168.1.0/24 combines an IP address with a prefix length (the /24) that defines how many leading bits are fixed for the network. This calculator masks the address down to its network boundary, then sets all the remaining bits to 1 to find the last address in the block, giving you the full inclusive range the CIDR block covers.",
        ],
      },
      {
        heading: "Common uses for CIDR range lookups",
        paragraphs: [
          "This is useful when reviewing firewall rules, cloud security groups, or access control lists that reference CIDR blocks, letting you quickly see exactly which IP addresses a given rule covers, or how many total addresses (including network and broadcast) a block contains.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the address range include the network and broadcast address?",
        answer: "Yes, the first and last address shown are the full inclusive range of the CIDR block, including the network address and broadcast address. Use the Subnet Calculator if you need the usable host range excluding those two addresses.",
      },
      {
        question: "What format should I use?",
        answer: "Enter the block as an IP address followed by a forward slash and the prefix length, for example 10.0.0.0/16 or 192.168.1.0/24.",
      },
    ],
    relatedSlugs: ["subnet-calculator", "ip-address-converter", "password-generator"],
  },
  {
    slug: "ip-address-converter",
    category: "security",
    title: "IP Address Converter",
    shortDescription: "Convert an IPv4 address between decimal, binary and hexadecimal.",
    metaDescription: "Free online IP address converter to convert an IPv4 address between dotted-decimal, binary and hexadecimal formats.",
    h1: "IP Address Converter",
    intro: "Convert an IPv4 address between dotted-decimal, binary and hexadecimal notation.",
    icon: "🔁",
    status: "live",
    inputFields: [
      {
        key: "format",
        label: "Input Format",
        type: "select",
        options: [
          { label: "Decimal (e.g. 192.168.1.1)", value: "decimal" },
          { label: "Binary (e.g. 11000000.10101000.00000001.00000001)", value: "binary" },
          { label: "Hexadecimal (e.g. C0.A8.01.01)", value: "hex" },
        ],
      },
      { key: "ipValue", label: "IP Address", type: "text", placeholder: "e.g. 192.168.1.1" },
    ],
    resultFields: [
      { key: "decimalDotted", label: "Decimal (Dotted)", highlight: true },
      { key: "binaryDotted", label: "Binary (Dotted)", highlight: true, wide: true },
      { key: "hexDotted", label: "Hexadecimal (Dotted)", highlight: true },
      { key: "hexCompact", label: "Hexadecimal (Compact)" },
      { key: "decimalInteger", label: "32-bit Integer" },
    ],
    calculate: (inputs) => {
      const ipValue = String(inputs.ipValue ?? "");
      const format = String(inputs.format) as IpFormat;
      const output = convertIpAddress(ipValue, format);
      return { ...output };
    },
    explanation: [
      {
        heading: "How IP address conversion works",
        paragraphs: [
          "An IPv4 address is really just a 32-bit number, dotted-decimal notation (like 192.168.1.1) is simply the most human-readable way to display it. This converter parses your input in whichever format you select, reconstructs the underlying 32-bit value, then formats that same value as decimal, binary and hexadecimal.",
        ],
      },
      {
        heading: "Why convert an IP address to binary or hex",
        paragraphs: [
          "Binary representation makes it easy to see exactly which bits are part of the network portion versus the host portion when working with subnetting, since subnet masks operate directly on these bits. Hexadecimal is commonly seen in low-level networking tools, packet captures and some router or firewall configuration formats.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I convert from binary or hex back to decimal?",
        answer: "Yes, select the format you're starting from (decimal, binary or hex) in the Input Format field, and the calculator will show the equivalent value in all three formats.",
      },
      {
        question: "What format should binary or hex input be in?",
        answer: "Binary input should be 32 digits of 0s and 1s, optionally grouped with periods into four 8-bit octets. Hex input should be 8 hex digits, optionally grouped with periods into four 2-digit octets, or prefixed with '0x'.",
      },
    ],
    relatedSlugs: ["subnet-calculator", "cidr-range-calculator", "hex-rgb-converter"],
  },
  {
    slug: "btu-calculator",
    category: "construction",
    title: "BTU Calculator",
    shortDescription: "Estimate the BTU rating needed to heat or cool a room.",
    metaDescription: "Free online BTU calculator to estimate the air conditioner or heater size (in BTUs) needed for a room based on its size and conditions.",
    h1: "BTU Calculator",
    intro: "Estimate the BTU (British Thermal Unit) rating needed for an air conditioner or heater based on room size, sun exposure, occupancy and use.",
    icon: "🌡️",
    status: "live",
    inputFields: [
      { key: "areaSqFt", label: "Room Area (sq ft)", type: "number", step: 1, placeholder: "e.g. 300" },
      {
        key: "sunExposure",
        label: "Sun Exposure",
        type: "select",
        options: [
          { label: "Moderate", value: "moderate" },
          { label: "Sunny / South-Facing", value: "sunny" },
          { label: "Heavily Shaded", value: "shaded" },
        ],
      },
      { key: "occupants", label: "Typical Occupants", type: "number", step: 1, defaultValue: 2 },
      { key: "isKitchen", label: "This room is a kitchen", type: "checkbox", defaultValue: "false" },
    ],
    resultFields: [
      { key: "recommendedBtu", label: "Recommended BTU", unit: "BTU/hr", highlight: true },
      { key: "tonsEquivalent", label: "Equivalent Tonnage", unit: "tons" },
      { key: "baseBtu", label: "Base BTU (before adjustments)", unit: "BTU/hr" },
    ],
    calculate: (inputs) => {
      const areaSqFt = Number(inputs.areaSqFt);
      const sunExposure = String(inputs.sunExposure) as SunExposure;
      const occupants = Number(inputs.occupants);
      const isKitchen = inputs.isKitchen === "true";
      const output = calculateBtu(areaSqFt, sunExposure, occupants, isKitchen);
      return { ...output };
    },
    explanation: [
      {
        heading: "How BTU sizing is calculated",
        paragraphs: [
          "This calculator starts from the standard room-size-to-BTU sizing chart published by the U.S. Department of Energy, which maps room square footage to a baseline BTU rating (for example, 300-350 sq ft calls for about 8,000 BTU). It then adjusts that baseline: +10% for a sunny or south-facing room, -10% for a heavily shaded room, +600 BTU for each occupant beyond two, and +4,000 BTU if the room is a kitchen, since cooking appliances add significant heat.",
        ],
      },
      {
        heading: "Why correct BTU sizing matters",
        paragraphs: [
          "An undersized unit will run constantly and struggle to cool or heat the space, while an oversized unit cycles on and off too quickly, which wastes energy and can leave a room feeling clammy since it doesn't run long enough to properly dehumidify. Getting the BTU rating right balances comfort and efficiency.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does BTU mean?",
        answer: "BTU stands for British Thermal Unit, a measure of heat energy. In HVAC sizing, a higher BTU rating means a unit can heat or cool a larger space, or a smaller space more quickly.",
      },
      {
        question: "How does BTU relate to tonnage in central air conditioning?",
        answer: "For central air conditioning systems, capacity is often described in tons rather than BTU, where 1 ton equals 12,000 BTU/hr. This calculator shows both figures.",
      },
      {
        question: "Does this account for insulation quality or ceiling height?",
        answer: "No, this calculator uses room square footage as the primary factor, along with sun exposure, occupancy and kitchen use. Poor insulation, very high ceilings, or extreme climates may require sizing beyond this general estimate, consult an HVAC professional for a precise load calculation.",
      },
    ],
    relatedSlugs: ["square-footage-calculator", "concrete-calculator", "gravel-calculator"],
  },
  {
    slug: "macro-calculator",
    category: "health",
    title: "Macro Calculator",
    shortDescription: "Calculate your daily protein, carb and fat targets based on your diet style and goal.",
    metaDescription: "Free online macro calculator to find your daily protein, carbohydrate and fat targets based on your body stats, goal and diet style (balanced, high-protein, low-carb or keto).",
    h1: "Macro Calculator",
    intro: "Calculate your daily calorie target and macro breakdown (protein, carbs and fat) based on your body stats, goal, and preferred diet style.",
    icon: "🥑",
    status: "live",
    featured: true,
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
      { key: "dietStyle", label: "Diet Style", type: "select", options: [
        { label: "Balanced (30/40/30)", value: "balanced" },
        { label: "High Protein (40/30/30)", value: "highProtein" },
        { label: "Low Carb (40/20/40)", value: "lowCarb" },
        { label: "Keto (25/5/70)", value: "keto" },
      ] },
    ],
    resultFields: [
      { key: "targetCalories", label: "Daily Calorie Target", unit: "kcal", highlight: true },
      { key: "proteinGrams", label: "Protein", unit: "g", highlight: true },
      { key: "carbsGrams", label: "Carbs", unit: "g", highlight: true },
      { key: "fatGrams", label: "Fat", unit: "g", highlight: true },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as MacroGender;
      const age = Number(inputs.age);
      const heightCm = Number(inputs.heightCm);
      const weightKg = Number(inputs.weightKg);
      const activityLevel = String(inputs.activityLevel) as MacroActivityLevel;
      const goal = String(inputs.goal) as MacroGoal;
      const dietStyle = String(inputs.dietStyle) as DietStyle;
      const output = calculateMacros(gender, age, heightCm, weightKg, activityLevel, goal, dietStyle);
      return { ...output };
    },
    interpret: (result) => {
      return [
        "Your daily target is " + result.targetCalories + " kcal, split into " + result.proteinGrams + "g protein, " + result.carbsGrams + "g carbs and " + result.fatGrams + "g fat.",
      ];
    },
    explanation: [
      {
        heading: "How your macro targets are calculated",
        paragraphs: [
          "This calculator first estimates your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation, multiplies it by an activity multiplier to get your Total Daily Energy Expenditure (TDEE), then adjusts by 500 kcal in the direction of your goal (a common approximation for roughly 0.5 kg of weekly weight change). Your chosen diet style then determines what percentage of those calories come from protein, carbs and fat, converted to grams using 4 kcal per gram for protein and carbs, and 9 kcal per gram for fat.",
        ],
      },
      {
        heading: "Choosing a diet style",
        paragraphs: [
          "Balanced (30% protein / 40% carbs / 30% fat) suits most general fitness goals. High Protein shifts more calories toward protein, often preferred for muscle building or preserving lean mass in a deficit. Low Carb reduces carbohydrate intake while keeping protein high. Keto is a very low-carb, high-fat split intended to shift metabolism toward ketosis, this is a more restrictive approach and isn't necessary or appropriate for everyone.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from the TDEE Calculator?",
        answer: "The TDEE Calculator shows your maintenance calories with a single standard macro split. This Macro Calculator lets you choose a specific goal (lose, maintain, gain) and diet style (balanced, high protein, low carb or keto), giving you a tailored calorie and macro target rather than one fixed split.",
      },
      {
        question: "Should I follow a keto or low-carb split without medical guidance?",
        answer: "Significant diet changes, especially very low-carb approaches like keto, can affect people differently and may not be appropriate for everyone, particularly those with existing health conditions. Consult a healthcare provider or registered dietitian before making major changes.",
      },
    ],
    relatedSlugs: ["tdee-calculator", "protein-calculator", "calorie-goal-calculator"],
  },
  {
    slug: "square-footage-calculator",
    category: "construction",
    title: "Square Footage Calculator",
    shortDescription: "Calculate the area of a rectangular, circular or triangular space.",
    metaDescription: "Free online square footage calculator to calculate the area of a rectangular, circular or triangular space in square feet, square yards and square meters.",
    h1: "Square Footage Calculator",
    intro: "Calculate the area of a space in square feet, square yards and square meters, for rectangular, circular or triangular shapes.",
    icon: "📐",
    status: "live",
    inputFields: [
      {
        key: "shape",
        label: "Shape",
        type: "select",
        options: [
          { label: "Rectangle", value: "rectangle" },
          { label: "Circle", value: "circle" },
          { label: "Triangle", value: "triangle" },
        ],
      },
      { key: "dimensionA", label: "Length, Base, or Diameter (ft)", type: "number", step: 0.1, placeholder: "e.g. 12" },
      { key: "dimensionB", label: "Width or Height (ft) — not needed for circle", type: "number", step: 0.1, placeholder: "e.g. 10" },
    ],
    resultFields: [
      { key: "areaSqFt", label: "Area (sq ft)", highlight: true },
      { key: "areaSqYards", label: "Area (sq yards)" },
      { key: "areaSqMeters", label: "Area (sq meters)" },
    ],
    calculate: (inputs) => {
      const shape = String(inputs.shape) as ShapeType;
      const dimensionA = Number(inputs.dimensionA);
      const dimensionB = Number(inputs.dimensionB);
      const output = calculateSquareFootage(shape, dimensionA, dimensionB);
      return { ...output };
    },
    explanation: [
      {
        heading: "How area is calculated for each shape",
        paragraphs: [
          "For a rectangle, area is length × width. For a triangle, area is ½ × base × height. For a circle, area is π × radius², using half of the diameter you enter as the radius. All three formulas use the values you enter for 'Length, Base, or Diameter' and 'Width or Height' depending on the shape selected, the second field is ignored for circles.",
        ],
      },
      {
        heading: "Square feet vs square yards vs square meters",
        paragraphs: [
          "Square feet is the standard unit for most home improvement projects in the US. Square yards is commonly used when buying carpet (9 square feet = 1 square yard). Square meters is the standard metric unit, useful when working with international suppliers or specifications.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I calculate an L-shaped or irregular room?",
        answer: "Split the space into simpler rectangles or triangles, calculate each one separately using this tool, and add the results together for the total area.",
      },
      {
        question: "What if I only know the radius, not the diameter, of a circle?",
        answer: "Multiply the radius by 2 to get the diameter, then enter that value in the 'Length, Base, or Diameter' field.",
      },
    ],
    relatedSlugs: ["tile-calculator", "flooring-calculator", "btu-calculator"],
  },
  {
    slug: "probability-calculator",
    category: "math",
    title: "Probability Calculator",
    shortDescription: "Calculate the probability of one or two independent events.",
    metaDescription: "Free online probability calculator to calculate the probability of a single event, and the combined probability of two independent events (AND / OR).",
    h1: "Probability Calculator",
    intro: "Calculate the probability of an event from its favorable and total outcomes, and optionally combine it with a second independent event using AND / OR.",
    icon: "🎲",
    status: "live",
    inputFields: [
      { key: "favorableA", label: "Favorable Outcomes (Event A)", type: "number", step: 1, placeholder: "e.g. 1" },
      { key: "totalA", label: "Total Possible Outcomes (Event A)", type: "number", step: 1, placeholder: "e.g. 6" },
      { key: "favorableB", label: "Favorable Outcomes (Event B, optional)", type: "number", step: 1, defaultValue: 0 },
      { key: "totalB", label: "Total Possible Outcomes (Event B, optional)", type: "number", step: 1, defaultValue: 0 },
    ],
    resultFields: [
      { key: "probabilityA", label: "P(A)", highlight: true },
      { key: "probabilityB", label: "P(B)" },
      { key: "probabilityBothAnd", label: "P(A and B) — both occur", highlight: true },
      { key: "probabilityEitherOr", label: "P(A or B) — either occurs" },
    ],
    calculate: (inputs) => {
      const favorableA = Number(inputs.favorableA);
      const totalA = Number(inputs.totalA);
      const favorableB = Number(inputs.favorableB);
      const totalB = Number(inputs.totalB);
      const output = calculateProbability(favorableA, totalA, favorableB, totalB);
      return { ...output };
    },
    explanation: [
      {
        heading: "How probability is calculated",
        paragraphs: [
          "The probability of an event is its number of favorable outcomes divided by the total number of possible outcomes. For example, rolling a 4 on a standard six-sided die has 1 favorable outcome out of 6 total, a probability of 1/6, about 16.67%.",
        ],
      },
      {
        heading: "Combining two independent events",
        paragraphs: [
          "If you enter a second event, this calculator treats events A and B as independent (one doesn't affect the other's outcome). P(A and B), the probability both happen, is P(A) × P(B). P(A or B), the probability at least one happens, is P(A) + P(B) − P(A) × P(B), which avoids double-counting the overlap where both occur.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this work for dependent events?",
        answer: "No, this calculator assumes events A and B are independent, meaning the outcome of one doesn't affect the other. Dependent events (like drawing cards without replacement) require conditional probability, which isn't covered by this calculator.",
      },
      {
        question: "Is event B required?",
        answer: "No, leave event B's fields at 0 to calculate the probability of event A alone.",
      },
    ],
    relatedSlugs: ["statistics-calculator", "standard-deviation-calculator", "random-number-generator"],
  },
  {
    slug: "statistics-calculator",
    category: "math",
    title: "Statistics Calculator",
    shortDescription: "Calculate mean, median, mode, standard deviation, quartiles and more from a data set.",
    metaDescription: "Free online statistics calculator to calculate mean, median, mode, range, variance, standard deviation and quartiles from a list of numbers.",
    h1: "Statistics Calculator",
    intro: "Calculate a full set of descriptive statistics, including mean, median, mode, standard deviation and quartiles, from a list of numbers.",
    icon: "📊",
    status: "live",
    inputFields: [
      { key: "numbers", label: "Numbers (comma or space separated)", type: "text", placeholder: "e.g. 4, 8, 15, 16, 23, 42" },
    ],
    resultFields: [
      { key: "mean", label: "Mean", highlight: true },
      { key: "median", label: "Median", highlight: true },
      { key: "mode", label: "Mode", highlight: true },
      { key: "standardDeviation", label: "Standard Deviation (Population)" },
      { key: "sampleStandardDeviation", label: "Standard Deviation (Sample)" },
      { key: "variance", label: "Variance (Population)" },
      { key: "sampleVariance", label: "Variance (Sample)" },
      { key: "range", label: "Range" },
      { key: "min", label: "Minimum" },
      { key: "max", label: "Maximum" },
      { key: "sum", label: "Sum" },
      { key: "count", label: "Count" },
      { key: "q1", label: "Q1 (25th Percentile)" },
      { key: "q3", label: "Q3 (75th Percentile)" },
      { key: "iqr", label: "Interquartile Range (IQR)" },
    ],
    calculate: (inputs) => {
      const numbers = String(inputs.numbers ?? "");
      const output = calculateStatistics(numbers);
      return { ...output };
    },
    explanation: [
      {
        heading: "What this calculator includes",
        paragraphs: [
          "This is a comprehensive descriptive statistics tool covering measures of central tendency (mean, median, mode), spread (range, variance, standard deviation, interquartile range), and both population and sample versions of variance and standard deviation, alongside basic figures like sum, count, minimum and maximum.",
        ],
      },
      {
        heading: "Population vs sample statistics, and understanding quartiles",
        paragraphs: [
          "Population statistics treat your data as the complete data set, dividing by the total count. Sample statistics treat your data as a sample drawn from a larger population, dividing by count minus one, which slightly increases the result to account for the extra uncertainty of estimating from a sample.",
          "Quartiles split the sorted data into four equal parts: Q1 is the value below which 25% of the data falls, and Q3 is the value below which 75% falls. The interquartile range (IQR = Q3 − Q1) captures the spread of the middle 50% of the data and is less sensitive to outliers than the full range.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use population or sample standard deviation?",
        answer: "Use population statistics if your data represents the entire group you care about. Use sample statistics if your data is a subset used to estimate characteristics of a larger population, this is the more common case in research and surveys.",
      },
      {
        question: "How is this different from the separate Mean/Median/Mode and Standard Deviation calculators?",
        answer: "This calculator combines everything from both of those tools into one comprehensive result, and adds quartiles, IQR, sum, min and max, useful when you want a full statistical summary of a data set in a single place.",
      },
    ],
    relatedSlugs: ["mean-median-mode-calculator", "standard-deviation-calculator", "probability-calculator"],
  },
  {
    slug: "future-value-calculator",
    category: "finance",
    title: "Future Value Calculator",
    shortDescription: "Calculate how much a present sum plus monthly contributions will be worth in the future.",
    metaDescription: "Free online future value calculator to see how much your savings or investment will grow to, including optional monthly contributions.",
    h1: "Future Value Calculator",
    intro: "Calculate the future value of a lump sum, optional monthly contributions, or both, at a given annual interest rate and compounding frequency.",
    icon: "📈",
    status: "live",
    inputFields: [
      { key: "presentValue", label: "Present Value", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "monthlyContribution", label: "Monthly Contribution (optional)", type: "number", step: 0.01, defaultValue: 0 },
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
      { key: "futureValue", label: "Future Value", highlight: true },
      { key: "totalContributions", label: "Total Contributions" },
      { key: "totalInterest", label: "Total Interest Earned", highlight: true },
    ],
    calculate: (inputs) => {
      const presentValue = Number(inputs.presentValue);
      const monthlyContribution = Number(inputs.monthlyContribution ?? 0);
      const annualRate = Number(inputs.annualRate);
      const years = Number(inputs.years);
      const frequency = String(inputs.frequency) as FvCompoundFrequency;
      const output = calculateFutureValue(presentValue, annualRate, years, frequency, monthlyContribution);
      return { ...output };
    },
    explanation: [
      {
        heading: "Future value formula: how it's calculated",
        paragraphs: [
          "Future value combines two pieces: your present value compounding on its own, FV = PV × (1 + r/n)^(n×t), plus, if you add a monthly contribution, the future value of that contribution stream, calculated using the future value of an annuity formula, compounded monthly alongside your deposits.",
          "For example, 10,000 invested today at 7% annual interest compounded monthly, with no further contributions, grows to roughly 20,097 after 10 years. Add a 200 monthly contribution to that same scenario and the total future value climbs substantially higher, since each contribution also earns compound interest for the remainder of the period.",
        ],
      },
      {
        heading: "Future value vs compound interest",
        paragraphs: [
          "This calculator extends the standard compound interest formula by optionally adding recurring monthly contributions on top of your initial lump sum, useful for modeling a savings or investment account you're actively contributing to, rather than a single deposit left untouched.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is future value?",
        answer: "Future value (FV) is what a sum of money today, or a series of contributions, will be worth at a specific point in the future, after accounting for compound interest or investment growth.",
      },
      {
        question: "Is the monthly contribution required?",
        answer: "No, leave it at 0 to calculate the future value of a single lump sum with no ongoing contributions.",
      },
      {
        question: "How does compounding frequency affect the result?",
        answer: "More frequent compounding (like daily vs annually) results in a slightly higher future value for the same nominal interest rate, since interest is added to the balance more often and starts earning its own interest sooner.",
      },
    ],
    relatedSlugs: ["present-value-calculator", "compound-interest-calculator", "sip-calculator", "savings-goal-calculator"],
  },
  {
    slug: "present-value-calculator",
    category: "finance",
    title: "Present Value Calculator",
    shortDescription: "Calculate how much you'd need today to reach a future value goal.",
    metaDescription: "Free online present value calculator to find out how much a future sum of money is worth today, given a discount rate and time period.",
    h1: "Present Value Calculator",
    intro: "Calculate the present value of a future sum of money, given a discount rate, compounding frequency, and time period.",
    icon: "🔮",
    status: "live",
    inputFields: [
      { key: "futureValue", label: "Future Value", type: "number", step: 0.01, placeholder: "e.g. 20000" },
      { key: "annualRate", label: "Annual Discount Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
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
      { key: "presentValue", label: "Present Value", highlight: true },
      { key: "totalDiscount", label: "Total Discount (Growth Removed)", highlight: true },
    ],
    calculate: (inputs) => {
      const futureValue = Number(inputs.futureValue);
      const annualRate = Number(inputs.annualRate);
      const years = Number(inputs.years);
      const frequency = String(inputs.frequency) as PvCompoundFrequency;
      const output = calculatePresentValue(futureValue, annualRate, years, frequency);
      return { ...output };
    },
    explanation: [
      {
        heading: "Present value formula: how it's calculated",
        paragraphs: [
          "Present value answers the reverse question to future value: given a target amount you want to have at some point in the future, how much would you need to invest today? The formula is PV = FV ÷ (1 + r/n)^(n×t), where r is the annual discount rate, n is the compounding frequency, and t is the number of years.",
          "For example, if you want 20,000 in 10 years and can earn 7% annual interest compounded monthly, you'd need to invest roughly 9,948 today, the present value of that future 20,000.",
        ],
      },
      {
        heading: "Why present value matters",
        paragraphs: [
          "Present value is the foundation of the time value of money: a dollar today is worth more than a dollar in the future, because today's dollar can be invested and earn a return in the meantime. This makes present value useful for comparing lump sums received at different points in time, or for figuring out how much to invest now to reach a specific future goal.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is present value?",
        answer: "Present value (PV) is the current worth of a future sum of money, discounted back to today at a given interest (or discount) rate, reflecting the time value of money.",
      },
      {
        question: "What discount rate should I use?",
        answer: "The discount rate typically reflects the return you could reasonably expect to earn elsewhere, such as an investment's expected annual return, or a required rate of return for a specific goal.",
      },
      {
        question: "How is this different from the Future Value Calculator?",
        answer: "Future Value projects a present amount forward in time; Present Value works backward from a future target to tell you what it's worth (or what you'd need to invest) today.",
      },
    ],
    relatedSlugs: ["future-value-calculator", "compound-interest-calculator", "savings-goal-calculator"],
  },
  {
    slug: "cagr-calculator",
    category: "finance",
    title: "CAGR Calculator",
    shortDescription: "Calculate the compound annual growth rate between a beginning and ending value.",
    metaDescription: "Free online CAGR calculator to calculate the compound annual growth rate (CAGR) of an investment between a beginning and ending value.",
    h1: "CAGR Calculator",
    intro: "Calculate the Compound Annual Growth Rate (CAGR) of an investment, given its beginning value, ending value, and the number of years held.",
    icon: "🧭",
    status: "live",
    inputFields: [
      { key: "beginningValue", label: "Beginning Value", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "endingValue", label: "Ending Value", type: "number", step: 0.01, placeholder: "e.g. 25000" },
      { key: "years", label: "Number of Years", type: "number", step: 0.5, placeholder: "e.g. 8" },
    ],
    resultFields: [
      { key: "cagrPercent", label: "CAGR", unit: "%", highlight: true },
      { key: "totalGrowthPercent", label: "Total Growth", unit: "%" },
      { key: "endingValueMultiple", label: "Growth Multiple", unit: "x" },
    ],
    calculate: (inputs) => {
      const beginningValue = Number(inputs.beginningValue);
      const endingValue = Number(inputs.endingValue);
      const years = Number(inputs.years);
      const output = calculateCagr(beginningValue, endingValue, years);
      return { ...output };
    },
    explanation: [
      {
        heading: "CAGR formula: how compound annual growth rate is calculated",
        paragraphs: [
          "CAGR = (Ending Value ÷ Beginning Value)^(1 ÷ Years) − 1. It represents the single, steady annual growth rate that would take your beginning value to your ending value over the given period, smoothing out any ups and downs that happened along the way.",
          "For example, an investment that grows from 10,000 to 25,000 over 8 years has a CAGR of (25,000 ÷ 10,000)^(1/8) − 1, which works out to about 12.1% per year, even though the actual year-to-year returns may have varied considerably.",
        ],
      },
      {
        heading: "Why CAGR is useful for comparing investments",
        paragraphs: [
          "Because CAGR expresses growth as a single smoothed annual rate, it makes it easy to compare investments held over different time periods or with very different volatility, something a simple total return percentage can't do on its own. It's widely used to compare the historical performance of stocks, funds, and businesses.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is CAGR the same as the average annual return?",
        answer: "Not exactly. CAGR is a geometric average that reflects compounding, while a simple average of yearly returns (an arithmetic mean) doesn't account for how returns compound over time and can overstate actual growth, especially when returns are volatile.",
      },
      {
        question: "Can CAGR be negative?",
        answer: "Yes, if the ending value is lower than the beginning value, CAGR will be negative, reflecting an overall decline over the period.",
      },
      {
        question: "Does CAGR account for volatility or risk?",
        answer: "No, CAGR only looks at the beginning and ending values. Two investments can have the same CAGR but very different levels of volatility along the way.",
      },
    ],
    relatedSlugs: ["roi-calculator", "investment-return-calculator", "compound-interest-calculator"],
  },
  {
    slug: "investment-return-calculator",
    category: "finance",
    title: "Investment Return Calculator",
    shortDescription: "Solve for the annual rate of return needed to reach a target balance, including monthly contributions.",
    metaDescription: "Free online investment return calculator to find the annualized rate of return on an investment, accounting for an initial amount and monthly contributions.",
    h1: "Investment Return Calculator",
    intro: "Calculate the annualized rate of return on an investment, accounting for both an initial lump sum and ongoing monthly contributions.",
    icon: "🪙",
    status: "live",
    inputFields: [
      { key: "initialInvestment", label: "Initial Investment", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "monthlyContribution", label: "Monthly Contribution (optional)", type: "number", step: 0.01, defaultValue: 0 },
      { key: "years", label: "Time Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 10" },
      { key: "endingBalance", label: "Ending Balance", type: "number", step: 0.01, placeholder: "e.g. 30000" },
    ],
    resultFields: [
      { key: "annualReturnPercent", label: "Annualized Return", unit: "%", highlight: true },
      { key: "totalContributions", label: "Total Contributions" },
      { key: "totalGain", label: "Total Gain", highlight: true },
    ],
    calculate: (inputs) => {
      const initialInvestment = Number(inputs.initialInvestment);
      const monthlyContribution = Number(inputs.monthlyContribution ?? 0);
      const years = Number(inputs.years);
      const endingBalance = Number(inputs.endingBalance);
      const output = calculateInvestmentReturn(initialInvestment, monthlyContribution, years, endingBalance);
      return { ...output };
    },
    explanation: [
      {
        heading: "How the annualized rate of return is solved for",
        paragraphs: [
          "Unlike a simple return calculation, there's no direct algebraic formula for the rate of return once monthly contributions are involved, since each contribution compounds for a different length of time. This calculator instead searches for the annual rate (compounded monthly) that, when applied to your initial investment plus your monthly contributions over the given period, produces exactly your entered ending balance.",
          "For example, starting with 10,000, contributing 200 a month, over 10 years, and ending with a balance of 60,000, this calculator works out roughly what steady annual rate of return would explain that growth.",
        ],
      },
      {
        heading: "How this differs from ROI and CAGR",
        paragraphs: [
          "The ROI Calculator and CAGR Calculator both assume a single lump sum with no additional contributions along the way. This calculator is built specifically for the common real-world case of an investment or savings account that also receives regular monthly deposits, which materially changes what rate of return actually explains the account's growth.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why isn't there a simple formula for this?",
        answer: "Because each monthly contribution is invested for a different length of time, the total future value is a more complex function of the rate of return, one that generally can't be solved for algebraically. This calculator searches numerically for the rate that produces your ending balance instead.",
      },
      {
        question: "What if I didn't make any monthly contributions?",
        answer: "Leave the monthly contribution at 0 and this calculator will solve for the simple annualized return between your initial investment and ending balance, similar to CAGR.",
      },
      {
        question: "What happens if my ending balance is unrealistic for the inputs given?",
        answer: "The calculator searches within a wide but bounded range of annual returns (roughly -99% to +1000%). If your ending balance falls outside what's achievable in that range, it will let you know so you can double-check your inputs.",
      },
    ],
    relatedSlugs: ["cagr-calculator", "roi-calculator", "sip-calculator", "compound-interest-calculator"],
  },
  {
    slug: "apy-calculator",
    category: "finance",
    title: "APY Calculator",
    shortDescription: "Calculate the effective Annual Percentage Yield from a nominal interest rate and compounding frequency.",
    metaDescription: "Free online APY calculator to convert a nominal interest rate (APR) into its effective Annual Percentage Yield (APY), based on compounding frequency.",
    h1: "Annual Percentage Yield (APY) Calculator",
    intro: "Calculate the effective Annual Percentage Yield (APY) from a nominal interest rate and compounding frequency, and see the interest earned on a deposit over one year.",
    icon: "🏦",
    status: "live",
    inputFields: [
      { key: "nominalRate", label: "Nominal Interest Rate / APR (%)", type: "number", step: 0.01, placeholder: "e.g. 5" },
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
      { key: "depositAmount", label: "Deposit Amount (optional)", type: "number", step: 0.01, defaultValue: 0 },
    ],
    resultFields: [
      { key: "apyPercent", label: "APY", unit: "%", highlight: true },
      { key: "firstYearInterest", label: "First-Year Interest Earned", highlight: true },
    ],
    calculate: (inputs) => {
      const nominalRate = Number(inputs.nominalRate);
      const frequency = String(inputs.frequency) as ApyCompoundFrequency;
      const depositAmount = Number(inputs.depositAmount ?? 0);
      const output = calculateApy(nominalRate, frequency, depositAmount);
      return { ...output };
    },
    explanation: [
      {
        heading: "APY formula: how it's calculated",
        paragraphs: [
          "APY = (1 + r/n)^n − 1, where r is the nominal annual interest rate (also called APR) as a decimal, and n is the number of times interest compounds per year. APY reflects the true effective annual return once compounding is factored in, and will always be equal to or greater than the nominal rate whenever compounding happens more than once a year.",
          "For example, a nominal rate of 5% compounded monthly produces an APY of about 5.12%, slightly higher than 5% because interest earned each month starts earning its own interest for the rest of the year.",
        ],
      },
      {
        heading: "APY vs APR",
        paragraphs: [
          "APR (Annual Percentage Rate) is the nominal, stated interest rate before compounding is applied. APY (Annual Percentage Yield) is the effective rate you actually earn (on savings and deposit accounts) or pay (on some loans) once compounding is taken into account. Banks are generally required to advertise APY on savings products since it reflects the true return more accurately than APR alone.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is APY higher than the nominal rate?",
        answer: "Because APY accounts for compounding, interest earned during the year starts earning its own interest before the year is over. The more frequently interest compounds, the bigger this effect, and the higher APY is relative to the nominal rate.",
      },
      {
        question: "Is the deposit amount required?",
        answer: "No, it's optional. Leave it at 0 if you only want the APY percentage; enter an amount to also see the actual interest earned on that deposit over one year.",
      },
      {
        question: "Does annual compounding mean APY equals APR?",
        answer: "Yes, when interest compounds only once a year, APY and the nominal rate (APR) are exactly the same, since there's no additional compounding within the year to create a difference.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "simple-interest-calculator", "savings-goal-calculator"],
  },
  {
    slug: "rule-of-72-calculator",
    category: "finance",
    title: "Rule of 72 Calculator",
    shortDescription: "Estimate how long it takes an investment to double, or the rate needed to double it.",
    metaDescription: "Free online Rule of 72 calculator to estimate how many years it takes to double your money, or the interest rate needed to double it in a given time.",
    h1: "Rule of 72 Calculator",
    intro: "Use the Rule of 72 to quickly estimate how long an investment takes to double at a given interest rate, or what rate you'd need to double it in a given number of years, alongside the exact answer for comparison.",
    icon: "⏱️",
    status: "live",
    inputFields: [
      {
        key: "mode",
        label: "What do you want to calculate?",
        type: "select",
        options: [
          { label: "Years to Double (from a rate)", value: "yearsToDouble" },
          { label: "Required Rate (from a number of years)", value: "requiredRate" },
        ],
      },
      { key: "rate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 8" },
      { key: "years", label: "Number of Years", type: "number", step: 0.5, placeholder: "e.g. 10" },
    ],
    resultFields: [
      { key: "ruleOf72Result", label: "Rule of 72 Estimate", highlight: true },
      { key: "exactResult", label: "Exact Answer", highlight: true },
      { key: "difference", label: "Difference (Rule of 72 − Exact)" },
    ],
    calculate: (inputs) => {
      const mode = String(inputs.mode) as Rule72Mode;
      const value = mode === "yearsToDouble" ? Number(inputs.rate) : Number(inputs.years);
      const output = calculateRule72(mode, value);
      return { ...output };
    },
    interpret: (result, inputs) => {
      const mode = String(inputs.mode) as Rule72Mode;
      return mode === "yearsToDouble"
        ? ["The Rule of 72 estimates roughly " + result.ruleOf72Result + " years to double your money; the exact calculation gives " + result.exactResult + " years."]
        : ["The Rule of 72 estimates you'd need roughly " + result.ruleOf72Result + "% annual return to double your money in that time; the exact calculation gives " + result.exactResult + "%."];
    },
    explanation: [
      {
        heading: "What the Rule of 72 is",
        paragraphs: [
          "The Rule of 72 is a quick mental-math shortcut for estimating compound growth: divide 72 by an annual interest rate to estimate how many years it takes to double an investment, or divide 72 by a number of years to estimate the annual rate needed to double it in that time.",
          "For example, at 8% annual interest, 72 ÷ 8 = 9 years to roughly double your money, very close to the exact answer of about 9.01 years.",
        ],
      },
      {
        heading: "Why 72, and how accurate is it",
        paragraphs: [
          "72 is used because it has many small divisors (1, 2, 3, 4, 6, 8, 9, 12...), making the mental math easy, and it happens to closely approximate the exact formula ln(2) ÷ ln(1 + r) across the typical range of investment returns (roughly 6% to 10%). Outside that range, the approximation drifts further from the exact answer, which is why this calculator shows both side by side.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is the Rule of 72?",
        answer: "It's most accurate for annual rates between roughly 6% and 10%, where the estimate is typically within a few hundredths of a year or a few tenths of a percentage point of the exact answer. Accuracy decreases at very low or very high rates.",
      },
      {
        question: "Can I use the Rule of 72 for anything other than investments?",
        answer: "Yes, it works for any quantity that grows at a steady compounding rate, including inflation (how long until prices double), population growth, or debt growing at a fixed interest rate.",
      },
      {
        question: "What's the exact formula this calculator compares against?",
        answer: "For years to double: ln(2) ÷ ln(1 + r), where r is the annual rate as a decimal. For required rate: (2^(1/years) − 1) × 100. These come directly from the compound growth formula rather than the Rule of 72 approximation.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "cagr-calculator", "future-value-calculator"],
  },
  {
    slug: "lease-calculator",
    category: "finance",
    title: "Lease Calculator",
    shortDescription: "Calculate monthly car lease payments from price, residual value, money factor and tax.",
    metaDescription: "Free online lease calculator to estimate your monthly car lease payment, including depreciation, finance fee and sales tax.",
    h1: "Lease Calculator",
    intro: "Estimate your monthly car lease payment based on the vehicle price, down payment, residual value, lease term, APR and sales tax.",
    icon: "🚙",
    status: "live",
    inputFields: [
      { key: "vehiclePrice", label: "Vehicle Price (Negotiated)", type: "number", step: 0.01, placeholder: "e.g. 35000" },
      { key: "downPayment", label: "Down Payment / Cap Cost Reduction", type: "number", step: 0.01, defaultValue: 0 },
      { key: "residualValue", label: "Residual Value at Lease End", type: "number", step: 0.01, placeholder: "e.g. 18000" },
      { key: "termMonths", label: "Lease Term (Months)", type: "number", step: 1, placeholder: "e.g. 36" },
      { key: "aprPercent", label: "APR (%)", type: "number", step: 0.01, placeholder: "e.g. 5" },
      { key: "salesTaxPercent", label: "Sales Tax Rate (%)", type: "number", step: 0.01, defaultValue: 0 },
    ],
    resultFields: [
      { key: "monthlyDepreciationFee", label: "Monthly Depreciation Fee" },
      { key: "monthlyFinanceFee", label: "Monthly Finance Fee (Rent Charge)" },
      { key: "basePayment", label: "Base Monthly Payment" },
      { key: "monthlyTax", label: "Monthly Sales Tax" },
      { key: "totalMonthlyPayment", label: "Total Monthly Payment", highlight: true },
      { key: "totalLeaseCost", label: "Total Lease Cost", highlight: true },
      { key: "moneyFactor", label: "Equivalent Money Factor" },
    ],
    calculate: (inputs) => {
      const vehiclePrice = Number(inputs.vehiclePrice);
      const downPayment = Number(inputs.downPayment ?? 0);
      const residualValue = Number(inputs.residualValue);
      const termMonths = Number(inputs.termMonths);
      const aprPercent = Number(inputs.aprPercent);
      const salesTaxPercent = Number(inputs.salesTaxPercent ?? 0);
      const output = calculateLease(vehiclePrice, downPayment, residualValue, termMonths, aprPercent, salesTaxPercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How a lease payment is calculated",
        paragraphs: [
          "A lease payment has two core parts: a depreciation fee, which spreads the loss in value (adjusted capitalized cost minus residual value) evenly over the lease term, and a finance fee (sometimes called a rent charge), which is calculated using a money factor applied to the sum of the adjusted capitalized cost and residual value. Sales tax, where applicable, is then applied to the base payment.",
          "This calculator converts the APR you enter into an equivalent money factor using the standard approximation: money factor = APR ÷ 2400, since money factors (small decimals like 0.00125) are less intuitive to reason about directly than a familiar interest rate.",
        ],
      },
      {
        heading: "What residual value means",
        paragraphs: [
          "Residual value is the vehicle's estimated worth at the end of the lease, set by the leasing company based on expected depreciation. A higher residual value means less depreciation to pay for over the lease, generally resulting in a lower monthly payment, though it also means a higher price if you choose to buy the vehicle at lease end.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a money factor?",
        answer: "A money factor is the lease equivalent of an interest rate, expressed as a small decimal (like 0.00125) rather than a percentage. Multiplying a money factor by 2400 gives you the approximate equivalent APR, and this calculator does that conversion in reverse from the APR you enter.",
      },
      {
        question: "Is sales tax always calculated on the monthly payment?",
        answer: "It varies by location. Many US states tax each monthly lease payment as it's made, which is what this calculator assumes, while others tax the full vehicle price upfront. Check your local rules if you want a fully precise figure.",
      },
      {
        question: "Why does a lower residual value increase my payment?",
        answer: "A lower residual value means the vehicle is expected to depreciate more over the lease term, and that depreciation is what you're paying for through the monthly depreciation fee, so more depreciation means a higher payment.",
      },
    ],
    relatedSlugs: ["auto-loan-calculator", "loan-calculator", "amortization-schedule-calculator"],
  },
  {
    slug: "student-loan-calculator",
    category: "finance",
    title: "Student Loan Calculator",
    shortDescription: "Calculate student loan payments, including grace period interest capitalization.",
    metaDescription: "Free online student loan calculator to estimate your monthly payment and total interest, including interest that accrues and capitalizes during a grace period.",
    h1: "Student Loan Calculator",
    intro: "Calculate your monthly student loan payment and total interest cost, accounting for interest that may accrue and capitalize during a grace period before repayment begins.",
    icon: "🎓",
    status: "live",
    inputFields: [
      { key: "loanBalance", label: "Loan Balance", type: "number", step: 0.01, placeholder: "e.g. 30000" },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 5.5" },
      { key: "termYears", label: "Repayment Term (Years)", type: "number", step: 0.5, placeholder: "e.g. 10" },
      { key: "gracePeriodMonths", label: "Grace Period (Months, optional)", type: "number", step: 1, defaultValue: 0 },
      {
        key: "loanType",
        label: "Loan Type",
        type: "select",
        options: [
          { label: "Unsubsidized (interest accrues during grace period)", value: "unsubsidized" },
          { label: "Subsidized (no interest during grace period)", value: "subsidized" },
        ],
      },
    ],
    resultFields: [
      { key: "capitalizedInterest", label: "Interest Accrued During Grace Period" },
      { key: "balanceAtRepayment", label: "Balance When Repayment Begins" },
      { key: "monthlyPayment", label: "Monthly Payment", highlight: true },
      { key: "totalInterest", label: "Total Interest (Lifetime)", highlight: true },
      { key: "totalRepayment", label: "Total Repayment" },
    ],
    calculate: (inputs) => {
      const loanBalance = Number(inputs.loanBalance);
      const annualRate = Number(inputs.annualRate);
      const termYears = Number(inputs.termYears);
      const gracePeriodMonths = Number(inputs.gracePeriodMonths ?? 0);
      const interestAccruesDuringGrace = String(inputs.loanType) !== "subsidized";
      const output = calculateStudentLoan(loanBalance, annualRate, termYears, gracePeriodMonths, interestAccruesDuringGrace);
      return { ...output };
    },
    explanation: [
      {
        heading: "How grace period interest capitalization works",
        paragraphs: [
          "Many student loans include a grace period, often 6 months after graduation, before regular repayment begins. On unsubsidized loans, interest keeps accruing during this period, and once repayment starts, that accrued interest is capitalized, meaning it's added to the principal balance, so you then pay interest on a larger amount going forward. Subsidized loans don't accrue interest during the grace period, so the balance is unchanged when repayment begins.",
          "After capitalization, this calculator applies the standard amortized loan payment formula to the resulting balance over your chosen repayment term.",
        ],
      },
      {
        heading: "Why capitalized interest matters",
        paragraphs: [
          "Because capitalized interest becomes part of the principal, it increases the total interest you'll pay over the life of the loan, above and beyond what you'd pay if the loan started accruing interest only once repayment began. This is why unsubsidized loans generally cost more in total interest than subsidized loans of the same size and rate.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between subsidized and unsubsidized loans?",
        answer: "Subsidized federal student loans don't accrue interest while you're in school or during the grace period, the government covers it. Unsubsidized loans accrue interest the entire time, including during the grace period, and that interest capitalizes into your balance once repayment begins.",
      },
      {
        question: "What if I have no grace period?",
        answer: "Leave the grace period at 0 months, and this calculator will simply run the standard amortized payment formula on your original loan balance with no capitalized interest added.",
      },
      {
        question: "Does this account for income-driven repayment plans?",
        answer: "No, this calculator assumes a standard fixed monthly payment over your chosen term. Income-driven repayment plans adjust your payment based on income and family size, which follows different math entirely.",
      },
    ],
    relatedSlugs: ["loan-calculator", "amortization-schedule-calculator", "extra-payment-calculator"],
  },
  {
    slug: "401k-calculator",
    category: "finance",
    title: "401(k) Calculator",
    shortDescription: "Project your 401(k) balance at retirement, including employer match and salary growth.",
    metaDescription: "Free online 401(k) calculator to project your retirement balance based on your salary, contribution percentage, employer match, and expected investment return.",
    h1: "401(k) Calculator",
    intro: "Project your 401(k) balance at retirement based on your current balance, salary, contribution percentage, employer match, expected annual return, and salary growth.",
    icon: "🏦",
    status: "live",
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
    resultFields: [
      { key: "projectedBalance", label: "Projected Balance at Retirement", highlight: true },
      { key: "totalEmployeeContributions", label: "Total Your Contributions" },
      { key: "totalEmployerContributions", label: "Total Employer Match" },
      { key: "totalGrowth", label: "Total Investment Growth", highlight: true },
    ],
    calculate: (inputs) => {
      const currentAge = Number(inputs.currentAge);
      const retirementAge = Number(inputs.retirementAge);
      const currentBalance = Number(inputs.currentBalance ?? 0);
      const annualSalary = Number(inputs.annualSalary);
      const contributionPercent = Number(inputs.contributionPercent);
      const employerMatchPercent = Number(inputs.employerMatchPercent);
      const employerMatchLimitPercent = Number(inputs.employerMatchLimitPercent);
      const expectedReturn = Number(inputs.expectedReturn);
      const salaryGrowth = Number(inputs.salaryGrowth ?? 0);
      const output = calculate401k(
        currentAge,
        retirementAge,
        currentBalance,
        annualSalary,
        contributionPercent,
        employerMatchPercent,
        employerMatchLimitPercent,
        expectedReturn,
        salaryGrowth
      );
      return { ...output };
    },
    explanation: [
      {
        heading: "How the employer match is calculated",
        paragraphs: [
          "Most employer 401(k) matches work as a percentage of your contribution, up to a cap expressed as a percentage of your salary. For example, \"50% match up to 6% of pay\" means that if you contribute 6% of your salary, your employer adds another 3% (50% of 6%), and if you contribute more than 6%, the employer match still caps out at that same 3%. This calculator applies that exact logic every month, on your salary for that year.",
        ],
      },
      {
        heading: "Why this differs from a generic retirement calculator",
        paragraphs: [
          "A general retirement calculator typically assumes a fixed dollar contribution each month. This calculator instead models contributions as a percentage of salary, which rises each year if you enter salary growth, and adds an employer match on top, projecting month by month rather than using a single closed-form formula, since the match and salary both change over time.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my employer doesn't match contributions?",
        answer: "Set the employer match rate or match limit to 0, and this calculator will project your balance from your own contributions and investment growth alone.",
      },
      {
        question: "Does this account for annual contribution limits?",
        answer: "No, this calculator doesn't cap your contributions at IRS annual limits. If your calculated contribution amount would exceed the current limit, your actual contributions may be capped in practice.",
      },
      {
        question: "Why does salary growth matter for the projection?",
        answer: "Since your contribution and your employer's match are both calculated as a percentage of salary, a rising salary means both grow in dollar terms over time, meaningfully increasing your projected balance compared to assuming a flat salary.",
      },
    ],
    relatedSlugs: ["retirement-calculator", "compound-interest-calculator", "savings-goal-calculator"],
  },
  {
    slug: "roth-ira-calculator",
    category: "finance",
    title: "Roth IRA Calculator",
    shortDescription: "Project your tax-free Roth IRA balance and see its advantage over a taxable account.",
    metaDescription: "Free online Roth IRA calculator to project your tax-free retirement balance, and compare it against an equivalent taxable investment account.",
    h1: "Roth IRA Calculator",
    intro: "Project your Roth IRA balance at retirement based on your current balance, annual contribution, and expected return, and see how much tax-free growth is worth compared to a taxable account.",
    icon: "🌱",
    status: "live",
    inputFields: [
      { key: "currentAge", label: "Current Age", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "retirementAge", label: "Retirement Age", type: "number", step: 1, placeholder: "e.g. 65" },
      { key: "currentBalance", label: "Current Roth IRA Balance", type: "number", step: 0.01, defaultValue: 0 },
      { key: "annualContribution", label: "Annual Contribution", type: "number", step: 0.01, placeholder: "e.g. 7000" },
      { key: "expectedReturn", label: "Expected Annual Return (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
      { key: "comparisonTaxRate", label: "Comparison Tax Rate (%, for taxable account)", type: "number", step: 0.1, defaultValue: 15 },
    ],
    resultFields: [
      { key: "rothBalance", label: "Roth IRA Balance (Tax-Free)", highlight: true },
      { key: "totalContributions", label: "Total Contributions" },
      { key: "totalGrowth", label: "Total Growth" },
      { key: "taxableAccountBalance", label: "Equivalent Taxable Account Balance" },
      { key: "taxFreeAdvantage", label: "Tax-Free Advantage", highlight: true },
    ],
    calculate: (inputs) => {
      const currentAge = Number(inputs.currentAge);
      const retirementAge = Number(inputs.retirementAge);
      const currentBalance = Number(inputs.currentBalance ?? 0);
      const annualContribution = Number(inputs.annualContribution);
      const expectedReturn = Number(inputs.expectedReturn);
      const comparisonTaxRate = Number(inputs.comparisonTaxRate ?? 0);
      const output = calculateRothIra(currentAge, retirementAge, currentBalance, annualContribution, expectedReturn, comparisonTaxRate);
      return { ...output };
    },
    explanation: [
      {
        heading: "Why a Roth IRA grows differently than a taxable account",
        paragraphs: [
          "Roth IRA contributions are made with money you've already paid tax on, but in exchange, all future growth and qualified withdrawals in retirement are completely tax-free. A regular taxable investment or savings account, by contrast, typically owes tax on investment gains along the way, which quietly reduces the amount left to keep compounding.",
          "This calculator projects your Roth IRA balance month by month, and runs a side-by-side simulation of an equivalent taxable account making identical contributions and earning the identical return, but paying tax annually on its gains at the rate you enter. The difference between the two, the 'tax-free advantage', shows concretely what that tax-free treatment is worth in dollar terms by the time you retire.",
        ],
      },
      {
        heading: "A few simplifying assumptions",
        paragraphs: [
          "This calculator doesn't enforce the IRS annual Roth IRA contribution limit, which changes periodically and depends on your income and filing status, so make sure your entered annual contribution reflects your actual allowed limit. It also assumes the taxable comparison account is taxed annually on gains realized that year, a simplification of how many taxable accounts (like a brokerage account you don't actively sell in) actually work in practice.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the real advantage of a Roth IRA over a taxable account?",
        answer: "Both accounts can hold similar investments, but a Roth IRA's growth and qualified withdrawals are entirely tax-free, while a taxable account generally owes tax on dividends, interest and realized gains along the way, which reduces the amount available to keep compounding over time.",
      },
      {
        question: "Does this account for the Roth IRA income limits?",
        answer: "No, Roth IRA eligibility phases out above certain income levels, which vary by filing status and change periodically. Check current IRS rules to confirm you're eligible to contribute the amount you enter.",
      },
      {
        question: "What tax rate should I use for the comparison account?",
        answer: "Use your expected effective tax rate on investment gains and income, which depends on your tax bracket and the mix of dividends, interest and capital gains the comparison account would generate. The default of 15% approximates a common long-term capital gains rate, but adjust it to fit your situation.",
      },
    ],
    relatedSlugs: ["401k-calculator", "compound-interest-calculator", "savings-interest-calculator"],
  },
  {
    slug: "fire-calculator",
    category: "finance",
    title: "FIRE Calculator",
    shortDescription: "Calculate your FIRE number and how many years until you can retire early.",
    metaDescription: "Free online FIRE calculator (Financial Independence, Retire Early) to calculate your FIRE number and how many years it will take to reach it.",
    h1: "FIRE Calculator",
    intro: "Calculate your FIRE (Financial Independence, Retire Early) number based on your annual expenses and withdrawal rate, and see how many years it will take to reach it given your current savings and contributions.",
    icon: "🔥",
    status: "live",
    inputFields: [
      { key: "currentAge", label: "Current Age", type: "number", step: 1, placeholder: "e.g. 28" },
      { key: "currentSavings", label: "Current Investable Savings", type: "number", step: 0.01, defaultValue: 0 },
      { key: "monthlyContribution", label: "Monthly Contribution", type: "number", step: 0.01, placeholder: "e.g. 2000" },
      { key: "expectedReturn", label: "Expected Annual Return (%)", type: "number", step: 0.01, placeholder: "e.g. 7" },
      { key: "annualExpenses", label: "Desired Annual Expenses in Retirement", type: "number", step: 0.01, placeholder: "e.g. 40000" },
      { key: "withdrawalRate", label: "Safe Withdrawal Rate (%)", type: "number", step: 0.1, defaultValue: 4 },
    ],
    resultFields: [
      { key: "fireNumber", label: "Your FIRE Number", highlight: true },
      { key: "yearsToFire", label: "Years to FIRE", highlight: true },
      { key: "ageAtFire", label: "Age at FIRE" },
      { key: "projectedBalanceAtFire", label: "Projected Balance at FIRE" },
      { key: "totalContributions", label: "Total Contributions Along the Way" },
      { key: "totalGrowth", label: "Total Investment Growth" },
    ],
    calculate: (inputs) => {
      const currentAge = Number(inputs.currentAge);
      const currentSavings = Number(inputs.currentSavings ?? 0);
      const monthlyContribution = Number(inputs.monthlyContribution);
      const expectedReturn = Number(inputs.expectedReturn);
      const annualExpenses = Number(inputs.annualExpenses);
      const withdrawalRate = Number(inputs.withdrawalRate ?? 4);
      const output = calculateFire(currentAge, currentSavings, monthlyContribution, expectedReturn, annualExpenses, withdrawalRate);
      return { ...output };
    },
    explanation: [
      {
        heading: "What a FIRE number is and how it's calculated",
        paragraphs: [
          "Your FIRE number is the portfolio size that can sustainably fund your desired annual expenses using a fixed withdrawal rate, commonly 4%, sometimes called the '25x rule' since dividing by 4% is the same as multiplying by 25. The formula is: FIRE Number = Annual Expenses ÷ (Withdrawal Rate ÷ 100).",
          "For example, if you want 40,000 a year in retirement and plan to withdraw 4% annually, your FIRE number is 40,000 ÷ 0.04 = 1,000,000. This calculator then simulates your current savings and monthly contributions growing at your expected return, month by month, until that target is reached.",
        ],
      },
      {
        heading: "Why this differs from a standard retirement calculator",
        paragraphs: [
          "A standard retirement calculator typically asks for a fixed retirement age and tells you the corpus you'd have by then. A FIRE calculator flips the question: it starts from a target amount (based on your actual desired spending) and solves for how long it takes to get there, which may be well before a traditional retirement age, the entire premise behind 'retire early'.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why 4% as a default withdrawal rate?",
        answer: "The 4% rule comes from historical research (the Trinity Study) suggesting a 4% initial withdrawal, adjusted for inflation each year, had a high historical success rate over a 30-year retirement. Some in the FIRE community use a more conservative 3% to 3.5% for longer retirement horizons, since retiring early means the money needs to last longer.",
      },
      {
        question: "What if my FIRE number isn't reachable within 100 years?",
        answer: "This calculator will let you know if that happens, which usually means your savings rate or expected return is too low relative to your target expenses. Try increasing your monthly contribution, lowering your desired annual expenses, or revisiting your expected return assumption.",
      },
      {
        question: "Does this account for taxes or investment fees?",
        answer: "No, this calculator uses your entered expected annual return as a net figure. If your actual returns will be reduced by fees or taxes on gains, use a lower expected return to get a more realistic estimate.",
      },
    ],
    relatedSlugs: ["retirement-calculator", "401k-calculator", "savings-goal-calculator"],
  },
  {
    slug: "inflation-adjusted-salary-calculator",
    category: "finance",
    title: "Inflation Adjusted Salary Calculator",
    shortDescription: "See what an old salary is worth today, and whether a raise actually outpaced inflation.",
    metaDescription: "Free online inflation adjusted salary calculator to see what a past salary is worth in today's dollars, and whether a raise kept pace with inflation.",
    h1: "Inflation Adjusted Salary Calculator",
    intro: "Find out what an old salary is worth in today's dollars after inflation, and, if you enter a new salary, see whether your raise actually increased your purchasing power or just kept pace with rising prices.",
    icon: "📉",
    status: "live",
    inputFields: [
      { key: "oldSalary", label: "Old Salary", type: "number", step: 0.01, placeholder: "e.g. 50000" },
      { key: "newSalary", label: "New Salary (optional, to compare)", type: "number", step: 0.01, defaultValue: 0 },
      { key: "years", label: "Years Elapsed", type: "number", step: 0.5, placeholder: "e.g. 5" },
      { key: "inflationRate", label: "Average Annual Inflation Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 3.5" },
    ],
    resultFields: [
      { key: "inflationAdjustedOldSalary", label: "Old Salary in Today's Dollars", highlight: true },
      { key: "purchasingPowerChangePercent", label: "Purchasing Power Change Needed", unit: "%" },
      { key: "nominalChangePercent", label: "Nominal Raise (Not Inflation-Adjusted)" },
      { key: "realChangePercent", label: "Real Raise (Inflation-Adjusted)", highlight: true },
    ],
    calculate: (inputs) => {
      const oldSalary = Number(inputs.oldSalary);
      const newSalary = Number(inputs.newSalary ?? 0);
      const years = Number(inputs.years);
      const inflationRate = Number(inputs.inflationRate);
      const output = calculateInflationAdjustedSalary(oldSalary, newSalary, years, inflationRate);
      return { ...output };
    },
    explanation: [
      {
        heading: "Old salary in today's dollars",
        paragraphs: [
          "To find out what a past salary is worth today, this calculator inflates it forward: Inflation-Adjusted Salary = Old Salary × (1 + Inflation Rate ÷ 100)^Years. This tells you the salary you'd need today to have the same purchasing power the old salary had back then.",
        ],
      },
      {
        heading: "Real raise vs nominal raise",
        paragraphs: [
          "If you also enter a new (current) salary, this calculator splits your raise into two figures. The nominal change is the plain percentage difference between your old and new salary, the number that shows up on paper. The real change compares your new salary against the inflation-adjusted old salary instead, telling you whether your raise actually increased what you can afford to buy, or merely kept up with (or fell behind) rising prices.",
          "For example, a 20% nominal raise sounds solid, but if inflation over the same period was also close to 20%, your real, purchasing-power-adjusted raise could be close to zero.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is my real raise smaller than my nominal raise?",
        answer: "Because inflation raises the cost of everything you buy over the same period. Your nominal raise is the plain percentage increase in your paycheck, while your real raise accounts for the fact that money from your old salary now buys less than it used to, giving a more accurate picture of whether you're actually better off.",
      },
      {
        question: "What inflation rate should I use?",
        answer: "A common approach is to use the average annual inflation rate (such as CPI) for your country over the relevant period, available from your national statistics agency. For a rough estimate, historical long-run averages are often in the 2% to 4% range for many developed economies, though this varies significantly by country and time period.",
      },
      {
        question: "Do I need to enter a new salary?",
        answer: "No, it's optional. Leave it blank or at 0 to simply see what your old salary is worth in today's dollars, without comparing it to a specific new salary.",
      },
    ],
    relatedSlugs: ["inflation-calculator", "salary-calculator", "cagr-calculator"],
  },
  {
    slug: "savings-interest-calculator",
    category: "finance",
    title: "Savings Interest Calculator",
    shortDescription: "Project your savings account balance including monthly deposits and tax on interest earned.",
    metaDescription: "Free online savings interest calculator to project your savings account balance over time, including monthly deposits and tax owed on interest earned.",
    h1: "Savings Interest Calculator",
    intro: "Project how your savings account balance grows over time with monthly deposits and compound interest, including an optional tax rate applied to interest earned each year.",
    icon: "💵",
    status: "live",
    inputFields: [
      { key: "initialDeposit", label: "Initial Deposit", type: "number", step: 0.01, placeholder: "e.g. 5000" },
      { key: "monthlyDeposit", label: "Monthly Deposit (optional)", type: "number", step: 0.01, defaultValue: 0 },
      { key: "annualRate", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 4.5" },
      { key: "years", label: "Time Period (Years)", type: "number", step: 0.5, placeholder: "e.g. 5" },
      { key: "taxRate", label: "Tax Rate on Interest (%, optional)", type: "number", step: 0.1, defaultValue: 0 },
    ],
    resultFields: [
      { key: "endingBalance", label: "Ending Balance", highlight: true },
      { key: "totalContributions", label: "Total Contributions" },
      { key: "totalInterestEarned", label: "Total Interest Earned (Before Tax)" },
      { key: "totalTaxPaid", label: "Total Tax Paid on Interest" },
      { key: "netInterestAfterTax", label: "Net Interest (After Tax)", highlight: true },
    ],
    calculate: (inputs) => {
      const initialDeposit = Number(inputs.initialDeposit);
      const monthlyDeposit = Number(inputs.monthlyDeposit ?? 0);
      const annualRate = Number(inputs.annualRate);
      const years = Number(inputs.years);
      const taxRate = Number(inputs.taxRate ?? 0);
      const output = calculateSavingsInterest(initialDeposit, monthlyDeposit, annualRate, years, taxRate);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this models a real savings account",
        paragraphs: [
          "This calculator compounds interest monthly on your initial deposit plus any ongoing monthly deposits, similar to a typical high-yield savings account or CD. What sets it apart from a plain compound interest projection is the optional tax rate: interest earned in a regular taxable savings account is generally taxed as ordinary income in the year it's earned, unlike growth inside a tax-advantaged retirement account, so this calculator applies your tax rate to the interest earned each year and reduces the balance accordingly before it continues compounding.",
        ],
      },
      {
        heading: "Why after-tax interest matters",
        paragraphs: [
          "The 'net interest after tax' figure is the more realistic number for comparing a taxable savings account to tax-advantaged alternatives, since the advertised interest rate on a savings account is always pre-tax. If you're deciding between a taxable savings account and something like a Roth IRA for money you don't need immediate access to, comparing after-tax outcomes gives a fairer picture.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to enter a tax rate?",
        answer: "No, it's optional. Leave it at 0 to see a straightforward pre-tax compound interest projection. Enter your marginal tax rate on interest income if you want to see the more realistic after-tax outcome.",
      },
      {
        question: "How is the tax actually applied?",
        answer: "Once a year, this calculator checks how much interest was earned since the last tax calculation, applies your tax rate to that amount, and deducts the tax owed from the balance, a simplified assumption that tax is paid directly out of the account rather than from other funds.",
      },
      {
        question: "How is this different from the Compound Interest Calculator?",
        answer: "The Compound Interest Calculator projects growth on a single lump sum with no ongoing deposits and no tax. This calculator adds both: optional monthly deposits and an optional annual tax on interest earned, better reflecting an actual savings account you contribute to over time.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "apy-calculator", "roth-ira-calculator"],
  },
  {
    slug: "annual-income-calculator",
    category: "finance",
    title: "Annual Income Calculator",
    shortDescription: "Convert a pay rate at any frequency into its hourly, weekly, monthly and annual equivalents.",
    metaDescription: "Free online annual income calculator to convert an hourly, daily, weekly, biweekly, monthly or annual pay rate into all other pay frequency equivalents.",
    h1: "Annual Income Calculator",
    intro: "Convert a pay rate at any frequency, hourly, daily, weekly, biweekly, semi-monthly, monthly or annual, into its equivalent at every other frequency.",
    icon: "📅",
    status: "live",
    inputFields: [
      { key: "payRate", label: "Pay Rate", type: "number", step: 0.01, placeholder: "e.g. 25" },
      {
        key: "frequency",
        label: "Pay Frequency",
        type: "select",
        options: [
          { label: "Hourly", value: "hourly" },
          { label: "Daily", value: "daily" },
          { label: "Weekly", value: "weekly" },
          { label: "Biweekly", value: "biweekly" },
          { label: "Semi-Monthly", value: "semimonthly" },
          { label: "Monthly", value: "monthly" },
          { label: "Annually", value: "annually" },
        ],
      },
      { key: "hoursPerWeek", label: "Hours per Week", type: "number", step: 1, defaultValue: 40 },
      { key: "daysPerWeek", label: "Days per Week", type: "number", step: 1, defaultValue: 5 },
    ],
    resultFields: [
      { key: "hourly", label: "Hourly" },
      { key: "daily", label: "Daily" },
      { key: "weekly", label: "Weekly" },
      { key: "biweekly", label: "Biweekly" },
      { key: "semiMonthly", label: "Semi-Monthly" },
      { key: "monthly", label: "Monthly" },
      { key: "annual", label: "Annual", highlight: true },
    ],
    calculate: (inputs) => {
      const payRate = Number(inputs.payRate);
      const frequency = String(inputs.frequency) as PayFrequency;
      const hoursPerWeek = Number(inputs.hoursPerWeek ?? 40);
      const daysPerWeek = Number(inputs.daysPerWeek ?? 5);
      const output = calculateAnnualIncome(payRate, frequency, hoursPerWeek, daysPerWeek);
      return { ...output };
    },
    explanation: [
      {
        heading: "How pay frequency conversion works",
        paragraphs: [
          "This calculator first converts whatever pay rate and frequency you enter into a weekly figure, since a week converts cleanly to a year (exactly 52 weeks), then expands that weekly figure back out to every other frequency. Converting to hourly or daily uses your entered hours per week or days per week, since those aren't fixed the way weeks-per-year is.",
          "Semi-monthly (paid twice a month, 24 pay periods a year) is calculated from the annual figure directly (annual ÷ 24) rather than from weekly, since semi-monthly periods don't line up evenly with weeks, an important distinction from biweekly (paid every two weeks, 26 pay periods a year), which is often confused with semi-monthly but is a different schedule entirely.",
        ],
      },
      {
        heading: "Biweekly vs semi-monthly: a common mix-up",
        paragraphs: [
          "Biweekly means every 2 weeks, 26 paychecks a year, and occasionally 27 in a year with an extra pay period. Semi-monthly means twice a month, always 24 paychecks a year, typically on fixed dates like the 15th and the last day of the month. Because 26 and 24 are different numbers, the same annual salary produces a different per-paycheck amount under each schedule, which is why this calculator treats them as distinct frequencies rather than treating semi-monthly as 'half of biweekly'.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do I need to enter hours per week and days per week?",
        answer: "Converting to or from an hourly or daily rate depends on how many hours or days you actually work in a week, which varies by job, so this calculator asks for those instead of assuming a fixed number.",
      },
      {
        question: "Is this the same as the Hourly Wage Calculator?",
        answer: "No, this calculator converts a known pay rate across frequencies assuming a standard schedule with no overtime. The Hourly Wage Calculator instead builds up a paycheck from an hourly rate and actual hours worked, including overtime pay at a higher rate.",
      },
      {
        question: "Does this account for unpaid time off or holidays?",
        answer: "No, it assumes you're paid for 52 weeks a year at the schedule you enter. If you have unpaid leave, adjust your inputs accordingly for a more accurate annual figure.",
      },
    ],
    relatedSlugs: ["hourly-wage-calculator", "salary-calculator", "commission-calculator"],
  },
  {
    slug: "hourly-wage-calculator",
    category: "finance",
    title: "Hourly Wage Calculator",
    shortDescription: "Calculate gross pay from an hourly rate, including regular and overtime hours.",
    metaDescription: "Free online hourly wage calculator to calculate weekly and annual gross pay from an hourly rate, including overtime hours at a higher pay rate.",
    h1: "Hourly Wage Calculator",
    intro: "Calculate your gross weekly and annual pay from an hourly rate, including overtime hours paid at a higher rate.",
    icon: "⏰",
    status: "live",
    inputFields: [
      { key: "hourlyRate", label: "Hourly Rate", type: "number", step: 0.01, placeholder: "e.g. 22" },
      { key: "regularHours", label: "Regular Hours per Week", type: "number", step: 0.5, defaultValue: 40 },
      { key: "overtimeHours", label: "Overtime Hours per Week (optional)", type: "number", step: 0.5, defaultValue: 0 },
      { key: "overtimeMultiplier", label: "Overtime Multiplier", type: "number", step: 0.1, defaultValue: 1.5 },
      { key: "weeksPerYear", label: "Paid Weeks per Year", type: "number", step: 1, defaultValue: 52 },
    ],
    resultFields: [
      { key: "regularWeeklyPay", label: "Regular Weekly Pay" },
      { key: "overtimeWeeklyPay", label: "Overtime Weekly Pay" },
      { key: "totalWeeklyPay", label: "Total Weekly Pay", highlight: true },
      { key: "annualPay", label: "Annual Pay", highlight: true },
      { key: "effectiveHourlyRate", label: "Effective Hourly Rate (Blended)" },
    ],
    calculate: (inputs) => {
      const hourlyRate = Number(inputs.hourlyRate);
      const regularHours = Number(inputs.regularHours ?? 40);
      const overtimeHours = Number(inputs.overtimeHours ?? 0);
      const overtimeMultiplier = Number(inputs.overtimeMultiplier ?? 1.5);
      const weeksPerYear = Number(inputs.weeksPerYear ?? 52);
      const output = calculateHourlyWage(hourlyRate, regularHours, overtimeHours, overtimeMultiplier, weeksPerYear);
      return { ...output };
    },
    explanation: [
      {
        heading: "How overtime pay is calculated",
        paragraphs: [
          "Overtime pay is calculated by applying a multiplier, commonly 1.5x ('time and a half'), sometimes 2x ('double time'), to your regular hourly rate for hours worked beyond your standard schedule. This calculator adds regular pay (hourly rate × regular hours) and overtime pay (hourly rate × multiplier × overtime hours) to get your total weekly pay, then multiplies by your paid weeks per year for an annual figure.",
        ],
      },
      {
        heading: "What the effective hourly rate shows",
        paragraphs: [
          "The effective hourly rate blends your regular and overtime pay across all hours worked that week, giving you a single average rate. This number is naturally higher than your base hourly rate whenever you work any overtime, and it's a useful figure for comparing total compensation against a job with a different hourly rate but no overtime.",
        ],
      },
    ],
    faqs: [
      {
        question: "What overtime multiplier should I use?",
        answer: "1.5x ('time and a half') is the most common overtime rate in many countries for hours beyond a standard threshold (often 40 hours a week). Some situations, like certain holidays or hours beyond a higher threshold, may use 2x ('double time'). Check your local labor law or employment contract for the rate that applies to you.",
      },
      {
        question: "What if I don't work any overtime?",
        answer: "Leave overtime hours at 0, and this calculator will simply show your regular pay projected weekly and annually, with the effective hourly rate equal to your base hourly rate.",
      },
      {
        question: "Why is paid weeks per year adjustable?",
        answer: "Not everyone is paid for a full 52 weeks, unpaid leave, seasonal work, or specific contract terms can mean fewer paid weeks. Adjust this figure to get an annual estimate that matches your actual work schedule.",
      },
    ],
    relatedSlugs: ["annual-income-calculator", "salary-calculator", "commission-calculator"],
  },
  {
    slug: "commission-calculator",
    category: "finance",
    title: "Commission Calculator",
    shortDescription: "Calculate sales commission, including an optional bonus rate above a quota threshold.",
    metaDescription: "Free online commission calculator to calculate total sales commission and earnings, including a base salary and an optional accelerator bonus rate above a quota.",
    h1: "Commission Calculator",
    intro: "Calculate your total commission and earnings from sales, including an optional base salary and an accelerator bonus rate that applies to sales above a quota threshold.",
    icon: "🤝",
    status: "live",
    inputFields: [
      { key: "salesAmount", label: "Total Sales Amount", type: "number", step: 0.01, placeholder: "e.g. 50000" },
      { key: "commissionRate", label: "Commission Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 5" },
      { key: "baseSalary", label: "Base Salary (optional)", type: "number", step: 0.01, defaultValue: 0 },
      { key: "bonusThreshold", label: "Bonus Quota Threshold (optional)", type: "number", step: 0.01, defaultValue: 0 },
      { key: "bonusRate", label: "Bonus Rate Above Threshold (%, optional)", type: "number", step: 0.01, defaultValue: 0 },
    ],
    resultFields: [
      { key: "baseCommission", label: "Base Commission" },
      { key: "bonusCommission", label: "Bonus Commission" },
      { key: "totalCommission", label: "Total Commission", highlight: true },
      { key: "totalEarnings", label: "Total Earnings (Salary + Commission)", highlight: true },
    ],
    calculate: (inputs) => {
      const salesAmount = Number(inputs.salesAmount);
      const commissionRate = Number(inputs.commissionRate);
      const baseSalary = Number(inputs.baseSalary ?? 0);
      const bonusThreshold = Number(inputs.bonusThreshold ?? 0);
      const bonusRate = Number(inputs.bonusRate ?? 0);
      const output = calculateCommission(salesAmount, commissionRate, baseSalary, bonusThreshold, bonusRate);
      return { ...output };
    },
    explanation: [
      {
        heading: "How tiered commission with a bonus threshold works",
        paragraphs: [
          "The base commission is simply your total sales multiplied by your commission rate. If you set a bonus quota threshold and a bonus rate, this calculator also applies that higher bonus rate, but only to the portion of your sales that exceeds the threshold, not to your entire sales total. This mirrors common 'accelerator' commission structures, where exceeding a quota is rewarded at a richer rate on just the excess.",
          "For example, with 5% commission on 50,000 in sales, plus a 10% bonus rate on anything above a 40,000 threshold: base commission is 2,500 (5% of 50,000), and bonus commission is 1,000 (10% of the 10,000 above the threshold), for a total commission of 3,500.",
        ],
      },
      {
        heading: "Base salary plus commission",
        paragraphs: [
          "Many sales roles combine a base salary with commission rather than commission alone. This calculator adds your optional base salary to your total commission to show total earnings for the period, useful for comparing a base-plus-commission offer against a straight commission or salary-only role.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to set a bonus threshold?",
        answer: "No, it's optional. Leave the bonus threshold and bonus rate at 0 to calculate a simple flat-rate commission with no accelerator tier.",
      },
      {
        question: "Does the bonus rate apply to all sales or just the amount above the threshold?",
        answer: "Only to the amount above the threshold. Sales up to the threshold earn the base commission rate; only the portion exceeding the threshold earns the additional bonus rate.",
      },
      {
        question: "Can I model multiple tiers with this calculator?",
        answer: "This calculator supports one threshold and one bonus rate. For commission structures with three or more tiers, you'd need to calculate each tier's contribution separately and add them together.",
      },
    ],
    relatedSlugs: ["hourly-wage-calculator", "annual-income-calculator", "salary-calculator"],
  },
  {
    slug: "lean-body-mass-calculator",
    category: "health",
    title: "Lean Body Mass Calculator",
    shortDescription: "Estimate your lean body mass and fat mass from height and weight.",
    metaDescription: "Free online lean body mass calculator using the Boer formula to estimate your fat-free body mass from height and weight.",
    h1: "Lean Body Mass Calculator",
    intro: "Estimate your lean body mass, the weight of everything in your body except fat, using the widely used Boer formula.",
    icon: "💪",
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
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
    ],
    resultFields: [
      { key: "leanBodyMass", label: "Lean Body Mass", unit: "kg", highlight: true },
      { key: "fatMass", label: "Estimated Fat Mass", unit: "kg" },
      { key: "leanMassPercent", label: "Lean Mass", unit: "%" },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as LbmGender;
      const heightCm = Number(inputs.heightCm);
      const weightKg = Number(inputs.weightKg);
      const output = calculateLeanBodyMass(gender, heightCm, weightKg);
      return { ...output };
    },
    explanation: [
      {
        heading: "What lean body mass is and how it's calculated",
        paragraphs: [
          "Lean body mass (LBM) is your total body weight minus fat mass, everything else, muscle, bone, organs, connective tissue and water. This calculator uses the Boer formula, one of the most widely cited equations for estimating LBM from just height and weight, without needing a direct body fat measurement: for men, LBM = 0.407 × weight (kg) + 0.267 × height (cm) − 19.2, and for women, LBM = 0.252 × weight (kg) + 0.473 × height (cm) − 48.3.",
        ],
      },
      {
        heading: "Why lean body mass matters",
        paragraphs: [
          "Lean body mass is often used as a more accurate basis than total body weight for things like protein intake recommendations, medication dosing, and tracking body composition changes during training, since two people at the same weight can have very different amounts of muscle versus fat, and it's often the lean mass that's more relevant to these calculations.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is a formula-based lean body mass estimate?",
        answer: "Formula-based estimates like the Boer formula are reasonably accurate for most people but are still estimates, not direct measurements. Methods like DEXA scans or hydrostatic weighing give more precise results if you need clinical-grade accuracy.",
      },
      {
        question: "Why does this calculator ask for gender?",
        answer: "Men and women have different average proportions of muscle, bone density and body water, so the Boer formula uses different coefficients for each to produce more accurate estimates.",
      },
      {
        question: "How is this different from the Body Fat Calculator?",
        answer: "The Body Fat Calculator estimates your body fat percentage directly from circumference measurements (neck, waist, hip). This calculator estimates lean mass from height and weight alone, using a different formula that doesn't require any circumference measurements.",
      },
    ],
    relatedSlugs: ["body-fat-calculator", "bmi-calculator", "protein-calculator"],
  },
  {
    slug: "body-surface-area-calculator",
    category: "health",
    title: "Body Surface Area Calculator",
    shortDescription: "Calculate body surface area (BSA) using the Mosteller and DuBois formulas.",
    metaDescription: "Free online body surface area (BSA) calculator using the Mosteller and DuBois formulas, commonly used for medication dosing and clinical calculations.",
    h1: "Body Surface Area Calculator",
    intro: "Calculate your body surface area (BSA) using both the Mosteller and DuBois formulas, commonly used in clinical settings for medication dosing.",
    icon: "🧍",
    status: "live",
    inputFields: [
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
    ],
    resultFields: [
      { key: "bsaMosteller", label: "BSA (Mosteller Formula)", unit: "m²", highlight: true },
      { key: "bsaDuBois", label: "BSA (DuBois Formula)", unit: "m²" },
    ],
    calculate: (inputs) => {
      const heightCm = Number(inputs.heightCm);
      const weightKg = Number(inputs.weightKg);
      const output = calculateBodySurfaceArea(heightCm, weightKg);
      return { ...output };
    },
    explanation: [
      {
        heading: "Why body surface area is calculated",
        paragraphs: [
          "Body Surface Area (BSA) estimates the total surface area of a person's body and is used mainly in clinical settings, most notably for dosing certain medications, especially chemotherapy drugs, proportionally to body size rather than weight alone, since BSA correlates well with metabolic processes like drug clearance.",
        ],
      },
      {
        heading: "Mosteller vs DuBois formula",
        paragraphs: [
          "The Mosteller formula, BSA = √((height (cm) × weight (kg)) ÷ 3600), is simpler to compute and is commonly the default in modern clinical calculators. The DuBois & DuBois formula, BSA = 0.007184 × height (cm)^0.725 × weight (kg)^0.425, dates back to 1916 and remains widely referenced. The two formulas typically produce very similar results, within a few percent of each other.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which formula should I use, Mosteller or DuBois?",
        answer: "Both are widely accepted and produce similar results. Mosteller is simpler and commonly used as a default in clinical software, while DuBois is the older, historically referenced formula. For any actual medical dosing decision, follow what your healthcare provider or institution specifies.",
      },
      {
        question: "Is BSA the same as skin surface area measured directly?",
        answer: "No, both formulas are mathematical estimates derived from height and weight, not direct measurements of skin surface area, which would require far more complex methods to measure precisely.",
      },
      {
        question: "Is this calculator a substitute for medical dosing calculations?",
        answer: "No, this tool is for general informational purposes only. Any medication dosing based on BSA should always be calculated and verified by a qualified healthcare professional.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "lean-body-mass-calculator", "ideal-weight-calculator"],
  },
  {
    slug: "waist-to-hip-ratio-calculator",
    category: "health",
    title: "Waist-to-Hip Ratio Calculator",
    shortDescription: "Calculate your waist-to-hip ratio and WHO-based health risk category.",
    metaDescription: "Free online waist-to-hip ratio calculator to assess body fat distribution and health risk category based on WHO guidelines.",
    h1: "Waist-to-Hip Ratio Calculator",
    intro: "Calculate your waist-to-hip ratio (WHR) and see your health risk category based on World Health Organization guidelines.",
    icon: "📏",
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
      { key: "waistCm", label: "Waist Circumference (cm)", type: "number", step: 0.1, placeholder: "e.g. 85" },
      { key: "hipCm", label: "Hip Circumference (cm)", type: "number", step: 0.1, placeholder: "e.g. 100" },
    ],
    resultFields: [
      { key: "ratio", label: "Waist-to-Hip Ratio", highlight: true },
      { key: "riskCategory", label: "Health Risk Category", highlight: true },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as WhrGender;
      const waistCm = Number(inputs.waistCm);
      const hipCm = Number(inputs.hipCm);
      const output = calculateWaistToHipRatio(gender, waistCm, hipCm);
      return { ...output };
    },
    explanation: [
      {
        heading: "How waist-to-hip ratio is calculated",
        paragraphs: [
          "Waist-to-hip ratio (WHR) is simply your waist circumference divided by your hip circumference, both measured in the same units. It's a screening measure recognized by the World Health Organization for assessing health risk associated with fat distribution, since abdominal ('apple-shaped') fat is more strongly linked to cardiovascular and metabolic risk than fat carried on the hips and thighs ('pear-shaped').",
          "This calculator uses commonly cited WHO risk thresholds: for men, below 0.90 is low risk, 0.90 to 0.99 is moderate risk, and 1.00 or above is high risk. For women, below 0.80 is low risk, 0.80 to 0.84 is moderate risk, and 0.85 or above is high risk.",
        ],
      },
      {
        heading: "Why WHR is used alongside, not instead of, BMI",
        paragraphs: [
          "BMI doesn't capture where fat is distributed on the body, two people with identical BMI can have very different WHR, and therefore very different associated health risk. WHR is best used as a complementary measure alongside BMI, not a replacement for it, since each captures something the other misses.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does fat distribution matter, not just total body fat?",
        answer: "Abdominal fat surrounds internal organs and is more metabolically active in ways linked to insulin resistance, inflammation and cardiovascular risk, compared to fat stored on the hips and thighs. This is why two people with the same total body fat can have different health risk profiles depending on where that fat is carried.",
      },
      {
        question: "How should I measure my waist and hips accurately?",
        answer: "Measure your waist at the narrowest point, usually just above the belly button, and your hips at the widest point around your buttocks, with a tape measure snug but not compressing the skin, ideally without clothing bulk affecting the measurement.",
      },
      {
        question: "Is this different from the Waist-to-Height Ratio Calculator?",
        answer: "Yes, waist-to-hip ratio compares your waist to your hip circumference, while waist-to-height ratio compares your waist to your height. Both are fat-distribution screening measures, but they use different reference points and different risk thresholds.",
      },
    ],
    relatedSlugs: ["waist-to-height-ratio-calculator", "bmi-calculator", "body-fat-calculator"],
  },
  {
    slug: "waist-to-height-ratio-calculator",
    category: "health",
    title: "Waist-to-Height Ratio Calculator",
    shortDescription: "Calculate your waist-to-height ratio, a simple screening measure for health risk.",
    metaDescription: "Free online waist-to-height ratio calculator, a simple health risk screening measure based on the idea of keeping your waist to less than half your height.",
    h1: "Waist-to-Height Ratio Calculator",
    intro: "Calculate your waist-to-height ratio (WHtR), a simple screening measure often summarized as 'keep your waist to less than half your height'.",
    icon: "📐",
    status: "live",
    inputFields: [
      { key: "waistCm", label: "Waist Circumference (cm)", type: "number", step: 0.1, placeholder: "e.g. 85" },
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 175" },
    ],
    resultFields: [
      { key: "ratio", label: "Waist-to-Height Ratio", highlight: true },
      { key: "category", label: "Category", highlight: true },
    ],
    calculate: (inputs) => {
      const waistCm = Number(inputs.waistCm);
      const heightCm = Number(inputs.heightCm);
      const output = calculateWaistToHeightRatio(waistCm, heightCm);
      return { ...output };
    },
    explanation: [
      {
        heading: "How waist-to-height ratio is calculated",
        paragraphs: [
          "Waist-to-height ratio (WHtR) is your waist circumference divided by your height, in the same units. It's often summarized with the simple rule of thumb 'keep your waist circumference to less than half your height', equivalent to a ratio below 0.5. This calculator uses commonly cited bands: below 0.40 suggests possible underweight, 0.40 to 0.49 is generally considered healthy, 0.50 to 0.59 indicates increased risk, and 0.60 or above indicates high risk.",
        ],
      },
      {
        heading: "Why some research favors WHtR over BMI",
        paragraphs: [
          "Because WHtR directly reflects abdominal fat relative to body size, some studies suggest it may be a better predictor of cardiovascular and metabolic risk than BMI, and it applies a single simple threshold (0.5) reasonably consistently across different heights, unlike BMI, which uses more complex category boundaries.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a ratio of exactly 0.5 the target to aim for?",
        answer: "The commonly cited guidance is to stay below 0.5 (waist less than half your height) as a general target for reduced health risk, though this is a population-level guideline, not a precise medical threshold for any one individual.",
      },
      {
        question: "How is this different from waist-to-hip ratio?",
        answer: "Waist-to-height ratio compares your waist to your height, while waist-to-hip ratio compares your waist to your hip circumference. Both screen for abdominal-fat-related health risk, but use different reference measurements and different risk bands.",
      },
      {
        question: "Does this replace a doctor's assessment?",
        answer: "No, this is a general screening tool. Speak with a healthcare professional for a full assessment of your individual health risk, especially if you have other risk factors or existing health conditions.",
      },
    ],
    relatedSlugs: ["waist-to-hip-ratio-calculator", "bmi-calculator", "body-fat-calculator"],
  },
  {
    slug: "army-body-fat-calculator",
    category: "health",
    title: "Army Body Fat Calculator",
    shortDescription: "Estimate body fat percentage using the military tape-test formula and check it against Army standards.",
    metaDescription: "Free online Army body fat calculator using the official U.S. military circumference-based tape test formula, checked against age-based Army body fat standards.",
    h1: "Army Body Fat Calculator",
    intro: "Estimate your body fat percentage using the U.S. military's circumference-based tape test formula, and check it against age-based Army body fat standards.",
    icon: "🎖️",
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
      { key: "age", label: "Age (years)", type: "number", step: 1, placeholder: "e.g. 25" },
      { key: "heightCm", label: "Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 178" },
      { key: "neckCm", label: "Neck Circumference (cm)", type: "number", step: 0.1, placeholder: "e.g. 38" },
      { key: "waistCm", label: "Waist Circumference (cm)", type: "number", step: 0.1, placeholder: "e.g. 85" },
      { key: "hipCm", label: "Hip Circumference (cm, women only)", type: "number", step: 0.1, defaultValue: 0 },
    ],
    resultFields: [
      { key: "bodyFatPercent", label: "Estimated Body Fat", unit: "%", highlight: true },
      { key: "maxAllowedPercent", label: "Max Allowed (Your Age Group)", unit: "%" },
      { key: "meetsStandard", label: "Meets Army Standard" },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as ArmyBfGender;
      const age = Number(inputs.age);
      const heightCm = Number(inputs.heightCm);
      const neckCm = Number(inputs.neckCm);
      const waistCm = Number(inputs.waistCm);
      const hipCm = Number(inputs.hipCm ?? 0);
      const output = calculateArmyBodyFat(gender, age, heightCm, neckCm, waistCm, hipCm);
      return {
        bodyFatPercent: output.bodyFatPercent,
        maxAllowedPercent: output.maxAllowedPercent,
        meetsStandard: output.meetsStandard ? "Yes" : "No",
      };
    },
    explanation: [
      {
        heading: "The military tape test formula",
        paragraphs: [
          "This calculator uses the Hodgdon-Beckett circumference formula developed for the U.S. military's tape test, which estimates body fat percentage from neck, waist (and hip, for women) measurements in inches. This formula is mathematically distinct from the Navy/Siri-based formula used in our general Body Fat Calculator, it's a direct linear combination of log10 circumference terms rather than a reciprocal formula, and it's the specific method referenced by military body composition standards.",
        ],
      },
      {
        heading: "Checking against Army body fat standards",
        paragraphs: [
          "The U.S. Army (under AR 600-9) sets maximum allowable body fat percentages that vary by age group and gender, tightening slightly less as age increases. This calculator checks your estimated body fat percentage against your age group's maximum, giving a pass/fail-style result. These figures are commonly cited standards, always confirm against the current official regulation for any official purpose.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from the regular Body Fat Calculator?",
        answer: "Both use circumference measurements, but they use mathematically different formulas, the Navy/Siri formula (general Body Fat Calculator) versus the Hodgdon-Beckett formula (this calculator), and this one additionally compares your result against official age-based Army maximum allowable body fat standards, which the general calculator doesn't do.",
      },
      {
        question: "Is this an official Army body fat assessment?",
        answer: "No, this is an estimate for informational purposes based on published formulas and commonly cited standards. Official Army body composition assessments must be performed by trained personnel following exact current regulation procedures.",
      },
      {
        question: "Why do the age brackets matter?",
        answer: "Body fat naturally tends to increase somewhat with age even at a stable fitness level, so the Army's standards allow a slightly higher maximum body fat percentage for older age brackets rather than applying one flat standard to everyone.",
      },
    ],
    relatedSlugs: ["body-fat-calculator", "lean-body-mass-calculator", "bmi-calculator"],
  },
  {
    slug: "calories-burned-calculator",
    category: "health",
    title: "Calories Burned Calculator",
    shortDescription: "Estimate calories burned during exercise based on activity, weight and duration.",
    metaDescription: "Free online calories burned calculator using MET values to estimate calories burned during walking, running, cycling, swimming and other activities.",
    h1: "Calories Burned Calculator",
    intro: "Estimate how many calories you burn during a specific activity based on your body weight and how long you exercised.",
    icon: "🏃",
    status: "live",
    inputFields: [
      {
        key: "activity",
        label: "Activity",
        type: "select",
        options: [
          { label: "Walking", value: "walking" },
          { label: "Running", value: "running" },
          { label: "Cycling", value: "cycling" },
          { label: "Swimming", value: "swimming" },
          { label: "Weightlifting", value: "weightlifting" },
          { label: "Yoga", value: "yoga" },
          { label: "Hiking", value: "hiking" },
          { label: "Dancing", value: "dancing" },
          { label: "Jumping Rope", value: "jumpingRope" },
          { label: "Basketball", value: "basketball" },
        ],
      },
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
      { key: "durationMinutes", label: "Duration (minutes)", type: "number", step: 1, placeholder: "e.g. 30" },
    ],
    resultFields: [
      { key: "caloriesBurned", label: "Calories Burned", unit: "kcal", highlight: true },
      { key: "caloriesPerHour", label: "Calories per Hour (this activity)", unit: "kcal" },
    ],
    calculate: (inputs) => {
      const activity = String(inputs.activity) as Activity;
      const weightKg = Number(inputs.weightKg);
      const durationMinutes = Number(inputs.durationMinutes);
      const output = calculateCaloriesBurned(activity, weightKg, durationMinutes);
      return { ...output };
    },
    explanation: [
      {
        heading: "How calories burned is calculated",
        paragraphs: [
          "This calculator uses MET (Metabolic Equivalent of Task) values from the widely referenced Compendium of Physical Activities, a standardized measure of how many times more energy an activity uses compared to resting. The formula is: Calories Burned = MET × Weight (kg) × Duration (hours). A MET value of 8, for example, means the activity burns roughly 8 times as much energy as sitting still.",
        ],
      },
      {
        heading: "Why body weight affects the result so much",
        paragraphs: [
          "Heavier bodies require more energy to move, so for the same activity and duration, a heavier person burns more calories than a lighter person, this is built directly into the MET formula through the weight term. This is also why calorie burn estimates from generic charts (that don't account for your specific weight) are less accurate than a formula-based calculation like this one.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate are MET-based calorie estimates?",
        answer: "MET values are averages derived from research on typical intensities for each activity, so actual calorie burn varies based on your fitness level, exact pace or intensity, terrain, and other individual factors. Treat the result as a reasonable estimate rather than an exact figure.",
      },
      {
        question: "Why do different activities have such different MET values?",
        answer: "MET values reflect how metabolically demanding an activity typically is. High-intensity, full-body activities like running or jumping rope have high MET values, while lower-intensity activities like yoga have lower ones, reflecting the real difference in energy demand.",
      },
      {
        question: "Does this account for afterburn (calories burned after exercise ends)?",
        answer: "No, this calculator estimates calories burned during the activity itself. Intense exercise can elevate metabolism for a period afterward (sometimes called EPOC), which isn't included in this estimate.",
      },
    ],
    relatedSlugs: ["bmr-calculator", "tdee-calculator", "target-heart-rate-calculator"],
  },
  {
    slug: "target-heart-rate-calculator",
    category: "health",
    title: "Target Heart Rate Calculator",
    shortDescription: "Calculate your personalized target heart rate range using the Karvonen method.",
    metaDescription: "Free online target heart rate calculator using the Karvonen (heart rate reserve) method, based on age, resting heart rate and desired exercise intensity.",
    h1: "Target Heart Rate Calculator",
    intro: "Calculate your personalized target heart rate range for exercise using the Karvonen method, which factors in your resting heart rate for a more individualized result.",
    icon: "❤️",
    status: "live",
    inputFields: [
      { key: "age", label: "Age (years)", type: "number", step: 1, placeholder: "e.g. 30" },
      { key: "restingHeartRate", label: "Resting Heart Rate (bpm)", type: "number", step: 1, placeholder: "e.g. 65" },
      { key: "intensityLow", label: "Intensity Range Low (%)", type: "number", step: 1, defaultValue: 50 },
      { key: "intensityHigh", label: "Intensity Range High (%)", type: "number", step: 1, defaultValue: 85 },
    ],
    resultFields: [
      { key: "maxHeartRate", label: "Estimated Max Heart Rate", unit: "bpm" },
      { key: "heartRateReserve", label: "Heart Rate Reserve", unit: "bpm" },
      { key: "targetHeartRateLow", label: "Target Heart Rate (Low End)", unit: "bpm", highlight: true },
      { key: "targetHeartRateHigh", label: "Target Heart Rate (High End)", unit: "bpm", highlight: true },
    ],
    calculate: (inputs) => {
      const age = Number(inputs.age);
      const restingHeartRate = Number(inputs.restingHeartRate);
      const intensityLow = Number(inputs.intensityLow ?? 50);
      const intensityHigh = Number(inputs.intensityHigh ?? 85);
      const output = calculateTargetHeartRate(age, restingHeartRate, intensityLow, intensityHigh);
      return { ...output };
    },
    explanation: [
      {
        heading: "The Karvonen method: how it's calculated",
        paragraphs: [
          "The Karvonen method calculates target heart rate using your heart rate reserve (the gap between your maximum and resting heart rate), rather than a flat percentage of max heart rate alone: Target HR = ((Max HR − Resting HR) × Intensity %) + Resting HR. Max heart rate is estimated as 220 minus your age.",
          "This matters because two people of the same age share the same estimated max heart rate, but if one has a resting heart rate of 55 (very fit) and the other 75 (less fit), their heart rate reserves, and therefore their target ranges for the same relative effort, are meaningfully different.",
        ],
      },
      {
        heading: "How this differs from our Heart Rate Zone Calculator",
        paragraphs: [
          "Our Heart Rate Zone Calculator uses the simpler method of taking a flat percentage of estimated max heart rate directly, based only on age. This calculator uses the Karvonen (heart rate reserve) method instead, which additionally factors in your resting heart rate, generally considered a more personalized and accurate approach, particularly for people whose fitness level differs notably from average.",
        ],
      },
    ],
    faqs: [
      {
        question: "What resting heart rate should I use?",
        answer: "Measure your pulse first thing in the morning, before getting out of bed, over a full minute, for several days and use the average, this gives the most accurate resting heart rate rather than a single reading taken during the day.",
      },
      {
        question: "What intensity range should I target?",
        answer: "50-70% is generally considered light to moderate intensity (good for beginners or recovery), 70-85% is moderate to vigorous (common for general fitness and cardiovascular training), and above 85% is high intensity, typically used for shorter, more advanced interval training.",
      },
      {
        question: "Why use the Karvonen method instead of a flat percentage of max heart rate?",
        answer: "The Karvonen method accounts for your individual resting heart rate, giving a more personalized target range. Two people with the same max heart rate but different fitness levels (and therefore different resting heart rates) will get different, more individually appropriate target ranges under Karvonen than under a flat max-heart-rate-percentage method.",
      },
    ],
    relatedSlugs: ["heart-rate-zone-calculator", "calories-burned-calculator", "bmr-calculator"],
  },
  {
    slug: "one-rep-max-calculator",
    category: "health",
    title: "One Rep Max Calculator",
    shortDescription: "Estimate your one-rep max from a weight and rep count you can already lift.",
    metaDescription: "Free online one rep max (1RM) calculator using the Epley and Brzycki formulas, plus common training percentages of your estimated max.",
    h1: "One Rep Max Calculator",
    intro: "Estimate your one-rep max (1RM) from a weight and rep count you can currently lift, using the Epley and Brzycki formulas, plus common training percentages of your max.",
    icon: "🏋️",
    status: "live",
    inputFields: [
      { key: "weight", label: "Weight Lifted", type: "number", step: 0.5, placeholder: "e.g. 100" },
      { key: "reps", label: "Reps Completed", type: "number", step: 1, placeholder: "e.g. 5" },
    ],
    resultFields: [
      { key: "epley1RM", label: "Epley Formula 1RM" },
      { key: "brzycki1RM", label: "Brzycki Formula 1RM" },
      { key: "average1RM", label: "Average Estimated 1RM", highlight: true },
      { key: "percent90", label: "90% of Max" },
      { key: "percent80", label: "80% of Max" },
      { key: "percent70", label: "70% of Max" },
      { key: "percent60", label: "60% of Max" },
    ],
    calculate: (inputs) => {
      const weight = Number(inputs.weight);
      const reps = Number(inputs.reps);
      const output = calculateOneRepMax(weight, reps);
      return { ...output };
    },
    explanation: [
      {
        heading: "How one-rep max is estimated",
        paragraphs: [
          "Since maxing out on every lift isn't practical or safe for most training, one-rep max (1RM) is commonly estimated from a lighter set taken close to failure. This calculator uses two widely cited formulas: Epley, 1RM = Weight × (1 + Reps ÷ 30), and Brzycki, 1RM = Weight × (36 ÷ (37 − Reps)). The two formulas tend to agree closely at low rep counts and diverge somewhat at higher reps, which is why both are shown alongside their average.",
        ],
      },
      {
        heading: "Using training percentages",
        paragraphs: [
          "Many strength programs prescribe working sets as a percentage of your 1RM (for example, '5 sets of 5 at 80% of max'). This calculator shows your estimated max at several common training percentages, so you can quickly translate a percentage-based program into actual weight on the bar.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is an estimated 1RM?",
        answer: "It's a reasonably close estimate for most people when based on a set of 10 reps or fewer taken close to failure, but individual factors like muscle fiber type and training experience mean actual 1RM can differ from the estimate by a meaningful margin.",
      },
      {
        question: "Why do the two formulas give slightly different results?",
        answer: "Epley and Brzycki were derived from different data sets and use different mathematical relationships between reps and percentage of max, so they naturally diverge somewhat, especially at higher rep counts. Neither is universally 'more correct', which is why this calculator shows both.",
      },
      {
        question: "Should I actually attempt a true 1RM to check this estimate?",
        answer: "That's a personal training decision best made with appropriate experience, warm-up and, ideally, a spotter. Many lifters find estimated 1RM from submaximal sets is perfectly sufficient for programming purposes without needing to test a true max.",
      },
    ],
    relatedSlugs: ["bmr-calculator", "lean-body-mass-calculator", "protein-calculator"],
  },
  {
    slug: "running-pace-calculator",
    category: "health",
    title: "Running Pace Calculator",
    shortDescription: "Calculate your running pace and speed from a distance and finish time.",
    metaDescription: "Free online running pace calculator to calculate your pace per km and per mile, and your speed in km/h and mph, from a distance and finish time.",
    h1: "Running Pace Calculator",
    intro: "Calculate your running pace per kilometer and per mile, along with your speed, from a distance and finish time.",
    icon: "🏃‍♂️",
    status: "live",
    inputFields: [
      { key: "distanceKm", label: "Distance (km)", type: "number", step: 0.01, placeholder: "e.g. 5" },
      { key: "hours", label: "Hours", type: "number", step: 1, defaultValue: 0 },
      { key: "minutes", label: "Minutes", type: "number", step: 1, placeholder: "e.g. 25" },
      { key: "seconds", label: "Seconds", type: "number", step: 1, defaultValue: 0 },
    ],
    resultFields: [
      { key: "paceMinPerKm", label: "Pace", unit: "min/km", highlight: true },
      { key: "paceMinPerMile", label: "Pace", unit: "min/mile", highlight: true },
      { key: "speedKmh", label: "Speed", unit: "km/h" },
      { key: "speedMph", label: "Speed", unit: "mph" },
    ],
    calculate: (inputs) => {
      const distanceKm = Number(inputs.distanceKm);
      const hours = Number(inputs.hours ?? 0);
      const minutes = Number(inputs.minutes);
      const seconds = Number(inputs.seconds ?? 0);
      const output = calculateRunningPace(distanceKm, hours, minutes, seconds);
      return { ...output };
    },
    explanation: [
      {
        heading: "How pace and speed are calculated",
        paragraphs: [
          "Pace is your total time divided by distance, expressed as minutes and seconds per kilometer or per mile. Speed is the inverse relationship, distance divided by time, expressed in kilometers or miles per hour. This calculator computes both directly from the distance and finish time you enter, converting between kilometers and miles using the standard factor of 1.60934 km per mile.",
        ],
      },
      {
        heading: "Why runners think in pace, not just speed",
        paragraphs: [
          "Pace (time per unit distance) is often more intuitive for runners than speed, since race splits, training plans and course markers are usually given in distance, so knowing 'how many minutes per kilometer' directly tells you what each split should look like, without needing to convert from a speed figure first.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I use this to plan a race split?",
        answer: "Enter your target distance and desired finish time to get your required pace per km or mile, then use that pace to check your progress against course markers or splits during the race.",
      },
      {
        question: "Why are both km and mile paces shown?",
        answer: "Races and training plans use different units depending on region and personal preference, showing both avoids needing a separate conversion step.",
      },
      {
        question: "Can I use this for walking or cycling too?",
        answer: "Yes, the pace and speed math is the same regardless of activity, though for cycling, speed (km/h or mph) is typically the more commonly used figure rather than pace.",
      },
    ],
    relatedSlugs: ["walking-calories-calculator", "calories-burned-calculator", "target-heart-rate-calculator"],
  },
  {
    slug: "walking-calories-calculator",
    category: "health",
    title: "Walking Calories Calculator",
    shortDescription: "Calculate calories burned walking, with a MET value that adjusts to your actual pace.",
    metaDescription: "Free online walking calories calculator that estimates calories burned from distance and time, using a MET value that adjusts to your actual walking pace.",
    h1: "Walking Calories Calculator",
    intro: "Calculate calories burned from a walk, using your actual pace (derived from distance and time) to select a more accurate MET value than a generic flat estimate.",
    icon: "🚶",
    status: "live",
    inputFields: [
      { key: "weightKg", label: "Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 70" },
      { key: "distanceKm", label: "Distance Walked (km)", type: "number", step: 0.1, placeholder: "e.g. 3" },
      { key: "durationMinutes", label: "Duration (minutes)", type: "number", step: 1, placeholder: "e.g. 40" },
    ],
    resultFields: [
      { key: "caloriesBurned", label: "Calories Burned", unit: "kcal", highlight: true },
      { key: "averageSpeedKmh", label: "Average Speed", unit: "km/h" },
      { key: "metUsed", label: "MET Value Used" },
    ],
    calculate: (inputs) => {
      const weightKg = Number(inputs.weightKg);
      const distanceKm = Number(inputs.distanceKm);
      const durationMinutes = Number(inputs.durationMinutes);
      const output = calculateWalkingCalories(weightKg, distanceKm, durationMinutes);
      return { ...output };
    },
    explanation: [
      {
        heading: "Why walking pace changes the calorie estimate",
        paragraphs: [
          "Walking's metabolic demand varies meaningfully with speed, a slow stroll and brisk power walking are quite different in energy cost, even over the same distance and duration category. This calculator first works out your average speed from the distance and time you provide, then selects a MET (Metabolic Equivalent of Task) value that matches that specific pace: roughly 2.0 for under 2 mph, 2.8 for 2-3 mph, 3.5 for 3-4 mph, 5.0 for 4-4.5 mph, and 7.0 for brisk power walking above 4.5 mph.",
        ],
      },
      {
        heading: "How this differs from our general Calories Burned Calculator",
        paragraphs: [
          "Our general Calories Burned Calculator applies one fixed MET value to 'walking' regardless of how fast you actually walked, since it's built for quickly comparing many different activity types. This calculator is purpose-built for walking specifically, deriving your actual pace from distance and time so the MET value, and therefore the calorie estimate, reflects your real effort rather than an average assumption.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do I enter distance and time instead of just picking a pace?",
        answer: "Deriving your speed from the distance you actually walked and the time it took gives a more precise result than picking from a rough pace category, and it's usually easier to know how far you walked and how long it took than to know your exact pace.",
      },
      {
        question: "Does terrain or incline affect the estimate?",
        answer: "No, this calculator assumes flat, level walking. Walking uphill, on sand, or on other challenging terrain burns more calories than the flat-ground MET values used here suggest.",
      },
      {
        question: "Is this more accurate than the general Calories Burned Calculator for walking specifically?",
        answer: "Yes, for walking specifically, since it adjusts the MET value to your actual measured pace rather than using one fixed value for all walking regardless of speed.",
      },
    ],
    relatedSlugs: ["calories-burned-calculator", "running-pace-calculator", "bmr-calculator"],
  },
  {
    slug: "bac-calculator",
    category: "health",
    title: "BAC Calculator",
    shortDescription: "Estimate blood alcohol concentration using the Widmark formula.",
    metaDescription: "Free online BAC (blood alcohol concentration) calculator using the Widmark formula, based on drinks consumed, body weight and time elapsed.",
    h1: "BAC Calculator",
    intro: "Estimate blood alcohol concentration (BAC) using the Widmark formula, based on drinks consumed, body weight, gender, and time elapsed since drinking began.",
    icon: "🍷",
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
      { key: "weightKg", label: "Body Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 75" },
      { key: "numberOfDrinks", label: "Number of Standard Drinks", type: "number", step: 0.5, placeholder: "e.g. 3" },
      { key: "gramsPerDrink", label: "Grams of Alcohol per Drink", type: "number", step: 0.1, defaultValue: 14 },
      { key: "hoursElapsed", label: "Hours Since First Drink", type: "number", step: 0.1, placeholder: "e.g. 2" },
    ],
    resultFields: [
      { key: "bacPercent", label: "Estimated BAC", unit: "%", highlight: true },
      { key: "impairmentLevel", label: "Estimated Impairment Level", highlight: true },
    ],
    calculate: (inputs) => {
      const gender = String(inputs.gender) as BacGender;
      const weightKg = Number(inputs.weightKg);
      const numberOfDrinks = Number(inputs.numberOfDrinks);
      const gramsPerDrink = Number(inputs.gramsPerDrink ?? 14);
      const hoursElapsed = Number(inputs.hoursElapsed);
      const output = calculateBac(gender, weightKg, numberOfDrinks, gramsPerDrink, hoursElapsed);
      return { ...output };
    },
    explanation: [
      {
        heading: "The Widmark formula",
        paragraphs: [
          "This calculator uses the Widmark formula, a standard method for estimating BAC: BAC = (total alcohol consumed in grams ÷ (body weight in grams × distribution ratio)) × 100, minus the alcohol eliminated over time at a typical average rate of about 0.015% per hour. The distribution ratio (0.68 for men, 0.55 for women, on average) reflects that alcohol distributes through body water, and body water proportion differs between sexes on average.",
          "A standard drink is commonly defined as containing about 14 grams of pure alcohol (roughly a 12 oz beer, a 5 oz glass of wine, or a 1.5 oz shot of spirits in the US), adjustable if you're measuring differently.",
        ],
      },
      {
        heading: "Important safety note",
        paragraphs: [
          "This calculator provides a rough mathematical estimate only. Actual BAC is affected by many factors this formula cannot fully account for, including food intake, drinking rate, medications, individual metabolism, and body composition, and it is not a reliable way to determine whether it's safe for you or anyone else to drive or perform other tasks requiring sobriety. Never use this or any BAC estimate as the basis for deciding to drive; when in doubt, don't.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this calculator accurate enough to decide if I can drive?",
        answer: "No. This is a rough estimate for educational purposes only, individual factors can cause your actual BAC to differ meaningfully from this estimate. Never use a BAC calculator, this one or any other, to decide whether it's safe to drive.",
      },
      {
        question: "What counts as a 'standard drink'?",
        answer: "In the US, a standard drink is generally defined as about 14 grams of pure alcohol, roughly a 12 oz regular beer, a 5 oz glass of wine, or a 1.5 oz shot of distilled spirits. This can be adjusted in the calculator if your drinks are stronger, weaker, or a different size.",
      },
      {
        question: "Why does gender affect the estimate?",
        answer: "The Widmark formula's distribution ratio reflects average differences in body water percentage between men and women, which affects how alcohol distributes through the body, though individual variation within each gender is significant.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "lean-body-mass-calculator", "bmr-calculator"],
  },
  {
    slug: "pregnancy-weight-gain-calculator",
    category: "health",
    title: "Pregnancy Weight Gain Calculator",
    shortDescription: "See the recommended pregnancy weight gain range based on your pre-pregnancy BMI.",
    metaDescription: "Free online pregnancy weight gain calculator based on IOM guidelines, showing recommended total weight gain range from your pre-pregnancy BMI.",
    h1: "Pregnancy Weight Gain Calculator",
    intro: "See your recommended total pregnancy weight gain range based on your pre-pregnancy BMI, following Institute of Medicine (IOM) guidelines, plus a recommended gain-to-date if you enter your current week.",
    icon: "🤰",
    status: "live",
    inputFields: [
      { key: "prePregnancyHeightCm", label: "Pre-Pregnancy Height (cm)", type: "number", step: 0.1, placeholder: "e.g. 165" },
      { key: "prePregnancyWeightKg", label: "Pre-Pregnancy Weight (kg)", type: "number", step: 0.1, placeholder: "e.g. 62" },
      { key: "currentWeek", label: "Current Week of Pregnancy (optional)", type: "number", step: 1, defaultValue: 0 },
    ],
    resultFields: [
      { key: "prePregnancyBmi", label: "Pre-Pregnancy BMI" },
      { key: "bmiCategory", label: "BMI Category" },
      { key: "totalGainMinKg", label: "Recommended Total Gain (Min)", unit: "kg", highlight: true },
      { key: "totalGainMaxKg", label: "Recommended Total Gain (Max)", unit: "kg", highlight: true },
      { key: "recommendedToDateMinKg", label: "Recommended Gain to Date (Min)", unit: "kg" },
      { key: "recommendedToDateMaxKg", label: "Recommended Gain to Date (Max)", unit: "kg" },
    ],
    calculate: (inputs) => {
      const prePregnancyHeightCm = Number(inputs.prePregnancyHeightCm);
      const prePregnancyWeightKg = Number(inputs.prePregnancyWeightKg);
      const currentWeek = Number(inputs.currentWeek ?? 0);
      const output = calculatePregnancyWeightGain(prePregnancyHeightCm, prePregnancyWeightKg, currentWeek);
      return { ...output };
    },
    explanation: [
      {
        heading: "IOM recommended weight gain ranges",
        paragraphs: [
          "The Institute of Medicine (IOM) recommends total pregnancy weight gain ranges based on pre-pregnancy BMI category: 12.5-18 kg for underweight, 11.5-16 kg for normal weight, 7-11.5 kg for overweight, and 5-9 kg for obese. These ranges reflect that starting from a higher pre-pregnancy weight generally calls for less additional gain, since existing energy reserves are already greater.",
        ],
      },
      {
        heading: "How gain-to-date is estimated",
        paragraphs: [
          "If you enter your current week, this calculator estimates a recommended gain-to-date by applying a small, roughly consistent first-trimester gain (about 0.5-2 kg, regardless of BMI category, following common guidance) and then spreading the remainder of your recommended total gain evenly across the following weeks. This is a simplified linear approximation, actual recommended gain per week can vary somewhat by trimester and individual circumstances, so use it as a general guide rather than an exact target.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my actual weight gain is outside the recommended range?",
        answer: "Individual circumstances vary significantly, and this calculator provides general population-level guidance, not personalized medical advice. Discuss your specific weight gain with your healthcare provider, who can account for your full medical history and any pregnancy-specific factors.",
      },
      {
        question: "Why does pre-pregnancy BMI affect the recommended gain?",
        answer: "Starting pre-pregnancy weight relates to existing energy reserves and metabolic factors, which is why IOM guidelines recommend less additional weight gain for those starting at a higher BMI, and more for those starting underweight, to support a healthy pregnancy outcome in each case.",
      },
      {
        question: "Does this account for twins or multiple pregnancies?",
        answer: "No, these ranges are based on IOM guidance for a single pregnancy. Recommended gain for twins or other multiples is generally higher and should be discussed directly with your healthcare provider.",
      },
    ],
    relatedSlugs: ["bmi-calculator", "pregnancy-week-calculator", "pregnancy-due-date-calculator"],
  },
  {
    slug: "pregnancy-week-calculator",
    category: "health",
    title: "Pregnancy Week Calculator",
    shortDescription: "Find your current pregnancy week and trimester from either your LMP or your due date.",
    metaDescription: "Free online pregnancy week calculator to find your current week, day and trimester of pregnancy, starting from either your last period or a known due date.",
    h1: "Pregnancy Week Calculator",
    intro: "Find out what week and day of pregnancy you're currently in, and which trimester, starting from either your last menstrual period or an already-known due date.",
    icon: "📆",
    status: "live",
    inputFields: [
      {
        key: "mode",
        label: "I know my...",
        type: "select",
        options: [
          { label: "Last Menstrual Period (LMP) Date", value: "lmp" },
          { label: "Due Date", value: "dueDate" },
        ],
      },
      { key: "date", label: "Date", type: "date" },
    ],
    resultFields: [
      { key: "currentWeek", label: "Current Week", highlight: true },
      { key: "currentDay", label: "Current Day" },
      { key: "trimester", label: "Trimester", highlight: true },
      { key: "weeksRemaining", label: "Weeks Remaining (approx.)" },
      { key: "dueDate", label: "Due Date" },
    ],
    calculate: (inputs) => {
      const mode = String(inputs.mode) as PregnancyInputMode;
      const date = String(inputs.date ?? "");
      const output = calculatePregnancyWeek(mode, date);
      return { ...output };
    },
    explanation: [
      {
        heading: "Tracking your current week from either starting point",
        paragraphs: [
          "Pregnancy is conventionally tracked from the first day of your last menstrual period (LMP), even though conception happens roughly two weeks later, this is the standard medical convention. If you know your LMP date, this calculator adds 280 days (40 weeks) to estimate your due date. If instead you only know your due date, perhaps given by a doctor or from an ultrasound, this calculator works backward, subtracting 280 days to estimate your LMP, then calculates your current week, day and trimester the same way either way.",
        ],
      },
      {
        heading: "How this differs from our other pregnancy calculators",
        paragraphs: [
          "This calculator is focused on 'what week am I in right now', supporting either an LMP or due date starting point. Our Pregnancy Due Date Calculator only accepts an LMP date directly. Our Due Date Reverse Calculator, meanwhile, is a pure reference tool: given a due date, it reconstructs your estimated LMP, conception date and trimester start dates without referencing today's date at all, useful for looking up your full timeline rather than tracking current progress.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why would I enter a due date instead of my LMP?",
        answer: "Not everyone tracks their exact LMP date precisely, or your due date may have been adjusted by an early ultrasound, which is often considered more accurate than LMP-based dating alone. Entering your known due date directly lets you skip needing an exact LMP date.",
      },
      {
        question: "Are weeks remaining exact?",
        answer: "It's an approximation based on a standard 40-week (280-day) full term. Actual delivery timing varies, most healthy pregnancies deliver somewhere between 37 and 42 weeks.",
      },
      {
        question: "Which trimester am I in?",
        answer: "This calculator uses the common convention of weeks 1-13 as the first trimester, 14-26 as the second, and 27 onward as the third, though exact boundaries are sometimes defined slightly differently between sources.",
      },
    ],
    relatedSlugs: ["pregnancy-due-date-calculator", "due-date-reverse-calculator", "pregnancy-weight-gain-calculator"],
  },
  {
    slug: "due-date-reverse-calculator",
    category: "health",
    title: "Due Date Reverse Calculator",
    shortDescription: "Work backward from a due date to estimate your LMP, conception date and trimester start dates.",
    metaDescription: "Free online due date reverse calculator to estimate your last menstrual period, conception date, and second and third trimester start dates from a known due date.",
    h1: "Due Date Reverse Calculator",
    intro: "Work backward from a known due date to estimate your last menstrual period date, conception date, and when your second and third trimesters started or will start.",
    icon: "🔙",
    status: "live",
    inputFields: [
      { key: "dueDate", label: "Due Date", type: "date" },
    ],
    resultFields: [
      { key: "estimatedLmpDate", label: "Estimated Last Menstrual Period", highlight: true },
      { key: "estimatedConceptionDate", label: "Estimated Conception Date", highlight: true },
      { key: "trimester2StartDate", label: "2nd Trimester Start (approx.)" },
      { key: "trimester3StartDate", label: "3rd Trimester Start (approx.)" },
    ],
    calculate: (inputs) => {
      const dueDate = String(inputs.dueDate ?? "");
      const output = calculateDueDateReverse(dueDate);
      return { ...output };
    },
    explanation: [
      {
        heading: "Working backward from a due date",
        paragraphs: [
          "Due dates are conventionally calculated as 280 days (40 weeks) after the last menstrual period (LMP), so this calculator reverses that: subtracting 280 days from your due date to estimate your LMP. From there, it adds roughly 14 typical days to estimate a conception date, and adds 13 and 27 weeks respectively to estimate when the second and third trimesters began or will begin.",
        ],
      },
      {
        heading: "A reference tool, not a week-by-week tracker",
        paragraphs: [
          "Unlike our Pregnancy Week Calculator, this tool doesn't reference today's date at all, it's purely a reconstruction of your estimated pregnancy timeline from a single known due date. This is useful right after receiving a due date from a doctor or ultrasound and wanting to see the full estimated timeline at once, rather than tracking ongoing weekly progress.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why would I need to work backward from a due date?",
        answer: "If your due date came from an ultrasound rather than your own LMP tracking (common, and often considered more accurate, especially with irregular cycles), you may not have an exact LMP date on hand, this calculator reconstructs an estimate from the due date instead.",
      },
      {
        question: "How accurate is the estimated conception date?",
        answer: "It's a typical estimate assuming conception occurred about 14 days after LMP, which is standard for an average cycle, but actual ovulation timing varies by individual and cycle, so treat this as an approximation.",
      },
      {
        question: "Is this the same as the Pregnancy Week Calculator's due date mode?",
        answer: "They share the same underlying 280-day math, but this calculator focuses on reconstructing your full estimated timeline (LMP, conception, trimester start dates) as a reference, while the Pregnancy Week Calculator focuses on your current week, day and trimester relative to today.",
      },
    ],
    relatedSlugs: ["pregnancy-week-calculator", "pregnancy-due-date-calculator", "fertility-window-calculator"],
  },
  {
    slug: "fertility-window-calculator",
    category: "health",
    title: "Fertility Window Calculator",
    shortDescription: "Estimate your fertile window using the calendar method, accounting for cycle-length variability.",
    metaDescription: "Free online fertility window calculator using the calendar (rhythm) method, based on your shortest and longest recent cycle length rather than a single average.",
    h1: "Fertility Window Calculator",
    intro: "Estimate your fertile window using the calendar (rhythm) method, which accounts for cycle-length variability by using your shortest and longest cycle over recent months.",
    icon: "🌸",
    status: "live",
    inputFields: [
      { key: "lastPeriodDate", label: "Start Date of Last Period", type: "date" },
      { key: "shortestCycle", label: "Shortest Cycle Length (last 6-12 months, days)", type: "number", step: 1, placeholder: "e.g. 26" },
      { key: "longestCycle", label: "Longest Cycle Length (last 6-12 months, days)", type: "number", step: 1, placeholder: "e.g. 31" },
    ],
    resultFields: [
      { key: "fertileWindowStart", label: "Fertile Window Start", highlight: true },
      { key: "fertileWindowEnd", label: "Fertile Window End", highlight: true },
      { key: "earliestOvulationEstimate", label: "Earliest Estimated Ovulation" },
      { key: "latestOvulationEstimate", label: "Latest Estimated Ovulation" },
    ],
    calculate: (inputs) => {
      const lastPeriodDate = String(inputs.lastPeriodDate ?? "");
      const shortestCycle = Number(inputs.shortestCycle);
      const longestCycle = Number(inputs.longestCycle);
      const output = calculateFertilityWindow(lastPeriodDate, shortestCycle, longestCycle);
      return { ...output };
    },
    explanation: [
      {
        heading: "The calendar (rhythm) method",
        paragraphs: [
          "This calculator uses the calendar method, a well-established approach for estimating a fertile window when cycles vary in length: fertile window start = last period start date + (shortest recent cycle − 18 days), and fertile window end = last period start date + (longest recent cycle − 11 days). Using your shortest and longest cycle from the past 6-12 months, rather than a single average cycle length, widens the estimated window to account for month-to-month variability.",
        ],
      },
      {
        heading: "How this differs from our Ovulation Calculator",
        paragraphs: [
          "Our Ovulation Calculator projects a fertile window from a single average cycle length, which works well for people with fairly regular cycles. This calculator instead uses your shortest and longest cycle over recent months, generally considered a more robust approach for people whose cycle length varies noticeably, since it produces a wider, more conservative estimated window rather than assuming every cycle behaves like the average one.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do I need both a shortest and longest cycle length?",
        answer: "Using a range instead of a single average cycle length accounts for natural month-to-month variability in your cycle, giving a wider but more reliable fertile window estimate, particularly useful if your cycles aren't highly consistent in length.",
      },
      {
        question: "How many months of cycle data should I use?",
        answer: "Typically the calendar method recommends looking at your 6 to 12 most recent cycles to identify your genuine shortest and longest, using fewer cycles risks missing your actual range of variability.",
      },
      {
        question: "Is the calendar method as accurate as ovulation predictor kits?",
        answer: "Generally no, ovulation predictor kits (which detect a hormone surge directly) or basal body temperature tracking tend to be more precise for a given cycle. The calendar method is a useful planning estimate based on your historical pattern, not a direct real-time measurement.",
      },
    ],
    relatedSlugs: ["ovulation-calculator", "pregnancy-due-date-calculator", "due-date-reverse-calculator"],
  },
  {
    slug: "matrix-calculator",
    category: "math",
    title: "Matrix Calculator",
    shortDescription: "Add, subtract, multiply, transpose or find the determinant of 2x2 and 3x3 matrices.",
    metaDescription: "Free online matrix calculator to add, subtract, multiply, transpose, or find the determinant of 2x2 and 3x3 matrices.",
    h1: "Matrix Calculator",
    intro: "Perform matrix addition, subtraction, multiplication, transpose, or find the determinant, for 2x2 and 3x3 matrices.",
    icon: "🔳",
    status: "live",
    widgetType: "matrix",
    explanation: [
      {
        heading: "Matrix operations supported",
        paragraphs: [
          "Addition and subtraction combine two matrices of the same size by adding or subtracting corresponding entries. Multiplication combines two square matrices of the same size using the standard row-by-column dot product rule. The determinant is a single number computed from a square matrix that indicates, among other things, whether the matrix is invertible (a zero determinant means it isn't). Transpose flips a matrix over its diagonal, turning rows into columns.",
        ],
      },
      {
        heading: "Why matrix size is limited to 2x2 and 3x3",
        paragraphs: [
          "These are by far the most commonly needed sizes for coursework, introductory linear algebra, and quick manual checks. Larger matrices are typically handled with dedicated computational software rather than manual entry, since the number of cells to enter grows quickly with size.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I multiply matrices of different sizes?",
        answer: "This calculator requires both matrices to be the same size (2x2 or 3x3) for all operations. General matrix multiplication does allow different sizes as long as the number of columns in the first matches the number of rows in the second, but that flexibility isn't supported here.",
      },
      {
        question: "What does a determinant of zero mean?",
        answer: "A zero determinant means the matrix is 'singular', it doesn't have an inverse, and represents a transformation that collapses space into a lower dimension (for example, flattening a 2D plane into a line).",
      },
      {
        question: "Do I need Matrix B for every operation?",
        answer: "No, only addition, subtraction and multiplication use Matrix B. Determinant and transpose only operate on Matrix A, so Matrix B's fields are hidden for those operations.",
      },
    ],
    relatedSlugs: ["scientific-calculator", "quadratic-equation-solver", "statistics-calculator"],
  },
  {
    slug: "gcf-calculator",
    category: "math",
    title: "GCF Calculator",
    shortDescription: "Find the greatest common factor of two or more numbers.",
    metaDescription: "Free online GCF calculator to find the greatest common factor (GCF), also known as greatest common divisor (GCD), of two or more numbers.",
    h1: "GCF Calculator",
    intro: "Find the Greatest Common Factor (GCF) of two or more whole numbers, the largest number that divides all of them with no remainder.",
    icon: "🔢",
    status: "live",
    inputFields: [
      { key: "numbers", label: "Numbers (comma or space separated)", type: "text", placeholder: "e.g. 24, 36, 60" },
    ],
    resultFields: [
      { key: "gcf", label: "Greatest Common Factor (GCF)", highlight: true },
      { key: "count", label: "Numbers Entered" },
    ],
    calculate: (inputs) => {
      const numbers = String(inputs.numbers ?? "");
      const output = calculateGcf(numbers);
      return { ...output };
    },
    explanation: [
      {
        heading: "How the greatest common factor is found",
        paragraphs: [
          "The Greatest Common Factor (GCF), also called the Greatest Common Divisor (GCD), is the largest whole number that divides every number in your list with no remainder. This calculator uses the Euclidean algorithm, repeatedly applying the fact that the GCF of two numbers also divides their difference, an efficient method that avoids having to list out every factor by hand.",
        ],
      },
      {
        heading: "GCF vs LCM",
        paragraphs: [
          "GCF and LCM (Least Common Multiple) answer opposite kinds of questions: GCF finds the largest number that divides into your numbers, while LCM finds the smallest number that all your numbers divide into. Our LCM Calculator computes both figures together if you need them side by side.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is GCF the same as GCD?",
        answer: "Yes, Greatest Common Factor (GCF) and Greatest Common Divisor (GCD) refer to exactly the same thing, GCF is the more common term in school-level math, while GCD is more common in number theory and computer science.",
      },
      {
        question: "What if my numbers share no common factor besides 1?",
        answer: "That's a valid result, it means the numbers are 'coprime', and this calculator will correctly show a GCF of 1.",
      },
      {
        question: "Can I enter more than two numbers?",
        answer: "Yes, enter as many numbers as you'd like, separated by commas or spaces, and this calculator will find the GCF across all of them at once.",
      },
    ],
    relatedSlugs: ["lcm-calculator", "prime-factorization-calculator", "fraction-calculator"],
  },
  {
    slug: "prime-factorization-calculator",
    category: "math",
    title: "Prime Factorization Calculator",
    shortDescription: "Break a number down into its prime factors, shown in exponent form.",
    metaDescription: "Free online prime factorization calculator to break a number down into its prime factors, shown both as a list and in compact exponent form.",
    h1: "Prime Factorization Calculator",
    intro: "Break a number down into the prime numbers that multiply together to produce it, shown as a plain list and in compact exponent form.",
    icon: "✖️",
    status: "live",
    inputFields: [
      { key: "number", label: "Number", type: "number", step: 1, placeholder: "e.g. 360" },
    ],
    resultFields: [
      { key: "exponentForm", label: "Prime Factorization (Exponent Form)", highlight: true },
      { key: "factorsList", label: "Prime Factors (List)" },
      { key: "factorCount", label: "Total Prime Factors" },
    ],
    calculate: (inputs) => {
      const number = Number(inputs.number);
      const output = calculatePrimeFactorization(number);
      return { ...output };
    },
    explanation: [
      {
        heading: "How prime factorization works",
        paragraphs: [
          "Every whole number greater than 1 can be broken down into a unique product of prime numbers, this is known as the Fundamental Theorem of Arithmetic. This calculator finds that breakdown by repeatedly dividing by the smallest possible prime until only 1 remains, then shows the result both as a plain multiplication list (e.g. 2 × 2 × 2 × 3 × 3 × 5) and in the more compact exponent form (2^3 × 3^2 × 5) used when a prime factor repeats.",
        ],
      },
      {
        heading: "Why prime factorization is useful",
        paragraphs: [
          "Prime factorization is the basis for finding a number's GCF and LCM with other numbers, simplifying fractions, and various topics in number theory and cryptography. It's also a common way to check whether a number is 'nice' for a particular calculation, for example, a number with only small prime factors divides evenly by many things.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if I enter a prime number?",
        answer: "The factorization of a prime number is just the number itself, since it has no smaller prime factors, this calculator will show it as a single factor.",
      },
      {
        question: "How is this different from the Prime Number Calculator?",
        answer: "The Prime Number Calculator checks whether a number is prime and also finds its nearest primes, with factorization as one of several outputs. This calculator is purpose-built around factorization specifically, presenting it both as a list and in the more standard exponent notation.",
      },
      {
        question: "Is there a limit to how large a number I can enter?",
        answer: "This calculator supports numbers up to 100,000,000. Beyond that, factorization by trial division becomes impractically slow.",
      },
    ],
    relatedSlugs: ["prime-number-calculator", "gcf-calculator", "lcm-calculator"],
  },
  {
    slug: "permutation-calculator",
    category: "math",
    title: "Permutation Calculator",
    shortDescription: "Calculate the number of ways to arrange r items chosen from n, where order matters.",
    metaDescription: "Free online permutation calculator (nPr) to calculate the number of ways to arrange r items chosen from a set of n, where order matters.",
    h1: "Permutation Calculator",
    intro: "Calculate the number of permutations (nPr), the number of ways to arrange r items chosen from a set of n distinct items, where order matters.",
    icon: "🔀",
    status: "live",
    inputFields: [
      { key: "n", label: "n (total items)", type: "number", step: 1, placeholder: "e.g. 10" },
      { key: "r", label: "r (items chosen)", type: "number", step: 1, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "result", label: "nPr (Permutations)", highlight: true },
    ],
    calculate: (inputs) => {
      const n = Number(inputs.n);
      const r = Number(inputs.r);
      const output = calculatePermutation(n, r);
      return { ...output };
    },
    explanation: [
      {
        heading: "The permutation formula",
        paragraphs: [
          "nPr = n! ÷ (n − r)!, the number of ways to select and arrange r items from a set of n distinct items, where the order of selection matters. For example, arranging 3 runners in 1st, 2nd and 3rd place out of 10 competitors gives 10P3 = 10 × 9 × 8 = 720 possible orderings.",
        ],
      },
      {
        heading: "Permutations vs combinations",
        paragraphs: [
          "The key distinction is whether order matters: permutations count arrangements (1st-2nd-3rd place is different from 2nd-1st-3rd), while combinations count selections regardless of order (a committee of 3 people is the same group no matter what order they were chosen in). Our Combination Calculator handles the order-doesn't-matter case.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does it mean when order 'matters'?",
        answer: "It means swapping the position of two selected items creates a genuinely different outcome, like assigning gold, silver and bronze medals, versus just picking any 3 people for a team where their order of selection is irrelevant.",
      },
      {
        question: "What if r equals n?",
        answer: "Then nPr simply equals n! (n factorial), the number of ways to arrange all n items in some order.",
      },
      {
        question: "Can r be larger than n?",
        answer: "No, you can't arrange more items than exist in the set, so r must be less than or equal to n.",
      },
    ],
    relatedSlugs: ["combination-calculator", "binomial-calculator", "probability-calculator"],
  },
  {
    slug: "combination-calculator",
    category: "math",
    title: "Combination Calculator",
    shortDescription: "Calculate the number of ways to choose r items from n, where order doesn't matter.",
    metaDescription: "Free online combination calculator (nCr) to calculate the number of ways to choose r items from a set of n, where order doesn't matter.",
    h1: "Combination Calculator",
    intro: "Calculate the number of combinations (nCr), the number of ways to choose r items from a set of n distinct items, where order doesn't matter.",
    icon: "🧩",
    status: "live",
    inputFields: [
      { key: "n", label: "n (total items)", type: "number", step: 1, placeholder: "e.g. 10" },
      { key: "r", label: "r (items chosen)", type: "number", step: 1, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "result", label: "nCr (Combinations)", highlight: true },
    ],
    calculate: (inputs) => {
      const n = Number(inputs.n);
      const r = Number(inputs.r);
      const output = calculateCombination(n, r);
      return { ...output };
    },
    explanation: [
      {
        heading: "The combination formula",
        paragraphs: [
          "nCr = n! ÷ (r! × (n − r)!), the number of ways to choose r items from a set of n distinct items, where the order of selection doesn't matter. For example, choosing a 3-person committee from 10 people gives 10C3 = 120 possible committees, far fewer than the 720 permutations of the same items, since here each group of 3 people counts only once regardless of selection order.",
        ],
      },
      {
        heading: "Why nCr is always smaller than nPr",
        paragraphs: [
          "Since combinations don't distinguish between different orderings of the same group, nCr is always nPr divided by r! (the number of ways to reorder r items). This is exactly why choosing a committee (120 ways) produces a smaller count than arranging medal positions (720 ways) from the same 10 people and group size of 3.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should I use combinations instead of permutations?",
        answer: "Use combinations whenever the order of selection doesn't create a meaningfully different outcome, like choosing lottery numbers, forming a team, or picking a subset of items, versus permutations for cases like rankings, seating arrangements, or passwords where order matters.",
      },
      {
        question: "What is 'n choose r' notation?",
        answer: "'n choose r', written nCr or sometimes with a binomial coefficient symbol, is the standard shorthand for this combination formula, and is also the coefficient used in binomial expansions and binomial probability.",
      },
      {
        question: "What if r is 0?",
        answer: "nCr with r=0 always equals 1, there's exactly one way to choose nothing from any set (the empty selection).",
      },
    ],
    relatedSlugs: ["permutation-calculator", "binomial-calculator", "probability-calculator"],
  },
  {
    slug: "binomial-calculator",
    category: "math",
    title: "Binomial Calculator",
    shortDescription: "Calculate binomial probability for exactly k successes, or k or fewer, across n trials.",
    metaDescription: "Free online binomial probability calculator to find the probability of exactly k successes, or cumulative k or fewer successes, across n independent trials.",
    h1: "Binomial Calculator",
    intro: "Calculate binomial probability, the probability of exactly k successes (and the cumulative probability of k or fewer) across n independent trials, each with the same probability of success.",
    icon: "🎲",
    status: "live",
    inputFields: [
      { key: "n", label: "Number of Trials (n)", type: "number", step: 1, placeholder: "e.g. 10" },
      { key: "probability", label: "Probability of Success per Trial (%)", type: "number", step: 0.01, placeholder: "e.g. 50" },
      { key: "k", label: "Number of Successes (k)", type: "number", step: 1, placeholder: "e.g. 6" },
    ],
    resultFields: [
      { key: "exactProbabilityPercent", label: "P(X = k) Exact Probability", unit: "%", highlight: true },
      { key: "cumulativeProbabilityPercent", label: "P(X ≤ k) Cumulative Probability", unit: "%", highlight: true },
      { key: "meanSuccesses", label: "Expected (Mean) Successes" },
      { key: "standardDeviation", label: "Standard Deviation" },
    ],
    calculate: (inputs) => {
      const n = Number(inputs.n);
      const probability = Number(inputs.probability);
      const k = Number(inputs.k);
      const output = calculateBinomial(n, probability, k);
      return { ...output };
    },
    explanation: [
      {
        heading: "The binomial probability formula",
        paragraphs: [
          "For n independent trials, each with the same probability p of success, the probability of exactly k successes is P(X=k) = C(n,k) × p^k × (1−p)^(n−k), where C(n,k) is the combination 'n choose k'. This calculator also sums P(X=i) for every i from 0 to k to give the cumulative probability P(X≤k), the chance of getting k or fewer successes.",
        ],
      },
      {
        heading: "When the binomial distribution applies",
        paragraphs: [
          "The binomial distribution applies when you have a fixed number of independent trials, each with only two possible outcomes (success or failure), and the same probability of success on every trial, classic examples include counting heads in a series of coin flips, or counting defective items in a batch where each item independently has the same defect probability.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between exact and cumulative probability?",
        answer: "Exact probability, P(X=k), is the chance of getting precisely k successes. Cumulative probability, P(X≤k), is the chance of getting k or fewer successes, the sum of the exact probabilities for every outcome from 0 up to k.",
      },
      {
        question: "What do the mean and standard deviation tell me?",
        answer: "The mean (n × p) is the expected number of successes on average across many repetitions. The standard deviation measures how much the actual number of successes typically varies from that average, a larger standard deviation means more variability from trial set to trial set.",
      },
      {
        question: "Does this work if the probability of success changes between trials?",
        answer: "No, the binomial distribution specifically assumes the same success probability on every trial. If probabilities vary trial to trial, a different (non-binomial) model is needed.",
      },
    ],
    relatedSlugs: ["combination-calculator", "probability-calculator", "statistics-calculator"],
  },
  {
    slug: "exponent-calculator",
    category: "math",
    title: "Exponent Calculator",
    shortDescription: "Calculate a base raised to any exponent, including negative and fractional exponents.",
    metaDescription: "Free online exponent calculator to calculate a base raised to any power, including negative exponents and fractional exponents (roots).",
    h1: "Exponent Calculator",
    intro: "Calculate a base raised to any exponent, including negative exponents (reciprocals) and fractional exponents (roots).",
    icon: "🔺",
    status: "live",
    inputFields: [
      { key: "base", label: "Base", type: "number", step: 0.01, placeholder: "e.g. 2" },
      { key: "exponent", label: "Exponent", type: "number", step: 0.01, placeholder: "e.g. 10" },
    ],
    resultFields: [
      { key: "result", label: "Result", highlight: true },
    ],
    calculate: (inputs) => {
      const base = Number(inputs.base);
      const exponent = Number(inputs.exponent);
      const output = calculateExponent(base, exponent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How exponents work",
        paragraphs: [
          "A positive integer exponent means repeated multiplication: base^n means the base multiplied by itself n times, for example 2^5 = 2×2×2×2×2 = 32. A negative exponent means the reciprocal of the positive version: base^(−n) = 1 ÷ base^n. A fractional exponent represents a root: base^(1/2) is the square root of the base, base^(1/3) is the cube root, and so on.",
        ],
      },
      {
        heading: "A note on negative bases with fractional exponents",
        paragraphs: [
          "Raising a negative number to a fractional exponent doesn't always produce a real number result, for example, (−4)^0.5 would be the square root of a negative number, which isn't a real number. This calculator will let you know when a combination you've entered has no real number result.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does an exponent of 0 give?",
        answer: "Any non-zero number raised to the power of 0 equals 1, by mathematical convention, this comes from consistently extending the pattern of dividing successive powers of the same base.",
      },
      {
        question: "How do negative exponents work?",
        answer: "A negative exponent flips the base into a fraction: base^(−n) equals 1 divided by base^n. For example, 2^(−3) = 1 ÷ 2^3 = 1/8 = 0.125.",
      },
      {
        question: "What does a decimal exponent like 0.5 mean?",
        answer: "A decimal exponent represents a root, base^0.5 is the same as the square root of the base, base^(1/3) (approximately 0.333) is the cube root, and so on, following the general rule base^(1/n) equals the nth root of the base.",
      },
    ],
    relatedSlugs: ["logarithm-calculator", "scientific-notation-calculator", "scientific-calculator"],
  },
  {
    slug: "logarithm-calculator",
    category: "math",
    title: "Logarithm Calculator",
    shortDescription: "Calculate the logarithm of a number to any base, including common and natural log.",
    metaDescription: "Free online logarithm calculator to calculate log base b of a value, including common logarithm (base 10) and natural logarithm (base e).",
    h1: "Logarithm Calculator",
    intro: "Calculate the logarithm of a value to any base, using the change-of-base formula, including common logarithm (base 10) and natural logarithm (base e ≈ 2.71828).",
    icon: "📉",
    status: "live",
    inputFields: [
      { key: "value", label: "Value", type: "number", step: 0.01, placeholder: "e.g. 100" },
      { key: "base", label: "Base", type: "number", step: 0.01, placeholder: "e.g. 10 (use 2.71828 for natural log)" },
    ],
    resultFields: [
      { key: "result", label: "Logarithm Result", highlight: true },
    ],
    calculate: (inputs) => {
      const value = Number(inputs.value);
      const base = Number(inputs.base);
      const output = calculateLogarithm(value, base);
      return { ...output };
    },
    explanation: [
      {
        heading: "What a logarithm represents",
        paragraphs: [
          "log_b(x) answers the question 'to what power must b be raised to get x?'. For example, log_10(100) = 2, since 10^2 = 100. This calculator uses the change-of-base formula, log_b(x) = ln(x) ÷ ln(b), which works for any valid base by expressing the result in terms of the natural logarithm.",
        ],
      },
      {
        heading: "Common log vs natural log",
        paragraphs: [
          "The common logarithm uses base 10 (written log(x) without a base, often used in fields like chemistry for pH, and acoustics for decibels). The natural logarithm uses base e (approximately 2.71828, written ln(x)), which arises naturally in calculus, continuous compound growth, and many scientific formulas. To calculate a natural log with this calculator, enter 2.71828 as the base, or simply use base 10 for a common log.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why can't the base be 1?",
        answer: "Since 1 raised to any power always equals 1, log base 1 is undefined, there's no consistent power that produces any value other than 1.",
      },
      {
        question: "Why can't I take the log of a negative number or zero?",
        answer: "In the real number system, no real power of a positive base produces a negative result or zero, so logarithms of non-positive numbers are undefined (they do exist in the complex number system, but that's outside the scope of this calculator).",
      },
      {
        question: "How is this related to exponents?",
        answer: "Logarithms and exponents are inverse operations, if b^y = x, then log_b(x) = y. Our Exponent Calculator handles the forward direction (calculating a power); this calculator handles the reverse.",
      },
    ],
    relatedSlugs: ["exponent-calculator", "scientific-notation-calculator", "scientific-calculator"],
  },
  {
    slug: "scientific-notation-calculator",
    category: "math",
    title: "Scientific Notation Calculator",
    shortDescription: "Convert between standard decimal notation and scientific notation.",
    metaDescription: "Free online scientific notation calculator to convert a decimal number into scientific notation, or convert scientific notation back into a decimal number.",
    h1: "Scientific Notation Calculator",
    intro: "Convert a decimal number into scientific notation, or convert a coefficient and exponent in scientific notation back into a standard decimal number.",
    icon: "🔬",
    status: "live",
    inputFields: [
      {
        key: "mode",
        label: "Conversion Direction",
        type: "select",
        options: [
          { label: "Decimal → Scientific Notation", value: "toScientific" },
          { label: "Scientific Notation → Decimal", value: "toDecimal" },
        ],
      },
      { key: "decimalInput", label: "Decimal Number", type: "number", step: 0.0001, placeholder: "e.g. 6020000000" },
      { key: "coefficientInput", label: "Coefficient (a)", type: "number", step: 0.01, placeholder: "e.g. 6.02" },
      { key: "exponentInput", label: "Exponent (b, as in x10^b)", type: "number", step: 1, placeholder: "e.g. 9" },
    ],
    resultFields: [
      { key: "scientificNotationText", label: "Scientific Notation", highlight: true },
      { key: "decimalValue", label: "Decimal Value", highlight: true },
      { key: "coefficient", label: "Coefficient (a)" },
      { key: "exponent", label: "Exponent (b)" },
    ],
    calculate: (inputs) => {
      const mode = String(inputs.mode) as ScientificNotationMode;
      const decimalInput = Number(inputs.decimalInput ?? 0);
      const coefficientInput = Number(inputs.coefficientInput ?? 0);
      const exponentInput = Number(inputs.exponentInput ?? 0);
      const output = calculateScientificNotation(mode, decimalInput, coefficientInput, exponentInput);
      return { ...output };
    },
    explanation: [
      {
        heading: "What scientific notation is",
        paragraphs: [
          "Scientific notation expresses a number as a coefficient between 1 and 10 (or −10 and −1 for negatives) multiplied by a power of 10: a × 10^b. It's used throughout science and engineering to compactly represent very large or very small numbers, for example, Avogadro's number (about 602,000,000,000,000,000,000,000) is written far more manageably as 6.02 × 10^23.",
        ],
      },
      {
        heading: "Converting in either direction",
        paragraphs: [
          "To convert a decimal to scientific notation, this calculator finds how many places the decimal point needs to move to leave exactly one non-zero digit before it, that count becomes the exponent. To convert scientific notation back to a decimal, it simply multiplies the coefficient by 10 raised to the given exponent.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why must the coefficient be between 1 and 10?",
        answer: "This is the standard convention for scientific notation, it ensures every number has one single, unambiguous representation, rather than multiple equally valid ways to write the same value.",
      },
      {
        question: "What does a negative exponent mean in scientific notation?",
        answer: "A negative exponent indicates a small number (less than 1), for example, 0.000045 is written as 4.5 × 10^(−5), since the decimal point moves 5 places to the right to reach the standard form.",
      },
      {
        question: "Is this the same as engineering notation?",
        answer: "No, engineering notation is a close cousin that restricts exponents to multiples of 3 (aligning with metric prefixes like kilo, mega, milli), while standard scientific notation used here allows any integer exponent.",
      },
    ],
    relatedSlugs: ["exponent-calculator", "logarithm-calculator", "scientific-calculator"],
  },
  {
    slug: "percent-error-calculator",
    category: "math",
    title: "Percent Error Calculator",
    shortDescription: "Calculate percent error between a measured value and an accepted (true) value.",
    metaDescription: "Free online percent error calculator to calculate the percent error between a measured (experimental) value and an accepted (true) value.",
    h1: "Percent Error Calculator",
    intro: "Calculate percent error, how far a measured or experimental value deviates from a known accepted value, expressed as a percentage.",
    icon: "🧪",
    status: "live",
    inputFields: [
      { key: "measuredValue", label: "Measured (Experimental) Value", type: "number", step: 0.0001, placeholder: "e.g. 9.8" },
      { key: "acceptedValue", label: "Accepted (True) Value", type: "number", step: 0.0001, placeholder: "e.g. 9.81" },
    ],
    resultFields: [
      { key: "percentError", label: "Percent Error", unit: "%", highlight: true },
      { key: "absoluteError", label: "Absolute Error" },
    ],
    calculate: (inputs) => {
      const measuredValue = Number(inputs.measuredValue);
      const acceptedValue = Number(inputs.acceptedValue);
      const output = calculatePercentError(measuredValue, acceptedValue);
      return { ...output };
    },
    explanation: [
      {
        heading: "The percent error formula",
        paragraphs: [
          "Percent Error = |Measured Value − Accepted Value| ÷ |Accepted Value| × 100. It's specifically used to express how far an experimental or measured result deviates from a known, accepted (true) value, always dividing by the accepted value, not the measured one. For example, measuring gravitational acceleration as 9.8 m/s² against the accepted 9.81 m/s² gives a percent error of about 0.10%.",
        ],
      },
      {
        heading: "Percent error vs percentage difference",
        paragraphs: [
          "Percent error assumes one of the two values (the accepted value) is authoritative, a known standard your measurement is being checked against. Our Percentage Difference Calculator instead compares two values symmetrically, with neither treated as more correct than the other, appropriate when you're simply comparing two measurements or estimates as peers.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is percent error always positive here?",
        answer: "This calculator uses the absolute value of the difference, so percent error is reported as a magnitude of deviation, regardless of whether the measured value was above or below the accepted value. The 'absolute error' figure shown alongside it is the raw (also absolute) numeric difference before converting to a percentage.",
      },
      {
        question: "What counts as a 'good' percent error?",
        answer: "It depends entirely on the field and the precision of the measuring method, a percent error considered excellent in one context (say, a rough physical experiment) might be unacceptable in another (like precision manufacturing). There's no universal threshold.",
      },
      {
        question: "What if I don't have a known 'accepted' value?",
        answer: "If you're just comparing two values without either being an authoritative standard, use our Percentage Difference Calculator instead, which doesn't require designating one value as more correct than the other.",
      },
    ],
    relatedSlugs: ["percentage-difference-calculator", "percentage-calculator", "standard-deviation-calculator"],
  },
  {
    slug: "percentage-difference-calculator",
    category: "math",
    title: "Percentage Difference Calculator",
    shortDescription: "Calculate the symmetric percentage difference between two values.",
    metaDescription: "Free online percentage difference calculator to calculate the symmetric percentage difference between two values, using their average as the base.",
    h1: "Percentage Difference Calculator",
    intro: "Calculate the percentage difference between two values, a symmetric comparison that treats neither value as the reference or 'correct' one.",
    icon: "⚖️",
    status: "live",
    inputFields: [
      { key: "valueA", label: "First Value", type: "number", step: 0.0001, placeholder: "e.g. 40" },
      { key: "valueB", label: "Second Value", type: "number", step: 0.0001, placeholder: "e.g. 50" },
    ],
    resultFields: [
      { key: "percentageDifference", label: "Percentage Difference", unit: "%", highlight: true },
      { key: "absoluteDifference", label: "Absolute Difference" },
    ],
    calculate: (inputs) => {
      const valueA = Number(inputs.valueA);
      const valueB = Number(inputs.valueB);
      const output = calculatePercentageDifference(valueA, valueB);
      return { ...output };
    },
    explanation: [
      {
        heading: "The percentage difference formula",
        paragraphs: [
          "Percentage Difference = |A − B| ÷ ((A + B) ÷ 2) × 100, dividing the absolute difference by the average of the two values rather than by either one specifically. This symmetry means swapping A and B gives the exact same result, unlike percentage change, which is directional and depends on which value is treated as the starting point.",
        ],
      },
      {
        heading: "When to use this instead of percentage change or percent error",
        paragraphs: [
          "Use percentage difference when comparing two values as equal peers, neither is a 'before' state nor a known correct standard, for example, comparing two competitors' prices, or two lab samples measured under similar conditions. If one value is a starting point being changed into another (like a salary before and after a raise), our Percentage Calculator's percentage change mode is more appropriate. If one value is a known accepted standard being checked against a measurement, use our Percent Error Calculator instead.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why divide by the average instead of one of the values?",
        answer: "Dividing by the average keeps the calculation symmetric, giving the same result regardless of which value you call 'first' or 'second', appropriate when neither value is inherently the reference point.",
      },
      {
        question: "Can percentage difference be negative?",
        answer: "No, this calculator uses the absolute difference in the numerator, so percentage difference is always reported as a non-negative magnitude of how far apart the two values are, not a directional change.",
      },
      {
        question: "Does this work with negative values?",
        answer: "This calculator expects non-negative values, since the standard percentage difference formula is best defined for positive quantities. For values that can be negative or represent a directional change, percentage change (available in our Percentage Calculator) is more appropriate.",
      },
    ],
    relatedSlugs: ["percent-error-calculator", "percentage-calculator", "ratio-calculator"],
  },
  {
    slug: "average-calculator",
    category: "math",
    title: "Average Calculator",
    shortDescription: "Calculate the average (mean) of a list of numbers.",
    metaDescription: "Free online average calculator to quickly find the average (arithmetic mean) of a list of numbers.",
    h1: "Average Calculator",
    intro: "Quickly calculate the average (arithmetic mean) of a list of numbers.",
    icon: "➗",
    status: "live",
    inputFields: [
      { key: "numbers", label: "Numbers (comma or space separated)", type: "text", placeholder: "e.g. 12, 18, 25, 30" },
    ],
    resultFields: [
      { key: "average", label: "Average (Mean)", highlight: true },
      { key: "sum", label: "Sum" },
      { key: "count", label: "Count" },
    ],
    calculate: (inputs) => {
      const numbers = String(inputs.numbers ?? "");
      const output = calculateAverage(numbers);
      return { ...output };
    },
    explanation: [
      {
        heading: "How average is calculated",
        paragraphs: [
          "The average, or arithmetic mean, is the sum of all values divided by how many values there are: Average = Sum ÷ Count. It's the most common way to summarize a typical value in a data set, though it can be skewed by unusually large or small outliers.",
        ],
      },
      {
        heading: "A focused, single-purpose tool",
        paragraphs: [
          "This calculator is intentionally simple, just the average, sum and count, for whenever you need that figure quickly without a broader statistical breakdown. Our Mean, Median & Mode Calculator and Statistics Calculator both include this same average figure as part of a more comprehensive set of results, useful if you need median, mode, standard deviation or other measures at the same time.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is average the same as mean?",
        answer: "In everyday usage, yes, 'average' almost always refers to the arithmetic mean, though technically median and mode are also types of 'averages' in a broader statistical sense.",
      },
      {
        question: "Does one very large or small number affect the average a lot?",
        answer: "Yes, the average is sensitive to outliers, a single unusually large or small value can pull the average noticeably in its direction. If you want a measure less affected by outliers, consider the median instead.",
      },
      {
        question: "How is this different from the Statistics Calculator?",
        answer: "This tool shows only the average (plus sum and count) for a quick, focused result. The Statistics Calculator computes a full set of descriptive statistics at once, including median, mode, standard deviation, variance and quartiles.",
      },
    ],
    relatedSlugs: ["median-calculator", "mean-median-mode-calculator", "statistics-calculator"],
  },
  {
    slug: "median-calculator",
    category: "math",
    title: "Median Calculator",
    shortDescription: "Calculate the median (middle value) of a list of numbers.",
    metaDescription: "Free online median calculator to quickly find the median (middle value) of a list of numbers.",
    h1: "Median Calculator",
    intro: "Quickly calculate the median, the middle value, of a list of numbers.",
    icon: "🔟",
    status: "live",
    inputFields: [
      { key: "numbers", label: "Numbers (comma or space separated)", type: "text", placeholder: "e.g. 12, 18, 25, 30, 45" },
    ],
    resultFields: [
      { key: "median", label: "Median", highlight: true },
      { key: "count", label: "Count" },
      { key: "sortedList", label: "Sorted List", wide: true },
    ],
    calculate: (inputs) => {
      const numbers = String(inputs.numbers ?? "");
      const output = calculateMedian(numbers);
      return { ...output };
    },
    explanation: [
      {
        heading: "How median is calculated",
        paragraphs: [
          "The median is the middle value of a data set once it's sorted in order. For an odd number of values, it's the single middle value. For an even number of values, it's the average of the two middle values. This calculator sorts your list automatically and shows the sorted order alongside the result.",
        ],
      },
      {
        heading: "Why median is sometimes preferred over average",
        paragraphs: [
          "Unlike the average (mean), the median isn't pulled by extreme outliers, a single very large or very small value barely affects it, since only the middle position matters, not the actual magnitude of every value. This is why median is often used for figures like household income or home prices, where a few extreme values could otherwise skew the average significantly.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if I have an even number of values?",
        answer: "The median is the average of the two middle values once the list is sorted, for example, the median of 4, 8, 15, 23 is (8 + 15) ÷ 2 = 11.5.",
      },
      {
        question: "Why does median resist outliers better than average?",
        answer: "Median only depends on which value occupies the middle position after sorting, not the magnitude of any individual value, so an extremely large or small outlier can shift the sort order slightly but generally doesn't change the median much, unlike the average, which directly incorporates every value's magnitude.",
      },
      {
        question: "How is this different from the Statistics Calculator?",
        answer: "This tool shows only the median (plus count and sorted list) for a quick, focused result. The Statistics Calculator computes a full set of descriptive statistics at once, including mean, mode, standard deviation, variance and quartiles.",
      },
    ],
    relatedSlugs: ["average-calculator", "mean-median-mode-calculator", "statistics-calculator"],
  },
  {
    slug: "mulch-calculator",
    category: "construction",
    title: "Mulch Calculator",
    shortDescription: "Calculate how much mulch you need for a garden bed or landscaping area.",
    metaDescription: "Free online mulch calculator to estimate cubic yards and bags of mulch needed for a garden bed, based on area and depth.",
    h1: "Mulch Calculator",
    intro: "Calculate how many cubic yards, and how many 2 cubic foot bags, of mulch you need based on the area and depth of your garden bed.",
    icon: "🍂",
    status: "live",
    inputFields: [
      { key: "lengthFt", label: "Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 20" },
      { key: "widthFt", label: "Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "depthIn", label: "Depth (inches)", type: "number", step: 0.5, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "cubicYards", label: "Cubic Yards Needed", highlight: true },
      { key: "cubicFeet", label: "Cubic Feet" },
      { key: "bagsNeeded", label: "2 Cu Ft Bags Needed", highlight: true },
    ],
    calculate: (inputs) => {
      const lengthFt = Number(inputs.lengthFt);
      const widthFt = Number(inputs.widthFt);
      const depthIn = Number(inputs.depthIn);
      const output = calculateMulch(lengthFt, widthFt, depthIn);
      return { ...output };
    },
    explanation: [
      {
        heading: "How mulch quantity is calculated",
        paragraphs: [
          "Volume of mulch needed = Length × Width × Depth, with depth converted from inches to feet. This calculator shows the result in cubic yards (how bulk mulch is typically sold and delivered) and in standard 2 cubic foot bags (how bagged mulch is typically sold at garden centers).",
        ],
      },
      {
        heading: "How deep should mulch be?",
        paragraphs: [
          "A depth of 2 to 4 inches is commonly recommended for most garden beds, deep enough to suppress weeds and retain soil moisture, without piling mulch so high it smothers plant roots or traps excess moisture against stems and trunks.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I buy bagged or bulk mulch?",
        answer: "For small areas, bagged mulch (typically 2 cubic feet per bag) is convenient. For larger areas, bulk mulch delivered by the cubic yard is usually significantly cheaper per unit of coverage, this calculator shows both figures so you can compare.",
      },
      {
        question: "Does mulch type affect how much I need?",
        answer: "The volume calculation is the same regardless of mulch type (wood chips, bark, rubber, etc.), since it's based on area and depth, not material density. However, different mulch types settle and decompose at different rates, affecting how often you'll need to replenish it.",
      },
      {
        question: "Should I subtract the area taken up by plants?",
        answer: "For a rough estimate, most people calculate mulch for the full bed area and accept a small amount of surplus, since precisely subtracting plant footprints is rarely worth the extra effort for typical garden beds.",
      },
    ],
    relatedSlugs: ["soil-calculator", "gravel-calculator", "square-footage-calculator"],
  },
  {
    slug: "asphalt-calculator",
    category: "construction",
    title: "Asphalt Calculator",
    shortDescription: "Calculate tons of asphalt needed for a driveway or paving project.",
    metaDescription: "Free online asphalt calculator to estimate tons of hot mix asphalt needed for a driveway or paving project, based on area and thickness.",
    h1: "Asphalt Calculator",
    intro: "Calculate how many tons of hot mix asphalt you need for a driveway or paving project, based on area and thickness.",
    icon: "🛣️",
    status: "live",
    inputFields: [
      { key: "lengthFt", label: "Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 40" },
      { key: "widthFt", label: "Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 12" },
      { key: "thicknessIn", label: "Thickness (inches)", type: "number", step: 0.25, placeholder: "e.g. 3" },
    ],
    resultFields: [
      { key: "tonsNeeded", label: "Asphalt Needed (Tons)", highlight: true },
      { key: "cubicYards", label: "Cubic Yards" },
      { key: "cubicFeet", label: "Cubic Feet" },
    ],
    calculate: (inputs) => {
      const lengthFt = Number(inputs.lengthFt);
      const widthFt = Number(inputs.widthFt);
      const thicknessIn = Number(inputs.thicknessIn);
      const output = calculateAsphalt(lengthFt, widthFt, thicknessIn);
      return { ...output };
    },
    explanation: [
      {
        heading: "How asphalt tonnage is calculated",
        paragraphs: [
          "This calculator finds the volume (Length × Width × Thickness) and converts it to weight using a typical compacted hot mix asphalt density of 145 lb per cubic foot, a commonly cited figure from paving suppliers: Tons = (Cubic Feet × 145) ÷ 2000.",
        ],
      },
      {
        heading: "Typical driveway thickness",
        paragraphs: [
          "Residential driveways are commonly paved 2 to 3 inches thick, while areas handling heavier vehicle loads (like a commercial lot) often use a thicker layer. Always check local specifications or with your paving contractor for the appropriate thickness for your specific use case and climate.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does this use tons instead of a bag count like some other material calculators?",
        answer: "Asphalt is delivered hot and installed immediately by paving equipment, it isn't sold in bags like concrete mix or mulch, so contractors and suppliers quote and deliver it by weight (tons).",
      },
      {
        question: "Does asphalt density vary?",
        answer: "Yes, actual compacted density can vary somewhat based on the specific asphalt mix design and compaction achieved. 145 lb per cubic foot is a reasonable planning estimate; your paving contractor can give you an exact figure for the mix they're using.",
      },
      {
        question: "Does this include the base layer beneath the asphalt?",
        answer: "No, this calculates the asphalt layer only. Most driveways also need a compacted gravel base beneath the asphalt, which would need to be estimated separately.",
      },
    ],
    relatedSlugs: ["gravel-calculator", "concrete-calculator", "square-footage-calculator"],
  },
  {
    slug: "brick-calculator",
    category: "construction",
    title: "Brick Calculator",
    shortDescription: "Calculate how many bricks and mortar bags you need for a wall.",
    metaDescription: "Free online brick calculator to estimate the number of bricks and mortar bags needed for a wall, based on wall and brick dimensions.",
    h1: "Brick Calculator",
    intro: "Calculate how many bricks and mortar bags you need for a wall, based on wall size, brick size and mortar joint thickness.",
    icon: "🧱",
    status: "live",
    inputFields: [
      { key: "wallLengthFt", label: "Wall Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 20" },
      { key: "wallHeightFt", label: "Wall Height (ft)", type: "number", step: 0.1, placeholder: "e.g. 6" },
      { key: "brickLengthIn", label: "Brick Length (in)", type: "number", step: 0.125, defaultValue: 8 },
      { key: "brickHeightIn", label: "Brick Height (in)", type: "number", step: 0.125, defaultValue: 2.25 },
      { key: "mortarJointIn", label: "Mortar Joint (in)", type: "number", step: 0.0625, defaultValue: 0.375 },
      { key: "wastePercent", label: "Waste (%)", type: "number", step: 1, defaultValue: 10 },
    ],
    resultFields: [
      { key: "wallArea", label: "Wall Area (sq ft)" },
      { key: "bricksNeeded", label: "Bricks Needed", highlight: true },
      { key: "mortarBagsNeeded", label: "Mortar Bags Needed (est.)", highlight: true },
    ],
    calculate: (inputs) => {
      const wallLengthFt = Number(inputs.wallLengthFt);
      const wallHeightFt = Number(inputs.wallHeightFt);
      const brickLengthIn = Number(inputs.brickLengthIn ?? 8);
      const brickHeightIn = Number(inputs.brickHeightIn ?? 2.25);
      const mortarJointIn = Number(inputs.mortarJointIn ?? 0.375);
      const wastePercent = Number(inputs.wastePercent ?? 10);
      const output = calculateBrick(wallLengthFt, wallHeightFt, brickLengthIn, brickHeightIn, mortarJointIn, wastePercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How brick count is calculated",
        paragraphs: [
          "This calculator adds the mortar joint thickness to both the brick's length and height to get its effective 'footprint' on the wall face, then divides the total wall area (plus a waste allowance) by that footprint: Bricks Needed = (Wall Area × (1 + Waste%)) ÷ ((Brick Length + Joint) × (Brick Height + Joint)). The default 8 in × 2.25 in brick with a 3/8 in joint reflects a standard modular brick size.",
        ],
      },
      {
        heading: "Estimating mortar",
        paragraphs: [
          "Mortar bag needs are estimated using a commonly cited rule of thumb of roughly 3 standard 80 lb mortar mix bags per 100 bricks laid with standard joints. Actual mortar consumption varies with joint thickness and workmanship, so treat this as a planning estimate and buy a little extra.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's a standard brick size?",
        answer: "A common US modular brick face measures about 8 in × 2.25 in (nominal, including a standard 3/8 in mortar joint), though brick sizes vary by region and manufacturer, always check your specific brick's dimensions.",
      },
      {
        question: "Why does mortar joint thickness matter for brick count?",
        answer: "Thicker mortar joints mean each brick effectively takes up more space on the wall face, so fewer bricks are needed to cover the same area, and thinner joints mean more bricks are needed.",
      },
      {
        question: "How much waste allowance should I use?",
        answer: "10% is a reasonable default for most projects, accounting for cutting, breakage and mistakes. Complex patterns or a lot of cutting around openings may call for a higher allowance.",
      },
    ],
    relatedSlugs: ["concrete-block-calculator", "square-footage-calculator", "paint-calculator"],
  },
  {
    slug: "concrete-block-calculator",
    category: "construction",
    title: "Concrete Block Calculator",
    shortDescription: "Calculate how many concrete blocks (CMU) and mortar bags you need for a wall.",
    metaDescription: "Free online concrete block calculator to estimate the number of CMU blocks and mortar bags needed for a wall, based on wall and block dimensions.",
    h1: "Concrete Block Calculator",
    intro: "Calculate how many concrete masonry units (CMU blocks) and mortar bags you need for a wall, based on wall size and standard block dimensions.",
    icon: "🧱",
    status: "live",
    inputFields: [
      { key: "wallLengthFt", label: "Wall Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 20" },
      { key: "wallHeightFt", label: "Wall Height (ft)", type: "number", step: 0.1, placeholder: "e.g. 8" },
      { key: "blockLengthIn", label: "Block Length (in, nominal)", type: "number", step: 1, defaultValue: 16 },
      { key: "blockHeightIn", label: "Block Height (in, nominal)", type: "number", step: 1, defaultValue: 8 },
      { key: "wastePercent", label: "Waste (%)", type: "number", step: 1, defaultValue: 10 },
    ],
    resultFields: [
      { key: "wallArea", label: "Wall Area (sq ft)" },
      { key: "blocksNeeded", label: "Blocks Needed", highlight: true },
      { key: "mortarBagsNeeded", label: "Mortar Bags Needed (est.)", highlight: true },
    ],
    calculate: (inputs) => {
      const wallLengthFt = Number(inputs.wallLengthFt);
      const wallHeightFt = Number(inputs.wallHeightFt);
      const blockLengthIn = Number(inputs.blockLengthIn ?? 16);
      const blockHeightIn = Number(inputs.blockHeightIn ?? 8);
      const wastePercent = Number(inputs.wastePercent ?? 10);
      const output = calculateConcreteBlock(wallLengthFt, wallHeightFt, blockLengthIn, blockHeightIn, wastePercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How block count is calculated, and how this differs from our Concrete Calculator",
        paragraphs: [
          "This calculator divides the total wall area (plus a waste allowance) by the block's nominal face area: Blocks Needed = (Wall Area × (1 + Waste%)) ÷ (Block Length × Block Height ÷ 144), using nominal dimensions (which already build in a standard mortar joint, unlike raw brick dimensions). This is a completely different calculation from our Concrete Calculator, which estimates poured, mixed concrete by volume for slabs and footings, not discrete block units for a wall.",
        ],
      },
      {
        heading: "Standard CMU block size",
        paragraphs: [
          "The default 16 in × 8 in nominal size reflects the most common standard concrete block used in the US, though the actual block (before accounting for the mortar joint) measures closer to 15.625 in × 7.625 in. Always confirm the exact block size you're using, since other sizes (like 4 in or 12 in wide blocks) are also common depending on the application.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from the Brick Calculator?",
        answer: "Both count discrete masonry units for a wall, but concrete blocks (CMU) are much larger than standard bricks and use nominal sizing that already accounts for the mortar joint, while the Brick Calculator asks for the brick's raw size and joint thickness separately.",
      },
      {
        question: "Why 'nominal' dimensions?",
        answer: "Nominal dimensions describe a block's size including its allowance for a standard mortar joint, which is why a 'nominal 16x8' block is actually manufactured slightly smaller (commonly 15.625 in × 7.625 in), so that once mortared in place, it occupies the full nominal footprint.",
      },
      {
        question: "Does this account for corners or openings like doors?",
        answer: "No, this calculates blocks for the total wall area you enter. Subtract the area of any door or window openings from your wall area before entering it for a more accurate count.",
      },
    ],
    relatedSlugs: ["brick-calculator", "concrete-calculator", "square-footage-calculator"],
  },
  {
    slug: "deck-calculator",
    category: "construction",
    title: "Deck Calculator",
    shortDescription: "Calculate how many deck boards you need based on deck size and board spacing.",
    metaDescription: "Free online deck calculator to estimate how many deck boards you need, based on deck area, board width, gap spacing and board length.",
    h1: "Deck Calculator",
    intro: "Calculate how many deck boards you need based on your deck's dimensions, board width, gap spacing between boards, and board length.",
    icon: "🪵",
    status: "live",
    inputFields: [
      { key: "deckLengthFt", label: "Deck Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 16" },
      { key: "deckWidthFt", label: "Deck Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 12" },
      { key: "boardWidthIn", label: "Board Width (in)", type: "number", step: 0.125, defaultValue: 5.5 },
      { key: "gapIn", label: "Gap Between Boards (in)", type: "number", step: 0.0625, defaultValue: 0.25 },
      { key: "boardLengthFt", label: "Board Length (ft)", type: "number", step: 1, defaultValue: 12 },
      { key: "wastePercent", label: "Waste (%)", type: "number", step: 1, defaultValue: 10 },
    ],
    resultFields: [
      { key: "deckArea", label: "Deck Area (sq ft)" },
      { key: "totalLinearFeetNeeded", label: "Total Linear Feet Needed" },
      { key: "boardsNeeded", label: "Boards Needed", highlight: true },
    ],
    calculate: (inputs) => {
      const deckLengthFt = Number(inputs.deckLengthFt);
      const deckWidthFt = Number(inputs.deckWidthFt);
      const boardWidthIn = Number(inputs.boardWidthIn ?? 5.5);
      const gapIn = Number(inputs.gapIn ?? 0.25);
      const boardLengthFt = Number(inputs.boardLengthFt ?? 12);
      const wastePercent = Number(inputs.wastePercent ?? 10);
      const output = calculateDeck(deckLengthFt, deckWidthFt, boardWidthIn, gapIn, boardLengthFt, wastePercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How deck board quantity is calculated",
        paragraphs: [
          "This calculator adds your gap spacing to the board width to get each board's effective coverage width, then divides the deck's total area by that effective width to find the total linear footage of decking needed, before dividing by your chosen board length to get a board count: Boards Needed = (Deck Area ÷ Effective Board Width × (1 + Waste%)) ÷ Board Length.",
        ],
      },
      {
        heading: "What this doesn't include",
        paragraphs: [
          "This calculator covers decking boards (the visible surface) only, it doesn't estimate the substructure beneath (joists, beams, footings) or fasteners, which depend heavily on your specific framing plan, span requirements and local building code, best worked out with a framing plan or contractor.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does the gap between boards matter?",
        answer: "A small gap is standard between deck boards for drainage and to allow for material expansion, and it slightly increases the effective width each board covers, meaning slightly fewer boards are needed than if boards were laid perfectly edge to edge.",
      },
      {
        question: "Should boards run the length or width of the deck?",
        answer: "This calculator doesn't assume a specific board orientation, it calculates total linear footage needed based on area and effective coverage width, which works the same regardless of which direction boards run.",
      },
      {
        question: "Does this include stairs or railings?",
        answer: "No, this covers the main deck surface area only. Stairs, railings and any additional decking on landings would need to be estimated separately and added to this result.",
      },
    ],
    relatedSlugs: ["fence-calculator", "square-footage-calculator", "flooring-calculator"],
  },
  {
    slug: "fence-calculator",
    category: "construction",
    title: "Fence Calculator",
    shortDescription: "Calculate how many posts, rails and pickets you need for a fence.",
    metaDescription: "Free online fence calculator to estimate the number of posts, rails and pickets needed for a fence, based on fence length and post spacing.",
    h1: "Fence Calculator",
    intro: "Calculate how many posts, rails and pickets you need for a fence, based on total fence length, post spacing, and picket size.",
    icon: "🚧",
    status: "live",
    inputFields: [
      { key: "fenceLengthFt", label: "Total Fence Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 100" },
      { key: "postSpacingFt", label: "Post Spacing (ft)", type: "number", step: 0.5, defaultValue: 8 },
      { key: "railsPerSection", label: "Rails per Section", type: "number", step: 1, defaultValue: 2 },
      { key: "picketWidthIn", label: "Picket Width (in)", type: "number", step: 0.125, defaultValue: 5.5 },
      { key: "picketGapIn", label: "Gap Between Pickets (in)", type: "number", step: 0.125, defaultValue: 0.25 },
    ],
    resultFields: [
      { key: "sections", label: "Fence Sections" },
      { key: "postsNeeded", label: "Posts Needed", highlight: true },
      { key: "railsNeeded", label: "Rails Needed", highlight: true },
      { key: "picketsNeeded", label: "Pickets Needed", highlight: true },
    ],
    calculate: (inputs) => {
      const fenceLengthFt = Number(inputs.fenceLengthFt);
      const postSpacingFt = Number(inputs.postSpacingFt ?? 8);
      const railsPerSection = Number(inputs.railsPerSection ?? 2);
      const picketWidthIn = Number(inputs.picketWidthIn ?? 5.5);
      const picketGapIn = Number(inputs.picketGapIn ?? 0.25);
      const output = calculateFence(fenceLengthFt, postSpacingFt, railsPerSection, picketWidthIn, picketGapIn);
      return { ...output };
    },
    explanation: [
      {
        heading: "How posts, rails and pickets are calculated",
        paragraphs: [
          "Fence sections are found by dividing total length by post spacing (rounded up), and posts needed is always one more than the number of sections, since each section is bounded by a post on both ends, with adjacent sections sharing a post. Rails needed is sections multiplied by how many rails run through each section (commonly 2 for a top and bottom rail, sometimes 3). Pickets needed divides the total fence length by each picket's width plus its gap.",
        ],
      },
      {
        heading: "Choosing post spacing",
        paragraphs: [
          "Post spacing of 6 to 8 feet is common for residential wood fences, balancing material cost against structural stability, closer spacing generally means a sturdier fence but more posts and post-hole digging. Taller fences or areas with high wind exposure often call for closer spacing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is the post count one more than the number of sections?",
        answer: "Picture a straight fence line divided into sections, each section needs a post at both its start and end, but adjacent sections share the post between them, so the total post count is always sections plus one, not sections times two.",
      },
      {
        question: "How many rails do I need per section?",
        answer: "2 rails (top and bottom) is standard for many picket and privacy fences, taller fences or those needing extra rigidity sometimes use 3 rails (adding a middle rail). Adjust the 'rails per section' field to match your design.",
      },
      {
        question: "Does this account for gates?",
        answer: "No, gates typically use different hardware and framing than standard fence sections, so budget for gate materials separately from this calculator's picket and rail estimates.",
      },
    ],
    relatedSlugs: ["deck-calculator", "square-footage-calculator", "paint-calculator"],
  },
  {
    slug: "wallpaper-calculator",
    category: "construction",
    title: "Wallpaper Calculator",
    shortDescription: "Calculate how many rolls of wallpaper you need for a room.",
    metaDescription: "Free online wallpaper calculator to estimate how many rolls of wallpaper you need for a room, accounting for pattern repeat and waste.",
    h1: "Wallpaper Calculator",
    intro: "Calculate how many rolls of wallpaper you need to cover your walls, accounting for roll coverage and a waste allowance for pattern matching and trimming.",
    icon: "🖼️",
    status: "live",
    inputFields: [
      { key: "wallLengthFt", label: "Total Wall Length / Perimeter (ft)", type: "number", step: 0.1, placeholder: "e.g. 40" },
      { key: "wallHeightFt", label: "Wall Height (ft)", type: "number", step: 0.1, placeholder: "e.g. 8" },
      { key: "rollCoverageSqFt", label: "Usable Coverage per Roll (sq ft)", type: "number", step: 1, defaultValue: 56 },
      { key: "wastePercent", label: "Waste / Pattern Matching (%)", type: "number", step: 1, defaultValue: 15 },
    ],
    resultFields: [
      { key: "wallArea", label: "Wall Area (sq ft)" },
      { key: "areaWithWaste", label: "Area Including Waste (sq ft)" },
      { key: "rollsNeeded", label: "Rolls Needed", highlight: true },
    ],
    calculate: (inputs) => {
      const wallLengthFt = Number(inputs.wallLengthFt);
      const wallHeightFt = Number(inputs.wallHeightFt);
      const rollCoverageSqFt = Number(inputs.rollCoverageSqFt ?? 56);
      const wastePercent = Number(inputs.wastePercent ?? 15);
      const output = calculateWallpaper(wallLengthFt, wallHeightFt, rollCoverageSqFt, wastePercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How wallpaper rolls needed is calculated",
        paragraphs: [
          "This calculator multiplies your total wall length (or room perimeter) by wall height to get total area, adds a waste allowance, then divides by the usable coverage of a single roll: Rolls Needed = (Wall Area × (1 + Waste%)) ÷ Roll Coverage. A standard single roll is commonly cited as offering about 56 square feet of usable coverage, though this varies by brand and roll width.",
        ],
      },
      {
        heading: "Why waste allowance matters more for wallpaper",
        paragraphs: [
          "Wallpaper typically needs a higher waste allowance than paint, commonly 15% or more, because patterns need to be matched at the seams between strips, which means cutting off and discarding a portion of each strip depending on the pattern's repeat length. Large, complex pattern repeats generally need an even higher waste allowance than simple or non-repeating patterns.",
        ],
      },
    ],
    faqs: [
      {
        question: "What counts as 'usable coverage' on a roll?",
        answer: "It's the actual area you can apply to a wall, after accounting for the roll's total area, this is typically somewhat less than the roll's total square footage due to trimming and pattern matching, which is why this calculator lets you adjust the coverage figure directly if your specific wallpaper's packaging states a different usable coverage.",
      },
      {
        question: "Should I buy extra rolls beyond this calculation?",
        answer: "Many installers recommend buying one extra roll beyond the calculated amount, especially for large or bold pattern repeats, since dye lots can vary between production runs and it can be hard to get an exact match later if you run short.",
      },
      {
        question: "Does this work for wallpaper borders?",
        answer: "No, this calculator is designed for full-wall rolls. Borders are sold and measured differently, typically by linear footage rather than roll coverage.",
      },
    ],
    relatedSlugs: ["paint-calculator", "square-footage-calculator", "drywall-calculator"],
  },
  {
    slug: "paver-calculator",
    category: "construction",
    title: "Paver Calculator",
    shortDescription: "Calculate pavers needed for a patio or walkway, plus sand and gravel base layers.",
    metaDescription: "Free online paver calculator to estimate the number of pavers needed for a patio or walkway, plus the sand bedding and gravel base layers underneath.",
    h1: "Paver Calculator",
    intro: "Calculate how many pavers you need for a patio or walkway, plus the sand bedding layer and gravel base layer typically needed underneath.",
    icon: "🪨",
    status: "live",
    inputFields: [
      { key: "patioLengthFt", label: "Patio Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 15" },
      { key: "patioWidthFt", label: "Patio Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "paverLengthIn", label: "Paver Length (in)", type: "number", step: 0.5, defaultValue: 12 },
      { key: "paverWidthIn", label: "Paver Width (in)", type: "number", step: 0.5, defaultValue: 12 },
      { key: "wastePercent", label: "Waste (%)", type: "number", step: 1, defaultValue: 10 },
      { key: "sandDepthIn", label: "Sand Bedding Depth (in)", type: "number", step: 0.25, defaultValue: 1 },
      { key: "gravelDepthIn", label: "Gravel Base Depth (in)", type: "number", step: 0.5, defaultValue: 4 },
    ],
    resultFields: [
      { key: "patioArea", label: "Patio Area (sq ft)" },
      { key: "paversNeeded", label: "Pavers Needed", highlight: true },
      { key: "sandCubicFeet", label: "Sand Bedding Needed (cu ft)" },
      { key: "gravelBaseCubicFeet", label: "Gravel Base Needed (cu ft)" },
    ],
    calculate: (inputs) => {
      const patioLengthFt = Number(inputs.patioLengthFt);
      const patioWidthFt = Number(inputs.patioWidthFt);
      const paverLengthIn = Number(inputs.paverLengthIn ?? 12);
      const paverWidthIn = Number(inputs.paverWidthIn ?? 12);
      const wastePercent = Number(inputs.wastePercent ?? 10);
      const sandDepthIn = Number(inputs.sandDepthIn ?? 1);
      const gravelDepthIn = Number(inputs.gravelDepthIn ?? 4);
      const output = calculatePaver(patioLengthFt, patioWidthFt, paverLengthIn, paverWidthIn, wastePercent, sandDepthIn, gravelDepthIn);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this differs from our Tile Calculator",
        paragraphs: [
          "The paver count itself uses the same basic math as our indoor Tile Calculator, area divided by unit size plus a waste allowance, but this calculator is purpose-built for outdoor hardscaping, additionally estimating the two prep layers a paver installation needs underneath: a compacted gravel base (commonly 4-6 inches, providing drainage and load support) and a leveling sand bedding layer (commonly 1 inch, providing a smooth, adjustable surface to set pavers into).",
        ],
      },
      {
        heading: "Why the base layers matter",
        paragraphs: [
          "Skipping or under-building the gravel base and sand bedding is one of the most common causes of pavers shifting, sinking or becoming uneven over time, especially in areas with freeze-thaw cycles or poor natural drainage. Getting these layers right upfront saves significant rework later.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does this calculator ask about sand and gravel too?",
        answer: "A paver patio isn't just the visible pavers, it's a layered system: compacted gravel base, sand bedding, then the pavers themselves. Estimating all three layers upfront gives a complete materials picture for the project, not just the pavers.",
      },
      {
        question: "How thick should my gravel base be?",
        answer: "4 inches is a common minimum for pedestrian patios and walkways in stable soil; areas with vehicle traffic, poor drainage, or freeze-thaw climates often need a deeper base, 6 inches or more. Check local guidance for your specific soil and climate conditions.",
      },
      {
        question: "Can I use this for a walkway instead of a patio?",
        answer: "Yes, the same length x width area math applies to a walkway, just enter its length and width like any other rectangular area.",
      },
    ],
    relatedSlugs: ["tile-calculator", "gravel-calculator", "square-footage-calculator"],
  },
  {
    slug: "drywall-calculator",
    category: "construction",
    title: "Drywall Calculator",
    shortDescription: "Calculate how many drywall sheets, plus joint compound and tape, you need.",
    metaDescription: "Free online drywall calculator to estimate the number of drywall sheets, joint compound buckets and tape rolls needed for a room.",
    h1: "Drywall Calculator",
    intro: "Calculate how many drywall sheets you need for your walls and ceiling, plus a rough estimate of joint compound and tape.",
    icon: "🪟",
    status: "live",
    inputFields: [
      { key: "totalAreaSqFt", label: "Total Wall + Ceiling Area (sq ft)", type: "number", step: 1, placeholder: "e.g. 400" },
      { key: "sheetWidthFt", label: "Sheet Width (ft)", type: "number", step: 0.5, defaultValue: 4 },
      { key: "sheetLengthFt", label: "Sheet Length (ft)", type: "number", step: 1, defaultValue: 8 },
      { key: "wastePercent", label: "Waste (%)", type: "number", step: 1, defaultValue: 10 },
    ],
    resultFields: [
      { key: "sheetsNeeded", label: "Drywall Sheets Needed", highlight: true },
      { key: "jointCompoundBuckets", label: "Joint Compound Buckets (est.)" },
      { key: "tapeRolls", label: "Joint Tape Rolls (est.)" },
    ],
    calculate: (inputs) => {
      const totalAreaSqFt = Number(inputs.totalAreaSqFt);
      const sheetWidthFt = Number(inputs.sheetWidthFt ?? 4);
      const sheetLengthFt = Number(inputs.sheetLengthFt ?? 8);
      const wastePercent = Number(inputs.wastePercent ?? 10);
      const output = calculateDrywall(totalAreaSqFt, sheetWidthFt, sheetLengthFt, wastePercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How sheet count and finishing supplies are estimated",
        paragraphs: [
          "Sheets needed is total area (plus waste) divided by sheet size: Sheets = (Total Area × (1 + Waste%)) ÷ (Sheet Width × Sheet Length), with standard 4 ft × 8 ft sheets as the default. Joint compound and tape are estimated using commonly cited coverage rules of thumb, roughly one 4.5 gallon pre-mixed bucket per 500 sq ft, and one standard tape roll per 350 sq ft, both rough planning figures rather than exact requirements.",
        ],
      },
      {
        heading: "Why waste allowance matters for drywall",
        paragraphs: [
          "Waste comes from cutting sheets around doors, windows, electrical boxes and corners, as well as occasional damaged sheets. 10% is a reasonable default for a fairly simple room; more complex layouts with many openings or angles typically need a higher allowance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I measure walls and ceiling together or separately?",
        answer: "Enter their combined total area, since this calculator just needs the total square footage to be covered, regardless of whether it's on walls or ceiling.",
      },
      {
        question: "Are the joint compound and tape estimates exact?",
        answer: "No, they're rough planning estimates based on commonly cited coverage rates. Actual usage varies with how many seams and corners your specific layout has, and how heavily compound is applied, so it's wise to buy a bit extra.",
      },
      {
        question: "Does this account for different drywall thicknesses?",
        answer: "No, sheet count is based purely on area and sheet dimensions, not thickness. Thickness (like 1/2 in vs 5/8 in) affects fire rating, soundproofing and cost per sheet, but not how many sheets are needed to cover a given area.",
      },
    ],
    relatedSlugs: ["wallpaper-calculator", "paint-calculator", "square-footage-calculator"],
  },
  {
    slug: "soil-calculator",
    category: "construction",
    title: "Soil Calculator",
    shortDescription: "Calculate bags of garden soil needed for a bed or container, by volume.",
    metaDescription: "Free online soil calculator to estimate how many bags of garden soil you need for a bed or container, based on area, depth and bag size.",
    h1: "Soil Calculator",
    intro: "Calculate how many bags of garden or potting soil you need for a bed or container, based on area, depth and bag size.",
    icon: "🌱",
    status: "live",
    inputFields: [
      { key: "lengthFt", label: "Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 8" },
      { key: "widthFt", label: "Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 4" },
      { key: "depthIn", label: "Depth (inches)", type: "number", step: 0.5, placeholder: "e.g. 8" },
      {
        key: "bagSize",
        label: "Bag Size",
        type: "select",
        options: [
          { label: "0.75 cu ft", value: "0.75" },
          { label: "1.5 cu ft", value: "1.5" },
          { label: "2 cu ft", value: "2" },
        ],
      },
    ],
    resultFields: [
      { key: "cubicFeet", label: "Cubic Feet Needed" },
      { key: "cubicYards", label: "Cubic Yards" },
      { key: "bagsNeeded", label: "Bags Needed", highlight: true },
    ],
    calculate: (inputs) => {
      const lengthFt = Number(inputs.lengthFt);
      const widthFt = Number(inputs.widthFt);
      const depthIn = Number(inputs.depthIn);
      const bagSize = String(inputs.bagSize) as SoilBagSize;
      const output = calculateSoil(lengthFt, widthFt, depthIn, bagSize);
      return { ...output };
    },
    explanation: [
      {
        heading: "How bagged soil quantity is calculated",
        paragraphs: [
          "Volume needed = Length × Width × Depth, converted to cubic feet, then divided by your chosen bag size to get a bag count. This calculator is focused on bagged garden or potting soil for beds and containers, common bag sizes are 0.75, 1.5 and 2 cubic feet.",
        ],
      },
      {
        heading: "Soil Calculator vs Topsoil Calculator",
        paragraphs: [
          "This calculator is built around bag counts for smaller projects like raised beds, garden borders or containers. For larger areas like a new lawn or major grading project, bulk topsoil delivered by the cubic yard is typically far more cost-effective than buying many bags, our Topsoil Calculator handles that bulk delivery case, working in cubic yards and delivered tons.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use garden soil or potting soil?",
        answer: "This calculator's volume math works the same regardless of soil type, garden soil is typically used for in-ground beds, while potting soil (usually lighter and better draining) is intended for containers. Check the bag size for your specific product.",
      },
      {
        question: "When should I use bulk topsoil instead of bags?",
        answer: "For larger areas, generally more than a few cubic yards, bulk delivery is usually significantly cheaper per unit of coverage than buying many individual bags. Our Topsoil Calculator is built for that bulk delivery scenario.",
      },
      {
        question: "Should I fill a raised bed completely with new soil?",
        answer: "Not necessarily, many gardeners fill the bottom portion of a deep raised bed with cheaper fill material and reserve quality garden soil for the top layer where roots are most active, adjust your depth input accordingly if you're doing this.",
      },
    ],
    relatedSlugs: ["topsoil-calculator", "mulch-calculator", "square-footage-calculator"],
  },
  {
    slug: "topsoil-calculator",
    category: "construction",
    title: "Topsoil Calculator",
    shortDescription: "Calculate cubic yards and tons of bulk topsoil needed for a large area.",
    metaDescription: "Free online topsoil calculator to estimate cubic yards and tons of bulk topsoil needed for a lawn or large landscaping project.",
    h1: "Topsoil Calculator",
    intro: "Calculate how many cubic yards, and how many tons, of bulk topsoil you need for a new lawn or large landscaping area.",
    icon: "🟫",
    status: "live",
    inputFields: [
      { key: "lengthFt", label: "Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 50" },
      { key: "widthFt", label: "Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 30" },
      { key: "depthIn", label: "Depth (inches)", type: "number", step: 0.5, placeholder: "e.g. 4" },
    ],
    resultFields: [
      { key: "cubicYards", label: "Cubic Yards Needed", highlight: true },
      { key: "tonsNeeded", label: "Approx. Weight (Tons)", highlight: true },
      { key: "cubicFeet", label: "Cubic Feet" },
    ],
    calculate: (inputs) => {
      const lengthFt = Number(inputs.lengthFt);
      const widthFt = Number(inputs.widthFt);
      const depthIn = Number(inputs.depthIn);
      const output = calculateTopsoil(lengthFt, widthFt, depthIn);
      return { ...output };
    },
    explanation: [
      {
        heading: "How bulk topsoil quantity is calculated",
        paragraphs: [
          "Volume needed = Length × Width × Depth, converted to cubic yards, since that's how bulk topsoil is typically quoted and delivered. Weight is estimated using a typical loose topsoil density of about 1.1 tons per cubic yard, a commonly cited planning figure from bulk landscaping suppliers, useful for estimating delivery truck loads.",
        ],
      },
      {
        heading: "Topsoil Calculator vs Soil Calculator",
        paragraphs: [
          "This calculator is built for bulk delivery scenarios, larger areas like a new lawn, regrading, or major landscaping, where topsoil is quoted and delivered by the cubic yard (or truckload). For smaller garden beds or containers where buying individual bags makes more sense, our Soil Calculator gives a bag count instead.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much topsoil does a delivery truck typically carry?",
        answer: "This varies by supplier and truck size, but small dump trucks commonly carry somewhere in the range of 5 to 10 cubic yards per load, ask your supplier what their trucks carry to figure out how many deliveries you'll need.",
      },
      {
        question: "Does topsoil density really vary that much?",
        answer: "Yes, moisture content and composition (sand, clay, organic matter content) can meaningfully affect topsoil's weight per cubic yard. 1.1 tons per cubic yard is a reasonable average planning estimate, but your supplier can give you a more precise figure for their specific product.",
      },
      {
        question: "How deep should topsoil be for a new lawn?",
        answer: "4 to 6 inches of quality topsoil is commonly recommended as a base for a new lawn, deep enough to support healthy root development for grass, though this can vary based on your existing soil quality and drainage.",
      },
    ],
    relatedSlugs: ["soil-calculator", "mulch-calculator", "gravel-calculator"],
  },
  {
    slug: "cubic-yard-calculator",
    category: "construction",
    title: "Cubic Yard Calculator",
    shortDescription: "Calculate volume in cubic yards from length, width and height, in any units.",
    metaDescription: "Free online cubic yard calculator to calculate volume in cubic yards (plus cubic feet and cubic meters) from length, width and height in any units.",
    h1: "Cubic Yard Calculator",
    intro: "Calculate the volume of a space in cubic yards, from length, width and height, entered in whichever units are most convenient for you.",
    icon: "📦",
    status: "live",
    inputFields: [
      { key: "length", label: "Length", type: "number", step: 0.01, placeholder: "e.g. 10" },
      {
        key: "lengthUnit", label: "Length Unit", type: "select",
        options: [
          { label: "Feet", value: "ft" }, { label: "Inches", value: "in" }, { label: "Yards", value: "yd" },
          { label: "Meters", value: "m" }, { label: "Centimeters", value: "cm" },
        ],
      },
      { key: "width", label: "Width", type: "number", step: 0.01, placeholder: "e.g. 10" },
      {
        key: "widthUnit", label: "Width Unit", type: "select",
        options: [
          { label: "Feet", value: "ft" }, { label: "Inches", value: "in" }, { label: "Yards", value: "yd" },
          { label: "Meters", value: "m" }, { label: "Centimeters", value: "cm" },
        ],
      },
      { key: "height", label: "Height / Depth", type: "number", step: 0.01, placeholder: "e.g. 1" },
      {
        key: "heightUnit", label: "Height Unit", type: "select",
        options: [
          { label: "Feet", value: "ft" }, { label: "Inches", value: "in" }, { label: "Yards", value: "yd" },
          { label: "Meters", value: "m" }, { label: "Centimeters", value: "cm" },
        ],
      },
    ],
    resultFields: [
      { key: "cubicYards", label: "Cubic Yards", highlight: true },
      { key: "cubicFeet", label: "Cubic Feet" },
      { key: "cubicMeters", label: "Cubic Meters" },
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length);
      const lengthUnit = String(inputs.lengthUnit) as DimensionUnit;
      const width = Number(inputs.width);
      const widthUnit = String(inputs.widthUnit) as DimensionUnit;
      const height = Number(inputs.height);
      const heightUnit = String(inputs.heightUnit) as DimensionUnit;
      const output = calculateCubicVolume(length, lengthUnit, width, widthUnit, height, heightUnit);
      return { ...output };
    },
    explanation: [
      {
        heading: "How volume in cubic yards is calculated",
        paragraphs: [
          "This calculator converts each of your length, width and height entries to feet (regardless of which unit you chose for each), multiplies them together for a volume in cubic feet, then divides by 27 (since a cubic yard is 3 ft × 3 ft × 3 ft = 27 cubic feet) to get cubic yards. Cubic feet and cubic meters are shown alongside for convenience.",
        ],
      },
      {
        heading: "Why cubic yards matter for material orders",
        paragraphs: [
          "Bulk materials like concrete, mulch, gravel, topsoil and sand are commonly quoted and delivered by the cubic yard in the US, this calculator is a quick, material-agnostic way to convert a space's dimensions into that unit before calling a supplier, without needing to work out any specific material's density.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I mix units, like feet for length and meters for width?",
        answer: "Yes, each dimension has its own unit selector, so you can freely mix feet, inches, yards, meters or centimeters across length, width and height, this calculator converts each one internally before computing volume.",
      },
      {
        question: "How is this different from the material-specific calculators like Mulch or Gravel Calculator?",
        answer: "This is a generic volume calculator with no material assumptions, it just converts dimensions into cubic yards, feet and meters. Our material-specific calculators (Mulch, Gravel, Concrete, Topsoil, etc.) build on this same volume math but add material density to also estimate weight, bags, or bulk order quantities for that specific material.",
      },
      {
        question: "Why does the result show cubic feet and cubic meters too?",
        answer: "Since suppliers and contexts vary in which unit they quote, showing all three at once saves you from needing a separate conversion step if you end up needing a different unit than cubic yards.",
      },
    ],
    relatedSlugs: ["cubic-feet-calculator", "cubic-meter-calculator", "square-footage-calculator"],
  },
  {
    slug: "cubic-feet-calculator",
    category: "construction",
    title: "Cubic Feet Calculator",
    shortDescription: "Calculate volume in cubic feet from length, width and height, in any units.",
    metaDescription: "Free online cubic feet calculator to calculate volume in cubic feet (plus cubic yards and cubic meters) from length, width and height in any units.",
    h1: "Cubic Feet Calculator",
    intro: "Calculate the volume of a space in cubic feet, from length, width and height, entered in whichever units are most convenient for you.",
    icon: "📦",
    status: "live",
    inputFields: [
      { key: "length", label: "Length", type: "number", step: 0.01, placeholder: "e.g. 10" },
      {
        key: "lengthUnit", label: "Length Unit", type: "select",
        options: [
          { label: "Feet", value: "ft" }, { label: "Inches", value: "in" }, { label: "Yards", value: "yd" },
          { label: "Meters", value: "m" }, { label: "Centimeters", value: "cm" },
        ],
      },
      { key: "width", label: "Width", type: "number", step: 0.01, placeholder: "e.g. 10" },
      {
        key: "widthUnit", label: "Width Unit", type: "select",
        options: [
          { label: "Feet", value: "ft" }, { label: "Inches", value: "in" }, { label: "Yards", value: "yd" },
          { label: "Meters", value: "m" }, { label: "Centimeters", value: "cm" },
        ],
      },
      { key: "height", label: "Height / Depth", type: "number", step: 0.01, placeholder: "e.g. 1" },
      {
        key: "heightUnit", label: "Height Unit", type: "select",
        options: [
          { label: "Feet", value: "ft" }, { label: "Inches", value: "in" }, { label: "Yards", value: "yd" },
          { label: "Meters", value: "m" }, { label: "Centimeters", value: "cm" },
        ],
      },
    ],
    resultFields: [
      { key: "cubicFeet", label: "Cubic Feet", highlight: true },
      { key: "cubicYards", label: "Cubic Yards" },
      { key: "cubicMeters", label: "Cubic Meters" },
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length);
      const lengthUnit = String(inputs.lengthUnit) as DimensionUnit;
      const width = Number(inputs.width);
      const widthUnit = String(inputs.widthUnit) as DimensionUnit;
      const height = Number(inputs.height);
      const heightUnit = String(inputs.heightUnit) as DimensionUnit;
      const output = calculateCubicVolume(length, lengthUnit, width, widthUnit, height, heightUnit);
      return { ...output };
    },
    explanation: [
      {
        heading: "How volume in cubic feet is calculated",
        paragraphs: [
          "This calculator converts each of your length, width and height entries to feet (regardless of which unit you chose for each) and multiplies them together: Cubic Feet = Length (ft) × Width (ft) × Height (ft). Cubic yards and cubic meters are shown alongside for convenience.",
        ],
      },
      {
        heading: "When cubic feet is the unit you need",
        paragraphs: [
          "Cubic feet is commonly used for smaller volumes, like bagged materials (soil, mulch), appliance capacities (refrigerators, storage bins), aquarium or planter volume, or shipping and freight dimensions, generally where cubic yards would be an inconveniently large unit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I mix units, like feet for length and inches for height?",
        answer: "Yes, each dimension has its own unit selector, so you can freely mix feet, inches, yards, meters or centimeters across length, width and height, this calculator converts each one internally before computing volume.",
      },
      {
        question: "How is this different from the Cubic Yard Calculator?",
        answer: "Both use the exact same underlying volume calculation and show all three units (cubic feet, cubic yards, cubic meters) every time, this page simply highlights cubic feet as the primary result, useful if that's the unit you specifically need.",
      },
      {
        question: "What if my result seems too large or small?",
        answer: "Double check the unit selected for each dimension, since mixing up feet and inches, for example, is a common source of results that are off by a large factor.",
      },
    ],
    relatedSlugs: ["cubic-yard-calculator", "cubic-meter-calculator", "square-footage-calculator"],
  },
  {
    slug: "cubic-meter-calculator",
    category: "construction",
    title: "Cubic Meter Calculator",
    shortDescription: "Calculate volume in cubic meters from length, width and height, in any units.",
    metaDescription: "Free online cubic meter calculator to calculate volume in cubic meters (plus cubic feet and cubic yards) from length, width and height in any units.",
    h1: "Cubic Meter Calculator",
    intro: "Calculate the volume of a space in cubic meters, from length, width and height, entered in whichever units are most convenient for you.",
    icon: "📦",
    status: "live",
    inputFields: [
      { key: "length", label: "Length", type: "number", step: 0.01, placeholder: "e.g. 3" },
      {
        key: "lengthUnit", label: "Length Unit", type: "select",
        options: [
          { label: "Meters", value: "m" }, { label: "Centimeters", value: "cm" }, { label: "Feet", value: "ft" },
          { label: "Inches", value: "in" }, { label: "Yards", value: "yd" },
        ],
      },
      { key: "width", label: "Width", type: "number", step: 0.01, placeholder: "e.g. 3" },
      {
        key: "widthUnit", label: "Width Unit", type: "select",
        options: [
          { label: "Meters", value: "m" }, { label: "Centimeters", value: "cm" }, { label: "Feet", value: "ft" },
          { label: "Inches", value: "in" }, { label: "Yards", value: "yd" },
        ],
      },
      { key: "height", label: "Height / Depth", type: "number", step: 0.01, placeholder: "e.g. 0.3" },
      {
        key: "heightUnit", label: "Height Unit", type: "select",
        options: [
          { label: "Meters", value: "m" }, { label: "Centimeters", value: "cm" }, { label: "Feet", value: "ft" },
          { label: "Inches", value: "in" }, { label: "Yards", value: "yd" },
        ],
      },
    ],
    resultFields: [
      { key: "cubicMeters", label: "Cubic Meters", highlight: true },
      { key: "cubicFeet", label: "Cubic Feet" },
      { key: "cubicYards", label: "Cubic Yards" },
    ],
    calculate: (inputs) => {
      const length = Number(inputs.length);
      const lengthUnit = String(inputs.lengthUnit) as DimensionUnit;
      const width = Number(inputs.width);
      const widthUnit = String(inputs.widthUnit) as DimensionUnit;
      const height = Number(inputs.height);
      const heightUnit = String(inputs.heightUnit) as DimensionUnit;
      const output = calculateCubicVolume(length, lengthUnit, width, widthUnit, height, heightUnit);
      return { ...output };
    },
    explanation: [
      {
        heading: "How volume in cubic meters is calculated",
        paragraphs: [
          "This calculator converts each of your length, width and height entries to feet internally, multiplies them for a volume in cubic feet, then converts to cubic meters using the standard factor of 1 cubic foot = 0.0283168 cubic meters. Cubic feet and cubic yards are shown alongside for convenience.",
        ],
      },
      {
        heading: "When cubic meters is the unit you need",
        paragraphs: [
          "Cubic meters is the standard metric unit for volume used throughout most of the world outside the US, common for shipping container capacity, concrete and bulk material orders in metric countries, and general construction specifications where metric units are standard.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I enter dimensions in feet even though the result is in cubic meters?",
        answer: "Yes, each dimension has its own unit selector independent of the others, so you can enter measurements in feet, inches or yards and still get an accurate cubic meter result, this calculator handles the conversion for you.",
      },
      {
        question: "How is this different from the Cubic Feet or Cubic Yard Calculator?",
        answer: "All three use the exact same underlying volume calculation and show all three units every time, this page simply highlights cubic meters as the primary result, useful if that's the unit you specifically need for a metric-based order or specification.",
      },
      {
        question: "What's the exact conversion factor used?",
        answer: "1 cubic foot equals exactly 0.0283168 cubic meters, the standard, internationally recognized conversion factor, applied after this calculator computes your volume in cubic feet from the dimensions you entered.",
      },
    ],
    relatedSlugs: ["cubic-yard-calculator", "cubic-feet-calculator", "square-footage-calculator"],
  },
  {
    slug: "cement-calculator",
    category: "construction",
    title: "Cement Calculator",
    shortDescription: "Calculate cement, sand and aggregate needed from a mix ratio.",
    metaDescription: "Free online cement calculator to estimate bags of cement, plus sand and aggregate volume, needed for a concrete or mortar mix ratio like 1:2:4.",
    h1: "Cement Calculator",
    intro: "Calculate cement bags, sand and aggregate volume needed for a concrete or mortar mix, based on your target mix ratio (like 1:2:4) and the volume you need to fill.",
    icon: "🏭",
    status: "live",
    inputFields: [
      { key: "lengthFt", label: "Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "widthFt", label: "Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "thicknessIn", label: "Thickness (in)", type: "number", step: 0.25, placeholder: "e.g. 4" },
      { key: "cementParts", label: "Mix Ratio - Cement Parts", type: "number", step: 0.5, defaultValue: 1 },
      { key: "sandParts", label: "Mix Ratio - Sand Parts", type: "number", step: 0.5, defaultValue: 2 },
      { key: "aggregateParts", label: "Mix Ratio - Aggregate Parts", type: "number", step: 0.5, defaultValue: 4 },
    ],
    resultFields: [
      { key: "cementBags", label: "Cement Bags Needed (94 lb)", highlight: true },
      { key: "sandCuFt", label: "Sand Needed (cu ft)", highlight: true },
      { key: "aggregateCuFt", label: "Aggregate Needed (cu ft)", highlight: true },
      { key: "wetVolumeCuFt", label: "Finished (Wet) Volume (cu ft)" },
      { key: "dryVolumeCuFt", label: "Total Dry Material Volume (cu ft)" },
    ],
    calculate: (inputs) => {
      const lengthFt = Number(inputs.lengthFt);
      const widthFt = Number(inputs.widthFt);
      const thicknessIn = Number(inputs.thicknessIn);
      const cementParts = Number(inputs.cementParts ?? 1);
      const sandParts = Number(inputs.sandParts ?? 2);
      const aggregateParts = Number(inputs.aggregateParts ?? 4);
      const output = calculateCement(lengthFt, widthFt, thicknessIn, cementParts, sandParts, aggregateParts);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this differs from our Concrete Calculator",
        paragraphs: [
          "Our Concrete Calculator estimates bags of pre-mixed concrete (like standard 40/60/80 lb bags) by their weight yield, the simplest approach when buying pre-mixed bags. This calculator instead works from a raw mix ratio, cement to sand to aggregate, like the common 1:2:4 general-purpose ratio, the approach used when mixing concrete or mortar from separate raw materials rather than a single pre-mixed bag.",
        ],
      },
      {
        heading: "Why dry volume is larger than finished volume",
        paragraphs: [
          "Loose dry materials (cement, sand, aggregate) take up more space than they do once mixed with water and compacted, because dry particles have air gaps between them that close up during mixing. This calculator applies a standard bulking factor of 1.54 to convert your target finished (wet) volume into the total dry material volume you need to start with, then splits that dry volume across your mix ratio.",
        ],
      },
    ],
    faqs: [
      {
        question: "What mix ratio should I use?",
        answer: "1:2:4 (cement:sand:aggregate) is a commonly used general-purpose ratio for many non-structural applications. Ratios like 1:1.5:3 are used for higher-strength applications, and 1:3:6 for lower-strength, less critical work. Check project specifications or a structural engineer's guidance for anything load-bearing.",
      },
      {
        question: "Why does this use 94 lb cement bags?",
        answer: "94 lb is the standard weight of a full bag of Portland cement in the US, yielding approximately 1 cubic foot of loose cement material, the figure this calculator uses to convert cement volume into a bag count.",
      },
      {
        question: "Does this calculator account for water?",
        answer: "No, water quantity depends on the desired water-cement ratio for your specific strength and workability needs, and isn't part of the dry volume bulking calculation, consult mix design guidance for the correct water quantity for your ratio.",
      },
    ],
    relatedSlugs: ["concrete-calculator", "sand-calculator", "concrete-block-calculator"],
  },
  {
    slug: "sand-calculator",
    category: "construction",
    title: "Sand Calculator",
    shortDescription: "Calculate cubic yards and weight of sand needed for a project.",
    metaDescription: "Free online sand calculator to estimate cubic yards and tons of sand needed for a project, based on area and depth.",
    h1: "Sand Calculator",
    intro: "Calculate how many cubic yards, and how many tons, of sand you need based on the area and depth you're filling.",
    icon: "🏖️",
    status: "live",
    inputFields: [
      { key: "lengthFt", label: "Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 12" },
      { key: "widthFt", label: "Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 8" },
      { key: "depthIn", label: "Depth (inches)", type: "number", step: 0.5, placeholder: "e.g. 2" },
    ],
    resultFields: [
      { key: "cubicYards", label: "Cubic Yards Needed", highlight: true },
      { key: "tonsNeeded", label: "Approx. Weight (Tons)", highlight: true },
      { key: "cubicFeet", label: "Cubic Feet" },
    ],
    calculate: (inputs) => {
      const lengthFt = Number(inputs.lengthFt);
      const widthFt = Number(inputs.widthFt);
      const depthIn = Number(inputs.depthIn);
      const output = calculateSand(lengthFt, widthFt, depthIn);
      return { ...output };
    },
    explanation: [
      {
        heading: "How sand quantity is calculated",
        paragraphs: [
          "Volume needed = Length × Width × Depth, converted to cubic yards. Weight is estimated using a typical dry sand density of about 1.35 tons per cubic yard, a commonly cited planning figure, useful for play areas, paver bedding, garden paths, or as a base layer beneath other materials.",
        ],
      },
      {
        heading: "Different uses need different sand types and depths",
        paragraphs: [
          "Play sand for a sandbox, leveling sand for pavers, and bedding sand for a paver base are all different products with slightly different properties, though this calculator's volume and weight math applies the same regardless of type. Depth requirements vary by use, a play area might use several inches, while paver bedding sand is typically just 1 inch.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does sand density really vary much between types?",
        answer: "Yes, somewhat, moisture content and grain size affect density. 1.35 tons per cubic yard is a reasonable average estimate for dry sand; wet sand can weigh noticeably more per cubic yard.",
      },
      {
        question: "How is this different from the Paver Calculator's sand estimate?",
        answer: "The Paver Calculator includes a sand bedding estimate as one part of a larger paver project calculation (alongside paver count and gravel base). This calculator is a standalone, general-purpose sand estimator for any use, not tied to a paver project specifically.",
      },
      {
        question: "Should I buy bagged or bulk sand?",
        answer: "For small quantities, bagged sand is convenient. For larger areas, generally more than a cubic yard or two, bulk delivery is usually significantly more cost-effective per unit of coverage.",
      },
    ],
    relatedSlugs: ["gravel-volume-calculator", "cement-calculator", "paver-calculator"],
  },
  {
    slug: "gravel-volume-calculator",
    category: "construction",
    title: "Gravel Volume Calculator",
    shortDescription: "Calculate gravel volume and weight for rectangular, circular or triangular areas.",
    metaDescription: "Free online gravel volume calculator supporting rectangular, circular and triangular areas, with a choice of gravel material type and density.",
    h1: "Gravel Volume Calculator",
    intro: "Calculate gravel volume and weight for rectangular, circular or triangular areas, with a choice of common gravel material types, each with its own typical density.",
    icon: "⚪",
    status: "live",
    inputFields: [
      {
        key: "shape",
        label: "Area Shape",
        type: "select",
        options: [
          { label: "Rectangle", value: "rectangle" },
          { label: "Circle", value: "circle" },
          { label: "Triangle", value: "triangle" },
        ],
      },
      { key: "dimensionA", label: "Length / Diameter / Base (ft)", type: "number", step: 0.1, placeholder: "e.g. 10" },
      { key: "dimensionB", label: "Width / Height (ft, not used for circle)", type: "number", step: 0.1, defaultValue: 0 },
      { key: "depthIn", label: "Depth (inches)", type: "number", step: 0.5, placeholder: "e.g. 3" },
      {
        key: "gravelType",
        label: "Gravel Type",
        type: "select",
        options: [
          { label: "Crushed Stone", value: "crushedStone" },
          { label: "Pea Gravel", value: "peaGravel" },
          { label: "River Rock", value: "riverRock" },
          { label: "Decomposed Granite", value: "decomposedGranite" },
        ],
      },
    ],
    resultFields: [
      { key: "areaSqFt", label: "Area (sq ft)" },
      { key: "cubicYards", label: "Cubic Yards Needed", highlight: true },
      { key: "tonsNeeded", label: "Approx. Weight (Tons)", highlight: true },
      { key: "cubicFeet", label: "Cubic Feet" },
    ],
    calculate: (inputs) => {
      const shape = String(inputs.shape) as GravelShape;
      const dimensionA = Number(inputs.dimensionA);
      const dimensionB = Number(inputs.dimensionB ?? 0);
      const depthIn = Number(inputs.depthIn);
      const gravelType = String(inputs.gravelType) as GravelType;
      const output = calculateGravelVolume(shape, dimensionA, dimensionB, depthIn, gravelType);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this differs from our original Gravel Calculator",
        paragraphs: [
          "Our original Gravel Calculator handles rectangular areas with a single fixed gravel density. This calculator adds support for circular areas (like a round fire pit surround) and triangular areas (like an odd-shaped corner bed), and lets you choose from several common gravel material types, crushed stone, pea gravel, river rock, or decomposed granite, each with its own typical density, so the weight estimate better matches the specific material you're buying.",
        ],
      },
      {
        heading: "How area is calculated for each shape",
        paragraphs: [
          "Rectangle area is length × width. Circle area uses π × radius², with the diameter you enter divided by 2 to get the radius. Triangle area is 0.5 × base × height. Once the area is found, it's multiplied by depth (converted from inches to feet) to get volume, then converted to cubic yards and weight using your chosen gravel type's density.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which gravel type should I choose?",
        answer: "Crushed stone (angular, interlocking) is common for driveways and drainage. Pea gravel (small, rounded) is popular for pathways and decorative beds. River rock (larger, rounded) is often used decoratively. Decomposed granite is popular for pathways with a more natural, compactable surface. Each has a slightly different typical density, reflected in this calculator's weight estimate.",
      },
      {
        question: "What if my area is an irregular shape not listed here?",
        answer: "Break the area down into multiple rectangles, circles or triangles, calculate each separately, and add the results together for a combined estimate.",
      },
      {
        question: "Do I need to enter the second dimension for a circle?",
        answer: "No, for a circle, enter only the diameter in the first field, the second dimension field is ignored for circular areas.",
      },
    ],
    relatedSlugs: ["gravel-calculator", "sand-calculator", "square-footage-calculator"],
  },
  {
    slug: "rebar-calculator",
    category: "construction",
    title: "Rebar Calculator",
    shortDescription: "Calculate rebar count, length and weight for a two-way reinforcement grid.",
    metaDescription: "Free online rebar calculator to estimate the number of bars, total length and weight needed for a two-way reinforcement grid in a concrete slab.",
    h1: "Rebar Calculator",
    intro: "Calculate the number of rebar pieces, total linear feet, and total weight needed for a two-way reinforcement grid across a rectangular concrete slab.",
    icon: "🔩",
    status: "live",
    inputFields: [
      { key: "slabLengthFt", label: "Slab Length (ft)", type: "number", step: 0.1, placeholder: "e.g. 20" },
      { key: "slabWidthFt", label: "Slab Width (ft)", type: "number", step: 0.1, placeholder: "e.g. 15" },
      { key: "spacingIn", label: "Grid Spacing (in)", type: "number", step: 1, defaultValue: 12 },
      {
        key: "barSize",
        label: "Rebar Size",
        type: "select",
        options: [
          { label: "#3 (3/8 in)", value: "3" },
          { label: "#4 (1/2 in)", value: "4" },
          { label: "#5 (5/8 in)", value: "5" },
          { label: "#6 (3/4 in)", value: "6" },
          { label: "#7 (7/8 in)", value: "7" },
          { label: "#8 (1 in)", value: "8" },
        ],
      },
      { key: "stockBarLengthFt", label: "Stock Bar Length (ft)", type: "number", step: 1, defaultValue: 20 },
    ],
    resultFields: [
      { key: "barsLengthwise", label: "Bars Running Lengthwise" },
      { key: "barsWidthwise", label: "Bars Running Widthwise" },
      { key: "totalLinearFeet", label: "Total Linear Feet" },
      { key: "barsNeeded", label: "Stock Bars Needed", highlight: true },
      { key: "totalWeightLbs", label: "Total Weight (lbs)", highlight: true },
    ],
    calculate: (inputs) => {
      const slabLengthFt = Number(inputs.slabLengthFt);
      const slabWidthFt = Number(inputs.slabWidthFt);
      const spacingIn = Number(inputs.spacingIn ?? 12);
      const barSize = String(inputs.barSize) as RebarSize;
      const stockBarLengthFt = Number(inputs.stockBarLengthFt ?? 20);
      const output = calculateRebar(slabLengthFt, slabWidthFt, spacingIn, barSize, stockBarLengthFt);
      return { ...output };
    },
    explanation: [
      {
        heading: "How the reinforcement grid is calculated",
        paragraphs: [
          "This calculator assumes a standard two-way grid, bars running in both directions, spaced evenly at your chosen interval. The number of bars running lengthwise depends on how many fit across the slab's width (and vice versa for widthwise bars), each spaced at your entered grid spacing. Total linear footage is then divided by your stock bar length (commonly 20 ft) to find how many individual bars to order.",
        ],
      },
      {
        heading: "Rebar size and weight",
        paragraphs: [
          "Rebar 'size' numbers (like #4 or #5) correspond to the bar's diameter in eighths of an inch, a #4 bar is 1/2 inch, a #5 is 5/8 inch, and so on. Larger bars weigh more per foot and are used for greater reinforcement strength, this calculator uses standard published weight-per-foot figures for each size to estimate total weight.",
        ],
      },
    ],
    faqs: [
      {
        question: "What grid spacing should I use?",
        answer: "12 inches on-center is common for many residential slab applications, but required spacing depends on the slab's load requirements and local building code. Always confirm the correct spacing for your specific project with an engineer or your local code.",
      },
      {
        question: "Does this calculator account for overlap/laps between bars?",
        answer: "No, it estimates a simple butt-to-edge grid based on slab dimensions. Real installations typically overlap (lap) adjoining bars by a code-specified length, which would increase actual material needed slightly beyond this estimate.",
      },
      {
        question: "Is this calculator sufficient for structural design purposes?",
        answer: "No, this is a material quantity estimate only, not a structural design tool. Rebar size, spacing and grid pattern for any load-bearing application should be specified by a structural engineer according to your project's actual requirements and local building code.",
      },
    ],
    relatedSlugs: ["concrete-calculator", "beam-load-calculator", "steel-weight-calculator"],
  },
  {
    slug: "beam-load-calculator",
    category: "construction",
    title: "Beam Load Calculator",
    shortDescription: "Estimate the allowable load on a simply supported rectangular beam.",
    metaDescription: "Free online beam load calculator to estimate the allowable uniformly distributed or point load on a simply supported rectangular beam, based on bending stress.",
    h1: "Beam Load Calculator",
    intro: "Estimate the allowable load on a simply supported rectangular beam, based on a basic bending stress calculation. For educational and rough planning use only, see the important note below.",
    icon: "📏",
    status: "live",
    inputFields: [
      { key: "widthIn", label: "Beam Width (in)", type: "number", step: 0.25, placeholder: "e.g. 1.5" },
      { key: "depthIn", label: "Beam Depth (in)", type: "number", step: 0.25, placeholder: "e.g. 9.25" },
      { key: "spanFt", label: "Span Between Supports (ft)", type: "number", step: 0.5, placeholder: "e.g. 12" },
      { key: "allowableStress", label: "Allowable Bending Stress (psi)", type: "number", step: 10, defaultValue: 1000 },
      {
        key: "loadType",
        label: "Load Type",
        type: "select",
        options: [
          { label: "Uniformly Distributed Load", value: "distributed" },
          { label: "Point Load at Center", value: "point" },
        ],
      },
    ],
    resultFields: [
      { key: "sectionModulus", label: "Section Modulus (in³)" },
      { key: "allowableMomentFtLbs", label: "Allowable Bending Moment (ft-lb)" },
      { key: "maxUdlLbsPerFt", label: "Max Distributed Load (lb/ft)", highlight: true },
      { key: "maxTotalUdlLbs", label: "Max Total Distributed Load (lb)", highlight: true },
      { key: "maxPointLoadLbs", label: "Max Point Load at Center (lb)", highlight: true },
    ],
    calculate: (inputs) => {
      const widthIn = Number(inputs.widthIn);
      const depthIn = Number(inputs.depthIn);
      const spanFt = Number(inputs.spanFt);
      const allowableStress = Number(inputs.allowableStress ?? 1000);
      const loadType = String(inputs.loadType) as BeamLoadType;
      const output = calculateBeamLoad(widthIn, depthIn, spanFt, allowableStress, loadType);
      return {
        sectionModulus: output.sectionModulus,
        allowableMomentFtLbs: output.allowableMomentFtLbs,
        maxUdlLbsPerFt: output.maxUdlLbsPerFt === null ? "N/A (point load selected)" : output.maxUdlLbsPerFt,
        maxTotalUdlLbs: output.maxTotalUdlLbs === null ? "N/A (point load selected)" : output.maxTotalUdlLbs,
        maxPointLoadLbs: output.maxPointLoadLbs === null ? "N/A (distributed load selected)" : output.maxPointLoadLbs,
      };
    },
    explanation: [
      {
        heading: "How this estimate is calculated",
        paragraphs: [
          "This calculator computes the beam's section modulus (S = width × depth² ÷ 6 for a rectangular cross-section), multiplies it by your allowable bending stress to get an allowable bending moment, then solves for the maximum load that would produce that moment: for a uniformly distributed load, max load = 8 × moment ÷ span²; for a center point load, max load = 4 × moment ÷ span, both standard formulas for a simply supported beam.",
        ],
      },
      {
        heading: "Important: this is a simplified bending-only estimate",
        paragraphs: [
          "This calculator checks bending stress only. It does not check deflection limits (a beam can meet bending strength but still sag more than acceptable), shear capacity, buckling, load duration factors, connection design, or any other requirement that matters for a safe, code-compliant structure. Actual beam sizing for any real construction project must be verified by a licensed structural engineer against your local building code, do not use this calculator as the sole basis for a real structural decision.",
        ],
      },
    ],
    faqs: [
      {
        question: "What allowable bending stress value should I use?",
        answer: "This varies significantly by material and grade, common softwood construction lumber is often in the 700-1500 psi range, structural steel (A36) is often around 22,000 psi allowable. Use the published allowable stress for your specific material and grade, or consult an engineer, this calculator doesn't include built-in material presets since the correct value depends heavily on your specific material grade and application.",
      },
      {
        question: "Why does the result differ for distributed vs point loads?",
        answer: "A point load at the center of a span creates a higher peak bending moment than the same total weight spread evenly across the span, so a beam can typically support more total weight as a distributed load than as an equivalent single point load, which is why this calculator handles the two cases with different formulas.",
      },
      {
        question: "Can I use this to size a beam for my deck or house?",
        answer: "No, use this only to build intuition about how beam dimensions and span relate to load capacity. Any beam supporting a real structure, a deck, floor, or roof, must be sized by a qualified professional accounting for all relevant load types, code requirements and safety factors.",
      },
    ],
    relatedSlugs: ["rebar-calculator", "steel-weight-calculator", "lumber-calculator"],
  },
  {
    slug: "steel-weight-calculator",
    category: "construction",
    title: "Steel Weight Calculator",
    shortDescription: "Calculate the weight of steel flat bar, round bar, square bar or pipe.",
    metaDescription: "Free online steel weight calculator to calculate the weight of steel flat bar, round bar, square bar, or pipe/tube, from its dimensions.",
    h1: "Steel Weight Calculator",
    intro: "Calculate the weight of a piece of steel, flat bar, round bar, square bar, or pipe/tube, from its shape and dimensions.",
    icon: "⚙️",
    status: "live",
    inputFields: [
      {
        key: "shape",
        label: "Shape",
        type: "select",
        options: [
          { label: "Flat Bar / Plate", value: "flatBar" },
          { label: "Round Bar", value: "roundBar" },
          { label: "Square Bar", value: "squareBar" },
          { label: "Pipe / Tube", value: "pipe" },
        ],
      },
      { key: "dimensionA", label: "Width / Diameter / Side / Outer Diameter (in)", type: "number", step: 0.01, placeholder: "e.g. 2" },
      { key: "dimensionB", label: "Thickness / Wall Thickness (in, not used for round or square bar)", type: "number", step: 0.01, defaultValue: 0 },
      { key: "lengthIn", label: "Length (in)", type: "number", step: 0.1, placeholder: "e.g. 48" },
    ],
    resultFields: [
      { key: "weightLbs", label: "Weight (lbs)", highlight: true },
      { key: "weightKg", label: "Weight (kg)", highlight: true },
      { key: "volumeCuIn", label: "Volume (cu in)" },
    ],
    calculate: (inputs) => {
      const shape = String(inputs.shape) as SteelShape;
      const dimensionA = Number(inputs.dimensionA);
      const dimensionB = Number(inputs.dimensionB ?? 0);
      const lengthIn = Number(inputs.lengthIn);
      const output = calculateSteelWeight(shape, dimensionA, dimensionB, lengthIn);
      return { ...output };
    },
    explanation: [
      {
        heading: "How steel weight is calculated",
        paragraphs: [
          "This calculator first finds the piece's volume based on its shape (flat bar: width × thickness × length; round bar: π × radius² × length; square bar: side² × length; pipe: π × (outer radius² − inner radius²) × length), then multiplies by steel's standard density of 0.2836 lb per cubic inch (about 490 lb per cubic foot) to get weight.",
        ],
      },
      {
        heading: "Why exact density can vary slightly",
        paragraphs: [
          "0.2836 lb per cubic inch reflects standard carbon steel. Different steel alloys and stainless steel grades can have slightly different densities, so for precise material ordering, especially for a specialty alloy, check the specific material's published density rather than relying solely on this general estimate.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to enter the second dimension for round or square bar?",
        answer: "No, for round bar, enter only the diameter; for square bar, enter only the side length. The second dimension field is only used for flat bar (thickness) and pipe (wall thickness).",
      },
      {
        question: "What if I have dimensions in millimeters?",
        answer: "Convert to inches first (1 inch = 25.4 mm), or use our Length Converter, since this calculator's density constant is calibrated to inch-based dimensions.",
      },
      {
        question: "Does this work for stainless steel?",
        answer: "Stainless steel has a slightly different density than standard carbon steel (typically a bit higher, around 0.29 lb per cubic inch), so results using this calculator's carbon-steel density will be a close but not exact estimate for stainless steel pieces.",
      },
    ],
    relatedSlugs: ["rebar-calculator", "beam-load-calculator", "lumber-calculator"],
  },
  {
    slug: "lumber-calculator",
    category: "construction",
    title: "Lumber Calculator",
    shortDescription: "Calculate board feet and cost for a lumber order.",
    metaDescription: "Free online lumber calculator to calculate board feet and estimated cost for a lumber order, from board dimensions, quantity and price per board foot.",
    h1: "Lumber Calculator",
    intro: "Calculate board feet and estimated cost for a lumber order, from board dimensions, quantity, and price per board foot.",
    icon: "🪵",
    status: "live",
    inputFields: [
      { key: "thicknessIn", label: "Thickness (in)", type: "number", step: 0.25, placeholder: "e.g. 2" },
      { key: "widthIn", label: "Width (in)", type: "number", step: 0.25, placeholder: "e.g. 6" },
      { key: "lengthFt", label: "Length (ft)", type: "number", step: 0.5, placeholder: "e.g. 8" },
      { key: "quantity", label: "Quantity (number of boards)", type: "number", step: 1, defaultValue: 1 },
      { key: "pricePerBoardFoot", label: "Price per Board Foot (optional)", type: "number", step: 0.01, defaultValue: 0 },
    ],
    resultFields: [
      { key: "boardFeetPerBoard", label: "Board Feet per Board" },
      { key: "totalBoardFeet", label: "Total Board Feet", highlight: true },
      { key: "totalLinearFeet", label: "Total Linear Feet" },
      { key: "estimatedCost", label: "Estimated Cost", highlight: true },
    ],
    calculate: (inputs) => {
      const thicknessIn = Number(inputs.thicknessIn);
      const widthIn = Number(inputs.widthIn);
      const lengthFt = Number(inputs.lengthFt);
      const quantity = Number(inputs.quantity ?? 1);
      const pricePerBoardFoot = Number(inputs.pricePerBoardFoot ?? 0);
      const output = calculateLumber(thicknessIn, widthIn, lengthFt, quantity, pricePerBoardFoot);
      return { ...output };
    },
    explanation: [
      {
        heading: "What board feet is and how it's calculated",
        paragraphs: [
          "Board feet is the standard unit lumber is priced and sold by in the US, one board foot is the volume of a board 1 inch thick, 12 inches wide, and 1 foot long. The formula is: Board Feet = (Thickness (in) × Width (in) × Length (ft)) ÷ 12. This differs from simply counting boards or linear feet, since it accounts for a board's full volume, letting you compare cost fairly across boards of different thickness and width.",
        ],
      },
      {
        heading: "How this differs from our Deck Calculator",
        paragraphs: [
          "Our Deck Calculator counts full-length decking boards needed to cover a specific deck surface area, factoring in board width and the gap between boards. This calculator is a general-purpose lumber estimator, useful for framing lumber, general carpentry, or any lumber order where you want a board-foot total and cost estimate rather than a coverage-area board count.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is lumber priced by board feet instead of just by the board?",
        answer: "Board feet accounts for a board's full volume (thickness x width x length), so a thick, wide board and a thin, narrow board of the same length can be priced fairly relative to how much actual wood material each contains, rather than charging the same price regardless of size.",
      },
      {
        question: "Is the price per board foot required?",
        answer: "No, it's optional. Leave it at 0 if you only want the board footage; enter a price to also see an estimated total cost for your order.",
      },
      {
        question: "Does nominal lumber size match actual dimensions?",
        answer: "No, a common nominal '2x6' board actually measures about 1.5 in × 5.5 in after milling and drying. For an accurate board-foot calculation, use the actual (dressed) dimensions rather than the nominal size printed on the label, unless your supplier specifically prices by nominal size.",
      },
    ],
    relatedSlugs: ["deck-calculator", "fence-calculator", "square-footage-calculator"],
  },
  {
    slug: "fuel-economy-calculator",
    category: "automotive",
    title: "Fuel Economy Calculator",
    shortDescription: "Calculate fuel economy in MPG (US/UK), L/100km and km/L.",
    metaDescription: "Free online fuel economy calculator to find your vehicle's efficiency in MPG (US), MPG (UK), liters per 100km, and km per liter from distance and fuel used.",
    h1: "Fuel Economy Calculator",
    intro: "Calculate your vehicle's fuel economy in four common formats, US MPG, UK/Imperial MPG, liters per 100km, and km per liter, from the distance you drove and the fuel you used.",
    icon: "⛽",
    status: "live",
    inputFields: [
      { key: "distance", label: "Distance Driven", type: "number", step: 0.1, placeholder: "e.g. 300" },
      {
        key: "distanceUnit",
        label: "Distance Unit",
        type: "select",
        options: [
          { label: "Miles", value: "miles" },
          { label: "Kilometers", value: "km" },
        ],
      },
      { key: "fuelUsed", label: "Fuel Used", type: "number", step: 0.01, placeholder: "e.g. 12" },
      {
        key: "fuelUnit",
        label: "Fuel Unit",
        type: "select",
        options: [
          { label: "Gallons (US)", value: "gallonsUS" },
          { label: "Gallons (UK/Imperial)", value: "gallonsUK" },
          { label: "Liters", value: "liters" },
        ],
      },
    ],
    resultFields: [
      { key: "mpgUS", label: "MPG (US)", highlight: true },
      { key: "mpgUK", label: "MPG (UK/Imperial)", highlight: true },
      { key: "litersPer100km", label: "L/100km", highlight: true },
      { key: "kmPerLiter", label: "km/L" },
    ],
    calculate: (inputs) => {
      const distance = Number(inputs.distance);
      const distanceUnit = String(inputs.distanceUnit) as FuelEconomyDistanceUnit;
      const fuelUsed = Number(inputs.fuelUsed);
      const fuelUnit = String(inputs.fuelUnit) as FuelEconomyVolumeUnit;
      const output = calculateFuelEconomy(distance, distanceUnit, fuelUsed, fuelUnit);
      return { ...output };
    },
    explanation: [
      {
        heading: "Why fuel economy is reported differently around the world",
        paragraphs: [
          "The US and UK both use miles per gallon, but a US gallon (3.785 liters) is smaller than a UK/Imperial gallon (4.546 liters), so the same vehicle shows a higher MPG figure in the UK than in the US. Most of the rest of the world uses liters per 100km instead, where a lower number means better efficiency, the opposite direction from MPG. This calculator converts your trip data into all four formats at once so you can compare figures regardless of which system a source uses.",
        ],
      },
      {
        heading: "How this differs from our Fuel Cost Calculator",
        paragraphs: [
          "Our Fuel Cost Calculator estimates how much a trip will cost given a fuel efficiency rating and fuel price you already know. This calculator does the opposite, it derives your actual fuel economy from a real trip's distance and fuel used, and expresses it across every common unit system, useful for verifying your vehicle's real-world efficiency or comparing it against another vehicle's rating listed in a different unit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do my results differ from my car's official rated MPG?",
        answer: "Official ratings come from standardized lab tests. Real-world fuel economy varies with driving style, terrain, weather, tire pressure and load, so calculating from an actual fill-up, as this tool does, usually gives a more accurate picture of your everyday efficiency.",
      },
      {
        question: "Is a lower or higher number better?",
        answer: "For MPG (US or UK) and km/L, higher is better, more distance per unit of fuel. For L/100km, lower is better, less fuel needed to cover 100km.",
      },
      {
        question: "How do I measure fuel used for one tank?",
        answer: "Fill your tank completely, reset your trip odometer, drive normally, then fill up completely again and note the distance driven and the amount of fuel needed to refill, that's your fuel used for the trip.",
      },
    ],
    relatedSlugs: ["fuel-cost-calculator", "ev-charging-cost-calculator", "length-converter"],
  },
  {
    slug: "ev-charging-cost-calculator",
    category: "automotive",
    title: "EV Charging Cost Calculator",
    shortDescription: "Calculate the cost to charge your electric vehicle.",
    metaDescription: "Free online EV charging cost calculator to estimate how much it costs to charge your electric vehicle, accounting for charging losses and electricity rate.",
    h1: "EV Charging Cost Calculator",
    intro: "Calculate the cost to charge your EV from a current charge level to a target level, accounting for charging losses, plus an optional cost-per-mile estimate.",
    icon: "🔌",
    status: "live",
    inputFields: [
      { key: "batteryCapacityKwh", label: "Battery Capacity (kWh)", type: "number", step: 0.1, placeholder: "e.g. 75" },
      { key: "currentChargePercent", label: "Current Charge (%)", type: "number", step: 1, defaultValue: 20 },
      { key: "targetChargePercent", label: "Target Charge (%)", type: "number", step: 1, defaultValue: 100 },
      { key: "electricityRatePerKwh", label: "Electricity Rate (per kWh)", type: "number", step: 0.001, placeholder: "e.g. 0.15" },
      { key: "chargerEfficiencyPercent", label: "Charger Efficiency (%)", type: "number", step: 1, defaultValue: 90 },
      { key: "efficiencyMilesPerKwh", label: "Vehicle Efficiency (miles/kWh, optional)", type: "number", step: 0.1, defaultValue: 0 },
    ],
    resultFields: [
      { key: "totalCost", label: "Total Charging Cost", highlight: true },
      { key: "energyAddedKwh", label: "Energy Added to Battery (kWh)" },
      { key: "energyDrawnFromGridKwh", label: "Energy Drawn from Grid (kWh)" },
      { key: "milesAdded", label: "Estimated Miles Added" },
      { key: "costPerMile", label: "Cost per Mile" },
    ],
    calculate: (inputs) => {
      const batteryCapacityKwh = Number(inputs.batteryCapacityKwh);
      const currentChargePercent = Number(inputs.currentChargePercent ?? 20);
      const targetChargePercent = Number(inputs.targetChargePercent ?? 100);
      const electricityRatePerKwh = Number(inputs.electricityRatePerKwh);
      const chargerEfficiencyPercent = Number(inputs.chargerEfficiencyPercent ?? 90);
      const efficiencyMilesPerKwh = Number(inputs.efficiencyMilesPerKwh ?? 0);
      const output = calculateEvChargingCost(
        batteryCapacityKwh,
        currentChargePercent,
        targetChargePercent,
        electricityRatePerKwh,
        chargerEfficiencyPercent,
        efficiencyMilesPerKwh
      );
      return {
        energyAddedKwh: output.energyAddedKwh,
        energyDrawnFromGridKwh: output.energyDrawnFromGridKwh,
        totalCost: output.totalCost,
        milesAdded: output.milesAdded === null ? "N/A (enter vehicle efficiency)" : output.milesAdded,
        costPerMile: output.costPerMile === null ? "N/A (enter vehicle efficiency)" : output.costPerMile,
      };
    },
    explanation: [
      {
        heading: "Why the grid energy used is more than the energy added",
        paragraphs: [
          "Charging an EV isn't perfectly efficient, some energy is lost as heat in the charging cable, onboard charger and battery management system. This calculator applies a charger efficiency percentage (commonly around 85-90% for AC home charging) to the energy actually added to your battery, to estimate the larger amount of energy actually drawn from, and billed by, the grid.",
        ],
      },
      {
        heading: "Getting a cost-per-mile estimate",
        paragraphs: [
          "If you enter your vehicle's rated efficiency in miles per kWh (found in your owner's manual or EPA rating), this calculator estimates the miles that charging session added and the resulting cost per mile, letting you compare running costs directly against a gas vehicle's cost-per-mile from our Fuel Cost Calculator.",
        ],
      },
    ],
    faqs: [
      {
        question: "What charger efficiency should I use?",
        answer: "Level 1/2 AC home charging is commonly estimated around 85-90% efficient. DC fast charging efficiency varies by station and vehicle but is often similar or slightly lower. Check your utility or vehicle manufacturer's guidance for a more precise figure.",
      },
      {
        question: "Does this include demand charges or time-of-use rates?",
        answer: "No, this calculator uses a single flat electricity rate you provide. If your utility charges different rates by time of day, use the rate that applies during your actual charging window for the most accurate estimate.",
      },
      {
        question: "Is public fast charging usually more expensive than home charging?",
        answer: "Yes, generally. Public DC fast charging networks typically charge a premium per kWh compared to residential electricity rates, so home charging is usually the cheaper option when available.",
      },
    ],
    relatedSlugs: ["fuel-economy-calculator", "fuel-cost-calculator", "vehicle-depreciation-calculator"],
  },
  {
    slug: "tire-size-calculator",
    category: "automotive",
    title: "Tire Size Calculator",
    shortDescription: "Compare tire sizes and calculate speedometer difference.",
    metaDescription: "Free online tire size calculator to compare a current and replacement tire size, showing the change in overall diameter and speedometer accuracy.",
    h1: "Tire Size Calculator",
    intro: "Compare your current tire size against a replacement size to see the change in overall diameter, revolutions per mile, and speedometer accuracy.",
    icon: "🛞",
    status: "live",
    inputFields: [
      { key: "currentWidthMm", label: "Current: Section Width (mm)", type: "number", step: 1, placeholder: "e.g. 225" },
      { key: "currentAspectRatio", label: "Current: Aspect Ratio (%)", type: "number", step: 1, placeholder: "e.g. 45" },
      { key: "currentRimIn", label: "Current: Rim Diameter (in)", type: "number", step: 0.5, placeholder: "e.g. 17" },
      { key: "newWidthMm", label: "New: Section Width (mm)", type: "number", step: 1, placeholder: "e.g. 235" },
      { key: "newAspectRatio", label: "New: Aspect Ratio (%)", type: "number", step: 1, placeholder: "e.g. 40" },
      { key: "newRimIn", label: "New: Rim Diameter (in)", type: "number", step: 0.5, placeholder: "e.g. 18" },
    ],
    resultFields: [
      { key: "currentDiameterIn", label: "Current Overall Diameter (in)" },
      { key: "newDiameterIn", label: "New Overall Diameter (in)" },
      { key: "diameterDifferencePercent", label: "Diameter Difference (%)", highlight: true },
      { key: "speedometerDifferencePercent", label: "Speedometer Difference (%)", highlight: true },
      { key: "currentRevsPerMile", label: "Current Revolutions per Mile" },
      { key: "newRevsPerMile", label: "New Revolutions per Mile" },
    ],
    calculate: (inputs) => {
      const currentWidthMm = Number(inputs.currentWidthMm);
      const currentAspectRatio = Number(inputs.currentAspectRatio);
      const currentRimIn = Number(inputs.currentRimIn);
      const newWidthMm = Number(inputs.newWidthMm);
      const newAspectRatio = Number(inputs.newAspectRatio);
      const newRimIn = Number(inputs.newRimIn);
      const output = calculateTireSize(currentWidthMm, currentAspectRatio, currentRimIn, newWidthMm, newAspectRatio, newRimIn);
      return { ...output };
    },
    explanation: [
      {
        heading: "How tire size notation works",
        paragraphs: [
          "A tire size like 225/45R17 breaks down as: 225 = section width in millimeters, 45 = aspect ratio (sidewall height as a percentage of section width), and 17 = rim diameter in inches. This calculator uses those three numbers for both your current and replacement tire to compute each tire's overall diameter: Rim Diameter (converted to mm) + 2 × Sidewall Height, then converts back to inches.",
        ],
      },
      {
        heading: "Why tire size affects your speedometer",
        paragraphs: [
          "Your speedometer and odometer are calibrated based on how far your original tires travel per wheel revolution. A replacement tire with a larger overall diameter travels farther per revolution, causing your speedometer to under-read your actual speed (and your odometer to under-count actual distance), while a smaller replacement tire causes the opposite, an over-read.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much of a size difference is considered safe?",
        answer: "A common rule of thumb is keeping the overall diameter change within about 3%, to avoid meaningfully affecting speedometer accuracy, clearance, and the accuracy of safety systems like ABS that rely on wheel speed sensors. Always check your vehicle manufacturer's guidance before changing tire sizes.",
      },
      {
        question: "Does this account for load rating or speed rating?",
        answer: "No, this calculator compares physical dimensions only. Load rating, speed rating and vehicle clearance are separate considerations that should also be checked before fitting a different tire size.",
      },
      {
        question: "What if my speedometer difference shows a negative number?",
        answer: "A negative percentage means your new tire is smaller in diameter than your current tire, causing your speedometer to over-read, showing a higher speed than you're actually traveling.",
      },
    ],
    relatedSlugs: ["fuel-economy-calculator", "vehicle-depreciation-calculator", "length-converter"],
  },
  {
    slug: "vehicle-depreciation-calculator",
    category: "automotive",
    title: "Vehicle Depreciation Calculator",
    shortDescription: "Estimate how much your car's value will decline over time.",
    metaDescription: "Free online vehicle depreciation calculator to estimate your car's value after 1, 5, or any number of years, using a first-year and annual depreciation rate.",
    h1: "Vehicle Depreciation Calculator",
    intro: "Estimate how much your vehicle's value will decline over time, based on a typical first-year depreciation rate followed by a steady annual rate.",
    icon: "📉",
    status: "live",
    inputFields: [
      { key: "purchasePrice", label: "Purchase Price", type: "number", step: 0.01, placeholder: "e.g. 35000" },
      { key: "firstYearDepreciationPercent", label: "First-Year Depreciation (%)", type: "number", step: 1, defaultValue: 20 },
      { key: "annualDepreciationPercent", label: "Annual Depreciation After Year 1 (%)", type: "number", step: 1, defaultValue: 15 },
      { key: "yearsToProject", label: "Years to Project", type: "number", step: 1, defaultValue: 5 },
    ],
    resultFields: [
      { key: "valueAtProjectedYears", label: "Estimated Value at Projected Years", highlight: true },
      { key: "totalDepreciationAmount", label: "Total Depreciation Amount", highlight: true },
      { key: "totalDepreciationPercent", label: "Total Depreciation (%)" },
      { key: "valueAfter1Year", label: "Value After 1 Year" },
      { key: "valueAfter5Years", label: "Value After 5 Years" },
    ],
    calculate: (inputs) => {
      const purchasePrice = Number(inputs.purchasePrice);
      const firstYearDepreciationPercent = Number(inputs.firstYearDepreciationPercent ?? 20);
      const annualDepreciationPercent = Number(inputs.annualDepreciationPercent ?? 15);
      const yearsToProject = Number(inputs.yearsToProject ?? 5);
      const output = calculateVehicleDepreciation(purchasePrice, firstYearDepreciationPercent, annualDepreciationPercent, yearsToProject);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this two-stage depreciation model works",
        paragraphs: [
          "New vehicles are commonly cited as losing a larger share of their value in the first year, often around 20%, than in subsequent years, where depreciation typically slows to somewhere around 10-15% annually. This calculator applies your first-year rate once, then compounds your annual rate for every year after, giving a more realistic curve than assuming a single flat rate for the vehicle's entire life.",
        ],
      },
      {
        heading: "What affects real-world depreciation",
        paragraphs: [
          "Actual depreciation varies significantly by make, model, mileage, condition and market demand. Some vehicles, especially certain trucks and popular used models, hold value notably better than the general averages used here. Treat this calculator's output as a planning estimate, not a guaranteed resale value.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is first-year depreciation usually higher?",
        answer: "A new car loses its 'brand new' premium the moment it's driven off the lot and is then classified as used, plus new model year releases and manufacturer incentives on the next year's models can further pressure resale value, all contributing to a steeper first-year drop than later years.",
      },
      {
        question: "Does this account for mileage driven?",
        answer: "Not directly, this model projects value by elapsed time using typical rate assumptions. Higher-than-average mileage generally accelerates depreciation beyond what a time-only model would predict.",
      },
      {
        question: "Can I use this for a used car I'm about to buy?",
        answer: "Yes, enter the price you're paying as the purchase price to project its value forward from today, though a used car may already be past its steepest first-year drop, so a single flat annual rate for both fields may be more realistic in that case.",
      },
    ],
    relatedSlugs: ["auto-loan-calculator", "car-loan-affordability-calculator", "net-worth-calculator"],
  },
  {
    slug: "car-loan-affordability-calculator",
    category: "automotive",
    title: "Car Loan Affordability Calculator",
    shortDescription: "Calculate the maximum car price you can afford based on income.",
    metaDescription: "Free online car loan affordability calculator to estimate the maximum monthly payment, loan amount, and car price you can afford based on your income.",
    h1: "Car Loan Affordability Calculator",
    intro: "Calculate the maximum monthly payment, loan amount, and total car price you can afford, based on your gross monthly income, down payment and loan terms.",
    icon: "💵",
    status: "live",
    inputFields: [
      { key: "grossMonthlyIncome", label: "Gross Monthly Income", type: "number", step: 0.01, placeholder: "e.g. 6000" },
      { key: "maxPercentOfIncome", label: "Max % of Income for Car Payment", type: "number", step: 1, defaultValue: 15 },
      { key: "downPayment", label: "Down Payment", type: "number", step: 0.01, defaultValue: 0 },
      { key: "tradeInValue", label: "Trade-In Value", type: "number", step: 0.01, defaultValue: 0 },
      { key: "annualInterestRatePercent", label: "Annual Interest Rate (%)", type: "number", step: 0.01, placeholder: "e.g. 6.5" },
      { key: "loanTermMonths", label: "Loan Term (months)", type: "number", step: 1, defaultValue: 60 },
    ],
    resultFields: [
      { key: "maxAffordableCarPrice", label: "Max Affordable Car Price", highlight: true },
      { key: "maxMonthlyPayment", label: "Max Monthly Payment", highlight: true },
      { key: "maxLoanAmount", label: "Max Loan Amount" },
      { key: "totalInterestPaid", label: "Total Interest Paid" },
    ],
    calculate: (inputs) => {
      const grossMonthlyIncome = Number(inputs.grossMonthlyIncome);
      const maxPercentOfIncome = Number(inputs.maxPercentOfIncome ?? 15);
      const downPayment = Number(inputs.downPayment ?? 0);
      const tradeInValue = Number(inputs.tradeInValue ?? 0);
      const annualInterestRatePercent = Number(inputs.annualInterestRatePercent);
      const loanTermMonths = Number(inputs.loanTermMonths ?? 60);
      const output = calculateCarLoanAffordability(
        grossMonthlyIncome,
        maxPercentOfIncome,
        downPayment,
        tradeInValue,
        annualInterestRatePercent,
        loanTermMonths
      );
      return { ...output };
    },
    explanation: [
      {
        heading: "How this differs from our Auto Loan Calculator",
        paragraphs: [
          "Our Auto Loan Calculator starts from a known loan amount and calculates your monthly payment. This calculator works in the opposite direction, starting from what you can afford to pay each month (based on a target share of your income), and solving the loan payment formula backwards to find the maximum loan amount, and therefore maximum car price, that payment supports.",
        ],
      },
      {
        heading: "Choosing a target percent of income",
        paragraphs: [
          "A commonly cited guideline is keeping your total vehicle costs, payment, insurance and fuel, to around 15-20% of gross monthly income, with the loan payment itself often targeted lower within that. This calculator lets you set your own target percentage to match your personal budget and other financial obligations.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use gross or net income?",
        answer: "This calculator uses gross (pre-tax) monthly income, following the common lending industry convention, similar to how mortgage affordability is typically calculated. Keep in mind your actual take-home pay after taxes and other deductions will be lower.",
      },
      {
        question: "Does the max affordable car price include tax and fees?",
        answer: "No, this estimates the price the loan portion of your purchase can support, plus your down payment and trade-in value. Sales tax, registration and dealer fees would need to be covered separately or factored into your down payment.",
      },
      {
        question: "Why does a lower interest rate increase what I can afford?",
        answer: "With a fixed monthly payment budget, a lower interest rate means less of each payment goes toward interest, so more of it goes toward principal, letting that same monthly payment support a larger loan amount.",
      },
    ],
    relatedSlugs: ["auto-loan-calculator", "vehicle-depreciation-calculator", "dti-calculator"],
  },
  {
    slug: "pressure-converter",
    category: "converters",
    title: "Pressure Converter",
    shortDescription: "Convert between pascals, bar, psi, atmospheres and torr.",
    metaDescription: "Free online pressure converter to convert between pascals, kilopascals, bar, psi, atmospheres and torr.",
    h1: "Pressure Converter",
    intro: "Convert pressure measurements between pascals, kilopascals, bar, psi, atmospheres and torr.",
    icon: "🌡️",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "pressure",
    explanation: [
      {
        heading: "How this pressure converter works",
        paragraphs: [
          "This tool converts between pressure units using fixed conversion factors, for example, 1 atmosphere equals 101,325 pascals, 14.696 psi, or 1.01325 bar. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each pressure unit is used",
        paragraphs: [
          "Psi is common for tire pressure and hydraulics in the US. Bar and kilopascals are widely used in most other countries and in scientific contexts. Atmospheres are often used for general reference points, and torr (roughly equal to mmHg) is common in vacuum measurement and meteorology.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert psi to bar?",
        answer: "Multiply psi by 0.0689476 to get bar, or use this converter for an instant result.",
      },
      {
        question: "What's a typical car tire pressure in psi and bar?",
        answer: "Most passenger car tires are inflated to around 30-35 psi, which is roughly 2.07-2.41 bar.",
      },
    ],
    relatedSlugs: ["force-converter", "energy-converter", "density-converter"],
  },
  {
    slug: "energy-converter",
    category: "converters",
    title: "Energy Converter",
    shortDescription: "Convert between joules, calories, watt-hours and BTU.",
    metaDescription: "Free online energy converter to convert between joules, kilojoules, calories, kilocalories, watt-hours, kilowatt-hours and BTU.",
    h1: "Energy Converter",
    intro: "Convert energy measurements between joules, calories, watt-hours, kilowatt-hours and BTU.",
    icon: "⚡",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "energy",
    explanation: [
      {
        heading: "How this energy converter works",
        paragraphs: [
          "This tool converts between energy units using fixed conversion factors, for example, 1 kilowatt-hour equals 3,600,000 joules, 3,412 BTU, or roughly 860 kilocalories. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each energy unit is used",
        paragraphs: [
          "Joules and kilojoules are the SI standard used in physics and on food labels in many countries. Calories and kilocalories (the 'Calories' on US food labels) measure food energy. Kilowatt-hours are used for electricity billing, and BTU is common for rating heating, cooling and appliance energy use in the US.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert kilowatt-hours to joules?",
        answer: "Multiply kilowatt-hours by 3,600,000 to get joules, or use this converter for an instant result.",
      },
      {
        question: "Is a food Calorie the same as a calorie?",
        answer: "A food 'Calorie' (capital C) is actually a kilocalorie, equal to 1,000 small calories. This converter's 'calorie' and 'kilocalorie' units follow that same distinction.",
      },
    ],
    relatedSlugs: ["power-converter", "pressure-converter", "ev-charging-cost-calculator"],
  },
  {
    slug: "power-converter",
    category: "converters",
    title: "Power Converter",
    shortDescription: "Convert between watts, kilowatts, horsepower and BTU/h.",
    metaDescription: "Free online power converter to convert between watts, kilowatts, megawatts, horsepower and BTU per hour.",
    h1: "Power Converter",
    intro: "Convert power measurements between watts, kilowatts, megawatts, horsepower and BTU per hour.",
    icon: "🔋",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "power",
    explanation: [
      {
        heading: "How this power converter works",
        paragraphs: [
          "This tool converts between power units using fixed conversion factors, for example, 1 horsepower equals about 745.7 watts, or 0.7457 kilowatts. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each power unit is used",
        paragraphs: [
          "Watts and kilowatts are the SI standard used for electrical appliances and generators. Horsepower is traditionally used for rating vehicle and small engine output. BTU per hour is common for rating heating and air conditioning capacity in the US.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert horsepower to kilowatts?",
        answer: "Multiply horsepower by 0.7457 to get kilowatts, or use this converter for an instant result.",
      },
      {
        question: "Which horsepower definition does this use?",
        answer: "This converter uses mechanical horsepower (745.7 watts), the most common definition. A small number of contexts use metric horsepower, which is very close but not identical (735.5 watts).",
      },
    ],
    relatedSlugs: ["energy-converter", "torque-converter", "fuel-economy-calculator"],
  },
  {
    slug: "force-converter",
    category: "converters",
    title: "Force Converter",
    shortDescription: "Convert between newtons, pound-force, kilogram-force and dynes.",
    metaDescription: "Free online force converter to convert between newtons, kilonewtons, dynes, pound-force and kilogram-force.",
    h1: "Force Converter",
    intro: "Convert force measurements between newtons, kilonewtons, dynes, pound-force and kilogram-force.",
    icon: "💪",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "force",
    explanation: [
      {
        heading: "How this force converter works",
        paragraphs: [
          "This tool converts between force units using fixed conversion factors, for example, 1 pound-force equals about 4.448 newtons, and 1 kilogram-force equals 9.80665 newtons (the force exerted by one kilogram under standard gravity). Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each force unit is used",
        paragraphs: [
          "The newton is the SI standard force unit, used throughout physics and engineering. Pound-force is common in US engineering contexts. Kilogram-force appears in some older or non-SI engineering references, and dynes are a smaller cgs unit occasionally used in physics.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert newtons to pound-force?",
        answer: "Divide newtons by 4.4482216153 to get pound-force, or use this converter for an instant result.",
      },
      {
        question: "What's the difference between kilogram-force and kilogram (mass)?",
        answer: "A kilogram is a unit of mass, while kilogram-force is a unit of force, the weight of one kilogram of mass under standard Earth gravity (9.80665 m/s²). They're related but not interchangeable.",
      },
    ],
    relatedSlugs: ["pressure-converter", "torque-converter", "beam-load-calculator"],
  },
  {
    slug: "density-converter",
    category: "converters",
    title: "Density Converter",
    shortDescription: "Convert between kg/m³, g/cm³, lb/ft³ and lb/gal.",
    metaDescription: "Free online density converter to convert between kilograms per cubic meter, grams per cubic centimeter, kilograms per liter, pounds per cubic foot and pounds per gallon.",
    h1: "Density Converter",
    intro: "Convert density measurements between kg/m³, g/cm³, kg/L, lb/ft³ and lb/gal (US).",
    icon: "🧊",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "density",
    explanation: [
      {
        heading: "How this density converter works",
        paragraphs: [
          "This tool converts between density units using fixed conversion factors, for example, 1 gram per cubic centimeter equals 1,000 kilograms per cubic meter, and is also numerically equal to 1 kilogram per liter, both express the density of water at 4°C. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each density unit is used",
        paragraphs: [
          "Kilograms per cubic meter is the SI standard, common in engineering and materials specifications. Grams per cubic centimeter (equivalently, kilograms per liter) is common for liquids and lab work. Pounds per cubic foot and pounds per gallon are common in US construction, aggregate and fuel contexts.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert g/cm³ to kg/m³?",
        answer: "Multiply grams per cubic centimeter by 1,000 to get kilograms per cubic meter, or use this converter for an instant result.",
      },
      {
        question: "What is the density of water?",
        answer: "Water's density is approximately 1,000 kg/m³, 1 g/cm³, or 1 kg/L at 4°C, one of the most commonly used reference densities.",
      },
    ],
    relatedSlugs: ["viscosity-converter", "pressure-converter", "cement-calculator"],
  },
  {
    slug: "torque-converter",
    category: "converters",
    title: "Torque Converter",
    shortDescription: "Convert between newton-meters, pound-feet and pound-inches.",
    metaDescription: "Free online torque converter to convert between newton-meters, newton-centimeters, pound-feet, pound-inches and kilogram-force meters.",
    h1: "Torque Converter",
    intro: "Convert torque measurements between newton-meters, pound-feet, pound-inches and kilogram-force meters.",
    icon: "🔧",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "torque",
    explanation: [
      {
        heading: "How this torque converter works",
        paragraphs: [
          "This tool converts between torque units using fixed conversion factors, for example, 1 pound-foot equals about 1.356 newton-meters, and 1 pound-inch equals about 0.113 newton-meters. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "Why torque units matter for wrenches and specifications",
        paragraphs: [
          "Torque specifications (like a lug nut or engine bolt spec) must be applied with the correct unit, mixing up newton-meters and pound-feet can lead to a fastener being significantly over- or under-tightened. Newton-meters are the SI standard, while pound-feet and pound-inches are common on US-made torque wrenches and specifications.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert pound-feet to newton-meters?",
        answer: "Multiply pound-feet by 1.35582 to get newton-meters, or use this converter for an instant result.",
      },
      {
        question: "When are pound-inches used instead of pound-feet?",
        answer: "Pound-inches are typically used for smaller torque specifications, like small fasteners or electronics, where pound-feet would be an awkwardly small fraction.",
      },
    ],
    relatedSlugs: ["force-converter", "power-converter", "beam-load-calculator"],
  },
  {
    slug: "angle-converter",
    category: "converters",
    title: "Angle Converter",
    shortDescription: "Convert between degrees, radians, gradians and arcminutes.",
    metaDescription: "Free online angle converter to convert between degrees, radians, gradians, arcminutes, arcseconds and revolutions.",
    h1: "Angle Converter",
    intro: "Convert angle measurements between degrees, radians, gradians, arcminutes, arcseconds and revolutions.",
    icon: "📐",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "angle",
    explanation: [
      {
        heading: "How this angle converter works",
        paragraphs: [
          "This tool converts between angle units using fixed conversion factors, for example, 1 radian equals about 57.296 degrees, and 1 full revolution equals 360 degrees. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each angle unit is used",
        paragraphs: [
          "Degrees are the everyday standard for angles, navigation and geometry. Radians are the SI standard used throughout math and physics, especially in calculus and trigonometry. Gradians appear in some surveying contexts, and arcminutes/arcseconds are used for very precise small-angle measurements in astronomy and navigation.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert degrees to radians?",
        answer: "Multiply degrees by π/180 (approximately 0.0174533) to get radians, or use this converter for an instant result.",
      },
      {
        question: "How many arcminutes are in a degree?",
        answer: "There are 60 arcminutes in one degree, and 60 arcseconds in one arcminute, similar to how minutes and seconds divide an hour.",
      },
    ],
    relatedSlugs: ["length-converter", "frequency-converter", "tire-size-calculator"],
  },
  {
    slug: "digital-transfer-rate-converter",
    category: "converters",
    title: "Digital Transfer Rate Converter",
    shortDescription: "Convert between bps, Kbps, Mbps, Gbps and bytes per second.",
    metaDescription: "Free online digital transfer rate converter to convert between bits per second, kilobits, megabits, gigabits per second and bytes per second.",
    h1: "Digital Transfer Rate Converter",
    intro: "Convert data transfer speeds between bits per second, Kbps, Mbps, Gbps, bytes per second and megabytes per second.",
    icon: "📶",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "digitalTransferRate",
    explanation: [
      {
        heading: "How this transfer rate converter works",
        paragraphs: [
          "This tool converts between data transfer rate units using fixed decimal conversion factors, following standard networking convention, for example, 1 megabit per second equals 1,000 kilobits per second, and 1 byte per second equals 8 bits per second. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "Why your download speed looks smaller than your internet plan",
        paragraphs: [
          "Internet plans are advertised in bits per second (like '500 Mbps'), but file download progress in a browser or app is typically shown in bytes per second (like 'MB/s'), and there are 8 bits in a byte. A 500 Mbps connection therefore tops out around 62.5 MB/s in a download manager, which can look surprisingly low compared to the advertised number even when everything is working correctly.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert Mbps to MB/s?",
        answer: "Divide megabits per second by 8 to get megabytes per second, since there are 8 bits in a byte.",
      },
      {
        question: "Does this use 1000 or 1024 for kilobit/megabit?",
        answer: "This converter uses decimal (1000-based) prefixes, the standard convention for network transfer rates. Our Data Storage Converter, by contrast, uses binary (1024-based) prefixes, matching how file sizes are typically measured.",
      },
    ],
    relatedSlugs: ["data-storage-converter", "frequency-converter", "length-converter"],
  },
  {
    slug: "frequency-converter",
    category: "converters",
    title: "Frequency Converter",
    shortDescription: "Convert between hertz, kilohertz, megahertz, gigahertz and RPM.",
    metaDescription: "Free online frequency converter to convert between hertz, kilohertz, megahertz, gigahertz and revolutions per minute.",
    h1: "Frequency Converter",
    intro: "Convert frequency measurements between hertz, kilohertz, megahertz, gigahertz and revolutions per minute (RPM).",
    icon: "📡",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "frequency",
    explanation: [
      {
        heading: "How this frequency converter works",
        paragraphs: [
          "This tool converts between frequency units using fixed conversion factors, for example, 1 megahertz equals 1,000,000 hertz, and 1 hertz equals 60 revolutions per minute. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each frequency unit is used",
        paragraphs: [
          "Hertz and its multiples (kHz, MHz, GHz) measure cycles per second, used for everything from AC power and radio waves to computer processor clock speeds. RPM (revolutions per minute) is commonly used for rotational speed, such as engine, motor or hard drive spin rates, and converts directly to hertz since both describe repeating cycles.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert RPM to hertz?",
        answer: "Divide RPM by 60 to get hertz, since hertz measures cycles per second and RPM measures cycles per minute.",
      },
      {
        question: "What frequency is standard household electricity?",
        answer: "Household AC power runs at 60 Hz in the US and much of the Americas, and 50 Hz in Europe, Asia, Africa and most of the rest of the world.",
      },
    ],
    relatedSlugs: ["digital-transfer-rate-converter", "angle-converter", "power-converter"],
  },
  {
    slug: "radiation-converter",
    category: "converters",
    title: "Radiation Converter",
    shortDescription: "Convert between sieverts, millisieverts, rem and millirem.",
    metaDescription: "Free online radiation dose converter to convert between sieverts, millisieverts, microsieverts, rem and millirem.",
    h1: "Radiation Converter",
    intro: "Convert radiation equivalent dose measurements between sieverts, millisieverts, microsieverts, rem and millirem.",
    icon: "☢️",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "radiation",
    explanation: [
      {
        heading: "How this radiation converter works",
        paragraphs: [
          "This tool converts between radiation equivalent dose units using fixed conversion factors, for example, 1 sievert equals 1,000 millisieverts, and 1 rem equals 10 millisieverts. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "Sievert vs rem",
        paragraphs: [
          "The sievert (and its smaller unit, the millisievert) is the SI unit for radiation equivalent dose, used internationally and in most modern scientific and medical contexts. Rem (and millirem) is an older unit still used in some US regulatory and occupational contexts. This converter covers equivalent dose only, used for assessing biological radiation exposure, not the separate concept of radioactivity (measured in becquerels or curies).",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert millisieverts to rem?",
        answer: "Divide millisieverts by 10 to get rem, or use this converter for an instant result.",
      },
      {
        question: "How much radiation is a typical chest X-ray?",
        answer: "A chest X-ray is commonly cited as delivering around 0.1 millisieverts, a small fraction of the roughly 3 millisieverts most people receive annually from natural background radiation. This is general reference information, not medical advice.",
      },
    ],
    relatedSlugs: ["energy-converter", "frequency-converter", "pressure-converter"],
  },
  {
    slug: "viscosity-converter",
    category: "converters",
    title: "Viscosity Converter",
    shortDescription: "Convert between pascal-seconds, poise and centipoise.",
    metaDescription: "Free online viscosity converter to convert between pascal-seconds, millipascal-seconds, poise, centipoise and pound-second per square foot.",
    h1: "Viscosity Converter",
    intro: "Convert dynamic viscosity measurements between pascal-seconds, poise, centipoise and pound-second per square foot.",
    icon: "🧴",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "viscosity",
    explanation: [
      {
        heading: "How this viscosity converter works",
        paragraphs: [
          "This tool converts between dynamic viscosity units using fixed conversion factors, for example, 1 poise equals 0.1 pascal-seconds, and 1 centipoise is numerically equal to 1 millipascal-second. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each viscosity unit is used",
        paragraphs: [
          "Pascal-seconds (and millipascal-seconds) are the SI standard, common in engineering and scientific contexts. Poise and centipoise are cgs units still widely used in industry and material data sheets, water at room temperature has a viscosity of almost exactly 1 centipoise, making it a handy reference point.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert centipoise to pascal-seconds?",
        answer: "Divide centipoise by 1,000 to get pascal-seconds, or use this converter for an instant result.",
      },
      {
        question: "What is the viscosity of water?",
        answer: "Water at about 20°C (68°F) has a viscosity of approximately 1 centipoise (1 millipascal-second), commonly used as a reference point when comparing other fluids.",
      },
    ],
    relatedSlugs: ["density-converter", "flow-rate-converter", "pressure-converter"],
  },
  {
    slug: "flow-rate-converter",
    category: "converters",
    title: "Flow Rate Converter",
    shortDescription: "Convert between L/min, GPM, CFM and cubic meters per second.",
    metaDescription: "Free online flow rate converter to convert between liters per second, liters per minute, gallons per minute, cubic feet per minute and cubic meters per second.",
    h1: "Flow Rate Converter",
    intro: "Convert flow rate measurements between cubic meters per second, liters per second/minute/hour, gallons per minute and cubic feet per minute.",
    icon: "🚰",
    status: "live",
    widgetType: "unitConverter",
    converterCategory: "flowRate",
    explanation: [
      {
        heading: "How this flow rate converter works",
        paragraphs: [
          "This tool converts between flow rate units using fixed conversion factors, for example, 1 gallon per minute (US) equals about 3.785 liters per minute, and 1 cubic foot per minute equals about 28.317 liters per minute. Enter a value in any supported unit and it's converted to all others using these standard ratios.",
        ],
      },
      {
        heading: "When each flow rate unit is used",
        paragraphs: [
          "Liters per second and cubic meters per second are the SI standard, common in engineering and scientific contexts. Gallons per minute (GPM) is widely used in the US for pumps, faucets and irrigation, while cubic feet per minute (CFM) is standard for airflow ratings on fans, HVAC equipment and compressors.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I convert GPM to liters per minute?",
        answer: "Multiply gallons per minute (US) by 3.78541 to get liters per minute, or use this converter for an instant result.",
      },
      {
        question: "Is CFM used for liquids or air?",
        answer: "CFM (cubic feet per minute) is almost always used for airflow, such as fan, blower or HVAC ratings, while GPM and liters per minute are more commonly used for liquid flow.",
      },
    ],
    relatedSlugs: ["viscosity-converter", "volume-converter", "ev-charging-cost-calculator"],
  },
  {
    slug: "character-counter",
    category: "text",
    title: "Character Counter",
    shortDescription: "Count characters and track usage against a character limit.",
    metaDescription: "Free online character counter to count characters and check your text against a character limit, like a tweet, SMS, or meta description limit.",
    h1: "Character Counter",
    intro: "Count the characters in your text and track how much of a character limit, like a tweet, SMS, or meta description, you've used.",
    icon: "🔢",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste or type your text here..." },
      { key: "characterLimit", label: "Character Limit", type: "number", step: 1, defaultValue: 280 },
    ],
    resultFields: [
      { key: "totalCharacters", label: "Total Characters", highlight: true },
      { key: "remainingCharacters", label: "Remaining", highlight: true },
      { key: "overLimit", label: "Over Limit?" },
      { key: "percentUsed", label: "% of Limit Used" },
      { key: "charactersNoSpaces", label: "Characters (no spaces)" },
    ],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const characterLimit = Number(inputs.characterLimit ?? 280);
      const output = calculateCharacterCount(text, characterLimit);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this differs from our Word Counter",
        paragraphs: [
          "Our Word Counter reports overall word, sentence and paragraph statistics for general writing. This tool is purpose-built for the 'how many characters do I have left' use case, tracking your text against a specific character limit, like a tweet (280), SMS (160), or meta description (roughly 155-160), so you can see at a glance whether you're within range.",
        ],
      },
      {
        heading: "Why character limits vary by platform",
        paragraphs: [
          "Different platforms and fields enforce different character limits for different technical or design reasons, SMS messages are limited by the underlying telecom protocol, while a meta description limit is really about how much text search engines display before truncating it. Set the limit field to match whatever you're writing for.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this count spaces as characters?",
        answer: "Yes, the main character count includes spaces and punctuation, matching how most platforms count characters toward their limits. A separate 'characters without spaces' figure is also shown for reference.",
      },
      {
        question: "Is my text sent to a server?",
        answer: "No, all counting happens directly in your browser, your text is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["word-counter", "reading-time-calculator"],
  },
  {
    slug: "reading-time-calculator",
    category: "text",
    title: "Reading Time Calculator",
    shortDescription: "Estimate how long it takes to read a piece of text.",
    metaDescription: "Free online reading time calculator to estimate how long an article, blog post, or document takes to read, based on word count and reading speed.",
    h1: "Reading Time Calculator",
    intro: "Estimate how long your article, blog post, or document takes to read, based on word count and a reading speed you choose.",
    icon: "⏱️",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste or type your text here..." },
      { key: "wordsPerMinute", label: "Reading Speed (words per minute)", type: "number", step: 1, defaultValue: 200 },
    ],
    resultFields: [
      { key: "readingTimeFormatted", label: "Estimated Reading Time", highlight: true },
      { key: "wordCount", label: "Word Count" },
      { key: "readingTimeMinutesDecimal", label: "Reading Time (minutes, decimal)" },
    ],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const wordsPerMinute = Number(inputs.wordsPerMinute ?? 200);
      const output = calculateReadingTime(text, wordsPerMinute);
      return { ...output };
    },
    explanation: [
      {
        heading: "How reading time is estimated",
        paragraphs: [
          "Reading Time = Word Count ÷ Reading Speed (words per minute). The average adult reading speed for silent reading is commonly cited as somewhere around 200-238 words per minute, this calculator defaults to 200 wpm but lets you adjust it to match your own pace or audience.",
        ],
      },
      {
        heading: "Why this is useful for writers and publishers",
        paragraphs: [
          "Displaying an estimated reading time (like '5 min read') alongside an article is a common practice on blogs and publishing platforms, helping readers decide whether they have time to read something right now. It's also a useful gut-check for writers on whether a piece has run longer than intended.",
        ],
      },
    ],
    faqs: [
      {
        question: "What reading speed should I use?",
        answer: "200 words per minute is a commonly used average for general adult silent reading. Technical or unfamiliar material is often read more slowly, while very easy, familiar text can be read faster, adjust the reading speed field to match your content and audience.",
      },
      {
        question: "Does this account for images or complex formatting?",
        answer: "No, this estimates reading time from word count alone. Some reading time calculators add a flat time penalty per image, this tool focuses on text only.",
      },
    ],
    relatedSlugs: ["word-counter", "character-counter"],
  },
  {
    slug: "slug-generator",
    category: "text",
    title: "Slug Generator",
    shortDescription: "Convert text into a clean, URL-friendly slug.",
    metaDescription: "Free online slug generator to convert a title or phrase into a clean, URL-friendly slug for blog posts, product pages and permalinks.",
    h1: "Slug Generator",
    intro: "Convert a title or phrase into a clean, URL-friendly slug, perfect for blog post URLs, product pages and permalinks.",
    icon: "🔗",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "e.g. 10 Best Budget Laptops in 2026!" },
      {
        key: "separator",
        label: "Separator",
        type: "select",
        options: [
          { label: "Hyphen (-)", value: "-" },
          { label: "Underscore (_)", value: "_" },
        ],
      },
      { key: "lowercase", label: "Convert to Lowercase", type: "checkbox", defaultValue: "true" },
    ],
    resultFields: [{ key: "result", label: "Generated Slug", wide: true, highlight: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const separator = String(inputs.separator ?? "-") as SlugSeparator;
      const lowercase = inputs.lowercase !== "false";
      const result = generateSlug(text, separator, lowercase);
      return { result };
    },
    explanation: [
      {
        heading: "How slug generation works",
        paragraphs: [
          "This tool strips accented characters down to their base letters, removes punctuation and special characters, then replaces spaces with your chosen separator, producing a clean string safe for use in a URL. For example, '10 Best Budget Laptops in 2026!' becomes '10-best-budget-laptops-in-2026'.",
        ],
      },
      {
        heading: "Why slugs matter for SEO and URLs",
        paragraphs: [
          "A slug is the human-readable part of a URL identifying a specific page, like the 'best-budget-laptops' in example.com/blog/best-budget-laptops. Clean, descriptive, hyphen-separated slugs are easier to read, share, and are generally considered good practice for SEO compared to URLs with spaces, special characters, or auto-generated IDs.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use hyphens or underscores in a slug?",
        answer: "Hyphens are generally recommended and more widely supported for SEO purposes, most search engines treat hyphens as word separators but don't always treat underscores the same way. This tool defaults to hyphens but supports underscores if your platform requires them.",
      },
      {
        question: "What happens to accented characters like é or ñ?",
        answer: "They're converted to their closest plain-letter equivalent, for example é becomes e, since most URL slugs are expected to use only standard ASCII letters and numbers.",
      },
    ],
    relatedSlugs: ["case-converter", "html-encoder-decoder"],
  },
  {
    slug: "text-sorter",
    category: "text",
    title: "Text Sorter",
    shortDescription: "Sort the lines of a text block alphabetically or numerically.",
    metaDescription: "Free online text sorter to sort the lines of a text block alphabetically (A-Z or Z-A) or numerically, with optional duplicate removal.",
    h1: "Text Sorter",
    intro: "Sort the lines of any text block alphabetically or numerically, ascending or descending, with optional case sensitivity and duplicate removal.",
    icon: "🔡",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text (one item per line)", type: "textarea", placeholder: "Paste text with one item per line..." },
      {
        key: "order",
        label: "Sort Order",
        type: "select",
        options: [
          { label: "Alphabetical (A-Z)", value: "az" },
          { label: "Alphabetical (Z-A)", value: "za" },
          { label: "Numerical (Ascending)", value: "numAsc" },
          { label: "Numerical (Descending)", value: "numDesc" },
        ],
      },
      { key: "caseSensitive", label: "Case Sensitive", type: "checkbox", defaultValue: "false" },
      { key: "removeDuplicates", label: "Remove Duplicate Lines", type: "checkbox", defaultValue: "false" },
    ],
    resultFields: [{ key: "result", label: "Sorted Text", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const order = String(inputs.order ?? "az") as TextSortOrder;
      const caseSensitive = inputs.caseSensitive === "true";
      const removeDuplicates = inputs.removeDuplicates === "true";
      const result = sortTextLines(text, order, caseSensitive, removeDuplicates);
      return { result };
    },
    explanation: [
      {
        heading: "How this differs from our Alphabetizer",
        paragraphs: [
          "This tool is a general-purpose line sorter, it handles both alphabetical and numerical sorting for any kind of list, numbers, mixed content, code, or plain words. Our Alphabetizer, by contrast, is purpose-built for alphabetizing named lists (like bibliography entries or a list of authors), including an option to ignore leading articles ('a', 'an', 'the') when sorting, a specific convention this general sorter doesn't apply.",
        ],
      },
      {
        heading: "Alphabetical vs numerical sorting",
        paragraphs: [
          "Alphabetical sorting compares lines as text, character by character. Numerical sorting instead parses the leading number from each line and compares those values directly, so '9' correctly sorts before '10' (alphabetical sorting would place '10' before '9', since '1' comes before '9' character by character).",
        ],
      },
    ],
    faqs: [
      {
        question: "What happens to lines that aren't numbers when using numerical sort?",
        answer: "Lines that can't be parsed as a number are treated as having an infinitely large value and pushed to the end of the ascending sort (or the start of the descending sort).",
      },
      {
        question: "Does case sensitivity affect the sort order?",
        answer: "Yes, with case-sensitive sorting enabled, uppercase and lowercase letters may sort differently than with it disabled, since the comparison then treats 'Apple' and 'apple' as distinct values.",
      },
    ],
    relatedSlugs: ["alphabetizer", "remove-duplicate-lines"],
  },
  {
    slug: "alphabetizer",
    category: "text",
    title: "Alphabetizer",
    shortDescription: "Alphabetize a list of names, titles or items into A-Z order.",
    metaDescription: "Free online alphabetizer to sort a comma- or line-separated list of names, titles or items into proper A-Z order, with an option to ignore leading articles.",
    h1: "Alphabetizer",
    intro: "Alphabetize a comma- or newline-separated list of names, titles or items into A-Z order, with an option to ignore leading articles like 'the' or 'a'.",
    icon: "🔠",
    status: "live",
    inputFields: [
      { key: "text", label: "Your List", type: "textarea", placeholder: "e.g. The Great Gatsby, A Tale of Two Cities, Moby Dick" },
      {
        key: "delimiter",
        label: "List Format",
        type: "select",
        options: [
          { label: "Comma-Separated", value: "comma" },
          { label: "One per Line", value: "newline" },
        ],
      },
      { key: "ignoreArticles", label: "Ignore Leading Articles (a, an, the)", type: "checkbox", defaultValue: "true" },
      { key: "caseSensitive", label: "Case Sensitive", type: "checkbox", defaultValue: "false" },
    ],
    resultFields: [{ key: "result", label: "Alphabetized List", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const delimiter = String(inputs.delimiter ?? "comma") as AlphabetizeDelimiter;
      const ignoreArticles = inputs.ignoreArticles !== "false";
      const caseSensitive = inputs.caseSensitive === "true";
      const result = alphabetizeList(text, delimiter, ignoreArticles, caseSensitive);
      return { result };
    },
    explanation: [
      {
        heading: "How ignoring leading articles works",
        paragraphs: [
          "When alphabetizing titles, standard convention (used in libraries, bibliographies and indexes) is to ignore a leading 'a', 'an', or 'the' when determining sort order, so 'The Great Gatsby' alphabetizes under 'G', not 'T'. This tool applies that convention automatically when the option is enabled, matching how titles are properly alphabetized in most style guides.",
        ],
      },
      {
        heading: "How this differs from our Text Sorter",
        paragraphs: [
          "This tool is purpose-built for alphabetizing lists of names, titles or items, entered either comma-separated or one per line, with the leading-article convention built in. Our more general Text Sorter instead sorts arbitrary text lines, alphabetically or numerically, without this list- and title-specific behavior.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I paste a comma-separated list instead of one item per line?",
        answer: "Yes, choose 'Comma-Separated' as the list format and the tool will split your list on commas instead of line breaks.",
      },
      {
        question: "Why would I want to ignore leading articles?",
        answer: "It's the standard convention for alphabetizing titles, like book titles, movie titles, or article headlines, so that 'The Great Gatsby' and 'A Tale of Two Cities' sort under 'G' and 'T' rather than clustering under 'A' and 'T' for their articles.",
      },
    ],
    relatedSlugs: ["text-sorter", "remove-duplicate-lines"],
  },
  {
    slug: "remove-empty-lines",
    category: "text",
    title: "Remove Empty Lines",
    shortDescription: "Remove blank lines from a block of text.",
    metaDescription: "Free online tool to remove empty or blank lines from a block of text, with an option to also treat whitespace-only lines as empty.",
    h1: "Remove Empty Lines",
    intro: "Paste your text to instantly remove blank lines, optionally treating lines with only spaces or tabs as empty too.",
    icon: "🧹",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste text with blank lines..." },
      { key: "treatWhitespaceAsEmpty", label: "Treat Whitespace-Only Lines as Empty", type: "checkbox", defaultValue: "true" },
    ],
    resultFields: [
      { key: "result", label: "Result (Empty Lines Removed)", wide: true },
      { key: "linesRemoved", label: "Lines Removed" },
    ],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const treatWhitespaceAsEmpty = inputs.treatWhitespaceAsEmpty !== "false";
      const output = removeEmptyLines(text, treatWhitespaceAsEmpty);
      return { ...output };
    },
    explanation: [
      {
        heading: "How empty line removal works",
        paragraphs: [
          "This tool reads your text line by line and removes any line with no content, tightening up text that has accumulated extra blank lines from copy-pasting between documents, code editors, or spreadsheets.",
        ],
      },
      {
        heading: "Why the whitespace option matters",
        paragraphs: [
          "A line containing only spaces or a tab character looks empty but technically isn't blank. With 'treat whitespace-only lines as empty' enabled, these lines are removed too, useful when text was copied from a source that leaves invisible trailing whitespace on otherwise blank lines.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from Remove Extra Spaces?",
        answer: "This tool removes entire blank lines. Remove Extra Spaces instead collapses multiple spaces within a line down to one, without deleting any lines, the two are meant to be used together for thoroughly cleaning up messy text.",
      },
      {
        question: "Is my text sent to a server?",
        answer: "No, all processing happens directly in your browser, your text is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["remove-extra-spaces", "remove-duplicate-lines"],
  },
  {
    slug: "remove-extra-spaces",
    category: "text",
    title: "Remove Extra Spaces",
    shortDescription: "Collapse multiple spaces in text down to a single space.",
    metaDescription: "Free online tool to remove extra spaces from text, collapsing multiple consecutive spaces into one, with an option to trim each line.",
    h1: "Remove Extra Spaces",
    intro: "Paste your text to instantly collapse multiple consecutive spaces into a single space, with an option to trim leading and trailing whitespace.",
    icon: "␣",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste text with extra   spaces..." },
      { key: "trimLines", label: "Trim Leading/Trailing Whitespace per Line", type: "checkbox", defaultValue: "true" },
    ],
    resultFields: [{ key: "result", label: "Cleaned Text", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const trimLines = inputs.trimLines !== "false";
      const result = removeExtraSpaces(text, trimLines);
      return { result };
    },
    explanation: [
      {
        heading: "How extra space removal works",
        paragraphs: [
          "This tool scans each line of your text and collapses any run of consecutive spaces or tabs down to a single space, a common cleanup step for text pasted from PDFs, old documents, or other sources that leave irregular spacing behind.",
        ],
      },
      {
        heading: "How this differs from Remove Empty Lines",
        paragraphs: [
          "This tool only affects horizontal whitespace within each line, it never deletes a line, even a blank one. Our Remove Empty Lines tool handles removing blank lines themselves. Use both together for a thorough text cleanup.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this remove blank lines?",
        answer: "No, blank lines are left in place. Use our Remove Empty Lines tool if you also want to remove blank lines.",
      },
      {
        question: "Does this affect spacing inside words?",
        answer: "No, only runs of space or tab characters are collapsed, letters within a word are never affected.",
      },
    ],
    relatedSlugs: ["remove-empty-lines", "remove-duplicate-lines"],
  },
  {
    slug: "reverse-text",
    category: "text",
    title: "Reverse Text",
    shortDescription: "Reverse text by character, word or line order.",
    metaDescription: "Free online tool to reverse text by character, word, or line order.",
    h1: "Reverse Text",
    intro: "Reverse your text by character order, word order, or line order.",
    icon: "🔄",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste or type your text here..." },
      {
        key: "mode",
        label: "Reverse By",
        type: "select",
        options: [
          { label: "Characters", value: "characters" },
          { label: "Words", value: "words" },
          { label: "Lines", value: "lines" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "Reversed Text", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const mode = String(inputs.mode ?? "characters") as ReverseTextMode;
      const result = reverseText(text, mode);
      return { result };
    },
    explanation: [
      {
        heading: "How each reverse mode works",
        paragraphs: [
          "Character mode reverses the entire string letter by letter, turning 'hello' into 'olleh'. Word mode keeps each word intact but reverses their order, turning 'the quick fox' into 'fox quick the'. Line mode keeps each line intact but reverses the order lines appear in, useful for flipping a list or reordering pasted content.",
        ],
      },
      {
        heading: "Common uses for reversed text",
        paragraphs: [
          "Reversing text is used for puzzles and wordplay, checking whether a word or phrase is a palindrome, or simply reordering a pasted list or set of lines without retyping it by hand.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will this help me check if something is a palindrome?",
        answer: "Yes, use Character mode and compare the reversed result to your original text, if they match, your text reads the same forwards and backwards.",
      },
      {
        question: "Does word mode preserve punctuation attached to words?",
        answer: "Yes, punctuation attached directly to a word (like a comma or period) moves with that word when the word order is reversed.",
      },
    ],
    relatedSlugs: ["shuffle-text", "case-converter"],
  },
  {
    slug: "shuffle-text",
    category: "text",
    title: "Shuffle Text",
    shortDescription: "Randomly shuffle text by character, word or line.",
    metaDescription: "Free online tool to randomly shuffle text by character, word, or line order.",
    h1: "Shuffle Text",
    intro: "Randomly shuffle your text by character, word, or line order, using a fair Fisher-Yates shuffle.",
    icon: "🔀",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste or type your text here..." },
      {
        key: "mode",
        label: "Shuffle By",
        type: "select",
        options: [
          { label: "Characters", value: "characters" },
          { label: "Words", value: "words" },
          { label: "Lines", value: "lines" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "Shuffled Text", wide: true }],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const mode = String(inputs.mode ?? "words") as ShuffleTextMode;
      const result = shuffleText(text, mode);
      return { result };
    },
    explanation: [
      {
        heading: "How this shuffle works",
        paragraphs: [
          "This tool uses a Fisher-Yates shuffle, an algorithm that produces a genuinely random, unbiased ordering where every possible arrangement is equally likely, unlike naive shuffling approaches that can subtly favor certain orderings.",
        ],
      },
      {
        heading: "Common uses for shuffled text",
        paragraphs: [
          "Shuffling lines is useful for randomizing a list, like quiz questions or a set of names for random assignment. Shuffling words can be used for word games or generating scrambled prompts, and shuffling characters is mostly used for puzzles, since it usually produces unreadable output.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will I get the same result if I run it again?",
        answer: "No, unlike our other text tools, this one is intentionally random, running it again on the same input produces a different shuffled order each time.",
      },
      {
        question: "Is this shuffle truly random?",
        answer: "It uses your browser's random number generator with a Fisher-Yates shuffle, which is statistically unbiased and suitable for general-purpose shuffling, though not intended for cryptographic use.",
      },
    ],
    relatedSlugs: ["reverse-text", "random-number-generator"],
  },
  {
    slug: "html-encoder-decoder",
    category: "text",
    title: "HTML Encoder/Decoder",
    shortDescription: "Encode text to HTML entities or decode HTML entities to text.",
    metaDescription: "Free online HTML encoder and decoder to convert special characters to HTML entities, or decode HTML entities back to plain text.",
    h1: "HTML Encoder/Decoder",
    intro: "Encode special characters into HTML entities, or decode HTML entities (named, decimal or hex) back into plain text.",
    icon: "🏷️",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Paste text or HTML here..." },
      {
        key: "mode",
        label: "Mode",
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
      const mode = String(inputs.mode ?? "encode") as HtmlEntityMode;
      const result = convertHtmlEntities(text, mode);
      return { result };
    },
    explanation: [
      {
        heading: "How HTML entity encoding works",
        paragraphs: [
          "Encoding converts characters with special meaning in HTML, like &, <, >, \" and ', into their entity equivalents (&amp;, &lt;, &gt;, &quot;, &#39;), so they display as literal text instead of being interpreted as markup. Decoding reverses this, converting named entities, decimal entities (like &#169;), and hex entities (like &#xA9;) back into their original characters.",
        ],
      },
      {
        heading: "Why HTML encoding matters",
        paragraphs: [
          "Displaying user-generated or code-like text safely inside an HTML page requires encoding special characters first, otherwise a stray '<' could be misinterpreted as the start of a tag. This is a common step when embedding code snippets in a web page or preparing text for an XML/HTML context.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this run in my browser or on a server?",
        answer: "Entirely in your browser, your text is never sent to or stored on our servers.",
      },
      {
        question: "What entity formats are supported for decoding?",
        answer: "Common named entities (like &amp; and &lt;), decimal numeric entities (like &#169;), and hexadecimal numeric entities (like &#xA9;) are all supported.",
      },
    ],
    relatedSlugs: ["slug-generator", "case-converter"],
  },
  {
    slug: "uuid-validator",
    category: "developer",
    title: "UUID Validator",
    shortDescription: "Validate a UUID and identify its version and variant.",
    metaDescription: "Free online UUID validator to check whether a string is a valid UUID, and identify its version and variant, per RFC 4122.",
    h1: "UUID Validator",
    intro: "Check whether a string is a valid UUID (universally unique identifier), and identify its version and variant.",
    icon: "✅",
    status: "live",
    inputFields: [
      { key: "uuid", label: "UUID", type: "text", placeholder: "e.g. 550e8400-e29b-41d4-a716-446655440000" },
    ],
    resultFields: [
      { key: "isValid", label: "Status", highlight: true },
      { key: "version", label: "Version" },
      { key: "variant", label: "Variant" },
    ],
    calculate: (inputs) => {
      const uuid = String(inputs.uuid ?? "");
      const output = validateUuid(uuid);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this differs from our UUID Generator",
        paragraphs: [
          "Our UUID Generator creates new random version 4 UUIDs. This tool does the opposite, it checks whether a UUID string you already have is correctly formatted (the standard 8-4-4-4-12 hexadecimal pattern), and identifies its version (1-8) and variant from the bits embedded in the UUID itself.",
        ],
      },
      {
        heading: "What UUID version and variant mean",
        paragraphs: [
          "The version digit (the first character of the third group) indicates how the UUID was generated, version 4 is random, version 1 is timestamp-based, and so on. The variant (encoded in the top bits of the fourth group) indicates which layout rules the UUID follows, the vast majority of UUIDs in use today are RFC 4122 variant.",
        ],
      },
    ],
    faqs: [
      {
        question: "What makes a UUID invalid?",
        answer: "A UUID is invalid if it doesn't match the standard 8-4-4-4-12 hexadecimal pattern, has the wrong length, contains non-hexadecimal characters, or has a version digit outside the valid 1-8 range.",
      },
      {
        question: "Is my UUID sent to a server?",
        answer: "No, all validation happens entirely in your browser, your data is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["uuid-generator", "json-formatter"],
  },
  {
    slug: "xml-formatter",
    category: "developer",
    title: "XML Formatter",
    shortDescription: "Format and indent XML with proper structure.",
    metaDescription: "Free online XML formatter to beautify and indent XML with proper structure, and catch common well-formedness errors.",
    h1: "XML Formatter",
    intro: "Paste your XML to format it with consistent indentation. Also flags unclosed tags, mismatched tags, and multiple root elements.",
    icon: "📰",
    status: "live",
    inputFields: [
      { key: "xml", label: "Your XML", type: "textarea", placeholder: "<root><item>value</item></root>" },
    ],
    resultFields: [{ key: "result", label: "Formatted XML", wide: true }],
    calculate: (inputs) => {
      const xml = String(inputs.xml ?? "");
      const result = formatXml(xml);
      return { result };
    },
    explanation: [
      {
        heading: "How this XML formatter works",
        paragraphs: [
          "This tool parses your XML into tags, text, comments and CDATA sections using its own hand-written tokenizer, then re-indents it two spaces per nesting level. A single text-only child (like <name>John</name>) is kept on one line, matching how most XML formatters handle simple leaf elements.",
        ],
      },
      {
        heading: "What this catches along the way",
        paragraphs: [
          "Since formatting requires understanding the tag structure, this tool also surfaces common well-formedness problems as it goes: unclosed tags, mismatched opening/closing tag pairs, and multiple root elements (valid XML must have exactly one root element).",
        ],
      },
    ],
    faqs: [
      {
        question: "What happens if my XML has an error?",
        answer: "The tool shows an error message describing the specific problem, such as a mismatched closing tag or an unclosed tag, rather than a formatted result.",
      },
      {
        question: "Does this validate against a schema (XSD/DTD)?",
        answer: "No, this checks well-formedness only (correct tag structure), not validity against a specific schema. Schema validation is a separate, more involved process.",
      },
    ],
    relatedSlugs: ["xml-validator", "json-formatter"],
  },
  {
    slug: "xml-validator",
    category: "developer",
    title: "XML Validator",
    shortDescription: "Check whether XML is well-formed.",
    metaDescription: "Free online XML validator to check whether your XML is well-formed, catching unclosed tags, mismatched tags, and multiple root elements.",
    h1: "XML Validator",
    intro: "Paste your XML to check whether it's well-formed, catching unclosed tags, mismatched tags, and multiple root elements.",
    icon: "🔍",
    status: "live",
    inputFields: [
      { key: "xml", label: "Your XML", type: "textarea", placeholder: "<root><item>value</item></root>" },
    ],
    resultFields: [
      { key: "isValid", label: "Status", highlight: true },
      { key: "message", label: "Details", wide: true },
    ],
    calculate: (inputs) => {
      const xml = String(inputs.xml ?? "");
      const output = validateXml(xml);
      return { ...output };
    },
    explanation: [
      {
        heading: "What 'well-formed' means for XML",
        paragraphs: [
          "Well-formed XML follows XML's basic syntax rules: every opening tag has a matching closing tag (or is self-closed), tags are properly nested without overlapping, and the document has exactly one root element containing everything else. This tool checks exactly those rules using its own hand-written parser.",
        ],
      },
      {
        heading: "Well-formed vs valid",
        paragraphs: [
          "'Well-formed' and 'valid' are different concepts in XML. Well-formed means the syntax is structurally correct, which is what this tool checks. 'Valid' additionally means the document conforms to a specific schema (like an XSD or DTD) defining which elements and attributes are allowed, this tool doesn't check schema validity.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this tell me which line the error is on?",
        answer: "The error message describes the specific tag or structural problem found (like which closing tag was unexpected), though it doesn't report a line number since the check is based on tag structure rather than raw text position.",
      },
      {
        question: "Is my XML sent to a server?",
        answer: "No, all validation happens entirely in your browser, your data is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["xml-formatter", "json-formatter"],
  },
  {
    slug: "csv-to-json",
    category: "developer",
    title: "CSV to JSON Converter",
    shortDescription: "Convert CSV data into a JSON array of objects.",
    metaDescription: "Free online CSV to JSON converter to convert CSV data (with proper quoted-field handling) into a JSON array of objects.",
    h1: "CSV to JSON Converter",
    intro: "Convert CSV data into a JSON array of objects, using the first row as field names. Handles quoted fields containing commas or line breaks.",
    icon: "📊",
    status: "live",
    inputFields: [
      { key: "csv", label: "Your CSV", type: "textarea", placeholder: "name,age\nAlice,30\nBob,25" },
      {
        key: "delimiter",
        label: "Delimiter",
        type: "select",
        options: [
          { label: "Comma (,)", value: "," },
          { label: "Semicolon (;)", value: ";" },
          { label: "Tab", value: "\t" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "JSON Output", wide: true }],
    calculate: (inputs) => {
      const csv = String(inputs.csv ?? "");
      const delimiter = String(inputs.delimiter ?? ",");
      const result = convertCsvToJson(csv, delimiter === "\\t" ? "\t" : delimiter);
      return { result };
    },
    explanation: [
      {
        heading: "How CSV to JSON conversion works",
        paragraphs: [
          "This tool treats the first row as field names, then converts every following row into a JSON object using those names as keys. It correctly handles quoted fields containing the delimiter, line breaks, or escaped ('\"\"') quotes, using its own hand-written CSV parser rather than a naive split-on-comma approach.",
        ],
      },
      {
        heading: "When you'd convert CSV to JSON",
        paragraphs: [
          "Converting spreadsheet or export data (CSV) into JSON is a common step when feeding data into an API, a JavaScript application, or a NoSQL database, all of which typically expect JSON rather than tabular CSV.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my CSV uses semicolons instead of commas?",
        answer: "Select 'Semicolon' or 'Tab' from the delimiter dropdown, common in CSV exports from regions or tools that use commas as decimal separators.",
      },
      {
        question: "Does this handle quoted fields with embedded commas?",
        answer: "Yes, a field like \"New York, NY\" wrapped in quotes is correctly kept as a single value rather than being split into two fields.",
      },
    ],
    relatedSlugs: ["json-to-csv", "json-formatter"],
  },
  {
    slug: "json-to-csv",
    category: "developer",
    title: "JSON to CSV Converter",
    shortDescription: "Convert a JSON array of objects into CSV data.",
    metaDescription: "Free online JSON to CSV converter to convert a JSON array of objects into CSV data, with proper quoting for special characters.",
    h1: "JSON to CSV Converter",
    intro: "Convert a JSON array of objects into CSV data, automatically building a header row from all the keys used across your objects.",
    icon: "📈",
    status: "live",
    inputFields: [
      { key: "json", label: "Your JSON", type: "textarea", placeholder: '[{"name":"Alice","age":30},{"name":"Bob","age":25}]' },
      {
        key: "delimiter",
        label: "Delimiter",
        type: "select",
        options: [
          { label: "Comma (,)", value: "," },
          { label: "Semicolon (;)", value: ";" },
          { label: "Tab", value: "\t" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "CSV Output", wide: true }],
    calculate: (inputs) => {
      const json = String(inputs.json ?? "");
      const delimiter = String(inputs.delimiter ?? ",");
      const result = convertJsonToCsv(json, delimiter === "\\t" ? "\t" : delimiter);
      return { result };
    },
    explanation: [
      {
        heading: "How JSON to CSV conversion works",
        paragraphs: [
          "This tool expects a JSON array of flat objects (like [{\"name\":\"Alice\",\"age\":30}, ...]). It collects every key used across all objects to build the header row, then writes one CSV row per object, quoting any value that contains the delimiter, a quote character, or a line break.",
        ],
      },
      {
        heading: "What happens if objects have different fields",
        paragraphs: [
          "If some objects are missing a field that others have, the resulting CSV cell for that row and column is simply left blank, the header row always includes every key seen across the full array.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does my JSON need to be an array?",
        answer: "Yes, the input must be a JSON array of objects. A single object or a nested structure would need to be restructured into a flat array first.",
      },
      {
        question: "What happens to nested objects or arrays inside a field?",
        answer: "They're converted to their JSON string representation in the CSV cell, since CSV itself has no concept of nested structure.",
      },
    ],
    relatedSlugs: ["csv-to-json", "json-formatter"],
  },
  {
    slug: "sql-formatter",
    category: "developer",
    title: "SQL Formatter",
    shortDescription: "Format SQL queries with readable line breaks and indentation.",
    metaDescription: "Free online SQL formatter to format SQL queries with readable line breaks before major clauses like SELECT, FROM, WHERE and JOIN.",
    h1: "SQL Formatter",
    intro: "Paste a SQL query to format it with a line break before each major clause (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY and more).",
    icon: "🗄️",
    status: "live",
    inputFields: [
      { key: "sql", label: "Your SQL Query", type: "textarea", placeholder: "SELECT id, name FROM users WHERE age > 18 ORDER BY name" },
    ],
    resultFields: [{ key: "result", label: "Formatted SQL", wide: true }],
    calculate: (inputs) => {
      const sql = String(inputs.sql ?? "");
      const result = formatSql(sql);
      return { result };
    },
    explanation: [
      {
        heading: "How this SQL formatter works",
        paragraphs: [
          "This is a keyword-based formatter, not a full SQL parser: it recognizes major clause keywords (SELECT, FROM, WHERE, JOIN variants, GROUP BY, ORDER BY, HAVING, and more) and inserts a line break before each one, then indents AND/OR conditions within a WHERE clause. This produces readable formatting for typical single-statement queries.",
        ],
      },
      {
        heading: "What this formatter doesn't do",
        paragraphs: [
          "Because it works from keywords rather than a true SQL grammar, this tool won't perfectly handle every edge case, deeply nested subqueries, vendor-specific syntax, or unusual keyword usage inside string literals may not format exactly as a dedicated SQL IDE would. For everyday query cleanup and readability, it works well.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this work for INSERT, UPDATE and DELETE statements, not just SELECT?",
        answer: "Yes, it recognizes keywords from INSERT INTO/VALUES, UPDATE/SET, and DELETE FROM statements too, not just SELECT queries.",
      },
      {
        question: "Will this change my SQL's behavior?",
        answer: "No, only whitespace and line breaks are changed, the query's keywords, identifiers and logic are left exactly as written.",
      },
    ],
    relatedSlugs: ["json-formatter", "csv-to-json"],
  },
  {
    slug: "jwt-decoder",
    category: "developer",
    title: "JWT Decoder",
    shortDescription: "Decode a JWT's header and payload.",
    metaDescription: "Free online JWT decoder to decode a JSON Web Token's header and payload. Does not verify the signature.",
    h1: "JWT Decoder",
    intro: "Paste a JWT to decode its header and payload. This is a decoder only, it does not verify the signature.",
    icon: "🔓",
    status: "live",
    inputFields: [
      { key: "token", label: "JWT", type: "textarea", placeholder: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...." },
    ],
    resultFields: [
      { key: "header", label: "Header", wide: true },
      { key: "payload", label: "Payload", wide: true },
      { key: "signature", label: "Signature (raw, base64url)", wide: true },
    ],
    calculate: (inputs) => {
      const token = String(inputs.token ?? "");
      const output = decodeJwt(token);
      return { ...output };
    },
    explanation: [
      {
        heading: "How JWT decoding works",
        paragraphs: [
          "A JWT has three base64url-encoded segments separated by periods: header.payload.signature. This tool decodes the header and payload segments (each is just base64url-encoded JSON) and displays them pretty-printed, along with the raw signature segment.",
        ],
      },
      {
        heading: "Why this doesn't verify the signature",
        paragraphs: [
          "Verifying a JWT's signature requires the secret key (for HS256) or public key (for RS256/ES256) it was signed with, information this tool never asks for or has access to. Decoding shows you what's inside the token, it doesn't confirm the token is authentic or hasn't been tampered with, that check has to happen on the server that issued it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it safe to paste a JWT here?",
        answer: "Decoding happens entirely in your browser, your token is never sent to or stored on our servers. That said, treat JWTs like any sensitive credential, avoid pasting tokens from production systems into any third-party tool if you're not sure how it handles data.",
      },
      {
        question: "Can I use this to create a valid JWT?",
        answer: "No, this tool only decodes existing tokens. Use our JWT Generator to create a new signed token.",
      },
    ],
    relatedSlugs: ["jwt-generator", "hash-generator"],
  },
  {
    slug: "jwt-generator",
    category: "developer",
    title: "JWT Generator",
    shortDescription: "Generate a signed HS256 JWT from a JSON payload.",
    metaDescription: "Free online JWT generator to create a signed HS256 JSON Web Token from a JSON payload and secret key.",
    h1: "JWT Generator",
    intro: "Generate a signed JWT (HS256) from a JSON payload and a secret key, computed entirely in your browser with our own SHA-256/HMAC implementation.",
    icon: "🔏",
    status: "live",
    inputFields: [
      { key: "payload", label: "Payload (JSON)", type: "textarea", placeholder: '{"sub":"1234567890","name":"John Doe"}' },
      { key: "secret", label: "Secret Key", type: "text", placeholder: "your-secret-key" },
    ],
    resultFields: [
      { key: "token", label: "Generated JWT", wide: true, highlight: true },
      { key: "header", label: "Header", wide: true },
      { key: "payload", label: "Payload", wide: true },
    ],
    calculate: (inputs) => {
      const payload = String(inputs.payload ?? "");
      const secret = String(inputs.secret ?? "");
      const output = generateJwt(payload, secret);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this JWT is signed",
        paragraphs: [
          "This tool builds a standard HS256 JWT: the header ({\"alg\":\"HS256\",\"typ\":\"JWT\"}) and your payload are base64url-encoded and joined with a period, then signed with HMAC-SHA256 using your secret key. The signature is appended as a third base64url segment, producing a complete, verifiable token. Both the SHA-256 and HMAC logic are implemented directly in this tool, no crypto library involved, and verified to produce byte-identical output to standard implementations.",
        ],
      },
      {
        heading: "Keep your secret key safe",
        paragraphs: [
          "Anyone with your secret key can generate valid tokens that your server will accept, or verify tokens they intercept, so treat it like a password. This tool runs entirely in your browser and never transmits your secret anywhere, but you should still avoid using a real production secret in any external tool, use this for testing, prototyping, or generating tokens with throwaway secrets.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why only HS256?",
        answer: "HS256 (HMAC with SHA-256) is symmetric, signing and verifying both use the same secret key, which is why it can be implemented and computed entirely client-side. Asymmetric algorithms like RS256 require a private/public key pair and are a separate, more involved implementation.",
      },
      {
        question: "Is my secret key sent anywhere?",
        answer: "No, the entire signing process runs in your browser using JavaScript. Your secret and payload are never transmitted to or stored on our servers.",
      },
      {
        question: "Can I verify a token this tool generated?",
        answer: "Yes, paste the generated token into our JWT Decoder to see its decoded header and payload. Full signature verification would require re-computing the HMAC with the same secret, which this decoder intentionally doesn't do since it never asks for a secret.",
      },
    ],
    relatedSlugs: ["jwt-decoder", "hash-generator"],
  },
  {
    slug: "hash-generator",
    category: "developer",
    title: "Hash Generator",
    shortDescription: "Generate MD5, SHA-1 and SHA-256 hashes of text.",
    metaDescription: "Free online hash generator to compute MD5, SHA-1 and SHA-256 hashes of any text, entirely in your browser.",
    h1: "Hash Generator",
    intro: "Generate MD5, SHA-1 and SHA-256 hashes of any text, computed entirely in your browser using our own hash implementations.",
    icon: "#️⃣",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Text", type: "textarea", placeholder: "Enter text to hash..." },
    ],
    resultFields: [
      { key: "md5", label: "MD5", wide: true },
      { key: "sha1", label: "SHA-1", wide: true },
      { key: "sha256", label: "SHA-256", wide: true },
    ],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const output = calculateHashes(text);
      return { ...output };
    },
    explanation: [
      {
        heading: "How these hashes are computed",
        paragraphs: [
          "This tool implements the MD5, SHA-1 and SHA-256 algorithms directly, no crypto library involved, and each was verified to produce byte-identical output to Node's built-in crypto module across empty input, unicode text, and inputs at the algorithms' internal block-size boundaries before being wired up here.",
        ],
      },
      {
        heading: "Choosing between MD5, SHA-1 and SHA-256",
        paragraphs: [
          "MD5 and SHA-1 are fast but considered cryptographically broken, both have known collision vulnerabilities and shouldn't be used for security-sensitive purposes like password storage, though they're still common for non-security uses like checksums and cache keys. SHA-256 is currently considered secure and is the standard choice for security-relevant hashing today.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this safe for hashing passwords?",
        answer: "No, none of these algorithms (including SHA-256) should be used directly for password storage, dedicated password hashing algorithms like bcrypt, scrypt or Argon2 (which are deliberately slow and salted) exist specifically for that purpose. These general-purpose hashes are best suited for checksums, cache keys, and data integrity checks.",
      },
      {
        question: "Is my text sent to a server?",
        answer: "No, all hashing happens entirely in your browser, your text is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["jwt-generator", "jwt-decoder"],
  },
  {
    slug: "cron-expression-generator",
    category: "developer",
    title: "Cron Expression Generator",
    shortDescription: "Build a cron expression from simple schedule fields.",
    metaDescription: "Free online cron expression generator to build a standard 5-field cron expression from minute, hour, day, month and weekday fields, with a plain-English description.",
    h1: "Cron Expression Generator",
    intro: "Build a standard 5-field cron expression from simple schedule fields, with a plain-English description of what it does.",
    icon: "⏰",
    status: "live",
    inputFields: [
      { key: "minute", label: "Minute (0-59 or *)", type: "text", defaultValue: "0" },
      { key: "hour", label: "Hour (0-23 or *)", type: "text", defaultValue: "9" },
      { key: "dayOfMonth", label: "Day of Month (1-31 or *)", type: "text", defaultValue: "*" },
      { key: "month", label: "Month (1-12 or *)", type: "text", defaultValue: "*" },
      { key: "dayOfWeek", label: "Day of Week (0-6, Sun=0, or *)", type: "text", defaultValue: "*" },
    ],
    resultFields: [
      { key: "cronExpression", label: "Cron Expression", highlight: true },
      { key: "description", label: "Description", wide: true },
    ],
    calculate: (inputs) => {
      const minute = String(inputs.minute ?? "*");
      const hour = String(inputs.hour ?? "*");
      const dayOfMonth = String(inputs.dayOfMonth ?? "*");
      const month = String(inputs.month ?? "*");
      const dayOfWeek = String(inputs.dayOfWeek ?? "*");
      const output = generateCron(minute, hour, dayOfMonth, month, dayOfWeek);
      return { ...output };
    },
    explanation: [
      {
        heading: "How cron expressions work",
        paragraphs: [
          "A standard cron expression has 5 fields, in order: minute, hour, day of month, month, and day of week, each either a specific value, a comma-separated list, a range (like 1-5), a step (like */15), or * meaning 'every'. This tool builds a valid expression from those five fields and generates a plain-English description for common, recognizable patterns.",
        ],
      },
      {
        heading: "Common cron patterns",
        paragraphs: [
          "'0 9 * * *' runs daily at 9:00 AM. '*/15 * * * *' runs every 15 minutes. '0 0 * * 0' runs weekly at midnight on Sunday. '0 0 1 * *' runs monthly on the 1st at midnight. Cron is used by task schedulers across servers, CI/CD pipelines, and cloud platforms to trigger jobs on a recurring schedule.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does day of week 0 mean?",
        answer: "0 represents Sunday in standard cron notation, with the days numbered 0 (Sunday) through 6 (Saturday).",
      },
      {
        question: "Can I combine day of month and day of week?",
        answer: "Some cron implementations treat this as 'either/or' (OR logic) rather than requiring both to match, behavior can vary slightly between systems (like standard cron vs. Quartz), check your specific scheduler's documentation if you're combining both fields.",
      },
    ],
    relatedSlugs: ["unix-timestamp-converter", "date-calculator"],
  },
  {
    slug: "unix-timestamp-converter",
    category: "developer",
    title: "Unix Timestamp Converter",
    shortDescription: "Convert between a Unix timestamp and a human-readable date.",
    metaDescription: "Free online Unix timestamp converter to convert a Unix timestamp to a date, or a date to a Unix timestamp, in either direction.",
    h1: "Unix Timestamp Converter",
    intro: "Convert a Unix timestamp to a human-readable date, or a date to a Unix timestamp, in either direction.",
    icon: "🕐",
    status: "live",
    inputFields: [
      {
        key: "mode",
        label: "Direction",
        type: "select",
        options: [
          { label: "Timestamp → Date", value: "timestampToDate" },
          { label: "Date → Timestamp", value: "dateToTimestamp" },
        ],
      },
      { key: "timestampInput", label: "Unix Timestamp (seconds or ms)", type: "text", placeholder: "e.g. 1700000000" },
      { key: "dateInput", label: "Date (used for Date → Timestamp)", type: "text", placeholder: "e.g. 2026-07-28T14:30:00" },
    ],
    resultFields: [
      { key: "unixTimestampSeconds", label: "Unix Timestamp (seconds)", highlight: true },
      { key: "unixTimestampMillis", label: "Unix Timestamp (ms)" },
      { key: "isoDate", label: "ISO 8601" },
      { key: "utcDate", label: "UTC" },
      { key: "localDate", label: "Local Time" },
      { key: "relativeTime", label: "Relative" },
    ],
    calculate: (inputs) => {
      const mode = String(inputs.mode ?? "timestampToDate") as TimestampConversionMode;
      const timestampInput = String(inputs.timestampInput ?? "");
      const dateInput = String(inputs.dateInput ?? "");
      const output = convertTimestamp(mode, timestampInput, dateInput);
      return { ...output };
    },
    explanation: [
      {
        heading: "What a Unix timestamp is",
        paragraphs: [
          "A Unix timestamp counts the number of seconds (sometimes milliseconds) that have elapsed since January 1, 1970, 00:00:00 UTC (the 'Unix epoch'). It's a compact, timezone-independent way to represent a point in time, widely used in databases, APIs and log files.",
        ],
      },
      {
        heading: "Seconds vs milliseconds",
        paragraphs: [
          "Some systems (like Unix/Linux and most databases) use seconds, while others (like JavaScript's Date.now()) use milliseconds. This tool auto-detects which one you've entered based on magnitude, and always shows both in the result alongside ISO 8601, UTC, local time, and a human-readable relative time.",
        ],
      },
    ],
    faqs: [
      {
        question: "How does this tell seconds and milliseconds apart?",
        answer: "Timestamps larger than about 100 billion are assumed to be milliseconds (since a seconds-based timestamp that large would represent a date thousands of years in the future), otherwise the value is treated as seconds.",
      },
      {
        question: "What date formats are accepted for Date → Timestamp?",
        answer: "Standard formats like 2026-07-28, 2026-07-28T14:30:00, or 2026-07-28T14:30:00Z are all accepted, parsed using your browser's native date parsing.",
      },
    ],
    relatedSlugs: ["cron-expression-generator", "date-calculator"],
  },
  {
    slug: "html-minifier",
    category: "developer",
    title: "HTML Minifier",
    shortDescription: "Minify HTML by removing comments and unnecessary whitespace.",
    metaDescription: "Free online HTML minifier to remove comments and unnecessary whitespace from HTML, reducing file size.",
    h1: "HTML Minifier",
    intro: "Minify your HTML by stripping comments and collapsing unnecessary whitespace, while protecting script, style and pre content.",
    icon: "📉",
    status: "live",
    inputFields: [
      { key: "html", label: "Your HTML", type: "textarea", placeholder: "<div>\n  <p>Hello</p>\n</div>" },
    ],
    resultFields: [{ key: "result", label: "Minified HTML", wide: true }],
    calculate: (inputs) => {
      const html = String(inputs.html ?? "");
      const result = minifyHtml(html);
      return { result };
    },
    explanation: [
      {
        heading: "How this minifier works",
        paragraphs: [
          "This tool strips HTML comments (except conditional comments), then collapses whitespace between and within tags down to a minimum. The contents of <script>, <style>, <pre> and <textarea> tags are protected from whitespace collapsing first, since removing newlines there could break JavaScript comments, CSS, or visibly alter preformatted text.",
        ],
      },
      {
        heading: "What this doesn't do",
        paragraphs: [
          "This is a regex/heuristic-based minifier, not a full HTML parser, so it won't rename attributes, remove optional quotes, or perform the more aggressive optimizations a build-tool-grade minifier would. It focuses on the safe, high-impact wins: comments and whitespace, which typically account for most of the reducible size in hand-written HTML.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will this break my inline JavaScript or CSS?",
        answer: "No, content inside <script>, <style>, <pre> and <textarea> tags is left completely untouched, only whitespace outside those tags is collapsed.",
      },
      {
        question: "Is my HTML sent to a server?",
        answer: "No, all minification happens entirely in your browser, your code is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["html-beautifier", "css-minifier"],
  },
  {
    slug: "html-beautifier",
    category: "developer",
    title: "HTML Beautifier",
    shortDescription: "Format and indent minified or messy HTML.",
    metaDescription: "Free online HTML beautifier to format and indent minified or messy HTML for readability.",
    h1: "HTML Beautifier",
    intro: "Format minified or messy HTML with consistent indentation, making it readable again.",
    icon: "📈",
    status: "live",
    inputFields: [
      { key: "html", label: "Your HTML", type: "textarea", placeholder: "<div><p>Hello</p></div>" },
    ],
    resultFields: [{ key: "result", label: "Formatted HTML", wide: true }],
    calculate: (inputs) => {
      const html = String(inputs.html ?? "");
      const result = beautifyHtml(html);
      return { result };
    },
    explanation: [
      {
        heading: "How this beautifier works",
        paragraphs: [
          "This tool tokenizes your HTML into tags and text using its own hand-written tokenizer, then re-indents based on tag nesting depth, two spaces per level. Void elements (like <br>, <img>, <input>, <meta>) don't affect indentation depth, since they never have closing tags. A single text-only child is kept on the same line as its parent tag for readability.",
        ],
      },
      {
        heading: "Why this is lenient about tag matching",
        paragraphs: [
          "Unlike our XML Formatter, this tool doesn't throw an error on mismatched or unclosed tags. Real-world HTML5 permits optional closing tags for several elements (like <li>, <p>, and <td> in certain contexts), so a strict well-formedness check would produce false errors on perfectly valid HTML, this tool prioritizes producing a reasonable, readable result over strict validation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this validate my HTML?",
        answer: "No, this is a formatter, not a validator, it re-indents based on tag structure but doesn't check whether your HTML follows the full HTML5 specification.",
      },
      {
        question: "Is my HTML sent to a server?",
        answer: "No, all formatting happens entirely in your browser, your code is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["html-minifier", "css-beautifier"],
  },
  {
    slug: "css-minifier",
    category: "developer",
    title: "CSS Minifier",
    shortDescription: "Minify CSS by removing comments and unnecessary whitespace.",
    metaDescription: "Free online CSS minifier to remove comments and unnecessary whitespace from CSS, reducing file size.",
    h1: "CSS Minifier",
    intro: "Minify your CSS by stripping comments and unnecessary whitespace around selectors, properties and values.",
    icon: "📉",
    status: "live",
    inputFields: [
      { key: "css", label: "Your CSS", type: "textarea", placeholder: ".box {\n  color: red;\n  padding: 10px;\n}" },
    ],
    resultFields: [{ key: "result", label: "Minified CSS", wide: true }],
    calculate: (inputs) => {
      const css = String(inputs.css ?? "");
      const result = minifyCss(css);
      return { result };
    },
    explanation: [
      {
        heading: "How this minifier works",
        paragraphs: [
          "This tool strips CSS comments, removes whitespace around punctuation ({, }, :, ;, ,), drops the last semicolon before a closing brace, and collapses any remaining whitespace, a purely text-based transformation with no CSS parser involved.",
        ],
      },
      {
        heading: "Why minify CSS",
        paragraphs: [
          "Removing comments and unnecessary whitespace reduces file size, which means faster downloads and slightly faster parsing, especially on larger stylesheets. It's a standard step in most production front-end build pipelines.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this rename classes or remove unused rules?",
        answer: "No, this only removes comments and whitespace. It doesn't rename selectors, remove unused CSS, or merge duplicate rules, those require analyzing how the CSS is actually used, which is beyond a simple text-based minifier.",
      },
      {
        question: "Is my CSS sent to a server?",
        answer: "No, all minification happens entirely in your browser, your code is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["css-beautifier", "html-minifier"],
  },
  {
    slug: "css-beautifier",
    category: "developer",
    title: "CSS Beautifier",
    shortDescription: "Format and indent minified or messy CSS.",
    metaDescription: "Free online CSS beautifier to format and indent minified or messy CSS, with one declaration per line.",
    h1: "CSS Beautifier",
    intro: "Format minified or messy CSS with one declaration per line and consistent indentation, including nested rules like media queries.",
    icon: "📊",
    status: "live",
    inputFields: [
      { key: "css", label: "Your CSS", type: "textarea", placeholder: ".box{color:red;padding:10px}" },
    ],
    resultFields: [{ key: "result", label: "Formatted CSS", wide: true }],
    calculate: (inputs) => {
      const css = String(inputs.css ?? "");
      const result = beautifyCss(css);
      return { result };
    },
    explanation: [
      {
        heading: "How this beautifier works",
        paragraphs: [
          "This tool tracks brace ({, }) and semicolon (;) boundaries to reformat CSS with one selector and one declaration per line, indenting nested rules like @media queries an extra level, a straightforward state-machine approach rather than a full CSS parser.",
        ],
      },
      {
        heading: "How this differs from our CSS Minifier",
        paragraphs: [
          "This tool does the opposite of our CSS Minifier, adding readable formatting back to compressed or single-line CSS, rather than stripping it out. Use whichever direction matches what you're trying to do with the stylesheet.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this handle nested @media queries?",
        answer: "Yes, nested rules like @media blocks are indented an additional level, matching how CSS nesting is typically formatted.",
      },
      {
        question: "Is my CSS sent to a server?",
        answer: "No, all formatting happens entirely in your browser, your code is never transmitted anywhere.",
      },
    ],
    relatedSlugs: ["css-minifier", "html-beautifier"],
  },
  {
    slug: "meta-tag-generator",
    category: "seo",
    title: "Meta Tag Generator",
    shortDescription: "Generate title, description and robots meta tags.",
    metaDescription: "Free online meta tag generator to create title, description, keywords, viewport, charset and robots meta tags for your webpage.",
    h1: "Meta Tag Generator",
    intro: "Generate the core meta tags for your webpage's head section, title, description, keywords, robots directives and more, ready to paste in.",
    icon: "🏷️",
    status: "live",
    inputFields: [
      { key: "title", label: "Page Title", type: "text", placeholder: "e.g. Free Online Calculators - Merondis" },
      { key: "description", label: "Meta Description", type: "textarea", placeholder: "A short summary of the page (150-160 characters recommended)" },
      { key: "keywords", label: "Keywords (comma-separated, optional)", type: "text", placeholder: "e.g. calculator, converter, free tools" },
      { key: "author", label: "Author (optional)", type: "text", placeholder: "e.g. Jane Doe" },
      { key: "robotsIndex", label: "Allow Search Engines to Index This Page", type: "checkbox", defaultValue: "true" },
      { key: "robotsFollow", label: "Allow Search Engines to Follow Links", type: "checkbox", defaultValue: "true" },
      { key: "viewport", label: "Include Responsive Viewport Tag", type: "checkbox", defaultValue: "true" },
      { key: "charset", label: "Include UTF-8 Charset Tag", type: "checkbox", defaultValue: "true" },
    ],
    resultFields: [{ key: "result", label: "Meta Tags", wide: true }],
    calculate: (inputs) => {
      const result = generateMetaTags({
        title: String(inputs.title ?? ""),
        description: String(inputs.description ?? ""),
        keywords: String(inputs.keywords ?? ""),
        author: String(inputs.author ?? ""),
        robotsIndex: inputs.robotsIndex !== "false",
        robotsFollow: inputs.robotsFollow !== "false",
        viewport: inputs.viewport !== "false",
        charset: inputs.charset !== "false",
      });
      return { result };
    },
    explanation: [
      {
        heading: "Which meta tags matter most for SEO",
        paragraphs: [
          "The title tag and meta description are the two meta tags with the most direct SEO impact, they're what typically appears as your clickable headline and preview snippet in search results. The robots meta tag controls whether a page is indexed and whether its links are followed, useful for excluding pages like internal search results or duplicate content from search engines.",
        ],
      },
      {
        heading: "Does the keywords meta tag still matter?",
        paragraphs: [
          "No, major search engines like Google have not used the keywords meta tag for ranking purposes in a very long time. It's included here mainly for completeness and for any legacy systems that might still reference it, description and title tags are what's worth focusing your effort on.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long should my meta description be?",
        answer: "Roughly 150-160 characters is a commonly cited guideline, long enough to be descriptive but short enough to avoid truncation in most search results. Use our Google SERP Preview tool to check how your title and description will actually display.",
      },
      {
        question: "When should I set robots to noindex?",
        answer: "Use noindex for pages you don't want appearing in search results, like internal search result pages, thank-you/confirmation pages, staging environments, or duplicate content variants.",
      },
    ],
    relatedSlugs: ["open-graph-generator", "google-serp-preview", "canonical-tag-generator"],
  },
  {
    slug: "robots-txt-generator",
    category: "seo",
    title: "Robots.txt Generator",
    shortDescription: "Generate a robots.txt file with allow/disallow rules.",
    metaDescription: "Free online robots.txt generator to create a robots.txt file with user-agent, disallow, allow, sitemap and crawl-delay directives.",
    h1: "Robots.txt Generator",
    intro: "Generate a robots.txt file to control which parts of your site search engine crawlers can access.",
    icon: "🤖",
    status: "live",
    inputFields: [
      { key: "userAgent", label: "User-Agent", type: "text", defaultValue: "*" },
      { key: "disallowPaths", label: "Disallow Paths (one per line)", type: "textarea", placeholder: "/admin\n/private" },
      { key: "allowPaths", label: "Allow Paths (one per line, optional)", type: "textarea", placeholder: "/public" },
      { key: "sitemapUrl", label: "Sitemap URL (optional)", type: "text", placeholder: "https://example.com/sitemap.xml" },
      { key: "crawlDelay", label: "Crawl-Delay in Seconds (optional)", type: "text", placeholder: "e.g. 10" },
    ],
    resultFields: [{ key: "result", label: "robots.txt", wide: true }],
    calculate: (inputs) => {
      const result = generateRobotsTxt(
        String(inputs.userAgent ?? "*"),
        String(inputs.disallowPaths ?? ""),
        String(inputs.allowPaths ?? ""),
        String(inputs.sitemapUrl ?? ""),
        String(inputs.crawlDelay ?? "")
      );
      return { result };
    },
    explanation: [
      {
        heading: "What robots.txt controls",
        paragraphs: [
          "robots.txt is a plain text file placed at the root of your domain (e.g. example.com/robots.txt) that tells well-behaved search engine crawlers which parts of your site they may or may not access. It's a request, not an enforcement mechanism, malicious bots can ignore it entirely, so it shouldn't be relied on to keep sensitive content private.",
        ],
      },
      {
        heading: "Disallow vs noindex",
        paragraphs: [
          "Disallowing a path in robots.txt prevents crawling, but a disallowed URL can still occasionally appear in search results (without a snippet) if it's linked from elsewhere. To reliably keep a specific page out of search results, use a noindex meta tag on that page instead (see our Meta Tag Generator), robots.txt and noindex serve different purposes and are often used together.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do I put my robots.txt file?",
        answer: "It must be placed at the root of your domain, accessible at https://yourdomain.com/robots.txt, robots.txt files placed anywhere else are not recognized by crawlers.",
      },
      {
        question: "What does User-agent: * mean?",
        answer: "The asterisk (*) is a wildcard meaning the rules apply to all crawlers. You can add separate User-agent blocks with different rules for specific crawlers if needed.",
      },
    ],
    relatedSlugs: ["xml-sitemap-generator", "meta-tag-generator"],
  },
  {
    slug: "xml-sitemap-generator",
    category: "seo",
    title: "XML Sitemap Generator",
    shortDescription: "Generate a sitemap.xml from a list of URLs.",
    metaDescription: "Free online XML sitemap generator to create a sitemap.xml file from a list of URLs, with priority, change frequency and last modified dates.",
    h1: "XML Sitemap Generator",
    intro: "Generate a sitemap.xml file from a list of URLs you provide, with optional priority, change frequency and last modified date per URL.",
    icon: "🗺️",
    status: "live",
    inputFields: [
      {
        key: "urlList",
        label: "URLs (one per line, optionally: url, priority, changefreq, lastmod)",
        type: "textarea",
        placeholder: "https://example.com/\nhttps://example.com/about, 0.8, monthly, 2026-01-15",
      },
      { key: "defaultPriority", label: "Default Priority (0.0-1.0)", type: "text", defaultValue: "0.5" },
      {
        key: "defaultChangefreq",
        label: "Default Change Frequency",
        type: "select",
        options: [
          { label: "Always", value: "always" },
          { label: "Hourly", value: "hourly" },
          { label: "Daily", value: "daily" },
          { label: "Weekly", value: "weekly" },
          { label: "Monthly", value: "monthly" },
          { label: "Yearly", value: "yearly" },
          { label: "Never", value: "never" },
        ],
      },
    ],
    resultFields: [{ key: "result", label: "sitemap.xml", wide: true }],
    calculate: (inputs) => {
      const urlList = String(inputs.urlList ?? "");
      const defaultPriority = String(inputs.defaultPriority ?? "0.5");
      const defaultChangefreq = String(inputs.defaultChangefreq ?? "monthly");
      const result = generateSitemap(urlList, defaultPriority, defaultChangefreq);
      return { result };
    },
    explanation: [
      {
        heading: "How this sitemap generator works",
        paragraphs: [
          "This tool formats a list of URLs you already have into a valid sitemap.xml file. It does not crawl your live website to discover pages, browsers can't fetch and read arbitrary external websites due to cross-origin (CORS) restrictions, so building the URL list is up to you, exported from your CMS, a site crawler tool, or typed manually.",
        ],
      },
      {
        heading: "What priority and changefreq actually do",
        paragraphs: [
          "Priority (0.0-1.0) and changefreq are hints to search engines about relative importance and how often a page changes, Google has stated it largely ignores these values for ranking purposes, though some other search engines and crawlers may still use them. lastmod (last modified date) is the most consistently useful of the three, helping crawlers prioritize re-crawling recently updated pages.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can this tool crawl my website automatically?",
        answer: "No, browsers can't fetch and read arbitrary external websites due to cross-origin (CORS) restrictions, this tool formats a URL list you provide rather than discovering pages itself.",
      },
      {
        question: "Where do I submit my sitemap?",
        answer: "Upload the generated sitemap.xml to your site's root directory, then submit it through Google Search Console (and other search engines' equivalent webmaster tools), or reference it in your robots.txt file.",
      },
    ],
    relatedSlugs: ["robots-txt-generator", "canonical-tag-generator"],
  },
  {
    slug: "open-graph-generator",
    category: "seo",
    title: "Open Graph Generator",
    shortDescription: "Generate Open Graph meta tags for social sharing.",
    metaDescription: "Free online Open Graph generator to create og:title, og:description, og:image and other Open Graph meta tags for Facebook and LinkedIn sharing.",
    h1: "Open Graph Generator",
    intro: "Generate Open Graph meta tags that control how your page looks when shared on Facebook, LinkedIn and other platforms.",
    icon: "📘",
    status: "live",
    inputFields: [
      { key: "title", label: "og:title", type: "text", placeholder: "Your page title" },
      { key: "description", label: "og:description", type: "textarea", placeholder: "A short description of the page" },
      { key: "image", label: "og:image (URL)", type: "text", placeholder: "https://example.com/image.jpg" },
      { key: "url", label: "og:url", type: "text", placeholder: "https://example.com/page" },
      {
        key: "type",
        label: "og:type",
        type: "select",
        options: [
          { label: "Website", value: "website" },
          { label: "Article", value: "article" },
          { label: "Product", value: "product" },
          { label: "Profile", value: "profile" },
        ],
      },
      { key: "siteName", label: "og:site_name (optional)", type: "text", placeholder: "Your Site Name" },
    ],
    resultFields: [{ key: "result", label: "Open Graph Tags", wide: true }],
    calculate: (inputs) => {
      const result = generateOpenGraphTags({
        title: String(inputs.title ?? ""),
        description: String(inputs.description ?? ""),
        image: String(inputs.image ?? ""),
        url: String(inputs.url ?? ""),
        type: String(inputs.type ?? "website"),
        siteName: String(inputs.siteName ?? ""),
      });
      return { result };
    },
    explanation: [
      {
        heading: "What Open Graph tags do",
        paragraphs: [
          "Open Graph is a protocol (originally created by Facebook) that lets you control the title, description and image shown when your page is shared on Facebook, LinkedIn, and other platforms that support it. Without these tags, platforms fall back to guessing from your page's regular title and content, often with inconsistent results.",
        ],
      },
      {
        heading: "Recommended og:image size",
        paragraphs: [
          "A common recommendation is 1200×630 pixels for og:image, which displays well as a large preview card on most platforms without being cropped awkwardly. Use an absolute URL (starting with https://), not a relative path, since the platform fetching the image won't know your site's domain.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need Open Graph tags if I already have a meta description?",
        answer: "Yes, they serve different purposes. Meta description affects search engine result snippets, Open Graph tags specifically control how your page appears when shared as a social media link, platforms don't reliably fall back to your meta description for this.",
      },
      {
        question: "How do I test how my Open Graph tags will look?",
        answer: "Facebook's Sharing Debugger and LinkedIn's Post Inspector are the standard tools platforms provide for previewing and re-scraping your Open Graph tags after you update them.",
      },
    ],
    relatedSlugs: ["twitter-card-generator", "meta-tag-generator"],
  },
  {
    slug: "twitter-card-generator",
    category: "seo",
    title: "Twitter Card Generator",
    shortDescription: "Generate Twitter/X Card meta tags for rich link previews.",
    metaDescription: "Free online Twitter Card generator to create twitter:card meta tags for rich link previews when your page is shared on X/Twitter.",
    h1: "Twitter Card Generator",
    intro: "Generate Twitter/X Card meta tags so your page shows a rich preview with title, description and image when shared on X.",
    icon: "🐦",
    status: "live",
    inputFields: [
      {
        key: "cardType",
        label: "Card Type",
        type: "select",
        options: [
          { label: "Summary", value: "summary" },
          { label: "Summary with Large Image", value: "summary_large_image" },
          { label: "App", value: "app" },
          { label: "Player", value: "player" },
        ],
      },
      { key: "title", label: "twitter:title", type: "text", placeholder: "Your page title" },
      { key: "description", label: "twitter:description", type: "textarea", placeholder: "A short description of the page" },
      { key: "image", label: "twitter:image (URL)", type: "text", placeholder: "https://example.com/image.jpg" },
      { key: "site", label: "twitter:site (your site's @handle, optional)", type: "text", placeholder: "@yourbrand" },
      { key: "creator", label: "twitter:creator (author's @handle, optional)", type: "text", placeholder: "@author" },
    ],
    resultFields: [{ key: "result", label: "Twitter Card Tags", wide: true }],
    calculate: (inputs) => {
      const result = generateTwitterCardTags({
        cardType: String(inputs.cardType ?? "summary"),
        title: String(inputs.title ?? ""),
        description: String(inputs.description ?? ""),
        image: String(inputs.image ?? ""),
        site: String(inputs.site ?? ""),
        creator: String(inputs.creator ?? ""),
      });
      return { result };
    },
    explanation: [
      {
        heading: "Choosing a card type",
        paragraphs: [
          "'Summary' shows a small square image alongside your title and description, suited to most articles and pages. 'Summary with Large Image' shows a full-width image above the text, better for visually-driven content. 'App' and 'Player' are specialized types for promoting a mobile app or embedding audio/video, and require additional platform-specific fields beyond what this generator covers.",
        ],
      },
      {
        heading: "What happens without a twitter:card tag",
        paragraphs: [
          "If no Twitter Card tags are present, X often falls back to using your Open Graph tags where compatible (og:title, og:description, og:image), but adding explicit Twitter Card tags gives you more reliable, predictable control over exactly how the preview appears there.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need both Open Graph and Twitter Card tags?",
        answer: "It's common practice to include both, Open Graph covers Facebook, LinkedIn and other platforms, while explicit Twitter Card tags give X a dedicated, reliable preview rather than relying on its Open Graph fallback behavior.",
      },
      {
        question: "Does the @ symbol matter for twitter:site and twitter:creator?",
        answer: "The standard format includes the @ symbol (like @merondis). This tool automatically adds it if you leave it off.",
      },
    ],
    relatedSlugs: ["open-graph-generator", "meta-tag-generator"],
  },
  {
    slug: "schema-markup-generator",
    category: "seo",
    title: "Schema Markup Generator",
    shortDescription: "Generate JSON-LD structured data for Article, Product, LocalBusiness or FAQPage.",
    metaDescription: "Free online schema markup generator to create JSON-LD structured data for Article, Product, LocalBusiness and FAQPage schema.org types.",
    h1: "Schema Markup Generator",
    intro: "Generate JSON-LD structured data (schema.org markup) for an Article, Product, LocalBusiness, or FAQPage, ready to paste into your page's head.",
    icon: "🧬",
    status: "live",
    inputFields: [
      {
        key: "schemaType",
        label: "Schema Type",
        type: "select",
        options: [
          { label: "Article", value: "Article" },
          { label: "Product", value: "Product" },
          { label: "Local Business", value: "LocalBusiness" },
          { label: "FAQ Page", value: "FAQPage" },
        ],
      },
      { key: "name", label: "Name / Headline (Article, Product, LocalBusiness)", type: "text", placeholder: "e.g. How to Choose a Laptop" },
      { key: "description", label: "Description (Article, Product)", type: "textarea", placeholder: "A short description" },
      { key: "imageUrl", label: "Image URL (Article, Product, LocalBusiness)", type: "text", placeholder: "https://example.com/image.jpg" },
      { key: "url", label: "Page URL (Article, Product, LocalBusiness)", type: "text", placeholder: "https://example.com/page" },
      { key: "authorName", label: "Author Name (Article)", type: "text", placeholder: "e.g. Jane Doe" },
      { key: "datePublished", label: "Date Published (Article, e.g. 2026-07-28)", type: "text", placeholder: "2026-07-28" },
      { key: "price", label: "Price (Product)", type: "text", placeholder: "e.g. 29.99" },
      { key: "currency", label: "Currency Code (Product)", type: "text", defaultValue: "USD" },
      {
        key: "availability",
        label: "Availability (Product)",
        type: "select",
        options: [
          { label: "In Stock", value: "InStock" },
          { label: "Out of Stock", value: "OutOfStock" },
          { label: "Pre-Order", value: "PreOrder" },
        ],
      },
      { key: "brand", label: "Brand (Product)", type: "text", placeholder: "e.g. Acme" },
      { key: "phone", label: "Phone (LocalBusiness)", type: "text", placeholder: "+1-555-123-4567" },
      { key: "address", label: "Address (LocalBusiness)", type: "text", placeholder: "123 Main St, Anytown, ST 12345" },
      { key: "priceRange", label: "Price Range (LocalBusiness, e.g. $$)", type: "text", placeholder: "$$" },
      {
        key: "faqPairs",
        label: 'Questions & Answers (FAQPage, one per line: "Question|Answer")',
        type: "textarea",
        placeholder: "What is SEO?|Search engine optimization.\nHow long does it take?|Results typically build over months.",
      },
    ],
    resultFields: [{ key: "result", label: "JSON-LD Schema", wide: true }],
    calculate: (inputs) => {
      const result = generateSchemaMarkup({
        schemaType: String(inputs.schemaType ?? "Article") as SchemaType,
        name: String(inputs.name ?? ""),
        description: String(inputs.description ?? ""),
        imageUrl: String(inputs.imageUrl ?? ""),
        url: String(inputs.url ?? ""),
        authorName: String(inputs.authorName ?? ""),
        datePublished: String(inputs.datePublished ?? ""),
        price: String(inputs.price ?? ""),
        currency: String(inputs.currency ?? "USD"),
        availability: String(inputs.availability ?? "InStock"),
        brand: String(inputs.brand ?? ""),
        phone: String(inputs.phone ?? ""),
        address: String(inputs.address ?? ""),
        priceRange: String(inputs.priceRange ?? ""),
        faqPairs: String(inputs.faqPairs ?? ""),
      });
      return { result };
    },
    explanation: [
      {
        heading: "What structured data (schema markup) does",
        paragraphs: [
          "Structured data is machine-readable markup, in this case JSON-LD, a script tag embedded in your page, that describes your content in a standardized vocabulary (schema.org) search engines understand. It doesn't directly boost rankings, but it can make your page eligible for rich results in search (star ratings, FAQ dropdowns, price and availability), which can improve click-through rate.",
        ],
      },
      {
        heading: "Why this covers four types, not all of schema.org",
        paragraphs: [
          "schema.org defines hundreds of types with deeply nested optional properties. This generator focuses on four of the most commonly used types for typical websites, Article, Product, LocalBusiness and FAQPage, covering the fields that matter most for each rather than attempting exhaustive coverage of the entire vocabulary.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do I put the generated code?",
        answer: "Paste the entire <script type=\"application/ld+json\">...</script> block anywhere in your page's <head> or <body>, it's not visually rendered, so placement within the visible page doesn't matter.",
      },
      {
        question: "How do I check my structured data is valid?",
        answer: "Google's Rich Results Test and the Schema.org Validator are the standard tools for checking that your JSON-LD is both valid and eligible for rich results.",
      },
      {
        question: "Do I need all the fields for my schema type?",
        answer: "No, only fields relevant to your selected schema type are used, fields for other types are simply ignored. Within a type, only the fields you fill in are included in the output.",
      },
    ],
    relatedSlugs: ["json-formatter", "meta-tag-generator"],
  },
  {
    slug: "canonical-tag-generator",
    category: "seo",
    title: "Canonical Tag Generator",
    shortDescription: "Generate a canonical link tag and check for common issues.",
    metaDescription: "Free online canonical tag generator to create a <link rel=\"canonical\"> tag from a URL, with checks for http vs https and trailing slash issues.",
    h1: "Canonical Tag Generator",
    intro: "Generate a canonical link tag from a URL, and get flagged on common issues like using http instead of https or an inconsistent trailing slash.",
    icon: "🔗",
    status: "live",
    inputFields: [{ key: "url", label: "URL", type: "text", placeholder: "https://example.com/page" }],
    resultFields: [
      { key: "tag", label: "Canonical Tag", wide: true, highlight: true },
      { key: "warnings", label: "Checks", wide: true },
    ],
    calculate: (inputs) => {
      const url = String(inputs.url ?? "");
      const output = generateCanonicalTag(url);
      return { ...output };
    },
    explanation: [
      {
        heading: "What a canonical tag does",
        paragraphs: [
          "A canonical tag (<link rel=\"canonical\" href=\"...\">) tells search engines which URL is the 'master' version of a page when the same or similar content is reachable through multiple URLs, like with and without a trailing slash, with tracking parameters, or through http vs https. This consolidates ranking signals onto one URL instead of splitting them across duplicates.",
        ],
      },
      {
        heading: "Common canonicalization mistakes",
        paragraphs: [
          "Pointing the canonical to an http:// URL when your site actually serves https:// (or vice versa), including tracking query parameters in the canonical URL, and inconsistent trailing slashes are all common mistakes that undermine what a canonical tag is meant to fix. This tool flags each of these automatically.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should every page have a canonical tag?",
        answer: "It's widely considered good practice for every indexable page to have a self-referencing canonical tag (pointing to itself), even when there's no known duplicate, as a safeguard against unexpected duplicate URLs appearing later.",
      },
      {
        question: "Can a canonical tag point to a different domain?",
        answer: "Yes, cross-domain canonicals are valid and used when the same content is intentionally published on multiple domains, pointing all copies to a single preferred domain.",
      },
    ],
    relatedSlugs: ["hreflang-generator", "xml-sitemap-generator"],
  },
  {
    slug: "hreflang-generator",
    category: "seo",
    title: "Hreflang Generator",
    shortDescription: "Generate hreflang alternate link tags for multilingual pages.",
    metaDescription: "Free online hreflang generator to create hreflang alternate link tags for multilingual and multi-regional websites, including x-default.",
    h1: "Hreflang Generator",
    intro: "Generate hreflang alternate link tags from a list of language/URL pairs, telling search engines which language or region each page version targets.",
    icon: "🌐",
    status: "live",
    inputFields: [
      {
        key: "pairs",
        label: 'Language Code and URL Pairs (one per line: "langcode, URL")',
        type: "textarea",
        placeholder: "en, https://example.com/en\nfr, https://example.com/fr\nes, https://example.com/es",
      },
      { key: "includeXDefault", label: "Include x-default", type: "checkbox", defaultValue: "true" },
      { key: "xDefaultUrl", label: "x-default URL", type: "text", placeholder: "https://example.com/en" },
    ],
    resultFields: [{ key: "result", label: "Hreflang Tags", wide: true }],
    calculate: (inputs) => {
      const pairs = String(inputs.pairs ?? "");
      const includeXDefault = inputs.includeXDefault !== "false";
      const xDefaultUrl = String(inputs.xDefaultUrl ?? "");
      const result = generateHreflangTags(pairs, includeXDefault, xDefaultUrl);
      return { result };
    },
    explanation: [
      {
        heading: "How hreflang tags work",
        paragraphs: [
          "hreflang tags tell search engines that multiple URLs are language or region-specific versions of the same content, so the right version is shown to users in each locale, rather than the pages being treated as duplicate content or the wrong version ranking for a given region. The same complete set of tags (listing every language version) is meant to be placed on every page in the set, including a page listing itself.",
        ],
      },
      {
        heading: "What x-default is for",
        paragraphs: [
          "The x-default entry specifies which version to show visitors whose language or region doesn't match any of your other listed versions, commonly your default or a language-selector page. It's optional but recommended for sites targeting multiple locales.",
        ],
      },
    ],
    faqs: [
      {
        question: "What format should the language code be in?",
        answer: "Use ISO 639-1 language codes (like 'en', 'fr', 'es'), optionally combined with an ISO 3166-1 region code (like 'en-us' or 'en-gb') for region-specific targeting.",
      },
      {
        question: "Do I need to include a self-referencing tag?",
        answer: "Yes, each page's hreflang set should include a tag pointing to itself as well as to all other language versions, this tool's output is the same complete block meant to be placed on every page in the set.",
      },
    ],
    relatedSlugs: ["canonical-tag-generator", "xml-sitemap-generator"],
  },
  {
    slug: "keyword-density-checker",
    category: "seo",
    title: "Keyword Density Checker",
    shortDescription: "Find the most frequent keywords and phrases in your text.",
    metaDescription: "Free online keyword density checker to find the most frequent keywords and phrases in your text, with occurrence counts and density percentages.",
    h1: "Keyword Density Checker",
    intro: "Paste your content to find the most frequently repeated keywords and phrases, with occurrence counts and density percentages.",
    icon: "🔑",
    status: "live",
    inputFields: [
      { key: "text", label: "Your Content", type: "textarea", placeholder: "Paste your article or page content here..." },
      {
        key: "phraseLength",
        label: "Phrase Length",
        type: "select",
        options: [
          { label: "Single Words", value: "1" },
          { label: "Two-Word Phrases", value: "2" },
          { label: "Three-Word Phrases", value: "3" },
        ],
      },
    ],
    resultFields: [
      { key: "totalWords", label: "Total Words" },
      { key: "uniqueWords", label: "Unique Words" },
      { key: "topKeywords", label: "Top Repeated Phrases", wide: true },
    ],
    calculate: (inputs) => {
      const text = String(inputs.text ?? "");
      const phraseLength = String(inputs.phraseLength ?? "1") as PhraseLength;
      const output = calculateKeywordDensity(text, phraseLength);
      return { ...output };
    },
    explanation: [
      {
        heading: "How keyword density is calculated",
        paragraphs: [
          "This tool counts how often each word or phrase appears, then divides by the total number of phrases of that length to get a density percentage. Single-word mode automatically excludes common stopwords ('the', 'and', 'of', and similar), so results focus on meaningful terms rather than the most common words in any English text.",
        ],
      },
      {
        heading: "Is there an ideal keyword density?",
        paragraphs: [
          "No, the once-popular idea of a target keyword density (like '2%') is outdated advice, modern search engines evaluate content quality and topical relevance far more holistically than counting exact keyword repetitions. This tool is best used as a sanity check, to catch accidental over-repetition or confirm your target terms actually appear naturally, not as a percentage to optimize toward.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why don't I see common words like 'the' or 'and' in single-word mode?",
        answer: "Single-word mode filters out a basic list of common stopwords, since these would otherwise dominate the results in virtually any English text without providing useful insight.",
      },
      {
        question: "Should I be worried about 'keyword stuffing'?",
        answer: "Unnaturally repeating a phrase far more than normal writing would (keyword stuffing) can hurt rather than help, both from a search engine quality perspective and for readability. Use this tool to spot unintentional over-repetition.",
      },
    ],
    relatedSlugs: ["word-counter", "meta-tag-generator"],
  },
  {
    slug: "google-serp-preview",
    category: "seo",
    title: "Google SERP Preview",
    shortDescription: "Preview how your page will look in Google search results.",
    metaDescription: "Free online Google SERP preview tool to see how your page title and meta description will look in Google search results, with character limit checks.",
    h1: "Google SERP Preview",
    intro: "Preview how your page title, URL and meta description will look in Google search results, with live character limit checks.",
    icon: "🔎",
    status: "live",
    widgetType: "serpPreview",
    explanation: [
      {
        heading: "Why titles and descriptions get truncated",
        paragraphs: [
          "Google truncates search result titles and descriptions based on pixel width, not a strict character count, so the exact cutoff varies slightly depending on which characters you use (a title full of narrow letters like 'i' and 'l' fits more characters than one full of wide letters like 'w' and 'm'). This tool uses the commonly cited approximations of about 60 characters for titles and 155 characters for descriptions, the same simplified approach used by most SERP preview tools.",
        ],
      },
      {
        heading: "What this preview does and doesn't guarantee",
        paragraphs: [
          "This shows you a close approximation of typical desktop search result styling. Google sometimes rewrites titles or descriptions automatically if it judges your provided version to be a poor match for the search query, or generates a different snippet from your on-page content entirely, so treat this as a strong guide for what you're providing Google to work with, not a pixel-perfect guarantee of the final result.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does Google sometimes show a different title than what I set?",
        answer: "Google may rewrite your title tag in search results if it determines a different phrasing better matches the user's search query or is more descriptive, this is a known, fairly common behavior and not a sign that anything is broken on your page.",
      },
      {
        question: "Does a well-optimized snippet improve rankings?",
        answer: "Not directly, but a compelling, accurate title and description can improve your click-through rate, which is a reasonable goal in its own right even though it isn't a direct ranking factor.",
      },
    ],
    relatedSlugs: ["meta-tag-generator", "character-counter"],
  },
  {
    slug: "utm-url-builder",
    category: "seo",
    title: "UTM URL Builder",
    shortDescription: "Build a campaign tracking URL with UTM parameters.",
    metaDescription: "Free online UTM URL builder to add utm_source, utm_medium, utm_campaign and other tracking parameters to a URL for campaign analytics.",
    h1: "UTM URL Builder",
    intro: "Build a campaign tracking URL by adding UTM parameters to a base URL, ready to use in analytics tools like Google Analytics.",
    icon: "📌",
    status: "live",
    inputFields: [
      { key: "baseUrl", label: "Website URL", type: "text", placeholder: "https://example.com/landing-page" },
      { key: "source", label: "Campaign Source (utm_source)", type: "text", placeholder: "e.g. newsletter" },
      { key: "medium", label: "Campaign Medium (utm_medium)", type: "text", placeholder: "e.g. email" },
      { key: "campaign", label: "Campaign Name (utm_campaign)", type: "text", placeholder: "e.g. summer_sale" },
      { key: "term", label: "Campaign Term (utm_term, optional)", type: "text", placeholder: "e.g. running+shoes" },
      { key: "content", label: "Campaign Content (utm_content, optional)", type: "text", placeholder: "e.g. header_link" },
    ],
    resultFields: [{ key: "result", label: "Campaign URL", wide: true, highlight: true }],
    calculate: (inputs) => {
      const result = buildUtmUrl({
        baseUrl: String(inputs.baseUrl ?? ""),
        source: String(inputs.source ?? ""),
        medium: String(inputs.medium ?? ""),
        campaign: String(inputs.campaign ?? ""),
        term: String(inputs.term ?? ""),
        content: String(inputs.content ?? ""),
      });
      return { result };
    },
    explanation: [
      {
        heading: "What UTM parameters do",
        paragraphs: [
          "UTM parameters are tags appended to a URL's query string that analytics tools like Google Analytics use to attribute traffic to a specific source, medium and campaign, letting you see exactly which newsletter, social post, or ad drove a visit rather than just seeing generic 'referral' traffic.",
        ],
      },
      {
        heading: "Source, medium and campaign explained",
        paragraphs: [
          "utm_source identifies where the traffic came from (e.g. 'newsletter', 'facebook'). utm_medium identifies the marketing medium (e.g. 'email', 'cpc', 'social'). utm_campaign identifies the specific campaign or promotion (e.g. 'summer_sale'). utm_term and utm_content are optional, used for paid keyword tracking and A/B testing different links within the same campaign, respectively.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will UTM parameters affect my SEO?",
        answer: "No, but it's good practice to set a canonical tag on the landing page pointing to the clean URL without UTM parameters, so search engines consolidate ranking signals onto one version rather than treating tagged and untagged URLs as separate pages.",
      },
      {
        question: "What if my base URL already has query parameters?",
        answer: "This tool preserves any existing query parameters on your base URL and adds the UTM parameters alongside them, rather than overwriting them.",
      },
    ],
    relatedSlugs: ["url-redirect-generator", "meta-tag-generator"],
  },
  {
    slug: "url-redirect-generator",
    category: "seo",
    title: "URL Redirect Generator",
    shortDescription: "Generate .htaccess, Nginx, HTML and JavaScript redirect code.",
    metaDescription: "Free online URL redirect generator to create Apache .htaccess, Nginx, HTML meta-refresh and JavaScript redirect code for an old-to-new URL mapping.",
    h1: "URL Redirect Generator",
    intro: "Generate redirect code in four common formats (Apache .htaccess, Nginx, HTML meta-refresh, JavaScript) for an old URL to new URL mapping.",
    icon: "↪️",
    status: "live",
    inputFields: [
      { key: "oldPath", label: "Old Path or URL", type: "text", placeholder: "/old-page" },
      { key: "newUrl", label: "New Destination URL", type: "text", placeholder: "https://example.com/new-page" },
      {
        key: "statusCode",
        label: "Redirect Type",
        type: "select",
        options: [
          { label: "301 (Permanent)", value: "301" },
          { label: "302 (Temporary)", value: "302" },
        ],
      },
    ],
    resultFields: [
      { key: "apacheHtaccess", label: "Apache (.htaccess)", wide: true },
      { key: "nginxConfig", label: "Nginx", wide: true },
      { key: "htmlMetaRefresh", label: "HTML Meta Refresh", wide: true },
      { key: "javascriptRedirect", label: "JavaScript", wide: true },
    ],
    calculate: (inputs) => {
      const oldPath = String(inputs.oldPath ?? "");
      const newUrl = String(inputs.newUrl ?? "");
      const statusCode = String(inputs.statusCode ?? "301") as "301" | "302";
      const output = generateRedirectSnippets(oldPath, newUrl, statusCode);
      return { ...output };
    },
    explanation: [
      {
        heading: "This generates redirect code, it doesn't test live redirects",
        paragraphs: [
          "This tool produces ready-to-use redirect code for common server and page-level setups. It does not check or follow an actual live redirect on the internet, browsers can't read cross-origin response headers or redirect chains without a server-side proxy, so verifying a redirect is actually working requires checking it directly (e.g. via your browser's network tab, curl, or your hosting provider's tools) after you deploy the code.",
        ],
      },
      {
        heading: "Choosing 301 vs 302",
        paragraphs: [
          "Use a 301 (permanent) redirect when a page has moved for good, this passes SEO ranking signals to the new URL and tells search engines to update their index. Use a 302 (temporary) redirect when the move is short-term, like a temporary maintenance page, since it tells search engines to keep the original URL indexed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which redirect method should I use?",
        answer: "Server-level redirects (.htaccess for Apache, or the Nginx config) are strongly preferred over HTML meta-refresh or JavaScript redirects, they happen faster, are more reliably followed by search engines, and don't depend on the page's HTML/JS loading first.",
      },
      {
        question: "When would I use a JavaScript or meta-refresh redirect instead?",
        answer: "Mainly when you don't have access to server configuration, like on some static hosting or page-builder platforms. They work, but are slower and less SEO-friendly than a proper server-level redirect.",
      },
    ],
    relatedSlugs: ["utm-url-builder", "canonical-tag-generator"],
  },
  {
    slug: "image-resizer",
    category: "image",
    title: "Image Resizer",
    shortDescription: "Resize an image to exact pixel dimensions.",
    metaDescription: "Free online image resizer to resize a JPG, PNG or WebP image to exact pixel dimensions, entirely in your browser.",
    h1: "Image Resizer",
    intro: "Resize an image to exact width and height in pixels, with an optional locked aspect ratio, processed entirely in your browser.",
    icon: "📐",
    status: "live",
    widgetType: "imageResize",
    explanation: [
      {
        heading: "How this resizer works",
        paragraphs: [
          "This tool draws your uploaded image onto an HTML canvas at your target width and height, then re-exports it, using the canvas rendering built into every modern browser. Your image is never uploaded to a server, everything happens locally on your device.",
        ],
      },
      {
        heading: "Why lock the aspect ratio",
        paragraphs: [
          "Resizing without keeping the original width-to-height ratio stretches or squashes the image. With 'lock aspect ratio' enabled, changing the width automatically recalculates a proportional height (and vice versa), so the image keeps its natural proportions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does resizing reduce file size too?",
        answer: "Usually yes, smaller pixel dimensions generally produce a smaller file, though the exact reduction depends on the image format and content. Use our Image Compressor if file size, not dimensions, is your main goal.",
      },
      {
        question: "Is my image uploaded anywhere?",
        answer: "No, resizing happens entirely in your browser using canvas rendering, your image is never sent to or stored on our servers.",
      },
    ],
    relatedSlugs: ["image-compressor", "image-metadata-remover"],
  },
  {
    slug: "image-compressor",
    category: "image",
    title: "Image Compressor",
    shortDescription: "Compress an image to reduce its file size.",
    metaDescription: "Free online image compressor to reduce a JPG or PNG image's file size with an adjustable quality slider, entirely in your browser.",
    h1: "Image Compressor",
    intro: "Compress an image to reduce its file size, with an adjustable quality slider, processed entirely in your browser.",
    icon: "🗜️",
    status: "live",
    widgetType: "imageCompress",
    explanation: [
      {
        heading: "How this compressor works",
        paragraphs: [
          "This tool re-encodes your image as JPEG at an adjustable quality level using canvas rendering built into every modern browser, lower quality produces a smaller file at the cost of some visual detail. If your source image has transparency, transparent areas are filled with white, since JPEG doesn't support transparency.",
        ],
      },
      {
        heading: "Why the output is always JPEG",
        paragraphs: [
          "Browsers only expose an adjustable lossy quality setting for JPEG (and WebP) when re-encoding via canvas, PNG re-encoding is always lossless with no size-quality tradeoff. Standardizing on JPEG output gives predictable, meaningful compression regardless of your source format. If you specifically need a compressed WebP file, use our JPG to WebP or Image Resizer tools with a lower quality/resolution instead.",
        ],
      },
    ],
    faqs: [
      {
        question: "What quality setting should I use?",
        answer: "80-90% typically gives a good balance of visibly minimal quality loss with a solid file size reduction. Go lower (50-70%) for a much smaller file where some quality loss is acceptable, like thumbnails.",
      },
      {
        question: "Will this work well on PNG images with transparency?",
        answer: "The output will be a JPEG with transparent areas filled white, since JPEG has no transparency channel. If you need to keep transparency, this tool isn't the right fit, consider resizing instead.",
      },
    ],
    relatedSlugs: ["image-resizer", "jpg-to-webp"],
  },
  {
    slug: "webp-to-jpg",
    category: "image",
    title: "WebP to JPG Converter",
    shortDescription: "Convert a WebP image to JPG.",
    metaDescription: "Free online WebP to JPG converter to convert a WebP image to JPG format, entirely in your browser.",
    h1: "WebP to JPG Converter",
    intro: "Convert a WebP image to JPG format, processed entirely in your browser using native image decoding, no upload required.",
    icon: "🔄",
    status: "live",
    widgetType: "imageToJpg",
    explanation: [
      {
        heading: "How this converter works",
        paragraphs: [
          "Modern browsers can natively decode WebP images. This tool loads your WebP file, draws it onto a canvas, and re-exports it as a JPEG, all using built-in browser capabilities with no upload or third-party service involved. Transparent areas in the source WebP are filled with white, since JPEG doesn't support transparency.",
        ],
      },
      {
        heading: "Why convert WebP to JPG",
        paragraphs: [
          "WebP offers better compression than JPEG for the same visual quality, but JPG remains the most universally compatible format, useful when submitting to a platform, printing service, or older software that doesn't accept WebP files.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will image quality be affected?",
        answer: "There's a small quality/compression tradeoff inherent in converting to JPEG, but at the default quality setting the difference is minimal for most photos.",
      },
      {
        question: "Is this tool free to use?",
        answer: "Yes, completely free, with no sign-up, watermarks, or file limits beyond what your browser can handle.",
      },
    ],
    relatedSlugs: ["jpg-to-webp", "image-compressor"],
  },
  {
    slug: "jpg-to-webp",
    category: "image",
    title: "JPG to WebP Converter",
    shortDescription: "Convert a JPG image to WebP.",
    metaDescription: "Free online JPG to WebP converter to convert a JPG or PNG image to WebP format, entirely in your browser.",
    h1: "JPG to WebP Converter",
    intro: "Convert a JPG or PNG image to WebP format, with an adjustable quality slider, processed entirely in your browser.",
    icon: "🔃",
    status: "live",
    widgetType: "imageToWebp",
    explanation: [
      {
        heading: "How this converter works",
        paragraphs: [
          "This tool draws your uploaded image onto a canvas and re-exports it as WebP using the canvas encoding built into every modern browser, no upload or third-party service involved.",
        ],
      },
      {
        heading: "Why convert to WebP",
        paragraphs: [
          "WebP typically produces smaller file sizes than JPEG or PNG at a comparable visual quality, which helps pages load faster. It's supported by all modern browsers, making it a solid choice for web images where broad legacy compatibility isn't a concern.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does WebP support transparency like PNG?",
        answer: "Yes, WebP supports transparency, and if your source image has an alpha channel, it's preserved in the WebP output (unlike converting to JPG, which always fills transparency with white).",
      },
      {
        question: "What quality setting should I use?",
        answer: "80-90% is a reasonable starting point for most images, balancing file size against visual quality. Adjust the slider and compare the resulting file size for your specific image.",
      },
    ],
    relatedSlugs: ["webp-to-jpg", "image-compressor"],
  },
  {
    slug: "svg-optimizer",
    category: "image",
    title: "SVG Optimizer",
    shortDescription: "Clean up and shrink SVG markup.",
    metaDescription: "Free online SVG optimizer to strip comments, editor metadata and excess coordinate precision from SVG markup, reducing file size.",
    h1: "SVG Optimizer",
    intro: "Paste your SVG markup to strip comments, design-tool metadata and unnecessary whitespace, and round excess coordinate precision.",
    icon: "✨",
    status: "live",
    inputFields: [
      { key: "svg", label: "Your SVG Markup", type: "textarea", placeholder: "<svg xmlns=\"http://www.w3.org/2000/svg\">...</svg>" },
      { key: "precision", label: "Decimal Precision for Coordinates", type: "number", step: 1, defaultValue: 2 },
    ],
    resultFields: [
      { key: "result", label: "Optimized SVG", wide: true },
      { key: "originalSizeBytes", label: "Original Size (bytes)" },
      { key: "optimizedSizeBytes", label: "Optimized Size (bytes)" },
      { key: "reductionPercent", label: "Size Reduction (%)", highlight: true },
    ],
    calculate: (inputs) => {
      const svg = String(inputs.svg ?? "");
      const precision = Number(inputs.precision ?? 2);
      const output = optimizeSvg(svg, precision);
      return { ...output };
    },
    explanation: [
      {
        heading: "How this optimizer works",
        paragraphs: [
          "This tool strips XML comments, removes design-tool editor metadata (Illustrator, Inkscape and Sketch-specific namespaced attributes and elements, which have no visual effect), collapses unnecessary whitespace, and rounds excess decimal precision inside coordinate-bearing attributes (d, viewBox, points, transform) to your chosen precision. It's a text-based, heuristic cleanup, not a full AST-based optimizer like SVGO, but it safely handles the cleanups that account for most of the reducible size in hand-exported SVGs.",
        ],
      },
      {
        heading: "Why excess coordinate precision happens",
        paragraphs: [
          "Design tools frequently export path coordinates with far more decimal places than are visually meaningful (like 12.340000000001 instead of 12.34), a side effect of internal floating-point math. Rounding this precision, and only within known coordinate attributes so nothing else in the file is affected, shrinks path data without any visible change to how the SVG renders.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will this change how my SVG looks?",
        answer: "No, every change made is either purely cosmetic (comments, metadata, whitespace) or a coordinate rounding small enough to be visually imperceptible at any reasonable precision setting (2 decimal places is a safe default).",
      },
      {
        question: "Does this rewrite or simplify path data itself?",
        answer: "No, this tool doesn't merge, simplify, or restructure path commands, a task that requires real path-data parsing. It focuses on safe removals and precision rounding, the highest-value, lowest-risk cleanups for typical exported SVGs.",
      },
    ],
    relatedSlugs: ["image-metadata-remover", "html-minifier"],
  },
  {
    slug: "image-metadata-remover",
    category: "image",
    title: "Image Metadata Remover",
    shortDescription: "Strip EXIF, GPS and other metadata from an image.",
    metaDescription: "Free online image metadata remover to strip EXIF, GPS location and other hidden metadata from a photo, entirely in your browser.",
    h1: "Image Metadata Remover",
    intro: "Remove EXIF, GPS location and other hidden metadata from a photo, keeping the same format and dimensions, processed entirely in your browser.",
    icon: "🧹",
    status: "live",
    widgetType: "imageStripMetadata",
    explanation: [
      {
        heading: "How this tool removes metadata",
        paragraphs: [
          "This tool draws your image onto a canvas and re-exports it, canvas rendering only ever carries the visible pixel data, not the original file's metadata segments, so re-encoding this way strips EXIF camera data, GPS location, timestamps, and any other embedded metadata as a natural side effect, no metadata-specific logic needed, which makes this a thorough and reliable removal method.",
        ],
      },
      {
        heading: "Why you might want to remove metadata",
        paragraphs: [
          "Photos taken on phones and cameras often embed GPS coordinates, device information, and timestamps in EXIF metadata. Stripping this before sharing a photo publicly (on a website, marketplace listing, or social media) prevents that hidden information, including your exact location, from being unintentionally exposed to anyone who inspects the file.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will the image quality change?",
        answer: "The output uses a high quality setting for formats that need re-encoding (like JPEG), so any quality difference is minimal. PNG and WebP inputs are re-encoded losslessly where the browser supports it.",
      },
      {
        question: "How do I check whether metadata was actually removed?",
        answer: "Run the output file through our EXIF Viewer, it should show no EXIF data found.",
      },
    ],
    relatedSlugs: ["exif-viewer", "image-compressor"],
  },
  {
    slug: "exif-viewer",
    category: "image",
    title: "EXIF Viewer",
    shortDescription: "View EXIF metadata embedded in a JPEG photo.",
    metaDescription: "Free online EXIF viewer to see camera, exposure, date and other metadata embedded in a JPEG photo, entirely in your browser.",
    h1: "EXIF Viewer",
    intro: "View the EXIF metadata embedded in a JPEG photo, camera make and model, exposure settings, date taken, and more.",
    icon: "🔍",
    status: "live",
    widgetType: "exifViewer",
    explanation: [
      {
        heading: "How this viewer works",
        paragraphs: [
          "This tool reads your JPEG file's raw bytes directly in your browser and parses its EXIF metadata segment following the TIFF/EXIF specification's tag structure, no upload, and no third-party library involved. It currently supports JPEG files, the most common format for camera and phone photos to carry EXIF data.",
        ],
      },
      {
        heading: "What EXIF data typically includes",
        paragraphs: [
          "EXIF metadata can include the camera make and model, exposure time, f-number (aperture), ISO speed, focal length, orientation, and the date and time the photo was taken. Some photos also include GPS location data, though this tool focuses on the camera and exposure details most people are looking for.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does it say no EXIF data was found?",
        answer: "Many images have their EXIF metadata stripped already, either by the platform they were downloaded from (social media and messaging apps commonly strip it), a previous edit, or because they were never a camera photo to begin with (like a screenshot or a graphic).",
      },
      {
        question: "Does this work for PNG or WebP files?",
        answer: "No, this tool currently supports JPEG files only, since JPEG's EXIF-in-APP1-segment structure is what this parser reads. JPEG is by far the most common format for photos carrying EXIF data from cameras and phones.",
      },
    ],
    relatedSlugs: ["image-metadata-remover", "image-resizer"],
  },
  {
    slug: "profit-margin-calculator",
    category: "finance",
    title: "Profit Margin Calculator",
    shortDescription: "Calculate net profit and profit margin from revenue and expenses.",
    metaDescription: "Free online profit margin calculator to find your net profit and net profit margin percentage from total revenue and total expenses.",
    h1: "Profit Margin Calculator",
    intro: "Calculate your net profit and net profit margin from total revenue and total expenses.",
    icon: "📈",
    status: "live",
    inputFields: [
      { key: "revenue", label: "Total Revenue", type: "number", step: 0.01, placeholder: "e.g. 100000" },
      { key: "expenses", label: "Total Expenses", type: "number", step: 0.01, placeholder: "e.g. 80000" },
    ],
    resultFields: [
      { key: "netProfit", label: "Net Profit", highlight: true },
      { key: "profitMarginPercent", label: "Net Profit Margin", unit: "%", highlight: true },
    ],
    calculate: (inputs) => {
      const revenue = Number(inputs.revenue);
      const expenses = Number(inputs.expenses);
      const output = calculateProfitMargin(revenue, expenses);
      return { ...output };
    },
    explanation: [
      {
        heading: "How net profit margin is calculated",
        paragraphs: [
          "Net profit is Total Revenue minus Total Expenses (including cost of goods sold, operating costs, interest, and taxes). Net profit margin expresses that profit as a percentage of revenue: Net Profit ÷ Revenue × 100.",
          "For example, 100,000 in revenue with 80,000 in total expenses leaves 20,000 in net profit, a 20% net profit margin.",
        ],
      },
      {
        heading: "Net margin vs gross margin",
        paragraphs: [
          "Net profit margin accounts for every expense the business has, while gross margin only subtracts the direct cost of goods sold. Net margin is always lower than (or equal to) gross margin, since it reflects the business's full cost structure.",
        ],
      },
    ],
    faqs: [
      {
        question: "What counts as a 'total expense' here?",
        answer: "Include everything: cost of goods sold, operating expenses, interest, and taxes. This calculator produces net profit margin, the bottom-line figure, not gross margin.",
      },
      {
        question: "What's a good profit margin?",
        answer: "It varies widely by industry. Retail and grocery often run on thin margins of a few percent, while software and services businesses often see margins of 20% or more. Compare against your specific industry rather than a universal benchmark.",
      },
    ],
    relatedSlugs: ["gross-margin-calculator", "roi-calculator", "breakeven-calculator"],
  },
  {
    slug: "gross-margin-calculator",
    category: "finance",
    title: "Gross Margin Calculator",
    shortDescription: "Calculate gross profit and gross margin from revenue and cost of goods sold.",
    metaDescription: "Free online gross margin calculator to find your gross profit and gross margin percentage from revenue and cost of goods sold (COGS).",
    h1: "Gross Margin Calculator",
    intro: "Calculate your gross profit and gross margin percentage from total revenue and cost of goods sold.",
    icon: "🧮",
    status: "live",
    inputFields: [
      { key: "revenue", label: "Total Revenue", type: "number", step: 0.01, placeholder: "e.g. 100000" },
      { key: "cogs", label: "Cost of Goods Sold (COGS)", type: "number", step: 0.01, placeholder: "e.g. 60000" },
    ],
    resultFields: [
      { key: "grossProfit", label: "Gross Profit", highlight: true },
      { key: "grossMarginPercent", label: "Gross Margin", unit: "%", highlight: true },
    ],
    calculate: (inputs) => {
      const revenue = Number(inputs.revenue);
      const cogs = Number(inputs.cogs);
      const output = calculateGrossMargin(revenue, cogs);
      return { ...output };
    },
    explanation: [
      {
        heading: "How gross margin is calculated",
        paragraphs: [
          "Gross profit is Revenue minus Cost of Goods Sold (COGS), meaning the direct costs of producing what you sold: materials, direct labor, and manufacturing overhead. Gross margin expresses that as a percentage: Gross Profit ÷ Revenue × 100.",
          "For example, 100,000 in revenue with 60,000 in COGS leaves 40,000 in gross profit, a 40% gross margin.",
        ],
      },
      {
        heading: "What's excluded from COGS",
        paragraphs: [
          "COGS covers only the direct cost of producing goods or delivering services sold. It excludes indirect costs like marketing, rent, administrative salaries, and interest, those are subtracted later to arrive at net profit margin.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from net profit margin?",
        answer: "Gross margin only subtracts the direct cost of goods sold, while net profit margin subtracts every business expense, including operating costs, interest, and taxes. Gross margin is always higher than or equal to net margin.",
      },
      {
        question: "What's a healthy gross margin?",
        answer: "It depends heavily on industry. Software businesses often see gross margins above 70%, while retailers and manufacturers often run between 20% and 50%. Compare against similar businesses in your sector.",
      },
    ],
    relatedSlugs: ["profit-margin-calculator", "markup-calculator", "breakeven-calculator"],
  },
  {
    slug: "ebitda-calculator",
    category: "finance",
    title: "EBITDA Calculator",
    shortDescription: "Calculate EBITDA from net income, interest, taxes, depreciation and amortization.",
    metaDescription: "Free online EBITDA calculator to find earnings before interest, taxes, depreciation and amortization, plus EBITDA margin.",
    h1: "EBITDA Calculator",
    intro: "Calculate EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization) from your income statement figures.",
    icon: "💼",
    status: "live",
    inputFields: [
      { key: "netIncome", label: "Net Income", type: "number", step: 0.01, placeholder: "e.g. 50000" },
      { key: "interestExpense", label: "Interest Expense", type: "number", step: 0.01, placeholder: "e.g. 5000" },
      { key: "taxExpense", label: "Tax Expense", type: "number", step: 0.01, placeholder: "e.g. 10000" },
      { key: "depreciation", label: "Depreciation", type: "number", step: 0.01, placeholder: "e.g. 8000" },
      { key: "amortization", label: "Amortization", type: "number", step: 0.01, placeholder: "e.g. 2000" },
      { key: "revenue", label: "Total Revenue (optional, for margin)", type: "number", step: 0.01, placeholder: "e.g. 200000" },
    ],
    resultFields: [
      { key: "ebitda", label: "EBITDA", highlight: true },
      { key: "ebitdaMarginPercent", label: "EBITDA Margin", unit: "%" },
    ],
    calculate: (inputs) => {
      const netIncome = Number(inputs.netIncome);
      const interestExpense = Number(inputs.interestExpense);
      const taxExpense = Number(inputs.taxExpense);
      const depreciation = Number(inputs.depreciation);
      const amortization = Number(inputs.amortization);
      const revenue = Number(inputs.revenue) || 0;
      const output = calculateEbitda(netIncome, interestExpense, taxExpense, depreciation, amortization, revenue);
      return { ...output };
    },
    explanation: [
      {
        heading: "How EBITDA is calculated",
        paragraphs: [
          "EBITDA = Net Income + Interest + Taxes + Depreciation + Amortization. Adding these non-operating and non-cash items back to net income gives a picture of a company's core operating profitability, independent of financing structure, tax jurisdiction, and capital investment decisions.",
          "For example, 50,000 in net income plus 5,000 interest, 10,000 taxes, 8,000 depreciation, and 2,000 amortization gives an EBITDA of 75,000.",
        ],
      },
      {
        heading: "Why EBITDA is used",
        paragraphs: [
          "EBITDA is commonly used to compare profitability across companies with different debt levels, tax situations, or asset bases, and is a common input into valuation multiples (like the earnings-multiple method used for small business valuation).",
        ],
      },
    ],
    faqs: [
      {
        question: "Is EBITDA the same as cash flow?",
        answer: "No. EBITDA excludes some real cash costs, like changes in working capital and capital expenditures, so it's a proxy for operating profitability, not a direct measure of cash generated.",
      },
      {
        question: "Do I need to enter revenue?",
        answer: "Revenue is optional and only used to calculate EBITDA margin (EBITDA as a percentage of revenue). Leave it blank if you only need the EBITDA figure itself.",
      },
    ],
    relatedSlugs: ["business-valuation-calculator", "profit-margin-calculator"],
  },
  {
    slug: "inventory-turnover-calculator",
    category: "finance",
    title: "Inventory Turnover Calculator",
    shortDescription: "Calculate how many times inventory is sold and replaced over a period.",
    metaDescription: "Free online inventory turnover calculator to find your inventory turnover ratio from cost of goods sold and average inventory.",
    h1: "Inventory Turnover Calculator",
    intro: "Calculate your inventory turnover ratio, how many times you sell and replace your inventory over a period, from cost of goods sold and inventory levels.",
    icon: "🔄",
    status: "live",
    inputFields: [
      { key: "cogs", label: "Cost of Goods Sold (annual)", type: "number", step: 0.01, placeholder: "e.g. 500000" },
      { key: "beginningInventory", label: "Beginning Inventory", type: "number", step: 0.01, placeholder: "e.g. 40000" },
      { key: "endingInventory", label: "Ending Inventory", type: "number", step: 0.01, placeholder: "e.g. 60000" },
    ],
    resultFields: [
      { key: "turnoverRatio", label: "Inventory Turnover Ratio", highlight: true },
      { key: "averageInventory", label: "Average Inventory" },
      { key: "daysToSellInventory", label: "Days to Sell Inventory", unit: "days" },
    ],
    calculate: (inputs) => {
      const cogs = Number(inputs.cogs);
      const beginningInventory = Number(inputs.beginningInventory);
      const endingInventory = Number(inputs.endingInventory);
      const output = calculateInventoryTurnover(cogs, beginningInventory, endingInventory);
      return { ...output };
    },
    explanation: [
      {
        heading: "How inventory turnover is calculated",
        paragraphs: [
          "Inventory Turnover Ratio = Cost of Goods Sold ÷ Average Inventory, where Average Inventory is (Beginning Inventory + Ending Inventory) ÷ 2. It measures how many times you sold and replaced your entire inventory over the period.",
          "For example, 500,000 in COGS with an average inventory of 50,000 gives a turnover ratio of 10, meaning inventory was fully sold and replaced 10 times over the period.",
        ],
      },
      {
        heading: "Higher vs lower turnover",
        paragraphs: [
          "A higher turnover ratio generally indicates strong sales or efficient inventory management, while a low ratio can signal overstocking, weak sales, or obsolete inventory. What counts as 'good' varies significantly by industry, grocery retailers turn inventory far faster than furniture retailers, for example.",
        ],
      },
    ],
    faqs: [
      {
        question: "What period should I use for COGS?",
        answer: "Use COGS for the same period as your beginning and ending inventory figures, typically a full year for an annual turnover ratio, or a quarter if you're tracking more frequently.",
      },
      {
        question: "How does this relate to days to sell inventory?",
        answer: "Days to sell inventory is 365 divided by the turnover ratio. A turnover ratio of 10 means inventory sits for roughly 36.5 days on average before being sold.",
      },
    ],
    relatedSlugs: ["inventory-days-calculator", "working-capital-calculator"],
  },
  {
    slug: "inventory-days-calculator",
    category: "finance",
    title: "Inventory Days Calculator",
    shortDescription: "Calculate days inventory outstanding (DIO), how long inventory sits before it sells.",
    metaDescription: "Free online inventory days calculator to find days inventory outstanding (DIO), the average number of days inventory sits before being sold.",
    h1: "Inventory Days Calculator",
    intro: "Calculate Days Inventory Outstanding (DIO), the average number of days your inventory sits in stock before it's sold.",
    icon: "📆",
    status: "live",
    inputFields: [
      { key: "cogs", label: "Cost of Goods Sold (annual)", type: "number", step: 0.01, placeholder: "e.g. 500000" },
      { key: "beginningInventory", label: "Beginning Inventory", type: "number", step: 0.01, placeholder: "e.g. 40000" },
      { key: "endingInventory", label: "Ending Inventory", type: "number", step: 0.01, placeholder: "e.g. 60000" },
    ],
    resultFields: [
      { key: "daysInventoryOutstanding", label: "Days Inventory Outstanding", unit: "days", highlight: true },
      { key: "averageInventory", label: "Average Inventory" },
      { key: "turnoverRatio", label: "Inventory Turnover Ratio" },
    ],
    calculate: (inputs) => {
      const cogs = Number(inputs.cogs);
      const beginningInventory = Number(inputs.beginningInventory);
      const endingInventory = Number(inputs.endingInventory);
      const output = calculateInventoryDays(cogs, beginningInventory, endingInventory);
      return { ...output };
    },
    explanation: [
      {
        heading: "How days inventory outstanding is calculated",
        paragraphs: [
          "Days Inventory Outstanding = (Average Inventory ÷ Cost of Goods Sold) × 365, where Average Inventory is (Beginning Inventory + Ending Inventory) ÷ 2. It tells you, on average, how many days of stock you're carrying before it sells.",
          "For example, an average inventory of 50,000 against 500,000 in annual COGS gives a DIO of 36.5 days.",
        ],
      },
      {
        heading: "Why DIO matters",
        paragraphs: [
          "Fewer days inventory outstanding generally means cash is tied up in stock for less time, freeing it up for other uses. A rising DIO over time can be an early signal of slowing sales or overstocking, worth investigating alongside turnover ratio and working capital.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this the same as inventory turnover?",
        answer: "They're reciprocals of each other, scaled by 365. Turnover tells you how many times inventory cycles per year, while DIO tells you how many days that cycle takes. Both come from the same underlying figures.",
      },
      {
        question: "What's a good DIO?",
        answer: "It depends heavily on the industry. Perishable-goods retailers often aim for single-digit DIO, while manufacturers of durable goods commonly run 60-90 days or more. Compare against similar businesses rather than a fixed target.",
      },
    ],
    relatedSlugs: ["inventory-turnover-calculator", "working-capital-calculator"],
  },
  {
    slug: "working-capital-calculator",
    category: "finance",
    title: "Working Capital Calculator",
    shortDescription: "Calculate working capital and current ratio from current assets and liabilities.",
    metaDescription: "Free online working capital calculator to find your working capital and current ratio from current assets and current liabilities.",
    h1: "Working Capital Calculator",
    intro: "Calculate your working capital and current ratio, key measures of short-term financial health, from current assets and current liabilities.",
    icon: "🏦",
    status: "live",
    inputFields: [
      { key: "currentAssets", label: "Current Assets", type: "number", step: 0.01, placeholder: "e.g. 150000" },
      { key: "currentLiabilities", label: "Current Liabilities", type: "number", step: 0.01, placeholder: "e.g. 100000" },
    ],
    resultFields: [
      { key: "workingCapital", label: "Working Capital", highlight: true },
      { key: "currentRatio", label: "Current Ratio", highlight: true },
    ],
    calculate: (inputs) => {
      const currentAssets = Number(inputs.currentAssets);
      const currentLiabilities = Number(inputs.currentLiabilities);
      const output = calculateWorkingCapital(currentAssets, currentLiabilities);
      return { ...output };
    },
    explanation: [
      {
        heading: "How working capital is calculated",
        paragraphs: [
          "Working Capital = Current Assets − Current Liabilities. Current Ratio = Current Assets ÷ Current Liabilities. Both measure a company's ability to cover short-term obligations with short-term assets.",
          "For example, 150,000 in current assets against 100,000 in current liabilities gives 50,000 in working capital and a current ratio of 1.5.",
        ],
      },
      {
        heading: "Interpreting the numbers",
        paragraphs: [
          "Positive working capital (and a current ratio above 1) generally means a business can cover its near-term obligations. Negative working capital can signal liquidity trouble, though some business models (like subscription businesses collecting cash upfront) operate normally with low or negative working capital.",
        ],
      },
    ],
    faqs: [
      {
        question: "What counts as a current asset or current liability?",
        answer: "Current assets are those expected to convert to cash within a year (cash, receivables, inventory). Current liabilities are obligations due within a year (accounts payable, short-term debt, accrued expenses).",
      },
      {
        question: "What's a healthy current ratio?",
        answer: "A current ratio between 1.5 and 3 is often considered healthy, though this varies by industry. A ratio below 1 can indicate difficulty covering short-term obligations, while a very high ratio may suggest assets aren't being used efficiently.",
      },
    ],
    relatedSlugs: ["cash-flow-calculator", "inventory-turnover-calculator"],
  },
  {
    slug: "cash-flow-calculator",
    category: "finance",
    title: "Cash Flow Calculator",
    shortDescription: "Calculate net cash flow from operating, investing and financing activities.",
    metaDescription: "Free online cash flow calculator to find your net cash flow from operating, investing and financing activities.",
    h1: "Cash Flow Calculator",
    intro: "Calculate your net cash flow by combining cash from operating, investing, and financing activities.",
    icon: "💵",
    status: "live",
    inputFields: [
      { key: "operatingCashFlow", label: "Operating Cash Flow", type: "number", step: 0.01, placeholder: "e.g. 30000" },
      { key: "investingCashFlow", label: "Investing Cash Flow", type: "number", step: 0.01, placeholder: "e.g. -20000" },
      { key: "financingCashFlow", label: "Financing Cash Flow", type: "number", step: 0.01, placeholder: "e.g. 5000" },
    ],
    resultFields: [{ key: "netCashFlow", label: "Net Cash Flow", highlight: true }],
    calculate: (inputs) => {
      const operatingCashFlow = Number(inputs.operatingCashFlow);
      const investingCashFlow = Number(inputs.investingCashFlow);
      const financingCashFlow = Number(inputs.financingCashFlow);
      const output = calculateCashFlow(operatingCashFlow, investingCashFlow, financingCashFlow);
      return { ...output };
    },
    explanation: [
      {
        heading: "How net cash flow is calculated",
        paragraphs: [
          "Net Cash Flow = Operating Cash Flow + Investing Cash Flow + Financing Cash Flow, the three sections of a standard cash flow statement. Enter outflows (like equipment purchases or debt repayments) as negative numbers.",
          "For example, 30,000 from operations, -20,000 from investing (e.g. buying equipment), and 5,000 from financing (e.g. a loan draw) nets to 15,000 in overall cash flow.",
        ],
      },
      {
        heading: "The three types of cash flow",
        paragraphs: [
          "Operating cash flow comes from core business activities. Investing cash flow reflects buying or selling long-term assets. Financing cash flow reflects debt, equity, and dividend activity. Looking at all three separately, not just the net total, shows where cash is actually coming from and going.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should outflows be negative?",
        answer: "Yes. Enter cash going out (equipment purchases, debt repayments, dividends paid) as negative numbers, and cash coming in as positive numbers, matching how these figures appear on a standard cash flow statement.",
      },
      {
        question: "Is positive net cash flow always good?",
        answer: "Not necessarily. A company could show positive net cash flow simply by taking on debt (financing activity) while its core operations lose cash. It's worth checking each of the three components, not just the total.",
      },
    ],
    relatedSlugs: ["working-capital-calculator", "net-worth-calculator"],
  },
  {
    slug: "invoice-due-date-calculator",
    category: "finance",
    title: "Invoice Due Date Calculator",
    shortDescription: "Calculate an invoice's due date from the invoice date and payment terms.",
    metaDescription: "Free online invoice due date calculator to find when an invoice is due based on the invoice date and payment terms like Net 30 or Net 60.",
    h1: "Invoice Due Date Calculator",
    intro: "Calculate an invoice's due date from its issue date and payment terms, like Net 15, Net 30, or Net 60.",
    icon: "🧾",
    status: "live",
    inputFields: [
      { key: "invoiceDate", label: "Invoice Date", type: "date" },
      { key: "termDays", label: "Payment Terms (days)", type: "number", step: 1, placeholder: "e.g. 30" },
    ],
    resultFields: [
      { key: "dueDate", label: "Due Date", highlight: true },
      { key: "daysFromToday", label: "Days From Today", unit: "days" },
    ],
    calculate: (inputs) => {
      const invoiceDate = String(inputs.invoiceDate);
      const termDays = Number(inputs.termDays);
      const output = calculateInvoiceDueDate(invoiceDate, termDays);
      return { ...output };
    },
    explanation: [
      {
        heading: "How the due date is calculated",
        paragraphs: [
          "The due date is simply the invoice date plus the number of days in your payment terms. Net 30 terms mean payment is due 30 days after the invoice date, Net 60 means 60 days, and so on.",
          "For example, an invoice dated July 28, 2026 with Net 30 terms is due August 27, 2026.",
        ],
      },
      {
        heading: "Common payment terms",
        paragraphs: [
          "Net 15, Net 30, Net 45, and Net 60 are the most common terms, with Net 30 being the default in most B2B invoicing. Some businesses also offer early-payment discounts, like '2/10 Net 30' meaning a 2% discount if paid within 10 days, otherwise the full amount is due in 30.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my terms aren't a round number like Net 30?",
        answer: "Enter the exact number of days from your payment terms, for example 45 for Net 45 or 7 for weekly terms. The calculator adds that many calendar days to the invoice date.",
      },
      {
        question: "Does this account for weekends or holidays?",
        answer: "No, it adds calendar days, not business days, which matches how most standard payment terms (Net 30, Net 60, etc.) are defined.",
      },
    ],
    relatedSlugs: ["date-calculator", "working-days-calculator"],
  },
  {
    slug: "business-valuation-calculator",
    category: "finance",
    title: "Business Valuation Calculator",
    shortDescription: "Estimate a business's value using the earnings-multiple method.",
    metaDescription: "Free online business valuation calculator to estimate a business's value using the earnings-multiple method (annual earnings × industry multiple).",
    h1: "Business Valuation Calculator",
    intro: "Estimate a small business's value using the earnings-multiple method, a common approach for privately held business sales.",
    icon: "🏷️",
    status: "live",
    inputFields: [
      { key: "annualEarnings", label: "Annual Earnings (SDE or EBITDA)", type: "number", step: 0.01, placeholder: "e.g. 100000" },
      { key: "multiple", label: "Industry Multiple", type: "number", step: 0.1, placeholder: "e.g. 3" },
      { key: "addBackAssets", label: "Add-Back Assets (e.g. excess cash)", type: "number", step: 0.01, defaultValue: 0, placeholder: "e.g. 20000" },
    ],
    resultFields: [{ key: "estimatedValue", label: "Estimated Business Value", highlight: true }],
    calculate: (inputs) => {
      const annualEarnings = Number(inputs.annualEarnings);
      const multiple = Number(inputs.multiple);
      const addBackAssets = Number(inputs.addBackAssets) || 0;
      const output = calculateBusinessValuation(annualEarnings, multiple, addBackAssets);
      return { estimatedValue: output.estimatedValue };
    },
    explanation: [
      {
        heading: "How this estimate is calculated",
        paragraphs: [
          "Estimated Value = (Annual Earnings × Industry Multiple) + Add-Back Assets. Annual earnings is typically Seller's Discretionary Earnings (SDE) for small businesses or EBITDA for larger ones. The multiple reflects what similar businesses in your industry typically sell for, as a multiple of that earnings figure.",
          "For example, 100,000 in annual earnings with a 3x multiple and 20,000 in add-back assets (like excess cash not needed to run the business) gives an estimated value of 320,000.",
        ],
      },
      {
        heading: "Why multiples vary so much",
        paragraphs: [
          "Industry multiples for small businesses commonly range from about 2x to 4x SDE, though they can be higher for businesses with recurring revenue, strong growth, or low owner dependency, and lower for businesses with concentrated customer risk or heavy owner involvement. Research recent sales of comparable businesses in your industry for a realistic multiple.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is this a substitute for a professional valuation?",
        answer: "No. This gives a quick, simplified estimate using one common method. A formal valuation from a business appraiser or broker considers many additional factors, market conditions, deal structure, and due diligence findings, and should be used for actual transactions.",
      },
      {
        question: "What's the difference between SDE and EBITDA?",
        answer: "SDE (Seller's Discretionary Earnings) adds back the owner's salary and personal benefits on top of EBITDA, and is typically used for smaller, owner-operated businesses. EBITDA is more common for larger businesses with professional management already in place.",
      },
    ],
    relatedSlugs: ["ebitda-calculator", "roi-calculator"],
  },
  {
    slug: "cgpa-calculator",
    category: "education",
    title: "CGPA Calculator",
    shortDescription: "Calculate your cumulative GPA across multiple semesters.",
    metaDescription: "Free online CGPA calculator to calculate your cumulative Grade Point Average across multiple semesters or years.",
    h1: "CGPA Calculator",
    intro: "Calculate your cumulative GPA (CGPA) by entering the GPA and credit hours for each semester or year.",
    icon: "🎓",
    status: "live",
    inputFields: [
      { key: "gpa1", label: "Semester 1 GPA", type: "number", step: 0.01, placeholder: "e.g. 3.5" },
      { key: "credits1", label: "Semester 1 Credits", type: "number", step: 0.5, placeholder: "e.g. 15" },
      { key: "gpa2", label: "Semester 2 GPA", type: "number", step: 0.01, placeholder: "e.g. 3.8" },
      { key: "credits2", label: "Semester 2 Credits", type: "number", step: 0.5, placeholder: "e.g. 16" },
      { key: "gpa3", label: "Semester 3 GPA", type: "number", step: 0.01, placeholder: "Leave blank if not used" },
      { key: "credits3", label: "Semester 3 Credits", type: "number", step: 0.5, placeholder: "Leave blank if not used" },
      { key: "gpa4", label: "Semester 4 GPA", type: "number", step: 0.01, placeholder: "Leave blank if not used" },
      { key: "credits4", label: "Semester 4 Credits", type: "number", step: 0.5, placeholder: "Leave blank if not used" },
      { key: "gpa5", label: "Semester 5 GPA", type: "number", step: 0.01, placeholder: "Leave blank if not used" },
      { key: "credits5", label: "Semester 5 Credits", type: "number", step: 0.5, placeholder: "Leave blank if not used" },
      { key: "gpa6", label: "Semester 6 GPA", type: "number", step: 0.01, placeholder: "Leave blank if not used" },
      { key: "credits6", label: "Semester 6 Credits", type: "number", step: 0.5, placeholder: "Leave blank if not used" },
    ],
    resultFields: [
      { key: "cgpa", label: "Cumulative GPA (CGPA)", highlight: true },
      { key: "totalCredits", label: "Total Credits" },
    ],
    calculate: (inputs) => {
      const semesters = [1, 2, 3, 4, 5, 6].map((n) => ({
        gpa: Number(inputs["gpa" + n]) || 0,
        credits: Number(inputs["credits" + n]) || 0,
      }));
      const output = calculateCgpa(semesters);
      return { ...output };
    },
    explanation: [
      {
        heading: "How CGPA is calculated",
        paragraphs: [
          "CGPA (Cumulative Grade Point Average) is a credit-weighted average of your GPA across all semesters: multiply each semester's GPA by its credit hours, sum those values, then divide by your total credit hours across every semester.",
          "For example, a 3.5 GPA over 15 credits in one semester and a 3.8 GPA over 16 credits in the next gives a CGPA of (3.5×15 + 3.8×16) ÷ (15+16) ≈ 3.65.",
        ],
      },
      {
        heading: "CGPA vs single-semester GPA",
        paragraphs: [
          "A single-semester GPA only reflects the courses taken in that term. CGPA aggregates every semester you've completed, weighted by credit hours, giving a running average of your entire academic record. If you only need one semester's GPA from letter grades, use our GPA Calculator instead.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if I only have 2 or 3 semesters so far?",
        answer: "Leave the remaining semester fields blank, they're excluded automatically and won't affect your CGPA.",
      },
      {
        question: "How is this different from the GPA Calculator?",
        answer: "The GPA Calculator converts letter grades to a GPA for a single semester's courses. This CGPA Calculator combines multiple semesters' already-calculated GPAs, weighted by credits, into one cumulative figure.",
      },
    ],
    relatedSlugs: ["gpa-calculator", "grade-percentage-calculator", "final-grade-calculator"],
  },
  {
    slug: "final-grade-calculator",
    category: "education",
    title: "Final Grade Calculator",
    shortDescription: "Calculate the score you need on your final exam to reach a target grade.",
    metaDescription: "Free online final grade calculator to find the score you need on your final exam to achieve your desired overall course grade.",
    h1: "Final Grade Calculator",
    intro: "Find out what score you need on your final exam to reach your desired overall grade in the course.",
    icon: "📝",
    status: "live",
    inputFields: [
      { key: "currentGrade", label: "Current Grade (%)", type: "number", step: 0.01, placeholder: "e.g. 75" },
      { key: "finalExamWeight", label: "Final Exam Weight (%)", type: "number", step: 0.01, placeholder: "e.g. 30" },
      { key: "desiredGrade", label: "Desired Overall Grade (%)", type: "number", step: 0.01, placeholder: "e.g. 80" },
    ],
    resultFields: [{ key: "neededScore", label: "Score Needed on Final", unit: "%", highlight: true }],
    calculate: (inputs) => {
      const currentGrade = Number(inputs.currentGrade);
      const finalExamWeight = Number(inputs.finalExamWeight);
      const desiredGrade = Number(inputs.desiredGrade);
      const output = calculateFinalGradeNeeded(currentGrade, finalExamWeight, desiredGrade);
      return { neededScore: output.neededScore };
    },
    explanation: [
      {
        heading: "How the needed final exam score is calculated",
        paragraphs: [
          "Needed Score = (Desired Grade − Current Grade × (1 − Final Weight)) ÷ Final Weight, where Final Weight is entered as a decimal (30% becomes 0.3). This works backward from your target overall grade to find what the final exam alone needs to contribute.",
          "For example, with a 75% current grade, a final exam worth 30% of your overall grade, and a target of 80% overall, you'd need to score about 91.7% on the final.",
        ],
      },
      {
        heading: "When the needed score is over 100% or under 0%",
        paragraphs: [
          "If the calculated needed score is above 100%, your target grade isn't reachable no matter how well you do on the final, given your current grade and the exam's weight. If it's below 0%, you've already secured your target grade regardless of the final exam score.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my final exam weight isn't a clean percentage?",
        answer: "Enter it as accurately as possible, for example 25.5 for 25.5%. Check your course syllabus for the exact weighting if you're unsure.",
      },
      {
        question: "What does it mean if the needed score is negative or over 100%?",
        answer: "A negative result means you've already reached your target grade regardless of the final. A result over 100% means the target isn't achievable given your current grade and the final's weight.",
      },
    ],
    relatedSlugs: ["grade-percentage-calculator", "cgpa-calculator"],
  },
  {
    slug: "grade-percentage-calculator",
    category: "education",
    title: "Grade Percentage Calculator",
    shortDescription: "Convert marks obtained into a percentage and letter grade.",
    metaDescription: "Free online grade percentage calculator to convert marks obtained out of total marks into a percentage and letter grade.",
    h1: "Grade Percentage Calculator",
    intro: "Calculate your percentage score and approximate letter grade from marks obtained and total marks.",
    icon: "💯",
    status: "live",
    inputFields: [
      { key: "marksObtained", label: "Marks Obtained", type: "number", step: 0.01, placeholder: "e.g. 425" },
      { key: "totalMarks", label: "Total Marks", type: "number", step: 0.01, placeholder: "e.g. 500" },
    ],
    resultFields: [
      { key: "percentage", label: "Percentage", unit: "%", highlight: true },
      { key: "letterGrade", label: "Approximate Letter Grade", highlight: true },
    ],
    calculate: (inputs) => {
      const marksObtained = Number(inputs.marksObtained);
      const totalMarks = Number(inputs.totalMarks);
      const output = calculateGradePercentage(marksObtained, totalMarks);
      return { ...output };
    },
    explanation: [
      {
        heading: "How percentage and letter grade are calculated",
        paragraphs: [
          "Percentage = Marks Obtained ÷ Total Marks × 100. The letter grade shown uses a common general scale (90%+ = A, 80-89% = B, 70-79% = C, 60-69% = D, below 60% = F).",
          "For example, 425 marks out of 500 gives 85%, which falls in the B range on this general scale.",
        ],
      },
      {
        heading: "About the letter grade scale",
        paragraphs: [
          "Grading scales vary between schools, countries, and institutions, some use plus/minus grades, different cutoffs, or entirely different scales. The letter grade shown here is a general approximation; check your institution's specific grading scale for an official grade.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does the letter grade match my school's exact scale?",
        answer: "Not necessarily. This uses a common general scale as an approximation. Many schools use their own cutoffs or add plus/minus grades, so check your institution's official scale for the exact letter grade.",
      },
      {
        question: "Can I use this for a single assignment or a whole course?",
        answer: "Both. Enter whatever marks obtained and total marks apply, whether that's one test, one assignment, or your combined marks across an entire course.",
      },
    ],
    relatedSlugs: ["final-grade-calculator", "cgpa-calculator"],
  },
  {
    slug: "attendance-calculator",
    category: "education",
    title: "Attendance Calculator",
    shortDescription: "Calculate your attendance percentage and how many classes you can miss or need to attend.",
    metaDescription: "Free online attendance calculator to find your current attendance percentage, how many classes you need to attend or can skip to hit a target.",
    h1: "Attendance Calculator",
    intro: "Calculate your current attendance percentage, and how many more classes you need to attend (or can safely miss) to hit a target percentage.",
    icon: "✅",
    status: "live",
    inputFields: [
      { key: "classesAttended", label: "Classes Attended", type: "number", step: 1, placeholder: "e.g. 40" },
      { key: "classesHeld", label: "Total Classes Held", type: "number", step: 1, placeholder: "e.g. 50" },
      { key: "targetPercent", label: "Target Attendance (%)", type: "number", step: 0.01, placeholder: "e.g. 75" },
    ],
    resultFields: [
      { key: "currentPercent", label: "Current Attendance", unit: "%", highlight: true },
      { key: "classesNeededForTarget", label: "More Classes Needed to Reach Target" },
      { key: "classesCanSkip", label: "Classes You Can Still Skip" },
    ],
    calculate: (inputs) => {
      const classesAttended = Number(inputs.classesAttended);
      const classesHeld = Number(inputs.classesHeld);
      const targetPercent = Number(inputs.targetPercent);
      const output = calculateAttendance(classesAttended, classesHeld, targetPercent);
      return { ...output };
    },
    explanation: [
      {
        heading: "How attendance projections are calculated",
        paragraphs: [
          "Current attendance is Classes Attended ÷ Total Classes Held × 100. Classes needed to reach a target assumes you attend every future class from now on, and solves for how many additional classes (attended and held) bring your percentage up to the target. Classes you can skip assumes you keep attending as before, and finds how many future classes (held but not attended) you can miss while staying at or above the target.",
          "For example, with 40 of 50 classes attended (80%) and a 75% target, you're already above target, so the calculator shows how many classes you can still skip rather than how many more you need.",
        ],
      },
      {
        heading: "Why both figures are shown",
        paragraphs: [
          "If you're below your target, 'classes needed' tells you how many consecutive classes you must attend to catch up. If you're already above target, 'classes you can skip' tells you your safety margin before you'd fall below it. Only one of the two will typically be a meaningful non-zero number at a time.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does this assume I attend every future class?",
        answer: "The 'classes needed' figure assumes you attend all future classes without missing any, since that's the fastest way to recover a low attendance percentage. The 'classes you can skip' figure assumes the opposite, that you keep missing future classes while target-holding your percentage.",
      },
      {
        question: "What if my target is 100%?",
        answer: "If you've already missed any classes, 100% attendance can no longer be reached since past classes can't be un-missed, so the calculator shows this as not applicable.",
      },
    ],
    relatedSlugs: ["study-time-calculator", "grade-percentage-calculator"],
  },
  {
    slug: "study-time-calculator",
    category: "education",
    title: "Study Time Calculator",
    shortDescription: "Calculate how many hours a day you need to study before your exam.",
    metaDescription: "Free online study time calculator to find how many hours per day or week you need to study to cover your material before an exam date.",
    h1: "Study Time Calculator",
    intro: "Calculate how many hours per day or week you need to study to cover your material before your exam date.",
    icon: "⏱️",
    status: "live",
    inputFields: [
      { key: "examDate", label: "Exam Date", type: "date" },
      { key: "totalHoursNeeded", label: "Total Study Hours Needed", type: "number", step: 0.5, placeholder: "e.g. 40" },
      { key: "studyDaysPerWeek", label: "Study Days per Week", type: "number", step: 1, min: 1, max: 7, placeholder: "e.g. 5" },
    ],
    resultFields: [
      { key: "daysRemaining", label: "Days Remaining", unit: "days" },
      { key: "hoursPerDay", label: "Hours Needed per Study Day", unit: "hrs", highlight: true },
      { key: "hoursPerWeek", label: "Hours Needed per Week", unit: "hrs", highlight: true },
    ],
    calculate: (inputs) => {
      const examDate = String(inputs.examDate);
      const totalHoursNeeded = Number(inputs.totalHoursNeeded);
      const studyDaysPerWeek = Number(inputs.studyDaysPerWeek);
      const output = calculateStudyTime(examDate, totalHoursNeeded, studyDaysPerWeek);
      return { ...output };
    },
    explanation: [
      {
        heading: "How required study time is calculated",
        paragraphs: [
          "Days remaining is the gap between today and your exam date. That's converted to weeks remaining, then multiplied by your chosen study days per week to get your total number of study sessions. Total study hours needed is then divided by that session count (for hours per day) and by weeks remaining (for hours per week).",
          "For example, with 20 days remaining, 5 study days a week, and 40 hours of material to cover, that's roughly 14.3 study sessions, about 2.8 hours per session, or 14 hours per week.",
        ],
      },
      {
        heading: "Estimating total study hours needed",
        paragraphs: [
          "A common rough estimate is 1-3 hours of focused study per hour of class content, or per chapter/topic depending on difficulty, adjust up for denser material or down for material you already know well. This calculator just does the scheduling math once you have that hours estimate.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if the exam date has already passed?",
        answer: "The calculator shows 0 days remaining and can't produce a meaningful daily or weekly study target in that case, double check the exam date you entered.",
      },
      {
        question: "How do I estimate total study hours needed?",
        answer: "A common starting point is 1-3 hours of focused review per topic or chapter, adjusted for how well you already know the material and how difficult the exam is expected to be.",
      },
    ],
    relatedSlugs: ["attendance-calculator", "final-grade-calculator"],
  },
];

export function getToolBySlug(slug: string) {
  return toolRegistry.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string) {
  return toolRegistry.filter((t) => t.category === category);
}