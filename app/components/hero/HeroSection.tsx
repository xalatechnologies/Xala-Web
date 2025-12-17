import { easeOutCubic } from "~/lib/utils";
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
  progress: number; // 0-1 wheel-driven progress
}

export function HeroSection({ frames, frameCount, progress }: HeroSectionProps) {
  // Apply easing for smoother frame animation
  const easedProgress = easeOutCubic(progress);
  
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(easedProgress * frameCount)
  );

  // Visibility thresholds
  const showScrollIndicator = progress < 0.02;
  const showSpotlight = progress > 0.1;
  const showCanvasGlow = progress > 0.15;
  const showClients = true; // Always visible from page load
  
  // Panels: always visible, opacity increases from 90% to 100% as user scrolls
  const panelOpacity = Math.min(1, 0.9 + progress * 1); // 0.9 at start, 1.0 by progress=0.1

  return (
    <section
      id="hero"
      style={{ position: "relative", height: "100vh", width: "100%", zIndex: 10 }}
    >
      {/* Fullscreen container - no scroll, wheel-driven */}
      <div
        style={{
          position: "relative",
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
              progress={progress}
            />
          )}

          {/* Left Panel - Services */}
          <div 
            className="hidden lg:block" 
            style={{ 
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "380px",
              opacity: panelOpacity, 
              transition: "opacity 0.5s ease", 
              zIndex: 30,
              pointerEvents: "auto",
            }}
          >
            <ServicePanel isVisible={true} progress={progress} />
          </div>

          {/* Right Panel - Products */}
          <div 
            className="hidden lg:block" 
            style={{ 
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "380px",
              opacity: panelOpacity, 
              transition: "opacity 0.5s ease", 
              zIndex: 30,
              pointerEvents: "auto",
            }}
          >
            <ProductPanel isVisible={true} progress={progress} />
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
