import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import SmoothScroll from "@/components/smooth-scroll";

interface WorksProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Works({ children, ...resProps }: WorksProps) {
  return (
    <SmoothScroll.SmoothScrollSection sectionName="works">
      <div className="h-[100vh]">
        <Heading.H1>Work</Heading.H1>
      </div>
    </SmoothScroll.SmoothScrollSection>
  );
}
