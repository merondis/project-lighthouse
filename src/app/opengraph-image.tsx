import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111827",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: 20,
            background: "#1e293b",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#f59e0b",
              fontFamily: "sans-serif",
            }}
          >
            M
          </span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: "sans-serif",
          }}
        >
          Merondis
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#cbd5e1",
            marginTop: 16,
            fontFamily: "sans-serif",
          }}
        >
          Free Online Tools &amp; Calculators
        </div>
      </div>
    ),
    { ...size }
  );
}