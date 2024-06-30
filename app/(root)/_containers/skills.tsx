import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import SmoothScroll from "@/components/smooth-scroll";

interface SkillsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Skills({ children, ...resProps }: SkillsProps) {
  return (
    <SmoothScroll.SmoothScrollSection sectionName="skills">
      <div className="h-[100vh]">
        <Heading.H1>Skills</Heading.H1>
      </div>
    </SmoothScroll.SmoothScrollSection>
  );
}
