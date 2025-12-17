"use client";

import { cn } from "~/lib/utils";
import { TechBadge } from "./TechBadge";

interface TechBadgeConfig {
  name: string;
  icon: string;
  variant?: "default" | "copper" | "cyan" | "purple";
  position: string;
  delay: number;
}

interface TechBadgesLayerProps {
  /** Whether the badges are visible */
  isVisible: boolean;
}

const techBadges: TechBadgeConfig[] = [
  {
    name: "TypeScript",
    icon: "📘",
    variant: "cyan",
    position: "top-[15%] left-[8%]",
    delay: 0,
  },
  {
    name: "React",
    icon: "⚛️",
    variant: "cyan",
    position: "top-[25%] right-[10%]",
    delay: 100,
  },
  {
    name: "Node.js",
    icon: "🟢",
    variant: "default",
    position: "top-[40%] left-[5%]",
    delay: 200,
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    variant: "purple",
    position: "bottom-[35%] right-[7%]",
    delay: 300,
  },
  {
    name: "AWS",
    icon: "☁️",
    variant: "copper",
    position: "bottom-[25%] left-[12%]",
    delay: 400,
  },
  {
    name: "Docker",
    icon: "🐳",
    variant: "cyan",
    position: "bottom-[20%] right-[15%]",
    delay: 500,
  },
  {
    name: "GraphQL",
    icon: "◈",
    variant: "purple",
    position: "top-[55%] right-[5%]",
    delay: 600,
  },
  {
    name: "Kubernetes",
    icon: "☸️",
    variant: "default",
    position: "top-[60%] left-[10%]",
    delay: 700,
  },
];

export function TechBadgesLayer({ isVisible }: TechBadgesLayerProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-15 pointer-events-none",
        "transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      {techBadges.map((badge) => (
        <TechBadge
          key={badge.name}
          name={badge.name}
          icon={badge.icon}
          variant={badge.variant}
          isVisible={isVisible}
          delay={badge.delay}
          className={cn(badge.position, "pointer-events-auto")}
        />
      ))}
    </div>
  );
}
