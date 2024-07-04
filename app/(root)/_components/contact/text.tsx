import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface textProps extends ComponentProps<"span">, PropsWithChildren {}

export default function text({ children, className, ...resProps }: textProps) {
  return (
    <span className={cn(className, "grow")}>
      <Paragraph.Description className="text-primary-one">
        {children}
      </Paragraph.Description>
      <hr className="w-8/12 xl:w-2/5" />
    </span>
  );
}
