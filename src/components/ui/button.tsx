import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-btn-dark text-btn-dark-text border border-btn-dark border-b-0 hover:bg-opacity-90 active:bg-opacity-80 dark:bg-btn-dark dark:text-btn-dark-text dark:border-btn-dark dark:border-b-0",
        light:
          "bg-btn-light text-btn-light-text-dark border border-btn-light-border-light border-b-0 hover:bg-opacity-90 active:bg-opacity-80 dark:bg-btn-light dark:text-btn-light-text-dark dark:border-btn-light-border-dark dark:border-b-0",
        accent:
          "bg-btn-dark text-white hover:bg-opacity-90 active:bg-opacity-80 font-semibold dark:bg-black dark:text-primary dark:hover:bg-opacity-90 dark:active:bg-opacity-80",
        outline:
          "border border-btn-light-border-light bg-transparent text-btn-light-text border-b-0 hover:bg-btn-light hover:bg-opacity-20 active:bg-opacity-30 dark:border-btn-light-border-dark dark:text-btn-light-text-dark dark:hover:bg-[#fcfcfc] dark:hover:bg-opacity-10 dark:active:bg-opacity-20",
        ghost:
          "text-btn-light-text hover:bg-btn-light hover:bg-opacity-10 active:bg-opacity-20 dark:text-btn-light-text-dark dark:hover:bg-[#fcfcfc] dark:hover:bg-opacity-10 dark:active:bg-opacity-20",
        link: "text-btn-accent hover:underline underline-offset-4 dark:text-btn-accent",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3 text-sm",
        sm: "h-8 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-12 px-6 has-[>svg]:px-4 text-base",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
