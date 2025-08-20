
import { IndianRupee } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function BuiltForTraders() {
  return (
    <section id="built-for-traders" className="w-full py-16 md:py-24 bg-accent overflow-hidden">
      <ScrollReveal className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
              Built for Indian Traders, by Indian Traders
            </h2>
            <p className="text-muted-foreground">
              RUPIECE was founded with a single mission: to empower talented traders in
              India with the capital and technology they need to succeed. We understand the
              unique challenges and opportunities of the Indian market because we live and
              breathe it every day.
            </p>
            <p className="text-muted-foreground">
              Our team consists of experienced professionals who have navigated the
              complexities of the NSE and BSE for years. We believe that by removing the
              barrier of initial capital, we can unlock the full potential of the next generation of
              trading superstars.
            </p>
            <p className="text-muted-foreground">
              We are more than just a prop firm; we are a community dedicated to fostering
              growth, discipline, and success. Join us and become part of a new era in Indian
              trading.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-8 bg-primary/10 rounded-full">
                <IndianRupee className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
