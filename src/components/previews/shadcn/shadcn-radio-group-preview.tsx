import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";

export function ShadcnRadioGroupPreview() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1-preview" />
        <label htmlFor="r1-preview">Default</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2-preview" />
        <label htmlFor="r2-preview">Comfortable</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3-preview" />
        <label htmlFor="r3-preview">Compact</label>
      </div>
    </RadioGroup>
  );
}
