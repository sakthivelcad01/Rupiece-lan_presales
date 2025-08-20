
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProgramQuizDialog } from "@/components/landing/program-quiz-dialog";
import { ThemeToggle } from "@/components/theme-toggle";

interface HeaderProps {
  onProgramSelect: (programSize: number) => void;
}

export function Header({ onProgramSelect }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 max-w-screen-2xl mx-auto items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-primary">
          RUPIECE
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
           <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Home
          </Link>
          <Link
            href="/#programs"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Programs
          </Link>
          <Link
            href="/rules-faq"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Rules & FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <ProgramQuizDialog onProgramSelect={onProgramSelect}>
             <Button>Find Your Program</Button>
          </ProgramQuizDialog>
        </div>
      </div>
    </header>
  );
}
