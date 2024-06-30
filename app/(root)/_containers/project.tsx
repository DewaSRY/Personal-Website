import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import SmoothScroll from "@/components/smooth-scroll";

interface ProjectProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Project({ children, ...resProps }: ProjectProps) {
  return (
    <SmoothScroll.SmoothScrollSection sectionName="projects">
      <div className="h-[100vh]">
        <Heading.H1>Project</Heading.H1>
      </div>
    </SmoothScroll.SmoothScrollSection>
  );
}
