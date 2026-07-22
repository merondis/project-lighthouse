"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { BmiGaugeScale, GaugeZone } from "@/components/BmiGaugeScale";
import { BmiChart } from "@/components/BmiChart";
import {
  calculateBmiDetailed,
  convertHeightToMeters,
  convertWeightToKg,
  getBmiContextNotes,
  BMI_CATEGORIES,
  BMI_PRIME_CATEGORIES,
  BmiResult,
  Gender,
  HeightUnit,
  UnitSystem,
  WeightUnit,
} from "@/utils/calculators/bmi";

const ZONE_COLORS = [
  "#7C3AED",
  "#38BDF8",
  "#22D3EE",
  "#22C55E",
  "#F59E0B",
  "#F97316",
  "#EF4444",
  "#B91C1C",
];

const BMI_ZONES: GaugeZone[] = BMI_CATEGORIES.map((cat, i) => ({
  label: cat.label,
  min: Math.max(cat.min, 10),
  max: Math.min(cat.max, 45),
  color: ZONE_COLORS[i],
}));

const BMI_PRIME_ZONES: GaugeZone[] = BMI_PRIME_CATEGORIES.map((cat, i) => ({
  label: cat.label,
  min: Math.max(cat.min, 0.4),
  max: Math.min(cat.max, 1.8),
  color: ZONE_COLORS[i],
}));

const inputClasses =
  "rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none";
const labelClasses = "flex flex-col gap-2 text-sm font-medium text-white";
const toggleBaseClasses = "flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors";

export function BmiCalculatorWidget() {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("us");

  const [feet, setFeet] = useState("5");
  const [inches, setInches] = useState("9");
  const [lbs, setLbs] = useState("160");

  const [cm, setCm] = useState("175");
  const [kg, setKg] = useState("70");

  const [otherHeightValue, setOtherHeightValue] = useState("175");
  const [otherHeightUnit, setOtherHeightUnit] = useState<HeightUnit>("cm");
  const [otherWeightValue, setOtherWeightValue] = useState("70");
  const [otherWeightUnit, setOtherWeightUnit] = useState<WeightUnit>("kg");

  const [age, setAge] = useState("30");
  const [gender, setGender] = useState<Gender>("male");

  const [result, setResult] = useState<BmiResult | null>(null);
  const [heightCmUsed, setHeightCmUsed] = useState<number | null>(null);
  const [weightKgUsed, setWeightKgUsed] = useState<number | null>(null);
  const [contextNotes, setContextNotes] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  function handleCalculate() {
    setError(null);
    setResult(null);

    try {
      let heightM: number;
      let weightKg: number;

      if (unitSystem === "us") {
        const totalInches = Number(feet) * 12 + Number(inches);
        heightM = convertHeightToMeters(totalInches, "in");
        weightKg = convertWeightToKg(Number(lbs), "lbs");
      } else if (unitSystem === "metric") {
        heightM = convertHeightToMeters(Number(cm), "cm");
        weightKg = convertWeightToKg(Number(kg), "kg");
      } else {
        heightM = convertHeightToMeters(Number(otherHeightValue), otherHeightUnit);
        weightKg = convertWeightToKg(Number(otherWeightValue), otherWeightUnit);
      }

      const ageValue = Number(age);
      if (Number.isNaN(ageValue) || ageValue < 18 || ageValue > 120) {
        throw new Error("Age must be between 18 and 120. This calculator is for adults only.");
      }

      const output = calculateBmiDetailed(heightM, weightKg);
      setResult(output);
      setHeightCmUsed(heightM * 100);
      setWeightKgUsed(weightKg);
      setContextNotes(getBmiContextNotes(ageValue, gender));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please check your inputs.");
      setResult(null);
      setHeightCmUsed(null);
      setWeightKgUsed(null);
      setContextNotes([]);
    }
  }

  const usFields = unitSystem === "us" ? (
    <div className="grid grid-cols-3 gap-3">
      <label className={labelClasses}>
        Feet
        <input type="number" value={feet} onChange={(e) => setFeet(e.target.value)} className={inputClasses} />
      </label>
      <label className={labelClasses}>
        Inches
        <input type="number" value={inches} onChange={(e) => setInches(e.target.value)} className={inputClasses} />
      </label>
      <label className={labelClasses}>
        Pounds
        <input type="number" value={lbs} onChange={(e) => setLbs(e.target.value)} className={inputClasses} />
      </label>
    </div>
  ) : null;

  const metricFields = unitSystem === "metric" ? (
    <div className="grid grid-cols-2 gap-3">
      <label className={labelClasses}>
        Height (cm)
        <input type="number" value={cm} onChange={(e) => setCm(e.target.value)} className={inputClasses} />
      </label>
      <label className={labelClasses}>
        Weight (kg)
        <input type="number" value={kg} onChange={(e) => setKg(e.target.value)} className={inputClasses} />
      </label>
    </div>
  ) : null;

  const otherFields = unitSystem === "other" ? (
    <div className="grid grid-cols-2 gap-3">
      <label className={labelClasses}>
        Height
        <div className="flex gap-2">
          <input
            type="number"
            value={otherHeightValue}
            onChange={(e) => setOtherHeightValue(e.target.value)}
            className={inputClasses + " w-full"}
          />
          <select
            value={otherHeightUnit}
            onChange={(e) => setOtherHeightUnit(e.target.value as HeightUnit)}
            className={inputClasses}
          >
            <option value="cm">cm</option>
            <option value="m">m</option>
            <option value="in">in</option>
            <option value="ft">ft</option>
          </select>
        </div>
      </label>
      <label className={labelClasses}>
        Weight
        <div className="flex gap-2">
          <input
            type="number"
            value={otherWeightValue}
            onChange={(e) => setOtherWeightValue(e.target.value)}
            className={inputClasses + " w-full"}
          />
          <select
            value={otherWeightUnit}
            onChange={(e) => setOtherWeightUnit(e.target.value as WeightUnit)}
            className={inputClasses}
          >
            <option value="kg">kg</option>
            <option value="lbs">lbs</option>
            <option value="stone">stone</option>
          </select>
        </div>
      </label>
    </div>
  ) : null;

  const usToggleClasses = toggleBaseClasses + " " + (unitSystem === "us" ? "bg-brand-primary text-white" : "bg-brand-bg text-brand-secondary");
  const metricToggleClasses = toggleBaseClasses + " " + (unitSystem === "metric" ? "bg-brand-primary text-white" : "bg-brand-bg text-brand-secondary");
  const otherToggleClasses = toggleBaseClasses + " " + (unitSystem === "other" ? "bg-brand-primary text-white" : "bg-brand-bg text-brand-secondary");

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  const contextNotesBox = contextNotes.length > 0 ? (
    <div className="mt-4 rounded-lg bg-brand-bg p-4">
      <p className="text-xs uppercase tracking-wide text-brand-secondary">Context for Your Age &amp; Gender</p>
      <ul className="mt-2 flex flex-col gap-2">
        {contextNotes.map((note, i) => (
          <li key={i} className="text-sm leading-relaxed text-brand-secondary">
            {note}
          </li>
        ))}
      </ul>
    </div>
  ) : null;

  const chartBox = result && heightCmUsed !== null && weightKgUsed !== null ? (
    <div className="mt-6 rounded-lg bg-brand-bg p-4">
      <p className="text-xs uppercase tracking-wide text-brand-secondary">Height vs. Weight BMI Zones</p>
      <div className="mt-3">
        <BmiChart heightCm={heightCmUsed} weightKg={weightKgUsed} />
      </div>
    </div>
  ) : null;

  const healthyRangeText = result
    ? result.healthyWeightMinKg + " - " + result.healthyWeightMaxKg + " kg (" + result.healthyWeightMinLb + " - " + result.healthyWeightMaxLb + " lb)"
    : "";

  const resultBox = result ? (
    <div className="mt-8 border-t border-white/5 pt-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">BMI</p>
          <p className="mt-1 text-2xl font-bold text-brand-accent">{result.bmi}</p>
          <p className="mt-1 text-sm text-white">{result.category}</p>
        </div>
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">Healthy Weight Range</p>
          <p className="mt-1 text-lg font-bold text-white">{healthyRangeText}</p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-brand-bg p-4">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-secondary">BMI Gauge</p>
        <BmiGaugeScale zones={BMI_ZONES} value={result.bmi} min={10} max={45} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <p className="text-xs uppercase tracking-wide text-brand-secondary">BMI Prime</p>
          <p className="mt-1 text-2xl font-bold text-white">{result.bmiPrime}</p>
          <p className="mt-1 text-sm text-white">{result.bmiPrimeCategory}</p>
        </div>
        <div className="rounded-lg bg-brand-bg p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <p className="text-xs uppercase tracking-wide text-brand-secondary">Ponderal Index</p>
            <CopyButton value={String(result.ponderalIndex)} />
          </div>
          <p className="mt-1 text-2xl font-bold text-white">{result.ponderalIndex}</p>
          <p className="mt-1 text-xs text-brand-secondary">kg/m³</p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-brand-bg p-4">
        <p className="mb-2 text-xs uppercase tracking-wide text-brand-secondary">BMI Prime Gauge</p>
        <BmiGaugeScale zones={BMI_PRIME_ZONES} value={result.bmiPrime} min={0.4} max={1.8} />
      </div>

      {contextNotesBox}
      {chartBox}
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 rounded-lg bg-brand-bg p-1">
          <button type="button" onClick={() => setUnitSystem("us")} className={usToggleClasses}>
            US
          </button>
          <button type="button" onClick={() => setUnitSystem("metric")} className={metricToggleClasses}>
            Metric
          </button>
          <button type="button" onClick={() => setUnitSystem("other")} className={otherToggleClasses}>
            Other
          </button>
        </div>

        {usFields}
        {metricFields}
        {otherFields}

        <div className="grid grid-cols-2 gap-3">
          <label className={labelClasses}>
            Age (18-120)
            <input type="number" min={18} max={120} value={age} onChange={(e) => setAge(e.target.value)} className={inputClasses} />
          </label>
          <label className={labelClasses}>
            Gender
            <select value={gender} onChange={(e) => setGender(e.target.value as Gender)} className={inputClasses}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        <Button type="button" onClick={handleCalculate} className="w-full sm:w-auto">
          Calculate BMI
        </Button>
      </div>

      {errorBox}
      {resultBox}
    </div>
  );
}
