import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cta() {
  return (
    <section className="w-full bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Your trading future is just a click away. Get funded and start earning.
        </p>
        <Button asChild size="lg">
          <Link href="/#programs">Pre Register Now</Link>
        </Button>
      </div>
    </section>
  );
}
