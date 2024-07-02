import { ComponentProps, PropsWithChildren } from "react";
import { Kaisei_Decol } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Kaisei_Decol({
  weight: "400",
  preload: false,
});

interface H3Props extends ComponentProps<"h3">, PropsWithChildren {}
export default function H3({ children, className, ...resProps }: H3Props) {
  return (
    <h3
      className={cn(
        font.className,
        className,
        "text-[18px] text-primary-four",
        "md:text-[24px]",
        "xl:text-[34px]"
      )}
      {...resProps}
    >
      {children}
    </h3>
  );
}
