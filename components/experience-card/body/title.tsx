import { ComponentProps, PropsWithChildren } from "react";

interface titleProps extends ComponentProps<"div">, PropsWithChildren {}

export default function title({ children, ...resProps }: titleProps) {
  return (
    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
      {children}
    </div>
  );
}
