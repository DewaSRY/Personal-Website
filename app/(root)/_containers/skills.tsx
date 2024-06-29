import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
interface SkillsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Skills({ children, ...resProps }: SkillsProps) {
  return (
    <section id="skills">
      <div className="h-[100vh]">
        <Heading.H1>Skills</Heading.H1>
      </div>
    </section>
  );
}
