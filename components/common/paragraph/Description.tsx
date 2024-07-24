import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { popinsRegular } from "./utils";
interface DescriptionProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Description({
  children,
  className,
  ...resProps
}: DescriptionProps) {
  return (
    <p
      className={cn(
        className,
        ` ${popinsRegular.className} text-[14px] md:text-[16px]`
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
