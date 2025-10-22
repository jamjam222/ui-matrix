import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/shadcn/switch";

export function ShadcnSwitchPreview() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
