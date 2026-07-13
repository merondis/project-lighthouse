import Link from "next/link";
export default function Navbar() {
  return (
    <nav
      style={{
        height: "70px",
        backgroundColor: "#111827",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
      }}
    >
      <h2>🚀 Project Lighthouse</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>

        <Link
  href="/tools"
  style={{ color: "white", textDecoration: "none" }}
>
  Tools
</Link>

        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
      </div>
    </nav>
  );
}