import { ComponentProps, PropsWithChildren } from "react";

interface cardProps extends ComponentProps<"div">, PropsWithChildren {}

export default function card({ children, ...resProps }: cardProps) {
  return <div className="flex justify-between h-48">{children}</div>;
}
