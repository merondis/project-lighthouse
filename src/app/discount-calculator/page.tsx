"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState("");

  function calculateDiscount() {
    const p = parseFloat(price);
    const d = parseFloat(discount);

    if (isNaN(p) || isNaN(d)) {
      setResult("Please enter valid numbers.");
      return;
    }

    const discountAmount = (p * d) / 100;
    const finalPrice = p - discountAmount;

    setResult(
`Discount Result

Original Price : ₹${p.toFixed(2)}

Discount       : ${d}%

You Save       : ₹${discountAmount.toFixed(2)}

Final Price    : ₹${finalPrice.toFixed(2)}`
    );
  }

  return (
    <ToolLayout
      title="🏷️ Discount Calculator"
      description="Calculate discounts instantly."
    >
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "35px",
          borderRadius: "12px",
          maxWidth: "650px",
        }}
      >
        <label>Original Price</label>

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="1000"
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "20px",
            marginTop: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        />

        <label>Discount (%)</label>

        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          placeholder="20"
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
          onClick={calculateDiscount}
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
          Calculate Discount
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