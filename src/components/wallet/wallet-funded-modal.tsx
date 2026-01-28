"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface WalletFundedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WalletFundedModal({
  open,
  onOpenChange,
}: WalletFundedModalProps) {
  const router = useRouter();

  const handleGoHome = () => {
    onOpenChange(false);
    router.push("/dashboard");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-102.5 p-0 overflow-hidden">
        <DialogTitle className="sr-only">Wallet Funded</DialogTitle>
        {/* Placeholder Image Area */}
        <div className="h-48 bg-[#f0f0f0]" />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Payroll Wallet Funded</h2>
          <p className="text-sm text-[#667085]">
            You can now start paying your remote teams
          </p>

          <Button
            onClick={handleGoHome}
            variant={"primary"}
            className="mt-10 hover:bg-[#212121]/90"
          >
            Go to home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
