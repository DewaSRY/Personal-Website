import { ComponentProps, PropsWithChildren } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface containerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function container({
  children,
  className,
  ...resProps
}: containerProps) {
  return (
    <Accordion type="single" collapsible className={cn(className)}>
      {children}
    </Accordion>
  );
}
