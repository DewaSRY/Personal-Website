import { ComponentProps, PropsWithChildren } from "react";

interface CardBodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function CardBody({ children, ...resProps }: CardBodyProps) {
  return <div>{children}</div>;
}
