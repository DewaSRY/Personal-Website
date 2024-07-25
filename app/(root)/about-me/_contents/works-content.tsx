import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import WorkCard from "../_components/work-card";

import { cn } from "@/lib/utils";
interface WorksContentProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorksContent({
  children,
  className,
  ...resProps
}: WorksContentProps) {
  return (
    <div className={cn(className, "py-[20px]")} {...resProps}>
      <Heading.H2 className="underline text-center my-10">
        My Works Experience
      </Heading.H2>
      <WorkCard.Card>
        <WorkCard.Header>
          <Heading.H3>Full Stack Engineer</Heading.H3>
          <Paragraph.Date> February, 2024 - April, 2024</Paragraph.Date>
        </WorkCard.Header>
        <WorkCard.Body>
          <Paragraph.Description className="my-4">
            Develope Money Changer Application
          </Paragraph.Description>
          <WorkCard.Ul>
            <WorkCard.Li>
              Created a user-friendly money changer dashboard. Structured
              application UI components to make it easier to understand and
              interact with the application.
            </WorkCard.Li>
            <WorkCard.Li>
              Secured business transactions by integrating with local banks.
              Application collects and secure user data and checks user abnormal
              transaction history.
            </WorkCard.Li>
            <WorkCard.Li>
              Improved application security transactions with opaque refresh
              token system, proved to achieve a 200% improvement in security
              compared to JWT refresh tokens.
            </WorkCard.Li>
            <WorkCard.Li>
              Compressed application to minimize size without affecting the
              application functions. Containerized application small and secure
              images, success increase security and reduce container size by 80%
              compared to debian base image.
            </WorkCard.Li>
          </WorkCard.Ul>
        </WorkCard.Body>
      </WorkCard.Card>

      <WorkCard.Card>
        <WorkCard.Header>
          <Heading.H3>Frontend Engineer</Heading.H3>

          <Paragraph.Date> January,2023 - November, 2023</Paragraph.Date>
        </WorkCard.Header>
        <WorkCard.Body>
          <Paragraph.Description className="my-4">
            Warehouse Management System
          </Paragraph.Description>

          <WorkCard.Ul>
            <WorkCard.Li>
              Developed warehouse dashboard and monitor application,
              accomplished efficient inventory tracking by developing a
              warehouse management data system, resulting in improved monitoring
              of storage items.
            </WorkCard.Li>
            <WorkCard.Li>
              Integrated the application with CCTV video and maintained
              application performance by 80%, in high computing processes using
              webassembly.
            </WorkCard.Li>
            <WorkCard.Li>
              Improved usability by developed user-friendly interface enabling
              warehouse staff to easily operate the system.
            </WorkCard.Li>
            <WorkCard.Li>
              Facilitated application with quick access to critical information,
              ensuring warehouse operations were streamlined and effective.
            </WorkCard.Li>
          </WorkCard.Ul>
        </WorkCard.Body>
      </WorkCard.Card>
    </div>
  );
}
