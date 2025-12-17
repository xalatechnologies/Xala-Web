import { useEffect, useState } from "react";

export function BackgroundSystem() {
  const [glowsVisible, setGlowsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGlowsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Base gradient - seamless edge-to-edge */}
      <div
        style={{
          position: "absolute",
          inset: "-10%",
          width: "120%",
          height: "120%",
          background: `
            radial-gradient(ellipse 120% 80% at 50% 100%, rgba(93,230,122,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 100% 60% at 20% 20%, rgba(0,212,255,0.03) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 80% 80%, rgba(168,85,247,0.02) 0%, transparent 60%),
            radial-gradient(ellipse 150% 100% at 50% 50%, #050508 0%, #030305 100%)
          `,
        }}
      />

      {/* Grid pattern - extended to edges */}
      <div
        style={{
          position: "absolute",
          inset: "-20%",
          width: "140%",
          height: "140%",
          backgroundImage: `
            linear-gradient(rgba(93,230,122,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(93,230,122,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Dots pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(93,230,122,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          WebkitMaskImage: "radial-gradient(ellipse 40% 30% at 50% 50%, black 0%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 40% 30% at 50% 50%, black 0%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      {/* Glow orb 1 - Left side ambient */}
      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          background: "radial-gradient(circle, rgba(93,230,122,0.08) 0%, transparent 60%)",
          top: "10%",
          left: "-30%",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: glowsVisible ? 0.8 : 0,
          transition: "all 2s ease",
          animation: "pulse-glow 8s ease-in-out infinite",
        }}
      />

      {/* Glow orb 2 - Right side ambient */}
      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 60%)",
          top: "5%",
          right: "-25%",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: glowsVisible ? 0.8 : 0,
          transition: "all 2s ease",
          animation: "pulse-glow 10s ease-in-out infinite reverse",
        }}
      />

      {/* Glow orb 3 - Bottom center floor glow */}
      <div
        style={{
          position: "absolute",
          width: "120%",
          height: "600px",
          background: "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(93,230,122,0.05) 0%, transparent 60%)",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: glowsVisible ? 1 : 0,
          transition: "all 2s ease",
          animation: "pulse-glow 12s ease-in-out infinite",
        }}
      />

      {/* Scanning beams */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: i === 1 ? "50%" : i === 2 ? "30%" : "70%",
            transform: "translateX(-50%)",
            width: "2px",
            height: "100%",
            background: "linear-gradient(to bottom, transparent, #5DE67A, transparent)",
            opacity: 0,
            animation: `beam-scan 8s ease-in-out infinite ${i * 2}s`,
          }}
        />
      ))}

      {/* Noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animation keyframes */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes beam-scan {
          0% { transform: translateY(-100%) scaleY(0.5); opacity: 0; }
          50% { transform: translateY(0%) scaleY(1); opacity: 0.3; }
          100% { transform: translateY(100%) scaleY(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
