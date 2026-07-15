"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard access denied or unavailable, fail silently
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy result"
      className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-brand-bg px-2 py-1 text-xs text-brand-secondary hover:border-brand-accent hover:text-brand-accent"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}