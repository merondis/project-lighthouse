"use client";

import { useState } from "react";

export default function PercentageCalculator() {
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

function calculatePercentage() {
  const p = parseFloat(percentage);
  const n = parseFloat(number);

  if (isNaN(p) || isNaN(n)) {
    setResult("Please enter valid numbers.");
    return;
  }

  const answer = (p / 100) * n;

  setResult(`${p}% of ${n} = ${answer}`);
}

function calculateWhatPercent() {
  const v = parseFloat(value);
  const n = parseFloat(number);

  if (isNaN(v) || isNaN(n) || n === 0) {
    setResult("Please enter valid numbers.");
    return;
  }

  const answer = (v / n) * 100;

  setResult(`${v} is ${answer.toFixed(2)}% of ${n}`);
}

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "54px",
          marginBottom: "20px",
        }}
      >
        📊 Percentage Calculator
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#cbd5e1",
        }}
      >
        Calculate percentages instantly.
      </p>

      <div
        style={{
          marginTop: "40px",
          maxWidth: "500px",
          backgroundColor: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
        }}
      >
        <label>Percentage (%)</label>

        <input
          type="number"
          placeholder="Example: 25"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "18px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        />

        <label>Number</label>
        <input
        type="number"
        placeholder="Example: 800"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{
        width: "100%",
        padding: "12px",
        fontSize: "18px",
        marginTop: "10px",
  }}
/>

<br />
<br />

<label>Value</label>

<input
  type="number"
  placeholder="Example: 200"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    fontSize: "18px",
    marginTop: "10px",
  }}
/>

<div
  style={{
    display: "flex",
    gap: "15px",
    marginTop: "25px",
  }}
>
  <button
    onClick={calculatePercentage}
    style={{
      padding: "15px 25px",
      fontSize: "18px",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    X% of Y
  </button>

  <button
    onClick={calculateWhatPercent}
    style={{
      padding: "15px 25px",
      fontSize: "18px",
      backgroundColor: "#16a34a",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    X is what %
  </button>
</div>

        <h2
          style={{
            marginTop: "30px",
            color: "#22c55e",
          }}
        >
          {result}
        </h2>
      </div>
    </main>
  );
}