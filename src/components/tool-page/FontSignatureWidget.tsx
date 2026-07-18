"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SIGNATURE_FONT_OPTIONS } from "@/lib/signatureFonts";

export function FontSignatureWidget() {
  const [name, setName] = useState("Your Name");
  const [fontKey, setFontKey] = useState("dancing");
  const [color, setColor] = useState("#111827");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const selectedFont = SIGNATURE_FONT_OPTIONS.find((f) => f.key === fontKey) || SIGNATURE_FONT_OPTIONS[0];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "64px " + selectedFont.family;
      ctx.fillStyle = color;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(name || "Your Name", canvas.width / 2, canvas.height / 2);
    }

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(draw);
    } else {
      draw();
    }
  }, [name, color, selectedFont]);

  function handleDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "signature.png";
    link.click();
  }

  return (
    <div className="rounded-xl border border-white/5 bg-brand-card p-6 sm:p-8">
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Your Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Font Style
          <select
            value={fontKey}
            onChange={(e) => setFontKey(e.target.value)}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 text-white focus:border-brand-accent focus:outline-none"
          >
            {SIGNATURE_FONT_OPTIONS.map((f) => (
              <option key={f.key} value={f.key}>{f.label}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-white">
          Color
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="rounded-lg border border-white/10 bg-brand-bg px-4 py-2.5 font-mono text-white focus:border-brand-accent focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-6 rounded-lg border border-white/10 bg-white p-4">
        <canvas ref={canvasRef} width={600} height={200} className="w-full" />
      </div>

      <div className="mt-6 flex w-full justify-center">
        <Button type="button" onClick={handleDownload} className="w-full max-w-xs sm:w-auto">
          Download Signature
        </Button>
      </div>

      <p className="mt-6 text-xs text-brand-secondary">
        Your signature is generated entirely in your browser and never leaves your device.
      </p>
    </div>
  );
}