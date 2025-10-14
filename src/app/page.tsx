"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import Link from "next/link";
import { Button as ShadcnButton } from "@/components/ui/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import { Input } from "@/components/ui/shadcn/input";
import { Input as OriginInput } from "@/components/ui/originui/input";
import OriginButtonExample from "@/components/ui/originui/button-01";
import OriginCheckboxExample from "@/components/ui/originui/checkbox-01";
import OriginRadioExample from "@/components/ui/originui/radio-01";
import OriginSelectExample from "@/components/ui/originui/select-01";
import OriginSliderExample from "@/components/ui/originui/slider-01";
import OriginSwitchExample from "@/components/ui/originui/switch-01";
import OriginAccordionExample from "@/components/ui/originui/accordion-01";
import OriginAvatarExample from "@/components/ui/originui/avatar-01";
import OriginBadgeExample from "@/components/ui/originui/badge-01";
import OriginDialogExample from "@/components/ui/originui/dialog-01";
import OriginDropdownExample from "@/components/ui/originui/dropdown-01";
import OriginPopoverExample from "@/components/ui/originui/popover-01";
import OriginTooltipExample from "@/components/ui/originui/tooltip-01";
import OriginTabsExample from "@/components/ui/originui/tabs-01";
import OriginTextareaExample from "@/components/ui/originui/textarea-01";
import { Textarea } from "@/components/ui/shadcn/textarea";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import { Switch } from "@/components/ui/shadcn/switch";
import { Slider } from "@/components/ui/shadcn/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shadcn/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/shadcn/accordion";
import { Alert, AlertDescription } from "@/components/ui/shadcn/alert";
import { Progress } from "@/components/ui/shadcn/progress";
import { Separator } from "@/components/ui/shadcn/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/shadcn/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/shadcn/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/shadcn/drawer";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/shadcn/command";

// UI 라이브러리 컴포넌트
import { Button as AceternityButton } from "@/components/ui/aceternity/stateful-button";
import { Button as MovingBorderButton } from "@/components/ui/aceternity/moving-border";
import { HoverBorderGradient } from "@/components/ui/aceternity/hover-border-gradient";
import { FloatingDock } from "@/components/ui/aceternity/floating-dock";
import { CardContainer, CardBody, CardItem } from "@/components/ui/aceternity/card-3d";
import { ShimmerButton as MagicButton } from "@/components/ui/magicui/shimmer-button";
import { RainbowButton } from "@/components/ui/magicui/rainbow-button";
import { ShinyButton } from "@/components/ui/magicui/shiny-button";
import { AvatarCircles } from "@/components/ui/magicui/avatar-circles";
import { AnimatedGradientText } from "@/components/ui/magicui/animated-gradient-text";
import { Meteors } from "@/components/ui/magicui/meteors";
import { Particles } from "@/components/ui/magicui/particles";
import { Ripple } from "@/components/ui/magicui/ripple";
import { SparklesText } from "@/components/ui/magicui/sparkles-text";
import PulsatingButton from "@/components/ui/magicui/pulsating-button";
import { MagicCard } from "@/components/ui/magicui/magic-card";
import { Marquee } from "@/components/ui/magicui/marquee";
import { NumberTicker } from "@/components/ui/magicui/number-ticker";
import { Tabs as AceternityTabs } from "@/components/ui/aceternity/tabs";
import { AnimatedTooltip } from "@/components/ui/aceternity/animated-tooltip";

// Lazy loaded components for performance
const BlurFade = lazy(() => import("@/components/ui/magicui/blur-fade").then(mod => ({ default: mod.BlurFade })));
const OrbitingCircles = lazy(() => import("@/components/ui/magicui/orbiting-circles").then(mod => ({ default: mod.OrbitingCircles })));
const ConfettiButton = lazy(() => import("@/components/ui/magicui/confetti").then(mod => ({ default: mod.ConfettiButton })));
const CoolMode = lazy(() => import("@/components/ui/magicui/cool-mode").then(mod => ({ default: mod.CoolMode })));
const Globe = lazy(() => import("@/components/ui/magicui/globe").then(mod => ({ default: mod.Globe })));
const IconCloud = lazy(() => import("@/components/ui/magicui/icon-cloud").then(mod => ({ default: mod.IconCloud })));
const BorderBeam = lazy(() => import("@/components/ui/magicui/border-beam").then(mod => ({ default: mod.BorderBeam })));

// Loading fallback component
function ComponentLoader() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
}

export default function UIMatrix() {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLibrary, setSelectedLibrary] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem("ui-matrix-favorites");
    if (savedFavorites) {
      setFavorites(new Set(JSON.parse(savedFavorites)));
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Filter libraries based on selection
  const libraries = ["all", "favorites", "shadcn", "aceternity", "magicui", "originui"];
  const categories = ["all", "button", "input", "layout", "animation", "navigation", "feedback"];
  
  const shouldShowLibrary = (library: string) => {
    if (selectedLibrary === "favorites") {
      // When favorites is selected, show all libraries but components will be filtered by favorites
      return true;
    }
    return selectedLibrary === "all" || selectedLibrary === library;
  };

  // Search filter: check if component name matches query
  const matchesSearch = (componentName: string, componentId?: string) => {
    // If favorites filter is active, only show favorited components
    if (selectedLibrary === "favorites" && componentId && !favorites.has(componentId)) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    return componentName.toLowerCase().includes(searchQuery.toLowerCase().trim());
  };

  // Category filter - if no category specified, show all
  const matchesCategory = (componentCategory?: string) => {
    if (!componentCategory) return true; // Show components without category
    return selectedCategory === "all" || selectedCategory === componentCategory;
  };

  // Toggle favorite
  const toggleFavorite = (componentId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(componentId)) {
      newFavorites.delete(componentId);
    } else {
      newFavorites.add(componentId);
    }
    setFavorites(newFavorites);
    localStorage.setItem("ui-matrix-favorites", JSON.stringify(Array.from(newFavorites)));
  };

  // Copy code to clipboard
  const copyCode = async (code: string, componentName: string) => {
    try {
      await navigator.clipboard.writeText(code);
      alert(`✅ ${componentName} 코드가 복사되었습니다!`);
    } catch {
      alert("❌ 코드 복사에 실패했습니다.");
    }
  };

  return (
    <main className="component-catalog container mx-auto px-6 py-12 space-y-16">
      <header className="flex items-center justify-between mb-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            UI Matrix
          </h1>
          <p className="text-base text-muted-foreground font-medium">
            라이브러리 컴포넌트 비교 갤러리
          </p>
        </div>
        
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg border-2 border-border bg-background hover:bg-muted transition-all duration-200 shadow-[3px_3px_0_0_hsl(var(--foreground)/0.1)] hover:shadow-[5px_5px_0_0_hsl(var(--foreground)/0.15)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[2px_2px_0_0_hsl(var(--foreground)/0.1)]"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </header>

      {/* Buttons: Gallery / Compare */}
      <section className="component-catalog__section">
        <Tabs defaultValue="gallery" className="component-catalog__tabs">
          <TabsList>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
          </TabsList>

          {/* Search & Filter Bar */}
          <div className="mt-6 mb-8 space-y-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <Input
                type="text"
                placeholder="컴포넌트 검색... (예: Button, Input)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-2 border-border shadow-[3px_3px_0_0_hsl(var(--foreground)/0.1)] focus:shadow-[4px_4px_0_0_hsl(var(--foreground)/0.15)] transition-shadow"
              />
            </div>

            {/* Library Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <div className="text-xs font-semibold text-muted-foreground mb-2">라이브러리</div>
                <div className="flex gap-2 flex-wrap">
                  {libraries.map((lib) => (
                    <button
                      key={lib}
                      onClick={() => setSelectedLibrary(lib)}
                      className={`px-3 py-1.5 rounded-md border-2 border-border font-semibold text-xs transition-all duration-200 ${
                        selectedLibrary === lib
                          ? "bg-primary text-primary-foreground shadow-[2px_2px_0_0_hsl(var(--foreground)/0.2)]"
                          : "bg-background hover:bg-muted shadow-[1px_1px_0_0_hsl(var(--foreground)/0.1)] hover:shadow-[2px_2px_0_0_hsl(var(--foreground)/0.15)]"
                      }`}
                    >
                      {lib === "all" ? "전체" : lib === "favorites" ? "⭐ 즐겨찾기" : lib.charAt(0).toUpperCase() + lib.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-1">
                <div className="text-xs font-semibold text-muted-foreground mb-2">카테고리</div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-md border-2 border-border font-semibold text-xs transition-all duration-200 ${
                        selectedCategory === cat
                          ? "bg-secondary text-secondary-foreground shadow-[2px_2px_0_0_hsl(var(--foreground)/0.2)]"
                          : "bg-background hover:bg-muted shadow-[1px_1px_0_0_hsl(var(--foreground)/0.1)] hover:shadow-[2px_2px_0_0_hsl(var(--foreground)/0.15)]"
                      }`}
                    >
                      {cat === "all" ? "전체" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <TabsContent value="gallery">
            <div className="space-y-16">
              {/* shadcn/ui Section */}
              {shouldShowLibrary("shadcn") && (
              <section>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border/50">
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    shadcn/ui
                  </h3>
                  <Link 
                    href="https://ui.shadcn.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span>공식 사이트</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
                <div className="component-catalog__grid">
                  {matchesSearch("Button", "shadcn-button") && matchesCategory("button") && (
                  <article className="component-card" data-component="shadcn-button">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/button" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Button</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("shadcn-button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("shadcn-button") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Button>Default</Button>\n<Button variant="outline">Outline</Button>', "Button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2 justify-center">
                        <ShadcnButton>Default</ShadcnButton>
                        <ShadcnButton variant="outline">Outline</ShadcnButton>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Input", "shadcn-input") && matchesCategory("input") && (
                  <article className="component-card" data-component="shadcn-input">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/input" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Input</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("shadcn-input")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("shadcn-input") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Input placeholder="Default" />\n<Input placeholder="Disabled" disabled />', "Input")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-2 w-full max-w-[200px]">
                        <Input placeholder="Default" />
                        <Input placeholder="Disabled" disabled />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Select") && matchesCategory("input") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/select" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Select</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Checkbox") && matchesCategory("input") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/checkbox" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Checkbox</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <Checkbox id="check1" />
                          <label htmlFor="check1" className="text-sm">Default</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox id="check2" defaultChecked />
                          <label htmlFor="check2" className="text-sm">Checked</label>
                        </div>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Radio") && matchesCategory("input") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/radio-group" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Radio</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <RadioGroup defaultValue="option1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option1" id="r1" />
                          <label htmlFor="r1" className="text-sm">Option 1</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option2" id="r2" />
                          <label htmlFor="r2" className="text-sm">Option 2</label>
                        </div>
                      </RadioGroup>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Switch") && matchesCategory("input") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/switch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Switch</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="switch1" />
                          <label htmlFor="switch1" className="text-sm">Off</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="switch2" defaultChecked />
                          <label htmlFor="switch2" className="text-sm">On</label>
                        </div>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Slider") && matchesCategory("input") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/slider" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Slider</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="space-y-3 w-full max-w-[200px]">
                        <Slider defaultValue={[33]} max={100} step={1} />
                        <Slider defaultValue={[66]} max={100} step={1} />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Avatar") && matchesCategory("feedback") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/avatar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Avatar</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Badge") && matchesCategory("feedback") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/badge" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Badge</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Progress") && matchesCategory() && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/progress" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Progress</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="space-y-2 w-full max-w-[200px]">
                        <Progress value={33} />
                        <Progress value={66} />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Dropdown") && matchesCategory("navigation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/dropdown-menu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Dropdown</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <ShadcnButton variant="outline">Open Menu</ShadcnButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Profile</DropdownMenuItem>
                          <DropdownMenuItem>Settings</DropdownMenuItem>
                          <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Tooltip") && matchesCategory("feedback") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/tooltip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Tooltip</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <ShadcnButton variant="outline">Hover Me</ShadcnButton>
                          </TooltipTrigger>
                          <TooltipContent>This is a tooltip</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Accordion") && matchesCategory("layout") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/accordion" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Accordion</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Section 1</AccordionTrigger>
                          <AccordionContent>Content for section 1</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Section 2</AccordionTrigger>
                          <AccordionContent>Content for section 2</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Alert") && matchesCategory("feedback") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/alert" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Alert</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Alert>
                        <AlertDescription>This is an alert message</AlertDescription>
                      </Alert>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Card") && matchesCategory("layout") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/card" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Card</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Card>
                        <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">Card content goes here</p>
                        </CardContent>
                      </Card>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Dialog") && matchesCategory("feedback") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/dialog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Dialog</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Dialog>
                        <DialogTrigger asChild>
                          <ShadcnButton variant="outline">Open Dialog</ShadcnButton>
                        </DialogTrigger>
                        <DialogContent>
                          <p>Dialog content</p>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Separator") && matchesCategory("layout") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/separator" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Separator</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="space-y-2">
                        <div className="text-sm">Above</div>
                        <Separator />
                        <div className="text-sm">Below</div>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Table") && matchesCategory("layout") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/table" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Table</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Item 1</TableCell>
                            <TableCell>Active</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Item 2</TableCell>
                            <TableCell>Inactive</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Textarea") && matchesCategory("input") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/textarea" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Textarea</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Textarea placeholder="Type your message here..." />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Tabs", "shadcn-tabs") && matchesCategory("navigation") && (
                  <article className="component-card" data-component="shadcn-tabs">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/tabs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Tabs (shadcn)</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("shadcn-tabs")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("shadcn-tabs") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Tabs defaultValue="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n    <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n  </TabsList>\n</Tabs>', "Tabs")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Tabs defaultValue="tab1" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Toggle", "shadcn-toggle") && matchesCategory("input") && (
                  <article className="component-card" data-component="shadcn-toggle">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/toggle" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Toggle</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("shadcn-toggle")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("shadcn-toggle") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Toggle>Toggle Me</Toggle>', "Toggle")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2 justify-center">
                        <ShadcnButton variant="outline" size="sm">Bold</ShadcnButton>
                        <ShadcnButton variant="outline" size="sm">Italic</ShadcnButton>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Skeleton", "shadcn-skeleton") && matchesCategory("feedback") && (
                  <article className="component-card" data-component="shadcn-skeleton">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/skeleton" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Skeleton</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("shadcn-skeleton")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("shadcn-skeleton") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Skeleton className="w-[200px] h-[20px]" />', "Skeleton")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-2 w-full max-w-[200px]">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Command", "shadcn-command") && matchesCategory("navigation") && (
                  <article className="component-card" data-component="shadcn-command">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/command" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Command</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("shadcn-command")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("shadcn-command") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Command>\n  <CommandInput placeholder="Search..." />\n  <CommandList>\n    <CommandItem>Item</CommandItem>\n  </CommandList>\n</Command>', "Command")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Command className="rounded-lg border w-full max-w-[280px]">
                        <CommandInput placeholder="Search..." />
                        <CommandList>
                          <CommandEmpty>No results</CommandEmpty>
                          <CommandGroup heading="Suggestions">
                            <CommandItem>Calendar</CommandItem>
                            <CommandItem>Settings</CommandItem>
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Drawer", "shadcn-drawer") && matchesCategory("feedback") && (
                  <article className="component-card" data-component="shadcn-drawer">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.shadcn.com/docs/components/drawer" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Drawer</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("shadcn-drawer")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("shadcn-drawer") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Drawer>\n  <DrawerTrigger>Open</DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader>\n      <DrawerTitle>Title</DrawerTitle>\n    </DrawerHeader>\n  </DrawerContent>\n</Drawer>', "Drawer")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Drawer>
                        <DrawerTrigger asChild>
                          <ShadcnButton variant="outline">Open Drawer</ShadcnButton>
                        </DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>Drawer Title</DrawerTitle>
                            <DrawerDescription>This is a drawer component</DrawerDescription>
                          </DrawerHeader>
                          <div className="p-4">
                            <p className="text-sm text-muted-foreground">Drawer content goes here...</p>
                          </div>
                          <DrawerFooter>
                            <DrawerClose asChild>
                              <ShadcnButton variant="outline">Close</ShadcnButton>
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                    </div>
                  </article>
                  )}
                </div>
              </section>
              )}

              {/* Aceternity UI Section */}
              {shouldShowLibrary("aceternity") && (
              <section>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border/50">
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    Aceternity UI
                  </h3>
                  <Link 
                    href="https://ui.aceternity.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span>공식 사이트</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
                <div className="component-catalog__grid">
                  {matchesSearch("Stateful Button", "aceternity-button") && matchesCategory("button") && (
                  <article className="component-card" data-component="aceternity-button">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.aceternity.com/components/tailwindcss-buttons" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Stateful Button</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("aceternity-button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("aceternity-button") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<AceternityButton>Click Me</AceternityButton>', "Stateful Button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2 justify-center">
                        <AceternityButton>Default</AceternityButton>
                        <AceternityButton>Loading</AceternityButton>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Animated Tooltip") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.aceternity.com/components/animated-tooltip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Animated Tooltip</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <AnimatedTooltip
                        items={[
                          {
                            id: 1,
                            name: "User 1",
                            designation: "Designer",
                            image: "https://github.com/shadcn.png"
                          },
                          {
                            id: 2,
                            name: "User 2",
                            designation: "Developer",
                            image: "https://github.com/shadcn.png"
                          }
                        ]}
                      />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Moving Border") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.aceternity.com/components/moving-border" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Moving Border</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-wrap gap-2 justify-center">
                        <MovingBorderButton duration={2000} className="text-sm px-3 py-1">
                          Fast
                        </MovingBorderButton>
                        <MovingBorderButton duration={4000} className="text-sm px-3 py-1">
                          Slow
                        </MovingBorderButton>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Hover Border") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.aceternity.com/components/hover-border-gradient" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Hover Border Gradient</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-wrap gap-2 justify-center">
                        <HoverBorderGradient containerClassName="rounded-md" className="text-sm px-3 py-1">
                          Default
                        </HoverBorderGradient>
                        <HoverBorderGradient containerClassName="rounded-full" className="text-sm px-3 py-1">
                          Rounded
                        </HoverBorderGradient>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Tabs") && matchesCategory("navigation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.aceternity.com/components/tabs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Animated Tabs</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <AceternityTabs
                        tabs={[
                          { title: "Tab 1", value: "tab1", content: "" },
                          { title: "Tab 2", value: "tab2", content: "" }
                        ]}
                        containerClassName="w-full max-w-[200px]"
                        contentClassName="hidden"
                      />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Floating Dock", "aceternity-floating-dock") && matchesCategory("navigation") && (
                  <article className="component-card" data-component="aceternity-floating-dock">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.aceternity.com/components/floating-dock" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Floating Dock</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("aceternity-floating-dock")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("aceternity-floating-dock") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<FloatingDock items={[...]} />', "Floating Dock")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex justify-center py-4">
                        <FloatingDock
                          items={[
                            { title: "Home", icon: "🏠", href: "#" },
                            { title: "Search", icon: "🔍", href: "#" },
                            { title: "Settings", icon: "⚙️", href: "#" }
                          ]}
                        />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("3D Card", "aceternity-3d-card") && matchesCategory("animation") && (
                  <article className="component-card" data-component="aceternity-3d-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://ui.aceternity.com/components/3d-card" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>3D Card Effect</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("aceternity-3d-card")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("aceternity-3d-card") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<CardContainer>\n  <CardBody>\n    <CardItem translateZ="50">\n      Content\n    </CardItem>\n  </CardBody>\n</CardContainer>', "3D Card")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <CardContainer className="w-full">
                        <CardBody className="bg-gray-50 dark:bg-black/[0.8] relative group/card border-black/[0.1] w-auto h-auto rounded-xl p-6">
                          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            3D Card
                          </CardItem>
                          <CardItem translateZ="100" className="text-sm text-neutral-500 dark:text-neutral-300 mt-2">
                            Hover to see the effect
                          </CardItem>
                        </CardBody>
                      </CardContainer>
                    </div>
                  </article>
                  )}
                </div>
              </section>
              )}

              {/* Magic UI Section */}
              {shouldShowLibrary("magicui") && (
              <section>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border/50">
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    Magic UI
                  </h3>
                  <Link 
                    href="https://magicui.design/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span>공식 사이트</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
                <div className="component-catalog__grid">
                  {matchesSearch("Shimmer Button", "magic-shimmer-button") && matchesCategory("button") && (
                  <article className="component-card" data-component="magic-shimmer-button">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/shimmer-button" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Shimmer Button</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("magic-shimmer-button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("magic-shimmer-button") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<MagicButton>Shimmer</MagicButton>', "Shimmer Button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2 justify-center">
                        <MagicButton className="text-sm px-3 py-1">Small</MagicButton>
                        <MagicButton>Default</MagicButton>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Rainbow Button", "magic-rainbow-button") && matchesCategory("button") && (
                  <article className="component-card" data-component="magic-rainbow-button">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/rainbow-button" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Rainbow Button</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("magic-rainbow-button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("magic-rainbow-button") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<RainbowButton>Rainbow</RainbowButton>', "Rainbow Button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-wrap gap-2 justify-center">
                        <RainbowButton className="text-sm px-3 py-1">Compact</RainbowButton>
                        <RainbowButton>Standard</RainbowButton>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Shiny Button") && matchesCategory("button") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/shiny-button" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Shiny Button</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-wrap gap-2 justify-center">
                        <ShinyButton className="text-sm px-3 py-1">Mini</ShinyButton>
                        <ShinyButton>Normal</ShinyButton>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Avatar Circles") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/avatar-circles" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Avatar Circles</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-3 items-center">
                        <AvatarCircles numPeople={3} avatarUrls={[]} />
                        <AvatarCircles numPeople={5} avatarUrls={[]} />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Animated Gradient Text") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/animated-gradient-text" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Animated Text</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-2 items-center">
                        <AnimatedGradientText className="text-sm">Gradient Text</AnimatedGradientText>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Sparkles Text") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/sparkles-text" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Sparkles Text</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-2 items-center">
                        <SparklesText className="text-sm">✨ Sparkles</SparklesText>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Meteors", "magic-meteors") && matchesCategory("animation") && (
                  <article className="component-card" data-component="magic-meteors">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/meteors" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Meteors</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("magic-meteors")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("magic-meteors") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Meteors number={20} />', "Meteors")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 to-slate-800">
                        <Meteors number={20} />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Particles", "magic-particles") && matchesCategory("animation") && (
                  <article className="component-card" data-component="magic-particles">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/particles" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Particles</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("magic-particles")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("magic-particles") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Particles className="..." />', "Particles")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="relative h-32 w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-900 to-purple-900">
                        <Particles className="absolute inset-0" quantity={50} />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Ripple", "magic-ripple") && matchesCategory("animation") && (
                  <article className="component-card" data-component="magic-ripple">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/ripple" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Ripple</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("magic-ripple")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("magic-ripple") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<Ripple />', "Ripple")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="relative flex h-32 w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
                        <Ripple />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Pulsating Button", "magic-pulsating-button") && matchesCategory("button") && (
                  <article className="component-card" data-component="magic-pulsating-button">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/pulsating-button" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Pulsating Button</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("magic-pulsating-button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("magic-pulsating-button") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<PulsatingButton>Click Me</PulsatingButton>', "Pulsating Button")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2 justify-center">
                        <PulsatingButton>Pulsating</PulsatingButton>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Magic Card", "magic-card") && matchesCategory("animation") && (
                  <article className="component-card" data-component="magic-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/magic-card" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Magic Card</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleFavorite("magic-card")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="즐겨찾기"
                        >
                          {favorites.has("magic-card") ? "⭐" : "☆"}
                        </button>
                        <button
                          onClick={() => copyCode('<MagicCard>\n  <div>Content</div>\n</MagicCard>', "Magic Card")}
                          className="p-1 hover:bg-muted rounded transition-colors"
                          title="코드 복사"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <MagicCard className="cursor-pointer flex-col items-center justify-center p-6 shadow-2xl w-full h-32">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          Magic Card
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Hover to see the magic
                        </p>
                      </MagicCard>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Marquee") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/marquee" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Marquee</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="space-y-2">
                        <Marquee className="max-w-[200px]" pauseOnHover>
                          <span className="text-sm mx-4">Pause on Hover</span>
                          <span className="text-sm mx-4">Scrolling Text</span>
                        </Marquee>
                        <Marquee className="max-w-[200px]" reverse>
                          <span className="text-sm mx-4">Reverse</span>
                          <span className="text-sm mx-4">Direction</span>
                        </Marquee>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Number Ticker") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/number-ticker" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Number Animation</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-4 text-2xl font-bold">
                        <NumberTicker value={100} />
                        <NumberTicker value={250} />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Blur Fade") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/blur-fade" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Blur Fade</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-2 items-center">
                        <Suspense fallback={<ComponentLoader />}>
                          <BlurFade delay={0} inView>
                            <div className="text-sm">First</div>
                          </BlurFade>
                          <BlurFade delay={0.2} inView>
                            <div className="text-sm">Second</div>
                          </BlurFade>
                        </Suspense>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Confetti") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/confetti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Confetti Button</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Suspense fallback={<ComponentLoader />}>
                        <ConfettiButton className="text-sm px-3 py-1">
                          🎉 Celebrate
                        </ConfettiButton>
                      </Suspense>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Cool Mode") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/cool-mode" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Cool Mode</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <Suspense fallback={<ComponentLoader />}>
                        <CoolMode>
                          <ShadcnButton size="sm">✨ Click Me</ShadcnButton>
                        </CoolMode>
                      </Suspense>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Globe") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/globe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Globe</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="w-40 h-40 mx-auto relative">
                        <Suspense fallback={<ComponentLoader />}>
                          <Globe />
                        </Suspense>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Icon Cloud") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/icon-cloud" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Icon Cloud</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="w-40 h-40 mx-auto">
                        <Suspense fallback={<ComponentLoader />}>
                          <IconCloud />
                        </Suspense>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Orbiting Circles") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/orbiting-circles" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Orbiting Circles</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                        <Suspense fallback={<ComponentLoader />}>
                          <OrbitingCircles className="h-8 w-8 border-none bg-transparent" duration={20} delay={0} radius={50}>
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                          </OrbitingCircles>
                          <OrbitingCircles className="h-8 w-8 border-none bg-transparent" duration={20} delay={10} radius={50}>
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                          </OrbitingCircles>
                        </Suspense>
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Border Beam") && matchesCategory("animation") && (
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://magicui.design/docs/components/border-beam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Border Beam</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="relative w-full h-24 rounded-lg border bg-muted flex items-center justify-center">
                        <BorderBeam />
                        <span className="text-sm">Animated Border</span>
                      </div>
                    </div>
                  </article>
                  )}

                  {/* <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Bento Grid (Magic)</div>
                    </div>
                    <div className="component-card__body">
                      <MagicBentoGrid className="max-w-full">
                        <BentoCard
                          name="Feature 1"
                          className="bg-muted"
                          background={<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />}
                          Icon={() => <div className="h-4 w-4 rounded-full bg-primary" />}
                          description="Grid feature"
                          href="#"
                          cta="Learn more"
                        />
                        <BentoCard
                          name="Feature 2"
                          className="bg-muted"
                          background={<div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />}
                          Icon={() => <div className="h-4 w-4 rounded-full bg-secondary" />}
                          description="Grid feature"
                          href="#"
                          cta="Learn more"
                        />
                      </MagicBentoGrid>
                    </div>
                  </article> */}
                </div>
              </section>
              )}

              {/* Origin UI Section */}
              {shouldShowLibrary("originui") && (
              <section>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-border/50">
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    Origin UI
                  </h3>
                  <Link 
                    href="https://originui.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span>Official Site</span>
                    <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
                <div className="component-catalog__grid">
                  {matchesSearch("OTP Button", "origin-button") && matchesCategory("button") && (
                  <article className="component-card" data-component="origin-button">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/button" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>OTP Button</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-button")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-button") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginButtonExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Input", "origin-input") && matchesCategory("input") && (
                  <article className="component-card" data-component="origin-input">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/input" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Simple Input</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-input")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-input") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <div className="w-full max-w-[280px]">
                        <OriginInput placeholder="Enter email..." type="email" />
                      </div>
                    </div>
                  </article>
                  )}

                  {matchesSearch("Checkbox", "origin-checkbox") && matchesCategory("button") && (
                  <article className="component-card" data-component="origin-checkbox">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/checkbox" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Checkbox</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-checkbox")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-checkbox") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginCheckboxExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Radio", "origin-radio") && matchesCategory("button") && (
                  <article className="component-card" data-component="origin-radio">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/radio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Radio</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-radio")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-radio") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginRadioExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Select", "origin-select") && matchesCategory("input") && (
                  <article className="component-card" data-component="origin-select">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/select" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Select</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-select")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-select") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginSelectExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Slider", "origin-slider") && matchesCategory("input") && (
                  <article className="component-card" data-component="origin-slider">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/slider" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Slider</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-slider")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-slider") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginSliderExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Switch", "origin-switch") && matchesCategory("button") && (
                  <article className="component-card" data-component="origin-switch">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/switch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Switch</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-switch")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-switch") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginSwitchExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Accordion", "origin-accordion") && matchesCategory("layout") && (
                  <article className="component-card" data-component="origin-accordion">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/accordion" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Accordion</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-accordion")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-accordion") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginAccordionExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Avatar", "origin-avatar") && matchesCategory("layout") && (
                  <article className="component-card" data-component="origin-avatar">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/avatar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Avatar</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-avatar")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-avatar") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginAvatarExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Badge", "origin-badge") && matchesCategory("layout") && (
                  <article className="component-card" data-component="origin-badge">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/badge" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Badge</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-badge")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-badge") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginBadgeExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Dialog", "origin-dialog") && matchesCategory("feedback") && (
                  <article className="component-card" data-component="origin-dialog">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/dialog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Dialog</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-dialog")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-dialog") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginDialogExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Dropdown", "origin-dropdown") && matchesCategory("navigation") && (
                  <article className="component-card" data-component="origin-dropdown">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/dropdown" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Dropdown</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-dropdown")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-dropdown") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginDropdownExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Popover", "origin-popover") && matchesCategory("feedback") && (
                  <article className="component-card col-span-2" data-component="origin-popover">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/popover" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Popover</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-popover")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-popover") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginPopoverExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Tooltip", "origin-tooltip") && matchesCategory("feedback") && (
                  <article className="component-card col-span-2" data-component="origin-tooltip">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/tooltip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Tooltip</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-tooltip")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-tooltip") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginTooltipExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Tabs", "origin-tabs") && matchesCategory("navigation") && (
                  <article className="component-card col-span-2" data-component="origin-tabs">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/tabs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Tabs</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-tabs")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-tabs") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginTabsExample />
                    </div>
                  </article>
                  )}

                  {matchesSearch("Textarea", "origin-textarea") && matchesCategory("input") && (
                  <article className="component-card col-span-2" data-component="origin-textarea">
                    <div className="component-card__header">
                      <div className="component-card__title">
                        <Link href="https://coss.com/origin/textarea" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group">
                          <span>Textarea</span>
                          <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => toggleFavorite("origin-textarea")} className="p-1 hover:bg-muted rounded transition-colors" title="즐겨찾기">
                          {favorites.has("origin-textarea") ? "⭐" : "☆"}
                        </button>
                      </div>
                    </div>
                    <div className="component-card__body">
                      <OriginTextareaExample />
                    </div>
                  </article>
                  )}
                </div>
              </section>
              )}
            </div>
          </TabsContent>
          <TabsContent value="compare">
            <div className="overflow-x-auto rounded-2xl border-2 border-border shadow-[5px_5px_0_0_hsl(var(--foreground)/0.1)]">
              <table className="table-auto border-collapse w-full">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>shadcn</th>
                    <th>Aceternity</th>
                    <th>Magic UI</th>
                    <th>Origin UI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Button</td>
                    <td>
                      <ShadcnButton>Click</ShadcnButton>
                    </td>
                    <td>
                      <AceternityButton>Click</AceternityButton>
                    </td>
                    <td>
                      <div className="flex justify-center items-center gap-2">
                        <MagicButton className="shadow-sm text-xs px-2">Shimmer</MagicButton>
                        <RainbowButton className="text-xs px-2">Rainbow</RainbowButton>
                        <ShinyButton className="text-xs px-2">Shiny</ShinyButton>
                      </div>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Input</td>
                    <td>
                      <Input placeholder="Type here..." className="max-w-[200px]" />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <OriginInput placeholder="Email..." type="email" className="max-w-[200px]" />
                    </td>
                  </tr>
                  <tr>
                    <td>Select</td>
                    <td>
                      <div className="flex justify-center items-center">
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Checkbox</td>
                    <td>
                      <Checkbox id="shadcn-check" />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Badge</td>
                    <td>
                      <Badge>New</Badge>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Textarea</td>
                    <td>
                      <Textarea placeholder="Type here..." className="max-w-[200px]" />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Radio</td>
                    <td>
                      <RadioGroup defaultValue="option1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option1" id="r1" />
                        </div>
                      </RadioGroup>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Switch</td>
                    <td>
                      <Switch />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Slider</td>
                    <td>
                      <Slider defaultValue={[50]} max={100} step={1} className="w-[160px]" />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Avatar</td>
                    <td>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <AvatarCircles numPeople={3} avatarUrls={[]} />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Alert</td>
                    <td>
                      <Alert className="max-w-[200px]">
                        <AlertDescription>Alert message</AlertDescription>
                      </Alert>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Progress</td>
                    <td>
                      <Progress value={60} className="w-[160px]" />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Separator</td>
                    <td>
                      <Separator className="w-[160px]" />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Accordion</td>
                    <td>
                      <Accordion type="single" collapsible className="w-[200px]">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Item 1</AccordionTrigger>
                          <AccordionContent>Content</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Table</td>
                    <td>
                      <Table className="w-[200px]">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Item</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Dialog</td>
                    <td>
                      <Dialog>
                        <DialogTrigger asChild>
                          <ShadcnButton variant="outline">Open</ShadcnButton>
                        </DialogTrigger>
                        <DialogContent>Dialog Content</DialogContent>
                      </Dialog>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Modal ✓</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Tooltip</td>
                    <td>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <ShadcnButton variant="outline">Hover</ShadcnButton>
                          </TooltipTrigger>
                          <TooltipContent>Tooltip</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td>
                      <AnimatedTooltip
                        items={[
                          {
                            id: 1,
                            name: "Hover Me",
                            designation: "Animated",
                            image: "https://github.com/shadcn.png"
                          }
                        ]}
                      />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Tabs</td>
                    <td>
                      <span className="text-sm">Current Tab ✓</span>
                    </td>
                    <td>
                      <AceternityTabs
                        tabs={[
                          { title: "Tab 1", value: "tab1", content: "Content 1" },
                          { title: "Tab 2", value: "tab2", content: "Content 2" }
                        ]}
                        containerClassName="w-[200px]"
                        contentClassName="hidden"
                      />
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Dropdown</td>
                    <td>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <ShadcnButton variant="outline">Menu</ShadcnButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Item 1</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Animated Text</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <div className="flex justify-center items-center gap-2">
                        <AnimatedGradientText>Gradient</AnimatedGradientText>
                        <SparklesText>✨ Sparkles</SparklesText>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Bento Grid</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Layout ✓</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Layout ✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Background Effects</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Beams ✓</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Particles/Meteors ✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Moving Border</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <MovingBorderButton duration={3000} className="text-sm px-3 py-1">
                        Border
                      </MovingBorderButton>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Border Beam ✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Hover Border Gradient</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <HoverBorderGradient containerClassName="rounded-md" className="text-sm px-3 py-1">
                        Hover
                      </HoverBorderGradient>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Ripple Effect</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <Ripple />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Marquee</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <Marquee className="max-w-[200px]">
                        <span className="text-sm">Scrolling Text</span>
                      </Marquee>
                    </td>
                  </tr>
                  <tr>
                    <td>Number Animation</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <NumberTicker value={100} />
                    </td>
                  </tr>
                  <tr>
                    <td>Timeline</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Animated ✓</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Animated List</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Animated ✓</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Floating Dock</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Dock ✓</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Dock ✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Floating Navbar</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Floating Navbar ✓</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Sidebar</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Sidebar ✓</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Text Reveal</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Text Reveal ✓</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Animated Beam</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">Animated Beam ✓</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Blur Fade</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <BlurFade delay={0.1} inView>
                        <div className="text-sm">Fade In</div>
                      </BlurFade>
                    </td>
                  </tr>
                  <tr>
                    <td>Confetti</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <Suspense fallback={<ComponentLoader />}>
                        <ConfettiButton className="text-xs px-3 py-1">
                          🎉 Click
                        </ConfettiButton>
                      </Suspense>
                    </td>
                  </tr>
                  <tr>
                    <td>Cool Mode</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <Suspense fallback={<ComponentLoader />}>
                        <CoolMode>
                          <ShadcnButton size="sm" className="text-xs">✨ Click</ShadcnButton>
                        </CoolMode>
                      </Suspense>
                    </td>
                  </tr>
                  <tr>
                    <td>Globe</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <div className="w-32 h-32 relative">
                        <Suspense fallback={<ComponentLoader />}>
                          <Globe />
                        </Suspense>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Icon Cloud</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <div className="w-32 h-32">
                        <Suspense fallback={<ComponentLoader />}>
                          <IconCloud width={128} height={128} />
                        </Suspense>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Orbiting Circles</td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <span className="text-muted-foreground text-sm">-</span>
                    </td>
                    <td>
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <Suspense fallback={<ComponentLoader />}>
                          <OrbitingCircles className="h-8 w-8 border-none bg-transparent" duration={20} delay={0} radius={40}>
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </OrbitingCircles>
                          <OrbitingCircles className="h-8 w-8 border-none bg-transparent" duration={20} delay={10} radius={40}>
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </OrbitingCircles>
                        </Suspense>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
