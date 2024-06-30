import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import WorkCard from "../_components/work-card";

interface WorksProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Works({ children, ...resProps }: WorksProps) {
  return (
    <section id="works">
      <Heading.H2>Work Experience</Heading.H2>
      <WorkCard.WorkContainer>
        <Heading.H3>Freelance Frontend Developer</Heading.H3>
        <Paragraph.Description>
          Angular-Base warehouse data management system
        </Paragraph.Description>
        <Paragraph.Date>January,2023-November, 2023</Paragraph.Date>
        <WorkCard.WorkBody>
          <Image
            src="/works/money_exchanger_1.png"
            width={400}
            height={250}
            alt="warehouse_dumy"
          />
          <WorkCard.WorkUl>
            <WorkCard.WorkLi>i have do this one</WorkCard.WorkLi>
            <WorkCard.WorkLi>i have do this one</WorkCard.WorkLi>
            <WorkCard.WorkLi>i have do this one</WorkCard.WorkLi>
            <WorkCard.WorkLi>i have do this one</WorkCard.WorkLi>
          </WorkCard.WorkUl>
        </WorkCard.WorkBody>
      </WorkCard.WorkContainer>
      <WorkCard.WorkContainer>
        <Heading.H3>Freelance Frontend Developer</Heading.H3>
        <Paragraph.Description>
          Angular-Base warehouse data management system
        </Paragraph.Description>
        <Paragraph.Date>January,2023-November, 2023</Paragraph.Date>
        <WorkCard.WorkBody>
          <Image
            src="/works/warehouse_dumy.png"
            width={400}
            height={250}
            alt="warehouse_dumy"
          />
          <WorkCard.WorkUl>
            <WorkCard.WorkLi>i have do this one</WorkCard.WorkLi>
            <WorkCard.WorkLi>i have do this one</WorkCard.WorkLi>
            <WorkCard.WorkLi>i have do this one</WorkCard.WorkLi>
            <WorkCard.WorkLi>i have do this one</WorkCard.WorkLi>
          </WorkCard.WorkUl>
        </WorkCard.WorkBody>
      </WorkCard.WorkContainer>
    </section>
  );
}