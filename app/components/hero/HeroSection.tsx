import { useRef } from "react";
import { useScrollProgress, useScrollThreshold } from "~/hooks";
import { CanvasAnimation } from "./CanvasAnimation";
import { HeroLogo } from "./HeroLogo";
import { HeroHeadline } from "./HeroHeadline";
import { ScrollIndicator } from "./ScrollIndicator";
import { ServicePanel } from "~/components/panels";
import { ProductPanel } from "~/components/panels";
import { ClientStrip } from "~/components/clients";

interface HeroSectionProps {
  frames: HTMLImageElement[];
  frameCount: number;
}

export function HeroSection({ frames, frameCount }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { progress, easedProgress } = useScrollProgress({
    containerRef: heroRef,
    eased: true,
  });

  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(easedProgress * frameCount)
  );

  // Visibility thresholds - panels stay visible until end
  const showScrollIndicator = !useScrollThreshold(progress, 0.02);
  const showSpotlight = useScrollThreshold(progress, 0.1);
  const showCanvasGlow = useScrollThreshold(progress, 0.15);
  const showPanels = useScrollThreshold(progress, 0.05); // No upper limit - stays visible
  const showClients = true; // Always visible from page load

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{ position: "relative", height: "600vh", zIndex: 10 }}
    >
      {/* Sticky fullscreen container */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {/* Floor gradient */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 5,
            }}
          />

          {/* Spotlight */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "150%",
              height: "100%",
              background: "radial-gradient(ellipse 40% 60% at 50% 0%, rgba(93,230,122,0.03) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 6,
              opacity: showSpotlight ? 1 : 0,
              transition: "opacity 1.5s ease",
            }}
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

          {/* Left Panel - Services */}
          <div className="hidden lg:block">
            <ServicePanel isVisible={showPanels} progress={progress} />
          </div>

          {/* Right Panel - Products */}
          <div className="hidden lg:block">
            <ProductPanel isVisible={showPanels} progress={progress} />
          </div>

          {/* Client Strip */}
          <ClientStrip isVisible={showClients} />

          {/* Scroll Indicator */}
          <ScrollIndicator isVisible={showScrollIndicator} />
        </div>
      </div>
    </section>
  );
}
