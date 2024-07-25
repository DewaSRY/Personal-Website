import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface AboutMeBgProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AboutMeBg({ children, ...resProps }: AboutMeBgProps) {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0 bg-primary-three z-[0] w-ful h-[1100px]",
          "rounded-br-[500px]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-primary-four z-[-1] w-full h-[1800px]",
          "rounded-bl-[500px]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-primary-two z-[-2] w-full h-[2600px]",
          "rounded-br-[500px]"
        )}
      />
    </>
  );
}
