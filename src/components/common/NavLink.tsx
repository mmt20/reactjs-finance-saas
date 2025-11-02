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
        "hover:bg-accent hover:text-accent-foreground rounded-full px-4 py-2 font-medium sm:px-6",
        className,
      )}
      onClick={onClick}
    >
      <a href={href}>{children}</a>
    </Button>
  );
};

export default NavLink;
