export default function ToolsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        color: "white",
        padding: "60px",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>🛠️ Free Tools</h1>

      <p style={{ marginTop: "20px", fontSize: "22px" }}>
        These tools are coming soon.
      </p>

      <ul style={{ marginTop: "40px", fontSize: "20px", lineHeight: "2" }}>
        <li>✓ Age Calculator</li>
        <li>✓ Percentage Calculator</li>
        <li>✓ BMI Calculator</li>
        <li>✓ EMI Calculator</li>
      </ul>
    </main>
  );
}