
"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";
import { enterGiveawayAction } from "@/app/actions";

export function GiveawayEntryDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const formData = new FormData(event.currentTarget);
    
    const result = await enterGiveawayAction(formData);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.message);
    }

    setIsSubmitting(false);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    // Reset state when dialog is closed
    if (!isOpen) {
      setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
        setError(null);
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-in zoom-in-50" />
            <DialogTitle className="text-2xl font-bold mb-2">Giveaway Entered!</DialogTitle>
            <DialogDescription>
              You've successfully been entered into the giveaway. Good luck! We'll notify winners by email.
            </DialogDescription>
            <DialogFooter className="mt-6">
                <Button onClick={() => handleOpenChange(false)}>Close</Button>
            </DialogFooter>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Enter Monthly Giveaway</DialogTitle>
              <DialogDescription>
                Enter your email below to enter this month's giveaway for a free trading account.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="col-span-3"
                  required
                />
              </div>
               {error && (
                <div className="col-span-4 text-center text-sm font-medium text-destructive">
                  {error}
                </div>
              )}
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Enter Giveaway
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
