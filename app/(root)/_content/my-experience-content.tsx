import { ComponentProps, PropsWithChildren } from "react";
import ProgrammingContainer from "./programming-content";
import SkillContainer from "./skill-content";

import Heading from "@/components/common/heading";
import { cn } from "@/lib/utils";

interface MyExperienceContentProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function MyExperienceContent({
  children,
  ...resProps
}: MyExperienceContentProps) {
  return (
    <div
      className={cn("w-11/12 xl:max-w-[1200px]  mx-auto py-10", "h-[150vh]")}
    >
      <Heading.H2 className="my-10">Programming Tool I Use</Heading.H2>
      <hr />
      <div className="grid md:grid-cols-auto-fit-max-600 w-full ">
        <ProgrammingContainer className="md:col-start-1 md:col-end-2" />
        <SkillContainer className="md:col-start-2 md:col-end-3" />
      </div>
    </div>
  );
}
