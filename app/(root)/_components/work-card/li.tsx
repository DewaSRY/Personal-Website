import { ComponentProps, PropsWithChildren } from "react";

import Paragraph from "@/components/common/paragraph";
interface LiProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Li({ children, ...resProps }: LiProps) {
  return <Paragraph.List className="list-outside"> {children}</Paragraph.List>;
}
