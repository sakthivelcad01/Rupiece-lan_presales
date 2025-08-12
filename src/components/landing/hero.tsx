import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none">
                Rupiece: AI-Powered Tagline Generator
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Unlock your brand's potential. Generate hundreds of creative, relevant taglines in seconds. Let our AI find the perfect words to tell your story.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#tagline-generator">
                  Generate Your Tagline
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            width="600"
            height="400"
            alt="Hero"
            data-ai-hint="creativity abstract"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
