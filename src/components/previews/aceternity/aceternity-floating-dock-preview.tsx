import { FloatingDock } from "@/components/ui/aceternity/floating-dock";
import { Home, MessageCircle, Settings } from "lucide-react";

const navItems = [
  { title: "Home", icon: <Home className="h-4 w-4" />, href: "#" },
  { title: "Messages", icon: <MessageCircle className="h-4 w-4" />, href: "#" },
  { title: "Settings", icon: <Settings className="h-4 w-4" />, href: "#" },
];

export function AceternityFloatingDockPreview() {
  return (
    <div className="relative w-full">
      <FloatingDock items={navItems} />
    </div>
  );
}
