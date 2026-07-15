import { NextResponse } from "next/server";

const EXCHANGE_RATE_API_URL = "https://open.er-api.com/v6/latest/USD";

// Cache in memory for the lifetime of the server process
let cachedRates: { rates: Record<string, number>; timestamp: number } | null = null;
const CACHE_DURATION_MS = 6 * 60 * 60 * 1000; // 6 hours

export async function GET() {
  const now = Date.now();

  if (cachedRates && now - cachedRates.timestamp < CACHE_DURATION_MS) {
    return NextResponse.json({ rates: cachedRates.rates, cached: true });
  }

  try {
    const response = await fetch(EXCHANGE_RATE_API_URL, {
      next: { revalidate: 21600 }, // 6 hours, Next.js fetch cache
    });

    if (!response.ok) {
      throw new Error("Exchange rate API returned an error.");
    }

    const data = await response.json();

    if (!data.rates) {
      throw new Error("Exchange rate API returned unexpected data.");
    }

    cachedRates = { rates: data.rates, timestamp: now };

    return NextResponse.json({ rates: data.rates, cached: false });
  } catch (error) {
    // If we have stale cached data, serve it rather than failing completely
    if (cachedRates) {
      return NextResponse.json({ rates: cachedRates.rates, cached: true, stale: true });
    }

    return NextResponse.json(
      { error: "Unable to fetch exchange rates. Please try again later." },
      { status: 503 }
    );
  }
}