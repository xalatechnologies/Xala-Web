"use client";

import type { MetaFunction } from "@remix-run/node";
import { useRef, useState, useEffect } from "react";
import { useScrollProgress, useFramePreloader, useScrollThreshold } from "~/hooks";
import { Navigation, BackgroundSystem, ProgressBar } from "~/components/layout";
import { Loader } from "~/components/Loader";
import { HeroSection } from "~/components/hero";
import { ServicePanel, ProductPanel } from "~/components/panels";
import { TechBadgesLayer } from "~/components/floating";
import { ClientStrip } from "~/components/clients";

export const meta: MetaFunction = () => {
  return [
    { title: "Xala Technologies - Architects of Innovation" },
    {
      name: "description",
      content:
        "Enterprise-grade software solutions, cloud architecture, and AI-powered products. Transform your business with cutting-edge technology.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:title", content: "Xala Technologies" },
    { property: "og:description", content: "Architects of Innovation" },
    { property: "og:type", content: "website" },
    { name: "theme-color", content: "#030305" },
  ];
};

const FRAME_COUNT = 192;
const FRAME_PATH = "/assets/frames";

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Preload animation frames
  const { frames, progress: loadProgress, isLoading } = useFramePreloader({
    frameCount: FRAME_COUNT,
    basePath: FRAME_PATH,
    enabled: isClient,
  });

  // Track scroll progress
  const { progress: scrollProgress } = useScrollProgress({
    containerRef,
    eased: true,
  });

  // Visibility thresholds
  const showPanels = useScrollThreshold(scrollProgress, 0.3);
  const showTechBadges = useScrollThreshold(scrollProgress, 0.4);
  const showClients = useScrollThreshold(scrollProgress, 0.6);

  // Show loader while frames are loading
  if (isLoading || !isClient) {
    return <Loader progress={loadProgress} />;
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-bg">
      {/* Background System */}
      <BackgroundSystem />

      {/* Navigation */}
      <Navigation scrollProgress={scrollProgress} />

      {/* Progress Bar */}
      <ProgressBar progress={scrollProgress} />

      {/* Hero Section */}
      <HeroSection frames={frames} frameCount={FRAME_COUNT} />

      {/* Side Panels */}
      <ServicePanel isVisible={showPanels} />
      <ProductPanel isVisible={showPanels} />

      {/* Tech Badges */}
      <TechBadgesLayer isVisible={showTechBadges} />

      {/* Client Strip */}
      <ClientStrip isVisible={showClients} />

      {/* Spacer for scroll */}
      <div className="h-[100vh]" aria-hidden="true" />
    </div>
  );
}
