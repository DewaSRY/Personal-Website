import { ComponentProps, PropsWithChildren } from "react";
import Paragraph from "@/components/common/paragraph";
import Heading from "@/components/common/heading";

import { cn } from "@/lib/utils";
import SkillCard from "../_components/skill-card";

import Image from "next/image";

interface SkillsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Skills({
  children,
  className,
  ...resProps
}: SkillsProps) {
  return (
    <section id="skills" className={cn("mt-4 mb-10", className)} {...resProps}>
      <Heading.H2 className="mx-6 underline">My Programming Skills</Heading.H2>
      <SkillCard.SkillContainer>
        {/* figma */}
        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/figma.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Image
              src="/skills/figma.png"
              width={300}
              height={200}
              alt="figma image"
            />
            <div>
              <Heading.H3>I am Good with Design</Heading.H3>
              <Paragraph.Description>
                I am really Good at Design one
              </Paragraph.Description>
              <ul className="mx-6">
                <Paragraph.List className="list-disc">do this</Paragraph.List>
              </ul>
            </div>
          </SkillCard.CardBody>
        </SkillCard.Cards>
        {/* angular */}
        <SkillCard.Cards>
          <SkillCard.CardIcon
            imageSrc="/icons/angular.png"
            imageAlter="figma"
          />
          <SkillCard.CardBody>
            <Image
              src="/skills/angular.png"
              width={300}
              height={200}
              alt="figma image"
            />
            <div>
              <Heading.H3>I am Good with React JS and next JS</Heading.H3>
              <Paragraph.Description>
                I am really Good at Design one
              </Paragraph.Description>
              <ul className="mx-6">
                <Paragraph.List className="list-disc">do this</Paragraph.List>
              </ul>
            </div>
          </SkillCard.CardBody>
        </SkillCard.Cards>
        {/* react */}
        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/react.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Image
              src="/skills/react.png"
              width={300}
              height={200}
              alt="figma image"
            />
            <div>
              <Heading.H3>I am Good with React JS and next JS</Heading.H3>
              <Paragraph.Description>
                I am really Good at Design one
              </Paragraph.Description>
              <ul className="mx-6">
                <Paragraph.List className="list-disc">do this</Paragraph.List>
              </ul>
            </div>
          </SkillCard.CardBody>
        </SkillCard.Cards>
        {/* vue */}
        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/vue.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Image
              src="/skills/vue.png"
              width={300}
              height={200}
              alt="figma image"
            />
            <div>
              <Heading.H3>I am Good with vue JS and next JS</Heading.H3>
              <Paragraph.Description>
                I am really Good at Design one
              </Paragraph.Description>
              <ul className="mx-6">
                <Paragraph.List className="list-disc">do this</Paragraph.List>
              </ul>
            </div>
          </SkillCard.CardBody>
        </SkillCard.Cards>
        {/* kubernetes */}
        <SkillCard.Cards>
          <SkillCard.CardIcon
            imageSrc="/icons/kubernetes.png"
            imageAlter="figma"
          />
          <SkillCard.CardBody>
            <Image
              src="/skills/kubernetes.png"
              width={300}
              height={200}
              alt="figma image"
            />
            <div>
              <Heading.H3>I am Good with kubernetes JS and next JS</Heading.H3>
              <Paragraph.Description>
                I am really Good at Design one
              </Paragraph.Description>
              <ul className="mx-6">
                <Paragraph.List className="list-disc">do this</Paragraph.List>
              </ul>
            </div>
          </SkillCard.CardBody>
        </SkillCard.Cards>
        {/* flask */}
        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/flask.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Image
              src="/skills/flask.png"
              width={300}
              height={200}
              alt="figma image"
            />
            <div>
              <Heading.H3>I am Good with flask JS and next JS</Heading.H3>
              <Paragraph.Description>
                I am really Good at Design one
              </Paragraph.Description>
              <ul className="mx-6">
                <Paragraph.List className="list-disc">do this</Paragraph.List>
              </ul>
            </div>
          </SkillCard.CardBody>
        </SkillCard.Cards>
        {/* spring */}
        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/spring.png" imageAlter="figma" />
          <SkillCard.CardBody>
            <Image
              src="/skills/spring.png"
              width={300}
              height={200}
              alt="figma image"
            />
            <div>
              <Heading.H3>I am Good with Backend Technology</Heading.H3>
              <Paragraph.Description>
                I am really Good at Design one
              </Paragraph.Description>
              <ul className="mx-6">
                <Paragraph.List className="list-disc">do this</Paragraph.List>
              </ul>
            </div>
          </SkillCard.CardBody>
        </SkillCard.Cards>
      </SkillCard.SkillContainer>
    </section>
  );
}
