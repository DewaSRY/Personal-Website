import { ComponentProps, PropsWithChildren } from "react";
import { Karma } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Karma({
  weight: "500",
  preload: false,
});

interface H2Props extends ComponentProps<"h2">, PropsWithChildren {}
export default function H2({ children, className, ...resProps }: H2Props) {
  return (
    <h2
      className={cn(
        font.className,
        className,
        "text-[20px] text-primary-four",
        "md:text-[24px]",
        "xl:text-[28px]"
      )}
      {...resProps}
    >
      {children}
    </h2>
  );
}
