import { useEffect, useRef, useCallback, useState } from "react";

interface UseCanvasAnimationOptions {
  /** Array of frame images */
  frames: HTMLImageElement[];
  /** Current frame index to display */
  frameIndex: number;
  /** Max width constraint */
  maxWidth?: number;
  /** Max height constraint */
  maxHeight?: number;
  /** Width percentage of viewport */
  viewportWidthPercent?: number;
  /** Height percentage of viewport */
  viewportHeightPercent?: number;
}

interface CanvasSize {
  width: number;
  height: number;
  displayWidth: number;
  displayHeight: number;
}

/**
 * Manage canvas rendering for frame animation
 */
export function useCanvasAnimation({
  frames,
  frameIndex,
  maxWidth = 1100,
  maxHeight,
  viewportWidthPercent = 0.75,
  viewportHeightPercent = 0.7,
}: UseCanvasAnimationOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [size, setSize] = useState<CanvasSize>({
    width: 0,
    height: 0,
    displayWidth: 0,
    displayHeight: 0,
  });

  // Calculate canvas size based on first frame
  const calculateSize = useCallback(() => {
    const firstFrame = frames[0];
    if (!firstFrame || !firstFrame.complete) return null;

    const imgWidth = firstFrame.naturalWidth || firstFrame.width;
    const imgHeight = firstFrame.naturalHeight || firstFrame.height;

    if (!imgWidth || !imgHeight) return null;

    const ratio = imgWidth / imgHeight;
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
    const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 1080;

    const maxW = Math.min(viewportWidth * viewportWidthPercent, maxWidth);
    const maxH = maxHeight ?? viewportHeight * viewportHeightPercent;

    let displayWidth = maxW;
    let displayHeight = displayWidth / ratio;

    if (displayHeight > maxH) {
      displayHeight = maxH;
      displayWidth = displayHeight * ratio;
    }

    return {
      width: imgWidth,
      height: imgHeight,
      displayWidth,
      displayHeight,
    };
  }, [frames, maxWidth, maxHeight, viewportWidthPercent, viewportHeightPercent]);

  // Set up canvas size
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const newSize = calculateSize();
    if (!newSize) return;

    canvas.width = newSize.width;
    canvas.height = newSize.height;
    canvas.style.width = `${newSize.displayWidth}px`;
    canvas.style.height = `${newSize.displayHeight}px`;

    ctxRef.current = canvas.getContext("2d");
    setSize(newSize);
  }, [calculateSize]);

  // Draw frame to canvas
  const drawFrame = useCallback(
    (index: number) => {
      const ctx = ctxRef.current;
      const frame = frames[index];

      if (!ctx || !frame || !frame.complete) return;

      ctx.clearRect(0, 0, size.width, size.height);
      ctx.drawImage(frame, 0, 0);
    },
    [frames, size.width, size.height]
  );

  // Set up canvas when frames load
  useEffect(() => {
    if (frames.length > 0 && frames[0]?.complete) {
      setupCanvas();
    }
  }, [frames, setupCanvas]);

  // Draw current frame when index changes
  useEffect(() => {
    if (frames.length > 0 && ctxRef.current) {
      drawFrame(frameIndex);
    }
  }, [frameIndex, frames, drawFrame]);

  // Handle window resize
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setupCanvas();
      drawFrame(frameIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setupCanvas, drawFrame, frameIndex]);

  return {
    canvasRef,
    size,
    drawFrame,
    setupCanvas,
  };
}
