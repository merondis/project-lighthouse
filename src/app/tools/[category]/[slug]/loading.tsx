import { Container } from "@/components/ui/Container";

export default function ToolPageLoading() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl animate-pulse">
        <div className="h-4 w-48 rounded bg-brand-card" />

        <div className="mt-6 h-14 w-14 rounded-xl bg-brand-card" />
        <div className="mt-4 h-8 w-2/3 rounded bg-brand-card" />
        <div className="mt-3 h-4 w-full rounded bg-brand-card" />

        <div className="mt-8 h-24 rounded-lg bg-brand-card" />

        <div className="mt-8 h-64 rounded-xl bg-brand-card" />
      </div>
    </Container>
  );
}