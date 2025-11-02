import React from "react";
import { Badge } from "./ui/badge";

interface AnnouncementBadgeProps {
  children: React.ReactNode;
  label?: string;
  startIcon?: React.ComponentType<{ className?: string }>;
  endIcon?: React.ComponentType<{ className?: string }>;
  iconSize?: number;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "secondary" | "outline" | "success" | "warning";
}

const AnnouncementBadge = ({
  children,
  label,
  startIcon: StartIcon,
  endIcon: EndIcon,
  iconSize = 5,
  onClick,
  className = "",
  variant = "default",
}: AnnouncementBadgeProps) => {
  const variantStyles = {
    default:
      "border-primary-brand/20 bg-primary-brand/10 text-primary-brand hover:bg-primary-brand/20",
    secondary:
      "border-muted/20 bg-muted/50 text-muted-foreground hover:bg-muted",
    outline: "border-border bg-transparent text-foreground hover:bg-muted/50",
    success:
      "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20",
    warning:
      "border-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-500/20",
  };

  const labelStyles = {
    default: "bg-primary-brand text-primary",
    secondary: "bg-muted-foreground text-primary",
    outline: "bg-foreground text-background",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-600 text-white",
  };

  return (
    <Badge
      onClick={onClick}
      className={`mb-6 cursor-pointer gap-1 border border-b-0 px-1 py-1 ${variantStyles[variant]} ${className} `}
    >
      {/* Start Icon */}
      {StartIcon && (
        <StartIcon className={`w-${iconSize} h-${iconSize} shrink-0`} />
      )}

      {/* Optional Label Badge */}
      {label && (
        <span
          className={`${labelStyles[variant]} rounded-full px-3 py-1 text-sm font-semibold`}
        >
          {label}
        </span>
      )}

      {/* Main Content */}
      <span className="flex-1">{children}</span>

      {/* End Icon */}
      {EndIcon && (
        <EndIcon className={`w-${iconSize} h-${iconSize} shrink-0`} />
      )}
    </Badge>
  );
};

export default AnnouncementBadge;
