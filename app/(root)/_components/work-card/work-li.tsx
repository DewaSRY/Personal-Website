import { ComponentProps, PropsWithChildren } from "react";

import Paragraph from "@/components/common/paragraph";
interface WorkLiProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkLi({ children, ...resProps }: WorkLiProps) {
  return (
    <Paragraph.List className="list-outside"> - {children}</Paragraph.List>
  );
}
