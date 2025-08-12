import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import Features from "@/components/landing/features";
import { ProgramListings } from "@/components/landing/program-listings";
import { Footer } from "@/components/landing/footer";
import { WhyUs } from "@/components/landing/why-us";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Features />
        <ProgramListings />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
