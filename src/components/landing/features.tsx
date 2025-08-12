import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Zap, Share2, Award, Lightbulb, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "AI-Powered Suggestions",
    description: "Leverage state-of-the-art AI to generate unique and catchy taglines that resonate with your audience.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Instant Feedback",
    description: "Get a wide range of creative options in seconds, allowing for rapid brainstorming and iteration.",
  },
  {
    icon: <Share2 className="w-10 h-10 text-primary" />,
    title: "Export & Share",
    description: "Easily copy your favorite taglines to your clipboard or share them with your team for collaboration.",
  },
    {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Brand-Centric",
    description: "Our AI considers your brand's unique description and keywords to ensure every tagline is a perfect fit.",
  },
    {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    title: "Creative Spark",
    description: "Break through creative blocks with a fresh injection of ideas tailored to your specific needs.",
  },
    {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: "Refine Your Message",
    description: "Use the generated taglines as a starting point to refine and perfect your brand's core message.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Everything You Need to Succeed
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our tagline generator is packed with powerful features to help you create the perfect brand message.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {feature.icon}
                <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
