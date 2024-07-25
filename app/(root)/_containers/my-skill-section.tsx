import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";

import SkillsContent from "../_contents/skills-content";
interface MySkillSectionProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function MySkillSection({
  children,
  ...resProps
}: MySkillSectionProps) {
  return (
    <section className="relative my-[128px]">
      <Heading.H2 className="text-white-one px-2">
        There is my programming Skill
      </Heading.H2>
      <Heading.Quote className="text-white-three px-2">
        I Still hound my programming skill, because I love it
      </Heading.Quote>
      <SkillsContent className="" />
    </section>
  );
}
