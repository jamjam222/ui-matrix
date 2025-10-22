import { Slider } from "@/components/ui/shadcn/slider";

export function ShadcnSliderPreview() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />;
}
