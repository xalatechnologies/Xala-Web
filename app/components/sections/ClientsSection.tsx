import { cn } from "~/lib/utils";

interface Client {
  name: string;
  sector: string;
  logo: string;
}

// Local client logos from /public/clients/
const clients: Client[] = [
  { name: "Altinn", sector: "Government", logo: "/clients/altinn.png" },
  { name: "NHN", sector: "Healthcare", logo: "/clients/nhn.png" },
  { name: "Norwegian", sector: "Aviation", logo: "/clients/norwegian.png" },
  { name: "NOV", sector: "Energy & Offshore", logo: "/clients/nov2.png" },
  { name: "SSB", sector: "Government", logo: "/clients/ssb.png" },
  { name: "Sykehuspartner", sector: "Healthcare", logo: "/clients/sykehuspartner.png" },
  { name: "Ruter", sector: "Transportation", logo: "/clients/ruter.png" },
  { name: "Nordre Follo", sector: "Municipality", logo: "/clients/nordre-follo.png" },
];

const testimonial = {
  quote:
    "Xala Technologies delivered a complex integration platform that exceeded our expectations. Their technical expertise and commitment to quality made them an invaluable partner.",
  author: "Technology Director",
  company: "Enterprise Client",
};

interface ClientsSectionProps {
  isVisible: boolean;
}

export function ClientsSection({ isVisible }: ClientsSectionProps) {
  return (
    <section
      id="clients"
      className={cn(
        "relative py-32 px-6 md:px-12 lg:px-24",
        "bg-gradient-to-b from-bg via-bg-elevated/50 to-bg"
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-label-sm font-semibold tracking-[0.3em] uppercase text-xala mb-4 block">
            Trusted Partnerships
          </span>
          <h2 className="font-display text-display-sm font-bold text-text mb-6">
            Clients Who Trust Our Delivery
          </h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
            We work with enterprises, public sector organizations, and regulated industries
            where reliability and security are non-negotiable.
          </p>
        </div>

        {/* Client Grid */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-4 mb-16",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={cn(
                "relative group p-6",
                "bg-white/[0.02] border border-white/10 rounded-xl",
                "transition-all duration-500 flex flex-col items-center justify-center min-h-[120px]",
                "hover:bg-white/[0.05] hover:border-xala/30",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 w-auto opacity-40 grayscale brightness-150 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
              />
              <div className="text-label-sm text-text-muted mt-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {client.sector}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div
          className={cn(
            "max-w-3xl mx-auto",
            "transition-all duration-1000 ease-out-cubic",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <div
            className={cn(
              "relative p-10",
              "bg-gradient-to-br from-xala/5 to-transparent",
              "border border-xala/20 rounded-2xl"
            )}
          >
            {/* Quote mark */}
            <div className="absolute -top-4 left-8 text-6xl text-xala/30 font-serif">
              "
            </div>

            <blockquote className="text-body-lg text-text leading-relaxed mb-6 pl-4">
              {testimonial.quote}
            </blockquote>

            <div className="flex items-center gap-4 pl-4">
              <div className="w-10 h-10 rounded-full bg-xala/20 flex items-center justify-center">
                <span className="text-xala font-semibold">
                  {testimonial.author[0]}
                </span>
              </div>
              <div>
                <div className="text-body-md font-semibold text-text">
                  {testimonial.author}
                </div>
                <div className="text-body-sm text-text-muted">
                  {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
