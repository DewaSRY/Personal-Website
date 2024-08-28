import { ComponentProps, PropsWithChildren } from "react";

import ExperienceCard from "@/components/experience-card";
interface ExperienceCardsProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

const experience = [
  {
    title: "I am REVOU associate ",
    dec: "I Learn on Software engineer boot camp to hone my skill and make connections in the field and It's pretty cool, i love the boot camp ",
    date: "October 2023 to May 2024",
  },
  {
    title: "Full stack Developer",

    dec: "I work as full stack developer on Money Exchanger Business I help my friend to develop the business, make it beautiful and more secure to use.",
    date: "May 2024 to July 2024",
  },
  {
    title: "Frontend developer",
    dec: "I work as a front-end developer to develop a warehouse management system.  The system I developed is an enterprise level application. My friend asked me to join them on their team to work on their project, it's a big project so I joined to help and learn what they do on their business. It's a cool experience and it really expands my skill to the next level. ",
    date: "January 2023 to November 2023",
  },
];

export default function ExperienceCards({
  children,
  ...resProps
}: ExperienceCardsProps) {
  return (
    <div>
      {experience.map((exp, id) => (
        <ExperienceCard.Card>
          <ExperienceCard.Side sides={(id + 1) % 2 === 0 ? "left" : "right"}>
            <ExperienceCard.Body.Date>{exp.date}</ExperienceCard.Body.Date>
            <ExperienceCard.Body.Title>{exp.title}</ExperienceCard.Body.Title>
            <ExperienceCard.Body.Dec>{exp.dec}</ExperienceCard.Body.Dec>
          </ExperienceCard.Side>
        </ExperienceCard.Card>
      ))}
    </div>
  );
}
