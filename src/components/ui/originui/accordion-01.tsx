import { useId } from "react"

import { Input } from "@/components/ui/originui/input"
import { Label } from "@/components/ui/originui/label"

export default function Component() {
  const id = useId()
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>
        Required input <span className="text-destructive">*</span>
      </Label>
      <Input id={id} placeholder="Email" type="email" required />
    </div>
  )
}
