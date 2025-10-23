import { Input } from "@/components/ui/shadcn/input";

export function ShadcnInputPreview() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
    </div>
  );
}
