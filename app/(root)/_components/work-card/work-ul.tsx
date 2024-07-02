import { ComponentProps, PropsWithChildren } from "react";

interface WorkUlProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkUl({ children, ...resProps }: WorkUlProps) {
  return <ul>{children}</ul>;
}
