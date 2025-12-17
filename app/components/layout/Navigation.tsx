interface NavigationProps {
  scrollProgress: number;
}

const navLinks = [
  { href: "#hero", label: "Home", active: true },
  { href: "#what-we-deliver", label: "Services" },
  { href: "#saas-products", label: "Products" },
  { href: "#clients", label: "Cases" },
  { href: "#track-record", label: "About" },
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
        height: "80px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 4rem",
        background: "transparent",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Background blur layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(3, 3, 5, 0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          opacity: isScrolled ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Bottom border */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          opacity: isScrolled ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Nav inner */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <img
            src="/logo/full.png"
            alt="Xala Technologies"
            style={{
              height: "42px",
              width: "auto",
              filter: "drop-shadow(0 0 15px rgba(93,230,122,0.6))",
              transition: "all 0.3s ease",
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex"
          style={{
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                position: "relative",
                padding: "0.75rem 1.25rem",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: link.active ? "#5DE67A" : "rgba(255,255,255,0.5)",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "all 0.2s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                if (!link.active) e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (!link.active) e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              {link.label}
              {/* Active dot */}
              {link.active && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "0.5rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "4px",
                    height: "4px",
                    background: "#5DE67A",
                    borderRadius: "50%",
                    boxShadow: "0 0 10px rgba(93,230,122,0.5)",
                  }}
                />
              )}
            </a>
          ))}

          {/* CTA Button */}
          <button
            style={{
              position: "relative",
              marginLeft: "1.5rem",
              padding: "0.75rem 1.5rem",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "#030305",
              background: "linear-gradient(135deg, #5DE67A, #7AFF97)",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(93,230,122,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
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
            width: "44px",
            height: "44px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          aria-label="Open menu"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            style={{ color: "white" }}
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
