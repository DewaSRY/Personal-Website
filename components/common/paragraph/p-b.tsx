import { ComponentProps, PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
const font = Inter({
  weight: "500",
  subsets: ["cyrillic"],
});
interface PBProps extends ComponentProps<"p">, PropsWithChildren {}

export default function PB({ children, className, ...resProps }: PBProps) {
  return (
    <span
      className={cn(
        className,
        font.className,
        "text-[14px] md:text-[16px]  leading-[150%] text-primary-five"
      )}
    >
      {children}
    </span>
  );
}
