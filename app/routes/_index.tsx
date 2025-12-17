"use client";

import type { MetaFunction } from "@remix-run/node";
import { useRef, useState, useEffect } from "react";
import { useScrollProgress, useFramePreloader } from "~/hooks";
import { Navigation, BackgroundSystem, ProgressBar } from "~/components/layout";
import { Loader } from "~/components/Loader";
import { HeroSection } from "~/components/hero";
import {
  WhatWeDeliver,
  TrackRecord,
  ClientsSection,
  NorChainSection,
  SaaSProducts,
  AIAutomation,
  TechStack,
  Footer,
} from "~/components/sections";

export const meta: MetaFunction = () => {
  return [
    { title: "Xala Technologies - Architects of Innovation" },
    {
      name: "description",
      content:
        "Engineering-led technology company specializing in AI automation, SaaS platforms, and blockchain infrastructure. Enterprise-grade solutions built for scale.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
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

const FRAME_COUNT = 192;
const FRAME_PATH = "/assets/frames";

// Hook for section visibility based on scroll position
function useSectionVisibility() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (id) {
            setVisibleSections((prev) => ({
              ...prev,
              [id]: entry.isIntersecting,
            }));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-50px 0px",
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return visibleSections;
}

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

  // Track scroll progress for hero
  const { progress: scrollProgress } = useScrollProgress({
    containerRef,
    eased: true,
  });

  // Track section visibility
  const visibleSections = useSectionVisibility();

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

      {/* Hero Section - Scroll-driven animation */}
      <HeroSection frames={frames} frameCount={FRAME_COUNT} />

      {/* Main Content Sections */}
      <main>
        {/* 1. What We Actually Deliver - Three Pillars */}
        <WhatWeDeliver isVisible={visibleSections["what-we-deliver"] ?? false} />

        {/* 2. Proven Track Record */}
        <TrackRecord isVisible={visibleSections["track-record"] ?? false} />

        {/* 3. Clients & Partnerships */}
        <ClientsSection isVisible={visibleSections["clients"] ?? false} />

        {/* 4. NorChain - Flagship Blockchain Platform */}
        <NorChainSection isVisible={visibleSections["norchain"] ?? false} />

        {/* 5. SaaS Products & Platforms */}
        <SaaSProducts isVisible={visibleSections["saas-products"] ?? false} />

        {/* 6. AI Automation - Deep Dive */}
        <AIAutomation isVisible={visibleSections["ai-automation"] ?? false} />

        {/* 7. Technology Stack */}
        <TechStack isVisible={visibleSections["tech-stack"] ?? false} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
