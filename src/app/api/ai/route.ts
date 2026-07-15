import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { apiKey, systemPrompt, userText } = body;

    if (!apiKey || typeof apiKey !== "string") {
      return NextResponse.json({ error: "Please provide a valid OpenAI API key." }, { status: 400 });
    }
    if (!userText || typeof userText !== "string") {
      return NextResponse.json({ error: "Please provide text to process." }, { status: 400 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userText },
        ],
        temperature: 0.5,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const message = errData?.error?.message || "The AI request failed. Please check your API key and try again.";
      return NextResponse.json({ error: message }, { status: response.status });
    }

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content;

    if (!result) {
      return NextResponse.json({ error: "No response received from the AI." }, { status: 502 });
    }

    return NextResponse.json({ result });
  } catch {
    return NextResponse.json({ error: "Something went wrong processing your request." }, { status: 500 });
  }
}