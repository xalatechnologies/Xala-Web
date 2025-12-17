"use client";

import { cn } from "~/lib/utils";

interface Client {
  name: string;
  logo?: string;
}

interface ClientStripProps {
  /** Whether the strip is visible */
  isVisible: boolean;
  /** Clients to display */
  clients?: Client[];
}

const defaultClients: Client[] = [
  { name: "TechCorp" },
  { name: "InnovateLabs" },
  { name: "DataFlow" },
  { name: "CloudScale" },
  { name: "SecureNet" },
  { name: "AIVentures" },
  { name: "FinanceHub" },
  { name: "HealthTech" },
  { name: "EcoSystems" },
  { name: "SmartGrid" },
];

export function ClientStrip({
  isVisible,
  clients = defaultClients,
}: ClientStripProps) {
  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <div
      className={cn(
        "fixed bottom-[4%] left-0 right-0 z-20",
        "overflow-hidden",
        "transition-all duration-1000 ease-out-cubic",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      )}
    >
      {/* Label */}
      <div className="text-center mb-4">
        <span className="text-label-sm font-semibold tracking-[0.3em] uppercase text-text-dim">
          Trusted By Industry Leaders
        </span>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          className={cn(
            "flex items-center gap-12",
            "animate-scroll-clients",
            // Pause on hover
            "hover:[animation-play-state:paused]"
          )}
          style={{
            width: "max-content",
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className={cn(
                "flex items-center justify-center",
                "px-8 py-4",
                "bg-white/[0.03] border border-white/10 rounded-xl",
                "backdrop-blur-sm",
                "transition-all duration-300",
                "hover:bg-white/[0.06] hover:border-white/20",
                "hover:scale-105",
                "min-w-[160px]"
              )}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-body-md font-display font-semibold text-text-muted">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
