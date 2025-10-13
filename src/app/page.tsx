"use client";

import { Button as ShadcnButton } from "@/components/ui/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import { Input } from "@/components/ui/shadcn/input";
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

// UI 라이브러리 컴포넌트
import { Button as AceternityButton } from "@/components/ui/aceternity/stateful-button";
import { Button as MovingBorderButton } from "@/components/ui/aceternity/moving-border";
import { HoverBorderGradient } from "@/components/ui/aceternity/hover-border-gradient";
import { ShimmerButton as MagicButton } from "@/components/ui/magicui/shimmer-button";
import { RainbowButton } from "@/components/ui/magicui/rainbow-button";
import { ShinyButton } from "@/components/ui/magicui/shiny-button";
import { AvatarCircles } from "@/components/ui/magicui/avatar-circles";
import { AnimatedGradientText } from "@/components/ui/magicui/animated-gradient-text";
import { SparklesText } from "@/components/ui/magicui/sparkles-text";
import { Ripple } from "@/components/ui/magicui/ripple";
import { Marquee } from "@/components/ui/magicui/marquee";
import { NumberTicker } from "@/components/ui/magicui/number-ticker";
import { Tabs as AceternityTabs } from "@/components/ui/aceternity/tabs";
import { AnimatedTooltip } from "@/components/ui/aceternity/animated-tooltip";
import { BlurFade } from "@/components/ui/magicui/blur-fade";
import { OrbitingCircles } from "@/components/ui/magicui/orbiting-circles";
import { ConfettiButton } from "@/components/ui/magicui/confetti";
import { CoolMode } from "@/components/ui/magicui/cool-mode";
import { Globe } from "@/components/ui/magicui/globe";
import { IconCloud } from "@/components/ui/magicui/icon-cloud";
import { BentoGrid, BentoGridItem } from "@/components/ui/aceternity/bento-grid";
import { BentoGrid as MagicBentoGrid, BentoCard } from "@/components/ui/magicui/bento-grid";
import { BorderBeam } from "@/components/ui/magicui/border-beam";

export default function UIMatrix() {
  return (
    <main className="component-catalog container mx-auto p-8 space-y-12">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">UI 라이브러리 컴포넌트 비교</h1>
      </header>

      {/* Buttons: Gallery / Compare */}
      <section className="component-catalog__section">
        <Tabs defaultValue="gallery" className="component-catalog__tabs">
          <TabsList>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
          </TabsList>
          <TabsContent value="gallery">
            <div className="space-y-12">
              {/* shadcn/ui Section */}
              <section>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b">shadcn/ui</h3>
                <div className="component-catalog__grid">
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Button</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2 justify-center">
                        <ShadcnButton>Default</ShadcnButton>
                        <ShadcnButton variant="outline">Outline</ShadcnButton>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Input</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-2 w-full max-w-[200px]">
                        <Input placeholder="Default" />
                        <Input placeholder="Disabled" disabled />
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Select</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Checkbox</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Radio</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Switch</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Slider</div>
                    </div>
                    <div className="component-card__body">
                      <div className="space-y-3 w-full max-w-[200px]">
                        <Slider defaultValue={[33]} max={100} step={1} />
                        <Slider defaultValue={[66]} max={100} step={1} />
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Avatar</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Badge</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Progress</div>
                    </div>
                    <div className="component-card__body">
                      <div className="space-y-2 w-full max-w-[200px]">
                        <Progress value={33} />
                        <Progress value={66} />
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Dropdown</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Tooltip</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Accordion</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Alert</div>
                    </div>
                    <div className="component-card__body">
                      <Alert>
                        <AlertDescription>This is an alert message</AlertDescription>
                      </Alert>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Card</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Dialog</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Separator</div>
                    </div>
                    <div className="component-card__body">
                      <div className="space-y-2">
                        <div className="text-sm">Above</div>
                        <Separator />
                        <div className="text-sm">Below</div>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Table</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Textarea</div>
                    </div>
                    <div className="component-card__body">
                      <Textarea placeholder="Type your message here..." />
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Tabs (shadcn)</div>
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
                </div>
              </section>

              {/* Aceternity UI Section */}
              <section>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b">Aceternity UI</h3>
                <div className="component-catalog__grid">
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Stateful Button</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2 justify-center">
                        <AceternityButton>Default</AceternityButton>
                        <AceternityButton>Loading</AceternityButton>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Animated Tooltip</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Moving Border</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Hover Border Gradient</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Animated Tabs</div>
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

                  {/* <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Bento Grid</div>
                    </div>
                    <div className="component-card__body">
                      <BentoGrid className="max-w-full">
                        <BentoGridItem
                          title="Item 1"
                          description="Grid item"
                          className="bg-muted"
                        />
                        <BentoGridItem
                          title="Item 2"
                          description="Grid item"
                          className="bg-muted"
                        />
                      </BentoGrid>
                    </div>
                  </article> */}
                </div>
              </section>

              {/* Magic UI Section */}
              <section>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b">Magic UI</h3>
                <div className="component-catalog__grid">
                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Shimmer Button</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2 justify-center">
                        <MagicButton className="text-sm px-3 py-1">Small</MagicButton>
                        <MagicButton>Default</MagicButton>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Rainbow Button</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-wrap gap-2 justify-center">
                        <RainbowButton className="text-sm px-3 py-1">Compact</RainbowButton>
                        <RainbowButton>Standard</RainbowButton>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Shiny Button</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-wrap gap-2 justify-center">
                        <ShinyButton className="text-sm px-3 py-1">Mini</ShinyButton>
                        <ShinyButton>Normal</ShinyButton>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Avatar Circles</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-3 items-center">
                        <AvatarCircles numPeople={3} avatarUrls={[]} />
                        <AvatarCircles numPeople={5} avatarUrls={[]} />
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Animated Text</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-2 items-center">
                        <AnimatedGradientText className="text-sm">Gradient Text</AnimatedGradientText>
                        <SparklesText className="text-sm">✨ Sparkles</SparklesText>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Ripple Effect</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-2">
                        <div className="relative w-20 h-20 flex items-center justify-center bg-muted rounded-lg">
                          <Ripple />
                        </div>
                        <div className="relative w-20 h-20 flex items-center justify-center bg-muted rounded-full">
                          <Ripple />
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Marquee</div>
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

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Number Animation</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex gap-4 text-2xl font-bold">
                        <NumberTicker value={100} />
                        <NumberTicker value={250} />
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Blur Fade</div>
                    </div>
                    <div className="component-card__body">
                      <div className="flex flex-col gap-2 items-center">
                        <BlurFade delay={0} inView>
                          <div className="text-sm">First</div>
                        </BlurFade>
                        <BlurFade delay={0.2} inView>
                          <div className="text-sm">Second</div>
                        </BlurFade>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Confetti Button</div>
                    </div>
                    <div className="component-card__body">
                      <ConfettiButton className="text-sm px-3 py-1">
                        🎉 Celebrate
                      </ConfettiButton>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Cool Mode</div>
                    </div>
                    <div className="component-card__body">
                      <CoolMode>
                        <ShadcnButton size="sm">✨ Click Me</ShadcnButton>
                      </CoolMode>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Globe</div>
                    </div>
                    <div className="component-card__body">
                      <div className="w-40 h-40 mx-auto relative">
                        <Globe />
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Icon Cloud</div>
                    </div>
                    <div className="component-card__body">
                      <div className="w-40 h-40 mx-auto">
                        <IconCloud width={160} height={160} />
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Orbiting Circles</div>
                    </div>
                    <div className="component-card__body">
                      <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                        <OrbitingCircles className="h-8 w-8 border-none bg-transparent" duration={20} delay={0} radius={50}>
                          <div className="h-3 w-3 rounded-full bg-primary"></div>
                        </OrbitingCircles>
                        <OrbitingCircles className="h-8 w-8 border-none bg-transparent" duration={20} delay={10} radius={50}>
                          <div className="h-3 w-3 rounded-full bg-primary"></div>
                        </OrbitingCircles>
                        <div className="h-4 w-4 rounded-full bg-primary/50"></div>
                      </div>
                    </div>
                  </article>

                  <article className="component-card">
                    <div className="component-card__header">
                      <div className="component-card__title">Border Beam</div>
                    </div>
                    <div className="component-card__body">
                      <div className="relative w-full h-24 rounded-lg border bg-muted flex items-center justify-center">
                        <BorderBeam />
                        <span className="text-sm">Animated Border</span>
                      </div>
                    </div>
                  </article>

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
            </div>
          </TabsContent>
          <TabsContent value="compare">
            <div>
              <table className="table-auto border-collapse border w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border px-4 py-2">Component</th>
                    <th className="border px-4 py-2">shadcn</th>
                    <th className="border px-4 py-2">Aceternity</th>
                    <th className="border px-4 py-2">Magic UI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Button</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <ShadcnButton>Click</ShadcnButton>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <AceternityButton>Click</AceternityButton>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center gap-2">
                        <MagicButton className="shadow-sm text-xs px-2">Shimmer</MagicButton>
                        <RainbowButton className="text-xs px-2">Rainbow</RainbowButton>
                        <ShinyButton className="text-xs px-2">Shiny</ShinyButton>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Input</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Input placeholder="Type here..." className="max-w-[200px]" />
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Select</td>
                    <td className="border px-4 py-3">
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
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Checkbox</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Checkbox id="shadcn-check" />
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Badge</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Badge>New</Badge>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Textarea</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Textarea placeholder="Type here..." className="max-w-[200px]" />
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Radio</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <RadioGroup defaultValue="option1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option1" id="r1" />
                          </div>
                        </RadioGroup>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Switch</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Switch />
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Slider</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Slider defaultValue={[50]} max={100} step={1} className="w-[160px]" />
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Avatar</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <AvatarCircles numPeople={3} avatarUrls={[]} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Alert</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Alert className="max-w-[200px]">
                          <AlertDescription>Alert message</AlertDescription>
                        </Alert>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Progress</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Progress value={60} className="w-[160px]" />
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Separator</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Separator className="w-[160px]" />
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Accordion</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Accordion type="single" collapsible className="w-[200px]">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>Item 1</AccordionTrigger>
                            <AccordionContent>Content</AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Table</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
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
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Dialog</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <ShadcnButton variant="outline">Open</ShadcnButton>
                          </DialogTrigger>
                          <DialogContent>Dialog Content</DialogContent>
                        </Dialog>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Modal ✓
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Tooltip</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <ShadcnButton variant="outline">Hover</ShadcnButton>
                            </TooltipTrigger>
                            <TooltipContent>Tooltip</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
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
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Tabs</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <span className="text-sm">Current Tab ✓</span>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <AceternityTabs
                          tabs={[
                            { title: "Tab 1", value: "tab1", content: "Content 1" },
                            { title: "Tab 2", value: "tab2", content: "Content 2" }
                          ]}
                          containerClassName="w-[200px]"
                          contentClassName="hidden"
                        />
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Dropdown</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <ShadcnButton variant="outline">Menu</ShadcnButton>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Item 1</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Animated Text</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center gap-2">
                        <AnimatedGradientText>Gradient</AnimatedGradientText>
                        <SparklesText>✨ Sparkles</SparklesText>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Bento Grid</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Layout ✓
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Layout ✓
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Background Effects</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Beams ✓
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Particles/Meteors ✓
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Moving Border</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <MovingBorderButton duration={3000} className="text-sm px-3 py-1">
                          Border
                        </MovingBorderButton>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Border Beam ✓
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Hover Border Gradient</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <HoverBorderGradient containerClassName="rounded-md" className="text-sm px-3 py-1">
                          Hover
                        </HoverBorderGradient>
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Ripple Effect</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <Ripple />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Marquee</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <Marquee className="max-w-[200px]">
                          <span className="text-sm">Scrolling Text</span>
                        </Marquee>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Number Animation</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <NumberTicker value={100} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Timeline</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Animated ✓
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Animated List</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Animated ✓
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Floating Dock</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Dock ✓
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Dock ✓
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Floating Navbar</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Floating Navbar ✓
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Sidebar</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Sidebar ✓
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Text Reveal</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Text Reveal ✓
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Animated Beam</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        Animated Beam ✓
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Blur Fade</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <BlurFade delay={0.1} inView>
                          <div className="text-sm">Fade In</div>
                        </BlurFade>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Confetti</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <ConfettiButton className="text-xs px-3 py-1">
                          🎉 Click
                        </ConfettiButton>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Cool Mode</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <CoolMode>
                          <ShadcnButton size="sm" className="text-xs">✨ Click</ShadcnButton>
                        </CoolMode>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Globe</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <div className="w-32 h-32 relative">
                          <Globe />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Icon Cloud</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <div className="w-32 h-32">
                          <IconCloud width={128} height={128} />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-medium text-center">Orbiting Circles</td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center text-muted-foreground text-sm">
                        -
                      </div>
                    </td>
                    <td className="border px-4 py-3">
                      <div className="flex justify-center items-center">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                          <OrbitingCircles className="h-8 w-8 border-none bg-transparent" duration={20} delay={0} radius={40}>
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </OrbitingCircles>
                          <OrbitingCircles className="h-8 w-8 border-none bg-transparent" duration={20} delay={10} radius={40}>
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                          </OrbitingCircles>
                        </div>
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
