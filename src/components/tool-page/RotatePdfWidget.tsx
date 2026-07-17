"use client";

import { useState } from "react";
import { PDFDocument, degrees } from "pdf-lib";
import { Button } from "@/components/ui/Button";

export function RotatePdfWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState("90");
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setDownloadUrl(null);

    const selected = e.target.files ? e.target.files[0] : null;
    if (!selected) return;

    if (selected.type !== "application/pdf") {
      setError("Please select a PDF file.");
      return;
    }

    setFile(selected);
  }

  async function handleRotate() {
    setError(null);
    setDownloadUrl(null);

    if (!file) {
      setError("Please select a PDF file first.");
      return;
    }

    setIsProcessing(true);

    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);
      const pages = pdfDoc.getPages();
      const degreesValue = Number(rotation);

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees(currentRotation + degreesValue));
      }

      const newBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(newBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to rotate PDF: " + err.message);
      } else {
        setError("Failed to rotate PDF. It may be corrupted or password protected.");
      }
    } finally {
      setIsProcessing(false);
    }
  }

  const hasFile = file !== null;
  const showResult = downloadUrl !== null && error === null;
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
    </div>
  ) : null;

  const resultBox = showResult ? (
    <div className="mt-6 rounded-lg bg-brand-bg p-6 text-center">
      <p className="mb-3 text-sm font-medium text-white">Your rotated PDF is ready.</p>
      <a href={anchorHref} download="rotated.pdf" className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Download PDF</a>
    </div>
  ) : null;

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      {uploadBox}
      {fileInfoBox}

      <label className="mt-6 flex flex-col gap-2 text-sm font-medium text-white">
        Rotate By
        <select
          value={rotation}
          onChange={(e) => setRotation(e.target.value)}
          className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
        >
          <option value="90">90° Clockwise</option>
          <option value="180">180°</option>
          <option value="270">90° Counter-Clockwise</option>
        </select>
      </label>

      <div className="mt-6 flex w-full justify-center">
        <Button type="button" onClick={handleRotate} className="w-full max-w-xs sm:w-auto">
          {isProcessing ? "Rotating..." : "Rotate PDF"}
        </Button>
      </div>

      {errorBox}
      {resultBox}

      <p className="mt-6 text-xs text-brand-secondary">Your file is processed entirely in your browser. Nothing is uploaded to any server.</p>
    </div>
  );
}