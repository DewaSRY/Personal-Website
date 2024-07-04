import { ComponentProps, PropsWithChildren } from "react";
import { Maitree } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Maitree({
  weight: "200",
  preload: false,
});

interface DateProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Date({ children, className, ...resProps }: DateProps) {
  return (
    <p
      className={cn(
        font.className,
        className,
        "text-[12px] text-primary-five",
        "md:text-[14px]",
        "xl:text-[16px]"
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
