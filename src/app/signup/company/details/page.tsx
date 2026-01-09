"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const TEAM_SIZES = [
  { value: "1-10", label: "1-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-500", label: "201-500" },
  { value: "500+", label: "500+" },
];

const COUNTRIES = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "in", label: "India" },
  { value: "sg", label: "Singapore" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "other", label: "Other" },
];

interface CompanyDetailsForm {
  company: string;
  teamSize: string;
  country: string;
}

export default function CompanyDetailsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyDetailsForm>({
    defaultValues: {
      company: "",
      teamSize: "1-10",
      country: "us",
    },
  });

  const onSubmit = async (data: CompanyDetailsForm) => {
    try {
      setIsLoading(true);
      // TODO: Save to Zustand store
      console.log("Company details:", data);
      router.push("/signup/company/product");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
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

        {/* Main Form */}
        <div className="w-full max-w-105.75 mx-auto flex-1 flex items-center justify-center">
          <div>
            <div className="mb-8">
              <h1 className="mb-3 text-[2rem] font-bold text-[#212121]">
                Your Company details
              </h1>
              <p className="text-sm text-[#444444]">
                Please provide your Organization information accurately, it will
                be used in all your communications on the platform.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Company Name */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#444444]">
                  Company <span className="text-[#FF3F3F]">*</span>
                </label>
                <Input
                  placeholder="Helicode"
                  {...register("company", {
                    required: "Company name is required",
                    minLength: {
                      value: 2,
                      message: "Company name must be at least 2 characters",
                    },
                  })}
                  className={`rounded-lg border ${
                    errors.company ? "border-[#ff383c]" : "border-[#C9D1DE]"
                  } bg-white px-4 py-2.5 text-[#101828] placeholder:text-[#98a8c1] focus:border-ring focus:ring-2 focus:ring-ring/10`}
                />
                {errors.company && (
                  <p className="mt-1 text-xs text-[#ED2525]">
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Team Size */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#444444]">
                  Team Size <span className="text-[#FF3F3F]">*</span>
                </label>
                <Controller
                  name="teamSize"
                  control={control}
                  rules={{ required: "Team size is required" }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="rounded-lg border border-[#C9D1DE] bg-white w-full text-[#101828] focus:border-ring focus:ring-2 focus:ring-ring/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TEAM_SIZES.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.teamSize && (
                  <p className="mt-1 text-xs text-[#ED2525]">
                    {errors.teamSize.message}
                  </p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#444444]">
                  Country <span className="text-[#FF3F3F]">*</span>
                </label>
                <Controller
                  name="country"
                  control={control}
                  rules={{ required: "Country is required" }}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="rounded-lg border border-[#C9D1DE] bg-white w-full text-[#101828] focus:border-ring focus:ring-2 focus:ring-ring/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {COUNTRIES.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.country && (
                  <p className="mt-1 text-xs text-[#ED2525]">
                    {errors.country.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1C1C1C] hover:bg-[#212121] text-white rounded-lg font-semibold text-base transition-colors disabled:opacity-50 mt-2"
              >
                {isLoading ? "Loading..." : "Next"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
