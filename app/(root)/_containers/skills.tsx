import { ComponentProps, PropsWithChildren } from "react";
import Paragraph from "@/components/common/paragraph";
import Heading from "@/components/common/heading";

import { cn } from "@/lib/utils";
import SkillCard from "../_components/skill-card-2";

import Image from "next/image";
interface SkillsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Skills({
  children,
  className,
  ...resProps
}: SkillsProps) {
  return (
    <section
      id="skills"
      className={cn("mt-4 py-[100px]", className)}
      {...resProps}
    >
      <SkillCard.SkillContainer>
        {/* figma */}
        <SkillCard.Cards>
          <SkillCard.CardIcon imageSrc="/icons/figma.png" imageAlter="Figma" />
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
            imageAlter="Angular"
          />
          <SkillCard.CardBody>
            <Image
              src="/skills/angular.png"
              width={300}
              height={200}
              alt="Angular image"
            />
            <div>
              <Heading.H3>I am Good with Angular</Heading.H3>
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
          <SkillCard.CardIcon imageSrc="/icons/react.png" imageAlter="React" />
          <SkillCard.CardBody>
            <Image
              src="/skills/react.png"
              width={300}
              height={200}
              alt="React image"
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
          <SkillCard.CardIcon imageSrc="/icons/vue.png" imageAlter="Vue" />
          <SkillCard.CardBody>
            <Image
              src="/skills/vue.png"
              width={300}
              height={200}
              alt="Vue image"
            />
            <div>
              <Heading.H3>I am Good with vue JS</Heading.H3>
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
            imageAlter="Kubernetes"
          />
          <SkillCard.CardBody>
            <Image
              src="/skills/kubernetes.png"
              width={300}
              height={200}
              alt="Kubernetes image"
            />
            <div>
              <Heading.H3>I am Good with kubernetes</Heading.H3>
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
          <SkillCard.CardIcon imageSrc="/icons/flask.png" imageAlter="Flask" />
          <SkillCard.CardBody>
            <Image
              src="/skills/flask.png"
              width={300}
              height={200}
              alt="Flask image"
            />
            <div>
              <Heading.H3>I am Good with flask </Heading.H3>
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
          <SkillCard.CardIcon
            imageSrc="/icons/spring.png"
            imageAlter="Spring"
          />
          <SkillCard.CardBody>
            <Image
              src="/skills/spring.png"
              width={300}
              height={200}
              alt="Spring image"
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
