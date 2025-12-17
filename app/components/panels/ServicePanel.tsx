/**
 * Service Panel (Left Side)
 * Displays service cards that change based on scroll progress
 */
import { usePhaseTransition } from "~/hooks";
import { SERVICE_PHASES } from "~/data/panels";
import { getServiceIcon } from "~/components/icons";
import { PanelHeader, PanelFooter, ServiceCard } from "./shared";
import {
  getPanelContainerStyles,
  getContentTransitionStyles,
} from "~/lib/panel-utils";

interface ServicePanelProps {
  isVisible: boolean;
  progress?: number;
}

export function ServicePanel({ isVisible, progress = 0 }: ServicePanelProps) {
  const { displayPhase, isTransitioning, isFinalPhase } = usePhaseTransition(progress);
  const phaseData = SERVICE_PHASES[displayPhase];

  const containerStyles = getPanelContainerStyles("left");
  const contentStyles = getContentTransitionStyles(
    isVisible,
    isTransitioning,
    isFinalPhase,
    "left"
  );

  return (
    <div style={containerStyles}>
      <PanelHeader
        label={phaseData.headerLabel}
        isVisible={isVisible}
        direction="left"
      />

      <div style={contentStyles}>
        {phaseData.cards.map((card, index) => {
          const Icon = getServiceIcon(card.iconKey);
          return (
            <ServiceCard
              key={`${displayPhase}-${index}`}
              icon={<Icon />}
              title={card.title}
              tagline={card.tagline}
              description={card.description}
              highlights={card.highlights}
              accentColor={card.accentColor}
            />
          );
        })}
      </div>

      <PanelFooter
        label={phaseData.footerLabel}
        isVisible={isVisible}
        direction="left"
      />
    </div>
  );
}
