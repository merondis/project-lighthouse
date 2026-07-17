"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface ConvertedPage {
  pageNumber: number;
  dataUrl: string;
}

export function PdfToJpgWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pages, setPages] = useState<ConvertedPage[]>([]);
  const [zipUrl, setZipUrl] = useState<string | null>(null);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setPages([]);
    setZipUrl(null);

    const selected = e.target.files ? e.target.files[0] : null;
    if (!selected) return;

    if (selected.type !== "application/pdf") {
      setError("Please select a PDF file.");
      return;
    }

    setFile(selected);
  }

  async function handleConvert() {
    setError(null);
    setPages([]);
    setZipUrl(null);

    if (!file) {
      setError("Please select a PDF file first.");
      return;
    }

    setIsProcessing(true);

    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + pdfjsLib.version + "/pdf.worker.min.mjs";

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      const convertedPages: ConvertedPage[] = [];
      const numPages = pdf.numPages;

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 2 });

        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const context = canvas.getContext("2d");

        if (!context) {
          throw new Error("Unable to prepare image rendering.");
        }

        await page.render({ canvasContext: context, viewport, canvas }).promise;

        const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
        convertedPages.push({ pageNumber: pageNum, dataUrl: dataUrl });
      }

      setPages(convertedPages);

      if (convertedPages.length > 1) {
        const JSZip = (await import("jszip")).default;
        const zip = new JSZip();

        for (let i = 0; i < convertedPages.length; i++) {
          const p = convertedPages[i];
          const base64Data = p.dataUrl.split(",")[1];
          zip.file("page-" + p.pageNumber + ".jpg", base64Data, { base64: true });
        }

        const zipBlob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(zipBlob);
        setZipUrl(url);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to convert PDF: " + err.message);
      } else {
        setError("Failed to convert PDF. It may be corrupted or password protected.");
      }
    } finally {
      setIsProcessing(false);
    }
  }

  const hasFile = file !== null;
  const hasPages = pages.length > 0;
  const zipHref = zipUrl ? zipUrl : "#";

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

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  const zipDownloadBox = zipUrl ? (
    <div className="mb-4 flex justify-center">
      <a href={zipHref} download="pdf-pages.zip" className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Download All as ZIP</a>
    </div>
  ) : null;

  const pageGrid = hasPages ? (
    <div className="mt-6">
      <p className="mb-3 text-sm font-medium text-white">
        {pages.length} page{pages.length === 1 ? "" : "s"} converted
      </p>

      {zipDownloadBox}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {pages.map((p) => (
          <div key={p.pageNumber} className="rounded-lg border border-white/5 bg-brand-bg p-2">
            <img src={p.dataUrl} alt={"Page " + p.pageNumber} className="w-full rounded" />
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs text-brand-secondary">Page {p.pageNumber}</span>
              <a href={p.dataUrl} download={"page-" + p.pageNumber + ".jpg"} className="text-xs font-medium text-brand-accent hover:underline">Download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      {uploadBox}
      {fileInfoBox}

      <div className="mt-6 flex w-full justify-center">
        <Button type="button" onClick={handleConvert} className="w-full max-w-xs sm:w-auto">
          {isProcessing ? "Converting..." : "Convert to JPG"}
        </Button>
      </div>

      {errorBox}
      {pageGrid}

      <p className="mt-6 text-xs text-brand-secondary">Your file is processed entirely in your browser. Nothing is uploaded to any server.</p>
    </div>
  );
}