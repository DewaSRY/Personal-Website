import { ComponentProps, PropsWithChildren, ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
interface CardProps extends ComponentProps<"div">, PropsWithChildren {
  value: string;
}

export default function Card({ children, value, ...resProps }: CardProps) {
  return (
    <AccordionItem value={value} className="my-4">
      {children}
    </AccordionItem>
  );
}
