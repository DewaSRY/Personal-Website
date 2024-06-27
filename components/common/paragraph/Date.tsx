import { ComponentProps, PropsWithChildren } from "react";
import { Maitree } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Maitree({
  weight: "400",
  preload: false,
});

interface DateProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Date({ children, ...resProps }: DateProps) {
  return (
    <p className={cn(font.className, resProps.className)} {...resProps}>
      {children}
    </p>
  );
}
