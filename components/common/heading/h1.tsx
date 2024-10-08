import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { inter } from "./utils";

interface H1Props extends ComponentProps<"div">, PropsWithChildren {}
export default function H1({ children, className, ...resProps }: H1Props) {
  return (
    <h1
      {...resProps}
      className={cn(
        `${inter.className} text-5xl sm:text-7xl xl:text-9xl `,
        className
      )}
    >
      {children}
    </h1>
  );
}
