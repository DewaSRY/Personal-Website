import { ComponentProps, PropsWithChildren } from "react";

interface CrdProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Crd({ children, ...resProps }: CrdProps) {
  return <div>{children}</div>;
}
