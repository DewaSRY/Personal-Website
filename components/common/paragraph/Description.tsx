import { ComponentProps, PropsWithChildren } from "react";
import { Sedan } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Sedan({
  weight: "400",
  preload: false,
});

interface DescriptionProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Description({
  children,
  ...resProps
}: DescriptionProps) {
  return (
    <p
      className={cn(
        font.className,
        resProps.className,
        "text-[10px] text-primary-three",
        "md:text-[12px]",
        "xl:text-[14px]"
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
