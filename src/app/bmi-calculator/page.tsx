"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  function calculateBMI() {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w) {
      setResult("Please enter both height and weight.");
      return;
    }

    const bmi = w / ((h / 100) * (h / 100));

    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal Weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult(
`BMI Result

BMI Value : ${bmi.toFixed(1)}

Category  : ${category}`
    );
  }

  return (
    <ToolLayout
      title="⚖️ Free BMI Calculator"
      description="Calculate your Body Mass Index instantly."
    >
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "35px",
          borderRadius: "12px",
          maxWidth: "650px",
        }}
      >
        <label>Height (cm)</label>

        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Example: 170"
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "20px",
            marginTop: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        />

        <label>Weight (kg)</label>

        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Example: 70"
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "20px",
            marginTop: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        />

        <button
          onClick={calculateBMI}
          style={{
            padding: "15px 35px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Calculate BMI
        </button>

        {result && (
          <pre
            style={{
              marginTop: "35px",
              padding: "20px",
              backgroundColor: "#0f172a",
              borderRadius: "10px",
              color: "#22c55e",
              fontSize: "20px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
            }}
          >
            {result}
          </pre>
        )}
      </div>
    </ToolLayout>
  );
}