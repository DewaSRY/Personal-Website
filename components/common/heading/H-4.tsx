import { ComponentProps, PropsWithChildren } from "react";
import { Halant } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Halant({
  weight: "500",
  preload: false,
});

interface H4Props extends ComponentProps<"h4">, PropsWithChildren {}
export default function H4({ children, ...resProps }: H4Props) {
  return (
    <h4 className={cn(font.className, resProps.className)} {...resProps}>
      {children}
    </h4>
  );
}
