import { ComponentProps, PropsWithChildren } from "react";
import SkillCard from "../_components/skill-card";
import { cn } from "@/lib/utils";
interface SkillsContentProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SkillsContent({
  children,
  className,
  ...resProps
}: SkillsContentProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-auto-fit-350 md:grid-cols-auto-fit-750 xl:grid-cols-auto-fit-350 gap-2",
        "px-2 xl:px-8 my-[64px]",
        "pt-[180px] pb-[300px] rounded-br-[500px] bg-primary-two",
        className
      )}
    >
      <SkillCard.Card>
        <SkillCard.Title>I can Do Frontend</SkillCard.Title>
        <SkillCard.Image
          imgSrc="/my-skill/my-skill-one.png"
          imgAlt="my-skill-one"
        />
        <SkillCard.Body>
          Frontend is my signature skill in programming. Fronted development is
          the first professional job I have and I will love to help you with my
          skill.
        </SkillCard.Body>
      </SkillCard.Card>
      <SkillCard.Card>
        <SkillCard.Title>I can do backend</SkillCard.Title>
        <SkillCard.Image
          imgSrc="/my-skill/my-skill-two.png"
          imgAlt="my-skill-one"
        />
        <SkillCard.Body>
          I am pretty good with the backend. I am still sharpening my backend
          skills. The hardest project I have on the backend is to make email
          manager system where I need to do validation via email. I don't have a
          professional job on the backend, but I will do my best if I have one.
        </SkillCard.Body>
      </SkillCard.Card>
      <SkillCard.Card>
        <SkillCard.Title>I can do a little bit of design. </SkillCard.Title>
        <SkillCard.Image
          imgSrc="/my-skill/my-skill-three.png"
          imgAlt="my-skill-one"
        />
        <SkillCard.Body>
          I can do a little bit of design. i need to design for my personal
          project, maybe i might not be the best person to do design you can
          see. but might be i can help
        </SkillCard.Body>
      </SkillCard.Card>
    </div>
  );
}
