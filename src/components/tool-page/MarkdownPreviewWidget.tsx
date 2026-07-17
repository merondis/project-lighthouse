"use client";

import { useEffect, useState } from "react";

const DEFAULT_MARKDOWN = "# Heading\n\nType **markdown** on the left to see a *live preview* here.\n\n- List item one\n- List item two";

export function MarkdownPreviewWidget() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
  const [html, setHtml] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const { marked } = await import("marked");
      const result = await marked.parse(markdown);
      if (!cancelled) setHtml(result);
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [markdown]);

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Markdown Input
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            rows={16}
            className="resize-y rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 font-mono text-sm text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <div className="flex flex-col gap-2 text-sm font-medium text-white">
          Live Preview
          <div
            className="prose prose-invert max-w-none rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white"
            style={{ minHeight: "22rem" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      <p className="mt-6 text-xs text-brand-secondary">
        Rendering happens entirely in your browser. Nothing you type is sent to any server.
      </p>
    </div>
  );
}