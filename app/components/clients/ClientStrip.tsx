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
        bottom: "3%",
        left: 0,
        right: 0,
        zIndex: 20,
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease",
      }}
    >
      {/* Label with enhanced styling */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
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
            color: "rgba(255,255,255,0.5)",
            padding: "0.75rem 2rem",
            background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "40px",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          Trusted by Industry Leaders
        </span>
      </div>

      {/* Track wrapper with mask */}
      <div
        style={{
          position: "relative",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          padding: "0.75rem 0",
        }}
      >
        {/* Scrolling track */}
        <div
          style={{
            display: "flex",
            gap: "4rem",
            animation: isVisible ? "scroll-clients 45s linear infinite" : "none",
            width: "max-content",
          }}
        >
          {duplicatedClients.map((client, index) => (
            <img
              key={`${client.name}-${index}`}
              src={client.logo}
              alt={client.name}
              style={{
                height: "24px",
                opacity: 0.35,
                filter: "grayscale(1) brightness(2)",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.filter = "grayscale(0) brightness(1)";
                e.currentTarget.style.transform = "scale(1.15) translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.35";
                e.currentTarget.style.filter = "grayscale(1) brightness(2)";
                e.currentTarget.style.transform = "scale(1) translateY(0)";
              }}
            />
          ))}
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
