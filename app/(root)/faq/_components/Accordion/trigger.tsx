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
    <AccordionTrigger className="text-white-two text-left duration-300 transition-transform ease-in-out hover:translate-x-[1%]">
      <Paragraph.Bold>{children}</Paragraph.Bold>
    </AccordionTrigger>
  );
}
