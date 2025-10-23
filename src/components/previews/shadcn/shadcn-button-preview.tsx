import { Button as ShadcnButton } from "@/components/ui/shadcn/button";

export function ShadcnButtonPreview() {
  return (
    <div className="flex gap-3">
      <ShadcnButton variant="default">Default</ShadcnButton>
      <ShadcnButton variant="outline">Outline</ShadcnButton>
    </div>
  );
}
