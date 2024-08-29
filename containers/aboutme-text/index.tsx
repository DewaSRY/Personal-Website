import { ComponentProps, PropsWithChildren } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
import Heading from "@/components/common/heading";
interface AboutMeTextProps extends ComponentProps<"div">, PropsWithChildren {}

const aboutMeTexts = [
  "I have extensive experience as a software engineer, with a strong foundation in both frontend and backend technologies. My journey in software engineering began when a friend invited me to join him on an exciting project, sparking my passion for the field. This initial exposure laid the groundwork for my future in the industry, where I have honed my skills and expanded my knowledge across various technologies.",
  "My first job was particularly challenging, as I was required to lead meetings in English, which is not my first language, while also improving my coding abilities. Despite these obstacles, I successfully led a team to build a microservice-based data management system for a warehouse, which included 68 services and two dashboards. We also updated the codebase to enhance user-friendliness and implemented a real-time CCTV system to bolster warehouse security. These experiences not only improved my technical skills but also strengthened my ability to navigate complex, real-world challenges.",
  "As I progressed in my career, I continued to deepen my expertise in both backend and frontend development, ultimately becoming a proficient full-stack developer. I am eager to continuously refine my skills and character while sharing my knowledge and expertise with teams and individuals beyond our field. Looking ahead, I am excited to contribute to innovative projects and help others grow in their technical journeys.",
];

export default function AboutMeText({
  children,
  className,
  ...resProps
}: AboutMeTextProps) {
  return (
    <>
      <div className="text-white">
        {aboutMeTexts.map((aboutMe, id) => (
          <Paragraph.Description className=" px-14 py-6">
            <span className="inline-block mr-4"></span> {aboutMe}
          </Paragraph.Description>
        ))}
      </div>
    </>
  );
}
