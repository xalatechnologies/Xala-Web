import { cn } from "~/lib/utils";

interface Certification {
  name: string;
  icon: string;
}

interface CertificationRowProps {
  /** Whether the row is visible */
  isVisible: boolean;
  /** Animation delay in ms */
  delay?: number;
  /** Certifications to display */
  certifications?: Certification[];
}

const defaultCertifications: Certification[] = [
  { name: "ISO 27001", icon: "🛡️" },
  { name: "GDPR", icon: "🔒" },
  { name: "Azure", icon: "☁️" },
  { name: "AWS", icon: "⚡" },
];

export function CertificationRow({
  isVisible,
  delay = 0,
  certifications = defaultCertifications,
}: CertificationRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3",
        "transition-all duration-700 ease-out-cubic",
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-label-sm text-text-dim uppercase tracking-wider">
        Certified
      </span>
      <div className="flex items-center gap-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5",
              "bg-white/5 border border-white/10 rounded-lg",
              "text-label-sm text-text-muted",
              "transition-colors duration-300",
              "hover:bg-white/10 hover:border-white/20"
            )}
            title={cert.name}
          >
            <span className="text-sm">{cert.icon}</span>
            <span className="font-medium">{cert.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
