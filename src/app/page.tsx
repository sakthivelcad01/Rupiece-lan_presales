import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { WhyUs } from "@/components/landing/why-us";
import { ProgramListings } from "@/components/landing/program-listings";
import { Testimonials } from "@/components/landing/testimonials";
import { AboutUs } from "@/components/landing/about-us";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";


export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <ProgramListings />
        <Testimonials />
        <AboutUs />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
