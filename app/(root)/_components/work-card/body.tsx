import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
interface BodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Body({ children, ...resProps }: BodyProps) {
  return <div className="md:py-10">{children}</div>;
}
