"use client";

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
        "border border-input bg-card text-foreground",
        "transition-all duration-200",
        className
      )}
    >
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={cn(
          "flex-1 h-full px-5 border-0 bg-transparent text-foreground",
          "placeholder:text-muted-foreground/70",
          "focus:outline-none focus-visible:outline-none",
          "transition-all duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          inputClass
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
          "disabled:opacity-60 disabled:cursor-not-allowed",
          buttonClass
        )}
        aria-label={buttonText}
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default EmailForm;
