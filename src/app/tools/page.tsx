import Link from "next/link";
import { tools } from "@/data/tools";

export default function ToolsPage() {
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
          marginBottom: "15px",
        }}
      >
        🛠️ Free Online Tools
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#cbd5e1",
          marginBottom: "50px",
        }}
      >
        Free calculators and utilities for everyone.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "25px",
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool.name}
            style={{
              backgroundColor: "#1e293b",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h2>{tool.name}</h2>

            <p>{tool.description}</p>

            {tool.available ? (
              <Link
                href={tool.href}
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  padding: "12px 24px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                }}
              >
                Open Tool
              </Link>
            ) : (
              <button
                disabled
                style={{
                  marginTop: "20px",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}