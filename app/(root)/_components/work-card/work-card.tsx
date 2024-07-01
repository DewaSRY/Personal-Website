import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
interface WorkCardProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkCard({ children, ...resProps }: WorkCardProps) {
  return (
    <div
      className={cn(
        " work-card transition-transform scale-0 translate-x-[-100%] h-[100vh] flex justify-center items-center flex-col  "
      )}
    >
      <div className="bg-primary-one-alfa w-11/12 p-10 rounded-xl ">
        {children}
      </div>
    </div>
  );
}
