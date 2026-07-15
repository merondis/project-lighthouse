import { SearchBar } from "@/components/home/SearchBar";
import { Rocket } from "lucide-react";

export function Hero() {
  return (
    <div className="py-16 text-center sm:py-20">
     <div className="mb-4 flex justify-center" aria-hidden="true">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-card text-brand-accent">
          <Rocket className="h-8 w-8" />
        </span>
      </div>
      <h1 className="text-4xl font-bold text-white sm:text-6xl">Merondis</h1>
      <p className="mt-4 text-lg text-brand-secondary sm:text-xl">Free Online Tools &amp; Calculators</p>

      <div className="mx-auto mt-10 max-w-xl">
        <SearchBar />
      </div>
    </div>
  );
}