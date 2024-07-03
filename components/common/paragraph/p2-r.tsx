import { ComponentProps, PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
const font = Inter({
  weight: "400",
  subsets: ["cyrillic"],
});
interface P2RProps extends ComponentProps<"p">, PropsWithChildren {}

export default function P2R({ children, className, ...resProps }: P2RProps) {
  return (
    <p className={cn(className, font.className, "text-[14px] leading-[150%]")}>
      {children}
    </p>
  );
}
