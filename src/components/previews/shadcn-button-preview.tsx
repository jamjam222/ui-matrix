import { Button as ShadcnButton } from "@/components/ui/shadcn/button";

export function ShadcnButtonPreview() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <ShadcnButton>Default</ShadcnButton>
      <ShadcnButton variant="outline">Outline</ShadcnButton>
      <ShadcnButton variant="secondary">Secondary</ShadcnButton>
      <ShadcnButton variant="destructive">Destructive</ShadcnButton>
    </div>
  );
}
