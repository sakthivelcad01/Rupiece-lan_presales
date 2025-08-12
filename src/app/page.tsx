import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import Features from "@/components/landing/features";
import TaglineGenerator from "@/components/landing/program-quiz";
import { ProgramListings } from "@/components/landing/program-listings";
import ContactForm from "@/components/landing/contact-form";
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
        <TaglineGenerator />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
