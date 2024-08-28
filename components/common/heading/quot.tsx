import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";
import { junge } from "./utils";
interface QuoteProps extends PropsWithChildren, ComponentProps<"p"> {
  quote?: boolean;
}

export default function Quote({
  children,
  className,
  quote = false,
  ...resProps
}: QuoteProps) {
  return (
    <p
      {...resProps}
      className={cn(className, `${junge.className} text-[20px] md:text-[24px]`)}
    >
      {quote ? <> &apos;&apos;{children}&apos;&apos;</> : children}
    </p>
  );
}
