import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import { cn } from "@/lib/utils";
interface TitleProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Title({ children, ...resProps }: TitleProps) {
  return (
    <div
      className={cn(
        "col-start-1 col-span-2 row-start-1 row-span-2",
        "md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-4",
        "xl:col-start-1 xl:col-span-2 xl:row-start-1 xl:row-span-2"
      )}
    >
      <Heading.H4 className="text-white-one ">{children}</Heading.H4>
      <hr className="border border-black-two w-full" />
    </div>
  );
}
