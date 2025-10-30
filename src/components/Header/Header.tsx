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
    <header className="sticky top-0 z-50 dark:bg-[#0F0F0F] backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-bold text-lg">FinBiz</span>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 px-0 cursor-pointer"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button className="md:inline-flex cursor-pointer" variant={"raised-light"}>
              Get Started
            </Button>

            <Button
              variant="link"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              size="icon"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 pb-4 border-t pt-4">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase()}`}>
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
