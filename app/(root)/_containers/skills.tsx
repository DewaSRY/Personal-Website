import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";

import SkillCard from "../_components/skill-card";

interface SkillsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Skills({ children, ...resProps }: SkillsProps) {
  return (
    <section id="skills" className="h-[100vh]">
      <Heading.H2>My Programming Skills</Heading.H2>
      <SkillCard.SkillContainer>
        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/figma.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Heading.H4>I am Good with Design</Heading.H4>
            <Paragraph.Description>
              I am really Good at Design one
            </Paragraph.Description>
          </SkillCard.CardBody>
        </SkillCard.Cards>

        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/figma.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Heading.H4>I am Good with Design</Heading.H4>
            <Paragraph.Description>
              I am really Good at Design two
            </Paragraph.Description>
          </SkillCard.CardBody>
        </SkillCard.Cards>

        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/figma.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Heading.H4>I am Good with Design</Heading.H4>
            <Paragraph.Description>
              I am really Good at Design three
            </Paragraph.Description>
          </SkillCard.CardBody>
        </SkillCard.Cards>

        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/figma.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Heading.H4>I am Good with Design</Heading.H4>
            <Paragraph.Description>
              I am really Good at Design four
            </Paragraph.Description>
          </SkillCard.CardBody>
        </SkillCard.Cards>
      </SkillCard.SkillContainer>
    </section>
  );
}
