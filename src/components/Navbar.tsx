import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#111827",
      }}
    >
      <Link
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        Merondis
      </Link>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link href="/tools" style={{ color: "white", textDecoration: "none" }}>
          Tools
        </Link>

        <Link
          href="/categories"
          style={{ color: "white", textDecoration: "none" }}
        >
          Categories
        </Link>

        <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>
      </div>
    </nav>
  );
}