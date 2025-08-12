
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials, Testimonial } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
            Success Stories from Our Traders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our funded traders have to say.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between p-6">
                    <CardContent className="p-0">
                      <p className="text-muted-foreground italic">
                        "{testimonial.quote}"
                      </p>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-6">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/40?u=${testimonial.name}`} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                      </div>
                    </div>
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
  );
}
