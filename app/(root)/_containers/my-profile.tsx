import { ComponentProps, PropsWithChildren } from "react";

import AboutMe from "../_components/about-me";
import { cn } from "@/lib/utils";
import ProgrammingContainer from "../_content/programming-content";
import SkillContainer from "../_content/skill-content";

import Heading from "@/components/common/heading";

interface MyProfileProps extends ComponentProps<"div">, PropsWithChildren {}

export default function MyProfile({
  children,
  className,
  ...resProps
}: MyProfileProps) {
  return (
    <section
      id="my-profile"
      className={cn(" mx-auto bg-primary-one ", className)}
      {...resProps}
    >
      <AboutMe />
      <div className="w-11/12 xl:max-w-[1200px] mx-auto py-10">
        <Heading.H2 className="my-10">Programming Tool I Use</Heading.H2>
        <hr />
        <div className="grid  md:grid-cols-2 ">
          <ProgrammingContainer className="md:col-start-1 md:col-end-2" />
          <SkillContainer className="md:col-start-2 md:col-end-3" />
        </div>
      </div>
    </section>
  );
}
