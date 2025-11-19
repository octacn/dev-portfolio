"use client";

import { useEffect, useState } from "react";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useHapticFeedback } from "@/hooks/use-haptic-feedback";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Container from "@/components/container";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const [showCalPopup, setShowCalPopup] = useState(false);

  useEffect(() => {
    const cal = async () => {
      try {
        const calApi = await getCalApi();
        if (calApi) {
          calApi("on", {
            action: "bookingSuccessful",
            callback: () => {
              setShowCalPopup(false);
            },
          });
        }
      } catch (error) {
        console.error("Failed to initialize Cal API:", error);
      }
    };
    cal();
  }, []);

  const handleButtonClick = () => {
    if (isMobile()) {
      triggerHaptic("medium");
    }
    setShowCalPopup(true);
  };

  return (
    <>
      <Container className="rounded-lg border border-dashed bg-surface p-6 grid place-content-center place-items-center">
        <p className="text-xl font-mono tracking-wide text-foreground/90 mb-4">
          Interested in collaborating or discussing opportunities?
        </p>
        <Button variant={"secondary"} onClick={handleButtonClick}>
          <Icons.logo />
          Book a Meeting
        </Button>
      </Container>

      <Dialog open={showCalPopup} onOpenChange={setShowCalPopup}>
        <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-4rem)] md:max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>Book a Meeting</DialogTitle>
            <DialogDescription>
              Schedule a time to connect and discuss opportunities
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[calc(90vh-220px)] rounded-lg">
            <Cal
              calLink={"sahil-kumar-dev/meeting"}
              config={{
                name: "Portfolio Visitor",
                email: "",
                notes: "Booked from portfolio website",
              }}
              className="w-full h-[500px] rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
