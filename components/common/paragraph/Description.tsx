import { ComponentProps, PropsWithChildren } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
  weight: "400",
  preload: false,
});

interface DescriptionProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Description({
  children,
  className,
  ...resProps
}: DescriptionProps) {
  return (
    <p
      className={cn(
        font.className,
        "text-[12px] text-primary-five",
        "md:text-[14px]",
        "xl:text-[16px]",
        className
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
