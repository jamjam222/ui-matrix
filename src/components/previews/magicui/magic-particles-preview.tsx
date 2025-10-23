import { Particles } from "@/components/ui/magicui/particles";

export function MagicParticlesPreview() {
  return (
    <div className="relative w-full h-32">
      <Particles className="absolute inset-0" quantity={100} />
    </div>
  );
}
