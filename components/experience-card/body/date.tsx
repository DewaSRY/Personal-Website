import { ComponentProps, PropsWithChildren } from "react";

interface dateProps extends ComponentProps<"div">, PropsWithChildren {}

export default function date({ children, ...resProps }: dateProps) {
  return (
    <div className="p-3 text-red-400 text-sm font-semibold">{children}</div>
  );
}
