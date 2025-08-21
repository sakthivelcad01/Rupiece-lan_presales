
"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { PreRegisterDialog } from "@/components/landing/pre-register-dialog";

export function GiveawayDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("giveawayPopupShown");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("giveawayPopupShown", "true");
      }, 1000); // Show popup after 1 second delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-card text-card-foreground border-border max-w-md p-8 text-center shadow-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Do You Want A Chance To Win A <span className="text-amber-400">₹100K Account?</span>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col gap-4 mt-6">
          <PreRegisterDialog>
            <Button
              size="lg"
              className="w-full bg-amber-400 text-black hover:bg-amber-500 font-bold text-lg py-6"
              onClick={handleClose}
            >
              ENTER ₹100K GIVEAWAY
            </Button>
          </PreRegisterDialog>
          <Button
            variant="link"
            size="lg"
            className="w-full text-muted-foreground hover:text-foreground"
            onClick={handleClose}
          >
            Decline Offer
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
