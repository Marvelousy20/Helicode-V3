"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";

interface FundCryptoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  walletAddress?: string;
}

export function FundCryptoModal({
  open,
  onOpenChange,
  walletAddress = "0x27ff9040...9e18e1219386FB7",
}: FundCryptoModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-113.25">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">
            Fund with Crypto
          </DialogTitle>
          <p className="text-sm text-[#0F112A] mt-1">
            Instant transfer from your crypto wallet.
          </p>
        </DialogHeader>

        <hr className="bg-[#E4E7EC]" />

        <div className="mt-6 flex flex-col items-center">
          <p className="text-xl font-bold mb-6">Your CELO address</p>

          {/* QR Code Placeholder */}
          <div className="mb-6">
            <Image
              src="/wallet/barcode.png"
              alt="barcode.png"
              width={274}
              height={274}
            />
          </div>

          {/* Wallet Address */}
          <button
            onClick={handleCopy}
            className="flex items-center bg-[#EDEDED] gap-2 px-4 py-2 border border-[#eaeaea] rounded-full hover:bg-gray-50 transition-colors"
          >
            <Image
              src="/wallet/copy-01.svg"
              alt="copy"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="text-sm text-[#101828] font-medium">
              {copied ? "Copied!" : walletAddress}
            </span>
          </button>

          <p className="text-sm text-center mt-4">
            Use this address to deposit
            <br />
            USDC on Celo
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
