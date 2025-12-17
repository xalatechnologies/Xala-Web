import type { MetaFunction } from "@remix-run/node";
import { useRef, useState, useEffect, useCallback } from "react";
import { useFramePreloader } from "~/hooks";
import { BackgroundSystem, ProgressBar } from "~/components/layout";
import { Loader } from "~/components/Loader";
import { HeroSection } from "~/components/hero";
import { clamp } from "~/lib/utils";

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

// Scroll sensitivity - higher = faster scroll through frames
const SCROLL_SENSITIVITY = 0.0008;

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [progress, setProgress] = useState(0);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Lock browser scroll when loaded
  useEffect(() => {
    if (!isClient) return;

    // Prevent native scroll
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.documentElement.style.height = "100vh";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };
  }, [isClient]);

  // Wheel-driven scroll progress
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    setProgress((prev) => {
      const delta = e.deltaY * SCROLL_SENSITIVITY;
      return clamp(prev + delta, 0, 1);
    });
  }, []);

  // Attach wheel listener
  useEffect(() => {
    if (!isClient) return;

    const container = containerRef.current;
    if (!container) return;

    // Use non-passive to allow preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isClient, handleWheel]);

  // Preload animation frames - only on client
  const { frames, progress: loadProgress, isLoading } = useFramePreloader({
    frameCount: FRAME_COUNT,
    basePath: FRAME_PATH,
    autoLoad: isClient,
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
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background System - fixed behind everything */}
        <BackgroundSystem />

        {/* Progress Bar - fixed at top, shows section indicators */}
        <ProgressBar progress={progress} />

        {/* Hero Section - The entire page experience */}
        <HeroSection frames={frames} frameCount={FRAME_COUNT} progress={progress} />
      </div>
    </>
  );
}
