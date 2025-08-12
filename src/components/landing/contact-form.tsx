
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
        toast({ variant: "destructive", title: "Missing Fields", description: "Please fill out all fields." });
        return;
    }
    setIsSubmitting(true);
    try {
        const result = await submitContactForm({ name, email, message });
        if (result.success) {
            toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll get back to you soon." });
            setName("");
            setEmail("");
            setMessage("");
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        toast({ variant: "destructive", title: "Error", description: "Could not send your message. Please try again." });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="w-full bg-accent py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">
              Get in Touch
            </CardTitle>
            <CardDescription className="pt-2 text-lg">
              Have questions? We're here to help you succeed.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your questions or comments" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
