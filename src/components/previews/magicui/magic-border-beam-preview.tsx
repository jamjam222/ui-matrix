import { BorderBeam } from "@/components/ui/magicui/border-beam";

export function MagicBorderBeamPreview() {
  return (
    <div className="relative rounded-xl w-48 h-32 bg-muted flex items-center justify-center">
      <BorderBeam />
      <p>Content</p>
    </div>
  );
}
