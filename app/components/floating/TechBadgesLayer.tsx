import { cn } from "~/lib/utils";

interface TechBadge {
  name: string;
  color: string;
  position: { top: string; left?: string; right?: string };
  delay: number;
}

interface TechBadgesLayerProps {
  isVisible: boolean;
}

const techBadges: TechBadge[] = [
  { name: "React", color: "#5DE67A", position: { top: "28%", left: "19%" }, delay: 0 },
  { name: "TypeScript", color: "#00d4ff", position: { top: "42%", left: "16%" }, delay: 0.5 },
  { name: "Next.js", color: "#a855f7", position: { top: "58%", left: "17%" }, delay: 1 },
  { name: "Node.js", color: "#3b82f6", position: { top: "72%", left: "20%" }, delay: 1.5 },
  { name: "Azure", color: "#f59e0b", position: { top: "26%", right: "19%" }, delay: 0 },
  { name: "AWS", color: "#5DE67A", position: { top: "40%", right: "15%" }, delay: 0.5 },
  { name: "Python", color: "#00d4ff", position: { top: "56%", right: "18%" }, delay: 1 },
  { name: "AI/ML", color: "#a855f7", position: { top: "70%", right: "21%" }, delay: 1.5 },
];

export function TechBadgesLayer({ isVisible }: TechBadgesLayerProps) {
  return (
    <>
      {techBadges.map((badge, index) => (
        <div
          key={badge.name}
          style={{
            position: "absolute",
            zIndex: 20,
            top: badge.position.top,
            left: badge.position.left,
            right: badge.position.right,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${0.14 + index * 0.035}s`,
            animation: isVisible ? `float ${6 + index % 3}s ease-in-out infinite ${badge.delay}s` : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.6rem 1.1rem",
              background: "rgba(3,3,5,0.8)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "30px",
              backdropFilter: "blur(10px)",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {/* Colored dot */}
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: badge.color,
                boxShadow: `0 0 12px ${badge.color}`,
              }}
            />
            {badge.name}
          </div>
        </div>
      ))}

      {/* Add float keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </>
  );
}
