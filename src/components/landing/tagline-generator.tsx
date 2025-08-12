"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { type GenerateTaglinesInput } from "@/ai/flows/generate-taglines";
import { generateTaglinesAction } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Copy, Check } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  brandDescription: z.string().min(10, "Please provide a more detailed description (at least 10 characters).").max(500, "Description must be 500 characters or less."),
  keywords: z.string().min(3, "Please enter at least one keyword (at least 3 characters).").max(100, "Keywords must be 100 characters or less."),
});

export default function TaglineGenerator() {
  const [taglines, setTaglines] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      brandDescription: "",
      keywords: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setTaglines([]);
    try {
      const result = await generateTaglinesAction(values);
      if (result.taglines && result.taglines.length > 0) {
        setTaglines(result.taglines);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || "Failed to generate taglines. Please try a different input.",
        });
      }
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Client Error",
        description: "An unexpected error occurred. Please refresh and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (tagline: string, index: number) => {
    navigator.clipboard.writeText(tagline);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="tagline-generator" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Tagline Generator</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Craft Your Perfect Tagline
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Enter a few details about your brand, and let our AI create a list of memorable taglines for you.
          </p>
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="brandDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Brand Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., A sustainable coffee brand that sources beans ethically from local farms." {...field} className="min-h-[100px]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Keywords</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., eco-friendly, fresh, community" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Wand2 className="mr-2 h-4 w-4" />
                    {isLoading ? "Generating..." : "Generate Taglines"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">Your Results</h3>
          <Card className="min-h-[300px]">
            <CardContent className="p-6">
              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-8 w-full" />
                  ))}
                </div>
              ) : taglines.length > 0 ? (
                <ul className="space-y-3">
                  {taglines.map((tagline, index) => (
                    <li key={index} className="flex items-center justify-between gap-2 p-3 rounded-lg bg-background group">
                      <span className="text-muted-foreground italic">"{tagline}"</span>
                      <Button variant="ghost" size="icon" onClick={() => handleCopy(tagline, index)} className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {copiedIndex === index ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-full py-10">
                  <Wand2 className="h-12 w-12 mb-4 text-primary/30" />
                  <p>Your generated taglines will appear here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
