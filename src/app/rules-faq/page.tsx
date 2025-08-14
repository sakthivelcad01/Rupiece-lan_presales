
"use client";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Newspaper } from "lucide-react";

const tradingRules = [
    {
        title: "Profit Target",
        description: "In Phase 1, you need to reach a profit target of 20%. In Phase 2, the profit target is 15%. There is no profit target for Master accounts."
    },
    {
        title: "Maximum Overall Loss",
        description: "For standard challenges, the maximum overall loss is 15% of the initial account balance. For competitions, this limit is extended to 20%."
    },
    {
        title: "Minimum Trading Days",
        description: "There are no minimum trading days required. You can proceed to the next phase as soon as you meet the profit target and other requirements."
    },
    {
        title: "News Trading",
        description: "Trading during major news events is permitted."
    },
    {
        title: "Holding Positions",
        description: "Holding positions overnight and over the weekend is allowed."
    }
];

const faqs = [
    {
        question: "What happens after I pass the evaluation?",
        answer: "Once you successfully complete both Phase 1 and Phase 2 of the evaluation, you will become a funded Master trader. You will receive credentials for your funded account and can start trading with our capital, keeping up to 80% of the profits you generate."
    },
    {
        question: "How does the profit split work on a funded account?",
        answer: "As a funded Master trader, you are entitled to 80% of the profits you make. Profit withdrawals are processed bi-weekly. We cover all losses, so your personal capital is never at risk."
    },
    {
        question: "Can I try again if I fail a challenge?",
        answer: "Yes, absolutely. We understand that trading has its ups and downs. If you do not succeed in your evaluation, you can always purchase a new challenge and try again. We believe in providing traders with multiple opportunities to prove their skills."
    },
    {
        question: "Are there any restrictions on trading strategies?",
        answer: "We encourage traders to use their own unique strategies. We allow all trading styles, including scalping, swing trading, and news trading. The only restrictions are against unethical practices like arbitrage or manipulating the trading system."
    },
    {
        question: "How do withdrawals work for affiliate earnings?",
        answer: "Affiliate earnings are paid out on a monthly basis. Once your referred trader makes a purchase, your commission is locked in. Withdrawals can be made through bank transfer or other supported payment methods in your dashboard."
    }
]


export default function RulesFaqPage() {
  const handleProgramSelect = (programSize: number) => {
    // This page doesn't have the program listings, so we might want to redirect or just do nothing.
    // For now, let's just log it.
    console.log("Program selected:", programSize);
  };
  
  return (
    <div className="flex min-h-[100dvh] flex-col bg-muted">
      <Header onProgramSelect={handleProgramSelect} />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
                <HelpCircle className="h-8 w-8" />
            </div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">Rules & FAQ</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about trading with Rupiece.
            </p>
          </div>

          <Card className="mb-12 shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
                <Newspaper className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle className="text-2xl font-bold">Trading Rules</CardTitle>
                    <CardDescription>Key rules and objectives for all evaluation and funded accounts.</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-y-6">
                {tradingRules.map(rule => (
                  <div key={rule.title}>
                    <h3 className="font-semibold text-lg mb-1">{rule.title}</h3>
                    <p className="text-muted-foreground">{rule.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div>
            <div className="text-center mb-8">
              <h2 className="font-headline text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-2 text-muted-foreground">Answers to common questions from our community.</p>
            </div>
             <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
