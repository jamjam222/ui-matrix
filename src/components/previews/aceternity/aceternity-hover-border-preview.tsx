import { HoverBorderGradient } from "@/components/ui/aceternity/hover-border-gradient";

export function AceternityHoverBorderPreview() {
  return (
    <div className="flex justify-center items-center h-full">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Hover Me</span>
      </HoverBorderGradient>
    </div>
  );
}
