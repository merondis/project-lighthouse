import { Rocket } from "lucide-react";

export function Hero() {
  return (
    <div className="py-[21.6px] text-center sm:py-[28.8px]">
     <div className="mb-4 flex justify-center" aria-hidden="true">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-card text-brand-accent">
          <Rocket className="h-8 w-8" />
        </span>
      </div>
      <h1 className="text-4xl font-bold text-white sm:text-6xl">Merondis</h1>
<p className="mt-[14.4px] text-lg text-brand-secondary sm:text-xl">
        300+ Free Online Tools, Calculators, Converters and Utilities
      </p>
      <p className="mt-[7.2px] text-base text-brand-secondary sm:text-lg">
        No sign-up required. Fast, accurate, and available on any device.
      </p>
    </div>
  );
}