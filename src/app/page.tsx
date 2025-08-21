
"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { WhyUs } from "@/components/landing/why-us";
import { ProgramListings } from "@/components/landing/program-listings";
import { BuiltForTraders } from "@/components/landing/about-us";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { GiveawayDialog } from "@/components/landing/giveaway-dialog";

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState<number>(1000000);

  const handleProgramSelect = (programSize: number) => {
    setSelectedProgram(programSize);
    const programsSection = document.getElementById("programs");
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <GiveawayDialog />
      <Header onProgramSelect={handleProgramSelect} />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <ProgramListings selectedSize={selectedProgram} setSelectedSize={setSelectedProgram} />
        <BuiltForTraders />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
