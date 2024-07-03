import { ComponentProps, PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
const font = Inter({
  weight: "500",
  subsets: ["cyrillic"],
});
interface P1BProps extends ComponentProps<"p">, PropsWithChildren {}

export default function P1B({ children, className, ...resProps }: P1BProps) {
  return (
    <p className={cn(className, font.className, "text-[16px] leading-[150%]")}>
      {children}
    </p>
  );
}
