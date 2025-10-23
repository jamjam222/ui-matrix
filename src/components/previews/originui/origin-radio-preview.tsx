import { RadioGroup, RadioGroupItem } from "@/components/ui/originui/radio-group";

export function OriginRadioPreview() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="r1" />
        <label htmlFor="r1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="r2" />
        <label htmlFor="r2">Option 2</label>
      </div>
    </RadioGroup>
  );
}
