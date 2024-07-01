"use client";
import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";
import Image from "next/image";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import WorkCard from "../_components/work-card";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { cn } from "@/lib/utils";

interface WorksProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Works({
  children,
  className,
  ...resProps
}: WorksProps) {
  const workContainer = useRef<ElementRef<"section">>(null);
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".work-card") as HTMLElement[];
      boxes.forEach((layer) => {
        gsap.to(layer, {
          x: 0,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: layer,
            start: "-100 bottom",
            end: "-100 center",
            scrub: true,
            toggleActions: "play pause reverse complete ",
            // markers: true,
          },
        });
      });
    },
    { scope: workContainer }
  );
  return (
    <section
      ref={workContainer}
      id="works"
      className={cn(className)}
      {...resProps}
    >
      <Heading.H2>Work Experience</Heading.H2>

      <WorkCard.WorkCard className="work-card transition-transform scale-0 translate-x-[-100%]">
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
      </WorkCard.WorkCard>

      <WorkCard.WorkCard className="work-card transition-transform scale-0 translate-x-[-100%]">
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
      </WorkCard.WorkCard>
    </section>
  );
}
