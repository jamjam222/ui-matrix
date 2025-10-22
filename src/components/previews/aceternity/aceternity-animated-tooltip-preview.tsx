import { AnimatedTooltip } from "@/components/ui/aceternity/animated-tooltip";

const people = [
  { id: 1, name: "John Doe", designation: "Software Engineer", image: "/images/john-doe.png" },
  { id: 2, name: "Jane Doe", designation: "Product Manager", image: "/images/jane-doe.png" },
];

export function AceternityAnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
