import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import SmoothScroll from "@/components/smooth-scroll";

interface ProfileProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Profile({ children, ...resProps }: ProfileProps) {
  return (
    <SmoothScroll.SmoothScrollSection sectionName="profile">
      <div className="h-[100vh]">
        <Heading.H1>Profile</Heading.H1>
      </div>
    </SmoothScroll.SmoothScrollSection>
  );
}
