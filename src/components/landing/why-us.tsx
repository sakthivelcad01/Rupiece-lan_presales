
import { IndianRupee, PieChart, Shield, Landmark, TrendingUp, Users } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const features = [
  {
    icon: <IndianRupee className="h-10 w-10 text-primary" />,
    title: "Get Funded",
    description: "Access our capital and trade without risking your own money. Pass our evaluation and start trading with a funded account.",
  },
  {
    icon: <PieChart className="h-10 w-10 text-primary" />,
    title: "Keep Up to 80% of Profits",
    description: "You do the hard work, you deserve the reward. Our profit-sharing model is designed to be generous and straightforward.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "No Hidden Fees",
    description: "We believe in transparency. Pay a one-time evaluation fee. That's it. No monthly charges or hidden costs.",
  },
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: "Trade NSE & BSE Markets",
    description: "Gain exposure to India's leading stock exchanges, the NSE and BSE, with our powerful trading platform.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Grow as a Trader",
    description: "Gain real-world experience, refine your strategies, and build a professional track record in a supportive environment.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Supportive Community",
    description: "Join a network of like-minded traders. Share insights, strategies, and grow together in our exclusive community.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="w-full bg-accent py-16 md:py-24">
      <ScrollReveal className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
            Why Choose RUPIECE?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide the platform and capital. You bring the skill. Together, we redefine trading.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div 
              key={feature.title} 
              className="group rounded-xl bg-card p-6 text-center shadow-md transition-transform duration-300 ease-out hover:-translate-y-2"
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
