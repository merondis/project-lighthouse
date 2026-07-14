import Link from "next/link";

const categories = [
  {
    title: "💰 Finance",
    description: "Loan, EMI, GST, SIP and investment calculators.",
    tools: 4,
  },
  {
    title: "❤️ Health",
    description: "BMI, Age, Calories and health calculators.",
    tools: 2,
  },
  {
    title: "📏 Unit Conversion",
    description: "Length, Weight, Area and Temperature converters.",
    tools: 0,
  },
  {
    title: "💻 Developer",
    description: "JSON, Base64, Regex and Encoding tools.",
    tools: 0,
  },
];

export default function CategoriesPage() {
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
        📂 Categories
      </h1>

      <p
        style={{
          color: "#cbd5e1",
          fontSize: "22px",
          marginBottom: "50px",
        }}
      >
        Browse calculators by category.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {categories.map((category) => (
          <div
            key={category.title}
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "12px",
            }}
          >
            <h2>{category.title}</h2>

            <p>{category.description}</p>

            <p
              style={{
                marginTop: "20px",
                color: "#60a5fa",
              }}
            >
              {category.tools} tools available
            </p>

            <button
              style={{
                marginTop: "20px",
                padding: "12px 24px",
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Browse
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "60px",
        }}
      >
        <Link
          href="/tools"
          style={{
            color: "#60a5fa",
            textDecoration: "none",
          }}
        >
          ← Back to Tools
        </Link>
      </div>
    </main>
  );
}