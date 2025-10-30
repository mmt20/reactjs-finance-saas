import { Button } from "../ui/button";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Button
      asChild
      variant="ghost"
      className="px-6 py-2 rounded-full font-medium hover:bg-accent hover:text-accent-foreground"
    >
      <a href={href}>{children}</a>
    </Button>
  );
};
export default NavLink;
