"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toolRegistry } from "@/data/tools/registry";
import { Container } from "@/components/ui/Container";

const MAX_DROPDOWN_RESULTS = 8;

const LIVE_TOOL_COUNT = toolRegistry.filter((tool) => tool.status === "live").length;
const DISPLAY_TOOL_COUNT = Math.floor(LIVE_TOOL_COUNT / 10) * 10;

export function StickySearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return toolRegistry
      .filter(
        (tool) =>
          tool.title.toLowerCase().includes(q) ||
          tool.category.toLowerCase().includes(q) ||
          tool.shortDescription.toLowerCase().includes(q)
      )
      .slice(0, MAX_DROPDOWN_RESULTS);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function goToSearchPage() {
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setIsOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    goToSearchPage();
  }

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <div className="sticky top-0 z-40 border-b border-white/5 bg-brand-card print:hidden">
      <Container>
        <div ref={wrapperRef} className="relative mx-auto w-full py-2.5 md:w-1/3">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary">
                🔍
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsOpen(true)}
                placeholder={`Search ${DISPLAY_TOOL_COUNT}+ tools...`}
                aria-label="Search tools"
                className="w-full rounded-lg border border-white/10 bg-brand-bg py-2 pl-9 pr-4 text-sm text-white placeholder:text-brand-secondary focus:border-brand-accent focus:outline-none"
              />
            </div>
          </form>

          {showDropdown && (
            <ul className="absolute left-0 right-0 top-full z-10 mt-2 max-h-[70vh] overflow-y-auto rounded-lg border border-white/10 bg-brand-card text-left shadow-xl">
              {results.length > 0 ? (
                <>
                  {results.map((tool) => (
                    <li key={tool.slug}>
                      <Link
                        href={tool.status === "live" ? `/tools/${tool.category}/${tool.slug}` : "#"}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/5"
                      >
                        <span>{tool.icon}</span>
                        <span>{tool.title}</span>
                        {tool.status === "comingSoon" ? (
                          <span className="ml-auto text-xs text-brand-secondary">Coming Soon</span>
                        ) : (
                          <span className="ml-auto text-xs capitalize text-brand-secondary">
                            {tool.category.replace("-", " ")}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      onClick={goToSearchPage}
                      className="w-full px-4 py-3 text-left text-sm font-medium text-brand-accent hover:bg-white/5"
                    >
                      See all results for &quot;{query}&quot; →
                    </button>
                  </li>
                </>
              ) : (
                <li className="px-4 py-3 text-sm text-brand-secondary">No tools found for &quot;{query}&quot;.</li>
              )}
            </ul>
          )}
        </div>
      </Container>
    </div>
  );
}
