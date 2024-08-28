import { ComponentProps, PropsWithChildren } from "react";

interface decProps extends ComponentProps<"div">, PropsWithChildren {}

export default function dec({ children, ...resProps }: decProps) {
  return <div className="p-3 text-sm italic">{children}</div>;
}
