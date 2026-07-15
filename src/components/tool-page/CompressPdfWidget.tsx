"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Button } from "@/components/ui/Button";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

export function CompressPdfWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setDownloadUrl(null);
    setCompressedSize(null);

    const selected = e.target.files ? e.target.files[0] : null;
    if (!selected) {
      return;
    }

    if (selected.type !== "application/pdf") {
      setError("Please select a PDF file.");
      return;
    }

    setFile(selected);
    setOriginalSize(selected.size);
  }

  async function handleCompress() {
    setError(null);
    setDownloadUrl(null);
    setCompressedSize(null);

    if (!file) {
      setError("Please select a PDF file first.");
      return;
    }

    setIsProcessing(true);

    try {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);

      const compressedBytes = await pdf.save({
        useObjectStreams: true,
        addDefaultPage: false,
      });

      const blob = new Blob([new Uint8Array(compressedBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setCompressedSize(blob.size);
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to compress PDF: " + err.message);
      } else {
        setError("Failed to compress PDF. It may be corrupted or password protected.");
      }
    } finally {
      setIsProcessing(false);
    }
  }

  const hasFile = file !== null;
  const showResult = downloadUrl !== null && error === null && compressedSize !== null;

  let savedPercent = 0;
  if (originalSize && compressedSize && originalSize > 0) {
    const raw = ((originalSize - compressedSize) / originalSize) * 100;
    savedPercent = raw > 0 ? Math.round(raw) : 0;
  }

  const originalSizeLabel = originalSize !== null ? formatBytes(originalSize) : "";
  const compressedSizeLabel = compressedSize !== null ? formatBytes(compressedSize) : "";
  const savedLabel = savedPercent > 0 ? " (" + savedPercent + "% smaller)" : "";
  const anchorHref = downloadUrl ? downloadUrl : "#";

  const uploadBox = (
    <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-white/20 bg-brand-bg px-6 py-10 text-center hover:border-brand-accent">
      <span className="text-3xl">Upload</span>
      <span className="font-medium text-white">Click to select a PDF file</span>
      <span className="text-xs text-brand-secondary">Only one file at a time</span>
      <input type="file" accept="application/pdf" onChange={handleFileSelect} className="hidden" />
    </label>
  );

  const fileInfoBox = hasFile ? (
    <div className="mt-6 rounded-lg border border-white/5 bg-brand-bg p-4">
      <p className="text-sm text-white">{file?.name}</p>
      <p className="mt-1 text-xs text-brand-secondary">{originalSizeLabel}</p>
    </div>
  ) : null;

  const resultBox = showResult ? (
    <div className="mt-6 rounded-lg bg-brand-bg p-6 text-center">
      <p className="mb-2 text-sm font-medium text-white">Your compressed PDF is ready.</p>
      <p className="mb-4 text-xs text-brand-secondary">{originalSizeLabel} to {compressedSizeLabel}{savedLabel}</p>
      <a href={anchorHref} download="compressed.pdf" className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Download Compressed PDF</a>
    </div>
  ) : null;

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      {uploadBox}
      {fileInfoBox}
      <div className="mt-6 flex w-full justify-center">
        <Button type="button" onClick={handleCompress} className="w-full max-w-xs sm:w-auto">
          {isProcessing ? "Compressing..." : "Compress PDF"}
        </Button>
      </div>
      {errorBox}
      {resultBox}
      <p className="mt-6 text-xs text-brand-secondary">Your file is processed entirely in your browser. Nothing is uploaded to any server. Savings vary depending on the PDF, files with large embedded images typically compress the most.</p>
    </div>
  );
}