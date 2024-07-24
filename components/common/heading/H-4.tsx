import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { junge } from "./utils";
interface H4Props extends ComponentProps<"h4">, PropsWithChildren {}
export default function H4({ children, className, ...resProps }: H4Props) {
  return (
    <h4
      {...resProps}
      className={cn(
        `${junge.className} text-[24px] md:text-[25px] xl:text-[31px]`,
        className
      )}
    >
      {children}
    </h4>
  );
}
