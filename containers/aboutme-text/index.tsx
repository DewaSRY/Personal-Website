import { ComponentProps, PropsWithChildren } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
interface AboutMeTextProps extends ComponentProps<"div">, PropsWithChildren {}

const aboutMeTexts = [
  "I have extensive experience as a software engineer, with a strong foundation in both frontend and backend technologies.",
  "My journey in software engineering began when a friend invited me to join him on an exciting project.",
  "My first job was challenging. I had to lead meetings in English, which was tough because it's not my first language, and my coding skills were still improving. Despite this, our team managed to build a microservice-based data management system for a warehouse with 68 services and two dashboards. We updated the codebase to make it more user-friendly and added a real-time CCTV system to improve warehouse security.",
  "As I progressed in my career, I delved deeper into various software technologies, enhancing my skills in both backend and frontend development, ultimately becoming a proficient full stack developer.",
  "Looking ahead, I am eager to continuously refine my skills and character while sharing my knowledge and expertise with teams and individuals beyond our field.",
];

export default function AboutMeText({
  children,
  className,
  ...resProps
}: AboutMeTextProps) {
  return (
    <Accordion
      type="single"
      defaultValue="value-0"
      className={cn(className, " text-white")}
    >
      {aboutMeTexts.map((aboutMe, id) => (
        <AccordionItem key={id} value={`value-${id}`}>
          <AccordionTrigger />

          <AccordionContent>
            <Paragraph.Description>{aboutMe}</Paragraph.Description>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
