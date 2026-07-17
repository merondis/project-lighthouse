"use client";

import { useState } from "react";
import { Share2, Code2, Check } from "lucide-react";

interface ShareEmbedWidgetProps {
  toolTitle: string;
  toolPath: string;
}

export function ShareEmbedWidget({ toolTitle, toolPath }: ShareEmbedWidgetProps) {
  const [showEmbed, setShowEmbed] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const siteUrl = "https://merondis.com";
  const fullUrl = siteUrl + toolPath;
  const embedUrl = siteUrl + "/embed" + toolPath;
  const embedCode =
    '<iframe src="' +
    embedUrl +
    '" width="100%" height="700" style="border:none;border-radius:12px;overflow:hidden;" title="' +
    toolTitle +
    ' - Merondis"></iframe>';

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      // clipboard unavailable, fail silently
    }
  }

  async function handleCopyEmbed() {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    } catch {
      // clipboard unavailable, fail silently
    }
  }

  return (
    <div className="print:hidden mb-8 flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={handleCopyLink}
        className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white hover:border-brand-accent hover:text-brand-accent"
      >
        {linkCopied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
        {linkCopied ? "Link Copied" : "Share"}
      </button>

      <button
        type="button"
        onClick={() => setShowEmbed((v) => !v)}
        className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white hover:border-brand-accent hover:text-brand-accent"
      >
        <Code2 className="h-4 w-4" />
        Embed
      </button>

      {showEmbed ? (
        <div className="mt-2 w-full rounded-lg border border-white/5 bg-brand-card p-4">
          <p className="mb-2 text-xs uppercase tracking-wide text-brand-secondary">
            Paste this code into your website to embed this tool
          </p>
          <textarea
            readOnly
            value={embedCode}
            rows={3}
            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
            className="w-full resize-none rounded-lg border border-white/10 bg-brand-bg px-3 py-2 font-mono text-xs text-brand-secondary focus:border-brand-accent focus:outline-none"
          />
          <button
            type="button"
            onClick={handleCopyEmbed}
            className="mt-3 inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-brand-accent hover:border-brand-accent"
          >
            {codeCopied ? <Check className="h-3.5 w-3.5" /> : <Code2 className="h-3.5 w-3.5" />}
            {codeCopied ? "Copied" : "Copy Embed Code"}
          </button>
        </div>
      ) : null}
    </div>
  );
}