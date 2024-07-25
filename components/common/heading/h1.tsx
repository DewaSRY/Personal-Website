import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { junge } from "./utils";
interface H1Props extends ComponentProps<"h1">, PropsWithChildren {}
export default function H1({ children, className, ...resProps }: H1Props) {
  return (
    <h1
      {...resProps}
      className={cn(
        junge.className,
        `${junge.className} text-[41px] md:text-[48px] xl:text-[61px]`,
        className
      )}
    >
      {children}
    </h1>
  );
}
