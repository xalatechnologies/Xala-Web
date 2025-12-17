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
  { name: "ISO", icon: "✓" },
  { name: "GDPR", icon: "🛡" },
  { name: "Azure", icon: "☁" },
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
        "grid grid-cols-4 gap-2.5",
        "transition-all duration-600 ease-out-cubic",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2.5"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {certifications.map((cert) => (
        <div
          key={cert.name}
          className={cn(
            "relative flex flex-col items-center justify-center",
            "py-4 px-2",
            "bg-white/[0.03] border border-white/[0.08] rounded-xl",
            "transition-all duration-300 overflow-hidden",
            // Glow effect on hover
            "before:absolute before:top-1/2 before:left-1/2",
            "before:w-0 before:h-0 before:rounded-full",
            "before:bg-[radial-gradient(circle,var(--xala-green-glow),transparent)]",
            "before:-translate-x-1/2 before:-translate-y-1/2",
            "before:transition-all before:duration-400",
            "hover:before:w-[100px] hover:before:h-[100px]",
            "hover:border-xala hover:-translate-y-0.5",
            "hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          )}
        >
          <span className="relative z-10 text-[1.3rem] mb-1.5">
            {cert.icon}
          </span>
          <span className="relative z-10 text-[0.6rem] font-bold text-text-muted uppercase tracking-[0.1em]">
            {cert.name}
          </span>
        </div>
      ))}
    </div>
  );
}
