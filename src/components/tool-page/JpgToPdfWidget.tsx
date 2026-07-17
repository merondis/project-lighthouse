"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { Button } from "@/components/ui/Button";

interface ImageFile {
  id: string;
  file: File;
}

export function JpgToPdfWidget() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setDownloadUrl(null);

    const selected = Array.from(e.target.files ? e.target.files : []);
    const invalid = selected.find(
      (f) => f.type !== "image/jpeg" && f.type !== "image/png"
    );

    if (invalid) {
      setError("Please select only JPG or PNG images.");
      return;
    }

    const newImages = selected.map((file) => ({
      id: file.name + "-" + file.size + "-" + Date.now() + "-" + Math.random(),
      file: file,
    }));

    setImages((prev) => prev.concat(newImages));
    e.target.value = "";
  }

  function removeImage(id: string) {
    setImages((prev) => prev.filter((img) => img.id !== id));
    setDownloadUrl(null);
  }

  function moveImage(index: number, direction: number) {
    setImages((prev) => {
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

  async function handleConvert() {
    setError(null);
    setDownloadUrl(null);

    if (images.length === 0) {
      setError("Please add at least one image.");
      return;
    }

    setIsProcessing(true);

    try {
      const pdfDoc = await PDFDocument.create();

      for (let i = 0; i < images.length; i++) {
        const imgFile = images[i].file;
        const bytes = await imgFile.arrayBuffer();

        let embedded;
        if (imgFile.type === "image/png") {
          embedded = await pdfDoc.embedPng(bytes);
        } else {
          embedded = await pdfDoc.embedJpg(bytes);
        }

        const page = pdfDoc.addPage([embedded.width, embedded.height]);
        page.drawImage(embedded, {
          x: 0,
          y: 0,
          width: embedded.width,
          height: embedded.height,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to create PDF: " + err.message);
      } else {
        setError("Failed to create PDF. Please try again.");
      }
    } finally {
      setIsProcessing(false);
    }
  }

  const hasImages = images.length > 0;
  const showResult = downloadUrl !== null && error === null;
  const anchorHref = downloadUrl ? downloadUrl : "#";

  const uploadBox = (
    <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-white/20 bg-brand-bg px-6 py-10 text-center hover:border-brand-accent">
      <span className="text-3xl">Upload</span>
      <span className="font-medium text-white">Click to select JPG or PNG images</span>
      <span className="text-xs text-brand-secondary">You can select multiple images at once</span>
      <input type="file" accept="image/jpeg,image/png" multiple onChange={handleFileSelect} className="hidden" />
    </label>
  );

  const imageList = hasImages ? (
    <ul className="mt-6 flex flex-col gap-2">
      {images.map((item, index) => (
        <li key={item.id} className="flex items-center gap-3 rounded-lg border border-white/5 bg-brand-bg px-4 py-3">
          <span className="text-sm text-brand-secondary">{index + 1}.</span>
          <span className="flex-1 truncate text-sm text-white">{item.file.name}</span>
          <span className="text-xs text-brand-secondary">{Math.round(item.file.size / 1024)} KB</span>
          <button type="button" onClick={() => moveImage(index, -1)} disabled={index === 0} className="rounded px-2 py-1 text-white hover:bg-white/10 disabled:opacity-30">Up</button>
          <button type="button" onClick={() => moveImage(index, 1)} disabled={index === images.length - 1} className="rounded px-2 py-1 text-white hover:bg-white/10 disabled:opacity-30">Down</button>
          <button type="button" onClick={() => removeImage(item.id)} className="rounded px-2 py-1 text-red-400 hover:bg-white/10">Remove</button>
        </li>
      ))}
    </ul>
  ) : null;

  const errorBox = error ? <p className="mt-6 text-sm font-medium text-red-400">{error}</p> : null;

  const resultBox = showResult ? (
    <div className="mt-6 rounded-lg bg-brand-bg p-6 text-center">
      <p className="mb-3 text-sm font-medium text-white">Your PDF is ready.</p>
      <a href={anchorHref} download="images.pdf" className="inline-flex items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Download PDF</a>
    </div>
  ) : null;

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      {uploadBox}
      {imageList}

      <div className="mt-6 flex w-full justify-center">
        <Button type="button" onClick={handleConvert} className="w-full max-w-xs sm:w-auto">
          {isProcessing ? "Converting..." : "Convert to PDF"}
        </Button>
      </div>

      {errorBox}
      {resultBox}

      <p className="mt-6 text-xs text-brand-secondary">Your images are processed entirely in your browser. Nothing is uploaded to any server.</p>
    </div>
  );
}