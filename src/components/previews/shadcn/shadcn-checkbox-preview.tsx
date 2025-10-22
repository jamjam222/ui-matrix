import { Checkbox } from "@/components/ui/shadcn/checkbox";

export function ShadcnCheckboxPreview() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-preview" />
      <label
        htmlFor="terms-preview"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
