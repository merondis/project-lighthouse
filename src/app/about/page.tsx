export default function About() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        color: "white",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "30px",
        }}
      >
        🚀 About Project Lighthouse
      </h1>

      <p
        style={{
          fontSize: "22px",
          lineHeight: "1.8",
          maxWidth: "900px",
        }}
      >
        Project Lighthouse is a growing collection of free online tools,
        calculators and developer utilities designed to help students,
        professionals, businesses and everyday users solve problems quickly.
      </p>

      <br />

      <p
        style={{
          fontSize: "22px",
          lineHeight: "1.8",
          maxWidth: "900px",
        }}
      >
        Our goal is simple:
      </p>

      <ul
        style={{
          fontSize: "22px",
          lineHeight: "2",
          marginTop: "20px",
        }}
      >
        <li>✅ 100% Free Tools</li>
        <li>✅ Fast Loading</li>
        <li>✅ No Registration</li>
        <li>✅ Mobile Friendly</li>
        <li>✅ Easy to Use</li>
      </ul>

      <p
        style={{
          marginTop: "40px",
          fontSize: "20px",
          color: "#cbd5e1",
        }}
      >
        More tools are being added regularly.
      </p>
    </main>
  );
}