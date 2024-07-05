import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface CrdProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Crd({ children, className, ...resProps }: CrdProps) {
  return (
    <div className={cn(className)} {...resProps}>
      {children}
    </div>
  );
}
