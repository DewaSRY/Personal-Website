import { ComponentProps, PropsWithChildren } from "react";

interface HeaderProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Header({ children, ...resProps }: HeaderProps) {
  return <div className="">{children}</div>;
}
