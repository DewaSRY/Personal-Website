import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface UlProps extends ComponentProps<"ul">, PropsWithChildren {}

export default function Ul({ children, className, ...resProps }: UlProps) {
  return <ul className={cn(className, "mt-6 ml-2 mb-2")}>{children}</ul>;
}
