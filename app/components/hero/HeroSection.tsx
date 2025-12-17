"use client";

import { useRef } from "react";
import { useScrollProgress, useScrollThreshold } from "~/hooks";
import { cn } from "~/lib/utils";
import { CanvasAnimation } from "./CanvasAnimation";
import { HeroLogo } from "./HeroLogo";
import { HeroHeadline } from "./HeroHeadline";
import { HeroBrand } from "./HeroBrand";
import { ScrollIndicator } from "./ScrollIndicator";

interface HeroSectionProps {
  /** Loaded animation frames */
  frames: HTMLImageElement[];
  /** Total frame count */
  frameCount: number;
}

export function HeroSection({ frames, frameCount }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { progress, easedProgress } = useScrollProgress({
    containerRef: heroRef,
    eased: true,
  });

  // Calculate frame index based on eased progress
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(easedProgress * frameCount)
  );

  // Visibility thresholds
  const showScrollIndicator = !useScrollThreshold(progress, 0.02);
  const showSpotlight = useScrollThreshold(progress, 0.1);
  const showCanvasGlow = useScrollThreshold(progress, 0.15);
  const showBrand = useScrollThreshold(progress, 0.82);

  return (
    <section ref={heroRef} className="relative h-[500vh] z-10" id="hero">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          {/* Floor gradient */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 h-1/2",
              "bg-gradient-to-t from-black/90 via-black/50 to-transparent",
              "pointer-events-none z-[5]"
            )}
          />

          {/* Spotlight */}
          <div
            className={cn(
              "absolute top-[20%] left-1/2 -translate-x-1/2",
              "w-[150%] h-full",
              "bg-[radial-gradient(ellipse_40%_60%_at_50%_0%,rgba(93,230,122,0.03)_0%,transparent_70%)]",
              "pointer-events-none z-[6]",
              "transition-opacity duration-[1500ms]",
              showSpotlight ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Hero Logo */}
          <HeroLogo progress={progress} />

          {/* Headline */}
          <HeroHeadline progress={progress} />

          {/* Canvas Animation */}
          {frames.length > 0 && (
            <CanvasAnimation
              frames={frames}
              frameIndex={frameIndex}
              glowActive={showCanvasGlow}
            />
          )}

          {/* Brand Reveal */}
          <HeroBrand isVisible={showBrand} />

          {/* Scroll Indicator */}
          <ScrollIndicator isVisible={showScrollIndicator} />
        </div>
      </div>
    </section>
  );
}
