import { cn } from "~/lib/utils";

interface NavigationProps {
  isScrolled: boolean;
}

const navLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#cases", label: "Cases" },
  { href: "#about", label: "About" },
];

export function Navigation({ isScrolled }: NavigationProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 h-nav z-[1000]",
        "flex items-center justify-between px-16",
        "transition-all duration-400 ease-out-cubic",
        // Background effect on scroll
        "before:absolute before:inset-0 before:bg-bg/80 before:backdrop-blur-xl",
        "before:opacity-0 before:transition-opacity before:duration-400",
        // Bottom border on scroll
        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px",
        "after:bg-gradient-to-r after:from-transparent after:via-border after:to-transparent",
        "after:opacity-0 after:transition-opacity after:duration-400",
        isScrolled && "before:opacity-100 after:opacity-100"
      )}
    >
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/assets/logo/full.png"
            alt="Xala Technologies"
            className="h-7 w-auto glow-xala transition-all duration-300 hover:glow-xala-lg"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "relative px-5 py-3 text-sm font-medium rounded-lg",
                "transition-all duration-200",
                "overflow-hidden",
                link.active
                  ? "text-xala"
                  : "text-text-muted hover:text-text",
                // Active dot indicator
                "before:absolute before:bottom-2 before:left-1/2",
                "before:-translate-x-1/2 before:w-1 before:h-1",
                "before:bg-xala before:rounded-full",
                "before:transition-transform before:duration-200",
                link.active
                  ? "before:scale-100 before:shadow-[0_0_10px_var(--xala-green-glow)]"
                  : "before:scale-0 hover:before:scale-100"
              )}
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <button
            className={cn(
              "relative ml-6 px-6 py-3",
              "text-sm font-semibold text-bg",
              "bg-gradient-to-r from-xala to-xala-bright",
              "rounded-lg cursor-pointer",
              "transition-all duration-300",
              "overflow-hidden",
              "hover:-translate-y-0.5 hover:shadow-[0_10px_30px_var(--xala-green-glow)]",
              // Hover gradient overlay
              "before:absolute before:inset-0",
              "before:bg-gradient-to-r before:from-xala-bright before:to-xala",
              "before:opacity-0 before:transition-opacity before:duration-300",
              "hover:before:opacity-100"
            )}
          >
            <span className="relative z-10">Get in Touch</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden flex items-center justify-center",
            "w-11 h-11 rounded-xl",
            "bg-bg-surface border border-border",
            "cursor-pointer"
          )}
          aria-label="Open menu"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            className="text-text"
          >
            <path
              d="M1 1h18M1 7h18M1 13h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
