/**
 * Product Panel (Right Side)
 * Displays value/metric cards that change based on scroll progress
 */
import { usePhaseTransition } from "~/hooks";
import { PRODUCT_PHASES } from "~/data/panels";
import { getProductIcon } from "~/components/icons";
import { PanelHeader, PanelFooter, ValueCard } from "./shared";
import {
  getPanelContainerStyles,
  getContentTransitionStyles,
} from "~/lib/panel-utils";

interface ProductPanelProps {
  isVisible: boolean;
  progress?: number;
}

export function ProductPanel({ isVisible, progress = 0 }: ProductPanelProps) {
  const { displayPhase, isTransitioning, isFinalPhase } = usePhaseTransition(progress);
  const phaseData = PRODUCT_PHASES[displayPhase];

  const containerStyles = getPanelContainerStyles("right");
  const contentStyles = getContentTransitionStyles(
    isVisible,
    isTransitioning,
    isFinalPhase,
    "right"
  );

  return (
    <div style={containerStyles}>
      <PanelHeader
        label={phaseData.headerLabel}
        isVisible={isVisible}
        direction="right"
      />

      <div style={contentStyles}>
        {phaseData.values.map((value, index) => {
          const Icon = getProductIcon(value.iconKey);
          return (
            <ValueCard
              key={`${displayPhase}-${index}`}
              icon={<Icon />}
              value={value.value}
              label={value.label}
              description={value.description}
              accentColor={value.accentColor}
              link={value.link}
            />
          );
        })}
      </div>

      <PanelFooter
        label={phaseData.footerLabel}
        isVisible={isVisible}
        direction="right"
      />
    </div>
  );
}
