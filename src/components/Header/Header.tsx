import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "../common/ui/button";
import LogoIcon from "@/assets/logo.svg?react";
import { useTheme } from "../theme/theme-provider";
import NavLink from "../common/NavLink";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navItems = ["Product", "Pages", "Integrations", "Blog", "Pricing"];

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto w-full max-w-full px-4 sm:px-6 md:max-w-7xl lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex shrink-0 items-center gap-2">
            <LogoIcon className="h-8 w-8 shrink-0" />
            <span className="text-base font-bold whitespace-nowrap sm:text-lg">
              FinBiz
            </span>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative shrink-0 cursor-pointer"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              className="text-xs sm:inline-flex sm:text-sm"
              variant="raised-light"
              size="sm"
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="shrink-0 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              size="icon-sm"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-2 border-t pt-4 pb-4 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
