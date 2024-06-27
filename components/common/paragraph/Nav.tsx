import { ComponentProps, PropsWithChildren } from "react";
import { Lustria } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Lustria({
  weight: "400",
  preload: false,
});

interface NavProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Nav({ children, ...resProps }: NavProps) {
  return (
    <p
      className={cn(font.className, resProps.className, "text-[20px]")}
      {...resProps}
    >
      {children}
    </p>
  );
}
