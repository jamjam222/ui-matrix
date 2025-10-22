import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/originui/tooltip";

export function OriginTooltipPreview() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Hover me</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip message</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
