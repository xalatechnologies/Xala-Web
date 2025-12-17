import type { MetaFunction } from "@remix-run/node";
import { useRef, useState, useEffect } from "react";
import { useScrollProgress, useFramePreloader } from "~/hooks";
import { BackgroundSystem, ProgressBar } from "~/components/layout";
import { Loader } from "~/components/Loader";
import { HeroSection } from "~/components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Xala Technologies - Architects of Innovation" },
    {
      name: "description",
      content:
        "Engineering-led technology company specializing in AI automation, SaaS platforms, and blockchain infrastructure. Enterprise-grade solutions built for scale.",
    },
    { property: "og:title", content: "Xala Technologies - Architects of Innovation" },
    {
      property: "og:description",
      content:
        "AI Automation, SaaS Solutions, and Blockchain Infrastructure. Enterprise-grade technology built for scale.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://xala.no" },
    { name: "theme-color", content: "#030305" },
    { name: "robots", content: "index, follow" },
  ];
};

// Full 192 frames for extended scroll experience
const FRAME_COUNT = 192;
const FRAME_PATH = "/frames";

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Preload animation frames - only on client
  const { frames, progress: loadProgress, isLoading } = useFramePreloader({
    frameCount: FRAME_COUNT,
    basePath: FRAME_PATH,
    autoLoad: isClient,
  });

  // Track scroll progress for hero
  const { progress: scrollProgress } = useScrollProgress({
    containerRef,
    eased: true,
  });

  // Determine if we should show loader
  const showLoader = !isClient || isLoading;

  return (
    <>
      {/* Loader - fixed overlay during frame loading */}
      {showLoader && (
        <Loader progress={loadProgress} />
      )}

      {/* Main content - Single page hero experience */}
      <div
        ref={containerRef}
        className="relative bg-bg"
        style={{
          opacity: showLoader ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        {/* Background System - fixed behind everything */}
        <BackgroundSystem />

        {/* Progress Bar - fixed at top, shows section indicators */}
        <ProgressBar progress={scrollProgress} />

        {/* Hero Section - The entire page experience */}
        <HeroSection frames={frames} frameCount={FRAME_COUNT} />
      </div>
    </>
  );
}
