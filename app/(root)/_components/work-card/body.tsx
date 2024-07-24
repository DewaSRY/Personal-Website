import { ComponentProps, PropsWithChildren } from "react";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
interface BodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Body({ children, ...resProps }: BodyProps) {
  return (
    <div
      className={cn(
        "col-start-1 col-span-2 row-start-8 row-end-13",
        "md:col-start-2 md:col-span-1 md:row-start-6 md:row-span-7",
        "xl:col-start-1 xl:col-span-2 xl:row-start-8 xl:row-end-13"
      )}
    >
      <Paragraph.Description className="text-white-two ">
        {children}
      </Paragraph.Description>
    </div>
  );
}
