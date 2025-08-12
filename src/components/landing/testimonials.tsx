import { testimonials, type Testimonial } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full border bg-background shadow-sm">
      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
        <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
        <div className="mt-6 flex items-center gap-4">
          <Avatar>
            <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} alt={testimonial.name} />
            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-primary">{testimonial.name}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
            Success Stories from Our Traders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our members have to say.
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
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <TestimonialCard testimonial={testimonial} />
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
