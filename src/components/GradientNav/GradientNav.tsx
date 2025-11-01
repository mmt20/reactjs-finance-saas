import { Button } from "@/components/common/ui/button";
import NavLink from "../common/NavLink";

const NavLinks = ["Product", "Integration", "Demo", "Pricing"];

const GradientNav = () => {
  return (
    <div className="relative flex justify-center px-4 bg-background2">
      {/* Light mode gradient */}
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] md:h-[500px] md:w-[500px] lg:h-[880px] lg:w-[880px] max-w-[100vw] max-h-screen -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(163_220_47/0.29)_0%,rgb(255_255_255/0)_100%)] pointer-events-none opacity-100 dark:opacity-0 transition-opacity" />

      {/* Dark mode gradient */}
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] md:h-[500px] md:w-[500px] lg:h-[880px] lg:w-[880px] max-w-[100vw] max-h-screen -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(163_220_47/0.36)_0%,rgb(0_0_0/0)_100%)] pointer-events-none opacity-0 dark:opacity-100 transition-opacity" />

      <nav className="relative inline-flex flex-wrap justify-center items-center gap-0.5 sm:gap-1 rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 shadow-lg border border-white/60 dark:border-border bg-white/20 backdrop-blur-[65px] max-w-full">
        {NavLinks.map((link) => (
          <NavLink
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[10px] xs:text-xs sm:text-sm px-2 sm:px-3"
          >
            {link}
          </NavLink>
        ))}
        <Button
          variant="light"
          size="sm"
          className="rounded-full font-medium cursor-pointer border-0 text-[10px] xs:text-xs sm:text-sm px-2.5 sm:px-4 py-1.5 sm:py-2 h-auto"
        >
          Login
        </Button>
      </nav>
    </div>
  );
};

export default GradientNav;
