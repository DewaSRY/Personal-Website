import { ComponentProps, PropsWithChildren } from "react";

import ProgrammingIcon from "../_components/programming-icon";
import { cn } from "@/lib/utils";
interface ProgrammingContainerProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function ProgrammingContainer({
  children,
  className,
  ...resProps
}: ProgrammingContainerProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-auto-fit-100 md:gap-10 my-10 max-w-[400px] max-h-[200px]",
        className
      )}
      {...resProps}
    >
      <ProgrammingIcon imageSrc="/programming-tools/java.png" imageAlt="java">
        Java
      </ProgrammingIcon>
      <ProgrammingIcon
        imageSrc="/programming-tools/javascript.png"
        imageAlt="java script"
      >
        Java Script
      </ProgrammingIcon>
      <ProgrammingIcon
        imageSrc="/programming-tools/python.png"
        imageAlt="python"
      >
        Python
      </ProgrammingIcon>
      <ProgrammingIcon imageSrc="/programming-tools/rust.png" imageAlt="rust">
        Rust
      </ProgrammingIcon>
    </div>
  );
}
