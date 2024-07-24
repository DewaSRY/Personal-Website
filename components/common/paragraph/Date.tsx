import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { popinsRegular } from "./utils";

interface DateProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Date({ children, className, ...resProps }: DateProps) {
  return (
    <p
      className={cn(
        className,
        `${popinsRegular.className} text-[10px] md:text-[12px]`
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
