import { Switch } from "@/components/ui/shadcn/switch";

export function ShadcnSwitchPreview() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode-preview" />
      <label htmlFor="airplane-mode-preview">Airplane Mode</label>
    </div>
  );
}
