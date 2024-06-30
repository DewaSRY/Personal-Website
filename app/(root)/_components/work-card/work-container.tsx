import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
interface WorkContainerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkContainer({
  children,
  ...resProps
}: WorkContainerProps) {
  return (
    <div className={cn("h-[100vh] flex justify-center items-center flex-col ")}>
      <div className="bg-primary-one-alfa w-11/12 p-10 rounded-xl ">
        {children}
      </div>
    </div>
  );
}
