import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/originui/accordion";

export function OriginAccordionPreview() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Content 1
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          Content 2
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
