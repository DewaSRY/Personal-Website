import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface AboutMeBgProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AboutMeBg({ children, ...resProps }: AboutMeBgProps) {
  return (
    <>
      <div
        className={cn(
          "absolute top-0 left-0 w-[95%] bg-primary-three z-[0] h-[1200px]",
          "rounded-br-[500px]"
        )}
      />
      <div
        className={cn(
          "absolute top-0 right-0 w-[95%] bg-primary-four z-[-1]  h-[2000px]",
          "rounded-bl-[500px]"
        )}
      />
      <div
        className={cn(
          "absolute top-0 left-0 w-[95%] bg-primary-two z-[-2]  h-[3000px]",
          "rounded-br-[500px]"
        )}
      />
    </>
  );
}
