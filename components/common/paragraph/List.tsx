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
        "text-[12px] text-primary-five list-disc",
        "md:text-[14px]",
        "xl:text-[16px] ",
        className
      )}
      {...resProps}
    >
      <p>{children}</p>
    </li>
  );
}
