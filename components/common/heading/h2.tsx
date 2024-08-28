import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { junge } from "./utils";

interface H2Props extends ComponentProps<"h2">, PropsWithChildren {}
export default function H2({ children, className, ...resProps }: H2Props) {
  return (
    <h2
      {...resProps}
      className={cn(
        `${junge.className} text-[35px] md:text-[38px] xl:text-[48px]`,
        className
      )}
    >
      {children}
    </h2>
  );
}
