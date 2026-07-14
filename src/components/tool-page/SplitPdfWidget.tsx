"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Button } from "@/components/ui/Button";

export function SplitPdfWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [startPage, setStartPage] = useState("1");
  const [endPage, setEndPage] = useState("1");
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setDownloadUrl(null);
    setTotalPages(null);

    const selected = e.target.files ? e.target.files[0] : null;
    if (!selected) {
      return;
    }

    if (selected.type !== "application/pdf") {
      setError("Please select a PDF file.");
      return;
    }

    try {
      const bytes = await selected.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pageCount = pdf.getPageCount();

      setFile(selected);
      setTotalPages(pageCount);
      setStartPage("1");
      setEndPage(String(pageCount));
    } catch {
      setError("Unable to read this PDF. It may be corrupted or password protected.");
    }
  }

  async function handleSplit() {
    setError(null);
    setDownloadUrl(null);

    if (!file || totalPages === null) {
      setError("Please select a PDF file first.");
      return;
    }

    const start = Number(startPage);
    const end = Number(endPage);

    if (!start || !end || start < 1 || end > totalPages || start > end) {
      setError("Please enter a valid page range within 1 to " + totalPages + ".");
      return;
    }

    setIsProcessing(true);

    try {
      const bytes = await file.arrayBuffer();
      const sourcePdf = await PDFDocument.load(bytes);
      const newPdf = await PDFDocument.create();

      const pageIndices: number[] = [];
      let i = start - 1;
      while (i <= end - 1) {
        pageIndices.push(i);
        i = i + 1;
      }

      const copiedPages = await newPdf.copyPages(sourcePdf, pageIndices);
      let p = 0;
      while (p < copiedPages.length) {
        newPdf.addPage(copiedPages[p]);
        p = p + 1;
      }

      const newBytes = await newPdf.save();
      const blob = new Blob([new Uint8Array(newBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to split PDF: " + err.message);
      } else {
        setError("Failed to split PDF. Please try again.");
      }
    } finally {
      setIsProcessing(false);
    }
  }

  const hasFile = file !== null && totalPages !== null;
  const showResult = downloadUrl !== null && error === null;
  const anchorHref = downloadUrl ? downloadUrl : "#";
  const maxPages = totalPages ? totalPages : undefined;

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
      <p className="mt-1 text-xs text-brand-secondary">{totalPages} pages total</p>
    </div>
  ) : null;

  const rangeInputs = hasFile ? (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <label className="flex flex-col gap-2 text-sm font-medium text-white">
        From Page
        <input type="number" min={1} max={maxPages} value={startPage} onChange={(e) => setStartPage(e.target.value)} className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-white">
        To Page
        <input type="number" min={1} max={maxPages} value={endPage} onChange={(e) => setEndPage(e.target.value)} className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none" />
      </label>
    </div>
  ) : null;

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  const resultBox = showResult ? (
    <div className="mt-6 rounded-lg bg-brand-bg p-6 text-center">
      <p className="mb-3 text-sm font-medium text-white">Your split PDF is ready.</p>
      <a href={anchorHref} download="split.pdf" className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Download PDF</a>
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      {uploadBox}
      {fileInfoBox}
      {rangeInputs}
      <div className="mt-6 flex w-full justify-center">
        <Button type="button" onClick={handleSplit} className="w-full max-w-xs sm:w-auto">
          {isProcessing ? "Processing..." : "Split PDF"}
        </Button>
      </div>
      {errorBox}
      {resultBox}
      <p className="mt-6 text-xs text-brand-secondary">Your file is processed entirely in your browser. Nothing is uploaded to any server.</p>
    </div>
  );
}