import { ComponentProps, PropsWithChildren } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Heading from "@/components/common/heading";
import { ArrowUpRight } from "lucide-react";
interface TItleProps extends ComponentProps<"a">, PropsWithChildren {
  hrfTo: string;
}
export default function TItle({
  children,
  hrfTo,
  className,
  ...resProps
}: TItleProps) {
  return (
    <Link
      {...resProps}
      href={hrfTo}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        "relative flex text-primary-four gap-4 flex-row items-center"
      )}
    >
      <Heading.H3>{children}</Heading.H3>
      <ArrowUpRight />
      <hr className="absolute b-0" />
    </Link>
  );
}
