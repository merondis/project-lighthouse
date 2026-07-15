export function AdSensePlaceholder({ label }: { label?: string }) {
  return (
    <div className="print:hidden flex min-h-[120px] w-full items-center justify-center rounded-lg border border-dashed border-white/20 bg-brand-card/50 px-4 py-8 text-center">
      <div>
        <p className="text-sm font-medium text-white">Google AdSense Banner</p>
        <p className="mt-1 text-xs text-brand-secondary">
          {label ?? "This area will contain advertisements after approval."}
        </p>
      </div>
    </div>
  );
}