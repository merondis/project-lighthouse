"use client";

import { useState } from "react";
import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";
import { Button } from "@/components/ui/Button";

export function WatermarkPdfWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [watermarkText, setWatermarkText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState("0.3");
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

  async function handleApply() {
    setError(null);
    setDownloadUrl(null);

    if (!file) {
      setError("Please select a PDF file first.");
      return;
    }
    if (!watermarkText.trim()) {
      setError("Please enter watermark text.");
      return;
    }

    setIsProcessing(true);

    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);
      const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const pages = pdfDoc.getPages();
      const opacityValue = Number(opacity);
      const finalOpacity = Number.isNaN(opacityValue) ? 0.3 : opacityValue;

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const size = page.getSize();
        const fontSize = Math.min(size.width, size.height) / 8;
        const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);

        page.drawText(watermarkText, {
          x: size.width / 2 - textWidth / 2,
          y: size.height / 2,
          size: fontSize,
          font: font,
          color: rgb(0.5, 0.5, 0.5),
          opacity: finalOpacity,
          rotate: degrees(45),
        });
      }

      const newBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(newBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to add watermark: " + err.message);
      } else {
        setError("Failed to add watermark. The file may be corrupted or password protected.");
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
      <p className="mb-3 text-sm font-medium text-white">Your watermarked PDF is ready.</p>
      <a href={anchorHref} download="watermarked.pdf" className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Download PDF</a>
    </div>
  ) : null;

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      {uploadBox}
      {fileInfoBox}

      <label className="mt-6 flex flex-col gap-2 text-sm font-medium text-white">
        Watermark Text
        <input
          type="text"
          value={watermarkText}
          onChange={(e) => setWatermarkText(e.target.value)}
          className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
        />
      </label>

      <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-white">
        Opacity (0.1 to 1)
        <input
          type="number"
          min={0.1}
          max={1}
          step={0.1}
          value={opacity}
          onChange={(e) => setOpacity(e.target.value)}
          className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
        />
      </label>

      <div className="mt-6 flex w-full justify-center">
        <Button type="button" onClick={handleApply} className="w-full max-w-xs sm:w-auto">
          {isProcessing ? "Applying..." : "Add Watermark"}
        </Button>
      </div>

      {errorBox}
      {resultBox}

      <p className="mt-6 text-xs text-brand-secondary">Your file is processed entirely in your browser. Nothing is uploaded to any server.</p>
    </div>
  );
}