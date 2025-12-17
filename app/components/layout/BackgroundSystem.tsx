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

      {/* Extended Grid pattern - full coverage with edge glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(93,230,122,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(93,230,122,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: glowsVisible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
      />

      {/* Secondary finer grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(93,230,122,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(93,230,122,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          opacity: glowsVisible ? 0.5 : 0,
          transition: "opacity 2s ease 0.5s",
        }}
      />

      {/* Left edge vertical accent lines */}
      <div style={{ position: "absolute", left: "5%", top: 0, bottom: 0, display: "flex", gap: "8px" }}>
        {[0, 1, 2].map((i) => (
          <div
            key={`left-line-${i}`}
            style={{
              width: "1px",
              height: "100%",
              background: `linear-gradient(to bottom, 
                transparent 0%, 
                rgba(93,230,122,${0.15 - i * 0.04}) 20%, 
                rgba(93,230,122,${0.2 - i * 0.05}) 50%, 
                rgba(93,230,122,${0.15 - i * 0.04}) 80%, 
                transparent 100%
              )`,
              opacity: glowsVisible ? 1 : 0,
              transition: `opacity 1.5s ease ${0.3 + i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Right edge vertical accent lines */}
      <div style={{ position: "absolute", right: "5%", top: 0, bottom: 0, display: "flex", gap: "8px" }}>
        {[0, 1, 2].map((i) => (
          <div
            key={`right-line-${i}`}
            style={{
              width: "1px",
              height: "100%",
              background: `linear-gradient(to bottom, 
                transparent 0%, 
                rgba(93,230,122,${0.15 - i * 0.04}) 20%, 
                rgba(93,230,122,${0.2 - i * 0.05}) 50%, 
                rgba(93,230,122,${0.15 - i * 0.04}) 80%, 
                transparent 100%
              )`,
              opacity: glowsVisible ? 1 : 0,
              transition: `opacity 1.5s ease ${0.3 + i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Top horizontal accent line */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "10%",
          right: "10%",
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(93,230,122,0.15) 20%, rgba(93,230,122,0.2) 50%, rgba(93,230,122,0.15) 80%, transparent 100%)",
          opacity: glowsVisible ? 1 : 0,
          transition: "opacity 1.5s ease 0.5s",
        }}
      />

      {/* Floating geometric dots - left side */}
      {[
        { top: "15%", left: "8%", size: 6, delay: 0 },
        { top: "25%", left: "4%", size: 4, delay: 0.3 },
        { top: "40%", left: "6%", size: 8, delay: 0.6 },
        { top: "60%", left: "3%", size: 5, delay: 0.9 },
        { top: "75%", left: "7%", size: 6, delay: 1.2 },
      ].map((dot, i) => (
        <div
          key={`dot-left-${i}`}
          style={{
            position: "absolute",
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: "50%",
            background: "rgba(93,230,122,0.4)",
            boxShadow: "0 0 10px rgba(93,230,122,0.3)",
            opacity: glowsVisible ? 1 : 0,
            transition: `opacity 1s ease ${dot.delay}s`,
            animation: glowsVisible ? `float ${3 + i * 0.5}s ease-in-out infinite` : "none",
          }}
        />
      ))}

      {/* Floating geometric dots - right side */}
      {[
        { top: "20%", right: "6%", size: 5, delay: 0.2 },
        { top: "35%", right: "4%", size: 7, delay: 0.5 },
        { top: "50%", right: "8%", size: 4, delay: 0.8 },
        { top: "65%", right: "5%", size: 6, delay: 1.1 },
        { top: "80%", right: "3%", size: 5, delay: 1.4 },
      ].map((dot, i) => (
        <div
          key={`dot-right-${i}`}
          style={{
            position: "absolute",
            top: dot.top,
            right: dot.right,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: "50%",
            background: "rgba(0,212,255,0.4)",
            boxShadow: "0 0 10px rgba(0,212,255,0.3)",
            opacity: glowsVisible ? 1 : 0,
            transition: `opacity 1s ease ${dot.delay}s`,
            animation: glowsVisible ? `float ${3.5 + i * 0.5}s ease-in-out infinite reverse` : "none",
          }}
        />
      ))}

      {/* Corner accents - top left */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          left: "3%",
          width: "60px",
          height: "60px",
          borderLeft: "1px solid rgba(93,230,122,0.2)",
          borderTop: "1px solid rgba(93,230,122,0.2)",
          opacity: glowsVisible ? 1 : 0,
          transition: "opacity 1.5s ease 0.8s",
        }}
      />

      {/* Corner accents - top right */}
      <div
        style={{
          position: "absolute",
          top: "4%",
          right: "3%",
          width: "60px",
          height: "60px",
          borderRight: "1px solid rgba(93,230,122,0.2)",
          borderTop: "1px solid rgba(93,230,122,0.2)",
          opacity: glowsVisible ? 1 : 0,
          transition: "opacity 1.5s ease 0.8s",
        }}
      />

      {/* Corner accents - bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          left: "3%",
          width: "60px",
          height: "60px",
          borderLeft: "1px solid rgba(93,230,122,0.15)",
          borderBottom: "1px solid rgba(93,230,122,0.15)",
          opacity: glowsVisible ? 1 : 0,
          transition: "opacity 1.5s ease 0.8s",
        }}
      />

      {/* Corner accents - bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: "4%",
          right: "3%",
          width: "60px",
          height: "60px",
          borderRight: "1px solid rgba(93,230,122,0.15)",
          borderBottom: "1px solid rgba(93,230,122,0.15)",
          opacity: glowsVisible ? 1 : 0,
          transition: "opacity 1.5s ease 0.8s",
        }}
      />

      {/* Hexagon decorative elements - left */}
      <svg
        style={{
          position: "absolute",
          top: "30%",
          left: "2%",
          width: "40px",
          height: "46px",
          opacity: glowsVisible ? 0.3 : 0,
          transition: "opacity 2s ease 1s",
        }}
        viewBox="0 0 40 46"
      >
        <polygon
          points="20,1 38,12 38,34 20,45 2,34 2,12"
          fill="none"
          stroke="rgba(93,230,122,0.4)"
          strokeWidth="1"
        />
      </svg>

      {/* Hexagon decorative elements - right */}
      <svg
        style={{
          position: "absolute",
          top: "45%",
          right: "2%",
          width: "35px",
          height: "40px",
          opacity: glowsVisible ? 0.3 : 0,
          transition: "opacity 2s ease 1.2s",
        }}
        viewBox="0 0 40 46"
      >
        <polygon
          points="20,1 38,12 38,34 20,45 2,34 2,12"
          fill="none"
          stroke="rgba(0,212,255,0.4)"
          strokeWidth="1"
        />
      </svg>

      {/* Small cross markers */}
      {[
        { top: "18%", left: "12%" },
        { top: "70%", left: "10%" },
        { top: "22%", right: "11%" },
        { top: "68%", right: "9%" },
      ].map((pos, i) => (
        <div
          key={`cross-${i}`}
          style={{
            position: "absolute",
            ...pos,
            width: "12px",
            height: "12px",
            opacity: glowsVisible ? 0.4 : 0,
            transition: `opacity 1.5s ease ${1 + i * 0.2}s`,
          }}
        >
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "rgba(93,230,122,0.5)" }} />
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "rgba(93,230,122,0.5)" }} />
        </div>
      ))}

      {/* Floating Tech Icons - Left Side */}
      {[
        { top: "20%", left: "6%", icon: "blockchain", size: 24, duration: 20, delay: 0 },
        { top: "45%", left: "4%", icon: "ai", size: 28, duration: 25, delay: 2 },
        { top: "70%", left: "7%", icon: "cloud", size: 22, duration: 22, delay: 4 },
        { top: "35%", left: "9%", icon: "code", size: 20, duration: 18, delay: 1 },
        { top: "85%", left: "5%", icon: "database", size: 24, duration: 24, delay: 3 },
      ].map((item, i) => (
        <div
          key={`tech-left-${i}`}
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            width: `${item.size}px`,
            height: `${item.size}px`,
            opacity: glowsVisible ? 0.25 : 0,
            transition: `opacity 2s ease ${item.delay}s`,
            animation: glowsVisible ? `drift-up ${item.duration}s ease-in-out infinite ${item.delay}s` : "none",
          }}
        >
          {item.icon === "blockchain" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(93,230,122,0.6)" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" />
            </svg>
          )}
          {item.icon === "ai" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.6)" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          )}
          {item.icon === "cloud" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(93,230,122,0.6)" strokeWidth="1.5">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
          )}
          {item.icon === "code" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.6)" strokeWidth="1.5">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
              <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
          )}
          {item.icon === "database" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.6)" strokeWidth="1.5">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          )}
        </div>
      ))}

      {/* Floating Tech Icons - Right Side */}
      {[
        { top: "15%", right: "5%", icon: "network", size: 26, duration: 22, delay: 1 },
        { top: "40%", right: "8%", icon: "chip", size: 24, duration: 26, delay: 3 },
        { top: "60%", right: "4%", icon: "lock", size: 20, duration: 20, delay: 0 },
        { top: "30%", right: "6%", icon: "api", size: 22, duration: 24, delay: 2 },
        { top: "80%", right: "7%", icon: "lightning", size: 24, duration: 18, delay: 4 },
      ].map((item, i) => (
        <div
          key={`tech-right-${i}`}
          style={{
            position: "absolute",
            top: item.top,
            right: item.right,
            width: `${item.size}px`,
            height: `${item.size}px`,
            opacity: glowsVisible ? 0.25 : 0,
            transition: `opacity 2s ease ${item.delay}s`,
            animation: glowsVisible ? `drift-down ${item.duration}s ease-in-out infinite ${item.delay}s` : "none",
          }}
        >
          {item.icon === "network" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(93,230,122,0.6)" strokeWidth="1.5">
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="4" r="2" />
              <circle cx="12" cy="20" r="2" />
              <circle cx="4" cy="8" r="2" />
              <circle cx="20" cy="8" r="2" />
              <circle cx="4" cy="16" r="2" />
              <circle cx="20" cy="16" r="2" />
              <path d="M12 6v4M12 14v4M6 9l4 2M14 11l4-2M6 15l4-2M14 13l4 2" />
            </svg>
          )}
          {item.icon === "chip" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.6)" strokeWidth="1.5">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <rect x="9" y="9" width="6" height="6" />
              <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
            </svg>
          )}
          {item.icon === "lock" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.6)" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <circle cx="12" cy="16" r="1" />
            </svg>
          )}
          {item.icon === "api" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(93,230,122,0.6)" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h10" />
              <circle cx="20" cy="18" r="2" />
            </svg>
          )}
          {item.icon === "lightning" && (
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(245,158,11,0.6)" strokeWidth="1.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          )}
        </div>
      ))}

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
            width: "1px",
            height: "100%",
            background: "linear-gradient(to bottom, transparent, rgba(93,230,122,0.6), transparent)",
            opacity: 0,
            animation: `beam-scan 10s ease-in-out infinite ${i * 3}s`,
          }}
        />
      ))}

      {/* Noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
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
          0% { transform: translateX(-50%) translateY(-100%) scaleY(0.5); opacity: 0; }
          50% { transform: translateX(-50%) translateY(0%) scaleY(1); opacity: 0.2; }
          100% { transform: translateX(-50%) translateY(100%) scaleY(0.5); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes drift-up {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.25; }
          25% { transform: translateY(-20px) rotate(5deg); opacity: 0.35; }
          50% { transform: translateY(-10px) rotate(-3deg); opacity: 0.2; }
          75% { transform: translateY(-25px) rotate(3deg); opacity: 0.3; }
        }
        @keyframes drift-down {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.25; }
          25% { transform: translateY(15px) rotate(-5deg); opacity: 0.3; }
          50% { transform: translateY(5px) rotate(3deg); opacity: 0.2; }
          75% { transform: translateY(20px) rotate(-3deg); opacity: 0.35; }
        }
      `}</style>
    </div>
  );
}
