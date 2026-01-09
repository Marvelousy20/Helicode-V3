"use client";

import Link from "next/link";
import { CompanySignupForm } from "@/components/signup/company-signup-form";
import Image from "next/image";

export default function CompanySignupPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Sidebar - Hidden on mobile, visible on lg and up */}
      <div className="hidden lg:flex w-full lg:basis-2/5 bg-[#F4F5F7] flex-col justify-start items-center p-8">
        <Image
          src="/signup/logo.svg"
          alt="Helicode Logo"
          width={110}
          height={24}
        />
      </div>

      {/* Right Content Area */}
      <div className="w-full lg:basis-3/5 flex flex-col px-6 lg:px-12 py-8 md:py-12">
        {/* Header Navigation */}
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

        {/* Form Container - Centered with max width */}
        <div className="flex-1 flex items-center justify-center">
          <CompanySignupForm />
        </div>
      </div>
    </div>
  );
}
