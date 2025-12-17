/**
 * Hook for managing smooth phase transitions in panels
 */
import { useState, useEffect } from "react";
import { getCurrentPhase, isContactPhase, TRANSITION_CONFIG } from "~/lib/panel-utils";

interface UsePhaseTransitionResult {
  displayPhase: number;
  isTransitioning: boolean;
  isFinalPhase: boolean;
}

export function usePhaseTransition(progress: number): UsePhaseTransitionResult {
  const currentPhase = getCurrentPhase(progress);
  const [displayPhase, setDisplayPhase] = useState(currentPhase);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (currentPhase !== displayPhase) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayPhase(currentPhase);
        setIsTransitioning(false);
      }, TRANSITION_CONFIG.phaseDuration);
      return () => clearTimeout(timer);
    }
  }, [currentPhase, displayPhase]);

  return {
    displayPhase,
    isTransitioning,
    isFinalPhase: isContactPhase(displayPhase),
  };
}

