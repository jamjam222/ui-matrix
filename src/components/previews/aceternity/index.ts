import { AceternityButtonPreview } from "./aceternity-button-preview";
import { AceternityMovingBorderPreview } from "./aceternity-moving-border-preview";
import { AceternityHoverBorderGradientPreview } from "./aceternity-hover-border-gradient-preview";
import { Aceternity3dCardPreview } from "./aceternity-3d-card-preview";
import { AceternityTabsPreview } from "./aceternity-tabs-preview";
import { AceternityAnimatedTooltipPreview } from "./aceternity-animated-tooltip-preview";
import { AceternityFloatingDockPreview } from "./aceternity-floating-dock-preview";

export const aceternityComponentPreviews: Record<string, React.ComponentType> = {
  "aceternity-button": AceternityButtonPreview,
  "aceternity-moving-border": AceternityMovingBorderPreview,
  "aceternity-hover-border-gradient": AceternityHoverBorderGradientPreview,
  "aceternity-3d-card": Aceternity3dCardPreview,
  "aceternity-tabs": AceternityTabsPreview,
  "aceternity-animated-tooltip": AceternityAnimatedTooltipPreview,
  "aceternity-floating-dock": AceternityFloatingDockPreview,
};
