
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export function Hero() {
  return (
    <section
      className="relative w-full bg-muted"
    >
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 text-left mb-12">
                <div className="space-y-6">
                    <div className="mb-8">
                      <h1 className="font-headline text-5xl font-extrabold text-primary md:text-6xl lg:text-7xl">
                         <Typewriter
                          options={{
                            strings: ['RUPIECE'],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </h1>
                      <p className="mt-2 text-lg font-semibold text-muted-foreground">exactly what you want!</p>
                    </div>
                  <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                    Stop guessing. Start winning. RUPIECE matches you with the perfect
                    proprietary trading program based on your unique style and goals.
                  </p>
                   <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                     Prove your trading skills in our evaluation program and get access to our capital to trade NSE & BSE markets. Keep the majority of your profits — trade bigger, grow faster, without risking your own money.
                  </p>
                  <div className="flex flex-col items-start gap-4 md:flex-row">
                    <Button size="lg" asChild>
                      <Link href="#programs">
                        Explore Programs
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative flex justify-center items-center">
                  <Image
                    src="https://i.postimg.cc/7Pm7tKYc/img-3-removebg-preview.png"
                    alt="Indian Rupee Symbol"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                    data-ai-hint="Indian Rupee"
                  />
                </div>
            </div>
             <h2 className="text-center font-headline text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl lg:text-6xl">
                Trade Smart, Get Funded, Grow Big
              </h2>
      </div>
    </section>
  );
}
