interface Client {
  name: string;
  logo: string;
}

interface ClientStripProps {
  isVisible: boolean;
  clients?: Client[];
}

const defaultClients: Client[] = [
  { name: "Altinn", logo: "/clients/altinn.png" },
  { name: "NHN", logo: "/clients/nhn.png" },
  { name: "Norwegian", logo: "/clients/norwegian.png" },
  { name: "NOV", logo: "/clients/nov2.png" },
  { name: "SSB", logo: "/clients/ssb.png" },
  { name: "Sykehuspartner", logo: "/clients/sykehuspartner.png" },
  { name: "Ruter", logo: "/clients/ruter.png" },
  { name: "Nordre Follo", logo: "/clients/nordre-follo.png" },
];

export function ClientStrip({
  isVisible,
  clients = defaultClients,
}: ClientStripProps) {
  const duplicatedClients = [...clients, ...clients];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease",
      }}
    >
      {/* Light background strip for better logo visibility */}
      <div
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "1.5rem 0 2rem",
        }}
      >
        {/* Label with enhanced styling */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.25rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.6s ease 0.3s",
          }}
        >
          <span
            style={{
              position: "relative",
              display: "inline-block",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              padding: "0.6rem 1.75rem",
              background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "40px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            Trusted by Industry Leaders
          </span>
        </div>

        {/* Track wrapper with mask */}
        <div
          style={{
            position: "relative",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            padding: "0.5rem 0",
          }}
        >
          {/* Scrolling track */}
          <div
            style={{
              display: "flex",
              gap: "4rem",
              animation: isVisible ? "scroll-clients 40s linear infinite" : "none",
              width: "max-content",
            }}
          >
            {duplicatedClients.map((client, index) => (
              <img
                key={`${client.name}-${index}`}
                src={client.logo}
                alt={client.name}
                style={{
                  height: "28px",
                  opacity: 0.6,
                  filter: "grayscale(1) brightness(1.8)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.filter = "grayscale(0) brightness(1)";
                  e.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.6";
                  e.currentTarget.style.filter = "grayscale(1) brightness(1.8)";
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes scroll-clients {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
