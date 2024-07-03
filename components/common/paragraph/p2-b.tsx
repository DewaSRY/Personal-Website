import { ComponentProps, PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
const font = Inter({
  weight: "500",
  subsets: ["cyrillic"],
});
interface P2BProps extends ComponentProps<"p">, PropsWithChildren {}

export default function P2B({ children, className, ...resProps }: P2BProps) {
  return (
    <p className={cn(className, font.className, "text-[14px] leading-[150%]")}>
      {children}
    </p>
  );
}
