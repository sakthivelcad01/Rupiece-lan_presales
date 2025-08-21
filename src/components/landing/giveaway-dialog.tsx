
"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { GiveawayEntryDialog } from "@/components/landing/giveaway-entry-dialog";

export function GiveawayDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [entryDialogOpen, setEntryDialogOpen] = useState(false);

  useEffect(() => {
    // We use a unique key to avoid conflicts with previous versions
    const hasSeenPopup = localStorage.getItem("giveawayPopupShown_v1");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("giveawayPopupShown_v1", "true");
      }, 1000); // Show popup after 1 second delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };
  
  const handleEnterClick = () => {
    setIsOpen(false);
    setEntryDialogOpen(true);
  }

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="bg-card text-card-foreground border-border max-w-md p-8 text-center shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Do You Want A Chance To Win A <span className="text-primary">₹100K Account?</span>
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex flex-col gap-4 mt-6">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6"
                onClick={handleEnterClick}
              >
                ENTER ₹100K GIVEAWAY
              </Button>
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
      <GiveawayEntryDialog open={entryDialogOpen} onOpenChange={setEntryDialogOpen}>
        <span />
      </GiveawayEntryDialog>
    </>
  );
}
