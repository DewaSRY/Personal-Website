import { ComponentProps, PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
const font = Inter({
  weight: "400",
  subsets: ["cyrillic"],
});
interface P1RProps extends ComponentProps<"p">, PropsWithChildren {}

export default function P1R({ children, className, ...resProps }: P1RProps) {
  return (
    <p className={cn(className, font.className, "text-[16px] leading-[150%]")}>
      {children}
    </p>
  );
}
