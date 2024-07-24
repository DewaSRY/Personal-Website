import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";
import Paragraph from "@/components/common/paragraph";
interface DateProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Date({ children, ...resProps }: DateProps) {
  return (
    <div
      className={cn(
        "col-start-1 col-span-2 row-start-2 row-span-1",
        "md:col-start-2 md:col-span-1 md:row-start-5 md:row-span-1",
        "xl:col-start-1 xl:col-span-2 xl:row-start-2 xl:row-span-1"
      )}
    >
      <Paragraph.Date className="text-white-three">{children}</Paragraph.Date>
    </div>
  );
}
