"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ForgotPasswordFormData {
  workEmail: string;
}

interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

interface ForgotPasswordFormProps {
  onStepChange: (step: "request" | "verify" | "reset") => void;
}

export function ForgotPasswordForm({ onStepChange }: ForgotPasswordFormProps) {
  const [step, setStep] = useState<"request" | "verify" | "reset">("request");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    mode: "onBlur",
  });

  const onSubmitRequest = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    console.log("Forgot password email:", data);
    setStep("verify");
    onStepChange("verify");
    setIsLoading(false);
  };

  if (step === "verify") {
    return (
      <VerifyEmailForm
        onNext={() => {
          setStep("reset");
          onStepChange("reset");
        }}
        isLoading={isLoading}
      />
    );
  }

  if (step === "reset") {
    return <ResetPasswordForm />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmitRequest)} className="w-full">
      {/* Work Email */}
      <div className="mb-6 md:mb-8">
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

      {/* Submit Button */}
      <Button
        type="submit"
        variant={"primary"}
        disabled={isLoading}
        className="w-full hover:bg-[#101828] text-white font-medium"
      >
        {isLoading ? "Submitting..." : "Submit"}
      </Button>

      {/* Back to login */}
      <Button
        type="button"
        variant="surface"
        className="w-full mt-3 border-[#D9D9D9] text-[#131313] hover:bg-[#f4f5f7] bg-transparent"
      >
        Back to login
      </Button>
    </form>
  );
}

function VerifyEmailForm({
  onNext,
  isLoading,
}: {
  onNext: () => void;
  isLoading: boolean;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    mode: "onBlur",
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsSubmitting(true);
    console.log("Resend email:", data);
    onNext();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-105.5">
      {/* Work Email */}
      <div className="mb-6 md:mb-8">
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

      {/* Resend email Button */}
      <Button
        type="submit"
        disabled={isLoading}
        variant={"primary"}
        className="w-full bg-[#212121] hover:bg-[#101828] text-white"
      >
        {isSubmitting ? "Resending..." : "Resend email"}
      </Button>
    </form>
  );
}

interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

function ResetPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormData>({
    mode: "onBlur",
  });

  const newPassword = watch("newPassword");

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    console.log("Reset password:", data);
    // Future: integrate with auth service
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* New Password */}
      <div className="mb-6 md:mb-8">
        <label className="block text-sm font-medium text-[#101828] mb-2">
          New Password <span className="text-[#ff383c]">*</span>
        </label>
        <Input
          type="password"
          placeholder="Enter your password"
          {...register("newPassword", {
            required: "New password is required",
            minLength: {
              value: 10,
              message: "Password must be at least 10 characters long",
            },
          })}
          className={`${errors.newPassword ? "border-[#ff383c]" : ""}`}
        />
        {errors.newPassword && (
          <p className="text-xs text-[#ff383c] mt-1">
            {errors.newPassword.message}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-[#101828] mb-2">
          New Password <span className="text-[#ff383c]">*</span>
        </label>
        <Input
          type="password"
          placeholder="Enter your password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === newPassword || "Passwords do not match",
          })}
          className={`${errors.confirmPassword ? "border-[#ff383c]" : ""}`}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-[#ff383c] mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Reset password Button */}
      <Button
        type="submit"
        disabled={isLoading}
        variant={"primary"}
        className="w-full hover:bg-[#101828] text-white"
      >
        {isLoading ? "Resetting..." : "Reset password"}
      </Button>

      {/* Back to login */}
      <Button
        type="button"
        variant="surface"
        className="w-full mt-3 border-[#d0d5dd] text-[#101828] hover:bg-[#f4f5f7] bg-transparent"
      >
        Back to login
      </Button>
    </form>
  );
}
