/**
 * Navigation Component
 * Fixed header with logo, nav links, and CTA
 */

interface NavigationProps {
  scrollProgress: number;
}

const navLinks = [
  { href: "#hero", label: "Home", active: true },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#cases", label: "Cases" },
  { href: "#about", label: "About" },
];

export function Navigation({ scrollProgress }: NavigationProps) {
  const isScrolled = scrollProgress > 0.02;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "72px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 2.5rem",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Background blur layer - appears on scroll */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(3, 3, 5, 0.85)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          opacity: isScrolled ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Bottom border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "2.5rem",
          right: "2.5rem",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(93,230,122,0.15), transparent)",
          opacity: isScrolled ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Nav inner container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="/logo/full.png"
            alt="Xala Technologies"
            style={{
              height: "36px",
              width: "auto",
              filter: "drop-shadow(0 0 12px rgba(93,230,122,0.5))",
              transition: "all 0.3s ease",
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <div
          className="hidden lg:flex"
          style={{
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                position: "relative",
                padding: "0.625rem 1rem",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: link.active ? "#5DE67A" : "rgba(255,255,255,0.55)",
                textDecoration: "none",
                borderRadius: "6px",
                transition: "all 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                if (!link.active) {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (!link.active) {
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <button
            style={{
              marginLeft: "1rem",
              padding: "0.625rem 1.25rem",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#030305",
              background: "linear-gradient(135deg, #5DE67A, #7AFF97)",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 12px rgba(93,230,122,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(93,230,122,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(93,230,122,0.25)";
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          aria-label="Open menu"
        >
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            <path
              d="M1 1h16M1 6h16M1 11h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
