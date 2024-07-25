import { ComponentProps, PropsWithChildren } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
interface triggerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function trigger({ children, ...resProps }: triggerProps) {
  return (
    <AccordionTrigger className="text-white-two text-left">
      <Heading.H4>{children}</Heading.H4>
    </AccordionTrigger>
  );
}
