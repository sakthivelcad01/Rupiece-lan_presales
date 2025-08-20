
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Hero() {
  return (
    <section
      className="relative w-full bg-center bg-no-repeat bg-fixed bg-muted"
      style={{ 
        backgroundImage: "url('https://i.postimg.cc/02rDk9DK/resized-image-Promo-removebg-preview.png')",
        backgroundSize: "80%" 
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4 py-8 md:py-12 text-foreground">
        <ScrollReveal>
          <div className="mb-2 text-left">
            <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary md:text-6xl lg:text-7xl">
                <Typewriter
                options={{
                  strings: ["RUPIECE"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mt-1 text-xl font-semibold text-muted-foreground">exactly what you want!</p>
          </div>
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 text-left mb-12 mt-8">
              <div className="space-y-2">
                <p className="max-w-xl text-lg md:text-xl">
                  Stop guessing. Start winning. RUPIECE matches you with the perfect
                  proprietary trading program based on your unique style and goals.
                </p><br/>
                <p className="max-w-xl text-lg md:text-xl pt-4">
                    Prove your trading skills in our evaluation program and get access to our capital to trade NSE & BSE markets. Keep the majority of your profits — trade bigger, grow faster, without risking your own money.
                </p>
                <div className="pt-6 flex flex-col items-start md:flex-row">
                  <Link href="#programs">
                    <Button size="lg" className="w-full md:w-auto">
                      Explore Programs
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-center items-center gap-4">
                <Image
                  src="https://i.postimg.cc/pLQdZQws/Forex.png"
                  alt="Successful trader"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover"
                  data-ai-hint="trader looking at screen"
                />
              </div>
          </div><br/>
            <h1 className="text-center font-headline text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl mt-12">
              Trade Smart, Get Funded, Grow Big
            </h1><br/>
            <p className="text-center text-xl font-semibold text-muted-foreground mt-2">we take your loss, you keep your profit</p>
            <br/>
        </ScrollReveal>
      </div>
    </section>
  );
}
