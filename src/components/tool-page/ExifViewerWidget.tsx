"use client";

import { useState } from "react";
import { parseExif, ExifTag } from "@/utils/calculators/exif-parser";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function ExifViewerWidget() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState(0);
  const [tags, setTags] = useState<ExifTag[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    setTags([]);
    setChecked(false);

    const selected = e.target.files ? e.target.files[0] : null;
    if (!selected) return;

    if (!selected.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    setFileName(selected.name);
    setFileSize(selected.size);
    setIsProcessing(true);

    try {
      const buffer = await selected.arrayBuffer();
      const result = parseExif(buffer);
      setTags(result.tags);
      setChecked(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not read EXIF data from this file.");
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-white/20 bg-brand-bg px-6 py-10 text-center hover:border-brand-accent">
        <span className="font-medium text-white">Click to select a JPEG image</span>
        <span className="text-xs text-brand-secondary">EXIF data is most commonly found in photos from cameras and phones</span>
        <input type="file" accept="image/jpeg" onChange={handleFileSelect} className="hidden" />
      </label>

      {fileName && (
        <div className="mt-4 rounded-lg border border-white/5 bg-brand-bg p-4">
          <p className="text-sm text-white">{fileName}</p>
          <p className="mt-1 text-xs text-brand-secondary">{formatBytes(fileSize)}</p>
        </div>
      )}

      {isProcessing && <p className="mt-6 text-sm text-brand-secondary">Reading file...</p>}

      {error && <p className="mt-6 text-sm font-medium text-red-400">{error}</p>}

      {checked && !error && tags.length === 0 && (
        <p className="mt-6 text-sm text-brand-secondary">No EXIF data was found in this file.</p>
      )}

      {tags.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-lg border border-white/5">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-bg text-xs uppercase text-brand-secondary">
              <tr>
                <th className="px-4 py-3">Tag</th>
                <th className="px-4 py-3">Value</th>
              </tr>
            </thead>
            <tbody>
              {tags.map((tag) => (
                <tr key={tag.label} className="border-t border-white/5">
                  <td className="px-4 py-2 text-white">{tag.label}</td>
                  <td className="px-4 py-2 text-brand-secondary">{tag.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-6 text-xs text-brand-secondary">Your image is read entirely in your browser. Nothing is uploaded to any server.</p>
    </div>
  );
}
