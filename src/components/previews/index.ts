import { ShadcnButtonPreview } from "./shadcn-button-preview";
import { ShadcnInputPreview } from "./shadcn-input-preview";
import { ShadcnSelectPreview } from "./shadcn-select-preview";
import { ShadcnCheckboxPreview } from "./shadcn-checkbox-preview";
import { ShadcnRadioGroupPreview } from "./shadcn-radio-group-preview";
import { ShadcnSwitchPreview } from "./shadcn-switch-preview";
import { ShadcnSliderPreview } from "./shadcn-slider-preview";
import { ShadcnAvatarPreview } from "./shadcn-avatar-preview";
import { ShadcnBadgePreview } from "./shadcn-badge-preview";
import { ShadcnProgressPreview } from "./shadcn-progress-preview";
import { ShadcnSeparatorPreview } from "./shadcn-separator-preview";
import { ShadcnDropdownMenuPreview } from "./shadcn-dropdown-menu-preview";
import { ShadcnTooltipPreview } from "./shadcn-tooltip-preview";
import { ShadcnAccordionPreview } from "./shadcn-accordion-preview";
import { ShadcnAlertPreview } from "./shadcn-alert-preview";
import { ShadcnDialogPreview } from "./shadcn-dialog-preview";
import { ShadcnCardPreview } from "./shadcn-card-preview";
import { ShadcnTablePreview } from "./shadcn-table-preview";
import { ShadcnTextareaPreview } from "./shadcn-textarea-preview";
import { ShadcnTabsPreview } from "./shadcn-tabs-preview";
import { ShadcnSkeletonPreview } from "./shadcn-skeleton-preview";
import { ShadcnCommandPreview } from "./shadcn-command-preview";
import { ShadcnDrawerPreview } from "./shadcn-drawer-preview";
import { ShadcnPopoverPreview } from "./shadcn-popover-preview";

import { aceternityComponentPreviews } from "./aceternity";

export const componentPreviews: { [key: string]: React.ComponentType } = {
  ...aceternityComponentPreviews,
  "shadcn-button": ShadcnButtonPreview,
  "shadcn-input": ShadcnInputPreview,
  "shadcn-select": ShadcnSelectPreview,
  "shadcn-checkbox": ShadcnCheckboxPreview,
  "shadcn-radio": ShadcnRadioGroupPreview, // Note: component is RadioGroup
  "shadcn-switch": ShadcnSwitchPreview,
  "shadcn-slider": ShadcnSliderPreview,
  "shadcn-avatar": ShadcnAvatarPreview,
  "shadcn-badge": ShadcnBadgePreview,
  "shadcn-progress": ShadcnProgressPreview,
  "shadcn-separator": ShadcnSeparatorPreview,
  "shadcn-dropdown": ShadcnDropdownMenuPreview, // Note: component is DropdownMenu
  "shadcn-tooltip": ShadcnTooltipPreview,
  "shadcn-accordion": ShadcnAccordionPreview,
  "shadcn-alert": ShadcnAlertPreview,
  "shadcn-dialog": ShadcnDialogPreview,
  "shadcn-card": ShadcnCardPreview,
  "shadcn-table": ShadcnTablePreview,
  "shadcn-textarea": ShadcnTextareaPreview,
  "shadcn-tabs": ShadcnTabsPreview,
  "shadcn-skeleton": ShadcnSkeletonPreview,
  "shadcn-command": ShadcnCommandPreview,
  "shadcn-drawer": ShadcnDrawerPreview,
  "shadcn-popover": ShadcnPopoverPreview,
};
