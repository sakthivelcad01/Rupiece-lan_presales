
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CheckCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import type { User } from "firebase/auth";

const accountSizes = [
  { size: 100000 },
  { size: 300000 },
  { size: 500000 },
  { size: 1000000 },
];

const steps = [
  {
    name: "Phase 1",
    profitTarget: "8%",
    maxLoss: "15%",
    minDays: "0",
  },
  {
    name: "Phase 2",
    profitTarget: "5%",
    maxLoss: "15%",
    minDays: "0",
  },
  {
    name: "Master",
    profitTarget: "-",
    maxLoss: "15%",
    minDays: "0",
  },
];

interface ProgramListingsProps {
  selectedSize: number;
  setSelectedSize: (size: number) => void;
}

export function ProgramListings({ selectedSize, setSelectedSize }: ProgramListingsProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const getPrice = (size: number) => {
    return size * 0.02 - 1;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  return (
    <section id="programs" className="w-full bg-background py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-4">
              At Rupiece, we’re changing the game for Indian traders. No more risking your life savings. Here’s the journey from trader to funded professional
            </p>
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">Step In, The Ride of Your Life Begins!</h2>
        </div>
        <Card className="w-full max-w-5xl mx-auto shadow-lg border">
          <CardContent className="p-6 md:p-8">
            <div className="bg-muted rounded-lg p-4 mb-6">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                        <h3 className="font-bold text-lg">Evaluation Stage</h3>
                        <p className="text-sm text-muted-foreground">(Phase 1 & Phase 2)</p>
                    </div>
                     <div className="flex items-center justify-center">
                        <p className="font-semibold mr-4">Reward Cycles</p>
                        <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-5 w-5 text-green-500" /> Bi-weekly 80%
                        </div>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg">Master Stage</h3>
                        <p className="text-sm text-muted-foreground">(Master)</p>
                    </div>
                </div>
            </div>

            <div className="relative mb-8 mt-12">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-border"></div>
              <div className="relative flex justify-between">
                {steps.map((step, index) => (
                    <div key={step.name} className="flex flex-col items-center bg-background px-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10 border-4 border-background">{index + 1}</div>
                    </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {steps.map((step) => (
                    <div key={step.name}>
                        <h4 className="text-2xl font-bold mb-6 text-center">{step.name}</h4>
                        <div className="space-y-4 text-card-foreground">
                             <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-muted-foreground"><p>Profit Target</p><HelpCircle className="h-4 w-4 cursor-pointer"/></div>
                                <p className="font-mono">{step.profitTarget}</p>
                            </div>
                            <div className="flex justify-between items-center">
                               <div className="flex items-center gap-2 text-muted-foreground"><p>Maximum Loss</p><HelpCircle className="h-4 w-4 cursor-pointer"/></div>
                                <p className="font-mono">{step.maxLoss}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-muted-foreground"><p>Minimum Trading Days</p><HelpCircle className="h-4 w-4 cursor-pointer"/></div>
                                <p className="font-mono">{step.minDays}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Separator className="my-8" />
            
            <div className="flex flex-col items-center gap-4 mb-8">
                <ToggleGroup
                    type="single"
                    value={String(selectedSize)}
                    onValueChange={(value) => {
                        if (value) setSelectedSize(Number(value));
                    }}
                    className="flex-wrap justify-center"
                >
                    {accountSizes.map(({ size }) => (
                    <ToggleGroupItem key={size} value={String(size)} aria-label={formatCurrency(size)}>
                        {formatCurrency(size)}
                    </ToggleGroupItem>
                    ))}
              </ToggleGroup>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <p className="text-muted-foreground">Account size:</p>
                    <p className="text-4xl font-bold">{formatCurrency(selectedSize)}</p>
                </div>
                 <div className="text-center md:text-right">
                    <p className="text-muted-foreground">Price:</p>
                    <p className="text-4xl font-bold">{formatCurrency(getPrice(selectedSize))}</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
