import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

interface NavProps {
  isDark: boolean;
  onToggleDark: () => void;
}

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav({ isDark, onToggleDark }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-[15px] font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Joo-Young Gonzalez
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Résumé
          </a>
          {/* using <button> instead of <Button>: size needs to match icon-only round style not covered by Button variants */}
          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-muted hover:bg-accent-foreground/10 transition-colors text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-muted hover:bg-accent transition-colors text-muted-foreground"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
            className="p-2 rounded-full bg-muted hover:bg-accent transition-colors text-muted-foreground"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-5 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-primary"
          >
            Résumé
          </a>
        </div>
      )}
    </header>
  );
}
