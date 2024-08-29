import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { popinsRegular, popinsBold } from "./utils";

const paraType = {
  description: ` text-[16px] md:text-[16px] leading-6 tracking-[2px] `,
  date: ` text-[10px] md:text-[12px] leading-5 tracking-[2px] `,
  quote: ` text-[24px] md:text-[24px] leading-6 `,
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
        `${bold ? popinsBold.className + "  " : popinsRegular.className} `,
        paraType[type],
        "  ",
        className
      )}
      {...resProps}
    >
      {children}
    </p>
  );
}
