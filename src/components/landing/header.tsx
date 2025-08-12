
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProgramQuizDialog } from "@/components/landing/program-quiz-dialog";

interface HeaderProps {
  onProgramSelect: (programSize: number) => void;
}

export function Header({ onProgramSelect }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary">
          <svg
            className="h-6 w-auto"
            viewBox="0 0 160 30"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="22"
              fontFamily="Montserrat, sans-serif"
              fontSize="24"
              fontWeight="bold"
              letterSpacing="0.05em"
            >
              RUPIECE
            </text>
            <rect x="148" y="0" width="8" height="30" />
          </svg>
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
          <ProgramQuizDialog onProgramSelect={onProgramSelect} />
        </div>
      </div>
    </header>
  );
}
