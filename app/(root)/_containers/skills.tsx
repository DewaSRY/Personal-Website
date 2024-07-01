import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";

import SkillCard from "../_components/skill-card";
import { cn } from "@/lib/utils";

interface SkillsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Skills({
  children,
  className,
  ...resProps
}: SkillsProps) {
  return (
    <section
      id="skills"
      className={cn("min-h-[100vh]  my-4", className)}
      {...resProps}
    >
      <Heading.H2>My Programming Skills</Heading.H2>
      <SkillCard.SkillContainer>
        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/figma.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Heading.H3>I am Good with Design</Heading.H3>
            <Paragraph.Description>
              I am really Good at Design one
            </Paragraph.Description>
          </SkillCard.CardBody>
        </SkillCard.Cards>
      </SkillCard.SkillContainer>
    </section>
  );
}
