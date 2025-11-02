import { Button } from "@/components/common/ui/button";
import NavLink from "../common/NavLink";

const NavLinks = ["Product", "Integration", "Demo", "Pricing"];

const GradientNav = () => {
  return (
    <div className="bg-background2 relative flex justify-center px-4">
      {/* Light mode gradient */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] max-h-screen w-[400px] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(163_220_47/0.29)_0%,rgb(255_255_255/0)_100%)] opacity-100 transition-opacity md:h-[500px] md:w-[500px] lg:h-[880px] lg:w-[880px] dark:opacity-0" />

      {/* Dark mode gradient */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] max-h-screen w-[400px] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgb(163_220_47/0.36)_0%,rgb(0_0_0/0)_100%)] opacity-0 transition-opacity md:h-[500px] md:w-[500px] lg:h-[880px] lg:w-[880px] dark:opacity-100" />

      <nav className="dark:border-border relative inline-flex max-w-full flex-wrap items-center justify-center gap-0.5 rounded-full border border-white/60 bg-white/20 px-1.5 py-1.5 shadow-lg backdrop-blur-[65px] sm:gap-1 sm:px-2 sm:py-2">
        {NavLinks.map((link) => (
          <NavLink
            key={link}
            href={`#${link.toLowerCase()}`}
            className="xs:text-xs px-2 text-[10px] sm:px-3 sm:text-sm"
          >
            {link}
          </NavLink>
        ))}
        <Button
          variant="light"
          size="sm"
          className="xs:text-xs h-auto cursor-pointer rounded-full border-0 px-2.5 py-1.5 text-[10px] font-medium sm:px-4 sm:py-2 sm:text-sm"
        >
          Login
        </Button>
      </nav>
    </div>
  );
};

export default GradientNav;
