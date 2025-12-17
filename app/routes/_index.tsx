import type { MetaFunction } from "@remix-run/node";
import { useRef, useState, useEffect } from "react";
import { useScrollProgress, useFramePreloader } from "~/hooks";
import { Navigation, BackgroundSystem, ProgressBar } from "~/components/layout";
import { Loader } from "~/components/Loader";
import { HeroSection } from "~/components/hero";
import {
  WhatWeDeliver,
  TrackRecord,
  TeamCapabilities,
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

// Reduced from 192 to 150 frames for faster loading and cleaner animation end
const FRAME_COUNT = 150;
const FRAME_PATH = "/frames";

// Hook for section visibility based on scroll position
function useSectionVisibility() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;

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

    // Observe all sections after a tick to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
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

  // Track section visibility
  const visibleSections = useSectionVisibility();

  // Determine if we should show loader
  const showLoader = !isClient || isLoading;

  return (
    <>
      {/* Loader - fixed overlay during frame loading */}
      {showLoader && (
        <Loader progress={loadProgress} />
      )}

      {/* Main content */}
      <div
        ref={containerRef}
        className="relative min-h-screen bg-bg"
        style={{
          opacity: showLoader ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        {/* Background System - fixed behind everything */}
        <BackgroundSystem />

        {/* Navigation - fixed at top */}
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

          {/* 3. Team & Capabilities */}
          <TeamCapabilities isVisible={visibleSections["team"] ?? false} />

          {/* 4. Clients & Partnerships */}
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
    </>
  );
}
