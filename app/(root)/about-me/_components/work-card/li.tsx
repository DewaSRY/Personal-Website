import { ComponentProps, PropsWithChildren } from "react";

import Paragraph from "@/components/common/paragraph";
interface LiProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Li({ children, ...resProps }: LiProps) {
  return <li className="list-outside"> {children}</li>;
}
