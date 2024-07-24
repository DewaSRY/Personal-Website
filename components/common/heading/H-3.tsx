import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { junge } from "./utils";

interface H3Props extends ComponentProps<"h3">, PropsWithChildren {}
export default function H3({ children, className, ...resProps }: H3Props) {
  return (
    <h3
      className={cn(
        `${junge.className} text-[29px] md:text-[32px] xl:text-[39px]`,
        className
      )}
      {...resProps}
    >
      {children}
    </h3>
  );
}
