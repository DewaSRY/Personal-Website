import { ComponentProps, PropsWithChildren } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface CardProps extends ComponentProps<"a">, PropsWithChildren {
  hrfTo: string;
}

export default function Card({
  hrfTo,
  className,
  children,
  ...resProps
}: CardProps) {
  return (
    <Link
      {...resProps}
      href={hrfTo}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className, "flex flex-row items-center")}
    >
      {children}
    </Link>
  );
}
