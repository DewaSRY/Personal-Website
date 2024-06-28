import { ComponentProps, PropsWithChildren } from "react";
import { Karma } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Karma({
  weight: "500",
  preload: false,
});

interface H2Props extends ComponentProps<"h2">, PropsWithChildren {}
export default function H2({ children, ...resProps }: H2Props) {
  return (
    <h2
      className={cn(
        font.className,
        resProps.className,
        "text-[20px]",
        "md:text-[24px]",
        "xl:text-[28px]"
      )}
      {...resProps}
    >
      {children}
    </h2>
  );
}
