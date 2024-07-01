import { ComponentProps, PropsWithChildren } from "react";

interface WorkContainerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkContainer({
  children,
  ...resProps
}: WorkContainerProps) {
  return (
    <div className="bg-primary-one-alfa mx-auto px-4 py-6 rounded-xl w-11/12 xl:w-[1200px]">
      {children}
    </div>
  );
}
