import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/5 bg-brand-bg py-8">
      <Container className="text-center">
        <p className="text-sm text-white">© {year} Merondis</p>
        <p className="mt-1 text-sm text-brand-secondary">
          Free Online Calculators, Converters &amp; Developer Tools
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-brand-secondary">
          <a href="/privacy-policy" className="hover:text-brand-accent">Privacy Policy</a>
          <a href="/terms" className="hover:text-brand-accent">Terms</a>
          <a href="/disclaimer" className="hover:text-brand-accent">Disclaimer</a>
          <a href="/contact" className="hover:text-brand-accent">Contact</a>
        </div>
      </Container>
    </footer>
  );
}