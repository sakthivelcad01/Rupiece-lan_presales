"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah L.",
    title: "Marketing Director, Stride Co.",
    avatar: "SL",
    image: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    quote: "Rupiece is a game-changer. We went from brainstorming for days to having a dozen brilliant taglines in minutes. The AI suggestions were surprisingly creative and on-brand.",
  },
  {
    name: "Mike R.",
    title: "Founder, TechSavvy Startup",
    avatar: "MR",
    image: "https://placehold.co/100x100.png",
    hint: "man portrait",
    quote: "As a startup, we need to move fast. Rupiece gave us the perfect tagline to launch with, saving us valuable time and money. It's an essential tool for any new business.",
  },
  {
    name: "Chen W.",
    title: "Creative Lead, Aura Designs",
    avatar: "CW",
    image: "https://placehold.co/100x100.png",
    hint: "person portrait",
    quote: "I was skeptical about an AI generating creative content, but Rupiece blew me away. The quality and variety of the taglines were exceptional. It's like having a team of copywriters on demand.",
  },
    {
    name: "Elena P.",
    title: "Brand Strategist",
    avatar: "EP",
    image: "https://placehold.co/100x100.png",
    hint: "woman professional",
    quote: "The ability to input our brand's core values and get tailored suggestions is incredibly powerful. Rupiece doesn't just give you taglines; it helps you define your brand's voice.",
  },
];

export default function SocialProof() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Loved by Brands and Creators
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our users have to say about Rupiece.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto pt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between">
                    <CardHeader>
                      <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                    </CardHeader>
                    <CardFooter className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
