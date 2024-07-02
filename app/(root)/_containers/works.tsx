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
      <Heading.H2 className="mx-6 underline">Work Experience</Heading.H2>

      <WorkCard.WorkCard className="work-card transition-transform scale-0 translate-x-[-100%]">
        <Heading.H3>Full Stack Engineer</Heading.H3>
        <Paragraph.Description>
          Develope Money Changer Application
        </Paragraph.Description>
        <Paragraph.Date> February, 2024 - April, 2024</Paragraph.Date>
        <WorkCard.WorkBody>
          <Image
            src="/works/money_exchanger_1.png"
            width={400}
            height={250}
            alt="warehouse_dumy"
          />
          <WorkCard.WorkUl>
            <WorkCard.WorkLi>
              Created a user-friendly money changer dashboard. Structured
              application UI components to make it easier to understand and
              interact with the application.
            </WorkCard.WorkLi>
            <WorkCard.WorkLi>
              Secured business transactions by integrating with local banks.
              Application collects and secure user data and checks user abnormal
              transaction history.
            </WorkCard.WorkLi>
            <WorkCard.WorkLi>
              Improved application security transactions with opaque refresh
              token system, proved to achieve a 200% improvement in security
              compared to JWT refresh tokens.
            </WorkCard.WorkLi>
            <WorkCard.WorkLi>
              Compressed application to minimize size without affecting the
              application functions. Containerized application small and secure
              images, success increase security and reduce container size by 80%
              compared to debian base image.
            </WorkCard.WorkLi>
          </WorkCard.WorkUl>
        </WorkCard.WorkBody>
      </WorkCard.WorkCard>

      <WorkCard.WorkCard className="work-card transition-transform scale-0 translate-x-[-100%]">
        <Heading.H3>Frontend Engineer</Heading.H3>
        <Paragraph.Description>
          Warehouse Management System
        </Paragraph.Description>
        <Paragraph.Date> January,2023 - November, 2023</Paragraph.Date>
        <WorkCard.WorkBody>
          <Image
            src="/works/warehouse_dumy.png"
            width={400}
            height={250}
            alt="warehouse_dumy"
          />
          <WorkCard.WorkUl>
            <WorkCard.WorkLi>
              Developed warehouse dashboard and monitor application,
              accomplished efficient inventory tracking by developing a
              warehouse management data system, resulting in improved monitoring
              of storage items.
            </WorkCard.WorkLi>
            <WorkCard.WorkLi>
              Integrated the application with CCTV video and maintained
              application performance by 80%, in high computing processes using
              webassembly.
            </WorkCard.WorkLi>
            <WorkCard.WorkLi>
              Improved usability by developed user-friendly interface enabling
              warehouse staff to easily operate the system.
            </WorkCard.WorkLi>
            <WorkCard.WorkLi>
              Facilitated application with quick access to critical information,
              ensuring warehouse operations were streamlined and effective.
            </WorkCard.WorkLi>
          </WorkCard.WorkUl>
        </WorkCard.WorkBody>
      </WorkCard.WorkCard>
    </section>
  );
}
