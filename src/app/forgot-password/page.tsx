"use client";

import Link from "next/link";
import { ForgotPasswordForm } from "@/components/forgot-password/forgot-password-form";
import { useState } from "react";
import Image from "next/image";
import { Lock, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"request" | "verify" | "reset">("request");

  const getHeaderContent = () => {
    switch (step) {
      case "verify":
        return {
          icon: Mail,
          title: "Check your inbox and confirm your email address",
          description:
            "A verification email has been sent to your inbox. Please verify your email to continue.",
        };
      case "reset":
        return {
          icon: Lock,
          title: "Forgot Password",
          description: "Choose a new password for your account",
        };
      default:
        return {
          icon: Lock,
          title: "Forgot Password",
          description:
            "Please enter your email address for resetting your password.",
        };
    }
  };

  const headerContent = getHeaderContent();
  const Icon = headerContent.icon;
  return (
    <div className="min-h-screen flex items-stretch md:flex-row flex-col">
      {/* Left sidebar with logo - hidden on mobile */}
      <div className="hidden lg:flex w-full lg:basis-2/5 bg-[#F4F5F7] flex-col justify-start items-center p-8">
        <Image
          src="/signup/logo.svg"
          alt="Helicode Logo"
          width={110}
          height={24}
        />
      </div>

      {/* Right content area */}
      <div className="w-full lg:basis-3/5 flex flex-col px-6 lg:px-12 py-8 md:py-12">
        {/* Top navigation */}
        <div className="flex items-center justify-between w-full">
          <Link
            href="/signup"
            className="text-sm text-[#000000] hover:text-[#101828] transition-colors"
          >
            Go back
          </Link>
          <Link
            href="/login"
            className="font-medium hover:underline text-black text-sm"
          >
            Already have an account?{" "}
            <span className="font-bold text-[#355587]">Login</span>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-105.5">
            {/* Icon */}
            <div className="flex mb-2">
              {step === "verify" ? (
                <Image
                  src="/signup/sms.svg"
                  alt="lock"
                  width={32}
                  height={32}
                />
              ) : (
                <Image
                  src="/signup/lock.svg"
                  alt="lock"
                  width={32}
                  height={32}
                />
              )}
            </div>

            <div className="mb-8">
              <h1 className="text-[2rem] font-bold text-[#212121] mb-2 leading-[140%]">
                {headerContent.title}
              </h1>
              <p className="text-[#212121] text-sm">
                {headerContent.description}
              </p>
            </div>

            {/* Form */}
            <ForgotPasswordForm onStepChange={setStep} />
          </div>
        </div>
      </div>
    </div>
  );
}
