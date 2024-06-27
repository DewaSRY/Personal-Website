import { ComponentProps, PropsWithChildren } from "react";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Lora({
  weight: "400",
  preload: false,
});

interface ListProps extends ComponentProps<"p">, PropsWithChildren {}
export default function List({ children, ...resProps }: ListProps) {
  return (
    <p
      className={cn(font.className, resProps.className, "text-[18px]")}
      {...resProps}
    >
      {children}
    </p>
  );
}
