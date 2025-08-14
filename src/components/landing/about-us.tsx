import Image from "next/image";

export function AboutUs() {
  return (
    <section id="about" className="w-full bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
              Built for Indian Traders, by Indian Traders
            </h2>
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
          <div className="order-1 flex justify-center md:order-2">
            <Image
              src="https://placehold.co/256x256.png"
              alt="Placeholder image"
              width={256}
              height={256}
              className="rounded-full object-cover"
              data-ai-hint="traders community"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
