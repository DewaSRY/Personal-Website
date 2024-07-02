import { ComponentProps, PropsWithChildren } from "react";
import { Maitree } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Maitree({
  weight: "400",
  preload: false,
});

interface DateProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Date({ children, className, ...resProps }: DateProps) {
  return (
    <p
      className={cn(
        font.className,
        className,
        "text-[6px] text-primary-three",
        "md:text-[8px]",
        "xl:text-[10px]"
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
