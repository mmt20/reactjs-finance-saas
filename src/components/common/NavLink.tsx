import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ href, children, className, onClick }: NavLinkProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className={cn(
        "px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-accent hover:text-accent-foreground",
        className
      )}
      onClick={onClick}
    >
      <a href={href}>{children}</a>
    </Button>
  );
};

export default NavLink;
