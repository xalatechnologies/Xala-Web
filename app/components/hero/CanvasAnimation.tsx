import { useRef, useEffect } from "react";

interface CanvasAnimationProps {
  frames: HTMLImageElement[];
  frameIndex: number;
  glowActive?: boolean;
}

export function CanvasAnimation({ frames, frameIndex, glowActive = false }: CanvasAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frames[frameIndex];
    if (!canvas || !frame) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = frame.width;
    canvas.height = frame.height;

    // Calculate display size - 75% of viewport, max 1100px
    const ratio = frame.width / frame.height;
    const maxW = Math.min(window.innerWidth * 0.75, 1100);
    const maxH = window.innerHeight * 0.7;
    let w = maxW;
    let h = w / ratio;
    if (h > maxH) {
      h = maxH;
      w = h * ratio;
    }
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

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

      const ratio = frame.width / frame.height;
      const maxW = Math.min(window.innerWidth * 0.75, 1100);
      const maxH = window.innerHeight * 0.7;
      let w = maxW;
      let h = w / ratio;
      if (h > maxH) {
        h = maxH;
        w = h * ratio;
      }
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frames, frameIndex]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 15,
      }}
    >
      {/* Ambient glow behind canvas */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(93,230,122,0.08) 0%, rgba(93,230,122,0.03) 30%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: -1,
          opacity: glowActive ? 1 : 0,
          transition: "opacity 1.5s ease",
        }}
      />

      {/* Reflection effect */}
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background: "linear-gradient(to bottom, rgba(93,230,122,0.04) 0%, transparent 100%)",
          filter: "blur(30px)",
          pointerEvents: "none",
          opacity: glowActive ? 0.6 : 0,
          transition: "opacity 1.5s ease",
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          filter: glowActive
            ? "drop-shadow(0 30px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 100px rgba(93,230,122,0.25))"
            : "drop-shadow(0 30px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 60px rgba(93,230,122,0.12))",
          transition: "filter 1s ease",
        }}
      />
    </div>
  );
}
