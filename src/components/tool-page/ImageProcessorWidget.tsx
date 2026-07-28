"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export type ImageProcessorMode = "resize" | "compress" | "toWebp" | "toJpg" | "stripMetadata";

const MODE_LABELS: Record<ImageProcessorMode, { action: string; helper: string }> = {
  resize: { action: "Resize Image", helper: "Set target dimensions below, then resize." },
  compress: { action: "Compress Image", helper: "Output is re-encoded as JPEG so the quality slider has an effect." },
  toWebp: { action: "Convert to WebP", helper: "Output is re-encoded as WebP." },
  toJpg: { action: "Convert to JPG", helper: "Output is re-encoded as JPEG. Transparent areas become white." },
  stripMetadata: { action: "Remove Metadata", helper: "Output keeps the original format and dimensions, only metadata is dropped." },
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function extensionForMime(mime: string): string {
  if (mime === "image/jpeg") return "jpg";
  if (mime === "image/webp") return "webp";
  return "png";
}

export function ImageProcessorWidget({ mode }: { mode: ImageProcessorMode }) {
  const [file, setFile] = useState<File | null>(null);
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [naturalWidth, setNaturalWidth] = useState(0);
  const [naturalHeight, setNaturalHeight] = useState(0);
  const [targetWidth, setTargetWidth] = useState("");
  const [targetHeight, setTargetHeight] = useState("");
  const [lockAspect, setLockAspect] = useState(true);
  const [quality, setQuality] = useState(85);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [resultSize, setResultSize] = useState(0);
  const [resultFileName, setResultFileName] = useState("");

  function resetResult() {
    setError(null);
    setResultUrl(null);
    setResultSize(0);
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    resetResult();
    const selected = e.target.files ? e.target.files[0] : null;
    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    const url = URL.createObjectURL(selected);
    const img = new Image();
    img.onload = () => {
      setImgEl(img);
      setNaturalWidth(img.naturalWidth);
      setNaturalHeight(img.naturalHeight);
      setTargetWidth(String(img.naturalWidth));
      setTargetHeight(String(img.naturalHeight));
    };
    img.onerror = () => setError("Could not load this image file.");
    img.src = url;

    setFile(selected);
  }

  function handleWidthChange(value: string) {
    setTargetWidth(value);
    if (lockAspect && naturalWidth > 0) {
      const w = Number(value);
      if (Number.isFinite(w) && w > 0) {
        setTargetHeight(String(Math.round((w * naturalHeight) / naturalWidth)));
      }
    }
  }

  function handleHeightChange(value: string) {
    setTargetHeight(value);
    if (lockAspect && naturalHeight > 0) {
      const h = Number(value);
      if (Number.isFinite(h) && h > 0) {
        setTargetWidth(String(Math.round((h * naturalWidth) / naturalHeight)));
      }
    }
  }

  function resolveOutputMime(): { mimeType: string; needsWhiteBg: boolean; qualityValue?: number } {
    if (mode === "toWebp") return { mimeType: "image/webp", needsWhiteBg: false, qualityValue: quality / 100 };
    if (mode === "toJpg") return { mimeType: "image/jpeg", needsWhiteBg: true, qualityValue: 0.92 };
    if (mode === "compress") return { mimeType: "image/jpeg", needsWhiteBg: true, qualityValue: quality / 100 };
    const supported = ["image/jpeg", "image/png", "image/webp"];
    const original = file?.type ?? "image/png";
    const mimeType = supported.includes(original) ? original : "image/png";
    return { mimeType, needsWhiteBg: mimeType === "image/jpeg", qualityValue: mimeType === "image/jpeg" ? 0.95 : undefined };
  }

  function handleProcess() {
    resetResult();
    if (!file || !imgEl) {
      setError("Please select an image first.");
      return;
    }

    let outWidth = naturalWidth;
    let outHeight = naturalHeight;
    if (mode === "resize") {
      const w = Number(targetWidth);
      const h = Number(targetHeight);
      if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) {
        setError("Please enter valid target dimensions greater than zero.");
        return;
      }
      outWidth = Math.round(w);
      outHeight = Math.round(h);
    }

    setIsProcessing(true);

    try {
      const canvas = document.createElement("canvas");
      canvas.width = outWidth;
      canvas.height = outHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Unable to prepare image rendering.");

      const { mimeType, needsWhiteBg, qualityValue } = resolveOutputMime();

      if (needsWhiteBg) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, outWidth, outHeight);
      }
      ctx.drawImage(imgEl, 0, 0, outWidth, outHeight);

      canvas.toBlob(
        (blob) => {
          setIsProcessing(false);
          if (!blob) {
            setError("Failed to process the image.");
            return;
          }
          const url = URL.createObjectURL(blob);
          setResultUrl(url);
          setResultSize(blob.size);
          const baseName = file.name.replace(/\.[^.]+$/, "");
          const suffix =
            mode === "resize" ? "-resized" : mode === "compress" ? "-compressed" : mode === "stripMetadata" ? "-clean" : "";
          setResultFileName(`${baseName}${suffix}.${extensionForMime(mimeType)}`);
        },
        mimeType,
        qualityValue
      );
    } catch (err) {
      setIsProcessing(false);
      setError(err instanceof Error ? err.message : "Failed to process the image.");
    }
  }

  const { action, helper } = MODE_LABELS[mode];
  const showQualitySlider = mode === "compress" || mode === "toWebp";
  const showDimensionInputs = mode === "resize";

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-white/20 bg-brand-bg px-6 py-10 text-center hover:border-brand-accent">
        <span className="font-medium text-white">Click to select an image</span>
        <span className="text-xs text-brand-secondary">JPG, PNG, WebP and other common formats</span>
        <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
      </label>

      {file && (
        <div className="mt-4 rounded-lg border border-white/5 bg-brand-bg p-4">
          <p className="text-sm text-white">{file.name}</p>
          <p className="mt-1 text-xs text-brand-secondary">
            {formatBytes(file.size)}
            {naturalWidth > 0 ? ` — ${naturalWidth} × ${naturalHeight}px` : ""}
          </p>
        </div>
      )}

      {showDimensionInputs && naturalWidth > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-white">
            Width (px)
            <input
              type="number"
              value={targetWidth}
              onChange={(e) => handleWidthChange(e.target.value)}
              className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-white">
            Height (px)
            <input
              type="number"
              value={targetHeight}
              onChange={(e) => handleHeightChange(e.target.value)}
              className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
            />
          </label>
          <label className="flex items-center gap-2 text-sm font-medium text-white sm:col-span-2">
            <input type="checkbox" checked={lockAspect} onChange={(e) => setLockAspect(e.target.checked)} />
            Lock aspect ratio
          </label>
        </div>
      )}

      {showQualitySlider && (
        <label className="mt-6 flex flex-col gap-2 text-sm font-medium text-white">
          Quality ({quality}%)
          <input type="range" min={10} max={100} value={quality} onChange={(e) => setQuality(Number(e.target.value))} />
        </label>
      )}

      <p className="mt-4 text-xs text-brand-secondary">{helper}</p>

      <div className="mt-4 flex w-full justify-center">
        <Button type="button" onClick={handleProcess} className="w-full max-w-xs sm:w-auto">
          {isProcessing ? "Processing..." : action}
        </Button>
      </div>

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}

      {resultUrl && (
        <div className="mt-6 rounded-lg border border-white/5 bg-brand-bg p-4 text-center">
          <img src={resultUrl} alt="Processed result" className="mx-auto max-h-80 rounded" />
          <p className="mt-3 text-sm text-white">
            {formatBytes(resultSize)}
            {file ? ` (from ${formatBytes(file.size)})` : ""}
          </p>
          <a
            href={resultUrl}
            download={resultFileName}
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Download
          </a>
        </div>
      )}

      <p className="mt-6 text-xs text-brand-secondary">Your image is processed entirely in your browser. Nothing is uploaded to any server.</p>
    </div>
  );
}
