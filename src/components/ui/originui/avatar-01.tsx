import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

export const OriginAvatarExample = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & { src?: string }
>(({ className, src, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    {src && <AvatarPrimitive.Image src={src} alt="Avatar" />}
    <AvatarPrimitive.Fallback>CN</AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
));
OriginAvatarExample.displayName = AvatarPrimitive.Root.displayName;

