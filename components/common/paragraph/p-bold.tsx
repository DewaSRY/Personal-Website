import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { popinsBold } from "./utils";
interface BoldProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Bold({ children, className, ...resProps }: BoldProps) {
  return (
    <p
      className={cn(
        className,
        `${popinsBold.className} text-[14px] md:text-[16px] tracking-wide `
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
