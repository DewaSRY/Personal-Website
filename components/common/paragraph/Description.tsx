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
        className,
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
