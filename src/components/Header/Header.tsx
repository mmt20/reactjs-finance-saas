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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-full md:max-w-7xl">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <LogoIcon className="shrink-0 w-8 h-8" />
            <span className="font-bold text-base sm:text-lg whitespace-nowrap">FinBiz</span>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="cursor-pointer shrink-0 relative"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button className="sm:inline-flex text-xs sm:text-sm" variant="raised-light" size="sm">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              size="icon-sm"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
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
