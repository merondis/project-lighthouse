import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-card text-brand-accent">
            <SearchX className="h-8 w-8" />
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-brand-secondary">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s
          get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="/">Go to Homepage</Button>
          <Button href="/tools" variant="secondary">
            Browse All Tools
          </Button>
        </div>

        <p className="mt-8 text-sm text-brand-secondary">
          Or{" "}
          <Link href="/search" className="text-brand-accent hover:underline">
            search for a specific tool
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}