"use client";

import { useCanvasAnimation } from "~/hooks";
import { cn } from "~/lib/utils";

interface CanvasAnimationProps {
  /** Loaded frame images */
  frames: HTMLImageElement[];
  /** Current frame index to display */
  frameIndex: number;
  /** Whether glow effect is active */
  glowActive?: boolean;
}

export function CanvasAnimation({
  frames,
  frameIndex,
  glowActive = false,
}: CanvasAnimationProps) {
  const { canvasRef } = useCanvasAnimation({
    frames,
    frameIndex,
    maxWidth: 1100,
    viewportWidthPercent: 0.75,
    viewportHeightPercent: 0.7,
  });

  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[15]",
        // Ambient glow behind canvas
        "before:absolute before:top-1/2 before:left-1/2",
        "before:-translate-x-1/2 before:-translate-y-1/2",
        "before:w-[120%] before:h-[120%]",
        "before:bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(93,230,122,0.08)_0%,rgba(93,230,122,0.03)_30%,transparent_70%)]",
        "before:blur-[40px] before:pointer-events-none before:-z-10",
        "before:opacity-0 before:transition-opacity before:duration-[1500ms]",
        glowActive && "before:opacity-100",
        // Reflection effect below
        "after:absolute after:-bottom-[30%] after:left-1/2",
        "after:-translate-x-1/2",
        "after:w-[80%] after:h-[60%]",
        "after:bg-gradient-to-b after:from-xala-glow-subtle after:to-transparent",
        "after:blur-[30px] after:pointer-events-none",
        "after:opacity-0 after:transition-opacity after:duration-[1500ms]",
        glowActive && "after:opacity-60"
      )}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "block",
          "drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]",
          "transition-[filter] duration-1000",
          glowActive
            ? "drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)] [filter:drop-shadow(0_0_100px_rgba(93,230,122,0.25))]"
            : "[filter:drop-shadow(0_0_60px_rgba(93,230,122,0.12))]"
        )}
      />
    </div>
  );
}
