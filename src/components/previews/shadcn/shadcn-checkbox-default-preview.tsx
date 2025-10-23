import { Checkbox } from "@/components/ui/shadcn/checkbox";

export function ShadcnCheckboxDefaultPreview() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="check-default" />
      <label htmlFor="check-default" className="text-sm">Default</label>
    </div>
  );
}
