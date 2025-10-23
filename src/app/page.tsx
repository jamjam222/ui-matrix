"use client";

import {
  useEffect,
  useLayoutEffect,
  useState,
  useMemo,
  useCallback,
  lazy,
  Suspense,
} from "react";
import { useToast } from "@/hooks/use-toast";
import { useDebounce } from "@/hooks/use-debounce";
import { ToastContainer } from "@/components/ui/toast";
import { ComponentLoader } from "@/components/loading-skeleton";
import Link from "next/link";
import { ShadcnButtonPreview } from "@/components/previews/shadcn/shadcn-button-preview";
import { ShadcnInputPreview } from "@/components/previews/shadcn/shadcn-input-preview";
import { ShadcnCheckboxPreview } from "@/components/previews/shadcn/shadcn-checkbox-preview";
import { ShadcnRadioGroupPreview } from "@/components/previews/shadcn/shadcn-radio-group-preview";
import { ShadcnSelectPreview } from "@/components/previews/shadcn/shadcn-select-preview";
import { ShadcnSwitchPreview } from "@/components/previews/shadcn/shadcn-switch-preview";
import { ShadcnSliderPreview } from "@/components/previews/shadcn/shadcn-slider-preview";
import { ShadcnAvatarPreview } from "@/components/previews/shadcn/shadcn-avatar-preview";
import { ShadcnBadgeDefaultPreview } from "@/components/previews/shadcn/shadcn-badge-default-preview";
import { ShadcnBadgeSecondaryPreview } from "@/components/previews/shadcn/shadcn-badge-secondary-preview";
import { ShadcnBadgeDestructivePreview } from "@/components/previews/shadcn/shadcn-badge-destructive-preview";
import { ShadcnBadgeOutlinePreview } from "@/components/previews/shadcn/shadcn-badge-outline-preview";
import { ShadcnAlertPreview } from "@/components/previews/shadcn/shadcn-alert-preview";
import { ShadcnProgressPreview } from "@/components/previews/shadcn/shadcn-progress-preview";
import { ShadcnSeparatorPreview } from "@/components/previews/shadcn/shadcn-separator-preview";
import { ShadcnAccordionPreview } from "@/components/previews/shadcn/shadcn-accordion-preview";
import { ShadcnCardPreview } from "@/components/previews/shadcn/shadcn-card-preview";
import { ShadcnTablePreview } from "@/components/previews/shadcn/shadcn-table-preview";
import { ShadcnTextareaPreview } from "@/components/previews/shadcn/shadcn-textarea-preview";
import { ShadcnTabsPreview } from "@/components/previews/shadcn/shadcn-tabs-preview";
import { ShadcnTooltipPreview } from "@/components/previews/shadcn/shadcn-tooltip-preview";
import { ShadcnDialogPreview } from "@/components/previews/shadcn/shadcn-dialog-preview";
import { ShadcnDropdownMenuPreview } from "@/components/previews/shadcn/shadcn-dropdown-menu-preview";
import { ShadcnPopoverPreview } from "@/components/previews/shadcn/shadcn-popover-preview";
import { ShadcnTogglePreview } from "@/components/previews/shadcn/shadcn-toggle-preview";
import { ShadcnSkeletonPreview } from "@/components/previews/shadcn/shadcn-skeleton-preview";
import { ShadcnCommandPreview } from "@/components/previews/shadcn/shadcn-command-preview";
import { ShadcnDrawerPreview } from "@/components/previews/shadcn/shadcn-drawer-preview";
import { Aceternity3dCardPreview } from "@/components/previews/aceternity/aceternity-3d-card-preview";
import { AceternityMovingBorderPreview } from "@/components/previews/aceternity/aceternity-moving-border-preview";
import { AceternityAnimatedTooltipPreview } from "@/components/previews/aceternity/aceternity-animated-tooltip-preview";
import { AceternityButtonPreview } from "@/components/previews/aceternity/aceternity-button-preview";
import { AceternityFloatingDockPreview } from "@/components/previews/aceternity/aceternity-floating-dock-preview";
import { AceternityHoverBorderPreview } from "@/components/previews/aceternity/aceternity-hover-border-preview";
import { AceternityTabsPreview } from "@/components/previews/aceternity/aceternity-tabs-preview";
import { MagicShimmerButtonPreview } from "@/components/previews/magicui/magic-shimmer-button-preview";
import { MagicRainbowButtonPreview } from "@/components/previews/magicui/magic-rainbow-button-preview";
import { MagicMeteorsPreview } from "@/components/previews/magicui/magic-meteors-preview";
import { MagicParticlesPreview } from "@/components/previews/magicui/magic-particles-preview";
import { MagicRipplePreview } from "@/components/previews/magicui/magic-ripple-preview";
import { MagicPulsatingButtonPreview } from "@/components/previews/magicui/magic-pulsating-button-preview";
import { MagicShinyButtonPreview } from "@/components/previews/magicui/magic-shiny-button-preview";
import { MagicAvatarCirclesPreview } from "@/components/previews/magicui/magic-avatar-circles-preview";
import { MagicAnimatedGradientTextPreview } from "@/components/previews/magicui/magic-animated-gradient-text-preview";
import { MagicSparklesTextPreview } from "@/components/previews/magicui/magic-sparkles-text-preview";
import { MagicBlurFadePreview } from "@/components/previews/magicui/magic-blur-fade-preview";
import { MagicConfettiPreview } from "@/components/previews/magicui/magic-confetti-preview";
import { MagicCoolModePreview } from "@/components/previews/magicui/magic-cool-mode-preview";
import { MagicGlobePreview } from "@/components/previews/magicui/magic-globe-preview";
import { MagicIconCloudPreview } from "@/components/previews/magicui/magic-icon-cloud-preview";
import { MagicOrbitingCirclesPreview } from "@/components/previews/magicui/magic-orbiting-circles-preview";
import { MagicBorderBeamPreview } from "@/components/previews/magicui/magic-border-beam-preview";
import { MagicNumberTickerPreview } from "@/components/previews/magicui/magic-number-ticker-preview";
import { MagicMarqueePreview } from "@/components/previews/magicui/magic-marquee-preview";
import { MagicCardPreview } from "@/components/previews/magicui/magic-card-preview";
import { Button as ShadcnButton } from "@/components/ui/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";
import { Badge } from "@/components/ui/shadcn/badge";
import { Input } from "@/components/ui/shadcn/input";
import { Input as OriginInput } from "@/components/ui/originui/input";
import { OriginButtonExample } from "@/components/ui/originui/button-01";
import { OriginCheckboxExample } from "@/components/ui/originui/checkbox-01";
import { OriginRadioExample } from "@/components/ui/originui/radio-01";
import { OriginSelectExample } from "@/components/ui/originui/select-01";
import { OriginSliderExample } from "@/components/ui/originui/slider-01";
import { OriginSwitchExample } from "@/components/ui/originui/switch-01";
import { OriginAccordionExample } from "@/components/ui/originui/accordion-01";
import { OriginAvatarExample } from "@/components/ui/originui/avatar-01";
import { OriginBadgeExample } from "@/components/ui/originui/badge-01";
import { OriginDialogExample } from "@/components/ui/originui/dialog-01";
import { OriginDropdownExample } from "@/components/ui/originui/dropdown-01";
import { OriginPopoverExample } from "@/components/ui/originui/popover-01";
import { OriginTooltipExample } from "@/components/ui/originui/tooltip-01";
import { OriginTabsExample } from "@/components/ui/originui/tabs-01";
import { OriginTextareaExample } from "@/components/ui/originui/textarea-01";
import { Textarea } from "@/components/ui/shadcn/textarea";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/shadcn/radio-group";
import { Switch } from "@/components/ui/shadcn/switch";
import { Slider } from "@/components/ui/shadcn/slider";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { Alert, AlertDescription } from "@/components/ui/shadcn/alert";
import { Progress } from "@/components/ui/shadcn/progress";
import { Separator } from "@/components/ui/shadcn/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn/tabs";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/shadcn/drawer";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/shadcn/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Github,
  ExternalLink,
  Search,
  Star,
  Copy,
  Info,
  Sparkles,
  Code2,
  Package,
  Palette,
  Zap,
  Target,
  Home,
  Settings,
  PartyPopper,
  Check,
  Lightbulb,
} from "lucide-react";

// UI 라이브러리 컴포넌트 - 기본만 eager loading
import { Button as AceternityButton } from "@/components/ui/aceternity/stateful-button";
import { ShimmerButton as MagicButton } from "@/components/ui/magicui/shimmer-button";

// Lazy loaded components for better performance - 무거운 컴포넌트들
const BlurFade = lazy(() =>
  import("@/components/ui/magicui/blur-fade").then((mod) => ({
    default: mod.BlurFade,
  }))
);
const OrbitingCircles = lazy(() =>
  import("@/components/ui/magicui/orbiting-circles").then((mod) => ({
    default: mod.OrbitingCircles,
  }))
);
const ConfettiButton = lazy(() =>
  import("@/components/ui/magicui/confetti").then((mod) => ({
    default: mod.ConfettiButton,
  }))
);
const CoolMode = lazy(() =>
  import("@/components/ui/magicui/cool-mode").then((mod) => ({
    default: mod.CoolMode,
  }))
);
const Globe = lazy(() =>
  import("@/components/ui/magicui/globe").then((mod) => ({
    default: mod.Globe,
  }))
);
const IconCloud = lazy(() =>
  import("@/components/ui/magicui/icon-cloud").then((mod) => ({
    default: mod.IconCloud,
  }))
);
const BorderBeam = lazy(() =>
  import("@/components/ui/magicui/border-beam").then((mod) => ({
    default: mod.BorderBeam,
  }))
);

// Aceternity 무거운 컴포넌트들도 lazy loading
const MovingBorderButton = lazy(() =>
  import("@/components/ui/aceternity/moving-border").then((mod) => ({
    default: mod.Button,
  }))
);
const HoverBorderGradient = lazy(() =>
  import("@/components/ui/aceternity/hover-border-gradient").then((mod) => ({
    default: mod.HoverBorderGradient,
  }))
);
const FloatingDock = lazy(() =>
  import("@/components/ui/aceternity/floating-dock").then((mod) => ({
    default: mod.FloatingDock,
  }))
);
const CardContainer = lazy(() =>
  import("@/components/ui/aceternity/card-3d").then((mod) => ({
    default: mod.CardContainer,
  }))
);
const CardBody = lazy(() =>
  import("@/components/ui/aceternity/card-3d").then((mod) => ({
    default: mod.CardBody,
  }))
);
const CardItem = lazy(() =>
  import("@/components/ui/aceternity/card-3d").then((mod) => ({
    default: mod.CardItem,
  }))
);
const AceternityTabs = lazy(() =>
  import("@/components/ui/aceternity/tabs").then((mod) => ({
    default: mod.Tabs,
  }))
);
const AnimatedTooltip = lazy(() =>
  import("@/components/ui/aceternity/animated-tooltip").then((mod) => ({
    default: mod.AnimatedTooltip,
  }))
);

// MagicUI 무거운 애니메이션 컴포넌트들
const RainbowButton = lazy(() =>
  import("@/components/ui/magicui/rainbow-button").then((mod) => ({
    default: mod.RainbowButton,
  }))
);
const ShinyButton = lazy(() =>
  import("@/components/ui/magicui/shiny-button").then((mod) => ({
    default: mod.ShinyButton,
  }))
);
const AvatarCircles = lazy(() =>
  import("@/components/ui/magicui/avatar-circles").then((mod) => ({
    default: mod.AvatarCircles,
  }))
);
const AnimatedGradientText = lazy(() =>
  import("@/components/ui/magicui/animated-gradient-text").then((mod) => ({
    default: mod.AnimatedGradientText,
  }))
);
const Meteors = lazy(() =>
  import("@/components/ui/magicui/meteors").then((mod) => ({
    default: mod.Meteors,
  }))
);
const Particles = lazy(() =>
  import("@/components/ui/magicui/particles").then((mod) => ({
    default: mod.Particles,
  }))
);
const Ripple = lazy(() =>
  import("@/components/ui/magicui/ripple").then((mod) => ({
    default: mod.Ripple,
  }))
);
const SparklesText = lazy(() =>
  import("@/components/ui/magicui/sparkles-text").then((mod) => ({
    default: mod.SparklesText,
  }))
);
const PulsatingButton = lazy(
  () => import("@/components/ui/magicui/pulsating-button")
);
const MagicCard = lazy(() =>
  import("@/components/ui/magicui/magic-card").then((mod) => ({
    default: mod.MagicCard,
  }))
);
const Marquee = lazy(() =>
  import("@/components/ui/magicui/marquee").then((mod) => ({
    default: mod.Marquee,
  }))
);
const NumberTicker = lazy(() =>
  import("@/components/ui/magicui/number-ticker").then((mod) => ({
    default: mod.NumberTicker,
  }))
);

// 컴포넌트 미리보기 매핑
import { componentPreviews } from "@/components/previews";

export default function UIMatrix() {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLibrary, setSelectedLibrary] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(
    null
  );
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("by-component");

  // 탭 변경 시 스크롤을 맨 위로
  const handleTabChange = (value: string) => {
    // 즉시 스크롤 위치 고정
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    setActiveTab(value);
    
    // 리렌더링 후 다시 한번 스크롤 확인
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  // 라이브러리 변경 시 스크롤을 맨 위로
  const handleLibraryChange = (library: string) => {
    // 즉시 스크롤 위치 고정
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    setSelectedLibrary(library);
    
    // 리렌더링 후 다시 한번 스크롤 확인
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  // 카테고리 변경 시 스크롤을 맨 위로
  const handleCategoryChange = (category: string) => {
    // 즉시 스크롤 위치 고정
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    setSelectedCategory(category);
    
    // 리렌더링 후 다시 한번 스크롤 확인
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  // 탭, 라이브러리, 카테고리 변경 시 스크롤 강제 고정
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [activeTab, selectedLibrary, selectedCategory]);

  // URL 파라미터에서 컴포넌트 ID 읽기
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const componentId = params.get("component");
      if (componentId) {
        setSelectedComponentId(componentId);
        setIsDetailModalOpen(true);
      }
    }
  }, []);

  // 모달 닫을 때 URL 파라미터 제거
  useEffect(() => {
    if (!isDetailModalOpen && typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("component");
      window.history.replaceState({}, "", url.toString());
    }
  }, [isDetailModalOpen]);

  // Prevent scroll restoration
  useLayoutEffect(() => {
    // Disable browser's scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force scroll to top immediately before paint
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Additional: Remove any hash from URL that might cause scroll
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, []);

  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
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

    // 초기 로딩 완료
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Force scroll to top only on initial mount - 성능 최적화
  useEffect(() => {
    const forceScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Run immediately
    forceScroll();

    // Single RAF to ensure it happens after paint - 5번 대신 1번만
    const rafId = requestAnimationFrame(() => {
      forceScroll();
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []); // 빈 배열로 초기 마운트 시에만 실행

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
  const libraries = [
    "all",
    "favorites",
    "shadcn",
    "aceternity",
    "magicui",
    "originui",
  ];
  const categories = [
    "all",
    "button",
    "input",
    "layout",
    "animation",
    "navigation",
    "feedback",
  ];

  const shouldShowLibrary = (library: string) => {
    if (selectedLibrary === "favorites") {
      // When favorites is selected, show all libraries but components will be filtered by favorites
      return true;
    }
    return selectedLibrary === "all" || selectedLibrary === library;
  };

  // Debounce search query for better performance (200ms delay - 더 빠른 반응)
  // Note: Input value updates immediately, but search filtering is debounced
  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  // Memoize normalized search query
  const normalizedSearchQuery = useMemo(() => {
    return debouncedSearchQuery.toLowerCase().trim();
  }, [debouncedSearchQuery]);

  // Search filter: check if component name matches query (memoized)
  const matchesSearch = useCallback(
    (componentName: string, componentId?: string) => {
      // If favorites filter is active, only show favorited components
      if (
        selectedLibrary === "favorites" &&
        componentId &&
        !favorites.has(componentId)
      ) {
        return false;
      }
      if (!normalizedSearchQuery) return true;
      return componentName.toLowerCase().includes(normalizedSearchQuery);
    },
    [selectedLibrary, favorites, normalizedSearchQuery]
  );

  // Category filter - if no category specified, show all (memoized)
  const matchesCategory = useCallback(
    (componentCategory?: string) => {
      if (!componentCategory) return true; // Show components without category
      return (
        selectedCategory === "all" || selectedCategory === componentCategory
      );
    },
    [selectedCategory]
  );

  // Toggle favorite (memoized)
  const toggleFavorite = useCallback(
    (componentId: string) => {
      const newFavorites = new Set(favorites);
      if (newFavorites.has(componentId)) {
        newFavorites.delete(componentId);
      } else {
        newFavorites.add(componentId);
      }
      setFavorites(newFavorites);
      localStorage.setItem(
        "ui-matrix-favorites",
        JSON.stringify(Array.from(newFavorites))
      );
    },
    [favorites]
  );

  // Toast notifications
  const { toasts, success, error, removeToast } = useToast();

  // Copy code to clipboard (memoized)
  const copyCode = useCallback(
    async (code: string, componentName: string) => {
      try {
        await navigator.clipboard.writeText(code);
        success(`${componentName} 코드가 복사되었습니다!`);
      } catch {
        error("코드 복사에 실패했습니다.");
      }
    },
    [success, error]
  );

  // 컴포넌트 상세 정보 데이터
  type ComponentDetails = {
    name: string;
    library: "shadcn" | "magicui" | "originui" | "aceternity";
    category: string;
    description: string;
    preview: React.ReactNode;
    code: string;
    installCommand: string;
    docs: string;
  };

  const componentDetailsData: Record<string, ComponentDetails> = {
    "magic-shimmer-button": {
      name: "Shimmer Button",
      library: "magicui",
      category: "button",
      description: "버튼 위로 반짝이는 효과가 지나가는 애니메이션을 제공합니다.",
      code: `import ShimmerButton from "@/components/ui/magicui/shimmer-button";\n\nexport function ShimmerButtonDemo() {\n  return <ShimmerButton>Shimmer</ShimmerButton>;\n}`,
      installCommand: "npx magic-ui-cli add shimmer-button",
      docs: "https://magicui.design/docs/components/shimmer-button",
      preview: <MagicShimmerButtonPreview />
    },
    "magic-rainbow-button": {
      name: "Rainbow Button",
      library: "magicui",
      category: "button",
      description: "버튼 주위에 무지개 색상의 애니메이션 테두리를 추가합니다.",
      code: `import RainbowButton from "@/components/ui/magicui/rainbow-button";\n\nexport function RainbowButtonDemo() {\n  return <RainbowButton>Rainbow</RainbowButton>;\n}`,
      installCommand: "npx magic-ui-cli add rainbow-button",
      docs: "https://magicui.design/docs/components/rainbow-button",
      preview: <MagicRainbowButtonPreview />
    },
    "magic-meteors": {
      name: "Meteors",
      library: "magicui",
      category: "animation",
      description: "배경에 유성이 떨어지는 듯한 애니메이션 효과를 추가합니다.",
      code: `import Meteors from "@/components/ui/magicui/meteors";\n\nexport function MeteorsDemo() {\n  return <Meteors number={20} />;\n}`,
      installCommand: "npx magic-ui-cli add meteors",
      docs: "https://magicui.design/docs/components/meteors",
      preview: <MagicMeteorsPreview />
    },
    "magic-particles": {
      name: "Particles",
      library: "magicui",
      category: "animation",
      description: "배경에 떠다니는 입자 애니메이션 효과를 추가합니다.",
      code: `import Particles from "@/components/ui/magicui/particles";\n\nexport function ParticlesDemo() {\n  return <Particles className=\"absolute inset-0\" quantity={100} />;\n}`,
      installCommand: "npx magic-ui-cli add particles",
      docs: "https://magicui.design/docs/components/particles",
      preview: <MagicParticlesPreview />
    },
    "magic-ripple": {
      name: "Ripple",
      library: "magicui",
      category: "animation",
      description: "물결이 퍼져나가는 듯한 리플 애니메이션 효과를 추가합니다.",
      code: `import Ripple from "@/components/ui/magicui/ripple";\n\nexport function RippleDemo() {\n  return <Ripple />;\n}`,
      installCommand: "npx magic-ui-cli add ripple",
      docs: "https://magicui.design/docs/components/ripple",
      preview: <MagicRipplePreview />
    },
    "magic-pulsating-button": {
      name: "Pulsating Button",
      library: "magicui",
      category: "button",
      description: "주기적으로 맥동하는 애니메이션 효과가 있는 버튼입니다.",
      code: `import PulsatingButton from "@/components/ui/magicui/pulsating-button";\n\nexport function PulsatingButtonDemo() {\n  return <PulsatingButton>Pulsating</PulsatingButton>;\n}`,
      installCommand: "npx magic-ui-cli add pulsating-button",
      docs: "https://magicui.design/docs/components/pulsating-button",
      preview: <MagicPulsatingButtonPreview />
    },
    "magic-shiny-button": {
      name: "Shiny Button",
      library: "magicui",
      category: "button",
      description: "마우스를 올리면 빛나는 효과가 나타나는 버튼입니다.",
      code: `import ShinyButton from "@/components/ui/magicui/shiny-button";\n\nexport function ShinyButtonDemo() {\n  return <ShinyButton>Shiny</ShinyButton>;\n}`,
      installCommand: "npx magic-ui-cli add shiny-button",
      docs: "https://magicui.design/docs/components/shiny-button",
      preview: <MagicShinyButtonPreview />
    },
    "magic-avatar-circles": {
      name: "Avatar Circles",
      library: "magicui",
      category: "animation",
      description: "여러 아바타 이미지를 원형으로 겹쳐서 보여주는 컴포넌트입니다.",
      code: `import AvatarCircles from "@/components/ui/magicui/avatar-circles";\n\nexport function AvatarCirclesDemo() {\n  return <AvatarCircles numPeople={3} />;\n}`,
      installCommand: "npx magic-ui-cli add avatar-circles",
      docs: "https://magicui.design/docs/components/avatar-circles",
      preview: <MagicAvatarCirclesPreview />
    },
    "magic-animated-gradient-text": {
      name: "Animated Gradient Text",
      library: "magicui",
      category: "animation",
      description: "텍스트에 애니메이션 그라데이션 효과를 적용합니다.",
      code: `import AnimatedGradientText from "@/components/ui/magicui/animated-gradient-text";\n\nexport function AnimatedGradientTextDemo() {\n  return <AnimatedGradientText>Gradient</AnimatedGradientText>;\n}`,
      installCommand: "npx magic-ui-cli add animated-gradient-text",
      docs: "https://magicui.design/docs/components/animated-gradient-text",
      preview: <MagicAnimatedGradientTextPreview />
    },
    "magic-sparkles-text": {
      name: "Sparkles Text",
      library: "magicui",
      category: "animation",
      description: "텍스트 주위에 반짝이는 효과를 추가합니다.",
      code: `import SparklesText from "@/components/ui/magicui/sparkles-text";\n\nexport function SparklesTextDemo() {\n  return <SparklesText text=\"Sparkles\" />;\n}`,
      installCommand: "npx magic-ui-cli add sparkles-text",
      docs: "https://magicui.design/docs/components/sparkles-text",
      preview: <MagicSparklesTextPreview />
    },
    "magic-blur-fade": {
      name: "Blur Fade",
      library: "magicui",
      category: "animation",
      description: "흐려지면서 나타나는 페이드 인 애니메이션 효과입니다.",
      code: `import BlurFade from "@/components/ui/magicui/blur-fade";\n\nexport function BlurFadeDemo() {\n  return <BlurFade>Blur Fade</BlurFade>;\n}`,
      installCommand: "npx magic-ui-cli add blur-fade",
      docs: "https://magicui.design/docs/components/blur-fade",
      preview: <MagicBlurFadePreview />
    },
    "magic-confetti": {
      name: "Confetti",
      library: "magicui",
      category: "animation",
      description: "클릭 시 색종이 조각이 흩날리는 애니메이션 효과를 보여줍니다.",
      code: `import Confetti from "@/components/ui/magicui/confetti";\n\nexport function ConfettiDemo() {\n  return <Confetti />;\n}`,
      installCommand: "npx magic-ui-cli add confetti",
      docs: "https://magicui.design/docs/components/confetti",
      preview: <MagicConfettiPreview />
    },
    "magic-cool-mode": {
      name: "Cool Mode",
      library: "magicui",
      category: "animation",
      description: "버튼 클릭 시 주변으로 다채로운 파티클이 폭발하는 효과를 추가합니다.",
      code: `import CoolMode from "@/components/ui/magicui/cool-mode";\n\nexport function CoolModeDemo() {\n  return <CoolMode><button>Click</button></CoolMode>;\n}`,
      installCommand: "npx magic-ui-cli add cool-mode",
      docs: "https://magicui.design/docs/components/cool-mode",
      preview: <MagicCoolModePreview />
    },
    "magic-globe": {
      name: "Globe",
      library: "magicui",
      category: "animation",
      description: "인터랙티브한 3D 지구본을 렌더링합니다.",
      code: `import Globe from "@/components/ui/magicui/globe";\n\nexport function GlobeDemo() {\n  return <Globe />;\n}`,
      installCommand: "npx magic-ui-cli add globe",
      docs: "https://magicui.design/docs/components/globe",
      preview: <MagicGlobePreview />
    },
    "magic-icon-cloud": {
      name: "Icon Cloud",
      library: "magicui",
      category: "animation",
      description: "여러 아이콘이 구름처럼 떠다니는 애니메이션 효과를 만듭니다.",
      code: `import IconCloud from "@/components/ui/magicui/icon-cloud";\n\nexport function IconCloudDemo() {\n  return <IconCloud />;\n}`,
      installCommand: "npx magic-ui-cli add icon-cloud",
      docs: "https://magicui.design/docs/components/icon-cloud",
      preview: <MagicIconCloudPreview />
    },
    "magic-orbiting-circles": {
      name: "Orbiting Circles",
      library: "magicui",
      category: "animation",
      description: "중심점을 기준으로 여러 요소가 궤도를 도는 애니메이션입니다.",
      code: `import OrbitingCircles from "@/components/ui/magicui/orbiting-circles";\n\nexport function OrbitingCirclesDemo() {\n  return <OrbitingCircles><div className=\"h-3 w-3 rounded-full bg-primary\"></div></OrbitingCircles>;\n}`,
      installCommand: "npx magic-ui-cli add orbiting-circles",
      docs: "https://magicui.design/docs/components/orbiting-circles",
      preview: <MagicOrbitingCirclesPreview />
    },
    "magic-border-beam": {
      name: "Border Beam",
      library: "magicui",
      category: "animation",
      description: "컨테이너 주위에 빛나는 테두리 빔 애니메이션을 추가합니다.",
      code: `import BorderBeam from "@/components/ui/magicui/border-beam";\n\nexport function BorderBeamDemo() {\n  return <div className=\"relative rounded-xl\"><BorderBeam /><div className=\"p-4\">Content</div></div>;\n}`,
      installCommand: "npx magic-ui-cli add border-beam",
      docs: "https://magicui.design/docs/components/border-beam",
      preview: <MagicBorderBeamPreview />
    },
    "magic-number-ticker": {
      name: "Number Ticker",
      library: "magicui",
      category: "animation",
      description: "숫자가 부드럽게 올라가거나 내려가는 애니메이션 효과를 줍니다.",
      code: `import NumberTicker from "@/components/ui/magicui/number-ticker";\n\nexport function NumberTickerDemo() {\n  return <NumberTicker value={100} />;\n}`,
      installCommand: "npx magic-ui-cli add number-ticker",
      docs: "https://magicui.design/docs/components/number-ticker",
      preview: <MagicNumberTickerPreview />
    },
    "magic-marquee": {
      name: "Marquee",
      library: "magicui",
      category: "animation",
      description: "콘텐츠가 수평으로 계속 흐르는 마키 애니메이션입니다.",
      code: `import Marquee from "@/components/ui/magicui/marquee";\n\nexport function MarqueeDemo() {\n  return <Marquee><p>Content</p></Marquee>;\n}`,
      installCommand: "npx magic-ui-cli add marquee",
      docs: "https://magicui.design/docs/components/marquee",
      preview: <MagicMarqueePreview />
    },
    "magic-card": {
      name: "Magic Card",
      library: "magicui",
      category: "animation",
      description: "마우스를 올리면 빛나는 그라데이션 테두리가 나타나는 카드입니다.",
      code: `import { MagicCard } from "@/components/ui/magicui/magic-card";\n\nexport function MagicCardDemo() {\n  return <MagicCard>Magic Card</MagicCard>;\n}`,
      installCommand: "npx magic-ui-cli add magic-card",
      docs: "https://magicui.design/docs/components/magic-card",
      preview: <MagicCardPreview />
    },
    "aceternity-button": {
      name: "Stateful Button",
      library: "aceternity",
      category: "button",
      description: "클릭 시 로딩, 완료 등 다양한 상태를 가질 수 있는 버튼입니다.",
      code: `import { Button as AceternityButton } from "@/components/ui/aceternity/stateful-button";\n\nexport function StatefulButtonDemo() {\n  return <AceternityButton>Click Me</AceternityButton>;\n}`,
      installCommand: "npx aceternity-ui@latest add tailwindcss-buttons",
      docs: "https://ui.aceternity.com/components/tailwindcss-buttons",
      preview: <AceternityButtonPreview />
    },
    "aceternity-animated-tooltip": {
      name: "Animated Tooltip",
      library: "aceternity",
      category: "animation",
      description: "여러 사용자 아바타에 마우스를 올리면 부드러운 애니메이션과 함께 툴팁이 표시됩니다.",
      code: `import { AnimatedTooltip } from "@/components/ui/aceternity/animated-tooltip";\n\nconst people = [\n  { id: 1, name: 'John Doe', designation: 'Software Engineer', image: '...' },\n  { id: 2, name: 'Jane Doe', designation: 'Product Manager', image: '...' }\n];\n\nexport function AnimatedTooltipDemo() {\n  return <AnimatedTooltip items={people} />;\n}`,
      installCommand: "npx aceternity-ui@latest add animated-tooltip",
      docs: "https://ui.aceternity.com/components/animated-tooltip",
      preview: <AceternityAnimatedTooltipPreview />
    },
    "aceternity-moving-border": {
      name: "Moving Border",
      library: "aceternity",
      category: "button",
      description: "버튼 주위를 따라 움직이는 애니메이션 테두리를 추가합니다.",
      code: `import { Button } from "@/components/ui/moving-border";\n\nexport function MovingBorderDemo() {\n  return <Button>Moving Border</Button>;\n}`,
      installCommand: "npx aceternity-ui@latest add moving-border",
      docs: "https://ui.aceternity.com/components/moving-border",
      preview: <AceternityMovingBorderPreview />
    },
    "aceternity-hover-border": {
      name: "Hover Border Gradient",
      library: "aceternity",
      category: "animation",
      description: "마우스를 올리면 그라데이션 테두리가 나타나는 효과를 추가합니다.",
      code: `import { HoverBorderGradient } from "@/components/ui/aceternity/hover-border-gradient";\n\nexport function HoverBorderGradientDemo() {\n  return <HoverBorderGradient>Hover Me</HoverBorderGradient>;\n}`,
      installCommand: "npx aceternity-ui@latest add hover-border-gradient",
      docs: "https://ui.aceternity.com/components/hover-border-gradient",
      preview: <AceternityHoverBorderPreview />
    },
    "aceternity-tabs": {
      name: "Animated Tabs",
      library: "aceternity",
      category: "navigation",
      description: "탭 전환 시 부드러운 애니메이션 효과가 적용된 탭 컴포넌트입니다.",
      code: `import { Tabs as AceternityTabs } from "@/components/ui/aceternity/tabs";\n\nconst tabs = [\n  { title: 'Tab 1', value: 'tab1', content: '...' },\n  { title: 'Tab 2', value: 'tab2', content: '...' }\n];\n\nexport function AnimatedTabsDemo() {\n  return <AceternityTabs tabs={tabs} />;\n}`,
      installCommand: "npx aceternity-ui@latest add tabs",
      docs: "https://ui.aceternity.com/components/tabs",
      preview: <AceternityTabsPreview />
    },
    "aceternity-floating-dock": {
      name: "Floating Dock",
      library: "aceternity",
      category: "navigation",
      description: "macOS의 Dock과 유사한 플로팅 네비게이션 메뉴입니다.",
      code: `import { FloatingDock } from "@/components/ui/aceternity/floating-dock";\n\nconst navItems = [\n  { title: 'Home', icon: <HomeIcon />, href: '#' },\n  { title: 'About', icon: <UserIcon />, href: '#' }\n];\n\nexport function FloatingDockDemo() {\n  return <FloatingDock items={navItems} />;\n}`,
      installCommand: "npx aceternity-ui@latest add floating-nav",
      docs: "https://ui.aceternity.com/components/floating-nav",
      preview: <AceternityFloatingDockPreview />
    },
    "aceternity-3d-card": {
      name: "3D Card Effect",
      library: "aceternity",
      category: "card",
      description: "마우스 움직임에 따라 3D 효과를 보여주는 카드 컴포넌트입니다.",
      code: `import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";\n\nexport function CardDemo() {\n  return (\n    <CardContainer>\n      <CardBody>\n        <CardItem>Hello</CardItem>\n      </CardBody>\n    </CardContainer>\n  );\n}`,
      installCommand: "npx aceternity-ui@latest add 3d-card",
      docs: "https://ui.aceternity.com/components/3d-card-effect",
      preview: <Aceternity3dCardPreview />
    },
    "origin-button": {
      name: "Button",
      library: "originui",
      category: "button",
      description: "다양한 형태와 상호작용을 지원하는 기본 버튼입니다.",
      code: `import { Button } from "@/components/ui/origin/button";\n\nexport function ButtonDemo() {\n  return <Button>Click Me</Button>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/button",
      preview: <OriginButtonExample />
    },
    "origin-input": {
      name: "Input",
      library: "originui",
      category: "form",
      description: "사용자 입력을 받기 위한 기본적인 텍스트 필드입니다.",
      code: `import { Input } from "@/components/ui/origin/input";\n\nexport function InputDemo() {\n  return <Input placeholder=\"Enter text...\" />;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/input",
      preview: <OriginInput />
    },
    "origin-checkbox": {
      name: "Checkbox",
      library: "originui",
      category: "form",
      description: "단일 또는 다중 선택이 가능한 체크박스입니다.",
      code: `import { Checkbox } from "@/components/ui/origin/checkbox";\n\nexport function CheckboxDemo() {\n  return <Checkbox label=\"Accept terms\" />;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/checkbox",
      preview: <OriginCheckboxExample />
    },
    "origin-radio": {
      name: "Radio",
      library: "originui",
      category: "form",
      description: "여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 그룹입니다.",
      code: `import { RadioGroup, Radio } from "@/components/ui/origin/radio";\n\nexport function RadioDemo() {\n  return <RadioGroup label=\"Options\"><Radio value=\"1\">Option 1</Radio></RadioGroup>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/radio",
      preview: <OriginRadioExample />
    },
    "origin-select": {
      name: "Select",
      library: "originui",
      category: "form",
      description: "드롭다운 목록에서 하나의 값을 선택하는 컴포넌트입니다.",
      code: `import { Select, SelectItem } from "@/components/ui/origin/select";\n\nexport function SelectDemo() {\n  return <Select label=\"Select an option\"><SelectItem>Option 1</SelectItem></Select>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/select",
      preview: <OriginSelectExample />
    },
    "origin-slider": {
      name: "Slider",
      library: "originui",
      category: "form",
      description: "지정된 범위 내에서 값을 조절하는 슬라이더입니다.",
      code: `import { Slider } from "@/components/ui/origin/slider";\n\nexport function SliderDemo() {\n  return <Slider label=\"Volume\" defaultValue={50} />;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/slider",
      preview: <OriginSliderExample />
    },
    "origin-switch": {
      name: "Switch",
      library: "originui",
      category: "form",
      description: "On/Off 상태를 전환하는 스위치입니다.",
      code: `import { Switch } from "@/components/ui/origin/switch";\n\nexport function SwitchDemo() {\n  return <Switch label=\"Enable notifications\" />;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/switch",
      preview: <OriginSwitchExample />
    },
    "origin-textarea": {
      name: "Textarea",
      library: "originui",
      category: "form",
      description: "여러 줄의 텍스트를 입력받는 필드입니다.",
      code: `import { Textarea } from "@/components/ui/origin/textarea";\n\nexport function TextareaDemo() {\n  return <Textarea placeholder=\"Enter long text...\" />;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/textarea",
      preview: <OriginTextareaExample />
    },
    "origin-accordion": {
      name: "Accordion",
      library: "originui",
      category: "layout",
      description: "콘텐츠를 접고 펼 수 있는 아코디언 컴포넌트입니다.",
      code: `import { Accordion, AccordionItem } from "@/components/ui/origin/accordion";\n\nexport function AccordionDemo() {\n  return <Accordion><AccordionItem title=\"Section 1\">Content 1</AccordionItem></Accordion>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/accordion",
      preview: <OriginAccordionExample />
    },
    "origin-avatar": {
      name: "Avatar",
      library: "originui",
      category: "data display",
      description: "사용자 프로필 이미지나 이니셜을 표시하는 아바타입니다.",
      code: `import { Avatar } from "@/components/ui/origin/avatar";\n\nexport function AvatarDemo() {\n  return <Avatar src=\"https://i.pravatar.cc/150?u=a042581f4e29026024d\" />;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/avatar",
      preview: <OriginAvatarExample />
    },
    "origin-badge": {
      name: "Badge",
      library: "originui",
      category: "data display",
      description: "상태나 정보를 강조하는 작은 배지입니다.",
      code: `import { Badge } from "@/components/ui/origin/badge";\n\nexport function BadgeDemo() {\n  return <Badge>New</Badge>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/badge",
      preview: <OriginBadgeExample />
    },
    "origin-dialog": {
      name: "Dialog",
      library: "originui",
      category: "overlay",
      description: "사용자에게 중요한 정보를 알리거나 추가 입력을 요구하는 모달 창입니다.",
      code: `import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/origin/dialog";\n\nexport function DialogDemo() {\n  return <Dialog><DialogTrigger>Open</DialogTrigger><DialogContent>Dialog Content</DialogContent></Dialog>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/dialog",
      preview: <OriginDialogExample />
    },
    "origin-dropdown": {
      name: "Dropdown",
      library: "originui",
      category: "overlay",
      description: "클릭 시 메뉴나 옵션 목록을 보여주는 드롭다운입니다.",
      code: `import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@/components/ui/origin/dropdown";\n\nexport function DropdownDemo() {\n  return <Dropdown><DropdownTrigger>Open</DropdownTrigger><DropdownMenu><DropdownItem>Item 1</DropdownItem></DropdownMenu></Dropdown>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/dropdown",
      preview: <OriginDropdownExample />
    },
    "origin-popover": {
      name: "Popover",
      library: "originui",
      category: "overlay",
      description: "특정 요소 근처에 추가 정보를 표시하는 팝오버입니다.",
      code: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/origin/popover";\n\nexport function PopoverDemo() {\n  return <Popover><PopoverTrigger>Open</PopoverTrigger><PopoverContent>Popover Content</PopoverContent></Popover>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/popover",
      preview: <OriginPopoverExample />
    },
    "origin-tooltip": {
      name: "Tooltip",
      library: "originui",
      category: "overlay",
      description: "마우스를 올렸을 때 간단한 정보를 보여주는 툴팁입니다.",
      code: `import { Tooltip } from "@/components/ui/origin/tooltip";\n\nexport function TooltipDemo() {\n  return <Tooltip content=\"Tooltip message\"><button>Hover me</button></Tooltip>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/tooltip",
      preview: <OriginTooltipExample />
    },
    "origin-tabs": {
      name: "Tabs",
      library: "originui",
      category: "layout",
      description: "여러 콘텐츠 패널을 전환할 수 있는 탭 인터페이스입니다.",
      code: `import { Tabs, Tab } from "@/components/ui/origin/tabs";\n\nexport function TabsDemo() {\n  return <Tabs><Tab title=\"Tab 1\">Content 1</Tab></Tabs>;\n}`,
      installCommand: "npm install @origin-ui/react",
      docs: "https://www.origin-ui.com/components/tabs",
      preview: <OriginTabsExample currentPage={1} totalPages={5} />
    },
    "shadcn-button": {
      name: "Button",
      library: "shadcn",
      category: "button",
      description: "다양한 스타일과 크기를 지원하는 버튼 컴포넌트입니다. <br />접근성과 사용자 경험을 고려하여 디자인되었습니다.",
      code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <>
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
    </>
  )
}`,
      installCommand: "npx shadcn-ui@latest add button",
      docs: "https://ui.shadcn.com/docs/components/button",
      preview: <ShadcnButtonPreview />
    },
    "shadcn-input": {
      name: "Input",
      library: "shadcn",
      category: "input",
      description: "사용자 입력을 받기 위한 텍스트 필드 컴포넌트입니다. <br />다양한 타입과 스타일을 지원합니다.",
      code: `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return (
    <>
      <Input placeholder="Type here..." />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </>
  )
}`,
      installCommand: "npx shadcn-ui@latest add input",
      docs: "https://ui.shadcn.com/docs/components/input",
      preview: <ShadcnInputPreview />
    },
    "shadcn-checkbox": {
      name: "Checkbox",
      library: "shadcn",
      category: "input",
      description: "여러 옵션 중 하나 이상을 선택할 수 있는 체크박스 컴포넌트입니다.",
      code: `import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  )
}`,
      installCommand: "npx shadcn-ui@latest add checkbox",
      docs: "https://ui.shadcn.com/docs/components/checkbox",
      preview: <ShadcnCheckboxPreview />
    },
    "shadcn-radio": {
      name: "Radio Group",
      library: "shadcn",
      category: "input",
      description: "여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 그룹입니다.",
      code: `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioDemo() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1">Option 1</label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2">Option 2</label>
      </div>
    </RadioGroup>
  )
}`,
      installCommand: "npx shadcn-ui@latest add radio-group",
      docs: "https://ui.shadcn.com/docs/components/radio-group",
      preview: <ShadcnRadioGroupPreview />
    },
    "shadcn-select": {
      name: "Select",
      library: "shadcn",
      category: "input",
      description: "드롭다운에서 옵션을 선택할 수 있는 셀렉트 컴포넌트입니다.",
      code: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"\n\nexport function SelectDemo() {\n  return (\n    <Select>\n      <SelectTrigger className=\"w-[180px]\">\n        <SelectValue placeholder=\"Theme\" />\n      </SelectTrigger>\n      <SelectContent>\n        <SelectItem value=\"option1\">Option 1</SelectItem>\n        <SelectItem value=\"option2\">Option 2</SelectItem>\n        <SelectItem value=\"option3\">Option 3</SelectItem>\n      </SelectContent>\n    </Select>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add select",
      docs: "https://ui.shadcn.com/docs/components/select",
      preview: <ShadcnSelectPreview />
    },
    "shadcn-switch": {
      name: "Switch",
      library: "shadcn",
      category: "input",
      description: "On/Off 상태를 토글할 수 있는 스위치 컴포넌트입니다.",
      code: `import { Switch } from "@/components/ui/switch"\n\nexport function SwitchDemo() {\n  return (\n    <div className=\"flex items-center space-x-2\">\n      <Switch id=\"airplane-mode\" />\n      <label htmlFor=\"airplane-mode\">Airplane Mode</label>\n    </div>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add switch",
      docs: "https://ui.shadcn.com/docs/components/switch",
      preview: <ShadcnSwitchPreview />
    },
    "shadcn-slider": {
      name: "Slider",
      library: "shadcn",
      category: "input",
      description: "범위 내에서 값을 선택할 수 있는 슬라이더 컴포넌트입니다.",
      code: `import { Slider } from "@/components/ui/slider"\n\nexport function SliderDemo() {\n  return (\n    <Slider\n      defaultValue={[50]}\n      max={100}\n      step={1}\n      className=\"w-[60%]\"\n    />\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add slider",
      docs: "https://ui.shadcn.com/docs/components/slider",
      preview: <ShadcnSliderPreview />
    },
    "shadcn-avatar": {
      name: "Avatar",
      library: "shadcn",
      category: "display",
      description: "사용자 프로필 이미지를 표시하는 아바타 컴포넌트입니다.",
      code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`,
      installCommand: "npx shadcn-ui@latest add avatar",
      docs: "https://ui.shadcn.com/docs/components/avatar",
      preview: <ShadcnAvatarPreview />
    },
    "shadcn-badge-default": {
      name: "Badge (Default)",
      library: "shadcn",
      category: "feedback",
      description: "상태나 카테고리를 표시하는 뱃지 컴포넌트입니다.",
      code: `import { Badge } from "@/components/ui/badge"\n\nexport function BadgeDemo() {\n  return <Badge>Default</Badge>\n}`,
      installCommand: "npx shadcn-ui@latest add badge",
      docs: "https://ui.shadcn.com/docs/components/badge",
      preview: <ShadcnBadgeDefaultPreview />
    },
    "shadcn-badge-secondary": {
      name: "Badge (Secondary)",
      library: "shadcn",
      category: "feedback",
      description: "상태나 카테고리를 표시하는 뱃지 컴포넌트입니다.",
      code: `import { Badge } from "@/components/ui/badge"\n\nexport function BadgeDemo() {\n  return <Badge variant=\"secondary\">Secondary</Badge>\n}`,
      installCommand: "npx shadcn-ui@latest add badge",
      docs: "https://ui.shadcn.com/docs/components/badge",
      preview: <ShadcnBadgeSecondaryPreview />
    },
    "shadcn-badge-destructive": {
      name: "Badge (Destructive)",
      library: "shadcn",
      category: "feedback",
      description: "상태나 카테고리를 표시하는 뱃지 컴포넌트입니다.",
      code: `import { Badge } from "@/components/ui/badge"\n\nexport function BadgeDemo() {\n  return <Badge variant=\"destructive\">Destructive</Badge>\n}`,
      installCommand: "npx shadcn-ui@latest add badge",
      docs: "https://ui.shadcn.com/docs/components/badge",
      preview: <ShadcnBadgeDestructivePreview />
    },
    "shadcn-badge-outline": {
      name: "Badge (Outline)",
      library: "shadcn",
      category: "feedback",
      description: "상태나 카테고리를 표시하는 뱃지 컴포넌트입니다.",
      code: `import { Badge } from "@/components/ui/badge"\n\nexport function BadgeDemo() {\n  return <Badge variant=\"outline\">Outline</Badge>\n}`,
      installCommand: "npx shadcn-ui@latest add badge",
      docs: "https://ui.shadcn.com/docs/components/badge",
      preview: <ShadcnBadgeOutlinePreview />
    },
    "shadcn-alert": {
      name: "Alert",
      library: "shadcn",
      category: "feedback",
      description: "사용자에게 중요한 메시지를 표시하는 알림 컴포넌트입니다.",
      code: `import { Github, ExternalLink, Search, Star, Copy, Code, Info, Sparkles, X, ChevronDown, ChevronUp, Filter, Heart, Code2, Package, Terminal } from "lucide-react";

export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`,
      installCommand: "npx shadcn-ui@latest add alert",
      docs: "https://ui.shadcn.com/docs/components/alert",
      preview: <ShadcnAlertPreview />
    },
    "shadcn-progress": {
      name: "Progress",
      library: "shadcn",
      category: "data display",
      description: "작업의 진행 상태를 시각적으로 표시하는 프로그레스 바입니다.",
      code: `import { Progress } from "@/components/ui/progress";\n\nexport function ProgressDemo() {\n  return <Progress value={33} />;\n}`,
      installCommand: "npx shadcn-ui@latest add progress",
      docs: "https://ui.shadcn.com/docs/components/progress",
      preview: <ShadcnProgressPreview />
    },
    "shadcn-separator": {
      name: "Separator",
      library: "shadcn",
      category: "layout",
      description: "콘텐츠를 시각적으로 구분하는 구분선 컴포넌트입니다.",
      code: `import { Separator } from "@/components/ui/separator"\n\nexport function SeparatorDemo() {\n  return (\n    <div>\n      <div className=\"space-y-1\">\n        <h4 className=\"text-sm font-medium\">Radix Primitives</h4>\n        <p className=\"text-sm text-muted-foreground\">\n          An open-source UI component library.\n        </p>\n      </div>\n      <Separator className=\"my-4\" />\n      <div className=\"flex h-5 items-center space-x-4 text-sm\">\n        <div>Blog</div>\n        <Separator orientation=\"vertical\" />\n        <div>Docs</div>\n      </div>\n    </div>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add separator",
      docs: "https://ui.shadcn.com/docs/components/separator",
      preview: <ShadcnSeparatorPreview />
    },
    "shadcn-accordion": {
      name: "Accordion",
      library: "shadcn",
      category: "layout",
      description: "콘텐츠를 접고 펼칠 수 있는 아코디언 컴포넌트입니다.",
      code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"\n\nexport function AccordionDemo() {\n  return (\n    <Accordion type=\"single\" collapsible>\n      <AccordionItem value=\"item-1\">\n        <AccordionTrigger>Is it accessible?</AccordionTrigger>\n        <AccordionContent>\n          Yes. It adheres to the WAI-ARIA design pattern.\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem value=\"item-2\">\n        <AccordionTrigger>Is it styled?</AccordionTrigger>\n        <AccordionContent>\n          Yes. It comes with default styles that matches the other components' aesthetic.\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem value=\"item-3\">\n        <AccordionTrigger>Is it animated?</AccordionTrigger>\n        <AccordionContent>\n          Yes. It's animated by default, but you can disable it if you prefer.\n        </AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add accordion",
      docs: "https://ui.shadcn.com/docs/components/accordion",
      preview: <ShadcnAccordionPreview />
    },
    "shadcn-card": {
      name: "Card",
      library: "shadcn",
      category: "layout",
      description: "관련된 콘텐츠를 그룹화하는 카드 컴포넌트입니다.",
      code: `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"\n\nexport function CardDemo() {\n  return (\n    <Card>\n      <CardHeader>\n        <CardTitle>Card Title</CardTitle>\n        <CardDescription>Card Description</CardDescription>\n      </CardHeader>\n      <CardContent>\n        <p>Card Content</p>\n      </CardContent>\n      <CardFooter>\n        <p>Card Footer</p>\n      </CardFooter>\n    </Card>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add card",
      docs: "https://ui.shadcn.com/docs/components/card",
      preview: <ShadcnCardPreview />
    },
    "shadcn-table": {
      name: "Table",
      library: "shadcn",
      category: "layout",
      description: "데이터를 표 형식으로 표시하는 테이블 컴포넌트입니다.",
      code: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"\n\nexport function TableDemo() {\n  return (\n    <Table>\n      <TableHeader>\n        <TableRow>\n          <TableHead>Name</TableHead>\n          <TableHead>Status</TableHead>\n        </TableRow>\n      </TableHeader>\n      <TableBody>\n        <TableRow>\n          <TableCell>Item 1</TableCell>\n          <TableCell>Active</TableCell>\n        </TableRow>\n        <TableRow>\n          <TableCell>Item 2</TableCell>\n          <TableCell>Inactive</TableCell>\n        </TableRow>\n      </TableBody>\n    </Table>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add table",
      docs: "https://ui.shadcn.com/docs/components/table",
      preview: <ShadcnTablePreview />
    },
    "shadcn-textarea": {
      name: "Textarea",
      library: "shadcn",
      category: "input",
      description: "여러 줄의 텍스트 입력을 받는 텍스트 영역 컴포넌트입니다.",
      code: `import { Textarea } from "@/components/ui/textarea"\n\nexport function TextareaDemo() {\n  return (\n    <Textarea placeholder=\"Type your message here.\" />\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add textarea",
      docs: "https://ui.shadcn.com/docs/components/textarea",
      preview: <ShadcnTextareaPreview />
    },
    "shadcn-tabs": {
      name: "Tabs",
      library: "shadcn",
      category: "navigation",
      description: "콘텐츠를 탭으로 구분하여 표시하는 탭 컴포넌트입니다.",
      code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"\n\nexport function TabsDemo() {\n  return (\n    <Tabs defaultValue=\"account\">\n      <TabsList>\n        <TabsTrigger value=\"account\">Account</TabsTrigger>\n        <TabsTrigger value=\"password\">Password</TabsTrigger>\n      </TabsList>\n      <TabsContent value=\"account\">\n        Make changes to your account here.\n      </TabsContent>\n      <TabsContent value=\"password\">\n        Change your password here.\n      </TabsContent>\n    </Tabs>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add tabs",
      docs: "https://ui.shadcn.com/docs/components/tabs",
      preview: <ShadcnTabsPreview />
    },
    "shadcn-tooltip": {
      name: "Tooltip",
      library: "shadcn",
      category: "feedback",
      description: "요소에 마우스를 올렸을 때 추가 정보를 표시하는 툴팁 컴포넌트입니다.",
      code: `import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"\n\nexport function TooltipDemo() {\n  return (\n    <TooltipProvider>\n      <Tooltip>\n        <TooltipTrigger>Hover me</TooltipTrigger>\n        <TooltipContent>\n          <p>This is a tooltip</p>\n        </TooltipContent>\n      </Tooltip>\n    </TooltipProvider>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add tooltip",
      docs: "https://ui.shadcn.com/docs/components/tooltip",
      preview: <ShadcnTooltipPreview />
    },
    "shadcn-dialog": {
      name: "Dialog",
      library: "shadcn",
      category: "feedback",
      description: "모달 형식으로 콘텐츠를 표시하는 다이얼로그 컴포넌트입니다.",
      code: `import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"\n\nexport function DialogDemo() {\n  return (\n    <Dialog>\n      <DialogTrigger>Open</DialogTrigger>\n      <DialogContent>\n        <DialogHeader>\n          <DialogTitle>Are you sure?</DialogTitle>\n          <DialogDescription>\n            This action cannot be undone.\n          </DialogDescription>\n        </DialogHeader>\n      </DialogContent>\n    </Dialog>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add dialog",
      docs: "https://ui.shadcn.com/docs/components/dialog",
      preview: <ShadcnDialogPreview />
    },
    "shadcn-dropdown": {
      name: "Dropdown Menu",
      library: "shadcn",
      category: "navigation",
      description: "메뉴 옵션을 드롭다운으로 표시하는 컴포넌트입니다.",
      code: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"\n\nexport function DropdownDemo() {\n  return (\n    <DropdownMenu>\n      <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n      <DropdownMenuContent>\n        <DropdownMenuItem>Profile</DropdownMenuItem>\n        <DropdownMenuItem>Settings</DropdownMenuItem>\n        <DropdownMenuItem>Logout</DropdownMenuItem>\n      </DropdownMenuContent>\n    </DropdownMenu>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add dropdown-menu",
      docs: "https://ui.shadcn.com/docs/components/dropdown-menu",
      preview: <ShadcnDropdownMenuPreview />
    },
    "shadcn-popover": {
      name: "Popover",
      library: "shadcn",
      category: "feedback",
      description: "요소 주변에 팝업 콘텐츠를 표시하는 팝오버 컴포넌트입니다.",
      code: `import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"\n\nexport function PopoverDemo() {\n  return (\n    <Popover>\n      <PopoverTrigger>Open</PopoverTrigger>\n      <PopoverContent>\n        Place content for the popover here.\n      </PopoverContent>\n    </Popover>\n  )\n}`,
      installCommand: "npx shadcn-ui@latest add popover",
      docs: "https://ui.shadcn.com/docs/components/popover",
      preview: <ShadcnPopoverPreview />
    },
    "shadcn-toggle": {
      name: "Toggle",
      library: "shadcn",
      category: "input",
      description: "On/Off 상태를 전환할 수 있는 토글 버튼 컴포넌트입니다.",
      code: `import { Toggle } from "@/components/ui/toggle"\n\nexport function ToggleDemo() {\n  return (\n    <>\n      <Toggle>Toggle</Toggle>\n      <Toggle variant=\"outline\">Toggle Outline</Toggle>\n    </>\n  )\n}`,
      installCommand: "npx shadcn@latest add toggle",
      docs: "https://ui.shadcn.com/docs/components/toggle",
      preview: <ShadcnTogglePreview />
    },
    "shadcn-skeleton": {
      name: "Skeleton",
      library: "shadcn",
      category: "feedback",
      description: "콘텐츠 로딩 중 플레이스홀더를 표시하는 스켈레톤 컴포넌트입니다.",
      code: `import { Skeleton } from "@/components/ui/skeleton"\n\nexport function SkeletonDemo() {\n  return (\n    <div className=\"space-y-2\">\n      <Skeleton className=\"h-4 w-[250px]\" />\n      <Skeleton className=\"h-4 w-[200px]\" />\n      <Skeleton className=\"h-4 w-[150px]\" />\n    </div>\n  )\n}`,
      installCommand: "npx shadcn@latest add skeleton",
      docs: "https://ui.shadcn.com/docs/components/skeleton",
      preview: <ShadcnSkeletonPreview />
    },
    "shadcn-command": {
      name: "Command",
      library: "shadcn",
      category: "navigation",
      description: "명령 팔레트를 구현하는 커맨드 메뉴 컴포넌트입니다.",
      code: `import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"\n\nexport function CommandDemo() {\n  return (\n    <Command>\n      <CommandInput placeholder=\"Type a command or search...\" />\n      <CommandList>\n        <CommandEmpty>No results found.</CommandEmpty>\n        <CommandGroup heading=\"Suggestions\">\n          <CommandItem>Calendar</CommandItem>\n          <CommandItem>Search Emoji</CommandItem>\n          <CommandItem>Calculator</CommandItem>\n        </CommandGroup>\n      </CommandList>\n    </Command>\n  )\n}`,
      installCommand: "npx shadcn@latest add command",
      docs: "https://ui.shadcn.com/docs/components/command",
      preview: <ShadcnCommandPreview />
    },
    "shadcn-drawer": {
      name: "Drawer",
      library: "shadcn",
      category: "feedback",
      description: "화면 측면에서 슬라이드되는 드로어 컴포넌트입니다.",
      code: `import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"\n\nexport function DrawerDemo() {\n  return (\n    <Drawer>\n      <DrawerTrigger>Open</DrawerTrigger>\n      <DrawerContent>\n        <DrawerHeader>\n          <DrawerTitle>Are you sure?</DrawerTitle>\n          <DrawerDescription>This action cannot be undone.</DrawerDescription>\n        </DrawerHeader>\n        <DrawerFooter>\n          <DrawerClose>Cancel</DrawerClose>\n        </DrawerFooter>\n      </DrawerContent>\n    </Drawer>\n  )\n}`,
      installCommand: "npx shadcn@latest add drawer",
      docs: "https://ui.shadcn.com/docs/components/drawer",
      preview: <ShadcnDrawerPreview />
    },
  };

  // 선택된 컴포넌트 정보 가져오기
  const selectedComponent = selectedComponentId ? componentDetailsData[selectedComponentId] : null;

  // 상세보기 모달 열기
  const openDetailModal = useCallback((componentId: string) => {
    setSelectedComponentId(componentId);
    setIsDetailModalOpen(true);

    // URL에 컴포넌트 ID 추가
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("component", componentId);
      window.history.pushState({}, "", url.toString());
    }
  }, []);

  // 상세보기 모달 닫기
  const closeDetailModal = useCallback(() => {
    setIsDetailModalOpen(false);
    setSelectedComponentId(null);
  }, []);

  // 브라우저 뒤로가기 지원
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const componentId = params.get("component");

      if (componentId) {
        setSelectedComponentId(componentId);
        setIsDetailModalOpen(true);
      } else {
        setIsDetailModalOpen(false);
        setSelectedComponentId(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // "By Component" 탭을 위한 데이터 재구성
  const componentGroups = Object.values(componentDetailsData).reduce<{
    name: string;
    category: string;
    variants: {
      shadcn: { count: number; component: React.ReactNode };
      aceternity: { count: number; component: React.ReactNode };
      magicui: { count: number; component: React.ReactNode };
      originui: { count: number; component: React.ReactNode };
    };
  }[]>((acc, component) => {
    // Badge와 같이 여러 변형이 있는 컴포넌트의 기본 이름 추출 (예: "Badge (Default)" -> "Badge")
    const baseName = component.name.replace(/ \(.*\)/, "");

    let group = acc.find((g) => g.name === baseName);

    if (!group) {
      group = {
        name: baseName,
        category: component.category, // 대표 카테고리로 첫 번째 컴포넌트의 것을 사용
        variants: {
          shadcn: { count: 0, component: null },
          aceternity: { count: 0, component: null },
          magicui: { count: 0, component: null },
          originui: { count: 0, component: null },
        },
      };
      acc.push(group);
    }

    // 라이브러리에 해당하는 컴포넌트 미리보기를 추가
    // 이미 해당 라이브러리에 컴포넌트가 추가된 경우, count만 증가시키고 component는 덮어쓰지 않음 (주로 첫 번째 변형을 대표로 보여줌)
    if (group.variants[component.library as keyof typeof group.variants]) {
      const variant = group.variants[component.library as keyof typeof group.variants];
      if (variant.component === null) {
        variant.component = component.preview;
      }
      variant.count += 1;
    }

    return acc;
  }, []);

  // 로딩 중일 때 로딩 화면 표시
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          {/* 로딩 스피너 */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>

          {/* 로딩 텍스트 */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-semibold text-foreground">로딩 중...</p>
            <p className="text-sm text-muted-foreground">
              컴포넌트를 불러오고 있습니다
            </p>
          </div>

          {/* 진행 바 */}
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full animate-pulse"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Skip to main content for keyboard navigation */}
      <a href="#main-content" className="skip-to-content" tabIndex={0}>
        메인 콘텐츠로 건너뛰기
      </a>

      <main
        id="main-content"
        className="component-catalog container mx-auto px-6 py-12 space-y-16"
        tabIndex={-1}
      >
        <header className="flex items-center justify-between mb-8 p-6 rounded-2xl bg-background/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent drop-shadow-sm">
              UI Matrix
            </h1>
            <p className="text-base text-muted-foreground font-medium">
              라이브러리 컴포넌트 비교 갤러리
            </p>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-background/70 backdrop-blur-lg border border-white/20 dark:border-white/10 hover:bg-background/80 transition-all duration-300 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] hover:shadow-[0_6px_20px_0_rgba(31,38,135,0.2)] hover:-translate-y-0.5 active:translate-y-0"
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {isDark ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Buttons: Gallery / Compare */}
        <section className="component-catalog__section">
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="component-catalog__tabs"
          >
            <TabsList className="grid w-full grid-cols-4 bg-background/60 backdrop-blur-xl border border-white/20 dark:border-white/10 p-1 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)]">
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="compare">Compare</TabsTrigger>
              <TabsTrigger value="by-component">By Component</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
            </TabsList>

            {/* Search & Filter Bar */}
            {activeTab === 'gallery' && (
              <div className="mt-6 mb-8 space-y-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <label htmlFor="component-search" className="sr-only">
                    컴포넌트 검색
                  </label>
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <Input
                    id="component-search"
                    type="text"
                    placeholder="컴포넌트 검색... (예: Button, Input)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/70 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-[0_4px_16px_0_rgba(31,38,135,0.1)] focus:shadow-[0_6px_20px_0_rgba(31,38,135,0.2)] focus:bg-background/80 transition-all duration-300"
                    aria-label="컴포넌트 검색"
                    autoComplete="off"
                    spellCheck="false"
                  />
                </div>

                {/* Library Filter */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">
                      라이브러리
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {libraries.map((lib) => (
                        <button
                          key={lib}
                          type="button"
                          onClick={() => handleLibraryChange(lib)}
                          className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 ${
                            selectedLibrary === lib
                              ? "bg-primary/90 text-primary-foreground backdrop-blur-lg border border-primary/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.25)]"
                              : "bg-background/60 backdrop-blur-lg border border-white/20 dark:border-white/10 hover:bg-background/80 shadow-[0_2px_8px_0_rgba(31,38,135,0.1)] hover:shadow-[0_4px_12px_0_rgba(31,38,135,0.15)]"
                          }`}
                        >
                          {lib === "all" ? (
                            "전체"
                          ) : lib === "favorites" ? (
                            <>
                              <Star className="h-4 w-4 inline mr-1" /> 즐겨찾기
                            </>
                          ) : (
                            lib.charAt(0).toUpperCase() + lib.slice(1)
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">
                      카테고리
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => handleCategoryChange(cat)}
                          className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 ${
                            selectedCategory === cat
                              ? "bg-secondary/90 text-secondary-foreground backdrop-blur-lg border border-secondary/30 shadow-[0_4px_16px_0_rgba(31,38,135,0.25)]"
                              : "bg-background/60 backdrop-blur-lg border border-white/20 dark:border-white/10 hover:bg-background/80 shadow-[0_2px_8px_0_rgba(31,38,135,0.1)] hover:shadow-[0_4px_12px_0_rgba(31,38,135,0.15)]"
                          }`}
                        >
                          {cat === "all"
                            ? "전체"
                            : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <TabsContent value="gallery">
              <div className="space-y-16">
                {/* shadcn/ui Section */}
                {shouldShowLibrary("shadcn") && (
                  <section>
                    <div className="flex items-center gap-3 mb-8 pb-4 px-4 py-3 rounded-xl bg-background/50 backdrop-blur-lg border border-white/15 dark:border-white/8">
                      <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                        shadcn/ui
                      </h3>
                      <Link
                        href="https://ui.shadcn.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <span>공식 사이트</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="component-catalog__grid">
                      {matchesSearch("Button", "shadcn-button") &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-button"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/button"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Button</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    openDetailModal("shadcn-button")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Button 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("shadcn-button")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-button")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-button")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Button>Default</Button>\n<Button variant="outline">Outline</Button>',
                                      "Button"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Button 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex gap-2 justify-center">
                                <ShadcnButton>Default</ShadcnButton>
                                <ShadcnButton variant="outline">
                                  Outline
                                </ShadcnButton>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Input", "shadcn-input") &&
                        matchesCategory("input") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-input"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/input"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Input</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    openDetailModal("shadcn-input")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Input 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-input")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-input")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-input")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Input placeholder="Default" />\n<Input placeholder="Disabled" disabled />',
                                      "Input"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Input 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
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
                        <article
                          className="component-card animate-fade-in-up"
                          data-library="shadcn"
                        >
                          <div className="component-card__header">
                            <div className="component-card__title">
                              <Link
                                href="https://ui.shadcn.com/docs/components/select"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                              >
                                <span>Select</span>
                                <svg
                                  className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => openDetailModal("shadcn-select")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="상세 보기"
                                aria-label="Select 상세 보기"
                              >
                                <Search className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => toggleFavorite("shadcn-select")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="즐겨찾기"
                                aria-label={
                                  favorites.has("shadcn-select")
                                    ? "즐겨찾기 제거"
                                    : "즐겨찾기 추가"
                                }
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    favorites.has("shadcn-select")
                                      ? "fill-yellow-400 text-yellow-400"
                                      : ""
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() =>
                                  copyCode(
                                    '<Select>\n  <SelectTrigger>\n    <SelectValue placeholder="Select" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="1">Option 1</SelectItem>\n  </SelectContent>\n</Select>',
                                    "Select"
                                  )
                                }
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="코드 복사"
                                aria-label="Select 코드 복사"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="component-card__body">
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="option1">
                                  Option 1
                                </SelectItem>
                                <SelectItem value="option2">
                                  Option 2
                                </SelectItem>
                                <SelectItem value="option3">
                                  Option 3
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </article>
                      )}

                      {matchesSearch("Checkbox") &&
                        matchesCategory("input") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/checkbox"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Checkbox</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    openDetailModal("shadcn-checkbox")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Checkbox 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("shadcn-checkbox")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-checkbox")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-checkbox")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Checkbox id="check" />\n<label htmlFor="check">Label</label>',
                                      "Checkbox"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Checkbox 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                  <Checkbox id="check1" />
                                  <label htmlFor="check1" className="text-sm">
                                    Default
                                  </label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox id="check2" defaultChecked />
                                  <label htmlFor="check2" className="text-sm">
                                    Checked
                                  </label>
                                </div>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Radio") && matchesCategory("input") && (
                        <article
                          className="component-card animate-fade-in-up"
                          data-library="shadcn"
                        >
                          <div className="component-card__header">
                            <div className="component-card__title">
                              <Link
                                href="https://ui.shadcn.com/docs/components/radio-group"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                              >
                                <span>Radio</span>
                                <svg
                                  className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => openDetailModal("shadcn-radio")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="상세 보기"
                                aria-label="Radio 상세 보기"
                              >
                                <Search className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => toggleFavorite("shadcn-radio")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="즐겨찾기"
                                aria-label={
                                  favorites.has("shadcn-radio")
                                    ? "즐겨찾기 제거"
                                    : "즐겨찾기 추가"
                                }
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    favorites.has("shadcn-radio")
                                      ? "fill-yellow-400 text-yellow-400"
                                      : ""
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() =>
                                  copyCode(
                                    '<RadioGroup defaultValue="1">\n  <RadioGroupItem value="1" id="r1" />\n  <label htmlFor="r1">Option 1</label>\n</RadioGroup>',
                                    "Radio"
                                  )
                                }
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="코드 복사"
                                aria-label="Radio 코드 복사"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="component-card__body">
                            <RadioGroup defaultValue="option1">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option1" id="r1" />
                                <label htmlFor="r1" className="text-sm">
                                  Option 1
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option2" id="r2" />
                                <label htmlFor="r2" className="text-sm">
                                  Option 2
                                </label>
                              </div>
                            </RadioGroup>
                          </div>
                        </article>
                      )}

                      {matchesSearch("Switch") && matchesCategory("input") && (
                        <article
                          className="component-card animate-fade-in-up"
                          data-library="shadcn"
                        >
                          <div className="component-card__header">
                            <div className="component-card__title">
                              <Link
                                href="https://ui.shadcn.com/docs/components/switch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                              >
                                <span>Switch</span>
                                <svg
                                  className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => openDetailModal("shadcn-switch")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="상세 보기"
                                aria-label="Switch 상세 보기"
                              >
                                <Search className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => toggleFavorite("shadcn-switch")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="즐겨찾기"
                                aria-label={
                                  favorites.has("shadcn-switch")
                                    ? "즐겨찾기 제거"
                                    : "즐겨찾기 추가"
                                }
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    favorites.has("shadcn-switch")
                                      ? "fill-yellow-400 text-yellow-400"
                                      : ""
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() =>
                                  copyCode(
                                    '<Switch id="switch" />\n<label htmlFor="switch">Toggle</label>',
                                    "Switch"
                                  )
                                }
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="코드 복사"
                                aria-label="Switch 코드 복사"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="component-card__body">
                            <div className="flex gap-4">
                              <div className="flex items-center gap-2">
                                <Switch id="switch1" />
                                <label htmlFor="switch1" className="text-sm">
                                  Off
                                </label>
                              </div>
                              <div className="flex items-center gap-2">
                                <Switch id="switch2" defaultChecked />
                                <label htmlFor="switch2" className="text-sm">
                                  On
                                </label>
                              </div>
                            </div>
                          </div>
                        </article>
                      )}

                      {matchesSearch("Slider") && matchesCategory("input") && (
                        <article
                          className="component-card animate-fade-in-up"
                          data-library="shadcn"
                        >
                          <div className="component-card__header">
                            <div className="component-card__title">
                              <Link
                                href="https://ui.shadcn.com/docs/components/slider"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                              >
                                <span>Slider</span>
                                <svg
                                  className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => openDetailModal("shadcn-slider")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="상세 보기"
                                aria-label="Slider 상세 보기"
                              >
                                <Search className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => toggleFavorite("shadcn-slider")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="즐겨찾기"
                                aria-label={
                                  favorites.has("shadcn-slider")
                                    ? "즐겨찾기 제거"
                                    : "즐겨찾기 추가"
                                }
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    favorites.has("shadcn-slider")
                                      ? "fill-yellow-400 text-yellow-400"
                                      : ""
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() =>
                                  copyCode(
                                    "<Slider defaultValue={[50]} max={100} step={1} />",
                                    "Slider"
                                  )
                                }
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="코드 복사"
                                aria-label="Slider 코드 복사"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
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

                      {matchesSearch("Avatar") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/avatar"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Avatar</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    openDetailModal("shadcn-avatar")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Avatar 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("shadcn-avatar")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-avatar")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-avatar")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Avatar>\n  <AvatarImage src="..." />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>',
                                      "Avatar"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Avatar 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
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

                      {matchesSearch("Badge (Default)", "shadcn-badge-default") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-badge-default"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href={componentDetailsData["shadcn-badge-default"].docs}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>{componentDetailsData["shadcn-badge-default"].name}</span>
                                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-badge-default")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => copyCode(componentDetailsData["shadcn-badge-default"].code, componentDetailsData["shadcn-badge-default"].name)}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-badge-default")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("shadcn-badge-default")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              {componentDetailsData["shadcn-badge-default"].preview}
                            </div>
                          </article>
                        )}

                      {matchesSearch("Badge (Secondary)", "shadcn-badge-secondary") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-badge-secondary"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href={componentDetailsData["shadcn-badge-secondary"].docs}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>{componentDetailsData["shadcn-badge-secondary"].name}</span>
                                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-badge-secondary")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => copyCode(componentDetailsData["shadcn-badge-secondary"].code, componentDetailsData["shadcn-badge-secondary"].name)}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-badge-secondary")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("shadcn-badge-secondary")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              {componentDetailsData["shadcn-badge-secondary"].preview}
                            </div>
                          </article>
                        )}

                      {matchesSearch("Badge (Destructive)", "shadcn-badge-destructive") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-badge-destructive"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href={componentDetailsData["shadcn-badge-destructive"].docs}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>{componentDetailsData["shadcn-badge-destructive"].name}</span>
                                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-badge-destructive")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => copyCode(componentDetailsData["shadcn-badge-destructive"].code, componentDetailsData["shadcn-badge-destructive"].name)}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-badge-destructive")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("shadcn-badge-destructive")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              {componentDetailsData["shadcn-badge-destructive"].preview}
                            </div>
                          </article>
                        )}

                      {matchesSearch("Badge (Outline)", "shadcn-badge-outline") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-badge-outline"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href={componentDetailsData["shadcn-badge-outline"].docs}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>{componentDetailsData["shadcn-badge-outline"].name}</span>
                                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-badge-outline")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => copyCode(componentDetailsData["shadcn-badge-outline"].code, componentDetailsData["shadcn-badge-outline"].name)}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-badge-outline")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("shadcn-badge-outline")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              {componentDetailsData["shadcn-badge-outline"].preview}
                            </div>
                          </article>
                        )}

                      {matchesSearch("Progress") && matchesCategory() && (
                        <article
                          className="component-card animate-fade-in-up"
                          data-component="shadcn-progress"
                          data-library="shadcn"
                        >
                          <div className="component-card__header">
                            <div className="component-card__title">
                              <Link
                                href="https://ui.shadcn.com/docs/components/progress"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                              >
                                <span>Progress</span>
                                <svg
                                  className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => openDetailModal("shadcn-progress")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="상세 보기"
                                aria-label="Progress 상세 보기"
                              >
                                <Search className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => toggleFavorite("shadcn-progress")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="즐겨찾기"
                                aria-label={
                                  favorites.has("shadcn-progress")
                                    ? "즐겨찾기 제거"
                                    : "즐겨찾기 추가"
                                }
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    favorites.has("shadcn-progress")
                                      ? "fill-yellow-400 text-yellow-400"
                                      : ""
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() =>
                                  copyCode(
                                    '<Progress value={33} />\n<Progress value={66} />\n<Progress value={100} />',
                                    "Progress"
                                  )
                                }
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="코드 복사"
                                aria-label="Progress 코드 복사"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
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

                      {matchesSearch("Dropdown") &&
                        matchesCategory("navigation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-dropdown"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/dropdown-menu"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Dropdown</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-dropdown")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Dropdown 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-dropdown")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-dropdown")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-dropdown")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<DropdownMenu>\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>Profile</DropdownMenuItem>\n    <DropdownMenuItem>Settings</DropdownMenuItem>\n    <DropdownMenuItem>Logout</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>',
                                      "Dropdown"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Dropdown 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <ShadcnButton variant="outline">
                                    Open Menu
                                  </ShadcnButton>
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

                      {matchesSearch("Tooltip") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-tooltip"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/tooltip"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Tooltip</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-tooltip")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Tooltip 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-tooltip")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-tooltip")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-tooltip")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger>Hover me</TooltipTrigger>\n    <TooltipContent>\n      <p>This is a tooltip</p>\n    </TooltipContent>\n  </Tooltip>\n</TooltipProvider>',
                                      "Tooltip"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Tooltip 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <ShadcnButton variant="outline">
                                      Hover Me
                                    </ShadcnButton>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    This is a tooltip
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Accordion") &&
                        matchesCategory("layout") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-accordion"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/accordion"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Accordion</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-accordion")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Accordion 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-accordion")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-accordion")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-accordion")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Accordion type="single" collapsible>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>\n      Yes. It adheres to the WAI-ARIA design pattern.\n    </AccordionContent>\n  </AccordionItem>\n</Accordion>',
                                      "Accordion"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Accordion 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                              >
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>Section 1</AccordionTrigger>
                                  <AccordionContent>
                                    Content for section 1
                                  </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                  <AccordionTrigger>Section 2</AccordionTrigger>
                                  <AccordionContent>
                                    Content for section 2
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Alert") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-alert"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/alert"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Alert</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-alert")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Alert 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-alert")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-alert")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-alert")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Alert>\n  <Terminal className="h-4 w-4" />\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>\n    You can add components to your app using the cli.\n  </AlertDescription>\n</Alert>',
                                      "Alert"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Alert 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <Alert>
                                <AlertDescription>
                                  This is an alert message
                                </AlertDescription>
                              </Alert>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Card") && matchesCategory("layout") && (
                        <article
                          className="component-card animate-fade-in-up"
                          data-component="shadcn-card"
                          data-library="shadcn"
                        >
                          <div className="component-card__header">
                            <div className="component-card__title">
                              <Link
                                href="https://ui.shadcn.com/docs/components/card"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                              >
                                <span>Card</span>
                                <svg
                                  className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => openDetailModal("shadcn-card")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="상세 보기"
                                aria-label="Card 상세 보기"
                              >
                                <Search className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => toggleFavorite("shadcn-card")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="즐겨찾기"
                                aria-label={
                                  favorites.has("shadcn-card")
                                    ? "즐겨찾기 제거"
                                    : "즐겨찾기 추가"
                                }
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    favorites.has("shadcn-card")
                                      ? "fill-yellow-400 text-yellow-400"
                                      : ""
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() =>
                                  copyCode(
                                    '<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Card Content</p>\n  </CardContent>\n  <CardFooter>\n    <p>Card Footer</p>\n  </CardFooter>\n</Card>',
                                    "Card"
                                  )
                                }
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="코드 복사"
                                aria-label="Card 코드 복사"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="component-card__body">
                            <Card>
                              <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-muted-foreground">
                                  Card content goes here
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </article>
                      )}

                      {matchesSearch("Dialog") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-dialog"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/dialog"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Dialog</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-dialog")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Dialog 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-dialog")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-dialog")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-dialog")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Are you sure?</DialogTitle>\n      <DialogDescription>\n        This action cannot be undone.\n      </DialogDescription>\n    </DialogHeader>\n  </DialogContent>\n</Dialog>',
                                      "Dialog"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Dialog 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <ShadcnButton variant="outline">
                                    Open Dialog
                                  </ShadcnButton>
                                </DialogTrigger>
                                <DialogContent>
                                  <p>Dialog content</p>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Separator") &&
                        matchesCategory("layout") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-separator"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/separator"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Separator</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-separator")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Separator 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-separator")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-separator")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-separator")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Separator />',
                                      "Separator"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Separator 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
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
                        <article
                          className="component-card animate-fade-in-up"
                          data-component="shadcn-table"
                          data-library="shadcn"
                        >
                          <div className="component-card__header">
                            <div className="component-card__title">
                              <Link
                                href="https://ui.shadcn.com/docs/components/table"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                              >
                                <span>Table</span>
                                <svg
                                  className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </Link>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => openDetailModal("shadcn-table")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="상세 보기"
                                aria-label="Table 상세 보기"
                              >
                                <Search className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => toggleFavorite("shadcn-table")}
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="즐겨찾기"
                                aria-label={
                                  favorites.has("shadcn-table")
                                    ? "즐겨찾기 제거"
                                    : "즐겨찾기 추가"
                                }
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    favorites.has("shadcn-table")
                                      ? "fill-yellow-400 text-yellow-400"
                                      : ""
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() =>
                                  copyCode(
                                    '<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Name</TableHead>\n      <TableHead>Status</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Item 1</TableCell>\n      <TableCell>Active</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
                                    "Table"
                                  )
                                }
                                className="p-1 hover:bg-muted rounded transition-colors"
                                title="코드 복사"
                                aria-label="Table 코드 복사"
                              >
                                <Copy className="w-4 h-4" />
                              </button>
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

                      {matchesSearch("Textarea") &&
                        matchesCategory("input") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-textarea"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/textarea"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Textarea</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-textarea")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Textarea 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-textarea")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-textarea")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-textarea")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Textarea placeholder="Type your message here." />',
                                      "Textarea"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Textarea 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <Textarea placeholder="Type your message here..." />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Tabs", "shadcn-tabs") &&
                        matchesCategory("navigation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-tabs"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/tabs"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Tabs (shadcn)</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-tabs")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Tabs 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-tabs")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-tabs")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("shadcn-tabs")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Tabs defaultValue="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n    <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n  </TabsList>\n</Tabs>',
                                      "Tabs"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Tabs 코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
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

                      {matchesSearch("Toggle", "shadcn-toggle") &&
                        matchesCategory("input") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-toggle"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/toggle"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Toggle</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-toggle")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Toggle 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("shadcn-toggle")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-toggle")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("shadcn-toggle")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<Toggle>Toggle Me</Toggle>",
                                      "Toggle"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Toggle 코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex gap-2 justify-center">
                                <ShadcnButton variant="outline" size="sm">
                                  Bold
                                </ShadcnButton>
                                <ShadcnButton variant="outline" size="sm">
                                  Italic
                                </ShadcnButton>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Skeleton", "shadcn-skeleton") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-skeleton"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/skeleton"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Skeleton</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-skeleton")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Skeleton 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("shadcn-skeleton")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-skeleton")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("shadcn-skeleton")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Skeleton className="w-[200px] h-[20px]" />',
                                      "Skeleton"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Skeleton 코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
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

                      {matchesSearch("Command", "shadcn-command") &&
                        matchesCategory("navigation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-command"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/command"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Command</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-command")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Command 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("shadcn-command")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-command")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("shadcn-command")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Command>\n  <CommandInput placeholder="Search..." />\n  <CommandList>\n    <CommandItem>Item</CommandItem>\n  </CommandList>\n</Command>',
                                      "Command"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Command 코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
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

                      {matchesSearch("Drawer", "shadcn-drawer") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-drawer"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/drawer"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Drawer</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-drawer")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Drawer 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-drawer")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-drawer")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("shadcn-drawer")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<Drawer>\n  <DrawerTrigger>Open</DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader>\n      <DrawerTitle>Title</DrawerTitle>\n    </DrawerHeader>\n  </DrawerContent>\n</Drawer>",
                                      "Drawer"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Drawer 코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <Drawer>
                                <DrawerTrigger asChild>
                                  <ShadcnButton variant="outline">
                                    Open Drawer
                                  </ShadcnButton>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <DrawerHeader>
                                    <DrawerTitle>Drawer Title</DrawerTitle>
                                    <DrawerDescription>
                                      This is a drawer component
                                    </DrawerDescription>
                                  </DrawerHeader>
                                  <div className="p-4">
                                    <p className="text-sm text-muted-foreground">
                                      Drawer content goes here...
                                    </p>
                                  </div>
                                  <DrawerFooter>
                                    <DrawerClose asChild>
                                      <ShadcnButton variant="outline">
                                        Close
                                      </ShadcnButton>
                                    </DrawerClose>
                                  </DrawerFooter>
                                </DrawerContent>
                              </Drawer>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Popover", "shadcn-popover") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="shadcn-popover"
                            data-library="shadcn"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.shadcn.com/docs/components/popover"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Popover</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("shadcn-popover")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                  aria-label="Popover 상세 보기"
                                >
                                  <Search className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("shadcn-popover")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("shadcn-popover")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`w-4 h-4 ${
                                      favorites.has("shadcn-popover")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Popover>\n  <PopoverTrigger>Open</PopoverTrigger>\n  <PopoverContent>\n    <p>Content</p>\n  </PopoverContent>\n</Popover>',
                                      "Popover"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                  aria-label="Popover 코드 복사"
                                >
                                  <Copy className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <ShadcnButton variant="outline">
                                    Open Popover
                                  </ShadcnButton>
                                </PopoverTrigger>
                                <PopoverContent>
                                  <div className="space-y-2">
                                    <h4 className="font-medium">Popover Title</h4>
                                    <p className="text-sm text-muted-foreground">
                                      This is a popover component
                                    </p>
                                  </div>
                                </PopoverContent>
                              </Popover>
                            </div>
                          </article>
                        )}
                    </div>
                  </section>
                )}

                {/* Aceternity UI Section */}
                {shouldShowLibrary("aceternity") && (
                  <section>
                    <div className="flex items-center gap-3 mb-8 pb-4 px-4 py-3 rounded-xl bg-background/50 backdrop-blur-lg border border-white/15 dark:border-white/8">
                      <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
                        Aceternity UI
                      </h3>
                      <Link
                        href="https://ui.aceternity.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <span>공식 사이트</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="component-catalog__grid">
                      {matchesSearch("Stateful Button", "aceternity-button") &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="aceternity-button"
                            data-library="aceternity"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.aceternity.com/components/tailwindcss-buttons"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Stateful Button</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("aceternity-button")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("aceternity-button")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("aceternity-button")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<AceternityButton>Click Me</AceternityButton>",
                                      "Stateful Button"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
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

                      {matchesSearch("Animated Tooltip") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="aceternity-animated-tooltip"
                            data-library="aceternity"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.aceternity.com/components/animated-tooltip"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Animated Tooltip</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("aceternity-animated-tooltip")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("aceternity-animated-tooltip")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("aceternity-animated-tooltip")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<AnimatedTooltip items={[...]} />",
                                      "Animated Tooltip"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <AnimatedTooltip
                                items={[
                                  {
                                    id: 1,
                                    name: "User 1",
                                    designation: "Designer",
                                    image: "https://github.com/shadcn.png",
                                  },
                                  {
                                    id: 2,
                                    name: "User 2",
                                    designation: "Developer",
                                    image: "https://github.com/shadcn.png",
                                  },
                                ]}
                              />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Moving Border") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="aceternity-moving-border"
                            data-library="aceternity"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.aceternity.com/components/moving-border"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Moving Border</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("aceternity-moving-border")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("aceternity-moving-border")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("aceternity-moving-border")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<MovingBorderButton>Button</MovingBorderButton>",
                                      "Moving Border"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex flex-wrap gap-2 justify-center">
                                <MovingBorderButton
                                  duration={2000}
                                  className="text-sm px-3 py-1"
                                >
                                  Fast
                                </MovingBorderButton>
                                <MovingBorderButton
                                  duration={4000}
                                  className="text-sm px-3 py-1"
                                >
                                  Slow
                                </MovingBorderButton>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Hover Border") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="aceternity-hover-border"
                            data-library="aceternity"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.aceternity.com/components/hover-border-gradient"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Hover Border Gradient</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("aceternity-hover-border")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("aceternity-hover-border")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("aceternity-hover-border")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<HoverBorderGradient>Button</HoverBorderGradient>",
                                      "Hover Border Gradient"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex flex-wrap gap-2 justify-center">
                                <HoverBorderGradient
                                  containerClassName="rounded-md"
                                  className="text-sm px-3 py-1"
                                >
                                  Default
                                </HoverBorderGradient>
                                <HoverBorderGradient
                                  containerClassName="rounded-full"
                                  className="text-sm px-3 py-1"
                                >
                                  Rounded
                                </HoverBorderGradient>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Tabs") &&
                        matchesCategory("navigation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="aceternity-tabs"
                            data-library="aceternity"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.aceternity.com/components/tabs"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Animated Tabs</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                               <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("aceternity-tabs")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("aceternity-tabs")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("aceternity-tabs")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<AceternityTabs tabs={[...]} />",
                                      "Animated Tabs"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <AceternityTabs
                                tabs={[
                                  {
                                    title: "Tab 1",
                                    value: "tab1",
                                    content: "",
                                  },
                                  {
                                    title: "Tab 2",
                                    value: "tab2",
                                    content: "",
                                  },
                                ]}
                                containerClassName="w-full max-w-[200px]"
                                contentClassName="hidden"
                              />
                            </div>
                          </article>
                        )}

                      {matchesSearch(
                        "Floating Dock",
                        "aceternity-floating-dock"
                      ) &&
                        matchesCategory("navigation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="aceternity-floating-dock"
                            data-library="aceternity"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.aceternity.com/components/floating-nav"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Floating Dock</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("aceternity-floating-dock")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("aceternity-floating-dock")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("aceternity-floating-dock")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<FloatingDock items={[...]} />",
                                      "Floating Dock"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex justify-center py-4">
                                <FloatingDock
                                  items={[
                                    {
                                      title: "Home",
                                      icon: <Home className="h-4 w-4" />,
                                      href: "#",
                                    },
                                    {
                                      title: "Search",
                                      icon: <Search className="h-4 w-4" />,
                                      href: "#",
                                    },
                                    {
                                      title: "Settings",
                                      icon: <Settings className="h-4 w-4" />,
                                      href: "#",
                                    },
                                  ]}
                                />
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("3D Card", "aceternity-3d-card") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="aceternity-3d-card"
                            data-library="aceternity"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://ui.aceternity.com/components/3d-card-effect"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>3D Card</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("aceternity-3d-card")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("aceternity-3d-card")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("aceternity-3d-card")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<CardContainer>\n  <CardBody>\n    <CardItem translateZ="50">\n      Content\n    </CardItem>\n  </CardBody>\n</CardContainer>',
                                      "3D Card"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <CardContainer className="w-full">
                                <CardBody className="bg-gray-50 dark:bg-black/[0.8] relative group/card border-black/[0.1] w-auto h-auto rounded-xl p-6">
                                  <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                  >
                                    3D Card
                                  </CardItem>
                                  <CardItem
                                    translateZ="100"
                                    className="text-sm text-neutral-500 dark:text-neutral-300 mt-2"
                                  >
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
                    <div className="flex items-center gap-3 mb-8 pb-4 px-4 py-3 rounded-xl bg-background/50 backdrop-blur-lg border border-white/15 dark:border-white/8">
                      <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-300 bg-clip-text text-transparent">
                        Magic UI
                      </h3>
                      <Link
                        href="https://magicui.design/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <span>공식 사이트</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="component-catalog__grid">
                      {matchesSearch(
                        "Shimmer Button",
                        "magic-shimmer-button"
                      ) &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-shimmer-button"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/shimmer-button"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Shimmer Button</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-shimmer-button")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() => toggleFavorite("magic-shimmer-button")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                  aria-label={
                                    favorites.has("magic-shimmer-button")
                                      ? "즐겨찾기 제거"
                                      : "즐겨찾기 추가"
                                  }
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-shimmer-button")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<MagicButton>Shimmer</MagicButton>",
                                      "Shimmer Button"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex gap-2 justify-center">
                                <MagicButton className="text-sm px-3 py-1">
                                  Small
                                </MagicButton>
                                <MagicButton>Default</MagicButton>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch(
                        "Rainbow Button",
                        "magic-rainbow-button"
                      ) &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-rainbow-button"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/rainbow-button"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Rainbow Button</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-rainbow-button")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-rainbow-button")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<RainbowButton>Rainbow</RainbowButton>",
                                      "Rainbow Button"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex flex-wrap gap-2 justify-center">
                                <RainbowButton className="text-sm px-3 py-1">
                                  Compact
                                </RainbowButton>
                                <RainbowButton>Standard</RainbowButton>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Shiny Button") &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-shiny-button"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/shiny-button"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Shiny Button</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-shiny-button")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-shiny-button")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-shiny-button")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<ShinyButton>Shiny</ShinyButton>",
                                      "Shiny Button"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex flex-wrap gap-2 justify-center">
                                <ShinyButton className="text-sm px-3 py-1">
                                  Mini
                                </ShinyButton>
                                <ShinyButton>Normal</ShinyButton>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Avatar Circles") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-avatar-circles"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/avatar-circles"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Avatar Circles</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-avatar-circles")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-avatar-circles")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-avatar-circles")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<AvatarCircles numPeople={3} />",
                                      "Avatar Circles"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
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

                      {matchesSearch("Animated Gradient Text") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-animated-gradient-text"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/animated-gradient-text"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Animated Gradient Text</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-animated-gradient-text")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-animated-gradient-text")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-animated-gradient-text")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<AnimatedGradientText>Text</AnimatedGradientText>",
                                      "Animated Gradient Text"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex flex-col gap-2 items-center">
                                <AnimatedGradientText className="text-sm">
                                  Gradient Text
                                </AnimatedGradientText>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Sparkles Text") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-sparkles-text"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/sparkles-text"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Sparkles Text</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-sparkles-text")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-sparkles-text")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-sparkles-text")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<SparklesText text=\"Sparkles\" />",
                                      "Sparkles Text"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="flex flex-col gap-2 items-center">
                                <SparklesText className="text-sm">
                                  <Sparkles className="h-4 w-4 inline mr-1" />{" "}
                                  Sparkles
                                </SparklesText>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Meteors", "magic-meteors") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-meteors"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/meteors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Meteors</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-meteors")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-meteors")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-meteors")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<Meteors number={20} />",
                                      "Meteors"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
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

                      {matchesSearch("Particles", "magic-particles") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-particles"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/particles"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Particles</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-particles")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-particles")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-particles")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      '<Particles className="..." />',
                                      "Particles"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="relative h-32 w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-900 to-purple-900">
                                <Particles
                                  className="absolute inset-0"
                                  quantity={50}
                                />
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Ripple", "magic-ripple") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-ripple"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/ripple"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Ripple</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-ripple")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-ripple")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-ripple")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode("<Ripple />", "Ripple")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
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

                      {matchesSearch(
                        "Pulsating Button",
                        "magic-pulsating-button"
                      ) &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-pulsating-button"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/pulsating-button"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Pulsating Button</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-pulsating-button")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-pulsating-button")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-pulsating-button")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<PulsatingButton>Click Me</PulsatingButton>",
                                      "Pulsating Button"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
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

                      {matchesSearch("Magic Card", "magic-card") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-card"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/magic-card"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Magic Card</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-card")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-card")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-card")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<MagicCard>\n  <div>Content</div>\n</MagicCard>",
                                      "Magic Card"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
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

                      {matchesSearch("Marquee") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-marquee"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/marquee"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Marquee</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-marquee")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-marquee")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-marquee")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<Marquee>...</Marquee>",
                                      "Marquee"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="space-y-2">
                                <Marquee className="max-w-[200px]" pauseOnHover>
                                  <span className="text-sm mx-4">
                                    Pause on Hover
                                  </span>
                                  <span className="text-sm mx-4">
                                    Scrolling Text
                                  </span>
                                </Marquee>
                                <Marquee className="max-w-[200px]" reverse>
                                  <span className="text-sm mx-4">Reverse</span>
                                  <span className="text-sm mx-4">
                                    Direction
                                  </span>
                                </Marquee>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Number Ticker") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-number-ticker"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/number-ticker"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Number Ticker</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-number-ticker")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-number-ticker")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-number-ticker")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<NumberTicker value={100} />",
                                      "Number Ticker"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
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

                      {matchesSearch("Blur Fade") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-blur-fade"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/blur-fade"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Blur Fade</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-blur-fade")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-blur-fade")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-blur-fade")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<BlurFade>Content</BlurFade>",
                                      "Blur Fade"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
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

                      {matchesSearch("Confetti") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-confetti"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/confetti"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Confetti Button</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-confetti")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-confetti")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-confetti")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<Confetti />",
                                      "Confetti"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <Suspense fallback={<ComponentLoader />}>
                                <ConfettiButton className="text-sm px-3 py-1">
                                  <PartyPopper className="h-4 w-4 inline mr-1" />{" "}
                                  Celebrate
                                </ConfettiButton>
                              </Suspense>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Cool Mode") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-cool-mode"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/cool-mode"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Cool Mode</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-cool-mode")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-cool-mode")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-cool-mode")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<CoolMode><button>Click</button></CoolMode>",
                                      "Cool Mode"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <Suspense fallback={<ComponentLoader />}>
                                <CoolMode>
                                  <ShadcnButton size="sm">
                                    <Sparkles className="h-4 w-4 inline mr-1" />{" "}
                                    Click Me
                                  </ShadcnButton>
                                </CoolMode>
                              </Suspense>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Globe") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-globe"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/globe"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Globe</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-globe")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-globe")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-globe")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<Globe />",
                                      "Globe"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
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

                      {matchesSearch("Icon Cloud") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-icon-cloud"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/icon-cloud"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Icon Cloud</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-icon-cloud")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-icon-cloud")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-icon-cloud")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<IconCloud />",
                                      "Icon Cloud"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
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

                      {matchesSearch("Orbiting Circles") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-orbiting-circles"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/orbiting-circles"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Orbiting Circles</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-orbiting-circles")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-orbiting-circles")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-orbiting-circles")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<OrbitingCircles>...</OrbitingCircles>",
                                      "Orbiting Circles"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                                <Suspense fallback={<ComponentLoader />}>
                                  <OrbitingCircles
                                    className="h-8 w-8 border-none bg-transparent"
                                    duration={20}
                                    delay={0}
                                    radius={50}
                                  >
                                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                                  </OrbitingCircles>
                                  <OrbitingCircles
                                    className="h-8 w-8 border-none bg-transparent"
                                    duration={20}
                                    delay={10}
                                    radius={50}
                                  >
                                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                                  </OrbitingCircles>
                                </Suspense>
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Border Beam") &&
                        matchesCategory("animation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="magic-border-beam"
                            data-library="magicui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://magicui.design/docs/components/border-beam"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Border Beam</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => openDetailModal("magic-border-beam")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="상세 보기"
                                >
                                  <Search className="h-4 w-4" />
                                </button>
                                <button
                                  onClick={() =>
                                    toggleFavorite("magic-border-beam")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("magic-border-beam")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                                <button
                                  onClick={() =>
                                    copyCode(
                                      "<BorderBeam />",
                                      "Border Beam"
                                    )
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="코드 복사"
                                >
                                  <Copy className="h-4 w-4" />
                                </button>
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
                    <div className="flex items-center gap-3 mb-8 pb-4 px-4 py-3 rounded-xl bg-background/50 backdrop-blur-lg border border-white/15 dark:border-white/8">
                      <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 to-orange-400 dark:from-orange-400 dark:to-orange-300 bg-clip-text text-transparent">
                        Origin UI
                      </h3>
                      <Link
                        href="https://originui.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <span>공식 사이트</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="component-catalog__grid">
                      {matchesSearch("OTP Button", "origin-button") &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-button"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/button"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>OTP Button</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-button")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-button")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginButtonExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Input", "origin-input") &&
                        matchesCategory("input") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-input"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/input"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Simple Input</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => toggleFavorite("origin-input")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-input")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <div className="w-full max-w-[280px]">
                                <OriginInput
                                  placeholder="Enter email..."
                                  type="email"
                                />
                              </div>
                            </div>
                          </article>
                        )}

                      {matchesSearch("Checkbox", "origin-checkbox") &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-checkbox"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/checkbox"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Checkbox</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-checkbox")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-checkbox")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginCheckboxExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Radio", "origin-radio") &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-radio"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/radio"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Radio</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => toggleFavorite("origin-radio")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-radio")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginRadioExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Select", "origin-select") &&
                        matchesCategory("input") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-select"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/select"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Select</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-select")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-select")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginSelectExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Slider", "origin-slider") &&
                        matchesCategory("input") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-slider"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/slider"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Slider</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-slider")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-slider")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginSliderExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Switch", "origin-switch") &&
                        matchesCategory("button") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-switch"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/switch"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Switch</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-switch")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-switch")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginSwitchExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Accordion", "origin-accordion") &&
                        matchesCategory("layout") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-accordion"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/accordion"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Accordion</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-accordion")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-accordion")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginAccordionExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Avatar", "origin-avatar") &&
                        matchesCategory("layout") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-avatar"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/avatar"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Avatar</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-avatar")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-avatar")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginAvatarExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Badge", "origin-badge") &&
                        matchesCategory("layout") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-badge"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/badge"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Badge</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => toggleFavorite("origin-badge")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-badge")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginBadgeExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Dialog", "origin-dialog") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-dialog"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/dialog"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Dialog</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-dialog")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-dialog")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginDialogExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Dropdown", "origin-dropdown") &&
                        matchesCategory("navigation") && (
                          <article
                            className="component-card animate-fade-in-up"
                            data-component="origin-dropdown"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/dropdown"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Dropdown</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-dropdown")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-dropdown")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginDropdownExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Popover", "origin-popover") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up col-span-2"
                            data-component="origin-popover"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/popover"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Popover</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-popover")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-popover")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginPopoverExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Tooltip", "origin-tooltip") &&
                        matchesCategory("feedback") && (
                          <article
                            className="component-card animate-fade-in-up col-span-2"
                            data-component="origin-tooltip"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/tooltip"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Tooltip</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-tooltip")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-tooltip")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginTooltipExample />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Tabs", "origin-tabs") &&
                        matchesCategory("navigation") && (
                          <article
                            className="component-card animate-fade-in-up col-span-2"
                            data-component="origin-tabs"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/tabs"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Tabs</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() => toggleFavorite("origin-tabs")}
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-tabs")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="component-card__body">
                              <OriginTabsExample currentPage={1} totalPages={5} />
                            </div>
                          </article>
                        )}

                      {matchesSearch("Textarea", "origin-textarea") &&
                        matchesCategory("input") && (
                          <article
                            className="component-card animate-fade-in-up col-span-2"
                            data-component="origin-textarea"
                            data-library="originui"
                          >
                            <div className="component-card__header">
                              <div className="component-card__title">
                                <Link
                                  href="https://coss.com/origin/textarea"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary hover:underline transition-colors group"
                                >
                                  <span>Textarea</span>
                                  <svg
                                    className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              <div className="flex gap-1">
                                <button
                                  onClick={() =>
                                    toggleFavorite("origin-textarea")
                                  }
                                  className="p-1 hover:bg-muted rounded transition-colors"
                                  title="즐겨찾기"
                                >
                                  <Star
                                    className={`h-4 w-4 ${
                                      favorites.has("origin-textarea")
                                        ? "fill-yellow-400 text-yellow-400"
                                        : ""
                                    }`}
                                  />
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
              <div className="overflow-x-auto rounded-2xl bg-background/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                <table className="w-full border-collapse">
                  <thead className="bg-muted/50 backdrop-blur-sm">
                    <tr className="transition-colors hover:bg-muted/30">
                      <th className="border-b-2 border-r-2 border-gray-200 dark:border-gray-700 p-4 font-bold text-center">
                        Component
                      </th>
                      <th className="border-b-2 border-r-2 border-gray-200 dark:border-gray-700 p-4 font-bold text-center">
                        shadcn
                      </th>
                      <th className="border-b-2 border-r-2 border-gray-200 dark:border-gray-700 p-4 font-bold text-center">
                        Aceternity
                      </th>
                      <th className="border-b-2 border-r-2 border-gray-200 dark:border-gray-700 p-4 font-bold text-center">
                        Magic UI
                      </th>
                      <th className="border-b-2 border-gray-200 dark:border-gray-700 p-4 font-bold text-center">
                        Origin UI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Button
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <ShadcnButton>Click</ShadcnButton>
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <AceternityButton>Click</AceternityButton>
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--flex">
                          <MagicButton className="shadow-sm text-xs px-2">
                            Shimmer
                          </MagicButton>
                          <RainbowButton className="text-xs px-2">
                            Rainbow
                          </RainbowButton>
                          <ShinyButton className="text-xs px-2">
                            Shiny
                          </ShinyButton>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Input
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Input
                          placeholder="Type here..."
                          className="max-w-[200px] mx-auto"
                        />
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <OriginInput
                          placeholder="Email..."
                          type="email"
                          className="max-w-[200px] mx-auto"
                        />
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Select
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Select>
                          <SelectTrigger className="w-[180px] mx-auto">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="option1">Option 1</SelectItem>
                            <SelectItem value="option2">Option 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Checkbox
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <Checkbox id="shadcn-check" />
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Badge
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <Badge>New</Badge>
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Textarea
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Textarea
                          placeholder="Type here..."
                          className="max-w-[200px] mx-auto"
                        />
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Radio
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <RadioGroup defaultValue="option1">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="option1" id="r1" />
                            </div>
                          </RadioGroup>
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Switch
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <Switch />
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Slider
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Slider
                          defaultValue={[50]}
                          max={100}
                          step={1}
                          className="w-[160px] mx-auto"
                        />
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Avatar
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <AvatarCircles numPeople={3} avatarUrls={[]} />
                        </div>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Alert
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Alert className="max-w-[200px] mx-auto">
                          <AlertDescription>Alert message</AlertDescription>
                        </Alert>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Progress
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Progress value={60} className="w-[160px] mx-auto" />
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Separator
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--flex">
                          <Separator className="w-[160px]" />
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Accordion
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Accordion
                          type="single"
                          collapsible
                          className="w-[200px] mx-auto"
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Item 1</AccordionTrigger>
                            <AccordionContent>Content</AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Table
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
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
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Dialog
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <ShadcnButton variant="outline">Open</ShadcnButton>
                          </DialogTrigger>
                          <DialogContent>Dialog Content</DialogContent>
                        </Dialog>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Modal <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Tooltip
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <ShadcnButton variant="outline">
                                  Hover
                                </ShadcnButton>
                              </TooltipTrigger>
                              <TooltipContent>Tooltip</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <AnimatedTooltip
                            items={[
                              {
                                id: 1,
                                name: "Hover Me",
                                designation: "Animated",
                                image: "https://github.com/shadcn.png",
                              },
                            ]}
                          />
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Tabs
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-sm">
                          Current Tab <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <AceternityTabs
                          tabs={[
                            {
                              title: "Tab 1",
                              value: "tab1",
                              content: "Content 1",
                            },
                            {
                              title: "Tab 2",
                              value: "tab2",
                              content: "Content 2",
                            },
                          ]}
                          containerClassName="w-[200px] mx-auto"
                          contentClassName="hidden"
                        />
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Dropdown
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <ShadcnButton variant="outline">Menu</ShadcnButton>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Item 1</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Animated Text
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--flex">
                          <AnimatedGradientText>Gradient</AnimatedGradientText>
                          <SparklesText>
                            <Sparkles className="h-4 w-4 inline mr-1" />{" "}
                            Sparkles
                          </SparklesText>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Bento Grid
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Layout <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Layout <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Background Effects
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Beams <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Particles/Meteors <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Moving Border
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <MovingBorderButton
                          duration={3000}
                          className="text-sm px-3 py-1"
                        >
                          Border
                        </MovingBorderButton>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Border Beam <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Hover Border Gradient
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="component-showcase component-showcase--inline">
                          <HoverBorderGradient
                            containerClassName="rounded-md"
                            className="text-sm px-3 py-1"
                          >
                            Hover
                          </HoverBorderGradient>
                        </div>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Ripple Effect
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="relative w-32 h-32 flex items-center justify-center mx-auto">
                          <Ripple />
                        </div>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Marquee
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Marquee className="max-w-[200px] mx-auto">
                          <span className="text-sm">Scrolling Text</span>
                        </Marquee>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Number Animation
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <NumberTicker value={100} />
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Timeline
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Animated <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Animated List
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Animated <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Floating Dock
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Dock <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Dock <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Floating Navbar
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Floating Navbar <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Sidebar
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Sidebar <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Text Reveal
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Text Reveal <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Animated Beam
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">
                          Animated Beam <Check className="h-3 w-3 inline" />
                        </span>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Blur Fade
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <BlurFade delay={0.1} inView>
                          <div className="text-sm">Fade In</div>
                        </BlurFade>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Confetti
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Suspense fallback={<ComponentLoader />}>
                          <ConfettiButton className="text-xs px-3 py-1">
                            <PartyPopper className="h-3 w-3 inline mr-1" />{" "}
                            Click
                          </ConfettiButton>
                        </Suspense>
                      </td>
                      <td className="border-b border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Cool Mode
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <Suspense fallback={<ComponentLoader />}>
                          <CoolMode>
                            <ShadcnButton size="sm" className="text-xs">
                              <Sparkles className="h-3 w-3 inline mr-1" /> Click
                            </ShadcnButton>
                          </CoolMode>
                        </Suspense>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Globe
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="w-32 h-32 relative mx-auto">
                          <Suspense fallback={<ComponentLoader />}>
                            <Globe />
                          </Suspense>
                        </div>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Icon Cloud
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="w-32 h-32 mx-auto">
                          <Suspense fallback={<ComponentLoader />}>
                            <IconCloud width={128} height={128} />
                          </Suspense>
                        </div>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-muted/30">
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 font-semibold text-center">
                        Orbiting Circles
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                      <td className="border-b border-r-2 border-gray-200 dark:border-gray-700 p-4 text-center">
                        <div className="relative w-32 h-32 flex items-center justify-center mx-auto">
                          <Suspense fallback={<ComponentLoader />}>
                            <OrbitingCircles
                              className="h-8 w-8 border-none bg-transparent"
                              duration={20}
                              delay={0}
                              radius={40}
                            >
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                            </OrbitingCircles>
                            <OrbitingCircles
                              className="h-8 w-8 border-none bg-transparent"
                              duration={20}
                              delay={10}
                              radius={40}
                            >
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                            </OrbitingCircles>
                          </Suspense>
                        </div>
                      </td>
                      <td className="border-b  border-gray-200 dark:border-gray-700 p-4 text-center">
                        <span className="text-muted-foreground text-sm">-</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>


            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* shadcn/ui Card */}
                <Card className="bg-blue-50/60 dark:bg-blue-950/30 backdrop-blur-lg border border-blue-200/40 dark:border-blue-800/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      shadcn/ui
                    </CardTitle>
                    <CardDescription>애플리케이션 구축을 위한 재사용 가능한 컴포넌트입니다.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">20+</strong> Components | <strong className="text-foreground">6</strong> Categories
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Button</Badge>
                      <Badge variant="secondary">Input</Badge>
                      <Badge variant="secondary">Display</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <ShadcnButton onClick={() => handleTabChange("gallery", "shadcn")} className="w-full">Gallery에서 보기</ShadcnButton>
                  </CardFooter>
                </Card>

                {/* Aceternity UI Card */}
                <Card className="bg-purple-50/60 dark:bg-purple-950/30 backdrop-blur-lg border border-purple-200/40 dark:border-purple-800/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      Aceternity UI
                    </CardTitle>
                    <CardDescription>시선을 사로잡는 복사-붙여넣기 애니메이션 컴포넌트입니다.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">10+</strong> Components | <strong className="text-foreground">4</strong> Categories
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Animation</Badge>
                      <Badge variant="secondary">Button</Badge>
                      <Badge variant="secondary">Card</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <ShadcnButton onClick={() => handleTabChange("gallery", "aceternity")} className="w-full">Gallery에서 보기</ShadcnButton>
                  </CardFooter>
                </Card>

                {/* Magic UI Card */}
                <Card className="bg-pink-50/60 dark:bg-pink-950/30 backdrop-blur-lg border border-pink-200/40 dark:border-pink-800/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                      Magic UI
                    </CardTitle>
                    <CardDescription>마법 같은 효과를 더해주는 애니메이션 컴포넌트 모음입니다.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">15+</strong> Components | <strong className="text-foreground">2</strong> Categories
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Animation</Badge>
                      <Badge variant="secondary">Button</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <ShadcnButton onClick={() => handleTabChange("gallery", "magicui")} className="w-full">Gallery에서 보기</ShadcnButton>
                  </CardFooter>
                </Card>

                {/* Origin UI Card */}
                <Card className="bg-orange-50/60 dark:bg-orange-950/30 backdrop-blur-lg border border-orange-200/40 dark:border-orange-800/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      Origin UI
                    </CardTitle>
                    <CardDescription>실용적이고 직관적인 기본 UI 컴포넌트 라이브러리입니다.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">12+</strong> Components | <strong className="text-foreground">4</strong> Categories
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Form</Badge>
                      <Badge variant="secondary">Overlay</Badge>
                      <Badge variant="secondary">Layout</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <ShadcnButton onClick={() => handleTabChange("gallery", "originui")} className="w-full">Gallery에서 보기</ShadcnButton>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* By Component Tab */}
            <TabsContent value="by-component">
              <div className="space-y-6 mt-8">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {componentGroups.map((group) => {
                    const totalVariants = Object.values(group.variants).filter(
                      (v) => v.count > 0
                    ).length;

                    return (
                      <AccordionItem
                        key={group.name}
                        value={group.name}
                        className="bg-background/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-background/70 transition-all duration-300 hover:no-underline">
                          <div className="flex items-center gap-3 w-full">
                            <span className="text-lg font-bold">
                              {group.name}
                            </span>
                            <Badge variant="secondary" className="ml-auto mr-2">
                              {totalVariants}{" "}
                              {totalVariants === 1 ? "library" : "libraries"}
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 pt-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                            {/* shadcn/ui */}
                            <Card className="bg-blue-50/60 dark:bg-blue-950/30 backdrop-blur-lg border border-blue-200/40 dark:border-blue-800/30">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                  <span className="text-blue-600 dark:text-blue-400">
                                    <Palette className="h-4 w-4" />
                                  </span>
                                  shadcn/ui
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="min-h-[100px] flex items-center justify-center">
                                {group.variants.shadcn.component || (
                                  <span className="text-muted-foreground text-sm">
                                    -
                                  </span>
                                )}
                              </CardContent>
                            </Card>

                            {/* Aceternity */}
                            <Card className="bg-purple-50/60 dark:bg-purple-950/30 backdrop-blur-lg border border-purple-200/40 dark:border-purple-800/30">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                  <span className="text-purple-600 dark:text-purple-400">
                                    <Zap className="h-4 w-4" />
                                  </span>
                                  Aceternity
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="min-h-[100px] flex items-center justify-center">
                                {group.variants.aceternity.component || (
                                  <span className="text-muted-foreground text-sm">
                                    -
                                  </span>
                                )}
                              </CardContent>
                            </Card>

                            {/* Magic UI */}
                            <Card className="bg-pink-50/60 dark:bg-pink-950/30 backdrop-blur-lg border border-pink-200/40 dark:border-pink-800/30">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                  <span className="text-pink-600 dark:text-pink-400">
                                    <Sparkles className="h-4 w-4" />
                                  </span>
                                  Magic UI
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="min-h-[100px] flex items-center justify-center">
                                {group.variants.magicui.component || (
                                  <span className="text-muted-foreground text-sm">
                                    -
                                  </span>
                                )}
                              </CardContent>
                            </Card>

                            {/* Origin UI */}
                            <Card className="bg-orange-50/60 dark:bg-orange-950/30 backdrop-blur-lg border border-orange-200/40 dark:border-orange-800/30">
                              <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                  <span className="text-orange-600 dark:text-orange-400">
                                    <Target className="h-4 w-4" />
                                  </span>
                                  Origin UI
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="min-h-[100px] flex items-center justify-center">
                                {group.variants.originui.component || (
                                  <span className="text-muted-foreground text-sm">
                                    -
                                  </span>
                                )}
                              </CardContent>
                            </Card>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </TabsContent>

          </Tabs>
        </section>

        {/* 컴포넌트 상세 모달 - 2025 Glassmorphism UI */}
        <Dialog
          open={isDetailModalOpen}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              closeDetailModal();
            }
          }}
        >
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden p-0 gap-0 bg-gradient-to-br from-background/95 via-background/98 to-muted/95 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-700/50 shadow-2xl">
            {/* 헤더 - 그라데이션 글래스 효과 */}
            <div className="px-8 pt-8 pb-6 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/50 relative">
              {/* 백그라운드 글로우 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent drop-shadow-sm">
                      {selectedComponent?.name || "Component"}
                    </h2>
                    <div className="flex gap-2">
                      <Badge
                        variant="outline"
                        className="px-3 py-1 bg-background/90 backdrop-blur-sm border-gray-200 dark:border-gray-700/50 shadow-sm"
                      >
                        {selectedComponent?.library || "Library"}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 bg-secondary/90 backdrop-blur-sm shadow-sm"
                      >
                        {selectedComponent?.category || "Category"}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed drop-shadow-sm" dangerouslySetInnerHTML={{ __html: selectedComponent?.description || "컴포넌트 설명이 없습니다." }} />
                </div>
              </div>
            </div>

            {/* 탭 기반 컨텐츠 */}
            <div className="overflow-y-auto max-h-[calc(85vh-180px)] bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm">
              <Tabs defaultValue="preview" className="w-full">
                <div className="px-8 pt-4 pb-2 sticky top-0 bg-background/95 backdrop-blur-xl z-10 border-b border-gray-200 dark:border-gray-700/50 shadow-sm">
                  <TabsList className="grid w-full grid-cols-4 h-11 bg-muted/50 backdrop-blur-sm">
                    <TabsTrigger
                      value="preview"
                      className="text-sm font-semibold gap-2 data-[state=active]:bg-background/90 data-[state=active]:backdrop-blur-sm data-[state=active]:shadow-sm"
                    >
                      <Star className="w-4 h-4" />
                      미리보기
                    </TabsTrigger>
                    <TabsTrigger
                      value="code"
                      className="text-sm font-semibold gap-2 data-[state=active]:bg-background/90 data-[state=active]:backdrop-blur-sm data-[state=active]:shadow-sm"
                    >
                      <Code2 className="w-4 h-4" />
                      코드
                    </TabsTrigger>
                    <TabsTrigger
                      value="install"
                      className="text-sm font-semibold gap-2 data-[state=active]:bg-background/90 data-[state=active]:backdrop-blur-sm data-[state=active]:shadow-sm"
                    >
                      <Package className="w-4 h-4" />
                      설치
                    </TabsTrigger>
                    <TabsTrigger
                      value="info"
                      className="text-sm font-semibold gap-2 data-[state=active]:bg-background/90 data-[state=active]:backdrop-blur-sm data-[state=active]:shadow-sm"
                    >
                      <Info className="w-4 h-4" />
                      정보
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* 미리보기 탭 */}
                <TabsContent value="preview" className="px-8 py-6 m-0">
                  <div className="relative bg-gradient-to-br from-muted/30 to-muted/20 backdrop-blur-sm p-8 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700/50 shadow-inner min-h-[200px] flex items-center justify-center">
                    {selectedComponent?.preview}
                  </div>
                </TabsContent>

                {/* 코드 탭 */}
                <TabsContent value="code" className="px-8 py-6 space-y-4 m-0">
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-foreground drop-shadow-sm">
                      사용 예제
                    </h3>
                    <div className="relative group">
                      {/* Hover glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                      <div className="relative bg-gradient-to-br from-muted/90 to-muted/70 backdrop-blur-md rounded-xl border-2 border-gray-200 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        {/* 코드 헤더 */}
                        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-gray-200 dark:border-gray-700/30">
                          <span className="text-xs font-semibold text-muted-foreground">
                            TypeScript
                          </span>
                          <ShadcnButton
                            size="sm"
                            variant="ghost"
                            onClick={() =>
                              copyCode(
                                selectedComponent?.code || "",
                                `${selectedComponent?.name || "Component"} 코드`
                              )
                            }
                            className="h-6 px-2 gap-1.5 hover:bg-background/80"
                          >
                            <Copy className="w-3 h-3" />
                            <span className="text-xs">복사</span>
                          </ShadcnButton>
                        </div>
                        {/* 코드 내용 */}
                        <pre className="p-4 text-[13px] leading-relaxed overflow-x-auto font-mono">
                          <code className="text-foreground drop-shadow-sm">{selectedComponent?.code || "// 코드가 없습니다."}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* 미리보기 */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-base font-semibold text-foreground drop-shadow-sm">
                      미리보기
                    </h3>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                      <div className="relative bg-gradient-to-br from-background/90 to-muted/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700/50 shadow-lg">
                        <div className="flex flex-wrap gap-3 justify-center items-center min-h-[120px]">
                          {(() => {
                            if (selectedComponentId) {
                              const PreviewComponent = componentPreviews[selectedComponentId];
                              if (PreviewComponent) {
                                return <PreviewComponent />;
                              }
                            }
                            return <p className="text-sm text-muted-foreground">미리보기를 사용할 수 없습니다.</p>;
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 설치 탭 */}
                <TabsContent
                  value="install"
                  className="px-8 py-6 space-y-6 m-0"
                >
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-foreground drop-shadow-sm">
                      설치 명령어
                    </h3>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                      <div className="relative bg-gradient-to-br from-muted/90 to-muted/70 backdrop-blur-md rounded-xl border-2 border-gray-200 dark:border-gray-700/50 shadow-lg overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-gray-200 dark:border-gray-700/30">
                          <span className="text-xs font-semibold text-muted-foreground">
                            Shell
                          </span>
                          <ShadcnButton
                            size="sm"
                            variant="ghost"
                            onClick={() =>
                              copyCode(
                                selectedComponent?.installCommand || "",
                                "설치 명령어"
                              )
                            }
                            className="h-6 px-2 gap-1.5 hover:bg-background/80"
                          >
                            <Copy className="w-3 h-3" />
                            <span className="text-xs">복사</span>
                          </ShadcnButton>
                        </div>
                        <div className="p-4">
                          <code className="text-sm font-mono text-foreground drop-shadow-sm">
                            {selectedComponent?.installCommand || "설치 명령어가 없습니다."}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6 bg-border/50" />

                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-foreground drop-shadow-sm">
                      필수 의존성
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm bg-background/80 backdrop-blur-sm border-gray-200 dark:border-gray-700/50 shadow-sm"
                      >
                        @radix-ui/react-slot
                      </Badge>
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm bg-background/80 backdrop-blur-sm border-gray-200 dark:border-gray-700/50 shadow-sm"
                      >
                        class-variance-authority
                      </Badge>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500" />
                    <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 shadow-lg">
                      <div className="flex gap-3">
                        <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5 drop-shadow-sm" />
                        <div className="flex-1">
                          <p className="text-sm text-foreground drop-shadow-sm leading-relaxed">
                            <strong className="text-foreground font-semibold">
                              Tip:
                            </strong>{" "}
                            컴포넌트를 설치하면 필요한 의존성이 자동으로
                            추가됩니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* 정보 탭 */}
                <TabsContent value="info" className="px-8 py-6 space-y-6 m-0">
                  <div className="space-y-4">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                      <div className="relative bg-gradient-to-br from-muted/80 to-muted/60 backdrop-blur-md p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700/50 shadow-lg">
                        <h3 className="text-base font-semibold mb-3 text-foreground drop-shadow-sm">
                          컴포넌트 정보
                        </h3>
                        <dl className="space-y-3">
                          <div className="flex items-start gap-3">
                            <dt className="text-sm font-medium text-muted-foreground min-w-[100px]">
                              라이브러리:
                            </dt>
                            <dd className="text-sm text-foreground font-medium drop-shadow-sm">
                              {selectedComponent?.library || "Unknown"}
                            </dd>
                          </div>
                          <Separator className="bg-border/50" />
                          <div className="flex items-start gap-3">
                            <dt className="text-sm font-medium text-muted-foreground min-w-[100px]">
                              카테고리:
                            </dt>
                            <dd className="text-sm text-foreground font-medium drop-shadow-sm">
                              {selectedComponent?.category || "Unknown"}
                            </dd>
                          </div>
                          <Separator className="bg-border/50" />
                          <div className="flex items-start gap-3">
                            <dt className="text-sm font-medium text-muted-foreground min-w-[100px]">
                              접근성:
                            </dt>
                            <dd className="text-sm text-foreground font-medium drop-shadow-sm">
                              ARIA 완벽 지원
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                      <div className="relative bg-gradient-to-br from-muted/80 to-muted/60 backdrop-blur-md p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700/50 shadow-lg">
                        <h3 className="text-base font-semibold mb-3 text-foreground drop-shadow-sm">
                          외부 링크
                        </h3>
                        <div className="space-y-2">
                          <Link
                            href={selectedComponent?.docs || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link p-2 rounded-lg hover:bg-background/50 backdrop-blur-sm"
                          >
                            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            <span className="font-medium drop-shadow-sm">
                              공식 문서 보기
                            </span>
                          </Link>
                          <Link
                            href="https://github.com/shadcn-ui/ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link p-2 rounded-lg hover:bg-background/50 backdrop-blur-sm"
                          >
                            <Github className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            <span className="font-medium drop-shadow-sm">
                              GitHub 저장소
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500" />
                      <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 shadow-lg">
                        <div className="flex gap-3">
                          <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5 drop-shadow-sm" />
                          <div className="flex-1">
                            <p className="text-sm text-foreground drop-shadow-sm leading-relaxed">
                              <strong className="text-foreground font-semibold">
                                추천:
                              </strong>{" "}
                              이 컴포넌트는 프로덕션 환경에서 검증되었으며,
                              접근성 표준을 완벽하게 준수합니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </DialogContent>
        </Dialog>

        {/* Toast Notifications */}
        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </main>
    </>
  );
}
