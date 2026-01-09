"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface LoginFormData {
  workEmail: string;
  password: string;
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onBlur",
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    // Placeholder for future authentication logic
    console.log("Login data:", data);
    // Future: integrate with auth service
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-91">
      {/* Header Section */}
      <div className="md:mb-8 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#101828] mb-2">
          Login to Helicode
        </h1>
        <p className="text-[#667085] text-sm md:text-base">
          Please enter your details to sign into your account
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Work Email */}
        <div>
          <label className="block text-sm font-bold text-[#444444] mb-2">
            Work Email <span className="text-[#FF3F3F]">*</span>
          </label>
          <Input
            type="email"
            placeholder="Enter your email address"
            {...register("workEmail", {
              required: "Work email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className={`${errors.workEmail ? "border-[#ff383c]" : ""}`}
          />
          {errors.workEmail && (
            <p className="text-xs text-[#ED2525] mt-1">
              {errors.workEmail.message}
            </p>
          )}
        </div>

        {/* Password with visibility toggle */}
        <div>
          <label className="block text-sm font-bold text-[#444444] mb-2">
            Password <span className="text-[#FF3F3F]">*</span>
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
              className={`pr-10 ${errors.password ? "border-[#ff383c]" : ""}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] hover:text-[#101828] transition-colors"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-[#ED2525] mt-1">
              {errors.password.message}
            </p>
          )}
          {/* Forgot Password Link */}
          <div>
            <a
              href="/forgot-password"
              className="text-xs font-medium text-[#101828] hover:text-[#0166f4] transition-colors"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        variant={"primary"}
        className="w-full hover:bg-[#101828] text-white mt-8"
      >
        {isLoading ? "Logging in..." : "Log in"}
      </Button>

      {/* Legal Text */}
      <p className="text-xs text-[#444444] my-6 font-medium text-center">
        By signing up, you agree to our{" "}
        <a href="#" className="underline">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
