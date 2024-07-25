import { ComponentProps, PropsWithChildren } from "react";
import WorkCard from "../_components/work-card";
import { cn } from "@/lib/utils";
interface WorkContentProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkContent({
  children,
  ...resProps
}: WorkContentProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-auto-fit-350 md:grid-cols-auto-fit-750 xl:grid-cols-auto-fit-350 gap-2",
        "px-2 xl:px-8 my-[64px]"
      )}
    >
      <WorkCard.Card>
        <WorkCard.Title>I am REVOU associate</WorkCard.Title>
        <WorkCard.Date>October 2023 - May 2024</WorkCard.Date>
        <WorkCard.Image imgSrc="/home-works/work-revou.png" imgAlt="work one" />
        <WorkCard.Body>
          I Learn on Software engineer bootcamp to hone my skill and make
          connections in the field and It ss pretty cool, i love the bootcamp
        </WorkCard.Body>
      </WorkCard.Card>
      <WorkCard.Card>
        <WorkCard.Title>Full stack Developer</WorkCard.Title>
        <WorkCard.Date>May 2024 - July 2024</WorkCard.Date>
        <WorkCard.Image
          imgSrc="/home-works/work-money-exchanger.png"
          imgAlt="work one"
        />
        <WorkCard.Body>
          I work as full stack developer on Money Exchanger Business I help my
          friend to develop the business, make it beautiful and more secure to
          use.
        </WorkCard.Body>
      </WorkCard.Card>
      <WorkCard.Card>
        <WorkCard.Title>Frontend developer</WorkCard.Title>
        <WorkCard.Date>January 2023 - November 2023</WorkCard.Date>
        <WorkCard.Image
          imgSrc="/home-works/work-dashboard.png"
          imgAlt="work one"
        />
        <WorkCard.Body>
          I work as a front-end developer to develop a warehouse management
          system. The system I developed is an enterprise level application. My
          friend asked me to join them on their team to work on their project,
          it&apos;s a big project so I joined to help and learn what they do on
          their business. It&apos;s a cool experience and it really expands my
          skill to the next level.
        </WorkCard.Body>
      </WorkCard.Card>
    </div>
  );
}
