import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../ui/button";
import LogoIcon from "@/assets/logo.svg?react";
import { useTheme } from "../theme/theme-provider";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <header className="sticky top-0 z-50 bg-background backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-bold text-lg">FinBiz</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Product", "Pages", "Integrations", "Blog", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button className="md:inline-flex" variant={theme ? "light" : "default"}>
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 pb-4 border-t pt-4">
            {["Product", "Pages", "Integrations", "Blog", "Pricing"].map((item) => (
              <a key={item} href={`#${item}`} className="px-4 py-2 text-sm hover:bg-muted rounded">
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
