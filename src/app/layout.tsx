import type { Metadata } from "next";
import Script from "next/script";
import { Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://merondis.com"),
  title: {
    default: "Merondis | Free Online Calculators & Tools",
    template: "%s | Merondis",
  },
  description: "Merondis offers free online calculators, converters and developer tools. No signup required.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={sora.variable + " min-h-screen bg-brand-bg text-white antialiased"}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {gaId ? (
          <Script src={"https://www.googletagmanager.com/gtag/js?id=" + gaId} strategy="afterInteractive" />
        ) : null}
        {gaId ? (
          <Script id="ga-init" strategy="afterInteractive">
            {"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '" + gaId + "');"}
          </Script>
        ) : null}

        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}