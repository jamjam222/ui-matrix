import { Checkbox } from "@/components/ui/shadcn/checkbox";

export function ShadcnCheckboxCheckedPreview() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="check-checked" defaultChecked />
      <label htmlFor="check-checked" className="text-sm">Checked</label>
    </div>
  );
}
