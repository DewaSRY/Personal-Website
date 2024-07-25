import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface BodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Body({ children, ...resProps }: BodyProps) {
  return (
    <div
      className={cn(
        "col-start-1 col-span-6 row-start-3 row-span-2",
        "md:col-start-3 md:col-span-4 md:row-start-1 md:row-span-4",
        "text-white-two py-2 md:py-4 border-t-2 "
      )}
    >
      {children}
    </div>
  );
}
