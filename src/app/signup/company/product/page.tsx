"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  disabled?: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: "hiring",
    name: "Hiring",
    description: "Source and hire top talents around the world",
  },
  {
    id: "payroll",
    name: "Payroll",
    description: "Pay employees globally with Stablecoin",
  },
  {
    id: "hr-onboarding",
    name: "HR/Onboarding",
    description: "Automate people ops with a global HR system",
    disabled: true,
  },
];

export default function ProductSelectionPage() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<string>("hiring");
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = async () => {
    try {
      setIsLoading(true);
      // TODO: Save to Zustand store
      console.log("Selected product:", selectedProduct);
      router.push("/dashboard"); // Update to actual next step
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkip = () => {
    router.push("/dashboard"); // Update to actual next step
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left Sidebar */}
      <div className="w-full lg:basis-2/5 bg-[#F4F5F7] flex flex-col justify-start items-center p-8">
        <Image
          src="/signup/logo.svg"
          alt="Helicode Logo"
          width={110}
          height={24}
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:basis-3/5 px-6 lg:px-12 py-8 bg-white flex flex-col">
        {/* Header Navigation */}
        <div className="flex justify-between items-center w-full">
          <button className="text-black font-normal text-sm hover:text-primary transition-colors">
            Go back
          </button>
          <Link
            href="/login"
            className="font-medium hover:underline text-black text-sm"
          >
            Already have an account?{" "}
            <span className="font-bold text-[#355587]">Login</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-105.75 mx-auto flex-1 flex items-center justify-center">
          <div>
            <div className="mb-8">
              <h1 className="mb-3 text-[2rem] font-bold text-[#101828] leading-[100%]">
                Which product are you interested in?
              </h1>
              <p className="text-sm text-[#444444]">
                Please provide your Organization information accurately, it will
                be used in all your communications on the platform.
              </p>
            </div>

            {/* Products Grid */}
            <div className="mb-8 space-y-1.5 bg-[#F4F5F7] p-1.5 rounded-2xl">
              {PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() =>
                    !product.disabled && setSelectedProduct(product.id)
                  }
                  disabled={product.disabled}
                  className={`w-full rounded-lg bg-white p-6 text-left transition-all ${
                    product.disabled ? "opacity-30" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Checkbox */}
                    <div
                      className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                        selectedProduct === product.id && !product.disabled
                          ? "border-[#0052FF] bg-[#0052FF]"
                          : "border-[#b3bfd2]"
                      }`}
                    >
                      {selectedProduct === product.id && !product.disabled && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`font-medium text-2xl ${
                          product.disabled ? "text-[#252525]" : "text-[#101828]"
                        }`}
                      >
                        {product.name}
                      </h3>
                      <p
                        className={`text-xs font-light ${
                          product.disabled ? "text-[#5A5A5A]" : "text-[#444444]"
                        }`}
                      >
                        {product.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={handleGetStarted}
                variant={"primary"}
                disabled={isLoading}
                className="flex-1 bg-[#1C1C1C] hover:bg-[#212121] text-white rounded-lg font-medium text-sm transition-colors disabled:opacity-50"
              >
                {isLoading ? "Loading..." : "Get Started"}
              </Button>
              <Button
                onClick={handleSkip}
                variant="surface"
                className="flex-1 border-2 text-[#101828] hover:bg-[#f4f5f7] rounded-lg py-2.5 font-medium text-sm transition-colors bg-transparent"
              >
                Skip
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
