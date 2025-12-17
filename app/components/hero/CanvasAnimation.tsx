import { useRef, useEffect } from "react";

interface CanvasAnimationProps {
  frames: HTMLImageElement[];
  frameIndex: number;
  glowActive?: boolean;
  progress?: number;
}

export function CanvasAnimation({ 
  frames, 
  frameIndex, 
  glowActive = false,
  progress = 0 
}: CanvasAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Suppress unused vars warning
  void progress;

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frames[frameIndex];
    if (!canvas || !frame) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to frame dimensions
    canvas.width = frame.width;
    canvas.height = frame.height;

    // Zoomed out sizing - 85% of viewport with max constraints
    const frameRatio = frame.width / frame.height;
    const maxW = Math.min(window.innerWidth * 0.85, 1400);
    const maxH = window.innerHeight * 0.75;
    
    let displayW = maxW;
    let displayH = displayW / frameRatio;
    
    if (displayH > maxH) {
      displayH = maxH;
      displayW = displayH * frameRatio;
    }
    
    canvas.style.width = `${displayW}px`;
    canvas.style.height = `${displayH}px`;

    // Draw frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frame, 0, 0);
  }, [frames, frameIndex]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const frame = frames[frameIndex];
      if (!canvas || !frame) return;

      const frameRatio = frame.width / frame.height;
      const maxW = Math.min(window.innerWidth * 0.85, 1400);
      const maxH = window.innerHeight * 0.75;
      
      let displayW = maxW;
      let displayH = displayW / frameRatio;
      
      if (displayH > maxH) {
        displayH = maxH;
        displayW = displayH * frameRatio;
      }
      
      canvas.style.width = `${displayW}px`;
      canvas.style.height = `${displayH}px`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frames, frameIndex]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: "48%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 15,
      }}
    >
      {/* Ambient glow behind canvas - subtle shine */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "140%",
          height: "140%",
          background: `
            radial-gradient(ellipse 60% 50% at 50% 40%, rgba(93,230,122,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 50% 80%, rgba(93,230,122,0.08) 0%, transparent 40%)
          `,
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: -1,
          opacity: glowActive ? 1 : 0.5,
          transition: "opacity 1.5s ease",
        }}
      />

      {/* Floor reflection shine */}
      <div
        style={{
          position: "absolute",
          bottom: "-40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: "80%",
          background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(93,230,122,0.06) 0%, transparent 60%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: -1,
          opacity: glowActive ? 0.8 : 0.3,
          transition: "opacity 1.5s ease",
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          filter: glowActive
            ? "drop-shadow(0 40px 100px rgba(0,0,0,0.8)) drop-shadow(0 0 120px rgba(93,230,122,0.25))"
            : "drop-shadow(0 40px 100px rgba(0,0,0,0.8)) drop-shadow(0 0 80px rgba(93,230,122,0.15))",
          transition: "filter 1s ease",
        }}
      />
    </div>
  );
}
