import { ComponentProps, PropsWithChildren } from "react";
import { Kaisei_Decol } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Kaisei_Decol({
  weight: "400",
  preload: false,
});

interface H3Props extends ComponentProps<"h3">, PropsWithChildren {}
export default function H3({ children, ...resProps }: H3Props) {
  return (
    <h3
      className={cn(
        font.className,
        resProps.className,
        "text-[18px]",
        "md:text-[24px]",
        "xl:text-[34px]"
      )}
      {...resProps}
    >
      {children}
    </h3>
  );
}
