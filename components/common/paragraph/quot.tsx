import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface QuoteProps extends ComponentProps<"span"> {}

export default function Quote({
  children,
  className,
  ...resProps
}: QuoteProps) {
  return (
    <span className={cn(className, "inline-block mx-1")} {...resProps}>
      {" "}
      &apos;
    </span>
  );
}
