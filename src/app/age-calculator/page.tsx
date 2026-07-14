"use client";

import { useState } from "react";
import Link from "next/link";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState("");

  function calculateAge() {
    if (!dob) {
      setResult("Please select your date of birth.");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += previousMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diff = today.getTime() - birthDate.getTime();

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    setResult(
      `Age Calculation Result

Years        : ${years}
Months       : ${months}
Days         : ${days}

────────────────────

Total Months : ${totalMonths}
Total Weeks  : ${totalWeeks}
Total Days   : ${totalDays}`
    );
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
      <Link
        href="/tools"
        style={{
          color: "#60a5fa",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        ← Back to Tools
      </Link>

      <h1
        style={{
          fontSize: "54px",
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        🎂 Free Age Calculator
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#cbd5e1",
        }}
      >
        Calculate your exact age instantly in years, months, weeks and days.
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "35px",
          backgroundColor: "#1e293b",
          borderRadius: "12px",
          maxWidth: "650px",
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          Date of Birth
        </label>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "20px",
            backgroundColor: "white",
            color: "#111827",
            border: "none",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />

        <button
          onClick={calculateAge}
          style={{
            padding: "15px 35px",
            fontSize: "18px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Calculate
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

      <div
        style={{
          marginTop: "60px",
          maxWidth: "900px",
          color: "#cbd5e1",
          lineHeight: "1.8",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "34px",
            marginBottom: "20px",
          }}
        >
          About this Age Calculator
        </h2>

        <p>
          This free Age Calculator instantly calculates your exact age in years,
          months, weeks and days based on your date of birth.
        </p>

        <p style={{ marginTop: "20px" }}>
          It is useful for school admissions, job applications, passport
          services, insurance forms and many other situations where your exact
          age is required.
        </p>

        <p style={{ marginTop: "20px" }}>
          All calculations happen inside your browser. No information is stored
          or shared.
        </p>
      </div>

      <div
        style={{
          marginTop: "60px",
          maxWidth: "900px",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "34px",
            marginBottom: "25px",
          }}
        >
          Frequently Asked Questions
        </h2>

        <h3 style={{ marginBottom: "10px" }}>
          Is this Age Calculator free?
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "25px",
          }}
        >
          Yes. It is completely free to use.
        </p>

        <h3 style={{ marginBottom: "10px" }}>
          Does this calculator save my information?
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "25px",
          }}
        >
          No. Everything is calculated in your browser and nothing is stored.
        </p>

        <h3 style={{ marginBottom: "10px" }}>
          Can I use this calculator on my phone?
        </h3>

        <p
          style={{
            color: "#cbd5e1",
          }}
        >
          Yes. It works on desktop computers, tablets and mobile phones.
        </p>
      </div>
    </main>
  );
}