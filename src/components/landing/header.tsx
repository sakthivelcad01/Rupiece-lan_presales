import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
        <Rocket className="h-6 w-6 text-primary" />
        <span className="text-2xl font-bold font-headline">Rupiece</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Button asChild>
          <Link href="#tagline-generator">Get Started</Link>
        </Button>
      </nav>
    </header>
  );
}
