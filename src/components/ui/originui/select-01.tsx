import { Button } from "@/components/ui/originui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/originui/popover"
import { Textarea } from "@/components/ui/originui/textarea"

export function OriginSelectExample() {
  return (
    <div className="flex flex-col gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Feedback</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <h2 className="mb-2 text-sm font-semibold">Send us feedback</h2>
          <form className="space-y-3">
            <Textarea
              id="feedback"
              placeholder="How can we improve coss.com ui?"
              aria-label="Send feedback"
            />
            <div className="flex flex-col sm:flex-row sm:justify-end">
              <Button size="sm">Send feedback</Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}
