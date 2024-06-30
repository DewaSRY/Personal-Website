import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
interface WorkBodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkBody({ children, ...resProps }: WorkBodyProps) {
  return <div className="flex flex-col md:flex-row gap-4 my-4">{children}</div>;
}
