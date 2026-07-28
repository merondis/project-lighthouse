"use client";

import { useState } from "react";

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 155;

function truncateForPreview(text: string, limit: number): string {
  if (text.length <= limit) return text;
  return text.slice(0, limit).trim() + "...";
}

function extractBreadcrumb(url: string): { site: string; path: string } {
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    const site = parsed.hostname.replace(/^www\./, "");
    const pathParts = parsed.pathname.split("/").filter(Boolean);
    return { site, path: pathParts.length > 0 ? ` › ${pathParts.join(" › ")}` : "" };
  } catch {
    return { site: url || "example.com", path: "" };
  }
}

function counterColor(length: number, limit: number): string {
  if (length === 0) return "text-brand-secondary";
  if (length > limit) return "text-red-400";
  if (length > limit * 0.9) return "text-yellow-400";
  return "text-green-400";
}

export function SerpPreviewWidget() {
  const [title, setTitle] = useState("Merondis - Free Online Tools, Calculators & Converters");
  const [url, setUrl] = useState("https://merondis.com/tools/finance-calculator");
  const [description, setDescription] = useState(
    "Free online calculators, converters and utilities for finance, health, math, construction and more. No sign-up required."
  );

  const breadcrumb = extractBreadcrumb(url);

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Page Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your page title..."
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
          <span className={`text-xs ${counterColor(title.length, TITLE_LIMIT)}`}>
            {title.length} / {TITLE_LIMIT} characters {title.length > TITLE_LIMIT ? "(will likely be truncated)" : ""}
          </span>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          URL
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/page"
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Meta Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your meta description..."
            rows={3}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
          <span className={`text-xs ${counterColor(description.length, DESCRIPTION_LIMIT)}`}>
            {description.length} / {DESCRIPTION_LIMIT} characters{" "}
            {description.length > DESCRIPTION_LIMIT ? "(will likely be truncated)" : ""}
          </span>
        </label>
      </div>

      <div className="mt-8">
        <p className="mb-3 text-xs uppercase tracking-wide text-brand-secondary">Google Search Preview</p>
        <div className="rounded-lg bg-white p-5" style={{ fontFamily: "arial, sans-serif" }}>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs">🌐</span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-[#202124]">{breadcrumb.site}</span>
              <span className="text-xs text-[#5f6368]">
                {url}
                {breadcrumb.path}
              </span>
            </div>
          </div>
          <div className="mt-1 truncate text-xl text-[#1a0dab] hover:underline">
            {truncateForPreview(title, TITLE_LIMIT) || "Your page title will appear here"}
          </div>
          <div className="mt-1 text-sm text-[#4d5156]">
            {truncateForPreview(description, DESCRIPTION_LIMIT) || "Your meta description will appear here."}
          </div>
        </div>
      </div>
    </div>
  );
}
