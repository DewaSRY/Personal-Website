import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { popinsRegular, popinsBold } from "./utils";

const paraType = {
  description: ` text-[16px] md:text-[16px]`,
  date: ` text-[10px] md:text-[12px]`,
  quote: ` text-[24px] md:text-[24px]`,
};

interface DescriptionProps extends ComponentProps<"p">, PropsWithChildren {
  type?: keyof typeof paraType;
  bold?: boolean;
}
export default function Description({
  type = "description",
  bold = false,
  children,
  className,
  ...resProps
}: DescriptionProps) {
  return (
    <p
      className={cn(
        className,
        paraType[type],
        bold ? popinsBold.className + "tracking-wide" : popinsRegular.className
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
