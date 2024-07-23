import { ComponentProps, PropsWithChildren } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface LinkProps extends ComponentProps<"a">, PropsWithChildren {
  hrfTo: string;
}

export default function Link({
  children,
  className,
  hrfTo,
  ...resProps
}: LinkProps) {
  return (
    <NextLink
      {...resProps}
      href={hrfTo}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        "uppercase  text-primary-three  inline-block mx-[2px]"
      )}
    >
      {children}
    </NextLink>
  );
}
