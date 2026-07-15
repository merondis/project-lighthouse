"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface AiTextToolWidgetProps {
  systemPrompt: string;
  actionLabel: string;
  placeholder: string;
}

export function AiTextToolWidget({ systemPrompt, actionLabel, placeholder }: AiTextToolWidgetProps) {
  const [apiKey, setApiKey] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setError(null);
    setResult(null);

    if (!apiKey.trim()) {
      setError("Please enter your OpenAI API key.");
      return;
    }
    if (!text.trim()) {
      setError("Please enter some text.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey, systemPrompt, userText: text }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Request failed.");
      }

      setResult(data.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Your OpenAI API Key
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
          <span className="text-xs text-brand-secondary">
            Your key is used only for this request and is never stored or logged. Get a key at
            platform.openai.com.
          </span>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Your Text
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            rows={6}
            className="resize-y rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <Button type="button" onClick={handleSubmit} className="w-full sm:w-auto">
          {isLoading ? "Processing..." : actionLabel}
        </Button>
      </div>

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}

      {result && !error && (
        <div className="mt-8 rounded-lg border-t border-white/5 bg-brand-bg p-6">
          <p className="mb-2 text-xs uppercase tracking-wide text-brand-secondary">Result</p>
          <p className="whitespace-pre-wrap leading-relaxed text-white">{result}</p>
        </div>
      )}
    </div>
  );
}