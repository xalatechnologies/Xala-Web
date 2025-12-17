import { cn } from "~/lib/utils";

interface BackgroundSystemProps {
  /** Show glow orbs */
  showGlows?: boolean;
}

export function BackgroundSystem({ showGlows = true }: BackgroundSystemProps) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient layer */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% 100%, rgba(93, 230, 122, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(0, 212, 255, 0.02) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(168, 85, 247, 0.02) 0%, transparent 50%),
            var(--bg)
          `,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 mask-fade-radial"
        style={{
          backgroundImage: `
            linear-gradient(rgba(93, 230, 122, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(93, 230, 122, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(rgba(93, 230, 122, 0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 40% 30% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 40% 30% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Glow orbs */}
      {showGlows && (
        <>
          <div
            className={cn(
              "absolute w-[800px] h-[800px] rounded-full",
              "top-[20%] -left-[20%]",
              "bg-[radial-gradient(circle,rgba(93,230,122,0.12)_0%,transparent_70%)]",
              "blur-[100px] animate-pulse-glow"
            )}
          />
          <div
            className={cn(
              "absolute w-[600px] h-[600px] rounded-full",
              "top-[10%] -right-[15%]",
              "bg-[radial-gradient(circle,rgba(0,212,255,0.08)_0%,transparent_70%)]",
              "blur-[100px] animate-pulse-glow",
              "animation-delay-[-5s] animation-direction-reverse"
            )}
            style={{ animationDelay: "-5s", animationDirection: "reverse" }}
          />
          <div
            className={cn(
              "absolute w-[1000px] h-[500px] rounded-full",
              "-bottom-[10%] left-1/2 -translate-x-1/2",
              "bg-[radial-gradient(ellipse,rgba(93,230,122,0.06)_0%,transparent_60%)]",
              "blur-[100px] animate-pulse-glow-slow"
            )}
          />
        </>
      )}

      {/* Scanning beams */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-xala to-transparent opacity-0 animate-beam-scan"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-0 left-[30%] w-0.5 h-full bg-gradient-to-b from-transparent via-xala to-transparent opacity-0 animate-beam-scan"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-0 left-[70%] w-0.5 h-full bg-gradient-to-b from-transparent via-xala to-transparent opacity-0 animate-beam-scan"
        style={{ animationDelay: "6s" }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
