
import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-muted">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
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
        <p className="text-sm text-muted-foreground">
          &copy; {year} RUPIECE Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
           <Link href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
