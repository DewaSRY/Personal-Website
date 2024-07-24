import { ComponentProps, PropsWithChildren } from "react";

interface CardBodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function CardBody({ children, ...resProps }: CardBodyProps) {
  return <div className="flex gap-4 flex-wrap my-10">{children}</div>;
}
