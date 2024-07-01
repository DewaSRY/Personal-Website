import { ComponentProps, PropsWithChildren } from "react";
import { Halant } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Halant({
  weight: "500",
  preload: false,
});

interface H4Props extends ComponentProps<"h4">, PropsWithChildren {}
export default function H4({ children, className, ...resProps }: H4Props) {
  return (
    <h4
      className={cn(
        font.className,
        "text-[16px] text-primary-four",
        "md:text-[20px]",
        "xl:text-[24px]",
        className
      )}
      {...resProps}
    >
      {children}
    </h4>
  );
}
