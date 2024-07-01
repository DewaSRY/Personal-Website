import { ComponentProps, PropsWithChildren } from "react";
import { Lustria } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Lustria({
  weight: "400",
  preload: false,
});

interface NavProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Nav({ children, className, ...resProps }: NavProps) {
  return (
    <p
      className={cn(
        font.className,
        className,
        "text-[10px] text-primary-three",
        "md:text-[16px]",
        "xl:text-[20px]"
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
