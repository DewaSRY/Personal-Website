import { ComponentProps, PropsWithChildren } from "react";
import Paragraph from "@/components/common/paragraph";
interface decProps extends ComponentProps<"div">, PropsWithChildren {}

export default function dec({ children, ...resProps }: decProps) {
  return (
    <Paragraph.Description className="py-4 text-white-one">
      <span className="inline-block mr-2"></span> {children}
    </Paragraph.Description>
  );
}

/**
 * <div className="p-3 text-sm italic">{children}</div>;
 */
