import { ComponentProps, PropsWithChildren } from "react";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Lora({
  weight: "400",
  preload: false,
});

interface ListProps extends ComponentProps<"li">, PropsWithChildren {}
export default function List({ children, className, ...resProps }: ListProps) {
  return (
    <li
      className={cn(
        font.className,
        "text-[10px] text-primary-three",
        "text-[12px]",
        "text-[14px]",
        className
      )}
      {...resProps}
    >
      <p>{children}</p>
    </li>
  );
}
