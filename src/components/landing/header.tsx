import Link from "next/link";
import { Button } from "@/components/ui/button";
import TaglineGenerator from "./program-quiz";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary">
          <span className="text-lg">RUPIECE</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/#programs"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Programs
          </Link>
          <Link
            href="/#testimonials"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Testimonials
          </Link>
          <Link
            href="/rules-faq"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Rules & FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <TaglineGenerator />
        </div>
      </div>
    </header>
  );
}
