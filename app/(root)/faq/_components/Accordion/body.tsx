import { ComponentProps, PropsWithChildren } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Paragraph from "@/components/common/paragraph";
interface bodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function body({ children, ...resProps }: bodyProps) {
  return (
    <AccordionContent>
      <Paragraph.Description className="text-white-two px-2">
        {children}
      </Paragraph.Description>
    </AccordionContent>
  );
}
