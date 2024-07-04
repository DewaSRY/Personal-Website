import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface SkillContainerProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function SkillContainer({
  children,
  className,
  ...resProps
}: SkillContainerProps) {
  return (
    <div className={cn(className)} {...resProps}>
      {children}
    </div>
  );
}
