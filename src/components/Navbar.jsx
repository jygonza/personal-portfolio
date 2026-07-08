import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ isDark, onToggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-[15px] font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            Résumé
          </a>
          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-muted hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-muted hover:bg-accent transition-colors text-muted-foreground"
          >
            {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
            className="p-2 rounded-full bg-muted hover:bg-accent transition-colors text-muted-foreground"
          >
            {menuOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
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
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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

export default Navbar;
