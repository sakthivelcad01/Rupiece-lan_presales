import { IndianRupee } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="w-full bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center gap-4 mb-4">
                <IndianRupee className="h-10 w-10 text-primary" />
                <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
                Built for Indian Traders, by Indian Traders
                </h2>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              RUPIECE was founded with a single mission: to empower talented traders in India with the capital and technology they need to succeed. We understand the unique challenges and opportunities of the Indian market because we live and breathe it every day.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team consists of experienced professionals who have navigated the complexities of the NSE and BSE for years. We believe that by removing the barrier of initial capital, we can unlock the full potential of the next generation of trading superstars.
            </p>
             <p className="mt-4 text-lg text-muted-foreground">
              We are more than just a prop firm; we are a community dedicated to fostering growth, discipline, and success. Join us and become part of a new era in Indian trading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
