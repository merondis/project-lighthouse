"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Button } from "@/components/ui/Button";

interface PdfFile {
  id: string;
  file: File;
}

export function MergePdfWidget() {
  const [files, setFiles] = useState<PdfFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMerging, setIsMerging] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setDownloadUrl(null);

    const selected = Array.from(e.target.files ?? []);
    const nonPdf = selected.find((f) => f.type !== "application/pdf");

    if (nonPdf) {
      setError("One of the selected files is not a PDF. Please select PDF files only.");
      return;
    }

    const newFiles = selected.map((file) => ({
      id: file.name + "-" + file.size + "-" + Date.now() + "-" + Math.random(),
      file: file,
    }));

    setFiles((prev) => prev.concat(newFiles));
    e.target.value = "";
  }

  function removeFile(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    setDownloadUrl(null);
  }

  function moveFile(index: number, direction: number) {
    setFiles((prev) => {
      const next = prev.slice();
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= next.length) return prev;
      const temp = next[index];
      next[index] = next[targetIndex];
      next[targetIndex] = temp;
      return next;
    });
    setDownloadUrl(null);
  }

  async function handleMerge() {
    setError(null);
    setDownloadUrl(null);

    if (files.length < 2) {
      setError("Please add at least 2 PDF files to merge.");
      return;
    }

    setIsMerging(true);

    try {
      const mergedPdf = await PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        const bytes = await files[i].file.arrayBuffer();
        const sourcePdf = await PDFDocument.load(bytes);
        const pageIndices = sourcePdf.getPageIndices();
        const copiedPages = await mergedPdf.copyPages(sourcePdf, pageIndices);
        for (let p = 0; p < copiedPages.length; p++) {
          mergedPdf.addPage(copiedPages[p]);
        }
      }

      const mergedBytes = await mergedPdf.save();
      const blob = new Blob([new Uint8Array(mergedBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to merge PDFs: " + err.message);
      } else {
        setError("Failed to merge PDFs. Please check that all files are valid PDFs.");
      }
    } finally {
      setIsMerging(false);
    }
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-white/20 bg-brand-bg px-6 py-10 text-center hover:border-brand-accent">
        <span className="text-3xl">Upload</span>
        <span className="font-medium text-white">Click to select PDF files</span>
        <span className="text-xs text-brand-secondary">You can select multiple files at once, or add more below</span>
        <input type="file" accept="application/pdf" multiple onChange={handleFileSelect} className="hidden" />
      </label>

      {files.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-2">
          {files.map((item, index) => (
            <li key={item.id} className="flex items-center gap-3 rounded-lg border border-white/5 bg-brand-bg px-4 py-3">
              <span className="text-sm text-brand-secondary">{index + 1}.</span>
              <span className="flex-1 truncate text-sm text-white">{item.file.name}</span>
              <span className="text-xs text-brand-secondary">{Math.round(item.file.size / 1024)} KB</span>
              <button type="button" onClick={() => moveFile(index, -1)} disabled={index === 0} aria-label="Move up" className="rounded px-2 py-1 text-white hover:bg-white/10 disabled:opacity-30">Up</button>
              <button type="button" onClick={() => moveFile(index, 1)} disabled={index === files.length - 1} aria-label="Move down" className="rounded px-2 py-1 text-white hover:bg-white/10 disabled:opacity-30">Down</button>
              <button type="button" onClick={() => removeFile(item.id)} aria-label="Remove file" className="rounded px-2 py-1 text-red-400 hover:bg-white/10">Remove</button>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6 flex justify-center">
        <Button type="button" onClick={handleMerge} className="w-full sm:w-auto">
          {isMerging ? "Merging..." : "Merge PDFs"}
        </Button>
      </div>

      {error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null}

      {downloadUrl && !error ? (
        <div className="mt-6 rounded-lg bg-brand-bg p-6 text-center">
          <p className="mb-3 text-sm font-medium text-white">Your merged PDF is ready.</p>
          <a href={downloadUrl} download="merged.pdf" className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            Download Merged PDF
          </a>
        </div>
      ) : null}

      <p className="mt-6 text-xs text-brand-secondary">
        Your files are processed entirely in your browser. Nothing is uploaded to any server.
      </p>
    </div>
  );
}