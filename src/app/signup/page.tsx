"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";

type UserType = "company" | "talent" | null;

export default function SignupPage() {
  const [selectedType, setSelectedType] = useState<UserType>("company");
  const router = useRouter();

  const handleContinue = () => {
    if (selectedType) {
      router.push(`/signup/${selectedType}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left sidebar with logo */}
      <div className="w-full lg:basis-2/5 bg-[#F4F5F7] flex flex-col justify-start items-center p-8">
        <Image
          src="/signup/logo.svg"
          alt="Helicode Logo"
          width={110}
          height={24}
        />
      </div>

      {/* Right content area */}
      <div className="w-full lg:basis-3/5 px-6 lg:px-12 py-8 bg-white flex flex-col">
        {/* Top navigation */}

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

        <div className="w-full max-w-154 mx-auto flex-1 flex items-center justify-center">
          {/* Main content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-[2rem] text-black font-bold leading-[160%]">
                How would you be using Helicode?
              </h2>
              <p className="text-[#0F112A] text-base">
                You can create your company account right away if you&apos;re an
                employer or <br /> refer your employer if you&apos;re an
                employee.
              </p>
            </div>

            {/* Role selection cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Company option */}
              <button
                onClick={() => setSelectedType("company")}
                className={`p-6 rounded-lg border transition-all ${
                  selectedType === "company"
                    ? "border-[#0052FF]"
                    : "border-[#ECECEC] hover:border-slate-300"
                }`}
              >
                <div className="flex flex-col">
                  <div
                    className={`${
                      selectedType === "company"
                        ? "border-[#0052FF] text-[#0052FF]"
                        : "border-[#ECECEC] text-[#ECECEC]"
                    }`}
                  >
                    <CircleUserRound size={40} />
                  </div>
                  <div className="text-left mt-4">
                    <h3
                      className={`font-bold text-xl ${
                        selectedType === "company"
                          ? "text-black"
                          : "text-[#878787]"
                      }`}
                    >
                      Company
                    </h3>
                    <p className="text-sm text-[#868585] mt-2">
                      I want to manage my team or recruit new talent.
                    </p>
                  </div>
                </div>
              </button>

              {/* Talent option */}
              <button
                onClick={() => setSelectedType("talent")}
                className={`p-6 rounded-lg border transition-all ${
                  selectedType === "talent"
                    ? "border-[#0052FF]"
                    : "border-[#ECECEC] hover:border-slate-300"
                }`}
              >
                <div className="flex flex-col">
                  <div
                    className={`${
                      selectedType === "talent"
                        ? "border-blue-600 text-blue-600"
                        : "border-slate-300 text-slate-400"
                    }`}
                  >
                    <CircleUserRound size={40} />
                  </div>
                  <div className="text-left mt-4">
                    <h3
                      className={`font-bold text-xl ${
                        selectedType === "talent"
                          ? "text-black"
                          : "text-[#878787]"
                      }`}
                    >
                      Talent
                    </h3>
                    <p className={`text-sm mt-2 text-[#868585]`}>
                      I want to manage my team or recruit new talent.
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Continue button */}
            <Button
              onClick={handleContinue}
              disabled={!selectedType}
              variant={"primary"}
              className="w-37.75 bg-[#1C1C1C] hover:bg-[#101828] text-white h-12 rounded-lg font-semibold"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
