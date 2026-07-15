"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/categories", label: "Categories" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/5 bg-brand-bg">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Merondis
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm font-medium text-white hover:text-brand-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-2xl">☰</span>
          </button>
        </nav>

        {open && (
          <ul className="flex flex-col gap-4 pb-6 md:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-white hover:text-brand-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </header>
  );
}