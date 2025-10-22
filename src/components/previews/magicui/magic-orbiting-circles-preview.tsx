import { OrbitingCircles } from "@/components/ui/magicui/orbiting-circles";

export function MagicOrbitingCirclesPreview() {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <OrbitingCircles><div className="h-3 w-3 rounded-full bg-primary"></div></OrbitingCircles>
    </div>
  );
}
