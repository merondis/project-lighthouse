import Link from "next/link";
import { ReactNode } from "react";

type ToolLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function ToolLayout({
  title,
  description,
  children,
}: ToolLayoutProps) {
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
        {title}
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#cbd5e1",
          marginBottom: "40px",
        }}
      >
        {description}
      </p>

      {children}
    </main>
  );
}