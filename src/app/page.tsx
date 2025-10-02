"use client";

import { Button as ShadcnButton } from "@/components/ui/shadcn/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn/card";
import { Badge } from "@/components/ui/shadcn/badge";
import { Input } from "@/components/ui/shadcn/input";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
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
import { MovingBorder } from "@/components/ui/aceternity/moving-border";
import { HoverBorderGradient } from "@/components/ui/aceternity/hover-border-gradient";
import { ShimmerButton as MagicButton } from "@/components/ui/magicui/shimmer-button";
import { RainbowButton } from "@/components/ui/magicui/rainbow-button";

export default function UIMatrix() {
  return (
    <main className="component-catalog container mx-auto p-8 space-y-12">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">UI 라이브러리 컴포넌트 비교</h1>
        <Badge>demo</Badge>
      </header>

      {/* Buttons: Gallery / Compare */}
      <section className="component-catalog__section">
        <Tabs defaultValue="gallery" className="component-catalog__tabs">
          <TabsList>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
          </TabsList>
          <TabsContent value="gallery">
            <div className="component-catalog__grid">
              <article className="component-card">
                <div className="component-card__header">
                  <div className="component-card__title">shadcn/ui</div>
                  <div className="component-card__meta">Button</div>
                </div>
                <div className="component-card__body">
                  <ShadcnButton>Click</ShadcnButton>
                </div>
              </article>


              <article className="component-card">
                <div className="component-card__header">
                  <div className="component-card__title">Magic</div>
                  <div className="component-card__meta">Button</div>
                </div>
                <div className="component-card__body">
                  <MagicButton>Click</MagicButton>
                </div>
              </article>

            </div>
          </TabsContent>
          <TabsContent value="compare">
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border px-4 py-2">Component</th>
                    <th className="border px-4 py-2">shadcn</th>
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
                      <div className="flex justify-center items-center gap-2">
                        <MagicButton className="shadow-sm">Shimmer</MagicButton>
                        <RainbowButton>Rainbow</RainbowButton>
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
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Aceternity UI - Special Effects */}
      <section className="component-catalog__section">
        <h2 className="component-catalog__title">Aceternity UI - Special Effects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Stateful Button</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <AceternityButton>Click Me</AceternityButton>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Moving Border</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <MovingBorder duration={3000} className="p-4 border-neutral-200 dark:border-slate-800">
                <span>Animated Border</span>
              </MovingBorder>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hover Border Gradient</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <HoverBorderGradient>
                <span>Hover Me</span>
              </HoverBorderGradient>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* shadcn */}
      <section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Button / Dropdown</CardTitle>
            </CardHeader>
            <CardContent className="space-x-3">
              <ShadcnButton>Primary</ShadcnButton>
              <ShadcnButton variant="secondary">Secondary</ShadcnButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ShadcnButton variant="outline">Menu</ShadcnButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Item 1</DropdownMenuItem>
                  <DropdownMenuItem>Item 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input / Select / Checkbox</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <Input placeholder="Search…" className="w-48" />
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Pick one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Option A</SelectItem>
                  <SelectItem value="b">Option B</SelectItem>
                </SelectContent>
              </Select>
              <label className="flex items-center gap-2">
                <Checkbox /> <span>Accept</span>
              </label>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tooltip</CardTitle>
            </CardHeader>
            <CardContent>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ShadcnButton variant="secondary">Hover me</ShadcnButton>
                  </TooltipTrigger>
                  <TooltipContent>툴팁 예시</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="one">
                <TabsList>
                  <TabsTrigger value="one">One</TabsTrigger>
                  <TabsTrigger value="two">Two</TabsTrigger>
                </TabsList>
                <TabsContent value="one" className="pt-4">
                  첫 번째 탭
                </TabsContent>
                <TabsContent value="two" className="pt-4">
                  두 번째 탭
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
