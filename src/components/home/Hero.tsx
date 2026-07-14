import { SearchBar } from "@/components/home/SearchBar";

export function Hero() {
  return (
    <div className="py-16 text-center sm:py-20">
      <div className="mb-4 text-5xl">🚀</div>
      <h1 className="text-4xl font-bold text-white sm:text-6xl">Project Lighthouse</h1>
      <p className="mt-4 text-lg text-brand-secondary sm:text-xl">100+ Free Online Tools &amp; Calculators</p>

      <div className="mx-auto mt-10 max-w-xl">
        <SearchBar />
      </div>
    </div>
  );
}