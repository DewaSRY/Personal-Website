import { ComponentProps, PropsWithChildren } from "react";
import { Kaisei_HarunoUmi } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Kaisei_HarunoUmi({
  weight: "700",
  preload: false,
});

interface H1Props extends ComponentProps<"h1">, PropsWithChildren {}
export default function H1({ children, className, ...resProps }: H1Props) {
  return (
    <h1
      className={cn(
        font.className,
        "text-[34px] text-primary-four",
        "md:text-[44px]",
        "xl:text-[54px] ",
        className
      )}
      {...resProps}
    >
      {children}
    </h1>
  );
}
