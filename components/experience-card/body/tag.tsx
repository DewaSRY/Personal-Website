import { ComponentProps, PropsWithChildren } from "react";

interface tagProps extends ComponentProps<"div">, PropsWithChildren {}

export default function tag({ children, ...resProps }: tagProps) {
  return (
    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
      {children}
    </div>
  );
}
