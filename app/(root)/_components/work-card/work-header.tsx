import { ComponentProps, PropsWithChildren } from "react";

interface WorkHeaderProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkHeader({ children, ...resProps }: WorkHeaderProps) {
  return <div className="flex flex-col">{children}</div>;
}
