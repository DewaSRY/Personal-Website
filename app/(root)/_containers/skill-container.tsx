import { ComponentProps, PropsWithChildren } from "react";

interface SkillContainerProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function SkillContainer({
  children,
  ...resProps
}: SkillContainerProps) {
  return <div>{children}</div>;
}
