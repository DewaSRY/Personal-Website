import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";
import SkillCard from "../_components/skill-card";
import Heading from "@/components/common/heading";
interface SkillContainerProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function SkillContainer({
  children,
  className,
  ...resProps
}: SkillContainerProps) {
  return (
    <div className={cn(className, "mt-[50px]")} {...resProps}>
      <SkillCard.Card>
        <Heading.H3>Frontend Developer</Heading.H3>
        <hr />
        <SkillCard.CardBody>
          <SkillCard.Icons imageAlt="angular" imageSrc="/icons/angular.png" />
          <SkillCard.Icons imageAlt="react" imageSrc="/icons/react.png" />
          <SkillCard.Icons imageAlt="vue" imageSrc="/icons/vue.png" />
        </SkillCard.CardBody>
      </SkillCard.Card>

      <SkillCard.Card>
        <Heading.H3>Backend Developer</Heading.H3>
        <hr />
        <SkillCard.CardBody>
          <SkillCard.Icons imageAlt="django" imageSrc="/icons/django.png" />
          <SkillCard.Icons imageAlt="flask" imageSrc="/icons/flask.png" />
          <SkillCard.Icons imageAlt="spring" imageSrc="/icons/spring.png" />
          <SkillCard.Icons imageAlt="express" imageSrc="/icons/express.png" />
        </SkillCard.CardBody>
      </SkillCard.Card>

      <SkillCard.Card>
        <Heading.H3>Other tools</Heading.H3>
        <hr />
        <SkillCard.CardBody>
          <SkillCard.Icons imageAlt="node" imageSrc="/icons/node.png" />
          <SkillCard.Icons imageAlt="figma" imageSrc="/icons/figma.png" />
          <SkillCard.Icons imageAlt="docker" imageSrc="/icons/react.png" />
          <SkillCard.Icons
            imageAlt="kubernetes"
            imageSrc="/icons/kubernetes.png"
          />
        </SkillCard.CardBody>
      </SkillCard.Card>
    </div>
  );
}
