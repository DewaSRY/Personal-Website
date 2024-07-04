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
    <div className={cn("flex flex-wrap mt-10", className)} {...resProps}>
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
