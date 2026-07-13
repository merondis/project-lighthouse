import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
        🚀 Project Lighthouse by Merondis
      </h1>

      <p style={{ fontSize: "24px", color: "#cbd5e1" }}>
        Free Online Tools for Everyone
      </p>

      <div style={{ marginTop: "40px", fontSize: "22px" }}>
        <p>✅ 100+ Free Tools</p>
        <p>✅ Fast & Easy to Use</p>
        <p>✅ No Signup Required</p>
      </div>

      <button
        style={{
          marginTop: "40px",
          padding: "15px 35px",
          fontSize: "20px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Explore Tools
      </button>
    </main>
    </>
  );
}