import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Project Lighthouse - Free Online Calculators & Developer Tools",
  description: "100+ free online calculators, converters and developer utilities. Fast, simple and mobile-friendly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#111827",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}