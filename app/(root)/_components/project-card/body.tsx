import { ComponentProps, PropsWithChildren } from "react";

interface WorkBodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkBody({ children, ...resProps }: WorkBodyProps) {
  return <div>{children}</div>;
}
