import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";
import { junge } from "./utils";

export const quote = `&apos;`;

interface QuoteProps extends PropsWithChildren, ComponentProps<"p"> {
  setQuote: boolean;
}

export default function Quote({
  children,
  className,
  setQuote = false,
  ...resProps
}: QuoteProps) {
  return (
    <p
      {...resProps}
      className={cn(className, `${junge.className} text-[20px] md:text-[24px]`)}
    >
      {setQuote ? <> &apos;&apos;{children}&apos;&apos;</> : children}
    </p>
  );
}
