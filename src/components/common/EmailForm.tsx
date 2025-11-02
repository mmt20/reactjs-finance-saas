import type React from "react";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface EmailFormProps {
  onSubmit: (email: string) => void;
  buttonVariant?:
    | "default"
    | "light"
    | "accent"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "raised"
    | "raised-light"
    | "raised-accent";
  buttonText?: string;
  placeholder?: string;
  className?: string;
  buttonClass?: string;
  inputClass?: string;
}

const EmailForm = ({
  onSubmit,
  buttonVariant = "default",
  buttonText = "Book a Demo",
  placeholder = "Enter your email address",
  className,
  buttonClass,
  inputClass,
}: EmailFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative flex items-center justify-between",
        "border-input bg-card text-foreground border",
        "transition-all duration-200",
        "w-full max-w-full",
        className,
      )}
    >
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={cn(
          "text-foreground h-full flex-1 border-0 bg-transparent px-3 sm:px-4 md:px-5",
          "text-xs sm:text-sm md:text-base",
          "placeholder:text-muted-foreground/70 placeholder:text-xs sm:placeholder:text-sm",
          "focus:outline-none focus-visible:outline-none",
          "transition-all duration-200",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "min-w-0",
          inputClass,
        )}
        required
        aria-label="Email address"
      />
      <Button
        variant={buttonVariant}
        size="lg"
        type="submit"
        className={cn(
          "cursor-pointer transition-all duration-200",
          "disabled:cursor-not-allowed disabled:opacity-60",
          "text-xs sm:text-sm md:text-base",
          "px-3 sm:px-4 md:px-6",
          "py-2 sm:py-2.5 md:py-3",
          "shrink-0 whitespace-nowrap",
          buttonClass,
        )}
        aria-label={buttonText}
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default EmailForm;
