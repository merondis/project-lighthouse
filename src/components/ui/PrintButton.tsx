"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  function handlePrint() {
    window.print();
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="print:hidden inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white hover:border-brand-accent hover:text-brand-accent"
    >
      <Printer className="h-4 w-4" />
      Print / Save as PDF
    </button>
  );
}