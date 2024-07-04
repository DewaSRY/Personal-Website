import { ComponentProps, PropsWithChildren } from "react";
interface BodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Body({ children, ...resProps }: BodyProps) {
  return <div className="">{children}</div>;
}
