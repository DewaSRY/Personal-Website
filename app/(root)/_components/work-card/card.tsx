import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface CardProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Card({ children, ...resProps }: CardProps) {
  return (
    <div
      className={cn(
        "grid grid-rows-12 gap-1 grid-cols-2 ",
        "w-[350px] md:w-[750px] xl:w-[350px]"
      )}
    >
      {children}
    </div>
  );
}
