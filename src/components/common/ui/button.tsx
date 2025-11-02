import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-btn-dark text-btn-dark-text border border-btn-dark shadow-sm hover:opacity-90 active:opacity-80 active:scale-[0.98]",
        light:
          "bg-btn-light text-foreground border border-btn-light-border-light shadow-sm hover:bg-opacity-80 active:bg-opacity-70 active:scale-[0.98] dark:bg-btn-light dark:text-btn-light-text-dark dark:border-btn-light-border-dark",
        accent:
          "bg-btn-accent text-btn-accent-text border border-btn-accent shadow-sm hover:opacity-90 active:opacity-80 active:scale-[0.98] font-semibold",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
        link: "text-primary-brand hover:underline underline-offset-4 active:opacity-80",
        destructive:
          "bg-destructive text-white border border-destructive shadow-sm hover:opacity-90 active:opacity-80 active:scale-[0.98]",
        raised:
          "bg-btn-dark text-btn-dark-text border border-btn-dark border-b-0 shadow-[0_2px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_1px_0_0_rgba(0,0,0,0.1)] hover:translate-y-[1px] active:shadow-none active:translate-y-[2px] dark:bg-btn-dark dark:text-btn-dark-text dark:border-btn-dark dark:border-b-0 dark:shadow-[0_2px_0_0_rgba(255,255,255,0.1)] dark:hover:shadow-[0_1px_0_0_rgba(255,255,255,0.1)]",
        "raised-light":
          "bg-btn-light text-foreground border border-btn-light-border-light border-b-0 shadow-[0_2px_0_0_rgba(0,0,0,0.08)] hover:shadow-[0_1px_0_0_rgba(0,0,0,0.08)] hover:translate-y-[1px] active:shadow-none active:translate-y-[2px] dark:bg-btn-light dark:text-btn-light-text-dark dark:border-btn-light-border-dark dark:border-b-0 dark:shadow-[0_2px_0_0_rgba(255,255,255,0.08)] dark:hover:shadow-[0_1px_0_0_rgba(255,255,255,0.08)]",
        "raised-accent":
          "bg-btn-accent text-btn-accent-text border border-btn-accent border-b-0 shadow-[0_2px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_1px_0_0_rgba(0,0,0,0.15)] hover:translate-y-[1px] active:shadow-none active:translate-y-[2px] font-semibold",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "size-9 px-0",
        "icon-sm": "size-8 px-0",
        "icon-lg": "size-10 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
