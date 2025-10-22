import { Meteors } from "@/components/ui/magicui/meteors";

export function MagicMeteorsPreview() {
  return (
    <div className="relative w-full h-32">
      <Meteors number={20} />
    </div>
  );
}
