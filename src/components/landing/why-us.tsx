import { IndianRupee, History, Shield, Landmark, TrendingUp, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <IndianRupee className="h-8 w-8 text-primary" />,
    title: "Get Funded",
    description: "Access our capital and trade without risking your own money. Pass our evaluation and start trading with a funded account.",
  },
  {
    icon: <History className="h-8 w-8 text-primary" />,
    title: "Keep Up to 80% of Profits",
    description: "You do the hard work, you deserve the reward. Our profit-sharing model is designed to be generous and straightforward.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "No Hidden Fees",
    description: "We believe in transparency. Pay a one-time evaluation fee. That's it. No monthly charges or hidden costs.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Trade NSE & BSE Markets",
    description: "Gain exposure to India's leading stock exchanges, the NSE and BSE, with our powerful trading platform.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Grow as a Trader",
    description: "Gain real-world experience, refine your strategies, and build a professional track record in a supportive environment.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Supportive Community",
    description: "Join a network of like-minded traders. Share insights, strategies, and grow together in our exclusive community.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
            Why Choose RUPIECE?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide the platform and capital. You bring the skill. Together, we redefine trading.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col items-center text-center p-6 bg-card border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="mb-4">{feature.icon}</div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
