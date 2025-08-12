import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import TaglineGenerator from "@/components/landing/tagline-generator";
import SocialProof from "@/components/landing/social-proof";
import ContactForm from "@/components/landing/contact-form";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <TaglineGenerator />
        <SocialProof />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
