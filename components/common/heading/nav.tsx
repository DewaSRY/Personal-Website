import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { junge } from "./utils";

interface NavProps extends ComponentProps<"p">, PropsWithChildren {}
export default function Nav({ children, className, ...resProps }: NavProps) {
  return (
    <p
      {...resProps}
      className={cn(`${junge.className} text-[18px] `, className)}
    >
      {children}
    </p>
  );
}
