import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
interface BodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Body({ children, ...resProps }: BodyProps) {
  return <div className="flex flex-col md:flex-row gap-6 my-4">{children}</div>;
}
