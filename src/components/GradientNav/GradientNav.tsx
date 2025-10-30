import { Button } from "@/components/ui/button";
import NavLink from "../common/NavLink";

const NavLinks = ["Product", "Integration", "Demo", "Pricing"];
const GradientNav = () => {
  return (
    <div className="relative flex justify-center pt-8 px-4">
      {/* Light mode gradient */}
      <div className="absolute top-1/2 left-1/2 h-[880px] w-[880px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(163_220_47/0.29)_0%,rgb(255_255_255/0)_100%)] pointer-events-none opacity-100 dark:opacity-0 transition-opacity" />

      {/* Dark mode gradient */}
      <div className="absolute top-1/2 left-1/2 h-[880px] w-[880px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(163_220_47/0.36)_0%,rgb(0_0_0/0)_100%)] pointer-events-none opacity-100 dark:opacity-100 transition-opacity" />

      <nav className="relative inline-flex items-center gap-1 rounded-full px-2 py-2 shadow-lg border border-white/60 dark:border-border bg-white/20 backdrop-blur-[65px]">
        {NavLinks.map((link) => (
          <NavLink key={link} href={`#${link.toLowerCase()}`}>
            {link}
          </NavLink>
        ))}
        <Button className="rounded-full font-medium cursor-pointer">Login</Button>
      </nav>
    </div>
  );
};

export default GradientNav;
